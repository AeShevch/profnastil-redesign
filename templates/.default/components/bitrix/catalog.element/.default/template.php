<?php
/**
 * @var array $arResult
 * @var array $component
 * @global CMain $APPLICATION
 */

if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

//echo "<pre>";
//print_r($arResult);
//echo "</pre>";
?>

<article class="product">
    <div class="row align-items-end mb-3">
        <div class="col-8">
            <h1 class="product__title">
                <?php echo $arResult["NAME"] ?>
            </h1>
        </div>
        <div class="col-4">
            <div class="row">
                <div class="col-9">
                    <dl class="description-list description-list_row">
                        <div class="description-list__item">
                            <dt class="description-list__title">Код товара:</dt>
                            <dd class="description-list__value"><?php echo $arResult["PROPERTIES"]["KOD"]["VALUE"] ?></dd>
                        </div>
                        <div class="description-list__item">
                            <dt class="description-list__title">P/N:</dt>
                            <dd class="description-list__value">MX9R2RU/A</dd>
                        </div>
                    </dl>
                </div>
                <div class="col-3">
                    <svg class="product__premium-icon" width="76" height="22">
                        <use xlink:href="#icon_apple-premium"></use>
                    </svg>
                </div>
            </div>
        </div>
    </div>
    <form action="" name="product-form" class="product__main section">
        <div class="row">
            <div class="col-8">
                <div class="row">
                    <div class="col-12 mb-2">
                        <div class="product__labels product-labels">
                            <ul class="product-labels__list product-labels__list_row list-reset">
                                <li>
                                    <mark class="product-labels__item">
                                        Скидка 10%
                                    </mark>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-12">
                        <?php
                        // Слайдер с миниатюрами
                        $APPLICATION->IncludeComponent(
                            "pfn:thumbnail-slider",
                            "",
                            [
                                "IMAGES" => $arResult["DETAIL_PICTURE"]
                            ],
                            $component
                        );
                        ?>
                    </div>
                </div>
            </div>
            <div class="col-4 border-start">
                <div class="product__prices product-prices">
                    <div class="product-prices__row">
                        <fieldset class="count-field me-4">
                            <div class="count-field__inner">
                                <button aria-controls="product-count-input"
                                        aria-label="Уменьшить количество товара на 1"
                                        onClick="this.parentElement.children['product-count-input'].stepDown()"
                                        class="count-field__button count-field__button_minus"
                                        type="button">
                                    –
                                </button>
                                <input id="product-count-input"
                                       aria-label="Количество товара"
                                       autocomplete="off"
                                       class="count-field__input"
                                       max="<?php // echo $arResult["PRODUCT"]["QUANTITY"] ?>"
                                       min="1"
                                       name="count"
                                       step="1"
                                       pattern="\d+"
                                       type="number"
                                       value="1">
                                <button aria-controls="product-count-input"
                                        aria-label="Увеличить количество товара на 1"
                                        onClick="this.parentElement.children['product-count-input'].stepUp()"
                                        class="count-field__button count-field__button_plus"
                                        type="button">
                                    +
                                </button>
                            </div>
                        </fieldset>
                        <span class="product-prices__old me-3">
                            120 000 ₽
                        </span>
                        <span class="product-prices__main">
                            120 000 ₽
                        </span>
                    </div>
                    <span class="product-prices__total">
                        итого:
                        <b>4 700 000 ₽</b>
                    </span>
                </div>
                <div class="product__controls product-controls">
                    <div class="row">
                        <div class="col-7">
                            <a aria-label="Добавить в корзину"
                               class="product-controls__add-to-cart button button_size_high w-100"
                               href="<?php echo $arResult["ADD_URL"] ?>"
                               type="button">
                                Добавить в корзину
                            </a>
                        </div>
                        <div class="col-5">
                            <a aria-label="Быстрая покупка"
                               class="product-controls__add-to-compare button button_outlined button_size_high w-100"
                               href=""
                               type="button">
                                Купить в 1 клик
                            </a>
                        </div>
                        <div class="col-4">
                            <a aria-label="Открыть список соцсетей"
                               class="product-controls__item"
                               data-bs-container="body"
                               data-bs-toggle="popover"
                               data-bs-placement="bottom"
                               data-bs-trigger="focus"
                               data-html-content="#share-variants"
                               role="button"
                               tabindex="0">
                                <svg width="16" height="16">
                                    <use xlink:href="#icon_share"></use>
                                </svg>
                                Поделиться
                            </a>
                            <template id="share-variants">
                                <nav class="share-variants" style="margin: -0.5em 0;">
                                    <ul class="list-reset d-flex align-items-center">
                                        <li class="me-2">
                                            <a href="http://vk.com/share.php?url={https://<?php echo $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'] ?>}&title={<?php echo $arResult["NAME"] ?>}&description={<?php echo $arResult["META_DESCRIPTION"] ?>}&image={https://<?php echo $_SERVER['HTTP_HOST'] . $arResult["MORE_PHOTO"][0]["SRC"] ?>}&noparse=true"
                                               target="_blank"
                                               aria-label="Поделиться товаром в VKontakte">
                                                <svg width="28" height="28" aria-hidden="true">
                                                    <use xlink:href="#icon_vk"></use>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/sharer/sharer.php?u={https://<?php echo $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'] ?>}&picture={https://<?php echo $_SERVER['HTTP_HOST'] . $arResult["MORE_PHOTO"][0]["SRC"] ?>}"
                                               target="_blank"
                                               aria-label="Поделиться товаром в facebook">
                                                <svg width="28" height="28" aria-hidden="true">
                                                    <use xlink:href="#icon_facebook"></use>
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </template>
                        </div>
                        <div class="col-4">
                            <a aria-label="Добавить товар в список сравнения"
                               class="product-controls__item"
                               href="<?php echo $arResult["COMPARE_URL"] ?>">
                                <svg width="16" height="16">
                                    <use xlink:href="#icon_compare"></use>
                                </svg>
                                Сравнение
                            </a>
                        </div>
                        <div class="col-4">
                            <a aria-label="Добавить товар в список избранных"
                               class="product-controls__item"
                               href="<?php echo $arResult["SUBSCRIBE_URL"] ?>">
                                <svg width="16" height="16">
                                    <use xlink:href="#icon_like"></use>
                                </svg>
                                Избранное
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
    <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Описание</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Харакетристики</button>
        </li>
    </ul>
    <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
    </div>
</article>
