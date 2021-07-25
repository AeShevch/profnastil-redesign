<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
/** @var CBitrixComponentTemplate $this */
/** @var array $arParams */
/** @var array $arResult */
/** @global CDatabase $DB */

$frame = $this->createFrame()->begin();

if (!empty($arResult['ITEMS'])) {
    $templateData = array(
        'TEMPLATE_THEME' => $this->GetFolder() . '/themes/' . $arParams['TEMPLATE_THEME'] . '/style.css',
        'TEMPLATE_CLASS' => 'bx_' . $arParams['TEMPLATE_THEME']
    );

    $arSkuTemplate = array();
    if (is_array($arResult['SKU_PROPS'])) {
        foreach ($arResult['SKU_PROPS'] as $iblockId => $skuProps) {
            $arSkuTemplate[$iblockId] = array();
            foreach ($skuProps as &$arProp) {
                ob_start();
                if ('TEXT' == $arProp['SHOW_MODE']) {
                    if (5 < $arProp['VALUES_COUNT']) {
                        $strClass = 'bx_item_detail_size full';
                        $strWidth = ($arProp['VALUES_COUNT'] * 20) . '%';
                        $strOneWidth = (100 / $arProp['VALUES_COUNT']) . '%';
                        $strSlideStyle = '';
                    } else {
                        $strClass = 'bx_item_detail_size';
                        $strWidth = '100%';
                        $strOneWidth = '20%';
                        $strSlideStyle = 'display: none;';
                    }
                    ?>
                <div class="<? echo $strClass; ?>" id="#ITEM#_prop_<? echo $arProp['ID']; ?>_cont">
                    <span class="bx_item_section_name_gray"><? echo htmlspecialcharsex($arProp['NAME']); ?></span>

                    <div class="bx_size_scroller_container">
                        <div class="bx_size">
                            <ul id="#ITEM#_prop_<? echo $arProp['ID']; ?>_list" style="width: <? echo $strWidth; ?>;"><?
                                foreach ($arProp['VALUES'] as $arOneValue) {
                                    ?>
                                <li
                                        data-treevalue="<? echo $arProp['ID'] . '_' . $arOneValue['ID']; ?>"
                                        data-onevalue="<? echo $arOneValue['ID']; ?>"
                                        style="width: <? echo $strOneWidth; ?>;"
                                ><i></i><span class="cnt"><? echo htmlspecialcharsex($arOneValue['NAME']); ?></span>
                                    </li><?
                                }
                                ?></ul>
                        </div>
                        <div class="bx_slide_left" id="#ITEM#_prop_<? echo $arProp['ID']; ?>_left"
                             data-treevalue="<? echo $arProp['ID']; ?>" style="<? echo $strSlideStyle; ?>"></div>
                        <div class="bx_slide_right" id="#ITEM#_prop_<? echo $arProp['ID']; ?>_right"
                             data-treevalue="<? echo $arProp['ID']; ?>" style="<? echo $strSlideStyle; ?>"></div>
                    </div>
                    </div><?
                } elseif ('PICT' == $arProp['SHOW_MODE']) {
                    if (5 < $arProp['VALUES_COUNT']) {
                        $strClass = 'bx_item_detail_scu full';
                        $strWidth = ($arProp['VALUES_COUNT'] * 20) . '%';
                        $strOneWidth = (100 / $arProp['VALUES_COUNT']) . '%';
                        $strSlideStyle = '';
                    } else {
                        $strClass = 'bx_item_detail_scu';
                        $strWidth = '100%';
                        $strOneWidth = '20%';
                        $strSlideStyle = 'display: none;';
                    }
                    ?>
                <div class="<? echo $strClass; ?>" id="#ITEM#_prop_<? echo $arProp['ID']; ?>_cont">
                    <span class="bx_item_section_name_gray"><? echo htmlspecialcharsex($arProp['NAME']); ?></span>

                    <div class="bx_scu_scroller_container">
                        <div class="bx_scu">
                            <ul id="#ITEM#_prop_<? echo $arProp['ID']; ?>_list" style="width: <? echo $strWidth; ?>;"><?
                                foreach ($arProp['VALUES'] as $arOneValue) {
                                    ?>
                                <li
                                        data-treevalue="<? echo $arProp['ID'] . '_' . $arOneValue['ID'] ?>"
                                        data-onevalue="<? echo $arOneValue['ID']; ?>"
                                        style="width: <? echo $strOneWidth; ?>; padding-top: <? echo $strOneWidth; ?>;"
                                ><i title="<? echo htmlspecialcharsbx($arOneValue['NAME']); ?>"></i>
                                    <span class="cnt"><span class="cnt_item"
                                                            style="background-image:url('<? echo $arOneValue['PICT']['SRC']; ?>');"
                                                            title="<? echo htmlspecialcharsbx($arOneValue['NAME']); ?>"
                                        ></span></span></li><?
                                }
                                ?></ul>
                        </div>
                        <div class="bx_slide_left" id="#ITEM#_prop_<? echo $arProp['ID']; ?>_left"
                             data-treevalue="<? echo $arProp['ID']; ?>" style="<? echo $strSlideStyle; ?>"></div>
                        <div class="bx_slide_right" id="#ITEM#_prop_<? echo $arProp['ID']; ?>_right"
                             data-treevalue="<? echo $arProp['ID']; ?>" style="<? echo $strSlideStyle; ?>"></div>
                    </div>
                    </div><?
                }
                $arSkuTemplate[$iblockId][$arProp['CODE']] = ob_get_contents();
                ob_end_clean();
                unset($arProp);
            }
        }
    }

    ?>
    <script type="text/javascript">
        BX.message({
            CVP_MESS_BTN_BUY: '<? echo('' != $arParams['MESS_BTN_BUY'] ? CUtil::JSEscape($arParams['MESS_BTN_BUY']) : GetMessageJS('CVP_TPL_MESS_BTN_BUY')); ?>',
            CVP_MESS_BTN_ADD_TO_BASKET: '<? echo('' != $arParams['MESS_BTN_ADD_TO_BASKET'] ? CUtil::JSEscape($arParams['MESS_BTN_ADD_TO_BASKET']) : GetMessageJS('CVP_TPL_MESS_BTN_ADD_TO_BASKET')); ?>',

            CVP_MESS_BTN_DETAIL: '<? echo('' != $arParams['MESS_BTN_DETAIL'] ? CUtil::JSEscape($arParams['MESS_BTN_DETAIL']) : GetMessageJS('CVP_TPL_MESS_BTN_DETAIL')); ?>',

            CVP_MESS_NOT_AVAILABLE: '<? echo('' != $arParams['MESS_BTN_DETAIL'] ? CUtil::JSEscape($arParams['MESS_BTN_DETAIL']) : GetMessageJS('CVP_TPL_MESS_BTN_DETAIL')); ?>',
            CVP_BTN_MESSAGE_BASKET_REDIRECT: '<? echo GetMessageJS('CVP_CATALOG_BTN_MESSAGE_BASKET_REDIRECT'); ?>',
            CVP_BASKET_URL: '<? echo $arParams["BASKET_URL"]; ?>',
            CVP_ADD_TO_BASKET_OK: '<? echo GetMessageJS('CVP_ADD_TO_BASKET_OK'); ?>',
            CVP_TITLE_ERROR: '<? echo GetMessageJS('CVP_CATALOG_TITLE_ERROR') ?>',
            CVP_TITLE_BASKET_PROPS: '<? echo GetMessageJS('CVP_CATALOG_TITLE_BASKET_PROPS') ?>',
            CVP_TITLE_SUCCESSFUL: '<? echo GetMessageJS('CVP_ADD_TO_BASKET_OK'); ?>',
            CVP_BASKET_UNKNOWN_ERROR: '<? echo GetMessageJS('CVP_CATALOG_BASKET_UNKNOWN_ERROR') ?>',
            CVP_BTN_MESSAGE_SEND_PROPS: '<? echo GetMessageJS('CVP_CATALOG_BTN_MESSAGE_SEND_PROPS'); ?>',
            CVP_BTN_MESSAGE_CLOSE: '<? echo GetMessageJS('CVP_CATALOG_BTN_MESSAGE_CLOSE') ?>'
        });
    </script>
    <div class="container_full-width">
        <section class="section mb-3 pb-5 pt-5">
            <div class="container">
                <h2 class="catalog__subtitle"
                    id="recently-viewed-title"><? echo GetMessage('CVP_TPL_MESS_YOU_LOOKED') ?>:</h2>
                <ul class="row list-reset pt-0 pb-3" aria-labelledby="recently-viewed-title"><?
                    $elementEdit = CIBlock::GetArrayByID($arParams['IBLOCK_ID'], 'ELEMENT_EDIT');
                    $elementDelete = CIBlock::GetArrayByID($arParams['IBLOCK_ID'], 'ELEMENT_DELETE');
                    $elementDeleteParams = array('CONFIRM' => GetMessage('CVP_TPL_ELEMENT_DELETE_CONFIRM'));
                    foreach ($arResult['ITEMS'] as $key => $arItem) {
                        $this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], $elementEdit);
                        $this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], $elementDelete, $elementDeleteParams);
                        $strMainID = $this->GetEditAreaId($arItem['ID']);

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
                            'DISPLAY_PROP_DIV' => $strMainID . '_sku_prop',
                            'BASKET_PROP_DIV' => $strMainID . '_basket_prop'
                        );

                        $strObName = 'ob' . preg_replace("/[^a-zA-Z0-9_]/", "x", $strMainID);

                        $strTitle = (
                        isset($arItem["IPROPERTY_VALUES"]["ELEMENT_PREVIEW_PICTURE_FILE_TITLE"]) && '' != isset($arItem["IPROPERTY_VALUES"]["ELEMENT_PREVIEW_PICTURE_FILE_TITLE"])
                            ? $arItem["IPROPERTY_VALUES"]["ELEMENT_PREVIEW_PICTURE_FILE_TITLE"]
                            : $arItem['NAME']
                        );
                        $showImgClass = $arParams['SHOW_IMAGE'] != "Y" ? "no-imgs" : "";

                        ?>
                    <li class="col-6 col-lg p-0"
                        id="<? echo $strMainID; ?>">
                        <article class="catalog-item">

<!--                            <div class="catalog-item__labels product-labels">-->
<!--                                <div class="product-labels__main">-->
<!--                                    <mark class="product-labels__item">-->
<!--                                        Скидка 10%-->
<!--                                    </mark>-->
<!--                                </div>-->
<!--                            </div>-->
                            <div class="catalog-item__control-buttons">
                                <?
                                //Проверяем, есть ли данный товар в отложенных
                                $curProductId = $arItem["ID"];
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
                                while ($arItems = $dbBasketItems->Fetch())
                                {
                                    $itInDelay = $arItems['PRODUCT_ID'];
                                }
                                ?>
                                <button class="product-control wishbtn  <? if ( (in_array($arItem["ID"], $delaydBasketItems)) || (isset($itInDelay)) ) { echo 'in_wishlist'; } ?>"
                                        aria-label="Добавить товар в избранное"
                                        title="Добавить товар в избранное"
                                        type="button"
                                        onclick="add2wish(
                                                '<?=$arItem["ID"]?>',
                                                '<?=$arItem["CATALOG_PRICE_ID_7"]?>',
                                                '<?=$arItem["CATALOG_PRICE_7"]?>',
                                                '<?=$arItem["NAME"]?>',
                                                '<?=$arItem["DETAIL_PAGE_URL"]?>',
                                                this)">
                                    <svg aria-hidden="true" width="20" height="20" >
                                        <use xlink:href="#icon_like"></use>
                                    </svg>
                                </button>
                                <?unset($itInDelay)?>
                                <?$iblockid = $arItem['IBLOCK_ID'];
                                $id=$arItem['ID'];
                                if(isset($_SESSION["CATALOG_COMPARE_LIST"][$iblockid]["ITEMS"][$id]))
                                {
                                    $checked='in_compare';
                                }
                                else
                                {
                                    $checked='';
                                }?>
                                <button class="product-control <?=$checked;?>"
                                        id="compareid_<?=$arItem['ID'];?>"
                                        onclick="compare_tov(<?=$arItem['ID'];?>);"
                                        aria-label="Добавить товар в сравнение"
                                        title="Добавить товар в сравнение"
                                        type="button">
                                    <svg aria-hidden="true" width="20" height="20">
                                        <use xlink:href="#icon_compare"></use>
                                    </svg>
                                </button>
                            </div>

<!--                            --><?//echo '<pre>'; print_r($arItem); echo '</pre>';?>
                            <a id="<? echo $arItemIDs['PICT']; ?>" href="<? echo $arItem['DETAIL_PAGE_URL']; ?>" title="<?=$arItem['NAME']?>" class="catalog-item__image">
                                <img src="<?=$arItem['PREVIEW_PICTURE']['SRC']?>" aria-labelledby="catalog-item-title-0" alt="<?=$arItem['NAME']?>" loading="lazy" width="206" height="160">
                            </a>



                            <a href="<?=$arItem['DETAIL_PAGE_URL']?>" class="catalog-item__link mb-3" title="<?=$arItem['NAME']?>">
                                <h3 class="catalog-item__title" id="catalog-item-title-0"><?=$arItem['NAME']?></h3>
                            </a>


                            <div class="catalog-item__prices mb-3">
                                <?if($arItem['ITEM_PRICES'][0]['PRINT_RATIO_PRICE'] != $arItem['ITEM_PRICES'][0]['PRINT_RATIO_BASE_PRICE']):?>
                                    <span class="catalog-item__price-old"><?=$arItem['ITEM_PRICES'][0]['PRINT_RATIO_BASE_PRICE']?></span>
                                    <span class="catalog-item__price-main"><?=$arItem['ITEM_PRICES'][0]['PRINT_RATIO_PRICE']?></span>
                                <?else:?>
                                    <span class="catalog-item__price-main"><?=$arItem['ITEM_PRICES'][0]['PRINT_RATIO_PRICE']?></span>

                                <?endif;?>
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
                            </article>
                    </li>
                        <?
                    }
                    unset($elementDeleteParams, $elementDelete, $elementEdit);
                    ?>
                    <div style="clear: both;"></div>
                </ul>
            </div>
        </section>
    </div>
    <?
}
?>
<? $frame->beginStub(); ?>
<? $frame->end();