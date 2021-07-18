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

<form name="<?echo $arResult["FILTER_NAME"]."_form"?>"
      aria-label="Фильтр товаров"
		method="get"
      id="filter-form<?= !empty($arParams["IS_MOBILE"]) ? "-mobile" : "" ?>"
      aria-controls="product-listings"
      action="<?echo $arResult["FORM_ACTION"]?>"
      class="catalog__filter main-filter">
    <!--  Accordion  / checkboxes -->
    <details class="main-filter__accordion accordion" <?= !empty($arParams["IS_MOBILE"]) ? "" : "open" ?>>
        <summary class="accordion__title">Назначение</summary>
        <div class="accordion__content">
            <fieldset class="main-filter__fieldset filter-fieldset">
                <legend class="visually-hidden">Назначение</legend>
                <div class="filter-fieldset__inner">
                    <!--  checkbox -->
                    <div class="form-check">
                        <input class="form-check-input"
                               type="checkbox"
                               name="filter-brand"
                               id="filter-brand-1">
                        <label class="form-check-label" for="filter-brand-1">
                            Канализационные <small class="main-filter__counter">87</small>
                        </label>
                    </div>
                    <!--  checkbox -->
                    <div class="form-check">
                        <input class="form-check-input"
                               type="checkbox"
                               name="filter-brand"
                               id="filter-brand-2">
                        <label class="form-check-label" for="filter-brand-2">
                            Колодезные <small class="main-filter__counter">87</small>
                        </label>
                    </div>
                    <!--  checkbox -->
                    <div class="form-check">
                        <input class="form-check-input"
                               type="checkbox"
                               name="filter-brand"
                               id="filter-brand-3">
                        <label class="form-check-label" for="filter-brand-3">
                            Фундаментные <small class="main-filter__counter">18</small>
                        </label>
                    </div>
                </div>
            </fieldset>
        </div>
    </details>

    <!--  Range -->
    <details class="main-filter__accordion accordion" <?= !empty($arParams["IS_MOBILE"]) ? "" : "open" ?>>
        <summary class="accordion__title">Цена</summary>

        <div class="accordion__content">
            <fieldset class="filter-fieldset">
                <legend class="visually-hidden">Цена</legend>
                <div class="filter-fieldset__inner">
                    <div class="range-filter">
                        <div class="range-filter js-range-filter<?= !empty($arParams["IS_MOBILE"]) ? "-mobile" : "" ?>">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <input class="form-control js-range-min me-1"
                                       id="filter-price-from"
                                       name="price-from"
                                       type="number"
                                       placeholder="100"
                                       aria-label="Минимальная цена">
                                –
                                <input class="form-control js-range-max ms-1"
                                       id="filter-price-to"
                                       name="price-to"
                                       type="number"
                                       placeholder="500"
                                       aria-label="Максимальная цена">
                            </div>

                            <div class="js-range-slider"
                                 aria-controls="filter-price-from filter-price-to"
                                 id="range-slider"
                                 data-min="0"
                                 data-step="100"
                                 data-max="10000"></div>
                        </div>
                    </div>
                </div>
            </fieldset>
        </div>
    </details>

    <!--  Accordion  / checkboxes -->
    <details class="main-filter__accordion accordion" <?= !empty($arParams["IS_MOBILE"]) ? "" : "open" ?>>
        <summary class="accordion__title">Размер/диаметр</summary>

        <div class="accordion__content">
            <fieldset class="main-filter__fieldset filter-fieldset">
                <legend class="visually-hidden">Размер/диаметр</legend>
                <div class="filter-fieldset__inner">
                    <!--  Checkbox -->
                    <div class="form-check">
                        <input class="form-check-input"
                               type="checkbox"
                               name="filter-brand"
                               id="filter-sales-1">
                        <label class="form-check-label" for="filter-sales-1">
                            Скидки 50% <small class="main-filter__counter">8</small>
                        </label>
                    </div>
                    <!--  Checkbox -->
                    <div class="form-check">
                        <input class="form-check-input"
                               type="checkbox"
                               name="filter-brand"
                               id="filter-sales-2">
                        <label class="form-check-label" for="filter-sales-2">
                            200х200х400 <small class="main-filter__counter">87</small>
                        </label>
                    </div>
                    <!--  Checkbox -->
                    <div class="form-check">
                        <input class="form-check-input"
                               type="checkbox"
                               name="filter-brand"
                               id="filter-sales-3">
                        <label class="form-check-label" for="filter-sales-3">
                            400х400х300 <small class="main-filter__counter">18</small>
                        </label>
                    </div>
                    <!--  Checkbox -->
                    <div class="form-check">
                        <input class="form-check-input"
                               type="checkbox"
                               name="filter-brand"
                               id="filter-sales-4">
                        <label class="form-check-label" for="filter-sales-4">
                            500х400х200 <small class="main-filter__counter">102</small>
                        </label>
                    </div>
                </div>
            </fieldset>
        </div>
    </details>

    <!--  Accordion  / radios -->
    <details class="main-filter__accordion accordion" <?= !empty($arParams["IS_MOBILE"]) ? "" : "open" ?>>
        <summary class="accordion__title">Объем</summary>
        <div class="accordion__content">
            <fieldset class="main-filter__fieldset filter-fieldset">
                <legend class="visually-hidden">Объем</legend>
                <div class="filter-fieldset__inner">
                    <!--  Radio button -->
                    <div class="form-check">
                        <input class="form-check-input"
                               type="radio"
                               name="filter-brand"
                               id="filter-radio-1">
                        <label class="form-check-label" for="filter-radio-1">
                            2 <small class="main-filter__counter">87</small>
                        </label>
                    </div>
                    <!--  Radio button -->
                    <div class="form-check">
                        <input class="form-check-input"
                               type="radio"
                               name="filter-radio"
                               id="filter-radio-2">
                        <label class="form-check-label" for="filter-radio-2">
                            5 <small class="main-filter__counter">87</small>
                        </label>
                    </div>
                    <!--  Radio button -->
                    <div class="form-check">
                        <input class="form-check-input"
                               type="radio"
                               name="filter-radio"
                               id="filter-radio-3">
                        <label class="form-check-label" for="filter-radio-3">
                            8 <small class="main-filter__counter">18</small>
                        </label>
                    </div>
                    <!--  Radio button -->
                    <div class="form-check">
                        <input class="form-check-input"
                               type="radio"
                               name="filter-radio"
                               id="filter-radio-4">
                        <label class="form-check-label" for="filter-radio-4">
                            10 <small class="main-filter__counter">27</small>
                        </label>
                    </div>
                </div>
            </fieldset>
        </div>
    </details>

    <?php if (empty($arParams["IS_MOBILE"])):  ?>
    <!--  Filter reset button -->
	<button
		class="button w-100"
		type="submit"
		id="del_filter"
		name="del_filter"
		value="<?=GetMessage("CT_BCSF_DEL_FILTER")?>"
	><?=GetMessage("CT_BCSF_DEL_FILTER")?></button>
	<div class="bx-filter-popup-result <?if ($arParams["FILTER_VIEW_MODE"] == "VERTICAL") echo $arParams["POPUP_POSITION"]?>" id="modef" <?if(!isset($arResult["ELEMENT_COUNT"])) echo 'style="display:none"';?> style="display: inline-block;">
		<?echo GetMessage("CT_BCSF_FILTER_COUNT", array("#ELEMENT_COUNT#" => '<span id="modef_num">'.intval($arResult["ELEMENT_COUNT"]).'</span>'));?>
		<span class="arrow"></span>
		<br/>
		<a href="<?echo $arResult["FILTER_URL"]?>" target=""><?echo GetMessage("CT_BCSF_FILTER_SHOW")?></a>
	</div>
    <?php endif; ?>
</form>


