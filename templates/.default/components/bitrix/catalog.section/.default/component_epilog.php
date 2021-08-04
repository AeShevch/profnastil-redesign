<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

/**
 * Compare list
 */
$compareList = $_SESSION['CATALOG_COMPARE_LIST'][$arParams['IBLOCK_ID']]['ITEMS'];
?>
	<script type="text/javascript">
		$(document).ready(function () {
			<?foreach ($compareList as $compareItem):?>
				$('[data-product-id="<?=$compareItem['ID']?>"] .comparebtn').addClass('in_compare');
			<?endforeach;?>
		});
	</script>
<?
/**
 * Wishlist
 */
$wishList = array();
$arBasketItems = array();
$dbBasketItems = CSaleBasket::GetList(
	array(
		'NAME' => 'ASC',
		'ID'   => 'ASC'
	),
	array(
		'FUSER_ID' => CSaleBasket::GetBasketUserID(),
		'LID'      => SITE_ID,
		'ORDER_ID' => 'NULL',
		'DELAY'    => 'Y',
	),
	false,
	false,
	array('ID', 'PRODUCT_ID')
);

while ($arItem = $dbBasketItems->GetNext())
{
	$wishList[] = $arItem;
}
foreach ($wishList as $wishItem)
{
	?>
	<script type="text/javascript">
		$(document).ready(function () {
			$('[data-product-id="<?=$wishItem['PRODUCT_ID']?>"] .wishbtn').addClass('in_wishlist');
		});
	</script>
	<?
}