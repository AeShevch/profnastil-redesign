<?php
    if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
        die();
    }

    $this->setFrameMode(true);
?>
<div class="catalog__row row">
    <?php foreach ($arResult["SECTIONS"] as $item): ?>
        <div class="mb-4 col-12 col-sm-6 col-md-4">
            <article class="catalog__item">
                <header class="catalog__item-header">
                    <a href="<?php echo $item["SECTION_PAGE_URL"]; ?>"
                       class="d-block">
                        <img src="<?php echo $item["PICTURE"]["SRC"]; ?>"
                             alt="<?php echo $item["NAME"]?>" class="catalog__main-image">
                        <?php if (false): ?>
                            <img src="../images/cat-mock-small.jpg" alt="" class="catalog__small-image">
                            <ul class="catalog__pagination">
                                <li class="catalog__pagination-item active"></li>
                                <li class="catalog__pagination-item"></li>
                                <li class="catalog__pagination-item"></li>
                            </ul>
                        <?php endif; ?>
                    </a>
                </header>
                <footer class="catalog__item-footer">
                    <a href="<?php echo $item["SECTION_PAGE_URL"]; ?>"
                       class="d-block">
                        <h3 class="catalog__item-title"><?php echo $item["NAME"]; ?></h3>
                    </a>

                    <a href="<?php echo $item["SECTION_PAGE_URL"]; ?>"
                       class="d-block">
                        <p class="catalog__item-description">
                            <?php echo $item["PREVIEW_TEXT"]; ?>
                        </p>
                    </a>

                    <a href="<?php echo $item["SECTION_PAGE_URL"]; ?>"
                       class="catalog__button button button_outlined button_size_m">
                        Подробнее
                    </a>
                </footer>
            </article>
        </div>
    <?php endforeach; ?>
</div>
