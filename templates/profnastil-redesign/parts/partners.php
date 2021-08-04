<?php
$partners = [
    [
        "LOGO" => "/images/_partners-logos/dell.svg",
        "NAME" => "Dell",
        "LINK" => "/",
    ],
    [
        "LOGO" => "/images/_partners-logos/lenovo.svg",
        "NAME" => "Lenovo",
        "LINK" => "/",
    ],
    [
        "LOGO" => "/images/_partners-logos/sony.svg",
        "NAME" => "Sony",
        "LINK" => "/",
    ],
    [
        "LOGO" => "/images/_partners-logos/samsung.svg",
        "NAME" => "Samsung",
        "LINK" => "/",
    ],
    [
        "LOGO" => "/images/_partners-logos/apple.svg",
        "NAME" => "Apple",
        "LINK" => "/",
    ],
    [
        "LOGO" => "/images/_partners-logos/intel.svg",
        "NAME" => "Intel",
        "LINK" => "/",
    ],
    [
        "LOGO" => "/images/_partners-logos/dell.svg",
        "NAME" => "Dell",
        "LINK" => "/",
    ],
    [
        "LOGO" => "/images/_partners-logos/dell.svg",
        "NAME" => "Dell",
        "LINK" => "/",
    ],
]
?>
<section class="partners mb-4 d-none d-md-block">
    <h2 class="partners__title">
        Наши партнеры
    </h2>
    <div class="row">
        <?php foreach ($partners as $partner) : ?>
            <div class="col-3 mb-4 mb-lg-0 col-lg">
                <a href="<?= $partner["LINK"] ?>"
                   title="Подробнее о партнёре «<?= $partner["NAME"] ?>»"
                   class="partners__item">
                    <img src="<?= SITE_TEMPLATE_PATH . $partner["LOGO"] ?>"
                         alt="Логотип компании «<?= $partner["NAME"] ?>»"
                         loading="lazy"
                         width="78" height="78">
                </a>
            </div>
        <?php endforeach; ?>
    </div>
</section>
