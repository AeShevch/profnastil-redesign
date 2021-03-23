<?php
/** @global CMain $APPLICATION */
/** @var array $arResult */
/** @var CBitrixComponent $component */
?>

<div class="splide js-products-carousel">
    <div class="splide__track">
        <ul class="splide__list">
            <?php foreach ($arResult["ITEMS"] as $item) : ?>
                <li class="splide__slide">
                    <?php
                    $APPLICATION->IncludeComponent(
                        'bitrix:catalog.item',
                        'mini-product',
                        [
                            'RESULT' => [
                                'ITEM' => $item,
                            ],
                        ],
                        $component
                    );
                    ?>
                </li>
            <?php endforeach; ?>
        </ul>
    </div>
</div>