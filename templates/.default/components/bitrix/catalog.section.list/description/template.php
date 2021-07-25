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
?>
<?if($arResult['SECTION']['DESCRIPTION']):?>
	<div class="section section_padding position-relative mb-3">
		<div class="catalog-description">
			<button class="catalog-description__toggler"
						aria-controls="catalog-description"
						data-bs-toggle="button">
				<span class="link link_dashed">
						Развернуть
				</span>
				<span class="link link_dashed">
						Свернуть
				</span>
				<svg width="12" height="12">
						<use xlink:href="#icon_arrow"></use>
				</svg>
			</button>
			<div class="catalog-description__content" id="catalog-description">
				<?=$arResult['SECTION']['DESCRIPTION']?>
			</div>
		</div>
	</div>
<?endif;?>