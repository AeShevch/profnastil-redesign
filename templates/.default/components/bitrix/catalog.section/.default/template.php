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
                    action: "ADD_TO_COMPARE_LIST", id: AddedGoodId
                },
                function (data) {
                    $("#compare_list_count").html(data);
                }
            );
        } else {
            chek.classList.remove('in_compare');
            //Удалить
            var AddedGoodId = id;
            $.get("/local/ajax/list_compare.php",
                {
                    action: "DELETE_FROM_COMPARE_LIST", id: AddedGoodId
                },
                function (data) {
                    $("#compare_list_count").html(data);
                }
            );
        }
    }
</script>

<script>
    function add2wish(p_id, pp_id, p, name, dpu, th) {
        $.ajax({
            type: "POST",
            url: "/local/ajax/wishlist.php",
            data: "p_id=" + p_id + "&pp_id=" + pp_id + "&p=" + p + "&name=" + name + "&dpu=" + dpu,
            success: function (html) {
                $(th).addClass('in_wishlist');
                $('#wishcount').html(html);
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

<div id="compare_list_count">
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
        false
    ); ?>
</div>


<? if ($arParams["DISPLAY_TOP_PAGER"]): ?>
    <?= $arResult["NAV_STRING"] ?>
<? endif; ?>

<!-- Section products list  -->
<section class="catalog__list" id="product-listings">
    <div class="section mb-3 pt-3 pb-3">
        <ul class="row list-reset" aria-labelledby="section-title">
            <? foreach ($arResult["ITEMS"] as $cell => $arElement): ?>
                <?
                $this->AddEditAction($arElement['ID'], $arElement['EDIT_LINK'], CIBlock::GetArrayByID($arParams["IBLOCK_ID"], "ELEMENT_EDIT"));
                $this->AddDeleteAction($arElement['ID'], $arElement['DELETE_LINK'], CIBlock::GetArrayByID($arParams["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BCS_ELEMENT_DELETE_CONFIRM')));
                if ($cell >= 12) break;
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
                        <a href="<?= $arElement["DETAIL_PAGE_URL"] ?>" title="<?= $arElement["NAME"] ?>"
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
                           class="catalog-item__link mb-3 mt-auto"
                           title="Перейти к товару «<?= $arElement["NAME"] ?>">
                            <h3 class="catalog-item__title"
                                id="catalog-item-title-<?= $this->GetEditAreaId($arElement['ID']); ?>">
                                <?= $arElement['NAME'] ?>
                            </h3>
                        </a>

                        <? if ($arElement["CAN_BUY"]): ?>
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <!-- Product count -->
                            <fieldset class="count-field me-4">
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

                            <!-- Product prices -->
                            <div class="catalog-item__prices">
                                <? foreach ($arElement["PRICES"] as $code => $arPrice): ?>
                                    <? if ($arPrice["CAN_ACCESS"]): ?>
                                        <? if ($arPrice["DISCOUNT_VALUE"] < $arPrice["VALUE"]): ?>
                                            <span class="catalog-item__price-old"><?= $arPrice["VALUE"] ?> ₽</span>
                                            <span class="catalog-item__price-main"><?= $arPrice["DISCOUNT_VALUE"] ?> ₽</span>
                                        <? else: ?>
                                            <span class="catalog-item__price-main"><?= $arPrice["VALUE"] ?> ₽</span>
                                        <? endif; ?>
                                    <? endif; ?>
                                <? endforeach; ?>
                            </div>
                        </div>
                        <? endif ?>

                        <!-- Buy button -->
                        <? if ($arElement["CAN_BUY"]): ?>
                            <form action="<?= POST_FORM_ACTION_URI ?>" method="post" enctype="multipart/form-data">
                                <input type="hidden" name="<? echo $arParams["ACTION_VARIABLE"] ?>" value="BUY">
                                <input type="hidden" name="<? echo $arParams["PRODUCT_ID_VARIABLE"] ?>"
                                       value="<? echo $arElement["ID"] ?>">
                                <button class="catalog-item__add-to-cart button w-100"
                                        type="submit"
                                        name="<? echo $arParams["ACTION_VARIABLE"] . "ADD2BASKET" ?>"
                                        aria-label="Добавить в корзину">
                                    <svg class="me-1" width="16" height="16">
                                        <use xlink:href="#icon_cart-thin"></use>
                                    </svg>
                                    Купить
                                </button>
                            </form>
                        <? elseif ((count($arResult["PRICES"]) > 0) || is_array($arElement["PRICE_MATRIX"])): ?>
                            <button class="catalog-item__add-to-cart button w-100"
                                    type="button"
                                    aria-label="<?= GetMessage("CATALOG_NOT_AVAILABLE") ?>">
                                <?= GetMessage("CATALOG_NOT_AVAILABLE") ?>
                            </button>
                        <? endif ?>

                    </article>
                </li>
            <? endforeach; ?>
        </ul>
    </div>
    <? if (count($arResult["ITEMS"]) > 12): ?>
        <div class="catalog__banner mb-3"
             aria-hidden="true"
             style="background-image: url(<?= SITE_TEMPLATE_PATH ?>/images/demo/section-banner.jpg);background-size: 100%;"></div>
        <div class="section mb-3 pt-3 pb-3 last">
            <ul class="row list-reset last" aria-labelledby="section-title">
                <? foreach ($arResult["ITEMS"] as $cell => $arElement): ?>
                    <?
                    $this->AddEditAction($arElement['ID'], $arElement['EDIT_LINK'], CIBlock::GetArrayByID($arParams["IBLOCK_ID"], "ELEMENT_EDIT"));
                    $this->AddDeleteAction($arElement['ID'], $arElement['DELETE_LINK'], CIBlock::GetArrayByID($arParams["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BCS_ELEMENT_DELETE_CONFIRM')));
                    if ($cell < 12) continue;
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
                            <a href="<?= $arElement["DETAIL_PAGE_URL"] ?>" title="<?= $arElement["NAME"] ?>"
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
                               class="catalog-item__link mb-3 mt-auto"
                               title="Перейти к товару «<?= $arElement["NAME"] ?>">
                                <h3 class="catalog-item__title"
                                    id="catalog-item-title-<?= $this->GetEditAreaId($arElement['ID']); ?>">
                                    <?= $arElement['NAME'] ?>
                                </h3>
                            </a>


                            <? if ($arElement["CAN_BUY"]): ?>
                                <div class="d-flex justify-content-between align-items-center mb-3">
                                    <!-- Product count -->
                                    <fieldset class="count-field me-4">
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

                                    <!-- Product prices -->
                                    <div class="catalog-item__prices">
                                        <? foreach ($arElement["PRICES"] as $code => $arPrice): ?>
                                            <? if ($arPrice["CAN_ACCESS"]): ?>
                                                <? if ($arPrice["DISCOUNT_VALUE"] < $arPrice["VALUE"]): ?>
                                                    <span class="catalog-item__price-old"><?= $arPrice["VALUE"] ?> ₽</span>
                                                    <span class="catalog-item__price-main"><?= $arPrice["DISCOUNT_VALUE"] ?> ₽</span>
                                                <? else: ?>
                                                    <span class="catalog-item__price-main"><?= $arPrice["VALUE"] ?> ₽</span>
                                                <? endif; ?>
                                            <? endif; ?>
                                        <? endforeach; ?>
                                    </div>
                                </div>
                            <? endif ?>


                            <!-- Buy button -->
                            <? if ($arElement["CAN_BUY"]): ?>
                                <form action="<?= POST_FORM_ACTION_URI ?>" method="post" enctype="multipart/form-data">
                                    <input type="hidden" name="<? echo $arParams["ACTION_VARIABLE"] ?>" value="BUY">
                                    <input type="hidden" name="<? echo $arParams["PRODUCT_ID_VARIABLE"] ?>"
                                           value="<? echo $arElement["ID"] ?>">
                                    <button class="catalog-item__add-to-cart button w-100"
                                            type="submit"
                                            name="<? echo $arParams["ACTION_VARIABLE"] . "ADD2BASKET" ?>"
                                            aria-label="Добавить в корзину">
                                        <svg class="me-1" width="16" height="16">
                                            <use xlink:href="#icon_cart-thin"></use>
                                        </svg>
                                        Купить
                                    </button>
                                </form>
                            <? elseif ((count($arResult["PRICES"]) > 0) || is_array($arElement["PRICE_MATRIX"])): ?>
                                <button class="catalog-item__add-to-cart button w-100"
                                        type="button"
                                        aria-label="<?= GetMessage("CATALOG_NOT_AVAILABLE") ?>">
                                    <?= GetMessage("CATALOG_NOT_AVAILABLE") ?>
                                </button>
                            <? endif ?>

                        </article>
                    </li>
                <? endforeach; ?>
            </ul>
        </div>
    <? endif; ?>
</section>
<? if ($arParams["DISPLAY_BOTTOM_PAGER"]): ?>
    <?= $arResult["NAV_STRING"] ?>
<? endif; ?>

