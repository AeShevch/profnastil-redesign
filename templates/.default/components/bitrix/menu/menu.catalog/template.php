<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */

$this->setFrameMode(true);

if (empty($arResult["ALL_ITEMS"]))
    return;
?>
<nav class="left-menu" role="navigation" aria-label="Главное меню">
  <ul class="left-menu__list list-reset">
      <?
      $index = 0;
      foreach ($arResult["MENU_STRUCTURE"] as $itemID => $arColumns):
          $currentSection = $arResult["ALL_ITEMS"][$itemID];
          ?>
        <li class="left-menu__item left-menu-item">
          <a class="left-menu-item__link js-sync-with-popup js-stop-propagation-click"
             data-index="<?= $index ?>"
             title="Перейти к разделу «<?= $currentSection["TEXT"] ?>»"
              <?= Site::isCurrentPage($currentSection["LINK"] ? "aria-current=\"page\"" : ""); ?>
             href="<?= $currentSection["LINK"] ?>">
            <img src="<?= $currentSection["PARAMS"]["picture_src"] ?>"
                 class="left-menu-item__icon"
                 alt="Изображение раздела «<?= $currentSection["TEXT"] ?>»"
                 loading="lazy"
                 width="24" height="24">
            <span class="left-menu-item__title">
                <?= $currentSection["TEXT"] ?>
            </span>
          </a>
            <? // Подменю
            if (is_array($arColumns) && count($arColumns) > 0):
                require($_SERVER["DOCUMENT_ROOT"] . "/" . $templateFolder . "/parts/submenu-popup.php"); ?>
            <? endif ?>
        </li>
      <?
      $index++;
      endforeach; ?>
  </ul>
</nav>




