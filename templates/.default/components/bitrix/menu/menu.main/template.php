<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
    die();
}

$this->setFrameMode(true);
if (!empty($arResult)): ?>
  <nav class="main-menu" role="navigation" aria-label="Главное меню">
    <ul class="main-menu__list list-reset d-flex">
        <?php foreach ($arResult as $page): ?>
          <?php
            $isFaqLink = $page["TEXT"] === "Вопрос-ответ";
            ?>
          <li class="main-menu__item">
            <a class="main-menu__link <?= $isFaqLink ? "main-menu__link_faq" : "" ?>"
               href="<?php echo $page["LINK"]; ?>"
               title="Перейти на страницу «<?php echo $page["TEXT"]; ?>»"
                <?php echo(Site::isCurrentPage($page["LINK"]) ? "aria-current=\"page\"" : ""); ?>
            >
                <?php echo $page["TEXT"]; ?>
              <?php if ($isFaqLink) : ?>
                <img src="<?= $templateFolder ?>/images/chatting.svg"
                     class="main-menu__faq-icon ms-2 d-xl-inline-block d-none"
                     alt="Иконка «Вопрос-ответ»"
                     loading="lazy"
                     width="24" height="21">
              <?php endif; ?>
            </a>
          </li>
        <?php endforeach; ?>
    </ul>
  </nav>
<?php endif; ?>
