<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
use \Bitrix\Catalog\CatalogViewedProductTable as CatalogViewedProductTable;
CatalogViewedProductTable::refresh($arResult['ID'], CSaleBasket::GetBasketUserID());

echo '<pre>'; print_r(CSaleBasket::GetBasketUserID()); echo '</pre>';
echo '<pre>'; print_r($arResult['ID']); echo '</pre>';
