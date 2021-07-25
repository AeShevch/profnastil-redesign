<?php
    foreach ($arResult["SECTIONS"] as &$SECTION) {
        $dbSection = CIBlockSection::GetList(
            [],
            [ "ID" => $SECTION["ID"], "IBLOCK_ID" => $arParams["IBLOCK_ID"] ],
            false,
            [ "UF_PREVIEW_TEXT" ]
        );
        if ($arSection = $dbSection->GetNext()) {
            $SECTION["PREVIEW_TEXT"] = $arSection["UF_PREVIEW_TEXT"];
        }
    }

