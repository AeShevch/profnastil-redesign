<header class="header-mobile d-lg-none position-relative">
    <div class="header-mobile__inner container-sm">
        <div class="row align-items-center">
            <div class="col-2 pe-0 js-catalog-mobile-dropdown-wrapper">
                <button class="header-mobile__burger hamburger__wrap"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        id="dropdownMobileMenuButton"
                        aria-label="Открыть меню категорий каталога"
                        type="button">
                    <span class="hamburger__box" aria-hidden="true">
                      <span class="hamburger__inner"></span>
                    </span>
                </button>
                <div class="m-search-collapse collapse" id="m-search">
                    <div class="m-search-collapse__inner container">
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
                </div>
                <div class="m-catalog-dropdown dropdown-menu js-catalog-dropdown col-12 col-md-6 pt-0"
                     aria-labelledby="dropdownMobileMenuButton">
                    <? $APPLICATION->IncludeComponent(
                        "bitrix:menu",
                        "vue-navigation",
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
            <div class="col-6">
                <div class="logo">
                    <a href="/"
                       class="logo__link"
                       title="Перейти на главную страницу">
                        <img src="<?= SITE_TEMPLATE_PATH ?>/images/logo.png"
                             class="logo__image"
                             alt="Логотип Профнастил"
                             loading="lazy"
                             width="85" height="31">
                    </a>
                </div>
            </div>
            <div class="col-4">
                <div class="row justify-content-end">
                    <div class="col-3 d-flex justify-content-end">
                        <a href="tel:" class="icon-button"
                           aria-label="Позвонить нам">
                            <svg aria-hidden="true" width="24" height="24">
                                <use xlink:href="#icon_phone"></use>
                            </svg>
                        </a>
                    </div>
                    <div class="col-3 d-flex justify-content-end">
                        <button class="icon-button icon-button_active js-stop-propagation-click"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#m-search"
                                aria-expanded="false"
                                aria-controls="m-search"
                                aria-label="Открыть форму поиска">
                            <svg aria-hidden="true" width="24" height="24">
                                <use xlink:href="#icon_search"></use>
                            </svg>
                        </button>
                    </div>
                    <div class="col-3 d-flex justify-content-end">
                        <button class="icon-button" type="button"
                                aria-label="Перейти в корзину">
                            <svg aria-hidden="true" width="24" height="24">
                                <use xlink:href="#icon_cart-thin"></use>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
