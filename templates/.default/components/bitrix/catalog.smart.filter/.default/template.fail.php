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
	<?foreach($arResult["HIDDEN"] as $arItem):?>
	<input type="hidden" name="<?echo $arItem["CONTROL_NAME"]?>" id="<?echo $arItem["CONTROL_ID"]?>" value="<?echo $arItem["HTML_VALUE"]?>" />
	<?endforeach;?>
	<?foreach($arResult["ITEMS"] as $key=>$arItem)//prices
		{
			$key = $arItem["ENCODED_ID"];
			if(isset($arItem["PRICE"])):
				if ($arItem["VALUES"]["MAX"]["VALUE"] - $arItem["VALUES"]["MIN"]["VALUE"] <= 0)
					continue;

				$step_num = 4;
				$step = ($arItem["VALUES"]["MAX"]["VALUE"] - $arItem["VALUES"]["MIN"]["VALUE"]) / $step_num;
				$prices = array();
				if (Bitrix\Main\Loader::includeModule("currency"))
				{
					for ($i = 0; $i < $step_num; $i++)
					{
						$prices[$i] = CCurrencyLang::CurrencyFormat($arItem["VALUES"]["MIN"]["VALUE"] + $step*$i, $arItem["VALUES"]["MIN"]["CURRENCY"], false);
					}
					$prices[$step_num] = CCurrencyLang::CurrencyFormat($arItem["VALUES"]["MAX"]["VALUE"], $arItem["VALUES"]["MAX"]["CURRENCY"], false);
				}
				else
				{
					$precision = $arItem["DECIMALS"]? $arItem["DECIMALS"]: 0;
					for ($i = 0; $i < $step_num; $i++)
					{
						$prices[$i] = number_format($arItem["VALUES"]["MIN"]["VALUE"] + $step*$i, $precision, ".", "");
					}
					$prices[$step_num] = number_format($arItem["VALUES"]["MAX"]["VALUE"], $precision, ".", "");
				}
				?>
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
														<?
															$precision = $arItem["DECIMALS"]? $arItem["DECIMALS"]: 0;
															$step = ($arItem["VALUES"]["MAX"]["VALUE"] - $arItem["VALUES"]["MIN"]["VALUE"]) / 4;
															$value1 = number_format($arItem["VALUES"]["MIN"]["VALUE"], $precision, ".", "");
															$value2 = number_format($arItem["VALUES"]["MAX"]["VALUE"], $precision, ".", "");
														?>
														<input class="form-control js-range-min me-1 min-price"
																	id="<?echo $arItem["VALUES"]["MIN"]["CONTROL_ID"]?>"
																	name="<?echo $arItem["VALUES"]["MIN"]["CONTROL_NAME"]?>"
																	type="text"
																	value="<?echo $arItem["VALUES"]["MIN"]["HTML_VALUE"]?>"
																	onkeyup="smartFilter.keyup(this)"
																	placeholder="<?=$value1?>"
																	aria-label="Минимальная цена">
														–
														<input class="form-control js-range-max ms-1 max-price"
																	id="<?echo $arItem["VALUES"]["MAX"]["CONTROL_ID"]?>"
																	name="<?echo $arItem["VALUES"]["MAX"]["CONTROL_NAME"]?>"
																	value="<?echo $arItem["VALUES"]["MAX"]["HTML_VALUE"]?>"
																	type="text"
																	placeholder="<?=$value2?>"
																	aria-label="Максимальная цена"
																	onkeyup="smartFilter.keyup(this)">
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
					<div class="col-xs-10 col-xs-offset-1 bx-ui-slider-track-container" style="display: none;">
						<div class="bx-ui-slider-track" id="drag_track_<?=$key?>">
							<?for($i = 0; $i <= $step_num; $i++):?>
							<div class="bx-ui-slider-part p<?=$i+1?>"><span><?=$prices[$i]?></span></div>
							<?endfor;?>

							<div class="bx-ui-slider-pricebar-vd" style="left: 0;right: 0;" id="colorUnavailableActive_<?=$key?>"></div>
							<div class="bx-ui-slider-pricebar-vn" style="left: 0;right: 0;" id="colorAvailableInactive_<?=$key?>"></div>
							<div class="bx-ui-slider-pricebar-v"  style="left: 0;right: 0;" id="colorAvailableActive_<?=$key?>"></div>
							<div class="bx-ui-slider-range" id="drag_tracker_<?=$key?>"  style="left: 0%; right: 0%;">
								<a class="bx-ui-slider-handle left"  style="left:0;" href="javascript:void(0)" id="left_slider_<?=$key?>"></a>
								<a class="bx-ui-slider-handle right" style="right:0;" href="javascript:void(0)" id="right_slider_<?=$key?>"></a>
							</div>
						</div>
					</div>
				<?
				$arJsParams = array(
					"leftSlider" => 'left_slider_'.$key,
					"rightSlider" => 'right_slider_'.$key,
					"tracker" => "drag_tracker_".$key,
					"trackerWrap" => "drag_track_".$key,
					"minInputId" => $arItem["VALUES"]["MIN"]["CONTROL_ID"],
					"maxInputId" => $arItem["VALUES"]["MAX"]["CONTROL_ID"],
					"minPrice" => $arItem["VALUES"]["MIN"]["VALUE"],
					"maxPrice" => $arItem["VALUES"]["MAX"]["VALUE"],
					"curMinPrice" => $arItem["VALUES"]["MIN"]["HTML_VALUE"],
					"curMaxPrice" => $arItem["VALUES"]["MAX"]["HTML_VALUE"],
					"fltMinPrice" => intval($arItem["VALUES"]["MIN"]["FILTERED_VALUE"]) ? $arItem["VALUES"]["MIN"]["FILTERED_VALUE"] : $arItem["VALUES"]["MIN"]["VALUE"] ,
					"fltMaxPrice" => intval($arItem["VALUES"]["MAX"]["FILTERED_VALUE"]) ? $arItem["VALUES"]["MAX"]["FILTERED_VALUE"] : $arItem["VALUES"]["MAX"]["VALUE"],
					"precision" => $precision,
					"colorUnavailableActive" => 'colorUnavailableActive_'.$key,
					"colorAvailableActive" => 'colorAvailableActive_'.$key,
					"colorAvailableInactive" => 'colorAvailableInactive_'.$key,
				);
				?>
				<script type="text/javascript">
					BX.ready(function(){
						window['trackBar<?=$key?>'] = new BX.Iblock.SmartFilter(<?=CUtil::PhpToJSObject($arJsParams)?>);
					});
				</script>
			<?endif;
		}
		foreach($arResult["ITEMS"] as $key=>$arItem)
		{
			if(
				empty($arItem["VALUES"])
				|| isset($arItem["PRICE"])
			)
				continue;

			if (
				$arItem["DISPLAY_TYPE"] == "A"
				&& (
					$arItem["VALUES"]["MAX"]["VALUE"] - $arItem["VALUES"]["MIN"]["VALUE"] <= 0
				)
			)
				continue;
			?>
			
			<details class="main-filter__accordion accordion" <?= !empty($arParams["IS_MOBILE"]) ? "" : "open" ?>>
				<summary class="accordion__title"><?=$arItem["NAME"]?></summary>

				<div class="accordion__content">
						<fieldset class="filter-fieldset">
							<legend class="visually-hidden"><?=$arItem["NAME"]?></legend>
							<div class="filter-fieldset__inner">
					
								<?
								$arCur = current($arItem["VALUES"]);
								switch ($arItem["DISPLAY_TYPE"])
								{
									case "A"://NUMBERS_WITH_SLIDER
										?>
										<div class="range-filter">
												<div class="range-filter js-range-filter<?= !empty($arParams["IS_MOBILE"]) ? "-mobile" : "" ?>">
													<div class="d-flex justify-content-between align-items-center mb-3">
														<?
															$precision = $arItem["DECIMALS"]? $arItem["DECIMALS"]: 0;
															$step = ($arItem["VALUES"]["MAX"]["VALUE"] - $arItem["VALUES"]["MIN"]["VALUE"]) / 4;
															$value1 = number_format($arItem["VALUES"]["MIN"]["VALUE"], $precision, ".", "");
															$value2 = number_format($arItem["VALUES"]["MAX"]["VALUE"], $precision, ".", "");
														?>
														<input class="form-control js-range-min me-1 min-price"
																	id="<?echo $arItem["VALUES"]["MIN"]["CONTROL_ID"]?>"
																	name="<?echo $arItem["VALUES"]["MIN"]["CONTROL_NAME"]?>"
																	type="text"
																	value="<?echo $arItem["VALUES"]["MIN"]["HTML_VALUE"]?>"
																	onkeyup="smartFilter.keyup(this)"
																	placeholder="<?=$value1?>"
																	aria-label="Минимальная цена">
														–
														<input class="form-control js-range-max ms-1 max-price"
																	id="<?echo $arItem["VALUES"]["MAX"]["CONTROL_ID"]?>"
																	name="<?echo $arItem["VALUES"]["MAX"]["CONTROL_NAME"]?>"
																	value="<?echo $arItem["VALUES"]["MAX"]["HTML_VALUE"]?>"
																	type="text"
																	placeholder="<?=$value2?>"
																	aria-label="Максимальная цена"
																	onkeyup="smartFilter.keyup(this)">
													</div>

													<div class="js-range-slider"
															aria-controls="filter-price-from filter-price-to"
															id="range-slider"
															data-min="0"
															data-step="100"
															data-max="10000"></div>
												</div>
										</div>
										<div class="col-xs-10 col-xs-offset-1 bx-ui-slider-track-container" style="display:none;">
											<div class="bx-ui-slider-track" id="drag_track_<?=$key?>">
												<?
												$precision = $arItem["DECIMALS"]? $arItem["DECIMALS"]: 0;
												$step = ($arItem["VALUES"]["MAX"]["VALUE"] - $arItem["VALUES"]["MIN"]["VALUE"]) / 4;
												$value1 = number_format($arItem["VALUES"]["MIN"]["VALUE"], $precision, ".", "");
												$value2 = number_format($arItem["VALUES"]["MIN"]["VALUE"] + $step, $precision, ".", "");
												$value3 = number_format($arItem["VALUES"]["MIN"]["VALUE"] + $step * 2, $precision, ".", "");
												$value4 = number_format($arItem["VALUES"]["MIN"]["VALUE"] + $step * 3, $precision, ".", "");
												$value5 = number_format($arItem["VALUES"]["MAX"]["VALUE"], $precision, ".", "");
												?>
												<div class="bx-ui-slider-part p1"><span><?=$value1?></span></div>
												<div class="bx-ui-slider-part p2"><span><?=$value2?></span></div>
												<div class="bx-ui-slider-part p3"><span><?=$value3?></span></div>
												<div class="bx-ui-slider-part p4"><span><?=$value4?></span></div>
												<div class="bx-ui-slider-part p5"><span><?=$value5?></span></div>

												<div class="bx-ui-slider-pricebar-vd" style="left: 0;right: 0;" id="colorUnavailableActive_<?=$key?>"></div>
												<div class="bx-ui-slider-pricebar-vn" style="left: 0;right: 0;" id="colorAvailableInactive_<?=$key?>"></div>
												<div class="bx-ui-slider-pricebar-v"  style="left: 0;right: 0;" id="colorAvailableActive_<?=$key?>"></div>
												<div class="bx-ui-slider-range" 	id="drag_tracker_<?=$key?>"  style="left: 0;right: 0;">
													<a class="bx-ui-slider-handle left"  style="left:0;" href="javascript:void(0)" id="left_slider_<?=$key?>"></a>
													<a class="bx-ui-slider-handle right" style="right:0;" href="javascript:void(0)" id="right_slider_<?=$key?>"></a>
												</div>
											</div>
										</div>
										<?
										$arJsParams = array(
											"leftSlider" => 'left_slider_'.$key,
											"rightSlider" => 'right_slider_'.$key,
											"tracker" => "drag_tracker_".$key,
											"trackerWrap" => "drag_track_".$key,
											"minInputId" => $arItem["VALUES"]["MIN"]["CONTROL_ID"],
											"maxInputId" => $arItem["VALUES"]["MAX"]["CONTROL_ID"],
											"minPrice" => $arItem["VALUES"]["MIN"]["VALUE"],
											"maxPrice" => $arItem["VALUES"]["MAX"]["VALUE"],
											"curMinPrice" => $arItem["VALUES"]["MIN"]["HTML_VALUE"],
											"curMaxPrice" => $arItem["VALUES"]["MAX"]["HTML_VALUE"],
											"fltMinPrice" => intval($arItem["VALUES"]["MIN"]["FILTERED_VALUE"]) ? $arItem["VALUES"]["MIN"]["FILTERED_VALUE"] : $arItem["VALUES"]["MIN"]["VALUE"] ,
											"fltMaxPrice" => intval($arItem["VALUES"]["MAX"]["FILTERED_VALUE"]) ? $arItem["VALUES"]["MAX"]["FILTERED_VALUE"] : $arItem["VALUES"]["MAX"]["VALUE"],
											"precision" => $arItem["DECIMALS"]? $arItem["DECIMALS"]: 0,
											"colorUnavailableActive" => 'colorUnavailableActive_'.$key,
											"colorAvailableActive" => 'colorAvailableActive_'.$key,
											"colorAvailableInactive" => 'colorAvailableInactive_'.$key,
										);
										?>
										<script type="text/javascript">
											BX.ready(function(){
												window['trackBar<?=$key?>'] = new BX.Iblock.SmartFilter(<?=CUtil::PhpToJSObject($arJsParams)?>);
											});
										</script>
										<?
										break;
									case "B"://NUMBERS
										?>
										<div class="range-filter">
												<div class="range-filter js-range-filter<?= !empty($arParams["IS_MOBILE"]) ? "-mobile" : "" ?>">
													<div class="d-flex justify-content-between align-items-center mb-3">
														<?
															$precision = $arItem["DECIMALS"]? $arItem["DECIMALS"]: 0;
															$step = ($arItem["VALUES"]["MAX"]["VALUE"] - $arItem["VALUES"]["MIN"]["VALUE"]) / 4;
															$value1 = number_format($arItem["VALUES"]["MIN"]["VALUE"], $precision, ".", "");
															$value2 = number_format($arItem["VALUES"]["MAX"]["VALUE"], $precision, ".", "");
														?>
														<input class="form-control js-range-min me-1 min-price"
																	id="<?echo $arItem["VALUES"]["MIN"]["CONTROL_ID"]?>"
																	name="<?echo $arItem["VALUES"]["MIN"]["CONTROL_NAME"]?>"
																	type="number"
																	value="<?echo $arItem["VALUES"]["MIN"]["HTML_VALUE"]?>"
																	onkeyup="smartFilter.keyup(this)"
																	placeholder="<?=$value1?>"
																	aria-label="Минимальная цена">
														–
														<input class="form-control js-range-max ms-1 max-price"
																	id="<?echo $arItem["VALUES"]["MAX"]["CONTROL_ID"]?>"
																	name="<?echo $arItem["VALUES"]["MAX"]["CONTROL_NAME"]?>"
																	value="<?echo $arItem["VALUES"]["MAX"]["HTML_VALUE"]?>"
																	type="number"
																	placeholder="<?=$value2?>"
																	aria-label="Максимальная цена"
																	onkeyup="smartFilter.keyup(this)">
													</div>

													<div class="js-range-slider"
															aria-controls="filter-price-from filter-price-to"
															id="range-slider"
															data-min="0"
															data-step="100"
															data-max="10000"></div>
												</div>
										</div>
										<?
										break;
									case "G"://CHECKBOXES_WITH_PICTURES
										?>
										
										<?
										break;
									case "H"://CHECKBOXES_WITH_PICTURES_AND_LABELS
										?>
										<?foreach ($arItem["VALUES"] as $val => $ar):?>
											<div class="form-check" onclick="smartFilter.keyup(BX('<?=CUtil::JSEscape($ar["CONTROL_ID"])?>')); BX.toggleClass(this, 'bx-active');">
												<input class="form-check-input"
														type="checkbox"
														name="<?=$ar["CONTROL_NAME"]?>"
														id="<?=$ar["CONTROL_ID"]?>"
														value="<?=$ar["HTML_VALUE"]?>"
														<? echo $ar["CHECKED"]? 'checked="checked"': '' ?>>
												<label class="form-check-label" for="<?=$ar["CONTROL_ID"]?>" data-role="label_<?=$ar["CONTROL_ID"]?>" >
												<?=$ar["VALUE"];?>
													<?if ($arParams["DISPLAY_ELEMENT_COUNT"] !== "N" && isset($ar["ELEMENT_COUNT"])):
														?> <small class="main-filter__counter" data-role="count_<?=$ar["CONTROL_ID"]?>"><? echo $ar["ELEMENT_COUNT"]; ?></small><?
													endif;?>
												</label>
											</div>
										<?endforeach?>
										<?
										break;
									case "P"://DROPDOWN
										$checkedItemExist = false;
										?>
										
										<?
										break;
									case "R"://DROPDOWN_WITH_PICTURES_AND_LABELS
										?>
										
										<?
										break;
									case "K"://RADIO_BUTTONS
										?>
										<div class="form-check">
												<input class="form-check-input"
														type="radio"
														name="<? echo $arCur["CONTROL_NAME_ALT"] ?>"
														id="<? echo "all_".$arCur["CONTROL_ID"] ?>"
														onclick="smartFilter.click(this)">
												<label class="form-check-label" for="<? echo "all_".$arCur["CONTROL_ID"] ?>">
												<? echo GetMessage("CT_BCSF_FILTER_ALL"); ?>
												</label>
										</div>
											<?foreach($arItem["VALUES"] as $val => $ar):?>
												<div class="form-check">
														<input class="form-check-input"
																type="radio"
																value="<? echo $ar["HTML_VALUE_ALT"] ?>"
																name="<? echo $ar["CONTROL_NAME_ALT"] ?>"
																id="<? echo $ar["CONTROL_ID"] ?>"
																<? echo $ar["CHECKED"]? 'checked="checked"': '' ?>
																onclick="smartFilter.click(this)">
														<label data-role="label_<?=$ar["CONTROL_ID"]?>" class="form-check-label" for="<? echo $ar["CONTROL_ID"] ?>">
														<?=$ar["VALUE"];?><?
																	if ($arParams["DISPLAY_ELEMENT_COUNT"] !== "N" && isset($ar["ELEMENT_COUNT"])):
																		?>&nbsp;<small class="main-filter__counter" data-role="count_<?=$ar["CONTROL_ID"]?>"><? echo $ar["ELEMENT_COUNT"]; ?></small><?
																	endif;?>
														</label>
												</div>

											<?endforeach;?>
										<?
										break;
									case "U"://CALENDAR
										?>
										
										<?
										break;
									default://CHECKBOXES
										?>
										
										<?foreach ($arItem["VALUES"] as $val => $ar):?>
											<div class="form-check" onclick="smartFilter.keyup(BX('<?=CUtil::JSEscape($ar["CONTROL_ID"])?>')); BX.toggleClass(this, 'bx-active');">
												<input class="form-check-input"
														type="checkbox"
														name="<?=$ar["CONTROL_NAME"]?>"
														id="<?=$ar["CONTROL_ID"]?>"
														value="<?=$ar["HTML_VALUE"]?>"
														<? echo $ar["CHECKED"]? 'checked="checked"': '' ?>>
												<label class="form-check-label" for="<?=$ar["CONTROL_ID"]?>" data-role="label_<?=$ar["CONTROL_ID"]?>" >
												<?=$ar["VALUE"];?>
													<?if ($arParams["DISPLAY_ELEMENT_COUNT"] !== "N" && isset($ar["ELEMENT_COUNT"])):
														?> <small class="main-filter__counter" data-role="count_<?=$ar["CONTROL_ID"]?>"><? echo $ar["ELEMENT_COUNT"]; ?></small><?
													endif;?>
												</label>
											</div>
										<?endforeach?>
												
										
								<?
								}
								?>
					</div>
				</fieldset>
				</div>
			</details>
		<?
		}
		?>
	
    <?php if (empty($arParams["IS_MOBILE"])):  ?>
    <!--  Filter reset button -->
	 <!-- <button
	 	class="button w-100"
		type="submit"
		id="set_filter"
		name="set_filter"
		value="<?=GetMessage("CT_BCSF_SET_FILTER")?>"
	><?=GetMessage("CT_BCSF_SET_FILTER")?></button> -->
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


<script type="text/javascript">
	function JCSmartFilter(ajaxURL, viewMode, params)
	{
		this.ajaxURL = ajaxURL;
		this.form = null;
		this.timer = null;
		this.cacheKey = '';
		this.cache = [];
		this.popups = [];
		this.viewMode = viewMode;
		if (params && params.SEF_SET_FILTER_URL)
		{
			this.bindUrlToButton('set_filter', params.SEF_SET_FILTER_URL);
			this.sef = true;
		}
		if (params && params.SEF_DEL_FILTER_URL)
		{
			this.bindUrlToButton('del_filter', params.SEF_DEL_FILTER_URL);
		}
	}

	JCSmartFilter.prototype.keyup = function(input)
	{
		if(!!this.timer)
		{
			clearTimeout(this.timer);
		}
		this.timer = setTimeout(BX.delegate(function(){
			this.reload(input);
		}, this), 500);
	};

	JCSmartFilter.prototype.click = function(checkbox)
	{
		if(!!this.timer)
		{
			clearTimeout(this.timer);
		}

		this.timer = setTimeout(BX.delegate(function(){
			this.reload(checkbox);
		}, this), 500);
	};

	JCSmartFilter.prototype.reload = function(input)
	{
		if (this.cacheKey !== '')
		{
			//Postprone backend query
			if(!!this.timer)
			{
				clearTimeout(this.timer);
			}
			this.timer = setTimeout(BX.delegate(function(){
				this.reload(input);
			}, this), 1000);
			return;
		}
		this.cacheKey = '|';

		this.position = BX.pos(input, true);
		this.form = BX.findParent(input, {'tag':'form'});
		if (this.form)
		{
			var values = [];
			values[0] = {name: 'ajax', value: 'y'};
			this.gatherInputsValues(values, BX.findChildren(this.form, {'tag': new RegExp('^(input|select)$', 'i')}, true));

			for (var i = 0; i < values.length; i++)
				this.cacheKey += values[i].name + ':' + values[i].value + '|';

			if (this.cache[this.cacheKey])
			{
				this.curFilterinput = input;
				this.postHandler(this.cache[this.cacheKey], true);
			}
			else
			{
				if (this.sef)
				{
					var set_filter = BX('set_filter');
					set_filter.disabled = true;
				}

				this.curFilterinput = input;
				BX.ajax.loadJSON(
					this.ajaxURL,
					this.values2post(values),
					BX.delegate(this.postHandler, this)
				);
			}
		}
	};

	JCSmartFilter.prototype.updateItem = function (PID, arItem)
	{
		if (arItem.PROPERTY_TYPE === 'N' || arItem.PRICE)
		{
			var trackBar = window['trackBar' + PID];
			if (!trackBar && arItem.ENCODED_ID)
				trackBar = window['trackBar' + arItem.ENCODED_ID];

			if (trackBar && arItem.VALUES)
			{
				if (arItem.VALUES.MIN)
				{
					if (arItem.VALUES.MIN.FILTERED_VALUE)
						trackBar.setMinFilteredValue(arItem.VALUES.MIN.FILTERED_VALUE);
					else
						trackBar.setMinFilteredValue(arItem.VALUES.MIN.VALUE);
				}

				if (arItem.VALUES.MAX)
				{
					if (arItem.VALUES.MAX.FILTERED_VALUE)
						trackBar.setMaxFilteredValue(arItem.VALUES.MAX.FILTERED_VALUE);
					else
						trackBar.setMaxFilteredValue(arItem.VALUES.MAX.VALUE);
				}
			}
		}
		else if (arItem.VALUES)
		{
			for (var i in arItem.VALUES)
			{
				if (arItem.VALUES.hasOwnProperty(i))
				{
					var value = arItem.VALUES[i];
					var control = BX(value.CONTROL_ID);

					if (!!control)
					{
						var label = document.querySelector('[data-role="label_'+value.CONTROL_ID+'"]');
						if (value.DISABLED)
						{
							if (label)
								BX.addClass(label, 'disabled');
							else
								BX.addClass(control.parentNode, 'disabled');
						}
						else
						{
							if (label)
								BX.removeClass(label, 'disabled');
							else
								BX.removeClass(control.parentNode, 'disabled');
						}

						if (value.hasOwnProperty('ELEMENT_COUNT'))
						{
							label = document.querySelector('[data-role="count_'+value.CONTROL_ID+'"]');
							if (label)
								label.innerHTML = value.ELEMENT_COUNT;
						}
					}
				}
			}
		}
	};

	JCSmartFilter.prototype.postHandler = function (result, fromCache)
	{
		var hrefFILTER, url, curProp;
		var modef = BX('modef');
		var modef_num = BX('modef_num');

		if (!!result && !!result.ITEMS)
		{
			for(var popupId in this.popups)
			{
				if (this.popups.hasOwnProperty(popupId))
				{
					this.popups[popupId].destroy();
				}
			}
			this.popups = [];

			for(var PID in result.ITEMS)
			{
				if (result.ITEMS.hasOwnProperty(PID))
				{
					this.updateItem(PID, result.ITEMS[PID]);
				}
			}

			if (!!modef && !!modef_num)
			{
				modef_num.innerHTML = result.ELEMENT_COUNT;
				hrefFILTER = BX.findChildren(modef, {tag: 'A'}, true);

				if (result.FILTER_URL && hrefFILTER)
				{
					hrefFILTER[0].href = BX.util.htmlspecialcharsback(result.FILTER_URL);
				}

				if (result.FILTER_AJAX_URL && result.COMPONENT_CONTAINER_ID)
				{
					BX.unbindAll(hrefFILTER[0]);
					BX.bind(hrefFILTER[0], 'click', function(e)
					{
						url = BX.util.htmlspecialcharsback(result.FILTER_AJAX_URL);
						BX.ajax.insertToNode(url, result.COMPONENT_CONTAINER_ID);
						return BX.PreventDefault(e);
					});
				}

				if (result.INSTANT_RELOAD && result.COMPONENT_CONTAINER_ID)
				{
					url = BX.util.htmlspecialcharsback(result.FILTER_AJAX_URL);
					BX.ajax.insertToNode(url, result.COMPONENT_CONTAINER_ID);
				}
				else
				{
					if (modef.style.display === 'none')
					{
						modef.style.display = 'inline-block';
					}

					if (this.viewMode == "VERTICAL")
					{
						// curProp = BX.findChild(BX.findParent(this.curFilterinput, {'class':'bx-filter-parameters-box'}), {'class':'bx-filter-container-modef'}, true, false);
						// curProp.appendChild(modef);
					}

					if (result.SEF_SET_FILTER_URL)
					{
						this.bindUrlToButton('set_filter', result.SEF_SET_FILTER_URL);
					}
				}
			}
		}

		if (this.sef)
		{
			var set_filter = BX('set_filter');
			set_filter.disabled = false;
		}

		if (!fromCache && this.cacheKey !== '')
		{
			this.cache[this.cacheKey] = result;
		}
		this.cacheKey = '';
	};

	JCSmartFilter.prototype.bindUrlToButton = function (buttonId, url)
	{
		var button = BX(buttonId);
		if (button)
		{
			var proxy = function(j, func)
			{
				return function()
				{
					return func(j);
				}
			};

			if (button.type == 'submit')
				button.type = 'button';

			BX.bind(button, 'click', proxy(url, function(url)
			{
				window.location.href = url;
				return false;
			}));
		}
	};

	JCSmartFilter.prototype.gatherInputsValues = function (values, elements)
	{
		if(elements)
		{
			for(var i = 0; i < elements.length; i++)
			{
				var el = elements[i];
				if (el.disabled || !el.type)
					continue;

				switch(el.type.toLowerCase())
				{
					case 'text':
					case 'textarea':
					case 'password':
					case 'hidden':
					case 'select-one':
						if(el.value.length)
							values[values.length] = {name : el.name, value : el.value};
						break;
					case 'radio':
					case 'checkbox':
						if(el.checked)
							values[values.length] = {name : el.name, value : el.value};
						break;
					case 'select-multiple':
						for (var j = 0; j < el.options.length; j++)
						{
							if (el.options[j].selected)
								values[values.length] = {name : el.name, value : el.options[j].value};
						}
						break;
					default:
						break;
				}
			}
		}
	};

	JCSmartFilter.prototype.values2post = function (values)
	{
		var post = [];
		var current = post;
		var i = 0;

		while(i < values.length)
		{
			var p = values[i].name.indexOf('[');
			if(p == -1)
			{
				current[values[i].name] = values[i].value;
				current = post;
				i++;
			}
			else
			{
				var name = values[i].name.substring(0, p);
				var rest = values[i].name.substring(p+1);
				if(!current[name])
					current[name] = [];

				var pp = rest.indexOf(']');
				if(pp == -1)
				{
					//Error - not balanced brackets
					current = post;
					i++;
				}
				else if(pp == 0)
				{
					//No index specified - so take the next integer
					current = current[name];
					values[i].name = '' + current.length;
				}
				else
				{
					//Now index name becomes and name and we go deeper into the array
					current = current[name];
					values[i].name = rest.substring(0, pp) + rest.substring(pp+1);
				}
			}
		}
		return post;
	};

	JCSmartFilter.prototype.hideFilterProps = function(element)
	{
		var obj = element.parentNode,
			filterBlock = obj.querySelector("[data-role='bx_filter_block']"),
			propAngle = obj.querySelector("[data-role='prop_angle']");

		if(BX.hasClass(obj, "bx-active"))
		{
			new BX.easing({
				duration : 300,
				start : { opacity: 1,  height: filterBlock.offsetHeight },
				finish : { opacity: 0, height:0 },
				transition : BX.easing.transitions.quart,
				step : function(state){
					filterBlock.style.opacity = state.opacity;
					filterBlock.style.height = state.height + "px";
				},
				complete : function() {
					filterBlock.setAttribute("style", "");
					BX.removeClass(obj, "bx-active");
				}
			}).animate();

			BX.addClass(propAngle, "fa-angle-down");
			BX.removeClass(propAngle, "fa-angle-up");
		}
		else
		{
			filterBlock.style.display = "block";
			filterBlock.style.opacity = 0;
			filterBlock.style.height = "auto";

			var obj_children_height = filterBlock.offsetHeight;
			filterBlock.style.height = 0;

			new BX.easing({
				duration : 300,
				start : { opacity: 0,  height: 0 },
				finish : { opacity: 1, height: obj_children_height },
				transition : BX.easing.transitions.quart,
				step : function(state){
					filterBlock.style.opacity = state.opacity;
					filterBlock.style.height = state.height + "px";
				},
				complete : function() {
				}
			}).animate();

			BX.addClass(obj, "bx-active");
			BX.removeClass(propAngle, "fa-angle-down");
			BX.addClass(propAngle, "fa-angle-up");
		}
	};

	JCSmartFilter.prototype.showDropDownPopup = function(element, popupId)
	{
		var contentNode = element.querySelector('[data-role="dropdownContent"]');
		this.popups["smartFilterDropDown"+popupId] = BX.PopupWindowManager.create("smartFilterDropDown"+popupId, element, {
			autoHide: true,
			offsetLeft: 0,
			offsetTop: 3,
			overlay : false,
			draggable: {restrict:true},
			closeByEsc: true,
			content: BX.clone(contentNode)
		});
		this.popups["smartFilterDropDown"+popupId].show();
	};

	JCSmartFilter.prototype.selectDropDownItem = function(element, controlId)
	{
		this.keyup(BX(controlId));

		var wrapContainer = BX.findParent(BX(controlId), {className:"bx-filter-select-container"}, false);

		var currentOption = wrapContainer.querySelector('[data-role="currentOption"]');
		currentOption.innerHTML = element.innerHTML;
		BX.PopupWindowManager.getCurrentPopup().close();
	};

	BX.namespace("BX.Iblock.SmartFilter");
	BX.Iblock.SmartFilter = (function()
	{
		/** @param {{
				leftSlider: string,
				rightSlider: string,
				tracker: string,
				trackerWrap: string,
				minInputId: string,
				maxInputId: string,
				minPrice: float|int|string,
				maxPrice: float|int|string,
				curMinPrice: float|int|string,
				curMaxPrice: float|int|string,
				fltMinPrice: float|int|string|null,
				fltMaxPrice: float|int|string|null,
				precision: int|null,
				colorUnavailableActive: string,
				colorAvailableActive: string,
				colorAvailableInactive: string
			}} arParams
		*/
		var SmartFilter = function(arParams)
		{
			if (typeof arParams === 'object')
			{
				this.leftSlider = BX(arParams.leftSlider);
				this.rightSlider = BX(arParams.rightSlider);
				this.tracker = BX(arParams.tracker);
				this.trackerWrap = BX(arParams.trackerWrap);

				this.minInput = BX(arParams.minInputId);
				this.maxInput = BX(arParams.maxInputId);

				this.minPrice = parseFloat(arParams.minPrice);
				this.maxPrice = parseFloat(arParams.maxPrice);

				this.curMinPrice = parseFloat(arParams.curMinPrice);
				this.curMaxPrice = parseFloat(arParams.curMaxPrice);

				this.fltMinPrice = arParams.fltMinPrice ? parseFloat(arParams.fltMinPrice) : parseFloat(arParams.curMinPrice);
				this.fltMaxPrice = arParams.fltMaxPrice ? parseFloat(arParams.fltMaxPrice) : parseFloat(arParams.curMaxPrice);

				this.precision = arParams.precision || 0;

				this.priceDiff = this.maxPrice - this.minPrice;

				this.leftPercent = 0;
				this.rightPercent = 0;

				this.fltMinPercent = 0;
				this.fltMaxPercent = 0;

				this.colorUnavailableActive = BX(arParams.colorUnavailableActive);//gray
				this.colorAvailableActive = BX(arParams.colorAvailableActive);//blue
				this.colorAvailableInactive = BX(arParams.colorAvailableInactive);//light blue

				this.isTouch = false;

				this.init();

				if ('ontouchstart' in document.documentElement)
				{
					this.isTouch = true;

					BX.bind(this.leftSlider, "touchstart", BX.proxy(function(event){
						this.onMoveLeftSlider(event)
					}, this));

					BX.bind(this.rightSlider, "touchstart", BX.proxy(function(event){
						this.onMoveRightSlider(event)
					}, this));
				}
				else
				{
					BX.bind(this.leftSlider, "mousedown", BX.proxy(function(event){
						this.onMoveLeftSlider(event)
					}, this));

					BX.bind(this.rightSlider, "mousedown", BX.proxy(function(event){
						this.onMoveRightSlider(event)
					}, this));
				}

				BX.bind(this.minInput, "keyup", BX.proxy(function(event){
					this.onInputChange();
				}, this));

				BX.bind(this.maxInput, "keyup", BX.proxy(function(event){
					this.onInputChange();
				}, this));
			}
		};

		SmartFilter.prototype.init = function()
		{
			var priceDiff;

			if (this.curMinPrice > this.minPrice)
			{
				priceDiff = this.curMinPrice - this.minPrice;
				this.leftPercent = (priceDiff*100)/this.priceDiff;

				this.leftSlider.style.left = this.leftPercent + "%";
				this.colorUnavailableActive.style.left = this.leftPercent + "%";
			}

			this.setMinFilteredValue(this.fltMinPrice);

			if (this.curMaxPrice < this.maxPrice)
			{
				priceDiff = this.maxPrice - this.curMaxPrice;
				this.rightPercent = (priceDiff*100)/this.priceDiff;

				this.rightSlider.style.right = this.rightPercent + "%";
				this.colorUnavailableActive.style.right = this.rightPercent + "%";
			}

			this.setMaxFilteredValue(this.fltMaxPrice);
		};

		SmartFilter.prototype.setMinFilteredValue = function (fltMinPrice)
		{
			this.fltMinPrice = parseFloat(fltMinPrice);
			if (this.fltMinPrice >= this.minPrice)
			{
				var priceDiff = this.fltMinPrice - this.minPrice;
				this.fltMinPercent = (priceDiff*100)/this.priceDiff;

				if (this.leftPercent > this.fltMinPercent)
					this.colorAvailableActive.style.left = this.leftPercent + "%";
				else
					this.colorAvailableActive.style.left = this.fltMinPercent + "%";

				this.colorAvailableInactive.style.left = this.fltMinPercent + "%";
			}
			else
			{
				this.colorAvailableActive.style.left = "0%";
				this.colorAvailableInactive.style.left = "0%";
			}
		};

		SmartFilter.prototype.setMaxFilteredValue = function (fltMaxPrice)
		{
			this.fltMaxPrice = parseFloat(fltMaxPrice);
			if (this.fltMaxPrice <= this.maxPrice)
			{
				var priceDiff = this.maxPrice - this.fltMaxPrice;
				this.fltMaxPercent = (priceDiff*100)/this.priceDiff;

				if (this.rightPercent > this.fltMaxPercent)
					this.colorAvailableActive.style.right = this.rightPercent + "%";
				else
					this.colorAvailableActive.style.right = this.fltMaxPercent + "%";

				this.colorAvailableInactive.style.right = this.fltMaxPercent + "%";
			}
			else
			{
				this.colorAvailableActive.style.right = "0%";
				this.colorAvailableInactive.style.right = "0%";
			}
		};

		SmartFilter.prototype.getXCoord = function(elem)
		{
			var box = elem.getBoundingClientRect();
			var body = document.body;
			var docElem = document.documentElement;

			var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
			var clientLeft = docElem.clientLeft || body.clientLeft || 0;
			var left = box.left + scrollLeft - clientLeft;

			return Math.round(left);
		};

		SmartFilter.prototype.getPageX = function(e)
		{
			e = e || window.event;
			var pageX = null;

			if (this.isTouch && event.targetTouches[0] != null)
			{
				pageX = e.targetTouches[0].pageX;
			}
			else if (e.pageX != null)
			{
				pageX = e.pageX;
			}
			else if (e.clientX != null)
			{
				var html = document.documentElement;
				var body = document.body;

				pageX = e.clientX + (html.scrollLeft || body && body.scrollLeft || 0);
				pageX -= html.clientLeft || 0;
			}

			return pageX;
		};

		SmartFilter.prototype.recountMinPrice = function()
		{
			var newMinPrice = (this.priceDiff*this.leftPercent)/100;
			newMinPrice = (this.minPrice + newMinPrice).toFixed(this.precision);

			if (newMinPrice != this.minPrice)
				this.minInput.value = newMinPrice;
			else
				this.minInput.value = "";
			/** @global JCSmartFilter smartFilter */
			smartFilter.keyup(this.minInput);
		};

		SmartFilter.prototype.recountMaxPrice = function()
		{
			var newMaxPrice = (this.priceDiff*this.rightPercent)/100;
			newMaxPrice = (this.maxPrice - newMaxPrice).toFixed(this.precision);

			if (newMaxPrice != this.maxPrice)
				this.maxInput.value = newMaxPrice;
			else
				this.maxInput.value = "";
			/** @global JCSmartFilter smartFilter */
			smartFilter.keyup(this.maxInput);
		};

		SmartFilter.prototype.onInputChange = function ()
		{
			var priceDiff;
			if (this.minInput.value)
			{
				var leftInputValue = this.minInput.value;
				if (leftInputValue < this.minPrice)
					leftInputValue = this.minPrice;

				if (leftInputValue > this.maxPrice)
					leftInputValue = this.maxPrice;

				priceDiff = leftInputValue - this.minPrice;
				this.leftPercent = (priceDiff*100)/this.priceDiff;

				this.makeLeftSliderMove(false);
			}

			if (this.maxInput.value)
			{
				var rightInputValue = this.maxInput.value;
				if (rightInputValue < this.minPrice)
					rightInputValue = this.minPrice;

				if (rightInputValue > this.maxPrice)
					rightInputValue = this.maxPrice;

				priceDiff = this.maxPrice - rightInputValue;
				this.rightPercent = (priceDiff*100)/this.priceDiff;

				this.makeRightSliderMove(false);
			}
		};

		SmartFilter.prototype.makeLeftSliderMove = function(recountPrice)
		{
			recountPrice = (recountPrice !== false);

			this.leftSlider.style.left = this.leftPercent + "%";
			this.colorUnavailableActive.style.left = this.leftPercent + "%";

			var areBothSlidersMoving = false;
			if (this.leftPercent + this.rightPercent >= 100)
			{
				areBothSlidersMoving = true;
				this.rightPercent = 100 - this.leftPercent;
				this.rightSlider.style.right = this.rightPercent + "%";
				this.colorUnavailableActive.style.right = this.rightPercent + "%";
			}

			if (this.leftPercent >= this.fltMinPercent && this.leftPercent <= (100-this.fltMaxPercent))
			{
				this.colorAvailableActive.style.left = this.leftPercent + "%";
				if (areBothSlidersMoving)
				{
					this.colorAvailableActive.style.right = 100 - this.leftPercent + "%";
				}
			}
			else if(this.leftPercent <= this.fltMinPercent)
			{
				this.colorAvailableActive.style.left = this.fltMinPercent + "%";
				if (areBothSlidersMoving)
				{
					this.colorAvailableActive.style.right = 100 - this.fltMinPercent + "%";
				}
			}
			else if(this.leftPercent >= this.fltMaxPercent)
			{
				this.colorAvailableActive.style.left = 100-this.fltMaxPercent + "%";
				if (areBothSlidersMoving)
				{
					this.colorAvailableActive.style.right = this.fltMaxPercent + "%";
				}
			}

			if (recountPrice)
			{
				this.recountMinPrice();
				if (areBothSlidersMoving)
					this.recountMaxPrice();
			}
		};

		SmartFilter.prototype.countNewLeft = function(event)
		{
			var pageX = this.getPageX(event);

			var trackerXCoord = this.getXCoord(this.trackerWrap);
			var rightEdge = this.trackerWrap.offsetWidth;

			var newLeft = pageX - trackerXCoord;

			if (newLeft < 0)
				newLeft = 0;
			else if (newLeft > rightEdge)
				newLeft = rightEdge;

			return newLeft;
		};

		SmartFilter.prototype.onMoveLeftSlider = function(e)
		{
			if (!this.isTouch)
			{
				this.leftSlider.ondragstart = function() {
					return false;
				};
			}

			if (!this.isTouch)
			{
				document.onmousemove = BX.proxy(function(event) {
					this.leftPercent = ((this.countNewLeft(event)*100)/this.trackerWrap.offsetWidth);
					this.makeLeftSliderMove();
				}, this);

				document.onmouseup = function() {
					document.onmousemove = document.onmouseup = null;
				};
			}
			else
			{
				document.ontouchmove = BX.proxy(function(event) {
					this.leftPercent = ((this.countNewLeft(event)*100)/this.trackerWrap.offsetWidth);
					this.makeLeftSliderMove();
				}, this);

				document.ontouchend = function() {
					document.ontouchmove = document.touchend = null;
				};
			}

			return false;
		};

		SmartFilter.prototype.makeRightSliderMove = function(recountPrice)
		{
			recountPrice = (recountPrice !== false);

			this.rightSlider.style.right = this.rightPercent + "%";
			this.colorUnavailableActive.style.right = this.rightPercent + "%";

			var areBothSlidersMoving = false;
			if (this.leftPercent + this.rightPercent >= 100)
			{
				areBothSlidersMoving = true;
				this.leftPercent = 100 - this.rightPercent;
				this.leftSlider.style.left = this.leftPercent + "%";
				this.colorUnavailableActive.style.left = this.leftPercent + "%";
			}

			if ((100-this.rightPercent) >= this.fltMinPercent && this.rightPercent >= this.fltMaxPercent)
			{
				this.colorAvailableActive.style.right = this.rightPercent + "%";
				if (areBothSlidersMoving)
				{
					this.colorAvailableActive.style.left = 100 - this.rightPercent + "%";
				}
			}
			else if(this.rightPercent <= this.fltMaxPercent)
			{
				this.colorAvailableActive.style.right = this.fltMaxPercent + "%";
				if (areBothSlidersMoving)
				{
					this.colorAvailableActive.style.left = 100 - this.fltMaxPercent + "%";
				}
			}
			else if((100-this.rightPercent) <= this.fltMinPercent)
			{
				this.colorAvailableActive.style.right = 100-this.fltMinPercent + "%";
				if (areBothSlidersMoving)
				{
					this.colorAvailableActive.style.left = this.fltMinPercent + "%";
				}
			}

			if (recountPrice)
			{
				this.recountMaxPrice();
				if (areBothSlidersMoving)
					this.recountMinPrice();
			}
		};

		SmartFilter.prototype.onMoveRightSlider = function(e)
		{
			if (!this.isTouch)
			{
				this.rightSlider.ondragstart = function() {
					return false;
				};
			}

			if (!this.isTouch)
			{
				document.onmousemove = BX.proxy(function(event) {
					this.rightPercent = 100-(((this.countNewLeft(event))*100)/(this.trackerWrap.offsetWidth));
					this.makeRightSliderMove();
				}, this);

				document.onmouseup = function() {
					document.onmousemove = document.onmouseup = null;
				};
			}
			else
			{
				document.ontouchmove = BX.proxy(function(event) {
					this.rightPercent = 100-(((this.countNewLeft(event))*100)/(this.trackerWrap.offsetWidth));
					this.makeRightSliderMove();
				}, this);

				document.ontouchend = function() {
					document.ontouchmove = document.ontouchend = null;
				};
			}

			return false;
		};

		return SmartFilter;
	})();
		var smartFilter = new JCSmartFilter('<?echo CUtil::JSEscape($arResult["FORM_ACTION"])?>', '<?=CUtil::JSEscape($arParams["FILTER_VIEW_MODE"])?>', <?=CUtil::PhpToJSObject($arResult["JS_FILTER_PARAMS"])?>);
</script>