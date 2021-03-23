<?php
/** @var array $arResult */

$mainPrice = str_replace(".00 руб", " р.", $arResult["ITEM"]["PRICES"]["Типовые правила продаж"]["PRINT_VALUE_NOVAT"]);
$oldPrice = str_replace(".00 руб", " р.", $arResult["ITEM"]["PRICES"]["Типовые правила продаж"]["PRINT_DISCOUNT_VALUE_NOVAT"]);

?>
<article class="product-card">
    <small class="product-card__article">
        Артикул: <?= $arResult["ITEM"]["ID"] ?>
    </small>
    <a href="" class="product-card__link">
        <img class="product-card__image"
             src="<?= $arResult["ITEM"]["PREVIEW_PICTURE"]["SRC"] ?>"
             alt="<?= $arResult["ITEM"]["PREVIEW_PICTURE"]["ALT"] ?>"
             title="<?= $arResult["ITEM"]["PREVIEW_PICTURE"]["TITLE"] ?>"
             loading="lazy"
             width="236"
             height="236"
        >
    </a>
    <a href="" class="product-card__link">
        <h3 class="product-card__title">
            <b><?= $arResult["ITEM"]["NAME"] ?></b>
        </h3>
    </a>
    <div class="product-card__prices">
        <b class="product-card__main-price">
            <?= $mainPrice ?>
        </b>
        <?php if ($mainPrice !== $oldPrice): ?>
            <s class="product-card__old-price">
                <?= $oldPrice ?>
            </s>
        <?php endif; ?>
    </div>
    <div class="product-card__buttons">
        <a href="<?= $arResult["ITEM"]["PREVIEW_PICTURE"]["HEIGHT"] ?>"
           title="Перейти на страницу товара «<?= $arResult["ITEM"]["ITEM"]["NAME"] ?>»"
           class="button"
           type="button">
            Подробнее
        </a>
        <a href="<?= $arResult["ITEM"]["PREVIEW_PICTURE"]["HEIGHT"] ?>"
           title="Добавить товар «<?= $arResult["ITEM"]["ITEM"]["ADD_URL"] ?>» в корзину"
           class="product-card__buy"
           type="button">
            В корзину
        </a>
    </div>

</article>

