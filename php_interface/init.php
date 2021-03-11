<?php
    CModule::AddAutoloadClasses(
        '',
        [
            "Site"                     => "/local/php_interface/classes/Site.php",
            "CatalogClass"             => "/local/php_interface/classes/CatalogClass.php",
            "GeoIp"                    => "/local/php_interface/classes/GeoIp.php",
            "C1cTools"                 => "/local/php_interface/classes/C1cTools.php",
            "User"                     => "/local/php_interface/classes/User.php",
            'CUtilCustom'              => "/local/php_interface/classes/CUtilCustom.php",
            "OrderClass"               => "/local/php_interface/classes/OrderClass.php",
            "ElementStringDescription" => "/local/php_interface/classes/ElementStringDescription.php",
            "Bitrix24Lead"                 => "/local/php_interface/classes/Bitrix24Lead.php",
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
