<?php

    //TODO: переделать формы на веб-формы битрикса и избавиться от этого класса
    class Bitrix24Lead
    {
        //массив соответсвий названия веб-форм и id занчений списка в b24
        const sourceID = [
            'Шоурум B2B (форма "Заказать проект")'                    => 71,
            'Шоурум B2B (форма "Записаться на просмотр")'             => 72,
            'Шоурум B2B (форма "Оставить заявку на Заказать проект")' => 73,
            'Шоурум B2B (форма "Записаться на тест-драйв")'           => 74,
        ];

        const purposeID = [
            "Аудио-видео"             => 1726,
            "Десктопные решения"      => 1728,
            "Мобильные решения"       => 1729,
            "Видеоконференцсвязь"     => 1727,
            "Программное обеспечение" => 1730,
        ];

        const bitrix24ListsID = [
            "events" => 277,
        ];

        private static $url = "https://24.nbcom.ru/rest/4413/40lqbirsr8lapfcm/";

        private static $sendData = [];

        /**
         * @param      $title
         * @param      $name
         * @param      $email
         * @param      $phone
         * @param      $companyName
         * @param bool $solutionType
         * @param bool $eventType
         * @param bool $date
         * @param bool $comment
         */
        public function setLeadData($title, $name, $email, $phone, $companyName, $solutionType = false, $eventType = false, $date = false, $comment = false)
        {
            $b24Comment = 'Название организации - ' . $companyName . ';';
            if ($solutionType) {
                $b24Comment .= ' Готовое решение - ' . $solutionType . ';';
            }
            if ($date) {
                $b24Comment .= ' Дата - ' . $date . ';';
            }
            if ($comment) {
                $b24Comment .= ' Комментарий - ' . $comment . ';';
            }

            self::$sendData = [
                'fields' => [
                    'TITLE'             => $title,
                    'NAME'              => $name,
                    'EMAIL'             => [
                        [
                            "VALUE"      => $email,
                            "VALUE_TYPE" => "WORK",
                        ],
                    ],
                    'PHONE'             => [
                        [
                            "VALUE"      => $phone,
                            "VALUE_TYPE" => "WORK",
                        ],
                    ],
                    "COMPANY_TITLE"     => $companyName,
                    "SOURCE_ID"         => self::sourceID[$title],
                    "COMMENTS"          => $b24Comment,
                    "UF_CRM_1607000802" => self::purposeID[$solutionType] ?: "",
                    "UF_CRM_1608113571" => date("d.m.Y", MakeTimeStamp($date, "YYYY-MM-DD")),
                    "UF_CRM_1608738519" => $eventType,
                ],
                'params' => [ "REGISTER_SONET_EVENT" => "Y" ],
            ];

            $utmArray = Site::getUtmFromCookie();
            if (!empty($utmArray) && is_array($utmArray)) {
                foreach ($utmArray as $key => $value) {
                    $newKey            = str_replace("CLIENT_", "", $key);
                    $utmArray[$newKey] = $value;
                    unset($utmArray[$key]);
                }
                self::$sendData["fields"] = array_merge(self::$sendData["fields"], $utmArray);
            }
        }

        public function send($method)
        {

            $curl = curl_init();
            curl_setopt_array(
                $curl,
                [
                    CURLOPT_SSL_VERIFYPEER => 0,
                    CURLOPT_POST           => 1,
                    CURLOPT_HEADER         => 0,
                    CURLOPT_RETURNTRANSFER => 1,
                    CURLOPT_URL            => self::$url . $method,
                    CURLOPT_POSTFIELDS     => http_build_query(self::$sendData),
                ]
            );

            $result = curl_exec($curl);
            curl_close($curl);

            return $result;
        }

        public function getListsArray($iblockType)
        {
            self::$sendData = [ "IBLOCK_TYPE_ID" => "lists", "IBLOCK_ID" => self::bitrix24ListsID[$iblockType] ];
        }
    }
