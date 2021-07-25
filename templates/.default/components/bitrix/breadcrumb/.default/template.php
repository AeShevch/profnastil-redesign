<?php
    if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
        die();
    }
    global $APPLICATION;
    ob_start();
?>
<div class="bread-crumbs">
    <div class="container">
        <ul class="bread-crumbs__list">
            <?php foreach ($arResult as $key => $path): ?>
                <li class="bread-crumbs__item">
                    <?php if (!empty($path['LINK']) && !Site::isCurrentPage($path['LINK'])):?>
                        <a class="bread-crumbs__link"
                           href="<?php echo $path["LINK"]; ?>"
                        >
                            <?php echo $path["TITLE"]; ?>
                        </a>
                    <?php else: ?>
                        <span class="bread-crumbs__last-crumb">
                            <?php echo $path["TITLE"]; ?>
                        </span>
                    <?php endif; ?>
                </li>
            <?php endforeach; ?>
        </ul>
    </div>
</div>
<?php
    $strReturn = ob_get_contents();
    ob_end_clean();
    return $strReturn;
?>
