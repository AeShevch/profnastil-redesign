<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */

$itemCount = count($arResult);
$needReload = (isset($_REQUEST["compare_list_reload"]) && $_REQUEST["compare_list_reload"] == "Y");
$idCompareCount = 'compareList' . $this->randString();
$obCompare = 'ob' . $idCompareCount;
$mainClass = 'bx_catalog-compare-list';
if ($arParams['POSITION_FIXED'] == 'Y') {
    $mainClass .= ' fix ' . ($arParams['POSITION'][0] == 'bottom' ? 'bottom' : 'top') . ' ' . ($arParams['POSITION'][1] == 'right' ? 'right' : 'left');
}
$style = ($itemCount == 0 ? ' style="display: none;"' : '');
?>
<div id="<?= $idCompareCount; ?>" class="compare-alert__inner <?= $mainClass; ?> "<?= $style; ?>><?
    unset($style, $mainClass);
    if ($needReload) {
        $APPLICATION->RestartBuffer();
    }
    $frame = $this->createFrame($idCompareCount)->begin('');
    if ($itemCount > 0) {
        ?>
        <div class="bx_catalog_compare_count">
            <p class="compare-redirect"><a
                        href="<?= $arParams["COMPARE_URL"]; ?>"><?= GetMessage('CP_BCCL_TPL_MESS_COMPARE_PAGE'); ?></a>
            </p>
        </div>
        <div class="bx_catalog_compare_form">
        <table class="compare-items" data-block="item-list">
            <thead>
            <tr>
                <td align="center" colspan="2">
                    <h3 class="compare-alert__title"><?= GetMessage("CATALOG_COMPARE_ELEMENTS") ?></h3>
                </td>
            </tr>
            </thead>
            <tbody><?
            foreach ($arResult as $arElement) {
                ?>
            <tr class="compare-alert__item" data-block="item-row" data-row-id="row<?= $arElement['PARENT_ID']; ?>">
                <td>
                    <a class="compare-alert__item-title"
                       href="<?= $arElement["DETAIL_PAGE_URL"] ?>">
                        <?= $arElement["NAME"] ?>
                    </a>
                </td>
                <td>
                    <a class="compare-alert__item-delete"
                            data-id="<?= $arElement['PARENT_ID']; ?>"
                            aria-label="Удалить «<?= $arElement["NAME"] ?>» из сравнения"
                            rel="nofollow">
                        &times;
                    </a>
                </td>
                </tr><?
            }
            ?>
            </tbody>
        </table>
        </div><?
    }
    $frame->end();
    if ($needReload) {
        die();
    }
    $currentPath = CHTTP::urlDeleteParams(
        $APPLICATION->GetCurPageParam(),
        array(
            $arParams['PRODUCT_ID_VARIABLE'],
            $arParams['ACTION_VARIABLE'],
            'ajax_action'
        ),
        array("delete_system_params" => true)
    );

    $jsParams = array(
        'VISUAL' => array(
            'ID' => $idCompareCount,
        ),
        'AJAX' => array(
            'url' => $currentPath,
            'params' => array(
                'ajax_action' => 'Y'
            ),
            'reload' => array(
                'compare_list_reload' => 'Y'
            ),
            'templates' => array(
                'delete' => (strpos($currentPath, '?') === false ? '?' : '&') . $arParams['ACTION_VARIABLE'] . '=DELETE_FROM_COMPARE_LIST&' . $arParams['PRODUCT_ID_VARIABLE'] . '='
            )
        ),
        'POSITION' => array(
            'fixed' => $arParams['POSITION_FIXED'] == 'Y',
            'align' => array(
                'vertical' => $arParams['POSITION'][0],
                'horizontal' => $arParams['POSITION'][1]
            )
        )
    );
    ?></div>
<script type="text/javascript">
    var <?=$obCompare; ?> = new JCCatalogCompareList(<? echo CUtil::PhpToJSObject($jsParams, false, true); ?>)
</script>