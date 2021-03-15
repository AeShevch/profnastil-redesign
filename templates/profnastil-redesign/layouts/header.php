<?php
/** @global CMain $APPLICATION */
/** @global $USER */
?>

<header class="l-header">
    <div class="l-header__top">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-9">
                    <div class="row align-items-center">
                        <div class="col-3">
                            <?php
                            // Компонент «Выбор города»
                            $APPLICATION->IncludeComponent("pfn:city-select", ".default"); ?>
                        </div>
                        <div class="col-9">
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
                <div class="col-3">
                    <div class="row">
                        <div class="col-6">
                            <a href="" download class="button button_secondary">
                                Скачать прайс
                            </a>
                        </div>
                        <div class="col-6">
                            <a href="" class="button button_secondary">
                                Личный кабинет
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="l-header__main js-fixed-header">
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
                                 width="150" height="55">
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
                                    "ROOT_MENU_TYPE" => "left",
                                    "MENU_CACHE_TYPE" => "A",
                                    "MENU_CACHE_TIME" => "36000000",
                                    "MENU_CACHE_USE_GROUPS" => "Y",
                                    "MENU_THEME" => "site",
                                    "CACHE_SELECTED_ITEMS" => "N",
                                    "MENU_CACHE_GET_VARS" => array(),
                                    "MAX_LEVEL" => "3",
                                    "CHILD_MENU_TYPE" => "left",
                                    "USE_EXT" => "Y",
                                    "DELAY" => "N",
                                    "ALLOW_MULTI_SELECT" => "N",
                                ),
                                false
                            ); ?>
                        </div>
                    </div>
                </div>
                <div class="col-5">
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
                <div class="col-5 ps-4">
                    <div class="row">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="header__bottom">
        <div class="container">
            <div class="row">
                <div class="col-2"></div>
                <div class="col">
                    <div class="border-top">
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
            </div>
        </div>
    </div>
</header>