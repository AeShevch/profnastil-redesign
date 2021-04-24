<?php
/** @var array $arParams */

if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>
<div class="brush-stroke">
    <svg class="brush-stroke__left" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <use xlink:href="#left-stroke"/>
    </svg>
    <h2 class="brush-stroke__middle">
        <?= $arParams["TITLE"] ?>
    </h2>
    <svg class="brush-stroke__right" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <use xlink:href="#right-stroke"/>
    </svg>
</div>
