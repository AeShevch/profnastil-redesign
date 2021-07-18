<?php
/**
 * @var array $arParams
 * @var array $component
 * @global CMain $APPLICATION
 */

if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

$BIG_IMAGE_SIZE = 474;
$THUMB_IMAGE_SIZE = 57;

function getResizedImage($imageArr, $size)
{
    return CFile::ResizeImageGet(
        $imageArr,
        [
            "width" => $size,
            "height" => $size
        ],
        BX_RESIZE_IMAGE_PROPORTIONAL,
        true
    );
}

?>
<section class="thumbnail-slider d-flex align-items-center justify-content-center" style="">
    <img src="<?php echo $arParams["IMAGES"]["SRC"] ?>"
         class="thumbnail-slider__image"
         alt="<?php echo $arParams["IMAGES"]["ALT"] ?>"
         loading="lazy"
         width="<?php echo $arParams["IMAGES"]["WIDTH"] ?>"
         height="<?php echo $arParams["IMAGES"]["HEIGHT"] ?>">
    <!--    <div class="row">-->
    <!--        <div class="col-2" style="padding-right: 0.7em;">-->
    <!--            <div class="thumbnail-slider__secondary splide js-thumbs-slider-secondary">-->
    <!--                <div class="splide__track">-->
    <!--                    <ul class="splide__list list-reset">-->
    <!--                        --><?php //foreach ($arParams["IMAGES"] as $image) :
    //                            $resizedImage = getResizedImage($image, $THUMB_IMAGE_SIZE);
    //                            ?>
    <!--                            <li class="thumbnail-slider__item splide__slide">-->
    <!--                                <img src="--><?php //echo $resizedImage["src"] ?><!--"-->
    <!--                                     class="thumbnail-slider__image"-->
    <!--                                     alt=""-->
    <!--                                     loading="lazy"-->
    <!--                                     width="--><?php //echo $resizedImage["width"] ?><!--"-->
    <!--                                     height="--><?php //echo $resizedImage["height"] ?><!--">-->
    <!--                            </li>-->
    <!--                        --><?php //endforeach; ?>
    <!--                    </ul>-->
    <!--                </div>-->
    <!--            </div>-->
    <!--        </div>-->
    <!--        <div class="col-10 ps-0">-->
    <!--            <div class="thumbnail-slider__main splide js-thumbs-slider-main">-->
    <!--                <div class="splide__track">-->
    <!--                    <ul class="splide__list list-reset">-->
    <!--                        --><?php //foreach ($arParams["IMAGES"] as $image) :
    //                            $resizedImage = getResizedImage($image, $BIG_IMAGE_SIZE);
    //                            ?>
    <!--                            <li class="thumbnail-slider__item splide__slide">-->
    <!--                                <a href="--><?php //echo $image["SRC"] ?><!--"-->
    <!--                                   data-type="image"-->
    <!--                                   data-zoomable="true"-->
    <!--                                   data-draggable="true"-->
    <!--                                   data-title="Заголовок изображения"-->
    <!--                                   data-description="Тут можно разместить большое и очень интересное описание этого изображения"-->
    <!--                                   class="thumbnail-slider__link js-light-box">-->
    <!--                                    <img src="--><?php //echo $resizedImage["src"] ?><!--"-->
    <!--                                         class="thumbnail-slider__image"-->
    <!--                                         alt=""-->
    <!--                                         loading="lazy"-->
    <!--                                         width="--><?php //echo $resizedImage["width"] ?><!--"-->
    <!--                                         height="--><?php //echo $resizedImage["height"] ?><!--">-->
    <!--                                </a>-->
    <!--                            </li>-->
    <!--                        --><?php //endforeach; ?>
    <!--                    </ul>-->
    <!--                </div>-->
    <!--            </div>-->
    <!--        </div>-->
    <!--    </div>-->
</section>

