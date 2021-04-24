<?php
/** @global CMain $APPLICATION */
/** @var array $arResult */
/** @var CBitrixComponent $component */
//echo "<pre>";
//
//foreach ($arResult["ITEMS"] as $item) {
//    print_r($item["PROPERTIES"]["KATEGORIYA_TOVARA"]);
//}
//echo "</pre>";

$tabItems = array_reduce($arResult["ITEMS"], function ($carry, $item) {
    $currentCategory = $item["PROPERTIES"]["KATEGORIYA_TOVARA"];
    if (!in_array($currentCategory["VALUE"], $carry)) {
        $carry[$currentCategory["VALUE_ENUM_ID"]] = $currentCategory["VALUE"];
    }
    return $carry;
}, []);
?>

<section class="product-carousel">
    <div class="product-carousel__header">
        <div class="product-carousel__title-wrap">
            <?php
            $APPLICATION->IncludeComponent(
                "pfn:brush-title",
                "",
                [
                    "TITLE" => $arResult["ORIGINAL_PARAMETERS"]["TITLE"],
                ],
                $component
            );
            ?>
            <?php if(count($tabItems) > 1) : ?>
            <div class="product-carousel__tablist"
                 role="tablist"
                 aria-label="Фильтр товаров по категории">
                <button role="tab"
                        class="product-carousel__tab"
                        data-filter-target="all"
                        aria-selected="true"
                        aria-controls="<?= $arResult["ORIGINAL_PARAMETERS"]["CAROUSEL_ID"] ?>">
                    Все
                </button>
                <?php foreach ($tabItems as $id => $title) : ?>
                    <button role="tab"
                            class="product-carousel__tab"
                            aria-selected="false"
                            data-filter-target="<?= $id ?>"
                            aria-controls="<?= $arResult["ORIGINAL_PARAMETERS"]["CAROUSEL_ID"] ?>">
                        <?= $title ?>
                    </button>
                <?php endforeach; ?>
            </div>
            <?php endif; ?>
        </div>
        <a href="" class="product-carousel__see-all">
            Все предложения
        </a>
        <div class="product-carousel__controls">
            <button class="product-carousel__control product-carousel__control_left js-slide-left"
                    type="button"
                    aria-label="Листать влево"
                    aria-controls="<?= $arResult["ORIGINAL_PARAMETERS"]["CAROUSEL_ID"] ?>">
                <svg width="22" height="22">
                    <use xlink:href="#icon_arrow"></use>
                </svg>
            </button>
            <button class="product-carousel__control product-carousel__control_right js-slide-right"
                    type="button"
                    aria-label="Листать вправо"
                    aria-controls="<?= $arResult["ORIGINAL_PARAMETERS"]["CAROUSEL_ID"] ?>">
                <svg width="22" height="22">
                    <use xlink:href="#icon_arrow"></use>
                </svg>
            </button>
        </div>
    </div>
    <div class="splide js-products-carousel"
         data-per-page="<?= $arResult["ORIGINAL_PARAMETERS"]["COUNT_PER_PAGE"] ?>"
         id="<?= $arResult["ORIGINAL_PARAMETERS"]["CAROUSEL_ID"] ?>">
        <div class="splide__track">
            <ul class="splide__list">
                <?php
                foreach ($arResult["ITEMS"] as $item) :
                    ?>
                    <li class="splide__slide"
                        data-filter="<?= $item["PROPERTIES"]["KATEGORIYA_TOVARA"]["VALUE_ENUM_ID"] ?>">
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
</section>