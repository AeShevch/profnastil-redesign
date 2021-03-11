<?php

    class CatalogClass
    {
        public static function getParentSectionInfo($id)
        {
            \Bitrix\Main\Loader::includeModule("iblock");

            return \Bitrix\Iblock\SectionTable::getById($id)->fetch();
        }

        public static function GetElementsData($IDS)
        {
            $arResult = [];
            if (\Bitrix\Main\Loader::includeModule('iblock')) {
                $rsResult = \Bitrix\Iblock\ElementTable::getList(
                    [
                        'select'  => [ '*', 'IBLOCK.XML_ID' ],
                        'filter'  => [ '=ID' => $IDS ],
                        'runtime' => [
                            new \Bitrix\Main\Entity\ReferenceField(
                                'IBLOCK', '\Bitrix\Iblock\IblockTable', [ '=this.IBLOCK_ID' => 'ref.ID' ]
                            ),
                        ],
                    ]
                );
                while ($row = $rsResult->fetch()) {
                    $arResult[$row['ID']] = $row;
                }
            }

            return $arResult;
        }
    }
