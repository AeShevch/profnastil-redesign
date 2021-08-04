<?
$catalogIblockId = '113';
$baseCurrency = \Bitrix\Currency\CurrencyManager::getBaseCurrency();
$wishListCount = 0;
$basketTotal = 0.00;
$arBasketItems = array();
$dbBasketItems = CSaleBasket::GetList(
	array(
		'NAME' => 'ASC',
		'ID'   => 'ASC'
	),
	array(
		'FUSER_ID' => CSaleBasket::GetBasketUserID(),
		'LID'      => SITE_ID,
		'ORDER_ID' => 'NULL'
	),
	false,
	false,
	array('ID', 'PRODUCT_ID', 'DELAY', 'PRICE', 'QUANTITY')
);

while ($arItem = $dbBasketItems->GetNext())
{
	if ($arItem['DELAY'] == 'Y')
	{
		$wishListCount++;
	}
	else
	{
		$basketTotal += ($arItem['PRICE'] * $arItem['QUANTITY']);
	}
}
?>
<nav class="row">
	<div class="col-2 col-xl-3 border-start border-2">
		<a href="" class="header-link">
			<svg width="38" height="38">
				<use xlink:href="#icon_balance"></use>
			</svg>
			<span class="header-link-count header-link-count-compare"><?= count($_SESSION['CATALOG_COMPARE_LIST'][$catalogIblockId]['ITEMS']) ?></span>
		</a>
	</div>
	<div class="col-2 col-xl-3 border-start border-2">
		<a href="" class="header-link header-link_favorites">
			<svg width="33" height="33">
				<use xlink:href="#icon_heart"></use>
			</svg>
			<span class="header-link-count header-link-count-wishlist"><?= $wishListCount ?></span>
		</a>
	</div>
	<div class="col-8 col-xl-6 border-start border-2 d-flex">
        <?$APPLICATION->IncludeComponent(
            "bitrix:sale.basket.basket.line",
            "profnastil",
            Array(
                "PATH_TO_BASKET" => SITE_DIR."personal/cart/",
                "PATH_TO_PERSONAL" => SITE_DIR."personal/",
                "PATH_TO_PROFILE" => SITE_DIR."personal/",
                "PATH_TO_REGISTER" => SITE_DIR."login/",
                "POSITION_FIXED" => "N",
                "SHOW_AUTHOR" => "N",
                "SHOW_EMPTY_VALUES" => "Y",
                "SHOW_NUM_PRODUCTS" => "Y",
                "SHOW_PERSONAL_LINK" => "N",
                "SHOW_PRODUCTS" => "N",
                "SHOW_TOTAL_PRICE" => "Y"
            )
        );?>
	</div>
</nav>