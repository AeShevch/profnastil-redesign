<?php
$triggers = [
    [
        "TITLE" => "Индивидуальное сотрудничество",
        "LINK" => "/",
        "ICON" => "icon_handshake"
    ],
    [
        "TITLE" => "Официальные партнеры",
        "LINK" => "/",
        "ICON" => "icon_user-check"
    ],
    [
        "TITLE" => "Гарантия от производителя",
        "LINK" => "/",
        "ICON" => "icon_star"
    ],
    [
        "TITLE" => "Бесплатная <br> доставка",
        "LINK" => "/",
        "ICON" => "icon_truck"
    ],
];
?>
<section class="triggers">
    <ul class="row list-reset">
        <?php foreach ($triggers as $trigger): ?>
        <li class="col-6 col-md-3">
            <a href="<?= $trigger["LINK"] ?>"
               class="trigger"
               title="<?= $trigger["TITLE"] ?>">
                <svg class="trigger__icon" width="34" height="24">
                    <use xlink:href="#<?= $trigger["ICON"] ?>"></use>
                </svg>
                <span class="trigger__title">
                    <?= $trigger["TITLE"] ?>
                </span>
            </a>
        </li>
        <?php endforeach; ?>
    </ul>
</section>
