<?php
    CModule::AddAutoloadClasses(
        '',
        [
            "Site"                     => "/local/php_interface/classes/Site.php",
            "CatalogClass"             => "/local/php_interface/classes/CatalogClass.php",
            "GeoIp"                    => "/local/php_interface/classes/GeoIp.php",
            "User"                     => "/local/php_interface/classes/User.php",
            'CUtilCustom'              => "/local/php_interface/classes/CUtilCustom.php",
            "OrderClass"               => "/local/php_interface/classes/OrderClass.php",
            "ElementStringDescription" => "/local/php_interface/classes/ElementStringDescription.php",
        ]
    );

    AddEventHandler("currency", "CurrencyFormat", "customFormat");

    function customFormat($fSum, $strCurrency)
    {
        return number_format($fSum, 0, '', ' ') . ' ₽';
    }

    \Bitrix\Main\EventManager::getInstance()->addEventHandler(
        "iblock",
        "OnIBlockPropertyBuildList",
        [
            'ElementStringDescription',
            'GetUserTypeDescription',
        ]
    );

    \Bitrix\Main\EventManager::getInstance()->addEventHandler(
        "iblock",
        "OnAfterIBlockElementUpdate",
        [
            'Site',
            'getJsonDates',
        ]
    );

    \Bitrix\Main\EventManager::getInstance()->addEventHandler(
        "iblock",
        "OnAfterIBlockElementAdd",
        [
            'Site',
            'getJsonDates',
        ]
    );

    \Bitrix\Main\EventManager::getInstance()->addEventHandler(
        "iblock",
        "OnAfterIBlockElementDelete",
        [
            'Site',
            'getJsonDates',
        ]
    );

AddEventHandler("sale", "OnSalePayOrder", "UpdateDiscountGroup");

function GetGroupByCode ($code) {
    $rsGroups = CGroup::GetList ($by = "c_sort", $order = "asc", Array ("STRING_ID" => $code));
    while($tmp = $rsGroups->Fetch()){
        $return_ar[] = $tmp["ID"];
    }

    return $return_ar;
}

function UpdateDiscountGroup($ID, $val){
    CModule::IncludeModule("catalog");

    // Ïîëó÷àåì èíôîðìàöè ïî çàêàçó
    $arOrder = CSaleOrder::GetByID($ID);

    // Ïîëó÷àåì íîìåð ãðóïïû áîíóñîâ
    $bonusSystemGroup = GetGroupByCode("BONUS_SYSTEM");

    // Ïîëó÷àåì âñå áîíóñíûå ãðóïïû
    $allBonusGroups = GetGroupByCode("BONUS_SYSTEM|BONUS_SYSTEM_1|BONUS_SYSTEM_2|BONUS_SYSTEM_3|BONUS_SYSTEM_4|BONUS_SYSTEM_5|BONUS_SYSTEM_6|BONUS_SYSTEM_7");

    // Ïîëó÷àåì ãðóïïû â êîòîðûõ ñîñòîèò ïîëüçîâàòåëü
    $userGroups = CUser::GetUserGroup($arOrder["USER_ID"]);

    //Î÷èùàåì îò óæå óñòàíîâëåííûõ áîíóñíûõ ãðóïï
    foreach($allBonusGroups as $bonusGroup){
        foreach($userGroups as $key => $userGroup){
            if($bonusGroup == $userGroup){
                unset($userGroups[$key]);
            }
        }
    }

    // Îïðåäåëÿåì íàëè÷èå íàêîïèòåëüíîé ñêèäêè
    $accumulativeDiscAr = CCatalogDiscountSave::GetDiscount(array("USER_ID" => $arOrder["USER_ID"], "SITE_ID" => "s1"));
    if((int)$accumulativeDiscAr[0]["VALUE"] > 0){
        // Ïîëó÷àåì íîìåð ãðóïïû áîíóñîâ c %
        $bonusSystemGroupPerc = GetGroupByCode("BONUS_SYSTEM_".(int)$accumulativeDiscAr[0]["VALUE"]);

        // Åñòü íàêîïèòåëüíàÿ ñêèäêà
        CUser::SetUserGroup($arOrder["USER_ID"], array_merge($userGroups, $bonusSystemGroup, $bonusSystemGroupPerc));
    }else{

        CUser::SetUserGroup($arOrder["USER_ID"], $userGroups);
    }


    /*$file='/home/1.tdprofnastil.ru/www/bitrix/php_interface/debug.txt';
    //åñëè ôàéëà íåòó... òîãäà
    if(!file_exists($file)) {
        $fp = fopen($file, "w");
        fclose (fp);
    }
    file_put_contents($file, var_export((float)$accumulativeDiscAr["VALUE"], true), FILE_APPEND);*/
}

//define("LOG_FILENAME", $_SERVER["DOCUMENT_ROOT"]."/smtp-log.txt");
/*Version 0.3 2011-04-25*/
AddEventHandler("iblock", "OnAfterIBlockElementUpdate", "DoIBlockAfterSave");
AddEventHandler("iblock", "OnAfterIBlockElementAdd", "DoIBlockAfterSave");
AddEventHandler("catalog", "OnPriceAdd", "DoIBlockAfterSave");
AddEventHandler("catalog", "OnPriceUpdate", "DoIBlockAfterSave");
function DoIBlockAfterSave($arg1, $arg2 = false)
{
    $ELEMENT_ID = false;
    $IBLOCK_ID = false;
    $OFFERS_IBLOCK_ID = false;
    $OFFERS_PROPERTY_ID = false;
    if (CModule::IncludeModule('currency'))
        $strDefaultCurrency = CCurrency::GetBaseCurrency();

    //Check for catalog event
    if(is_array($arg2) && $arg2["PRODUCT_ID"] > 0)
    {
        //Get iblock element
        $rsPriceElement = CIBlockElement::GetList(
            array(),
            array(
                "ID" => $arg2["PRODUCT_ID"],
            ),
            false,
            false,
            array("ID", "IBLOCK_ID")
        );
        if($arPriceElement = $rsPriceElement->Fetch())
        {
            $arCatalog = CCatalog::GetByID($arPriceElement["IBLOCK_ID"]);
            if(is_array($arCatalog))
            {
                //Check if it is offers iblock
                if($arCatalog["OFFERS"] == "Y")
                {
                    //Find product element
                    $rsElement = CIBlockElement::GetProperty(
                        $arPriceElement["IBLOCK_ID"],
                        $arPriceElement["ID"],
                        "sort",
                        "asc",
                        array("ID" => $arCatalog["SKU_PROPERTY_ID"])
                    );
                    $arElement = $rsElement->Fetch();
                    if($arElement && $arElement["VALUE"] > 0)
                    {
                        $ELEMENT_ID = $arElement["VALUE"];
                        $IBLOCK_ID = $arCatalog["PRODUCT_IBLOCK_ID"];
                        $OFFERS_IBLOCK_ID = $arCatalog["IBLOCK_ID"];
                        $OFFERS_PROPERTY_ID = $arCatalog["SKU_PROPERTY_ID"];
                    }
                }
                //or iblock which has offers
                elseif($arCatalog["OFFERS_IBLOCK_ID"] > 0)
                {
                    $ELEMENT_ID = $arPriceElement["ID"];
                    $IBLOCK_ID = $arPriceElement["IBLOCK_ID"];
                    $OFFERS_IBLOCK_ID = $arCatalog["OFFERS_IBLOCK_ID"];
                    $OFFERS_PROPERTY_ID = $arCatalog["OFFERS_PROPERTY_ID"];
                }
                //or it's regular catalog
                else
                {
                    $ELEMENT_ID = $arPriceElement["ID"];
                    $IBLOCK_ID = $arPriceElement["IBLOCK_ID"];
                    $OFFERS_IBLOCK_ID = false;
                    $OFFERS_PROPERTY_ID = false;
                }
            }
        }
    }
    //Check for iblock event
    elseif(is_array($arg1) && $arg1["ID"] > 0 && $arg1["IBLOCK_ID"] > 0)
    {
        //Check if iblock has offers
        $arOffers = CIBlockPriceTools::GetOffersIBlock($arg1["IBLOCK_ID"]);
        if(is_array($arOffers))
        {
            $ELEMENT_ID = $arg1["ID"];
            $IBLOCK_ID = $arg1["IBLOCK_ID"];
            $OFFERS_IBLOCK_ID = $arOffers["OFFERS_IBLOCK_ID"];
            $OFFERS_PROPERTY_ID = $arOffers["OFFERS_PROPERTY_ID"];
        }
    }

    if($ELEMENT_ID)
    {
        static $arPropCache = array();
        if(!array_key_exists($IBLOCK_ID, $arPropCache))
        {
            //Check for MINIMAL_PRICE property
            $rsProperty = CIBlockProperty::GetByID("MINIMUM_PRICE", $IBLOCK_ID);
            $arProperty = $rsProperty->Fetch();
            if($arProperty)
                $arPropCache[$IBLOCK_ID] = $arProperty["ID"];
            else
                $arPropCache[$IBLOCK_ID] = false;
        }

        if($arPropCache[$IBLOCK_ID])
        {
            //Compose elements filter
            if($OFFERS_IBLOCK_ID)
            {
                $rsOffers = CIBlockElement::GetList(
                    array(),
                    array(
                        "IBLOCK_ID" => $OFFERS_IBLOCK_ID,
                        "PROPERTY_".$OFFERS_PROPERTY_ID => $ELEMENT_ID,
                    ),
                    false,
                    false,
                    array("ID")
                );
                while($arOffer = $rsOffers->Fetch())
                    $arProductID[] = $arOffer["ID"];

                if (!is_array($arProductID))
                    $arProductID = array($ELEMENT_ID);
            }
            else
                $arProductID = array($ELEMENT_ID);

            $minPrice = false;
            $maxPrice = false;
            //Get prices
            $rsPrices = CPrice::GetList(
                array(),
                array(
                    "PRODUCT_ID" => $arProductID,
                )
            );
            while($arPrice = $rsPrices->Fetch())
            {
                if (CModule::IncludeModule('currency') && $strDefaultCurrency != $arPrice['CURRENCY'])
                    $arPrice["PRICE"] = CCurrencyRates::ConvertCurrency($arPrice["PRICE"], $arPrice["CURRENCY"], $strDefaultCurrency);

                $PRICE = $arPrice["PRICE"];

                if($minPrice === false || $minPrice > $PRICE)
                    $minPrice = $PRICE;

                if($maxPrice === false || $maxPrice < $PRICE)
                    $maxPrice = $PRICE;
            }

            //Save found minimal price into property
            if($minPrice !== false)
            {
                CIBlockElement::SetPropertyValuesEx(
                    $ELEMENT_ID,
                    $IBLOCK_ID,
                    array(
                        "MINIMUM_PRICE" => $minPrice,
                        "MAXIMUM_PRICE" => $maxPrice,
                    )
                );
            }
        }
    }
}
//отправка письма

AddEventHandler('sale', 'OnOrderNewSendEmail', array('CSendOrderTable', 'OnOrderNewSendEmailHandler'));
class CSendOrderTable {
    public static function OnOrderNewSendEmailHandler($ID, &$eventName, &$arFields) {
        if ($ID>0 && CModule::IncludeModule('iblock')) {
            $arFields['ORDER_LIST'] = '<table cellpadding="5" cellspacing="5">';
            $rsBasket = CSaleBasket::GetList(array(), array('ORDER_ID' => $ID));
            while ($arBasket = $rsBasket->GetNext()) {
                $arPicture = false;
                //мы берем картинку только если это товар из инфоблока
                if ($arBasket['MODULE'] == 'catalog') {
                    if ($arProduct = CIBlockElement::GetByID($arBasket['PRODUCT_ID'])->Fetch()) {
                        if ($arProduct['PREVIEW_PICTURE'] > 0) {
                            $fileID = $arProduct['PREVIEW_PICTURE'];
                        } elseif ($arProduct['DETAIL_PICTURE'] > 0) {
                            $fileID = $arProduct['DETAIL_PICTURE'];
                        } else {
                            $fileID = 0;
                        }
                        $arPicture = CFile::ResizeImageGet($fileID, array('width' => 130, 'height' => 130));
                        $arPicture['SIZE'] = getimagesize($_SERVER['DOCUMENT_ROOT'].$arPicture['src']);
                    }
                }
                $arFields['ORDER_LIST'] .= '<tr valign="center">'
                    . '<td>'.($arPicture ? '<img src="http://'.$GLOBALS['SERVER_NAME'].(str_replace(array('+', ' '), '%20', $arPicture['src'])).'" width="'.$arPicture['SIZE'][0].'" height="'.$arPicture['SIZE'][1].'" alt="">' : '').'</td>'
                    . '<td>'.$arBasket['NAME'].'</td>'
                    . '<td style="white-space: nowrap">'.(int)$arBasket['QUANTITY'].' шт.</td>'
                    . '<td style="white-space: nowrap">'.SaleFormatCurrency($arBasket['PRICE'], $arBasket['CURRENCY']).'</td>'
                    . '</tr>';
            }
            $arFields['ORDER_LIST'] .= '</table>';
        }
    }
}

AddEventHandler("sale", "OnOrderNewSendEmail", "modifySendingSaleData");
function modifySendingSaleData($orderID, &$eventName, &$arFields) {
    // инициализируем переменные
    $name = '';
    $lastName = '';
    $fullName = '';
    $phone = '';
    $phone2 = '';
    $zip = '';
    $countryName = '';
    $obl = '';
    $cityName = '';
    $address = '';
    $deliveryName = '';
    $paySystemName = '';
    $price = '';
    $personTypeName = '';

    // получаем параметры заказа по ID
    $arOrder = CSaleOrder::GetByID($orderID);

    // получаем свойства заказа
    $orderProps = CSaleOrderPropsValue::GetOrderProps($orderID);

    // проходим циклом по всем свойствам и вытаскиваем нужные нам
    while ($arProps = $orderProps->Fetch()) {
        // телефон
        if ($arProps['CODE'] == 'PHONE') {
            $phone = htmlspecialchars($arProps['VALUE']);
        }
        // телефон_2
        if ($arProps['CODE'] == 'PHONE2') {
            $phone2 = htmlspecialchars($arProps['VALUE']);
        }
        // страну, область, город,
        // if ($arProps['CODE'] == 'LOCATION') {
        //     // если не перешли на местоположения 2.0
        //     $arLocs = CSaleLocation::GetByID($arProps['VALUE']);
        //     // если перешли на местоположения 2.0 раскомментируйте следующую строку
        //     //  и закомментируйте строчку выше
        //     //$arLocs = CSaleLocation::GetByID(CSaleLocation::getLocationIDbyCODE($arProps['VALUE']));
        //     $countryName = $arLocs['COUNTRY_NAME_LANG'];
        //     $obl = $arLocs['REGION_NAME_LANG'];
        //     $cityName = $arLocs['CITY_NAME_LANG'];
        // }
        // индекс
        // if ($arProps['CODE'] == 'ZIP'){
        //     $zip = $arProps['VALUE'];
        // }
        // адрес
        if ($arProps['CODE'] == 'CITY') {
            $address = $arProps['VALUE'];
        }
        // имя
        if ($arProps['CODE'] == 'FIRSTNAME') {
            $name = $arProps['VALUE'];
        }
        // фамилия
        if ($arProps['CODE'] == 'LASTNAME') {
            $lastName = $arProps['VALUE'];
        }
    }

    $fullName = $lastName .' ' . $name;
    $fullAddress = $address;
    // получаем название службы доставки
    $arDeliv = CSaleDelivery::GetByID($arOrder['DELIVERY_ID']);
    if ($arDeliv['NAME'] == "Доставка фургоном") {
        $deliveryName = "Фургон";
    }
    if ($arDeliv['NAME'] == "Кран-Балка"){
        $deliveryName = "Кран-балка";
    }
    // $arPersonType =  CSalePersonType::GetByID($arOrder['PERSON_TYPE_ID']);
    // if ($arPersonType['NAME']=="Доставка фургоном"){
    //     	 $personTypeName = "Фургон";
    //     }
    //       if ($arPersonType['NAME']=="Кран-Балка"){
    //     	 $personTypeName = "Кран-балкой";
    //     }

    // получаем название платежной системы
    $arPaySystem = CSalePaySystem::GetByID($arOrder['PAY_SYSTEM_ID']);
    if ($arPaySystem['NAME']=="Оплата наличными") {
        $paySystemName = "Наличный расчет";
    }
    if ($arPaySystem['NAME']=="Оплата по терминалу"){
        $paySystemName = "По терминалу";
    }
    if ($arPaySystem['NAME']=="Онлайн оплата"){
        $paySystemName = "Онлайн";
    }
    // добавляем полученные значения в результирующий массив
    $arFields['ORDER_DESCRIPTION'] = $arOrder['USER_DESCRIPTION'];
    $arFields['USER_FULL_NAME'] = $fullName;
    $arFields['PHONE'] = $phone;
    $arFields['PHONE2'] = $phone2;
    $arFields['DELIVERY_NAME'] = $deliveryName;
    $arFields["DELIVERY_PRICE"] =  $arOrder["PRICE_DELIVERY"];
    $arFields['PAY_SYSTEM_NAME'] = $paySystemName;
    $arFields['FULL_ADDRESS'] = $fullAddress;
    $arFields['PERSON_TYPE'] = $personTypeName;
}
//Удаление брошенных корзин пользователей
function deleteOldBaskets($nDays)
{
    global $DB;

    $nDays = IntVal($nDays);
    $strSql =
        "SELECT ID ".
        "FROM b_sale_fuser ".
        //от даты обновления корзины
        //"WHERE TO_DAYS(DATE_UPDATE)<(TO_DAYS(NOW())-".$nDays.") LIMIT 300";
        //от даты создания корзины
        "WHERE TO_DAYS(DATE_INSERT)<(TO_DAYS(NOW())-".$nDays.") LIMIT 300";
    $db_res = $DB->Query($strSql, false, "File: ".__FILE__."<br>Line: ".__LINE__);
    if (!CModule::IncludeModule("sale")) return;
    while ($ar_res = $db_res->Fetch())
    {

        CSaleBasket::DeleteAll($ar_res["ID"], false);
        CSaleUser::Delete($ar_res["ID"]);
    }
    return true;
}

//deleteOldBaskets(60);
//удаление мусора в товарах
function deleteProductSt(){
    if(CModule::IncludeModule('iblock')) {
        $arSort= Array("TIMESTAMP_X"=>"ASC");
        $arSelect = Array("ID","NAME", "PROPERTY_CML2_TRAITS", "TIMESTAMP_X","DETAIL_PAGE_URL","CATALOG_QUANTITY");
        $arFilter = Array("IBLOCK_ID" =>86, "ACTIVE"=>"Y");
        $objDateTime = new DateTime();
        $arFilter['>=TIMESTAMP_X'] = '01.01.2020 00:00:00';
        $arFilter['<TIMESTAMP_X'] = $objDateTime->format("d.m.Y");
        $res =  CIBlockElement::GetList($arSort, $arFilter, false, false, $arSelect);
        while($ob = $res->GetNextElement()){
            $arFields = $ob->GetFields();
            if ($arFields['CATALOG_QUANTITY']<=250) {
                $el = new CIBlockElement;
                $ElementArray = Array("ACTIVE" => "N",);
                $el->Update($arFields['ID'], $ElementArray);
            }
        }
    }
    return "deleteProductSt();";
}
function deleteProductEl(){
    if(CModule::IncludeModule('iblock')) {
        $arSort= Array("TIMESTAMP_X"=>"ASC");
        $arSelect = Array("ID","NAME", "PROPERTY_CML2_TRAITS", "TIMESTAMP_X","DETAIL_PAGE_URL","CATALOG_QUANTITY");
        $arFilter = Array("IBLOCK_ID" =>87, "ACTIVE"=>"Y");
        $objDateTime = new DateTime();
        $arFilter['>=TIMESTAMP_X'] = '01.01.2020 00:00:00';
        $arFilter['<TIMESTAMP_X'] = $objDateTime->format("d.m.Y");
        $res =  CIBlockElement::GetList($arSort, $arFilter, false, false, $arSelect);
        while($ob = $res->GetNextElement()){
            $arFields = $ob->GetFields();
            if ($arFields['CATALOG_QUANTITY']<=250) {
                $el = new CIBlockElement;
                $ElementArray = Array("ACTIVE" => "N",);
                $el->Update($arFields['ID'], $ElementArray);
            }
        }
    }
    return "deleteProductEl();";
}
function deleteProductDc(){
    if(CModule::IncludeModule('iblock')) {
        $arSort= Array("TIMESTAMP_X"=>"ASC");
        $arSelect = Array("ID","NAME", "PROPERTY_CML2_TRAITS", "TIMESTAMP_X","DETAIL_PAGE_URL","CATALOG_QUANTITY");
        $arFilter = Array("IBLOCK_ID" =>88, "ACTIVE"=>"Y");
        $objDateTime = new DateTime();
        $arFilter['>=TIMESTAMP_X'] = '01.01.2020 00:00:00';
        $arFilter['<TIMESTAMP_X'] = $objDateTime->format("d.m.Y");
        $res =  CIBlockElement::GetList($arSort, $arFilter, false, false, $arSelect);
        while($ob = $res->GetNextElement()){
            $arFields = $ob->GetFields();
            if ($arFields['CATALOG_QUANTITY']<=250) {
                $el = new CIBlockElement;
                $ElementArray = Array("ACTIVE" => "N",);
                $el->Update($arFields['ID'], $ElementArray);
            }
        }
    }
    return "deleteProductDc();";
}
function deleteProductSeas(){
    if(CModule::IncludeModule('iblock')) {
        $arSort= Array("TIMESTAMP_X"=>"ASC");
        $arSelect = Array("ID","NAME", "PROPERTY_CML2_TRAITS", "TIMESTAMP_X","DETAIL_PAGE_URL","CATALOG_QUANTITY");
        $arFilter = Array("IBLOCK_ID" =>111, "ACTIVE"=>"Y");
        $objDateTime = new DateTime();
        $arFilter['>=TIMESTAMP_X'] = '01.01.2020 00:00:00';
        $arFilter['<TIMESTAMP_X'] = $objDateTime->format("d.m.Y");
        $res =  CIBlockElement::GetList($arSort, $arFilter, false, false, $arSelect);
        while($ob = $res->GetNextElement()){
            $arFields = $ob->GetFields();
            if ($arFields['CATALOG_QUANTITY']<=250) {
                $el = new CIBlockElement;
                $ElementArray = Array("ACTIVE" => "N",);
                $el->Update($arFields['ID'], $ElementArray);
            }
        }
    }
    return "deleteProductSeas();";
}

AddEventHandler('catalog', 'OnCompleteCatalogImport1C', "setPropertyColor");
function setPropertyColor(){
    if (\Bitrix\Main\Loader::includeModule('iblock')) {
        $PROPERTY_CODE = "COLOR";
        $IBLOCK_ID = IntVal(86);
        $ibpenum = new \CIBlockPropertyEnum();
        $arSelect = array("ID", "NAME", "DETAIL_PAGE_URL", "PROPERTY_COLOR", "PROPERTY_CML2_TRAITS");
        $arFilter = array("IBLOCK_ID" => $IBLOCK_ID, "ACTIVE" => "Y", '=AVAILABLE' => 'Y', "PROPERTY_COLOR_VALUE" => false,);
        $res = \CIBlockElement::GetList(array(), $arFilter, false, false, $arSelect);
        while ($ob = $res->GetNext()) {
            $colorCode = '';
            $colorName = '';
            foreach ($ob["PROPERTY_CML2_TRAITS_DESCRIPTION"] as $key => $val) {
                if ($val == "ЦветКод") {
                    $colorCode = str_replace("#", "", $ob["PROPERTY_CML2_TRAITS_VALUE"][$key]);
                }

                if ($val == "ЦветНаименование") {
                    $colorName = $ob["PROPERTY_CML2_TRAITS_VALUE"][$key];
                }
            }

            if (!empty($colorCode) && $colorName) {
                $property = CIBlockProperty::GetByID($PROPERTY_CODE, $IBLOCK_ID)->GetNext();
                $PROPERTY_ID = $property['ID'];
                $property_enums = CIBlockPropertyEnum::GetList(Array("DEF" => "DESC", "SORT" => "ASC"), Array("IBLOCK_ID" => $IBLOCK_ID, "CODE" => "COLOR", "VALUE" => $colorName, "EXTERNAL_ID" => $colorCode));
                if ($enum_fields = $property_enums->GetNext()) {
                    CIBlockElement::SetPropertyValuesEx($ob["ID"], false, array($PROPERTY_CODE => $enum_fields["ID"]));
                }else{
                    $valueId = $ibpenum->Add([
                        'PROPERTY_ID' => $PROPERTY_ID,
                        'VALUE' => $colorName,
                        'XML_ID' => $colorCode,
                    ]);
                    CIBlockElement::SetPropertyValuesEx($ob["ID"], false, array($PROPERTY_CODE => $valueId));
                }
            }
        }
    }
}

function setPropertyColorAgent(){
    if (\Bitrix\Main\Loader::includeModule('iblock')) {
        $PROPERTY_CODE = "COLOR";
        $IBLOCK_ID = IntVal(86);
        $ibpenum = new \CIBlockPropertyEnum();
        $arSelect = array("ID", "NAME", "DETAIL_PAGE_URL", "PROPERTY_COLOR", "PROPERTY_CML2_TRAITS");
        $arFilter = array("IBLOCK_ID" => $IBLOCK_ID, "ACTIVE" => "Y", '=AVAILABLE' => 'Y',);
        $res = \CIBlockElement::GetList(array(), $arFilter, false, false, $arSelect);
        while ($ob = $res->GetNext()) {
            $colorCode = '';
            $colorName = '';
            foreach ($ob["PROPERTY_CML2_TRAITS_DESCRIPTION"] as $key => $val) {
                if ($val == "ЦветКод") {
                    $colorCode = str_replace("#", "", $ob["PROPERTY_CML2_TRAITS_VALUE"][$key]);
                }

                if ($val == "ЦветНаименование") {
                    $colorName = $ob["PROPERTY_CML2_TRAITS_VALUE"][$key];
                }
            }

            if (!empty($colorCode) && $colorName) {
                $property = CIBlockProperty::GetByID($PROPERTY_CODE, $IBLOCK_ID)->GetNext();
                $PROPERTY_ID = $property['ID'];
                $property_enums = CIBlockPropertyEnum::GetList(Array("DEF" => "DESC", "SORT" => "ASC"), Array("IBLOCK_ID" => $IBLOCK_ID, "CODE" => "COLOR", "VALUE" => $colorName, "EXTERNAL_ID" => $colorCode));
                if ($enum_fields = $property_enums->GetNext()) {
                    CIBlockElement::SetPropertyValuesEx($ob["ID"], false, array($PROPERTY_CODE => $enum_fields["ID"]));
                }else{
                    $valueId = $ibpenum->Add([
                        'PROPERTY_ID' => $PROPERTY_ID,
                        'VALUE' => $colorName,
                        'XML_ID' => $colorCode,
                    ]);
                    CIBlockElement::SetPropertyValuesEx($ob["ID"], false, array($PROPERTY_CODE => $valueId));
                }
            }
        }
    }
    return "setPropertyColorAgent();";
}
