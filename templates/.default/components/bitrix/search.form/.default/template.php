<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

/** @var array $arResult */

$this->setFrameMode(true);
?>

<form class="search-form" name="search-form" action="<?= $arResult["FORM_ACTION"]; ?>">
  <input class="search-form__input form-control h-100" type="search"
         required
         name="q" placeholder="Найти"
         aria-label="Поиск по сайту">
  <button class="search-form__button" type="submit"
          name="s" aria-label="Найти">
    <svg width="25" height="25" aria-hidden="true">
      <use xlink:href="#icon_search"></use>
    </svg>
  </button>
</form>
