<?php

    use \Bitrix\Main\IO\File, \Bitrix\Main\Loader, \Bitrix\Main\Application, Bitrix\Main\Web\Cookie;

    class Site
    {

        public static function getUriData()
        {
            $request = Application::getInstance()->getContext()->getRequest();

            return new \Bitrix\Main\Web\Uri($request->getRequestUri());
        }

        public static function getPath()
        {
            return self::getUriData()->getPath();
        }

        public static function isMainPage()
        {
            return (self::getPath() == "/");
        }

        public static function isCurrentPage($url)
        {
            return (self::getPath() == $url);
        }

        /**
         * Получим текущий урл
         *
         * @param bool $clean - очиститить от системных параметров
         *
         * @return string
         */
        public static function getCurUri($clean = false)
        {
            if ($clean === true) {
                return self::getUriData()->deleteParams(\Bitrix\Main\HttpRequest::getSystemParameters())->getUri();
            }

            return self::getUriData()->getUri();
        }

        /**
         * @return bool
         * @throws \Bitrix\Main\LoaderException
         */
        public static function isMobile()
        {
            return Loader::includeModule('conversion') && ($md = new \Bitrix\Conversion\Internals\MobileDetect) && $md->isMobile();
        }

        /**
         * @param $code
         *
         * @return int
         * @throws \Bitrix\Main\ArgumentException
         * @throws \Bitrix\Main\LoaderException
         * @throws \Bitrix\Main\ObjectPropertyException
         * @throws \Bitrix\Main\SystemException
         */
        public static function getIblockIdByCode($code): int
        {
            Loader::includeModule("iblock");
            $iblockResult = \Bitrix\Iblock\IblockTable::getList(
                [
                    'order'  => [ 'IBLOCK_TYPE_ID' => 'ASC', 'SORT' => 'ASC', 'ID' => 'DESC' ],
                    'filter' => [ 'CODE' => $code ],
                ]
            )->fetch();

            return $iblockResult["ID"];
        }

        /**
         * Включаемы области из БД (high-load блоки)
         *
         * @param $code - символьный код элемента
         */
        public static function showMainInclude($code)
        {
            global $APPLICATION;
            $APPLICATION->IncludeComponent(
                "nbc:main.include",
                ".default",
                [
                    "CODE"               => $code,
                    "COMPONENT_TEMPLATE" => ".default",
                    "EDIT_TEMPLATE"      => "",
                ],
                false
            );

        }

        /**
         * Получить массив корневых разделов для инфоблока
         *
         * @param      $iblockID
         *
         * @return mixed
         * @throws \Bitrix\Main\ArgumentException
         * @throws \Bitrix\Main\LoaderException
         * @throws \Bitrix\Main\ObjectPropertyException
         * @throws \Bitrix\Main\SystemException
         */
        public static function getRootSections($iblockID)
        {
            Loader::includeModule('iblock');
            $rsSection = \Bitrix\Iblock\SectionTable::getList(
                [
                    'filter' => [
                        'IBLOCK_ID'   => $iblockID,
                        'DEPTH_LEVEL' => 1,
                    ],
                    'select' => [ 'ID', 'CODE', 'NAME' ],
                ]
            )->fetchAll();

            return $rsSection;
        }

        public function getJsonDates(&$arFields)
        {
            Loader::includeModule('iblock');
            $iblockID = self::getIblockIdByCode("events");
            if ($arFields["IBLOCK_ID"] == $iblockID) {

                $formatDate  = [];
                $counter     = 1;
                $entityClass = \Bitrix\Iblock\Iblock::wakeUp($iblockID)->getEntityDataClass();
                $elements    = $entityClass::getList(
                    [
                        "select" => [ 'ID', 'NAME', 'IBLOCK_ID', 'EVENT_TIME' ],
                        "filter" => [ 'ACTIVE' => 'Y' ],
                        "cache"  => [ 'ttl' => 360000 ],
                    ]
                )->fetchCollection();
                foreach ($elements as $element) {
                    $formatDate["date" . $counter++] = FormatDate(
                        'Y-m-d',
                        MakeTimeStamp($element->getEventTime()->getValue(), "YYYY-MM-DD")
                    );
                }
                if ($formatDate) {
                    $fileName = Application::getDocumentRoot() . '/upload/json/dates.json';
                    File::putFileContents($fileName, json_encode($formatDate, JSON_UNESCAPED_UNICODE));
                }
            }

            return true;
        }

        /**
         * Метод, сохраняющий в куки utm метки
         *
         * @param int $expiresDay кол-во дней жизни кук
         *
         * @return bool
         */
        public static function saveUtmToCookie($expiresDay = 7)
        {
            $application = Application::getInstance();
            $context     = $application->getContext();
            $queryArray  = $context->getRequest()->getQueryList()->toArray();
            foreach ($queryArray as $key => $utm) {
                if (stripos($key, "utm_") !== false) {
                    $cookie = new Cookie("CLIENT_" . strtoupper($key), $utm, time() + 60 * 60 * 24 * $expiresDay);
                    $cookie->setDomain($context->getRequest()->getHttpHost());
                    $cookie->setHttpOnly(false);
                    $context->getResponse()->addCookie($cookie);
                }
            }

            return true;
        }

        public static function getUtmFromCookie(): array
        {
            $utmArray        = [];
            $request         = Application::getInstance()->getContext()->getRequest();
            $cookieListArray = $request->getCookieList()->toArray();
            foreach ($cookieListArray as $key => $value) {
                if (stripos($key, "UTM") !== false) {
                    $utmArray[$key] = $value;
                }
            }

            return $utmArray;
        }

        public static function saveSubscribers(string $email)
        {
            Loader::includeModule('iblock');
            $iblockID    = self::getIblockIdByCode("subscribe");
            $entityClass = \Bitrix\Iblock\Iblock::wakeUp($iblockID)->getEntityDataClass();

            $elements = $entityClass::getList(
                [
                    "select" => [ 'ID', 'NAME', 'IBLOCK_ID' ],
                    "filter" => [ 'ACTIVE' => 'Y', 'NAME' => $email ],
                ]
            )->fetchAll();
            if (empty($elements)) {
                $entityClass::add([ "NAME" => $email ]);
                $result = [ "status"  => 200,
                            "message" => "Спасибо! Ваш e-mail зарегистрирован в базе подписчиков!<br>Подтвердите свое согласие получать рассылку, перейдя по ссылке в письме, которое придет вам на почту в течение 10 минут",
                ];
            } else {
                $result = [ "status" => 400, "message" => "Этот e-mail уже зарегистрирован" ];
            }

            echo json_encode($result, JSON_UNESCAPED_UNICODE);
        }
    }
