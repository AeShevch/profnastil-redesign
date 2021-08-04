<div class="mobile-filter-wrap modal fade" id="filter-mobile" tabindex="-1"
     aria-labelledby="mobile-filter-title" aria-hidden="true">`
    <div class="modal-dialog modal-dialog-scrollable m-0 h-100">
        <div class="modal-content min-vh-100">
            <div class="mobile-filter-wrap__header modal-header">
                <button class="mobile-filter-wrap__reset"
                        form="filter-form-mobile"
                        type="reset">
                    Сбросить
                </button>
                <h2 class="mobile-filter-wrap__title"
                    id="mobile-filter-title"
                    data-count="2">
                    Фильтры
                </h2>
                <button aria-label="Закрыть" class="btn-close m-0"
                        data-bs-dismiss="modal"
                        type="button"></button>
            </div>
            <div class="modal-body">
                <? $APPLICATION->IncludeComponent("bitrix:catalog.smart.filter", "profnastil", array("IS_MOBILE" => true,), [], false); ?>
            </div>
            <div class="mobile-filter-wrap__footer modal-footer">
                <button class="mobile-filter-wrap__submit button"
                        form="filter-form-mobile"
                        type="submit">
                    Показать 123 товара
                </button>
            </div>
        </div>
    </div>
</div>

