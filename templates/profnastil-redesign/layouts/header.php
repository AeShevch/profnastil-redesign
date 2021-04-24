<?php
/** @global CMain $APPLICATION */
/** @global $USER */
?>

<header class="header js-header-element d-none d-lg-block" id="header">
    <div class="header__top">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-8">
                    <div class="row align-items-center">
                        <div class="col-12">
                            <?php
                            // Верхнее меню
                            $APPLICATION->IncludeComponent(
                                "bitrix:menu",
                                "menu.header-top",
                                [
                                    "ALLOW_MULTI_SELECT" => "N",
                                    "DELAY" => "N",
                                    "MAX_LEVEL" => "1",
                                    "MENU_CACHE_TIME" => "3600",
                                    "MENU_CACHE_TYPE" => "A",
                                    "MENU_CACHE_USE_GROUPS" => "Y",
                                    "ROOT_MENU_TYPE" => "top",
                                    "CHILD_MENU_TYPE" => "top",
                                    "USE_EXT" => "N",
                                ],
                                false
                            );
                            ?>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="d-flex justify-content-end">
                        <a href="" download class="me-2 ps-3 pe-3 header__button button button_secondary">
                            Скачать прайс
                        </a>
                        <a href="" class="ps-3 pe-3 header__button button button_secondary">
                            Личный кабинет
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="header__main js-fixed-header">
        <div class="container">
            <div class="row">
                <div class="col-2 d-flex">
                    <div class="logo">
                        <a href="/"
                           class="logo__link"
                           title="Перейти на главную страницу">
                            <img src="<?= SITE_TEMPLATE_PATH ?>/images/logo.png"
                                 class="logo__image"
                                 alt="Логотип «Профнастил»"
                                 loading="lazy"
                                 width="125" height="45">
                        </a>
                    </div>
                    <div class="catalog-menu js-catalog-dropdown-wrapper">
                        <button class="catalog-menu__button btn button button_with-icon hamburger__wrap"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                id="dropdownMenuButton"
                                aria-label="Открыть меню категорий каталога"
                                type="button">
                            <span class="hamburger__box" aria-hidden="true">
                              <span class="hamburger__inner"></span>
                            </span>
                            <span><b>Каталог</b></span>
                        </button>
                        <div class="catalog-menu__dropdown dropdown-menu js-catalog-dropdown"
                             aria-labelledby="dropdownMenuButton">
                            <? $APPLICATION->IncludeComponent(
                            "bitrix:menu",
                            "menu.catalog",
                            array(
                                "MENU_CACHE_TYPE" => "A",
                                "MENU_CACHE_TIME" => "36000000",
                                "MENU_CACHE_USE_GROUPS" => "N",
                                "MENU_THEME" => "site",
                                "CACHE_SELECTED_ITEMS" => "N",
                                "MENU_CACHE_GET_VARS" => array(
                                ),
                                "MAX_LEVEL" => "3",
                                "CHILD_MENU_TYPE" => "left",
                                "USE_EXT" => "Y",
                                "DELAY" => "N",
                                "ALLOW_MULTI_SELECT" => "N",
                                "COMPONENT_TEMPLATE" => "menu.catalog",
                                "ROOT_MENU_TYPE" => "left"
                            ),
                            false
                        ); ?>
                        </div>
                    </div>
                </div>
                <div class="col-4 col-xxl-5">
                    <?php
                    $APPLICATION->IncludeComponent(
                        "bitrix:search.form",
                        ".default",
                        [
                            "PAGE" => "#SITE_DIR#search/index.php", // Страница выдачи результатов поиска (доступен макрос #SITE_DIR#)
                            "USE_SUGGEST" => "N",                   // Показывать подсказку с поисковыми фразами
                        ],
                        false
                    );
                    ?>
                </div>
                <div class="col-6 col-xxl-5">
                    <div class="row align-items-center">
                        <div class="col-4">
                            <div class="header-phone">
                                <a href="tel:+74242777566"
                                   title="Позвонить нам"
                                   class="header-phone__link">
                                    +7 (4242) 777-566
                                </a>
                                <button class="header-phone__back-ring"
                                        type="button">
                                    Заказать звонок
                                </button>
                            </div>
                        </div>
                        <div class="col-4 col-xl-3">
                            <div class="header-work-time">
                                <span>Звоните c 9 до 18</span><br>
                                <span>Сб: c 9 до 16</span>
                            </div>
                        </div>
                        <div class="col-4 col-xl-5">
                            <a href="" class="calc-link ms-auto">
                                <span class="calc-link__icon">
                                    <svg width="26" height="30">
                                        <use xlink:href="#icon_calc"></use>
                                    </svg>
                                </span>
                                <span class="calc-link__title">
                                    Калькулятор
                                </span>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="header__bottom">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-2"></div>
                <div class="col-6 col-xxl-5">
                    <div class="">
                        <?php
                        // Главное меню
                        $APPLICATION->IncludeComponent(
                            "bitrix:menu",
                            "menu.main",
                            [
                                "ALLOW_MULTI_SELECT" => "N",
                                "DELAY" => "N",
                                "MAX_LEVEL" => "1",
                                "MENU_CACHE_TIME" => "3600",
                                "MENU_CACHE_TYPE" => "A",
                                "MENU_CACHE_USE_GROUPS" => "Y",
                                "ROOT_MENU_TYPE" => "shop_main",
                                "CHILD_MENU_TYPE" => "shop_main",
                                "USE_EXT" => "N",
                            ],
                            false
                        );
                        ?>
                    </div>
                </div>
                <div class="col-4 col-xxl-3 ms-auto">
                    <nav class="row">
                        <div class="col-2 col-xl-3 border-start border-2">
                            <a href="" class="header-link">
                                <svg width="38" height="38">
                                    <use xlink:href="#icon_balance"></use>
                                </svg>
                            </a>
                        </div>
                        <div class="col-2 col-xl-3 border-start border-2">
                            <a href="" class="header-link header-link_favorites">
                                <svg width="33" height="33">
                                    <use xlink:href="#icon_heart"></use>
                                </svg>
                            </a>
                        </div>
                        <div class="col-8 col-xl-6 border-start border-2 d-flex">
                            <a href="" class="header-link mini-cart justify-content-start ms-auto">
                                <svg width="38" height="38">
                                    <use xlink:href="#icon_cart"></use>
                                </svg>
                                <span class="mini-cart__inner">
                                    <span class="mini-cart__title">Корзина</span>
                                    <span class="mini-cart__price">22 000 р.</span>
                                </span>
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</header>