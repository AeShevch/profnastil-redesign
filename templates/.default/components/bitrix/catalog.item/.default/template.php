<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
$this->setFrameMode(true);

$arElement = $arResult['ITEM'];

//echo "<pre>";
//print_r($arResult['ITEM']);
//echo "</pre>";

$this->AddEditAction($arElement['ID'], $arElement['EDIT_LINK'], CIBlock::GetArrayByID($arResult['PARAMS']["IBLOCK_ID"], "ELEMENT_EDIT"));
$this->AddDeleteAction($arElement['ID'], $arElement['DELETE_LINK'], CIBlock::GetArrayByID($arResult['PARAMS']["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BCS_ELEMENT_DELETE_CONFIRM')));
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
                "ID"   => "ASC"
            ),
            array(
                "FUSER_ID"   => CSaleBasket::GetBasketUserID(),
                "LID"        => SITE_ID,
                "PRODUCT_ID" => $curProductId,
                "ORDER_ID"   => "NULL",
                "DELAY"      => "Y"
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
        <button class="product-control wishbtn  <? if ((in_array($arResult["ID"], $delaydBasketItems)) || (isset($itInDelay)))
        {
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
             id="<?= $arItemIDs['PICT'] ?>"
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
                    <span class="catalog-item__price-main bx_price" id="<?= $arItemIDs['PRICE'] ?>">
											<span><?= $arPrice["DISCOUNT_VALUE"] ?>₽</span></span>
                <? else: ?>
                    <span class="catalog-item__price-main bx_price"
                          id="<?= $arItemIDs['PRICE'] ?>"> <span><?= $arPrice["VALUE"] ?>₽</span></span>
                <? endif; ?>
            <? endif; ?>
        <? endforeach; ?>
    </div>

    <!-- Buy button -->
    <? if ($arElement["CAN_BUY"]): ?>


        <button class="catalog-item__add-to-cart button w-100"
                id="<? echo $arItemIDs['BUY_LINK']; ?>"
                type="submit"
                name="<? echo $arResult["PARAMS"]["ACTION_VARIABLE"] . "ADD2BASKET" ?>"
                aria-label="Добавить в корзину">
            <svg class="me-1" width="16" height="16">
                <use xlink:href="#icon_cart-thin"></use>
            </svg>
            Купить
        </button>

    <? elseif ((count($arResult['UPPER_RESULT']["PRICES"]) > 0) || is_array($arElement["PRICE_MATRIX"])): ?>
        <button class="catalog-item__add-to-cart button w-100"
                type="button"
                aria-label="<?= GetMessage("CATALOG_NOT_AVAILABLE") ?>">
            <?= GetMessage("CATALOG_NOT_AVAILABLE") ?>
        </button>
    <? endif ?>

</article>
<? $arJSParams = array(
    'PRODUCT_TYPE' => $arElement['CATALOG_TYPE'],
    'SHOW_QUANTITY' => $arResult['PARAMS']['USE_PRODUCT_QUANTITY'],
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
//            echo '<pre>'; print_r($arJSParams); echo '</pre>';

?>
<script type="text/javascript">
    var <? echo $strObName; ?> = new JCCatalogSection(<? echo CUtil::PhpToJSObject($arJSParams, false, true); ?>);
<!--    --><?// echo $strObName; ?>//.Init();
</script>
