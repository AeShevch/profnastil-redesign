<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>
<?php
// $arrCity = Site::getCityParams();
// Мок, чтобы не создавать города
$arrCity = [
    [
        "NAME" => "Санкт-Петербург",
        "CODE" => ""
    ],
    [
        "NAME" => "Сургут",
        "CODE" => ""
    ],
];
?>
<div class="city-select icon-row">
  <svg class="city-select__icon icon-row__icon" width="21" height="21">
      <use xlink:href="#icon_pointer"></use>
  </svg>
  <select class="city-select__field icon-row__text select-reset"
          name="REGION"
          id="user-region"
          onchange="this.form.submit();"
          aria-label="Выберите ваш город">
      <?php foreach ($arrCity as $city): ?>
        <option value="<?php echo $city["CODE"]; ?>" <?//= $city["CODE"] === $_SESSION["CLIENT_LOCATION_CITY_CODE"] ? "selected" : ""; ?>>
            <?php echo $city["NAME"]; ?>
        </option>
      <?php endforeach; ?>
  </select>
</div>
