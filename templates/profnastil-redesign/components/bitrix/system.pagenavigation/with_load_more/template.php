<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

/** @var array $arParams */
/** @var array $arResult */
/** @var CBitrixComponentTemplate $this */

$this->setFrameMode(true);

if(!$arResult["NavShowAlways"])
{
	if ($arResult["NavRecordCount"] == 0 || ($arResult["NavPageCount"] == 1 && $arResult["NavShowAll"] == false))
		return;
}

$strNavQueryString = ($arResult["NavQueryString"] != "" ? $arResult["NavQueryString"]."&amp;" : "");
$strNavQueryStringFull = ($arResult["NavQueryString"] != "" ? "?".$arResult["NavQueryString"] : "");

$colorSchemes = array(
	"green" => "bx-green",
	"yellow" => "bx-yellow",
	"red" => "bx-red",
	"blue" => "bx-blue",
);
if(isset($colorSchemes[$arParams["TEMPLATE_THEME"]]))
{
	$colorScheme = $colorSchemes[$arParams["TEMPLATE_THEME"]];
}
else
{
	$colorScheme = "";
}
?>
<section class="section mb-3 position-relative">
    <button aria-label="Показать больше товаров"
            class="catalog__show-more link w-100"
            type="button">
        <?if ($arResult["NavPageNomer"]+1 <= $arResult["nEndPage"]):?>
            <?
            $plus = $arResult["NavPageNomer"]+1;
            $url = $arResult["sUrlPathParams"] . "PAGEN_".$arResult["NavNum"]."=".$plus;

            ?>

            <span class="load_more" data-url="<?=$url?>">
                Показать еще
            </span>

        <?else:?>

            <div class="load_more">
                Загружено все
            </div>

        <?endif?>

    </button>
	<nav class="catalog__pagination pagination" aria-label="Pagination">
		<ul class="list-reset">
<?if($arResult["bDescPageNumbering"] === true):?>

	<?if ($arResult["NavPageNomer"] < $arResult["NavPageCount"]):?>
		<?if($arResult["bSavePage"]):?>
			<li><a class="pagination__item pagination__item_icon pagination__item_icon_back" href="<?=$arResult["sUrlPath"]?>?<?=$strNavQueryString?>PAGEN_<?=$arResult["NavNum"]?>=<?=($arResult["NavPageNomer"]+1)?>"><svg width="12" height="12">
                                    <use xlink:href="#icon_arrow"></use>
                                </svg></a></li>
			<li class=""><a class="pagination__item" href="<?=$arResult["sUrlPath"]?>?<?=$strNavQueryString?>PAGEN_<?=$arResult["NavNum"]?>=<?=($arResult["NavPageNomer"]+1)?>"><span>1</span></a></li>
		<?else:?>
			<?if (($arResult["NavPageNomer"]+1) == $arResult["NavPageCount"]):?>
				<li><a class="pagination__item pagination__item_icon pagination__item_icon_back" href="<?=$arResult["sUrlPath"]?><?=$strNavQueryStringFull?>"><svg width="12" height="12">
                                    <use xlink:href="#icon_arrow"></use>
                                </svg></a></li>
			<?else:?>
				<li><a class="pagination__item pagination__item_icon pagination__item_icon_back" href="<?=$arResult["sUrlPath"]?>?<?=$strNavQueryString?>PAGEN_<?=$arResult["NavNum"]?>=<?=($arResult["NavPageNomer"]+1)?>"><svg width="12" height="12">
                                    <use xlink:href="#icon_arrow"></use>
                                </svg></a></li>
			<?endif?>
			<li class=""><a class="pagination__item" href="<?=$arResult["sUrlPath"]?><?=$strNavQueryStringFull?>"><span>1</span></a></li>
		<?endif?>
	<?else:?>
			<li class="bx-pag-prev ppagination__item pagination__item_icon pagination__item_icon_back"><svg width="12" height="12">
                                    <use xlink:href="#icon_arrow"></use>
                                </svg></li>
        <li ><a class="pagination__item" aria-current="true" href="#"><span>1</span></a></li>
	<?endif?>

	<?
	$arResult["nStartPage"]--;
	while($arResult["nStartPage"] >= $arResult["nEndPage"]+1):
	?>
		<?$NavRecordGroupPrint = $arResult["NavPageCount"] - $arResult["nStartPage"] + 1;?>

		<?if ($arResult["nStartPage"] == $arResult["NavPageNomer"]):?>
        <li ><a class="pagination__item" aria-current="true" href="#"><span><?=$NavRecordGroupPrint?></span></a></li>
		<?else:?>
			<li class=""><a class="pagination__item" href="<?=$arResult["sUrlPath"]?>?<?=$strNavQueryString?>PAGEN_<?=$arResult["NavNum"]?>=<?=$arResult["nStartPage"]?>"><span><?=$NavRecordGroupPrint?></span></a></li>
		<?endif?>

		<?$arResult["nStartPage"]--?>
	<?endwhile?>

	<?if ($arResult["NavPageNomer"] > 1):?>
		<?if($arResult["NavPageCount"] > 1):?>
			<li class=""><a class="pagination__item" href="<?=$arResult["sUrlPath"]?>?<?=$strNavQueryString?>PAGEN_<?=$arResult["NavNum"]?>=1"><span><?=$arResult["NavPageCount"]?></span></a></li>
		<?endif?>
			<li class="bx-pag-next"><a class="pagination__item pagination__item_icon" href="<?=$arResult["sUrlPath"]?>?<?=$strNavQueryString?>PAGEN_<?=$arResult["NavNum"]?>=<?=($arResult["NavPageNomer"]-1)?>"><span><?echo GetMessage("round_nav_forward")?></span></a></li>
	<?else:?>
		<?if($arResult["NavPageCount"] > 1):?>
            <li ><a class="pagination__item" aria-current="true" href="#"><span><?=$arResult["NavPageCount"]?></span></a></li>
		<?endif?>
			<li class="bx-pag-next"><span><?echo GetMessage("round_nav_forward")?></span></li>
	<?endif?>

<?else:?>

	<?if ($arResult["NavPageNomer"] > 1):?>
		<?if($arResult["bSavePage"]):?>
			<li><a class="pagination__item pagination__item_icon pagination__item_icon_back" href="<?=$arResult["sUrlPath"]?>?<?=$strNavQueryString?>PAGEN_<?=$arResult["NavNum"]?>=<?=($arResult["NavPageNomer"]-1)?>"><svg width="12" height="12">
                                    <use xlink:href="#icon_arrow"></use>
                                </svg></a></li>
			<li class=""><a class="pagination__item" href="<?=$arResult["sUrlPath"]?>?<?=$strNavQueryString?>PAGEN_<?=$arResult["NavNum"]?>=1"><span>1</span></a></li>
		<?else:?>
			<?if ($arResult["NavPageNomer"] > 2):?>
				<li><a class="pagination__item pagination__item_icon pagination__item_icon_back" href="<?=$arResult["sUrlPath"]?>?<?=$strNavQueryString?>PAGEN_<?=$arResult["NavNum"]?>=<?=($arResult["NavPageNomer"]-1)?>"><svg width="12" height="12">
                                    <use xlink:href="#icon_arrow"></use>
                                </svg></a></li>
			<?else:?>
				<li><a class="pagination__item pagination__item_icon pagination__item_icon_back" href="<?=$arResult["sUrlPath"]?><?=$strNavQueryStringFull?>"><svg width="12" height="12">
                                    <use xlink:href="#icon_arrow"></use>
                                </svg></a></li>
			<?endif?>
			<li class=""><a class="pagination__item" href="<?=$arResult["sUrlPath"]?><?=$strNavQueryStringFull?>"><span>1</span></a></li>
		<?endif?>
	<?else:?>
			<li class="bx-pag-prev ppagination__item pagination__item_icon pagination__item_icon_back"><svg width="12" height="12">
                                    <use xlink:href="#icon_arrow"></use>
                                </svg></li>
        <li ><a class="pagination__item" aria-current="true" href="#"><span>1</span></a></li>
	<?endif?>

	<?
	$arResult["nStartPage"]++;
	while($arResult["nStartPage"] <= $arResult["nEndPage"]-1):
	?>
		<?if ($arResult["nStartPage"] == $arResult["NavPageNomer"]):?>
        <li ><a class="pagination__item" aria-current="true" href="#"><span><?=$arResult["nStartPage"]?></span></a></li>
		<?else:?>
			<li class=""><a class="pagination__item" href="<?=$arResult["sUrlPath"]?>?<?=$strNavQueryString?>PAGEN_<?=$arResult["NavNum"]?>=<?=$arResult["nStartPage"]?>"><span><?=$arResult["nStartPage"]?></span></a></li>
		<?endif?>
		<?$arResult["nStartPage"]++?>
	<?endwhile?>

	<?if($arResult["NavPageNomer"] < $arResult["NavPageCount"]):?>
		<?if($arResult["NavPageCount"] > 1):?>
			<li class=""><a class="pagination__item" href="<?=$arResult["sUrlPath"]?>?<?=$strNavQueryString?>PAGEN_<?=$arResult["NavNum"]?>=<?=$arResult["NavPageCount"]?>"><span><?=$arResult["NavPageCount"]?></span></a></li>
		<?endif?>
			<li class="bx-pag-next"><a class="pagination__item pagination__item_icon" href="<?=$arResult["sUrlPath"]?>?<?=$strNavQueryString?>PAGEN_<?=$arResult["NavNum"]?>=<?=($arResult["NavPageNomer"]+1)?>"><svg width="12" height="12">
                        <use xlink:href="#icon_arrow"></use>
                    </svg></a></li>
	<?else:?>
		<?if($arResult["NavPageCount"] > 1):?>
            <li ><a class="pagination__item" aria-current="true" href="#"><span><?=$arResult["NavPageCount"]?></span></a></li>
		<?endif?>
			<li class="bx-pag-next"><svg width="12" height="12">
                    <use xlink:href="#icon_arrow"></use>
                </svg></li>
	<?endif?>
<?endif?>

<?if ($arResult["bShowAll"]):?>
	<?if ($arResult["NavShowAll"]):?>
			<li class="bx-pag-all"><a href="<?=$arResult["sUrlPath"]?>?<?=$strNavQueryString?>SHOWALL_<?=$arResult["NavNum"]?>=0" rel="nofollow"><span><?echo GetMessage("round_nav_pages")?></span></a></li>
	<?else:?>
			<li class="bx-pag-all"><a href="<?=$arResult["sUrlPath"]?>?<?=$strNavQueryString?>SHOWALL_<?=$arResult["NavNum"]?>=1" rel="nofollow"><span><?echo GetMessage("round_nav_all")?></span></a></li>
	<?endif?>
<?endif?>
		</ul>
		<div style="clear:both"></div>
	</nav>
</section>