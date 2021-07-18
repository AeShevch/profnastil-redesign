<?php if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>
<div class="sku-properties">
    <!--  Colors  -->
    <fieldset class="custom-fieldset mb-4">
        <legend class="custom-fieldset__legend">
            Цвет:
        </legend>
        <div class="custom-fieldset__inner">
            <!-- Radio button -->
            <div class="custom-fieldset__field button-toggle button-toggle_color">
                <input class="button-toggle__input"
                       name="color"
                       checked
                       id="product-field-color-0"
                       type="radio"
                       value="">
                <label class="button-toggle__label"
                       style="background-color: red;"
                       aria-label="Красный"
                       for="product-field-color-0"></label>
            </div>
            <!-- Radio button -->
            <div class="custom-fieldset__field button-toggle button-toggle_color">
                <input class="button-toggle__input"
                       name="color"
                       id="product-field-color-1"
                       type="radio"
                       value="">
                <label class="button-toggle__label"
                       style="background-color: green;"
                       aria-label="Зелёный"
                       for="product-field-color-1"></label>
            </div>
            <!-- Radio button -->
            <div class="custom-fieldset__field button-toggle button-toggle_color">
                <input class="button-toggle__input"
                       name="color"
                       id="product-field-color-2"
                       type="radio"
                       value="">
                <label class="button-toggle__label"
                       style="background-color: blue;"
                       aria-label="Синий"
                       for="product-field-color-2"></label>
            </div>
            <!-- Radio button -->
            <div class="custom-fieldset__field button-toggle button-toggle_color">
                <input class="button-toggle__input"
                       name="color"
                       id="product-field-color-3"
                       type="radio"
                       value="">
                <label class="button-toggle__label"
                       style="background-color: yellow;"
                       aria-label="Жёлтый"
                       for="product-field-color-3"></label>
            </div>
        </div>
    </fieldset>

    <fieldset class="custom-fieldset mb-4">
        <legend class="custom-fieldset__legend">
            Оперативная память:
        </legend>
        <div class="custom-fieldset__inner">
            <!-- Radio button -->
            <div class="custom-fieldset__field button-toggle">
                <input class="button-toggle__input"
                       checked
                       name="ram"
                       id="product-field-ram-0"
                       type="radio"
                       value="">
                <label class="button-toggle__label" for="product-field-ram-0">
                    16 Гб
                </label>
            </div>
            <!-- Radio button -->
            <div class="custom-fieldset__field button-toggle">
                <input class="button-toggle__input"
                       name="ram"
                       id="product-field-ram-1"
                       type="radio"
                       value="">
                <label class="button-toggle__label" for="product-field-ram-1">
                    8 Гб
                </label>
            </div>
            <!-- Radio button -->
            <div class="custom-fieldset__field button-toggle">
                <input class="button-toggle__input"
                       name="ram"
                       id="product-field-ram-2"
                       type="radio"
                       value="">
                <label class="button-toggle__label" for="product-field-ram-2">
                    4 Гб
                </label>
            </div>
            <!-- Radio button -->
            <div class="custom-fieldset__field button-toggle">
                <input class="button-toggle__input"
                       name="ram"
                       id="product-field-ram-3"
                       type="radio"
                       value="">
                <label class="button-toggle__label" for="product-field-ram-3">
                    2 Гб
                </label>
            </div>
        </div>
    </fieldset>

    <fieldset class="custom-fieldset mb-4">
        <legend class="custom-fieldset__legend">
            SSD:
        </legend>
        <div class="custom-fieldset__inner">
            <!-- Radio button -->
            <div class="custom-fieldset__field button-toggle">
                <input class="button-toggle__input"
                       checked
                       name="disk"
                       id="product-field-disk-0"
                       type="radio"
                       value="">
                <label class="button-toggle__label" for="product-field-disk-0">
                    512 Гб
                </label>
            </div>
            <!-- Radio button -->
            <div class="custom-fieldset__field button-toggle">
                <input class="button-toggle__input"
                       name="disk"
                       id="product-field-disk-1"
                       type="radio"
                       value="">
                <label class="button-toggle__label" for="product-field-disk-1">
                    256 Гб
                </label>
            </div>
            <!-- Radio button -->
            <div class="custom-fieldset__field button-toggle">
                <input class="button-toggle__input"
                       name="disk"
                       id="product-field-disk-2"
                       type="radio"
                       value="">
                <label class="button-toggle__label" for="product-field-disk-2">
                    128 Гб
                </label>
            </div>
        </div>
    </fieldset>

    <fieldset class="custom-fieldset mb-4">
        <legend class="custom-fieldset__legend">
            Процессор:
        </legend>
        <div class="custom-fieldset__inner">
            <!-- Radio button -->
            <div class="custom-fieldset__field button-toggle">
                <input class="button-toggle__input"
                       checked
                       name="proc"
                       id="product-field-proc-0"
                       type="radio"
                       value="">
                <label class="button-toggle__label" for="product-field-proc-0">
                    Core i7
                </label>
            </div>
            <!-- Radio button -->
            <div class="custom-fieldset__field button-toggle">
                <input class="button-toggle__input"
                       name="proc"
                       id="product-field-proc-1"
                       type="radio"
                       value="">
                <label class="button-toggle__label" for="product-field-proc-1">
                    Core i5
                </label>
            </div>
            <!-- Radio button -->
            <div class="custom-fieldset__field button-toggle">
                <input class="button-toggle__input"
                       name="proc"
                       id="product-field-proc-2"
                       type="radio"
                       value="">
                <label class="button-toggle__label" for="product-field-proc-2">
                    Core i3
                </label>
            </div>
        </div>
    </fieldset>

    <fieldset class="custom-fieldset mb-4">
        <legend class="custom-fieldset__legend">
            Видеоадаптер:
        </legend>
        <div class="custom-fieldset__inner">
            <!-- Radio button -->
            <div class="custom-fieldset__field button-toggle">
                <input class="button-toggle__input"
                       checked
                       name="video"
                       id="product-field-video-0"
                       type="radio"
                       value="">
                <label class="button-toggle__label" for="product-field-video-0">
                    AMD Radeon 5300M
                </label>
            </div>
            <!-- Radio button -->
            <div class="custom-fieldset__field button-toggle">
                <input class="button-toggle__input"
                       name="video"
                       id="product-field-video-1"
                       type="radio"
                       value="">
                <label class="button-toggle__label" for="product-field-video-1">
                    AMD Radeon Pro 6700M
                </label>
            </div>
        </div>
    </fieldset>
</div>
