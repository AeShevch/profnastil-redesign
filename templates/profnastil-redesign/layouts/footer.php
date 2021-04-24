<footer class="footer">
    <div class="container">
        <div class="footer__top">
            <div class="row">
                <div class="col-12 col-md-3 mb-4 mb-md-0">
                    <div class="footer__logo logo">
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
                    <div class="footer__payments">
                        <img src="<?= SITE_TEMPLATE_PATH ?>/images/payments/visa.svg"
                             class="me-4"
                             alt="Платежная система Visa"
                             width="60" height="20">
                        <img src="<?= SITE_TEMPLATE_PATH ?>/images/payments/mastercard.svg"
                             class="me-4"
                             alt="Платежная система Mastercard"
                             width="40" height="40">
                        <img src="<?= SITE_TEMPLATE_PATH ?>/images/payments/mir.svg"
                             alt="Платежная система Мир"
                             width="64" height="18">
                    </div>
                </div>
                <div class="col-12 col-md-6 mb-5 mb-md-0">
                    <div class="row">
                        <div class="col-12 col-sm-4 mb-4 mb-sm-0">
                            <div class="footer__nav">
                                <?php
                                // меню Футер 1
                                $APPLICATION->IncludeComponent(
                                    "bitrix:menu",
                                    "menu.vertical",
                                    [
                                        "TITLE" => "Каталог товаров",
                                        "ALLOW_MULTI_SELECT" => "N",
                                        "DELAY" => "N",
                                        "MAX_LEVEL" => "1",
                                        "MENU_CACHE_TIME" => "3600",
                                        "MENU_CACHE_TYPE" => "A",
                                        "MENU_CACHE_USE_GROUPS" => "Y",
                                        "ROOT_MENU_TYPE" => "footer-1",
                                        "CHILD_MENU_TYPE" => "footer-1",
                                        "USE_EXT" => "N",
                                    ],
                                    false
                                );
                                ?>
                            </div>
                        </div>
                        <div class="col-12 col-sm-4 mb-4 mb-sm-0">
                            <div class="footer__nav">
                                <?php
                                // меню Футер 1
                                $APPLICATION->IncludeComponent(
                                    "bitrix:menu",
                                    "menu.vertical",
                                    [
                                        "TITLE" => "Помощь покупателю",
                                        "ALLOW_MULTI_SELECT" => "N",
                                        "DELAY" => "N",
                                        "MAX_LEVEL" => "1",
                                        "MENU_CACHE_TIME" => "3600",
                                        "MENU_CACHE_TYPE" => "A",
                                        "MENU_CACHE_USE_GROUPS" => "Y",
                                        "ROOT_MENU_TYPE" => "footer-2",
                                        "CHILD_MENU_TYPE" => "footer-2",
                                        "USE_EXT" => "N",
                                    ],
                                    false
                                );
                                ?>
                            </div>
                        </div>
                        <div class="col-12 col-sm-4 mb-4 mb-sm-0">
                            <div class="footer__nav">
                                <?php
                                // меню Футер 1
                                $APPLICATION->IncludeComponent(
                                    "bitrix:menu",
                                    "menu.vertical",
                                    [
                                        "TITLE" => "Услуги",
                                        "ALLOW_MULTI_SELECT" => "N",
                                        "DELAY" => "N",
                                        "MAX_LEVEL" => "1",
                                        "MENU_CACHE_TIME" => "3600",
                                        "MENU_CACHE_TYPE" => "A",
                                        "MENU_CACHE_USE_GROUPS" => "Y",
                                        "ROOT_MENU_TYPE" => "footer-3",
                                        "CHILD_MENU_TYPE" => "footer-3",
                                        "USE_EXT" => "N",
                                    ],
                                    false
                                );
                                ?>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-3">
                    <div class="footer-contact">
                        <div class="footer-contact__inner">
                            <a class="footer-contact__link"
                               href="tel:+74242777566"
                               title="Позвонить нам">
                                +7 (4242) 777-566
                            </a>
                            <button class="footer-contact__button"
                                    type="button">
                                Заказать звонок
                            </button>
                        </div>
                        <img src="<?= SITE_TEMPLATE_PATH ?>/images/whatsapp.svg"
                             class="footer-contact__icon"
                             alt="Whatsapp logo"
                             width="42" height="42">
                    </div>
                    <div class="footer-contact">
                        <div class="footer-contact__inner">
                            <a class="footer-contact__link"
                               href="mailTo:tdprofnastil@mail.ru"
                               title="Связатьтся с нами по email">
                                tdprofnastil@mail.ru
                            </a>
                            <a href="mailTo:tdprofnastil@mail.ru"
                               class="footer-contact__button"
                               type="button">
                                Написать нам
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer__bottom">
            <div class="row pt-5">
                <div class="col-12 col-sm-6 col-md-2 mb-5 mb-md-0 d-flex align-items-center">
                    <p class="m-0">© 2003–2020 ООО "Гефест". <br> Все права защищены.</p>
                </div>
                <div class="col-12 col-sm-6 col-md-3 mb-5 mb-md-0 d-flex align-items-center ps-ms-0">
                    <p class="m-0">
                        При полном или частичном использовании материалов с сайта, ссылка на источник обязательна.
                    </p>
                </div>
                <div class="col-10 col-sm-8 col-md-4 d-flex align-items-center">
                    <a class="me-5" href="">Договор оферты</a>
                    <a href="">Политика конфиденцильности</a>
                </div>
                <div class="col-2 col-sm-4 col-md-3 text-end d-flex align-items-center justify-content-end">
                    <a href="#header">
                        Вверх
                    </a>
                </div>
            </div>
        </div>
    </div>
</footer>