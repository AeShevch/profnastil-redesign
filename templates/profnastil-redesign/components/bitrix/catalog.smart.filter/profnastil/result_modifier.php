<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

if (isset($arParams["TEMPLATE_THEME"]) && !empty($arParams["TEMPLATE_THEME"]))
{
	$arAvailableThemes = array();
	$dir = trim(preg_replace("'[\\\\/]+'", "/", dirname(__FILE__)."/themes/"));
	if (is_dir($dir) && $directory = opendir($dir))
	{
		while (($file = readdir($directory)) !== false)
		{
			if ($file != "." && $file != ".." && is_dir($dir.$file))
				$arAvailableThemes[] = $file;
		}
		closedir($directory);
	}

	if ($arParams["TEMPLATE_THEME"] == "site")
	{
		$solution = COption::GetOptionString("main", "wizard_solution", "", SITE_ID);
		if ($solution == "eshop")
		{
			$theme = COption::GetOptionString("main", "wizard_eshop_bootstrap_theme_id", "blue", SITE_ID);
			$arParams["TEMPLATE_THEME"] = (in_array($theme, $arAvailableThemes)) ? $theme : "blue";
		}
	}
	else
	{
		$arParams["TEMPLATE_THEME"] = (in_array($arParams["TEMPLATE_THEME"], $arAvailableThemes)) ? $arParams["TEMPLATE_THEME"] : "blue";
	}
}
else
{
	$arParams["TEMPLATE_THEME"] = "blue";
}
$arParams["POPUP_POSITION"] = (isset($arParams["POPUP_POSITION"]) && in_array($arParams["POPUP_POSITION"], array("left", "right"))) ? $arParams["POPUP_POSITION"] : "left";
$checked_properties = [];
$cancel_urls = [];
$curPage = $APPLICATION->GetCurPage();
$url_arr = explode("/", $curPage);

foreach($arResult["ITEMS"] as $filterBlock) {
    if($filterBlock["DISPLAY_EXPANDED"] == "Y") {
        foreach($filterBlock["VALUES"] as $key => $property) {
            if($property['CHECKED']) {
                $checked_properties[$filterBlock["NAME"]][$property["CONTROL_ID"]] = $property["VALUE"];
            }
            if($filterBlock["PROPERTY_TYPE"] == "N" || $filterBlock["PRICE"]) {
                $checked_properties[$filterBlock["NAME"]]['range'][$key] = $property["HTML_VALUE"] ? $property["HTML_VALUE"] : $property["VALUE"];
            }
        }
        $url_arr_mod = $url_arr;
        foreach($url_arr_mod as $key => $url_part) {
            if(stripos($url_part, $filterBlock["CODE"]) !== false) {
                unset($url_arr_mod[$key]);
                break;
            }
        }
        $new_url = implode('/', $url_arr_mod);
        $cancel_urls[$filterBlock["NAME"]] = $new_url;
    }
}
//полный сброс фильтра
$url_clear = explode("filter", $curPage)[0] . "filter/clear/apply/";
$cancel_urls["CLEAR_FILTER"] = $url_clear;
$arResult["CHECKED_PROPERTIES"] = $checked_properties;
$arResult["CANCEL_URLS"] = $cancel_urls;
