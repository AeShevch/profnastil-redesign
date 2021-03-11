<?php

    use \Bitrix\Sale, \Bitrix\Main\Loader, \Bitrix\Main\DB, \Bitrix\Main\Entity;

    class OrderClass
    {
        public static $PATH_TO_ORDER = '/order/';
        public static $CURRENCY = 'RUB';

        public static function GetOrderById($ID)
        {
            if ($order = Sale\Order::load($ID)) {
                $arOrder                   = [];
                self::$CURRENCY            = $order->getCurrency();
                $arOrder['PRICE']          = $order->getPrice();
                $arOrder['DISCOUNT_PRICE'] = 0;
                $arOrder['PRODUCT_PRICE']  = 0;
                //$arOrder['DISCOUNT_PRICE'] = $order->getDiscountPrice();
                $arOrder['DELIVERY_PRICE']       = $order->getDeliveryPrice();
                $arOrder['PRINT_DELIVERY_PRICE'] = CurrencyFormat($arOrder['DELIVERY_PRICE'], self::$CURRENCY);
                //$arOrder['PRINT_DISCOUNT_PRICE'] = CurrencyFormat($arOrder['DISCOUNT_PRICE'], self::$CURRENCY);
                $arOrder['PRINT_PRICE'] = CurrencyFormat($arOrder['PRICE'], self::$CURRENCY);

                $basket      = $order->getBasket();
                $basketItems = $basket->getBasketItems();
                foreach ($basketItems as $basketItem) {
                    $ID                           = $basketItem->getProductId();
                    $PRICE                        = $basketItem->getPrice();
                    $DISCOUNT_PRICE               = $basketItem->getDiscountPrice();
                    $arOrder['BASKET_ITEMS'][$ID] = [
                        'ID'                   => $ID,
                        'NAME'                 => $basketItem->getField('NAME'),
                        'QUANTITY'             => $basketItem->getQuantity(),
                        'DISCOUNT_PRICE'       => $DISCOUNT_PRICE,
                        'PRICE'                => $PRICE,
                        'PRINT_DISCOUNT_PRICE' => CurrencyFormat($DISCOUNT_PRICE, self::$CURRENCY),
                        'PRINT_PRICE'          => CurrencyFormat($PRICE, self::$CURRENCY),
                    ];
                    $arOrder['DISCOUNT_PRICE']    += $DISCOUNT_PRICE;
                    $arOrder['PRODUCT_PRICE']     += $PRICE;
                }
                $arOrder['QUANTITY_ITEMS']       = count($arOrder['BASKET_ITEMS']);
                $arOrder['DISCOUNT_PRICE']       = $arOrder['DISCOUNT_PRICE'];
                $arOrder['PRINT_DISCOUNT_PRICE'] = CurrencyFormat($arOrder['DISCOUNT_PRICE'], self::$CURRENCY);
                $arOrder['PRINT_PRODUCT_PRICE']  = CurrencyFormat($arOrder['PRODUCT_PRICE'], self::$CURRENCY);

                return $arOrder;
            }

            return false;
        }

        public static function GetPathToOrder()
        {
            $request = Bitrix\Main\Application::getInstance()->getContext()->getRequest();
            if ($request['PAY_SYSTEM']) {
                return self::$PATH_TO_ORDER . "?paySystem=" . $request['PAY_SYSTEM'];
            } else {
                return self::$PATH_TO_ORDER;
            }
        }

        public static function GetLocationCity()
        {
            $arResult = [];
            if (Bitrix\Main\Loader::includeModule("sale")) {
                $cacheTime = 36000;
                $cacheDir  = __FUNCTION__;
                $cacheId   = md5(__FUNCTION__);
                $cache     = Bitrix\Main\Data\Cache::createInstance();
                if ($cache->initCache($cacheTime, $cacheId, $cacheDir)) {
                    $arResult = $cache->GetVars();
                } elseif ($cache->StartDataCache()) {
                    $db_vars = CSaleLocation::GetList(
                        [
                            "SORT"              => "ASC",
                            "COUNTRY_NAME_LANG" => "ASC",
                            "CITY_NAME_LANG"    => "ASC",
                        ],
                        [
                            "LID"      => LANGUAGE_ID,
                            "!CITY_ID" => false,
                        ],
                        false,
                        false,
                        []
                    );
                    while ($vars = $db_vars->Fetch()) {
                        $arResult[$vars['ID']] = $vars['CITY_NAME'];
                    }
                    $cache->endDataCache($arResult);
                }
            }

            return $arResult;
        }

        function OnBasketUpdateHandler($ID, $arFields)
        {
            if (!$arFields['ORDER_ID']) {
                User::CalculateBasket();
            }
        }

        function OnBasketDeleteHandler($ID)
        {
            User::CalculateBasket();
        }

        private function LoadDataShop()
        {
            $arResult             = [];
            $arResult['DELIVERY'] = \Bitrix\Sale\Delivery\Services\Manager::getActiveList();
            $res                  = \Bitrix\Sale\PaySystem\Manager::getList();
            while ($row = $res->fetch()) {
                if ($row['ACTION_FILE'] != 'inner') {
                    $arResult['PAY_SYSTEM'][] = $row;
                }
            }
            $res = \CSalePersonType::GetList([ "SORT" => "ASC" ], [ "LID" => SITE_ID ]);
            while ($row = $res->Fetch()) {
                $arResult['PERSON_TYPE'][] = $row;
            }
            $res = \CSaleStatus::GetList();
            while ($row = $res->Fetch()) {
                $arResult['STATUS'][] = $row;
            }

            return $arResult;
        }

        //TODO: переделать на хранение в бд
        public function getStoreXmlByCode($storeCode)
        {
            $xmlID = "";
            switch ($storeCode) {
                case "nevskiy":
                    $xmlID = "77c37f3a-70b4-11e5-b4fd-001f296443bc";
                    break;
                case "merc":
                    $xmlID = "d3ef270f-28d3-11e2-b1f7-001f296443bc";
                    break;
                case "plaza":
                    $xmlID = "c63080d7-4ebf-11e4-8dc7-001f296443bc";
                    break;
                case "canyon":
                    $xmlID = "051bfb18-f4c9-11e0-a1cd-001f296443bc";
                    break;
                case "raduga":
                    $xmlID = "770c2a97-95ec-11e1-813d-001f296443bc";
                    break;
                case "ohta":
                    $xmlID = "687b8192-e9cb-11e9-8137-0cc47a31dd27";
                    break;
                case "sgc":
                    $xmlID = "58e2e862-4b55-11e5-ac4e-001f296443bc";
                    break;
                case "mmk":
                    $xmlID = "f5432388-4a38-11e5-ac4e-001f296443bc";
                    break;
            }

            return $xmlID;

        }

        public function CreateOrder($arFields)
        {
            if (\Bitrix\Main\Loader::includeModule('sale') && \Bitrix\Main\Loader::includeModule('catalog')) {
                $arData       = $this->LoadDataShop();
                $siteId       = \Bitrix\Main\Context::getCurrent()->getSite();
                $currencyCode = \Bitrix\Currency\CurrencyManager::getBaseCurrency();
                $order        = \Bitrix\Sale\Order::create($siteId, $arFields['USER_ID']);
                $order->setPersonTypeId(current($arData['PERSON_TYPE'])['ID']);
                $order->setField('CURRENCY', $currencyCode);
                $basket       = \Bitrix\Sale\Basket::create($siteId);
                $PRODUCTS     = CatalogClass::GetElementsData([ $arFields['PRODUCT_ID'] ]);
                $arOrderProps = self::GetProps();
                $properties   = [
                    'PRODUCT.XML_ID' => [
                        'NAME'  => 'Product XML_ID',
                        'CODE'  => 'PRODUCT.XML_ID',
                        'VALUE' => $PRODUCTS[$arFields['PRODUCT_ID']]['XML_ID'],
                        'SORT'  => 100,
                    ],
                    'CATALOG.XML_ID' => [
                        'NAME'  => 'Catalog XML_ID',
                        'CODE'  => 'CATALOG.XML_ID',
                        'VALUE' => $PRODUCTS[$arFields['PRODUCT_ID']]['IBLOCK_ELEMENT_IBLOCK_XML_ID'],
                        'SORT'  => 100,
                    ],
                ];
                $item         = $basket->createItem('catalog', $arFields['PRODUCT_ID']);
                $item->setFields(
                    [
                        'QUANTITY'               => 1,
                        'CURRENCY'               => $currencyCode,
                        'LID'                    => $siteId,
                        'PRODUCT_PROVIDER_CLASS' => '\Bitrix\Catalog\Product\CatalogProvider',
                        'PRODUCT_XML_ID'         => $PRODUCTS[$arFields['PRODUCT_ID']]['XML_ID'],
                        'CATALOG_XML_ID'         => $PRODUCTS[$arFields['PRODUCT_ID']]['IBLOCK_ELEMENT_IBLOCK_XML_ID'],
                    ]
                );
                $item->save();
                $basketPropertyCollection = $item->getPropertyCollection();
                $basketPropertyCollection->setProperty($properties);
                $basketPropertyCollection->save();
                $order->setBasket($basket);
                $shipmentCollection = $order->getShipmentCollection();
                $shipment           = $shipmentCollection->createItem();
                $shipment->setFields(
                    [
                        'DELIVERY_ID'   => current($arData['DELIVERY'])['ID'],
                        'DELIVERY_NAME' => current($arData['DELIVERY'])['NAME'],
                    ]
                );

                $paySystem = current($arData['PAY_SYSTEM']);
                if ($arFields['TYPE'] == 'CREDIT') {
                    foreach ($arData['PAY_SYSTEM'] as $item) {
                        if ($item['CODE'] == 'CREDIT') {
                            $paySystem = $item;
                            break;
                        }
                    }
                }

                $paymentCollection = $order->getPaymentCollection();
                $payment           = $paymentCollection->createItem();
                $payment->setFields(
                    [
                        'PAY_SYSTEM_ID'   => $paySystem['ID'],
                        'PAY_SYSTEM_NAME' => $paySystem['NAME'],
                    ]
                );
                $propertyCollection = $order->getPropertyCollection();

                $phoneProp = $propertyCollection->getPhone();
                $phoneProp->setValue($arFields['PERSONAL_PHONE']);
                $nameProp = $propertyCollection->getPayerName();
                $nameProp->setValue($arFields['NAME']);
                $emailProp = $propertyCollection->getUserEmail();
                $emailProp->setValue($arFields['EMAIL']);

                // Устанавливаем тип покупки
                if (!empty($arOrderProps['SYS_TYPE_PURCHASE'])) {
                    $sysTypePurchase = $propertyCollection->getItemByOrderPropertyId($arOrderProps['SYS_TYPE_PURCHASE']['ID']);
                    $sysTypePurchase->setValue('oneClickTransaction');
                }

                if (!empty($arOrderProps["STORE_XML_ID"])) {
                    $prop = $propertyCollection->getItemByOrderPropertyId($arOrderProps['STORE_XML_ID']['ID']);
                    $prop->setValue(self::getStoreXmlByCode($arFields["STORE_XML_ID"]));
                }
                if (!empty($arOrderProps["PN"])) {
                    $prop = $propertyCollection->getItemByOrderPropertyId($arOrderProps['PN']['ID']);
                    $prop->setValue($arFields["PN"]);
                }
                if (!empty($arOrderProps["SERVICE_CODE"])) {
                    $prop = $propertyCollection->getItemByOrderPropertyId($arOrderProps['SERVICE_CODE']['ID']);
                    $prop->setValue($arFields["SERVICE_CODE"]);
                }
                if (!empty($arOrderProps["USER_DESCRIPTION"])) {
                    $prop = $propertyCollection->getItemByOrderPropertyId($arOrderProps['USER_DESCRIPTION']['ID']);
                    $prop->setValue($arFields["USER_DESCRIPTION"]);
                }

                $order->doFinalAction(true);
                $result = $order->save();
                if ($result->isSuccess()) {
                    $_SESSION['SALE_ORDER_ID'][] = $order->getId();
                    $orderId                     = $order->getField('ACCOUNT_NUMBER');

                    return $orderId;
                }
            }

            return false;
        }

        public static function GetShipmentOrder($order)
        {
            $shipmentOrder = [];
            if (\Bitrix\Main\Loader::includeModule("sale") && \Bitrix\Main\Loader::includeModule("catalog")) {
                $shipmentCollection = $order->getShipmentCollection();
                foreach ($shipmentCollection as $shipment) {
                    if ($shipment->isSystem()) {
                        continue;
                    }
                    $shipmentFields             = $shipment->getFieldValues();
                    $shipmentFields['STORE_ID'] = \Bitrix\Sale\Delivery\ExtraServices\Manager::getStoreIdForShipment(
                        $shipmentFields['ID'],
                        $shipmentFields["DELIVERY_ID"]
                    );
                    $shipmentFields['STORE']    = \Bitrix\Catalog\StoreTable::getById($shipmentFields['STORE_ID'])->fetch();
                    $shipmentOrder[]            = $shipmentFields;
                }
            }

            return $shipmentOrder;
        }

        public static function GetOrderProps($ID)
        {
            $arOrderProps = [];
            if (Loader::includeModule("sale") && intval($ID) > 0) {
                $rsOrderProps = Sale\Internals\OrderPropsTable::getList(
                    [
                        "select"  => [ "ID", "NAME", "CODE", "VALUE" => "ORDER_PROPS.VALUE", "VALUE_ID" => "ORDER_PROPS.ID" ],
                        "order"   => [ "SORT" ],
                        "runtime" => [
                            new Entity\ReferenceField(
                                'ORDER_PROPS', '\Bitrix\Sale\Internals\OrderPropsValueTable', [
                                                 '=this.ID'      => 'ref.ORDER_PROPS_ID',
                                                 "=ref.ORDER_ID" => new DB\SqlExpression('?i', $ID),
                                             ], [ 'JOIN' => 'RIGHT' ]
                            ),
                        ],
                    ]
                )->fetchAll();
                $arOrderProps = array_column($rsOrderProps, null, "CODE");
            }

            return $arOrderProps;
        }

        public static function GetProps($CODE = false)
        {
            $arProps = [];
            if (Loader::includeModule("sale")) {
                $filter = [];
                if ($CODE) {
                    $filter = [ "CODE" => $CODE ];
                }
                $arProps = Sale\Internals\OrderPropsTable::getList(
                    [
                        "select" => [ "*" ],
                        "filter" => $filter,
                        "order"  => [ "SORT" ],
                    ]
                )->fetchAll();
                if ($arProps) {
                    $arProps = array_column($arProps, null, "CODE");
                }
            }

            return $arProps;
        }

        public static function FillServiceProps($order)
        {
            if (Loader::includeModule("sale")) {
                $arOrderProps       = self::GetOrderProps($order->getId());
                $propertyCollection = $order->getPropertyCollection();
                if ($arOrderProps['STREET']['VALUE']) {
                    $propValue = $propertyCollection->getItemByOrderPropertyId($arOrderProps['FULL_ADDRESS']['ID']);
                    $propValue->setValue(
                        implode(
                            ", ",
                            [
                                $arOrderProps['STREET']['VALUE'],
                                "д. " . $arOrderProps['HOUSE']['VALUE'],
                                "кор. " . $arOrderProps['CORPUS']['VALUE'],
                                "кв. " . $arOrderProps['FLAT']['VALUE'],
                            ]
                        )
                    );
                    $propValue->save();
                }
                $shipment = current(self::GetShipmentOrder($order));
                if ($shipment['STORE']) {
                    $propValue = $propertyCollection->getItemByOrderPropertyId($arOrderProps['STORE_XML_ID']['ID']);
                    $propValue->setValue($shipment['STORE']['XML_ID']);
                    $propValue->save();
                }
                $propValue = $propertyCollection->getItemByOrderPropertyId($arOrderProps['PAYMENT_STATUS']['ID']);
                $propValue->setValue(1);
                $propValue->save();
            }
        }

        function OnSaleOrderSaved(\Bitrix\Main\Event $event)
        {
            /** @var Order $order */
            $order     = $event->getParameter("ENTITY");
            $oldValues = $event->getParameter("VALUES");
            $isNew     = $event->getParameter("IS_NEW");

            if ($isNew) {
                self::FillServiceProps($order);
            }
        }

        function OnSaleStatusOrderChange(\Bitrix\Main\Event $event)
        {
            $order = $event->getParameter("ENTITY");
            if ($order->getField('STATUS_ID') == 'S' && intval($order->getId()) > 0) {
                $res = MailEventsTable::getList(
                    [
                        'select' => [ 'ID' ],
                        'filter' => [ 'ENTITY_ID' => $order->getId(), 'EVENT_NAME' => 'REPLY_YANDEX_MARKET' ],
                    ]
                );
                if ($res->getSelectedRowsCount() == 0) {
                    $arOrderProps = self::GetOrderProps($order->getId());
                    MailEventsTable::add(
                        [
                            'ENTITY_ID'  => $order->getId(),
                            'ENTITY'     => 'order',
                            'EVENT_NAME' => 'REPLY_YANDEX_MARKET',
                            'FIELDS'     => serialize([ 'EMAIL' => $arOrderProps['EMAIL']['VALUE'] ]),
                            'LID'        => $order->getSiteId(),
                            'STATUS'     => 0,
                            'DATETIME'   => \Bitrix\Main\Type\DateTime::createFromTimestamp(time() + 24 * 60 * 60),
                        ]
                    );
                }
            }
        }

        public static function checkOrderStatus($orderNumber, $orderId, $bankId)
        {
            $_1c      = new C1cTools();
            $obStatus = $_1c->getOrderStatus($orderNumber);
            if ($obStatus) {
                $message     = '';
                $orderStatus = intval($obStatus->OrderStatus);
                //$orderStatus = 3;
                if ($orderStatus == 3) {
                    if (Loader::includeModule("sale") && Loader::includeModule("sberbank.ecom")) {
                        require_once($_SERVER["DOCUMENT_ROOT"] . "/local/php_interface/classes/RBSCustom.php");
                        $arOrder = \Bitrix\Sale\Order::getList(
                            [
                                "select" => [ "*" ],
                                "filter" => [
                                    "ID" => $orderId,
                                ],
                            ]
                        )->fetch();
                        if ($arOrder) {
                            $params    = [];
                            $paySystem = new \CSalePaySystemAction();
                            $paySystem->InitParamArrays($arOrder, $arOrder["ID"]);
                            if ($paySystem->GetParamValue("TEST_MODE") == 'Y') {
                                $test_mode = true;
                            } else {
                                $test_mode = false;
                            }
                            if ($paySystem->GetParamValue("LOGGING") == 'Y') {
                                $logging = true;
                            } else {
                                $logging = false;
                            }
                            if ($paySystem->GetParamValue("TWO_STAGE") == 'Y') {
                                $two_stage = true;
                            } else {
                                $two_stage = false;
                            }
                            $params['user_name'] = $paySystem->GetParamValue("USER_NAME");
                            $params['password']  = $paySystem->GetParamValue("PASSWORD");
                            $params['test_mode'] = $test_mode;
                            $params['logging']   = $logging;
                            $params['two_stage'] = $two_stage;
                            $rbsCustom           = new \RBSCustom($params);
                            $response            = $rbsCustom->finishOrder($bankId);
                            //\Bitrix\Main\Diag\Debug::writeToFile($response);
                            if ($response["errorCode"] == 0) {
                                $_1c          = new C1cTools();
                                $arOrderArray = CSaleOrder::GetByID($_REQUEST["ORDER_ID"]);
                                if (!$arOrderArray["PRICE"]) {
                                    $obStatus = $_1c->ChangeOrderStatus($orderNumber, $_1c->finish_order_status);
                                } else {
                                    $obStatus = $_1c->ChangeOrderStatus($orderNumber, $_1c->finish_order_status, $arOrderArray["PRICE"]);
                                }
                                if ($obStatus->return == 200) {
                                    $orderStatus = $_1c->finish_order_status;
                                } else {
                                    $orderStatus = 0;
                                }
                                $message = 'Ваш заказ успешно оплачен';
                            } else {
                                if ($response["errorCode"] == 7) {
                                    $arResult["REVERS"] = "Y";
                                    $reverseOrderRes    = $rbsCustom->refundOrder($_REQUEST["ORDER_ID"]);
                                    if ($reverseOrderRes["errorCode"] == 0) {
                                        $orderStatus = 0;
                                    } else {
                                        $orderStatus = 0;
                                    }
                                    $message = 'Произошла ошибка при проверке оплаты';
                                } else {
                                    $orderStatus = 0;
                                    $message     = $response["errorMessage"];
                                }
                            }
                        }
                    }
                }

                return [
                    "ORDER_ID"      => $orderId,
                    "BANK_ID"       => $bankId,
                    "ANSWER_STATUS" => $obStatus->return,
                    "ORDER_NUMBER"  => $orderNumber,
                    "ORDER_STATUS"  => $orderStatus,
                    "MESSAGE"       => $message,
                ];
            } else {
                return false;
            }
        }

    }
