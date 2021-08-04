<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);

function declOfNum($num, $titles) {
	$cases = array(2, 0, 1, 1, 1, 2);

	return $num . " " . $titles[($num % 100 > 4 && $num % 100 < 20) ? 2 : $cases[min($num % 10, 5)]];
}
?>

<?print_r($arResult['SECTION']['DESCRIPTION'])?>
<div class="d-flex align-items-start mb-2">
		<h1 class="catalog__title me-2" id="section-title">
			<?=$arResult['SECTION']['NAME']?>
		</h1>
		<span class="catalog__count">
		<?=declOfNum($arResult['SECTION']['ELEMENT_CNT'], array('товар', 'товара', 'товаров'));?>
		</span>
	</div>

	<!--  Section image banner  -->
<!--	<div class="catalog__banner mb-3"-->
<!--		aria-hidden="true"-->
<!--		style="background-image: url(--><?//=CFile::GetPath($arResult['SECTION']['DETAIL_PICTURE'])?>/*);"></div>*/

