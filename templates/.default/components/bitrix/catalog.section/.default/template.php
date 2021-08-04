<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
$this->setFrameMode(true);
?>
<script>
    // window.filterCount = '//declOfNum($arResult['NAV_RESULT']->NavRecordCount, array('товар', 'товара', 'товаров'));';
    // document.addEventListener('DOMContentLoaded', () => {
    // 	let countContainer = document.querySelector('.mobile-filter-toggle__products-count');
    // 	countContainer.innerHTML = window.filterCount;
    // })
</script>

<script>
    function compare_tov(id) {
        var chek = document.getElementById('compareid_' + id);
        if (!chek.classList.contains('in_compare')) {
            chek.classList.add('in_compare');
            //Добавить
            var AddedGoodId = id;
            $.get("/local/ajax/list_compare.php",
                {
                    action: "ADD_TO_COMPARE_LIST", id: AddedGoodId, 'compare_list_reload': 'Y'
                },
                function (data) {
                    $("#compare_list_count").html(data);
                    let count = $('#compare_list_count').find('[data-block="count"]').text();
                    if (count.length > 0)
                        $('.header-link-count-compare').text(count)
                    else
                        $('.header-link-count-compare').text('0');
                }
            );
        } else {
            chek.classList.remove('in_compare');
            //Удалить
            var AddedGoodId = id;
            $.get("/local/ajax/list_compare.php",
                {
                    action: "DELETE_FROM_COMPARE_LIST", id: AddedGoodId, 'compare_list_reload': 'Y'
                },
                function (data) {
                    $("#compare_list_count").html(data);
                    let count = $('#compare_list_count').find('[data-block="count"]').text();
                    if (count.length > 0)
                        $('.header-link-count-compare').text(count)
                    else
                        $('.header-link-count-compare').text('0');
                }
            );
        }
    }
</script>

<script>
    function add2wish(p_id, pp_id, p, name, dpu, element) {
        let action = 'add';
        if ($(element).hasClass('in_wishlist')) {
            action = 'remove';
        }
        $.ajax({
            type: "POST",
            url: "/local/ajax/wishlist.php",
            data: "p_id=" + p_id + "&pp_id=" + pp_id + "&p=" + p + "&name=" + name + "&dpu=" + dpu + '&action=' + action,
            success: function (html) {
                if (action == 'add') {
                    $(element).addClass('in_wishlist');
                } else {
                    $(element).removeClass('in_wishlist');
                }
                $('#wishcount').html(html);
                $('.header-link-count-wishlist').text(html);
            }
        });
    };
</script>

<style>
    .in_wishlist svg {
        fill: var(--main);
    }

    .in_compare svg {
        fill: var(--main);
    }
</style>

<section role="alert"
         class="compare-alert section section_padding"
         id="compare_list_count"
         aria-label="Товар добавлен в сравнение">
    <? $APPLICATION->IncludeComponent(
        "bitrix:catalog.compare.list",
        "",
        array(
            "IBLOCK_TYPE" => "catalog1Cv83", //Сюда ваш тип инфоблока каталога
            "IBLOCK_ID" => "113", //Сюда ваш ID инфоблока каталога
            "AJAX_MODE" => "N",
            "AJAX_OPTION_JUMP" => "N",
            "AJAX_OPTION_STYLE" => "Y",
            "AJAX_OPTION_HISTORY" => "N",
            "DETAIL_URL" => "#SECTION_CODE#",
            "COMPARE_URL" => "/catalog/compare.php",
            "NAME" => "CATALOG_COMPARE_LIST",
            "AJAX_OPTION_ADDITIONAL" => ""
        ),
        $component
    ); ?>
</section>


<? if ($arParams["DISPLAY_TOP_PAGER"]): ?>
    <?= $arResult["NAV_STRING"] ?>
<? endif; ?>

<!-- Section products list  -->
<section class="catalog__list" id="product-listings">
    <div class="section mb-3 pt-3 pb-3 last">
        <ul class="row list-reset last" aria-labelledby="section-title">
            <? foreach ($arResult["ITEMS"] as $cell => $arElement): ?>
                <?
                $this->AddEditAction($arElement['ID'], $arElement['EDIT_LINK'], CIBlock::GetArrayByID($arParams["IBLOCK_ID"], "ELEMENT_EDIT"));
                $this->AddDeleteAction($arElement['ID'], $arElement['DELETE_LINK'], CIBlock::GetArrayByID($arParams["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BCS_ELEMENT_DELETE_CONFIRM')));
                $strMainID = $this->GetEditAreaId($arElement['ID']);

                $arItemIDs = array(
                    'ID' => $strMainID,
                    'PICT' => $strMainID . '_pict',
                    'SECOND_PICT' => $strMainID . '_secondpict',
                    'MAIN_PROPS' => $strMainID . '_main_props',

                    'QUANTITY' => $strMainID . '_quantity',
                    'QUANTITY_DOWN' => $strMainID . '_quant_down',
                    'QUANTITY_UP' => $strMainID . '_quant_up',
                    'QUANTITY_MEASURE' => $strMainID . '_quant_measure',
                    'BUY_LINK' => $strMainID . '_buy_link',
                    'SUBSCRIBE_LINK' => $strMainID . '_subscribe',

                    'PRICE' => $strMainID . '_price',
                    'DSC_PERC' => $strMainID . '_dsc_perc',
                    'SECOND_DSC_PERC' => $strMainID . '_second_dsc_perc',

                    'PROP_DIV' => $strMainID . '_sku_tree',
                    'PROP' => $strMainID . '_prop_',
                    'DISPLAY_PROP_DIV' => $strMainID . '_sku_prop'

                );
                $strObName = 'ob' . preg_replace("/[^a-zA-Z0-9_]/i", "x", $strMainID);
                $iblockid = $arElement['IBLOCK_ID'];
                $id = $arElement['ID'];
                if (isset($_SESSION["CATALOG_COMPARE_LIST"][$iblockid]["ITEMS"][$id])) {
                    $checked = 'in_compare';
                } else {
                    $checked = '';
                }
                ?>

                <!-- Catalog item  -->
                <li class="col-6 col-lg-3 p-0" id="<?= $this->GetEditAreaId($arElement['ID']); ?>">
                    <article class="catalog-item h-100 d-flex flex-column">
                        <span class="catalog-item__article mb-2">
                            Код: <?php echo $arElement["PROPERTIES"]["CML2_TRAITS"]["VALUE"][2] ?>
                        </span>
                        <!-- Product sales -->
                        <div class="catalog-item__labels product-labels">
                            <div class="product-labels__main">
                                <? foreach ($arElement["PRICES"] as $code => $arPrice): ?>
                                    <? if ($arPrice["CAN_ACCESS"]): ?>
                                        <? if ($arPrice["DISCOUNT_DIFF_PERCENT"]): ?>
                                            <mark class="product-labels__item">
                                                Скидка <?= $arPrice["DISCOUNT_DIFF_PERCENT"] ?>%
                                            </mark>
                                        <? endif; ?>
                                    <? endif; ?>
                                <? endforeach; ?>
                            </div>
                        </div>

                        <!-- Product add buttons -->
                        <div class="catalog-item__control-buttons">
                            <?
                            //Проверяем, есть ли данный товар в отложенных
                            $curProductId = $arElement["ID"];
                            $dbBasketItems = CSaleBasket::GetList(
                                array(
                                    "NAME" => "ASC",
                                    "ID" => "ASC"
                                ),
                                array(
                                    "FUSER_ID" => CSaleBasket::GetBasketUserID(),
                                    "LID" => SITE_ID,
                                    "PRODUCT_ID" => $curProductId,
                                    "ORDER_ID" => "NULL",
                                    "DELAY" => "Y"
                                ),
                                false,
                                false,
                                array("PRODUCT_ID")
                            );
                            while ($arItems = $dbBasketItems->Fetch()) {
                                $itInDelay = $arItems['PRODUCT_ID'];
                            }
                            ?>
                            <button class="product-control wishbtn  <? if ((in_array($arResult["ID"], $delaydBasketItems)) || (isset($itInDelay))) {
                                echo 'in_wishlist';
                            } ?>"
                                    aria-label="Добавить товар в избранное"
                                    title="Добавить товар в избранное"
                                    type="button"
                                    onclick="add2wish(
                                            '<?= $arElement["ID"] ?>',
                                            '<?= $arElement["CATALOG_PRICE_ID_7"] ?>',
                                            '<?= $arElement["CATALOG_PRICE_7"] ?>',
                                            '<?= $arElement["NAME"] ?>',
                                            '<?= $arElement["DETAIL_PAGE_URL"] ?>',
                                            this)">
                                <svg aria-hidden="true" width="20" height="20">
                                    <use xlink:href="#icon_like"></use>
                                </svg>
                            </button>
                            <? unset($itInDelay) ?>
                            <button class="product-control <?= $checked; ?>"
                                    id="compareid_<?= $arElement['ID']; ?>"
                                    onclick="compare_tov(<?= $arElement['ID']; ?>);"
                                    aria-label="Добавить товар в сравнение"
                                    title="Добавить товар в сравнение"
                                    type="button">
                                <svg aria-hidden="true" width="20" height="20">
                                    <use xlink:href="#icon_compare"></use>
                                </svg>
                            </button>
                        </div>

                        <!-- Product image -->
                        <a href="<?= $arElement["DETAIL_PAGE_URL"] ?>"
                           id="<?= $arItemIDs['PICT'] ?>"
                           title="Перейти к товару «<?= $arElement["NAME"] ?>»"
                           class="catalog-item__image">
                            <img src="<?php echo !empty($arElement["PREVIEW_PICTURE"]["SRC"]) ? $arElement["PREVIEW_PICTURE"]["SRC"] : SITE_TEMPLATE_PATH . "/images/product-placeholder.jpeg" ?>"
                                <?php // aria-labelledby должен совпадать с id заголовка, id можно любой ?>
                                 aria-labelledby="catalog-item-title-<?= $this->GetEditAreaId($arElement['ID']); ?>"
                                 alt="<?= $arElement["NAME"] ?>"
                                 loading="lazy"
                                 width="206" height="160">
                        </a>

                        <!-- Product name -->

                        <a href="<?= $arElement["DETAIL_PAGE_URL"] ?>"
                           class="catalog-item__link mb-3 mt-2"
                           title="Перейти к товару «<?= $arElement["NAME"] ?>">
                            <h3 class="catalog-item__title"
                                id="catalog-item-title-<?= $this->GetEditAreaId($arElement['ID']); ?>">
                                <?= $arElement['NAME'] ?>
                            </h3>
                        </a>

                        <!-- Product prices -->
                        <div class="catalog-item__prices mb-3 mt-auto">
                            <? foreach ($arElement["PRICES"] as $code => $arPrice): ?>
                                <? if ($arPrice["CAN_ACCESS"]): ?>
                                    <? if ($arPrice["DISCOUNT_VALUE"] < $arPrice["VALUE"]): ?>
                                        <span class="catalog-item__price-old"><?= $arPrice["VALUE"] ?> ₽</span>
                                        <span class="catalog-item__price-main bx_price"
                                              id="<?= $arItemIDs['PRICE'] ?>">
											<span><?= $arPrice["DISCOUNT_VALUE"] ?>₽</span></span>
                                    <? else: ?>
                                        <span class="catalog-item__price-main bx_price"
                                              id="<?= $arItemIDs['PRICE'] ?>"> <span><?= $arPrice["VALUE"] ?>₽</span></span>
                                    <? endif; ?>
                                <? endif; ?>
                            <? endforeach; ?>
                        </div>
                        <span id="<? echo $arItemIDs['QUANTITY_MEASURE']; ?>">
                                            <?
                                            if (empty($arItem["PROPERTIES"]["CML2_BASE_UNIT"]["VALUE"])) {
                                                echo $arItem['CATALOG_MEASURE_NAME'];

                                            }
                                            else {
                                                echo $arItem["PROPERTIES"]["CML2_BASE_UNIT"]["VALUE"];
                                            }
                                            ?>
                                        </span>

                        <!-- Buy button -->
                        <? if ($arElement["CAN_BUY"]): ?>
                            <div class="d-flex justify-content-center mb-2">
                                <fieldset class="count-field">
                                    <div class="count-field__inner">
                                        <button aria-controls="product-count-input"
                                                aria-label="Уменьшить количество товара на 1"
                                                onClick="this.parentElement.children['product-count-input'].stepDown()"
                                                class="count-field__button count-field__button_minus"
                                                type="button">
                                            –
                                        </button>
                                        <input id="product-count-input"
                                               aria-label="Количество товара"
                                               autocomplete="off"
                                               class="count-field__input"
                                               max="<?php // echo $arResult["PRODUCT"]["QUANTITY"] ?>"
                                               min="1"
                                               name="count"
                                               step="1"
                                               pattern="\d+"
                                               type="number"
                                               value="1">
                                        <button aria-controls="product-count-input"
                                                aria-label="Увеличить количество товара на 1"
                                                onClick="this.parentElement.children['product-count-input'].stepUp()"
                                                class="count-field__button count-field__button_plus"
                                                type="button">
                                            +
                                        </button>
                                    </div>
                                </fieldset>
                            </div>
                            <button class="catalog-item__add-to-cart button w-100"
                                    id="<? echo $arItemIDs['BUY_LINK']; ?>"
                                    type="submit"
                                    name="<? echo $arParams["ACTION_VARIABLE"] . "ADD2BASKET" ?>"
                                    aria-label="Добавить в корзину">
                                <svg class="me-1" width="16" height="16">
                                    <use xlink:href="#icon_cart-thin"></use>
                                </svg>
                                Купить
                            </button>
                        <? elseif ((count($arResult["PRICES"]) > 0) || is_array($arElement["PRICE_MATRIX"])): ?>
                            <button class="catalog-item__add-to-cart button w-100"
                                    type="button"
                                    aria-label="<?= GetMessage("CATALOG_NOT_AVAILABLE") ?>">
                                <?= GetMessage("CATALOG_NOT_AVAILABLE") ?>
                            </button>
                        <? endif ?>

                    </article>
                </li>
            <?php
            $arJSParams = array(
                'PRODUCT_TYPE' => $arElement['CATALOG_TYPE'],
                'SHOW_QUANTITY' => $arParams['USE_PRODUCT_QUANTITY'],
                'SHOW_ADD_BASKET_BTN' => false,
                'SHOW_BUY_BTN' => true,
                'SHOW_ABSENT' => true,
                'PRODUCT' => array(
                    'ID' => $arElement['ID'],
                    'NAME' => $arElement['~NAME'],
                    'PICT' => ('Y' == $arElement['SECOND_PICT'] ? $arElement['PREVIEW_PICTURE_SECOND'] : $arElement['PREVIEW_PICTURE']),
                    'CAN_BUY' => $arElement["CAN_BUY"],
                    'SUBSCRIPTION' => ('Y' == $arElement['CATALOG_SUBSCRIPTION']),
                    'CHECK_QUANTITY' => $arElement['CHECK_QUANTITY'],
                    'MAX_QUANTITY' => $arElement['CATALOG_QUANTITY'],
                    'STEP_QUANTITY' => $arElement['CATALOG_MEASURE_RATIO'],
                    'QUANTITY_FLOAT' => is_double($arElement['CATALOG_MEASURE_RATIO']),
                    'ADD_URL' => $arElement['~ADD_URL'],
                    'SUBSCRIBE_URL' => $arElement['~SUBSCRIBE_URL']
                ),
                'VISUAL' => array(
                    'ID' => $arItemIDs['ID'],
                    'PICT_ID' => ('Y' == $arElement['SECOND_PICT'] ? $arItemIDs['SECOND_PICT'] : $arItemIDs['PICT']),
                    'QUANTITY_ID' => $arItemIDs['QUANTITY'],
                    'QUANTITY_UP_ID' => $arItemIDs['QUANTITY_UP'],
                    'QUANTITY_DOWN_ID' => $arItemIDs['QUANTITY_DOWN'],
                    'PRICE_ID' => $arItemIDs['PRICE'],
                    'BUY_ID' => $arItemIDs['BUY_LINK'],
                ),
                'AJAX_PATH' => POST_FORM_ACTION_URI
            );
            ?>
                <script type="text/javascript">
                    var <? echo $strObName; ?> =
                    new JCCatalogSection(<? echo CUtil::PhpToJSObject($arJSParams, false, true); ?>);
                </script><?
                ?>
            <? endforeach; ?>
        </ul>
    </div>
</section>
<script type="text/javascript">
    BX.message({
        setButtonBuyName: '<? echo GetMessageJS("CATALOG_SET_BUTTON_BUY"); ?>',
        setButtonBuyUrl: '<? echo $arParams["BASKET_URL"]; ?>',
        ADD_TO_BASKET_OK: '<? echo GetMessageJS('ADD_TO_BASKET_OK'); ?>'
    });
</script>
<? if ($arParams["DISPLAY_BOTTOM_PAGER"]): ?>
    <?= $arResult["NAV_STRING"] ?>
<? endif; ?>

