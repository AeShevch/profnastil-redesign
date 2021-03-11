<?php

    class GeoIp
    {
        public static function getUserIP()
        {
            return \Bitrix\Main\Service\GeoIp\Manager::getRealIp();
        }

        public static function getGeoIpData()
        {
            return \Bitrix\Main\Service\GeoIp\Manager::getDataResult(self::getUserIP(), LANGUAGE_ID)->getGeoData();
        }

        public static function getRegionName()
        {
            return \Bitrix\Main\Service\GeoIp\Manager::getCityName(self::getUserIP(), LANGUAGE_ID) ?: "Санкт-Петербург";
        }

        public static function getGeoPosition()
        {
            return \Bitrix\Main\Service\GeoIp\Manager::getGeoPosition(self::getUserIP(), LANGUAGE_ID) ?: [
                "latitude"  => 59.45637,
                "longitude" => 30.73856,
            ];
        }
    }
