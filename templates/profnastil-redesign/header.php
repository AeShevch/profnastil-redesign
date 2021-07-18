<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
$curPage = $APPLICATION->GetCurPage(true);
?>

<html xml:lang="<?= LANGUAGE_ID ?>" lang="<?= LANGUAGE_ID ?>">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title><? $APPLICATION->ShowTitle() ?></title>
  <link rel="shortcut icon" type="image/x-icon" href="<?= SITE_DIR ?>favicon.ico"/>

  <!-- Предзагрузка шрифтов -->
  <link rel="preload" href="<?=SITE_TEMPLATE_PATH?>/fonts/open-sans-v18-latin_cyrillic-regular.woff2"
        as="font" type="font/woff2" crossorigin="anonymous">
  <link rel="preload" href="<?=SITE_TEMPLATE_PATH?>/fonts/open-sans-v18-latin_cyrillic-600.woff2"
        as="font" type="font/woff2" crossorigin="anonymous">
  <link rel="preload" href="<?=SITE_TEMPLATE_PATH?>/fonts/open-sans-v18-latin_cyrillic-700.woff2"
        as="font" type="font/woff2" crossorigin="anonymous">

    <script data-skip-moving="true">
        window.bxConstants = {
            SITE_TEMPLATE_PATH: "<?= SITE_TEMPLATE_PATH ?>",
        }
    </script>

    <?php
    $APPLICATION->ShowHead();
    use Bitrix\Main\Page\Asset;

    // Основные стили шаблона
    Asset::getInstance()->addCss(SITE_TEMPLATE_PATH . "/dist/bundle.min.css");
    // Основный скрипт шаблона
    Asset::getInstance()->addJs(SITE_TEMPLATE_PATH . "/dist/bundle.min.js");
    ?>
</head>
<body>

<!-- Админ-бар Bitrix -->
<div id="panel"><? $APPLICATION->ShowPanel(); ?></div>

<?
// Header
$APPLICATION->IncludeFile(SITE_TEMPLATE_PATH . "/layouts/header.php"); ?>

<?php
// Header mobile
$APPLICATION->IncludeFile(SITE_TEMPLATE_PATH . "/layouts/header-mobile.php"); ?>

<main>