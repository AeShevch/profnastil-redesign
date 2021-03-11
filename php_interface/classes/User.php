<?php

    class User
    {
        public static $USER_PASSWORD = '';

        function OnBeforeUserUpdateHandler(&$arFields)
        {
            if ($arFields["PERSONAL_PHONE"]) {
                $arFields["PERSONAL_PHONE"] = preg_replace('/[^0-9]/', "", $arFields["PERSONAL_PHONE"]);
            }
            if ($arFields["EMAIL"]) {
                $arFields["LOGIN"] = $arFields["EMAIL"];
            }
        }

        function OnBeforeUserRegisterHandler(&$arFields)
        {
            if ($arFields["PERSONAL_PHONE"]) {
                $arFields["PERSONAL_PHONE"] = preg_replace('/[^0-9]/', "", $arFields["PERSONAL_PHONE"]);
            }
            if ($arFields["EMAIL"]) {
                $arFields["LOGIN"] = $arFields["EMAIL"];
            }
            if ($arFields['PASSWORD']) {
                self::$USER_PASSWORD = $arFields['PASSWORD'];
            }

            return $arFields;
        }

        function OnBeforeUserLoginHandler(&$arFields)
        {
            if ($arFields['LOGIN']['EMAIL']) {
                $rsResult = \Bitrix\Main\UserTable::getList(
                    [
                        'select' => [ 'LOGIN' ],
                        'filter' => [ 'EMAIL' => $arFields['LOGIN']['EMAIL'] ],
                    ]
                );
                if ($row = $rsResult->fetch()) {
                    $arFields['LOGIN'] = $row['LOGIN'];
                }
            } elseif ($arFields['LOGIN']['PHONE']) {
                $PERSONAL_PHONE = preg_replace('/[^0-9]/', "", $arFields['LOGIN']['PHONE']);
                if ($PERSONAL_PHONE) {
                    $rsResult = \Bitrix\Main\UserTable::getList(
                        [
                            'select' => [ 'LOGIN' ],
                            'filter' => [ 'PERSONAL_PHONE' => $PERSONAL_PHONE ],
                        ]
                    );
                    if ($row = $rsResult->fetch()) {
                        $arFields['LOGIN'] = $row['LOGIN'];
                    }
                }
            }
        }

        private function CreateUser($arFields)
        {
            $dbUser = \Bitrix\Main\UserTable::getList(
                [
                    'select' => [ 'ID' ],
                    'filter' => [ 'EMAIL' => $arFields['EMAIL'] ],
                ]
            );
            if ($arUser = $dbUser->fetch()) {
                return $arUser['ID'];
            }
            global $DB;
            $user                                 = new \CUser;
            $arFields['PASSWORD']                 = randString(8);
            $arUsers['VALUES']                    = [
                "NAME"             => $arFields['NAME'],
                "EMAIL"            => $arFields['EMAIL'],
                "LOGIN"            => $arFields['EMAIL'],
                "PERSONAL_PHONE"   => $arFields['PERSONAL_PHONE'],
                "ACTIVE"           => "Y",
                "PASSWORD"         => $arFields['PASSWORD'],
                "CONFIRM_PASSWORD" => $arFields['PASSWORD'],
            ];
            $arUsers['VALUES']["CHECKWORD"]       = md5(\CMain::GetServerUniqID() . uniqid());
            $arUsers['VALUES']["~CHECKWORD_TIME"] = $DB->CurrentTimeFunction();
            $arUsers['VALUES']["CONFIRM_CODE"]    = randString(8);
            $arUsers['VALUES']["LID"]             = SITE_ID;
            $arUsers['VALUES']["USER_IP"]         = $_SERVER["REMOTE_ADDR"];
            $arUsers['VALUES']["USER_HOST"]       = @gethostbyaddr($_SERVER["REMOTE_ADDR"]);
            $def_group                            = \COption::GetOptionString("main", "new_user_registration_def_group", "");
            if ($def_group != "") {
                $arUsers['VALUES']["GROUP_ID"] = explode(",", $def_group);
            }

            if ($user_id = $user->Add($arUsers['VALUES'])) {
                $arEventFields = $arUsers['VALUES'];
                \Bitrix\Main\Mail\Event::send(
                    [
                        "EVENT_NAME" => "NEW_USER",
                        "LID"        => \Bitrix\Main\Context::getCurrent()->getSite(),
                        "C_FIELDS"   => $arEventFields,
                    ]
                );

                return $user_id;
            }

            return false;
        }

        public function FastOrder()
        {
            global $USER;
            $request = \Bitrix\Main\Application::getInstance()->getContext()->getRequest();
            if ($request['ID'] && $request['NAME'] && $request['EMAIL'] && $request['PERSONAL_PHONE']) {
                if ($USER->IsAuthorized()) {
                    $USER_ID = $USER->GetID();
                } else {
                    $USER_ID = $this->CreateUser(
                        [
                            'NAME'           => $request['NAME'],
                            'EMAIL'          => $request['EMAIL'],
                            'PERSONAL_PHONE' => $request['PERSONAL_PHONE'],
                        ]
                    );
                }
                $order = new OrderClass();

                $orderId = $order->CreateOrder(
                    [
                        'PRODUCT_ID'       => $request['ID'],
                        'USER_ID'          => $USER_ID,
                        'NAME'             => $request['NAME'],
                        'EMAIL'            => $request['EMAIL'],
                        'PERSONAL_PHONE'   => $request['PERSONAL_PHONE'],
                        'TYPE'             => $request['TYPE'],
                        'USER_DESCRIPTION' => $request['USER_DESCRIPTION'],
                        'PN'               => $request['PN'],
                        'SERVICE_CODE'     => $request['SERVICE_CODE'],
                        'STORE_XML_ID'     => $request['STORE_XML_ID'],
                        'CONSENT'          => $request['CONSENT'],

                    ]
                );

                return [ 'result' => 1, 'orderId' => $orderId, 'message' => 'Спасибо! Ваш заказ успешно создан.' ];
            }

            return [ 'result' => 0, 'message' => 'Ошибка.' ];
        }

        public function checkOrderStatus()
        {
            $request = \Bitrix\Main\Application::getInstance()->getContext()->getRequest();
            if ($request['orderNumber'] && $request['orderId'] && $request['bankId']) {
                $res = OrderClass::checkOrderStatus($request['orderNumber'], $request['orderId'], $request['bankId']);

                return [ 'result' => 1, 'data' => $res ];
            }

            return [ 'result' => 0 ];
        }
    }
