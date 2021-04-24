<?php
$triggers = [
    [
        "TITLE" => "Лизинг",
        "LINK" => "/",
        "ICON" => "icon_calendar"
    ],
    [
        "TITLE" => "Страхование",
        "LINK" => "/",
        "ICON" => "icon_shield"
    ],
    [
        "TITLE" => "Trade-in Apple",
        "LINK" => "/",
        "ICON" => "icon_repeat"
    ],
    [
        "TITLE" => "Сервисный <br> центр",
        "LINK" => "/",
        "ICON" => "icon_settings"
    ],
];
?>
<section class="triggers-alt mb-4">
    <div class="triggers-alt__row row">
        <?php foreach ($triggers as $trigger): ?>
        <div class="triggers-alt__item col-6 col-sm-3 d-flex">
            <a href="<?= $trigger["LINK"] ?>" class="trigger-alt w-100" title="<?= $trigger["TITLE"] ?>">
                <div class="trigger-alt__inner">
                    <div class="trigger-alt__icon-bg trigger-alt__icon-bg_color_blue">
                        <svg class="trigger-alt__icon" width="52" height="52">
                            <use xlink:href="#<?= $trigger["ICON"] ?>"></use>
                        </svg>
                    </div>
                    <span class="trigger-alt__title">
                    <?= $trigger["TITLE"] ?>
                </span>
                </div>
            </a>
        </div>
        <?php endforeach; ?>
    </div>
</section>
