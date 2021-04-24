<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

/** @var array $arColumns */
/** @var array $arResult */
?>
<div class="left-menu-item__popup submenu-popup">
    <div class="submenu-popup__inner">
        <ul class="submenu-popup__list row">
            <? foreach ($arColumns as $key => $arRow): ?>
                <? foreach ($arRow as $itemIdLevel_2 => $arLevel_3):
                    $currentSection = $arResult["ALL_ITEMS"][$itemIdLevel_2];
                    ?>
                    <li class="submenu-popup__list-item col-3 mb-3">
                        <a class="submenu-popup__title"
                           title="Перейти к разделу «<?= $currentSection["TEXT"] ?>»"
                           href="<?= $currentSection["LINK"] ?>">
                            <span><?= $currentSection["TEXT"] ?></span>
                        </a>

                        <? if (is_array($arLevel_3) && count($arLevel_3) > 0): ?>
                            <ul class="submenu-popup__sub">
                                <? foreach ($arLevel_3 as $itemIdLevel_3):
                                    $currentSection = $arResult["ALL_ITEMS"][$itemIdLevel_3];
                                    ?>
                                    <li>
                                        <a href="<?= $currentSection["LINK"] ?>"
                                           title="Перейти к разделу «<?= $currentSection["TEXT"] ?>»">
                                            <span><?= $currentSection["TEXT"] ?></span>
                                        </a>
                                    </li>
                                <? endforeach; ?>
                            </ul>
                        <? endif ?>
                    </li>
                <? endforeach; ?>
            <? endforeach; ?>
        </ul>
    </div>
</div>
