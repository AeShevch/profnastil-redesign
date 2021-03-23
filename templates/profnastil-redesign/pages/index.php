<section class="hero">
    <div class="container">
        <div class="row">
            <div class="col-9">
                <?
                // Главный слайдер
                $APPLICATION->IncludeComponent(
                    "bitrix:news.list",
                    "shop-main-slider",
                    [
                        "DISPLAY_DATE" => "Y",
                        "DISPLAY_NAME" => "Y",
                        "DISPLAY_PICTURE" => "Y",
                        "DISPLAY_PREVIEW_TEXT" => "Y",
                        "AJAX_MODE" => "N",
                        "IBLOCK_TYPE" => "content",
                        "IBLOCK_ID" => Site::getIblockIdByCode('sl_home_page'),
                        "NEWS_COUNT" => "20",
                        "SORT_BY1" => "ACTIVE_FROM",
                        "SORT_ORDER1" => "DESC",
                        "SORT_BY2" => "SORT",
                        "SORT_ORDER2" => "ASC",
                        "FILTER_NAME" => "",
                        "FIELD_CODE" => ["DETAIL_PICTURE"],
                        "PROPERTY_CODE" => ["LINK", ""],
                        "CHECK_DATES" => "Y",
                        "DETAIL_URL" => "",
                        "PREVIEW_TRUNCATE_LEN" => "",
                        "ACTIVE_DATE_FORMAT" => "d.m.Y",
                        "SET_TITLE" => "N",
                        "SET_BROWSER_TITLE" => "N",
                        "SET_META_KEYWORDS" => "N",
                        "SET_META_DESCRIPTION" => "N",
                        "SET_LAST_MODIFIED" => "N",
                        "INCLUDE_IBLOCK_INTO_CHAIN" => "N",
                        "ADD_SECTIONS_CHAIN" => "N",
                        "HIDE_LINK_WHEN_NO_DETAIL" => "Y",
                        "PARENT_SECTION" => "",
                        "PARENT_SECTION_CODE" => "",
                        "INCLUDE_SUBSECTIONS" => "Y",
                        "CACHE_TYPE" => "A",
                        "CACHE_TIME" => "3600",
                        "CACHE_FILTER" => "Y",
                        "CACHE_GROUPS" => "N",
                        "DISPLAY_TOP_PAGER" => "N",
                        "DISPLAY_BOTTOM_PAGER" => "N",
                        "PAGER_TITLE" => "Новости",
                        "PAGER_SHOW_ALWAYS" => "Y",
                        "PAGER_TEMPLATE" => "",
                        "PAGER_DESC_NUMBERING" => "Y",
                        "PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
                        "PAGER_SHOW_ALL" => "Y",
                        "PAGER_BASE_LINK_ENABLE" => "Y",
                        "SET_STATUS_404" => "Y",
                        "SHOW_404" => "Y",
                        "MESSAGE_404" => "",
                        "PAGER_BASE_LINK" => "",
                        "PAGER_PARAMS_NAME" => "arrPager",
                        "AJAX_OPTION_JUMP" => "N",
                        "AJAX_OPTION_STYLE" => "Y",
                        "AJAX_OPTION_HISTORY" => "N",
                        "AJAX_OPTION_ADDITIONAL" => "",
                    ]
                );
                ?>
            </div>
            <div class="col-3 d-flex">
                <a href="" title="Перейти к странице акции" class="sale-banner">
                    <img src="<?= SITE_TEMPLATE_PATH ?>/images/demo/banner.png" alt="" class="sale-banner__image">
                    <span class="sale-banner__content">
                        <span class="sale-banner__title">
                            Время действия акции:
                        </span>
                        <span class="sale-banner__time">
                            с 01.11 по 31.11
                        </span>
                    </span>
                </a>
            </div>
        </div>
    </div>
</section>

<section>
    <div class="container">
        <?
        global $arrFilterSales;
        $GLOBALS['arrFilterSales'] = array('PROPERTY_NOVINKI_VALUE' => 'Да');
        $APPLICATION->IncludeComponent(
            "bitrix:catalog.top",
            "products-carousel",
            [
                "ACTION_VARIABLE" => "action",
                "ADD_PICT_PROP" => "-",
                "ADD_PROPERTIES_TO_BASKET" => "Y",
                "ADD_TO_BASKET_ACTION" => "ADD",
                "BASKET_URL" => "/personal/basket.php",
                "CACHE_FILTER" => "N",
                "CACHE_GROUPS" => "Y",
                "CACHE_TIME" => "36000000",
                "CACHE_TYPE" => "A",
                "COMPARE_NAME" => "CATALOG_COMPARE_LIST",
                "COMPATIBLE_MODE" => "Y",
                "CONVERT_CURRENCY" => "N",
                "CUSTOM_FILTER" => "{\"CLASS_ID\":\"CondGroup\",\"DATA\":{\"All\":\"OR\",\"True\":\"True\"},\"CHILDREN\":[]}",
                "DETAIL_URL" => "",
                "DISPLAY_COMPARE" => "N",
                "ELEMENT_COUNT" => "6",
                "ELEMENT_SORT_FIELD" => "sort",
                "ELEMENT_SORT_FIELD2" => "id",
                "ELEMENT_SORT_ORDER" => "asc",
                "ELEMENT_SORT_ORDER2" => "desc",
                "ENLARGE_PRODUCT" => "STRICT",
                "FILTER_NAME" => "arrFilterSales",
                "HIDE_NOT_AVAILABLE" => "N",
                "HIDE_NOT_AVAILABLE_OFFERS" => "N",
                "IBLOCK_ID" => "113",
                "IBLOCK_TYPE" => "catalog1Cv83",
                "LABEL_PROP" => [
                    0 => "NOVINKI",
                ],
                "OFFERS_FIELD_CODE" => [
                    0 => "",
                    1 => "",
                ],
                "OFFERS_LIMIT" => "0",
                "OFFERS_PROPERTY_CODE" => [
                    0 => "CML2_TAXES",
                    1 => "CML2_ATTRIBUTES",
                    2 => "Size",
                    3 => "Size",
                    4 => "BASE_UNIT",
                    5 => "SORT",
                    6 => "ARTICLE",
                    7 => "",
                ],
                "PRICE_CODE" => [
                    0 => "Типовые правила продаж",
                ],
                "PRICE_VAT_INCLUDE" => "Y",
                "PRODUCT_BLOCKS_ORDER" => "price,props,sku,quantityLimit,quantity,buttons",
                "PRODUCT_DISPLAY_MODE" => "Y",
                "PRODUCT_ID_VARIABLE" => "id",
                "PRODUCT_PROPERTIES" => [
                    0 => "CML2_ATTRIBUTES",
                ],
                "PRODUCT_PROPS_VARIABLE" => "prop",
                "PRODUCT_QUANTITY_VARIABLE" => "quantity",
                "PRODUCT_ROW_VARIANTS" => "[{'VARIANT':'6','BIG_DATA':false}]",
                "PRODUCT_SUBSCRIPTION" => "Y",
                "PROPERTY_CODE" => [
                    0 => "NOVINKI",
                    1 => "CML2_TRAITS",
                    2 => "",
                ],
            ],
            false
        );
        ?>
    </div>
</section>