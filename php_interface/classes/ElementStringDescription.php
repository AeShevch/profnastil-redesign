<?php

    use Bitrix\Main\Loader;
    use Bitrix\Main\Localization\Loc;

    Loc::loadMessages($_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/iblock/classes/general/prop_html.php');

    class ElementStringDescription
    {

        private static $cnt = 0;

        const propertiesCode = [
                0 => "NAME",
                1 => "TIME",
                2 => "PROGRAM"
        ];

        function GetUserTypeDescription()
        {
            return [
                "PROPERTY_TYPE"        => "S",
                "USER_TYPE"            => "CIBlock_ElementStringDescription",
                "DESCRIPTION"          => 'Строка с описанием',
                "GetPropertyFieldHtml" => [ __CLASS__, "GetPropertyFieldHtml" ],
                "ConvertToDB"          => [ __CLASS__, "ConvertToDB" ],
                "ConvertFromDB"        => [ __CLASS__, "ConvertFromDB" ],
                "PrepareSettings"      => [ __CLASS__, "PrepareSettings" ],
                "GetSettingsHTML"      => [ __CLASS__, "GetSettingsHTML" ],
                "GetAdminListViewHTML" => [ __CLASS__, "GetAdminListViewHTML" ],
            ];
        }

        function PrepareSettings($arProperty)
        {
            return [
                "VALUE_NAME"       => $arProperty["USER_TYPE_SETTINGS"]['VALUE_NAME'],
                "DESCRIPTION_NAME" => $arProperty["USER_TYPE_SETTINGS"]['DESCRIPTION_NAME'],
                "TIME_NAME"        => $arProperty["USER_TYPE_SETTINGS"]['TIME_NAME'],
                "PROGRAM_NAME"     => $arProperty["USER_TYPE_SETTINGS"]['PROGRAM_NAME'],
                "height"           => $arProperty["USER_TYPE_SETTINGS"]['height'],
                "width"            => $arProperty["USER_TYPE_SETTINGS"]['width'],
            ];
        }

        function GetSettingsHTML($arProperty, $strHTMLControlName, &$arPropertyFields)
        {
            $result = '';

            if (!CModule::IncludeModule('iblock')) {
                return $result;
            }

            $arPropertyFields = [
                "HIDE" => [ "ROW_COUNT", "COL_COUNT" ],
            ];

            $height = 0;
            if (isset($arProperty["USER_TYPE_SETTINGS"]["height"])) {
                $height = (int) $arProperty["USER_TYPE_SETTINGS"]["height"];
            }
            if ($height <= 0) {
                $height = 1;
            }

            $width = 0;
            if (isset($arProperty["USER_TYPE_SETTINGS"]["width"])) {
                $width = (int) $arProperty["USER_TYPE_SETTINGS"]["width"];
            }
            if ($width <= 0) {
                $width = 30;
            }

            $VALUE_NAME       = '';
            $DESCRIPTION_NAME = '';
            $TIME_NAME        = '';
            $PROGRAM_NAME     = '';
            if (isset($arProperty['USER_TYPE_SETTINGS']['VALUE_NAME'])) {
                $VALUE_NAME = $arProperty['USER_TYPE_SETTINGS']['VALUE_NAME'];
            }
            if (isset($arProperty['USER_TYPE_SETTINGS']['DESCRIPTION_NAME'])) {
                $DESCRIPTION_NAME = $arProperty['USER_TYPE_SETTINGS']['DESCRIPTION_NAME'];
            }
            if (isset($arProperty['USER_TYPE_SETTINGS']['TIME_NAME'])) {
                $TIME_NAME = $arProperty['USER_TYPE_SETTINGS']['TIME_NAME'];
            }
            if (isset($arProperty['USER_TYPE_SETTINGS']['PROGRAM_NAME'])) {
                $PROGRAM_NAME = $arProperty['USER_TYPE_SETTINGS']['PROGRAM_NAME'];
            }

            $result .= '
            <tr>
                <td>Название поля имя:</td>
                <td>
                    <input value="' . $VALUE_NAME . '" type="text" name="' . $strHTMLControlName["NAME"] . '[VALUE_NAME]"/>
                </td>
            </tr>
            <tr>
                <td>Название поля должность:</td>
                <td>
                    <input value="' . $DESCRIPTION_NAME . '" type="text" name="' . $strHTMLControlName["NAME"] . '[DESCRIPTION_NAME]"/>
                </td>
            </tr>
            <tr>
                <td>Название поля время:</td>
                <td>
                    <input value="' . $TIME_NAME . '" type="text" name="' . $strHTMLControlName["NAME"] . '[TIME_NAME]"/>
                </td>
            </tr>
                        <tr>
                <td>Название поля программа:</td>
                <td>
                    <input value="' . $PROGRAM_NAME . '" type="text" name="' . $strHTMLControlName["NAME"] . '[PROGRAM_NAME]"/>
                </td>
            </tr>
            <tr>
                <td>Размеры полей ввода:</td>
                <td>
                    <input value="' . $height . '" type="text" name="' . $strHTMLControlName["NAME"] . '[height]"/>
                                            X
                                        <input value="' . $width . '" type="text" name="' . $strHTMLControlName["NAME"] . '[width]"/>
                </td>
            </tr>
            ';

            return $result;
        }

        function GetPropertyFieldHtml($arProperty, $VALUE, $strHTMLControlName)
        {
            $VALUE_NAME       = 'Значение';
            $DESCRIPTION_NAME = 'Описание';
            $TIME_NAME        = 'Время';
            $PROGRAM_NAME     = 'Программа';
            if (isset($arProperty['USER_TYPE_SETTINGS']['VALUE_NAME'])) {
                $VALUE_NAME = $arProperty['USER_TYPE_SETTINGS']['VALUE_NAME'];
            }
            if (isset($arProperty['USER_TYPE_SETTINGS']['DESCRIPTION_NAME'])) {
                $DESCRIPTION_NAME = $arProperty['USER_TYPE_SETTINGS']['DESCRIPTION_NAME'];
            }
            if (isset($arProperty['USER_TYPE_SETTINGS']['TIME_NAME'])) {
                $TIME_NAME = $arProperty['USER_TYPE_SETTINGS']['TIME_NAME'];
            }
            if (isset($arProperty['USER_TYPE_SETTINGS']['PROGRAM_NAME'])) {
                $PROGRAM_NAME = $arProperty['USER_TYPE_SETTINGS']['PROGRAM_NAME'];
            }
            $height = 0;
            if (isset($arProperty["USER_TYPE_SETTINGS"]["height"])) {
                $height = (int) $arProperty["USER_TYPE_SETTINGS"]["height"];
            }
            if ($height <= 0) {
                $height = 1;
            }

            $width = 0;
            if (isset($arProperty["USER_TYPE_SETTINGS"]["width"])) {
                $width = (int) $arProperty["USER_TYPE_SETTINGS"]["width"];
            }
            if ($width <= 0) {
                $width = 30;
            }

            ob_start();
            ?>
            <style>
                .padding-5 td {
                    padding: 5px;
                }
            </style>
            <table cellpadding="0"
                   cellspacing="0"
                   border="0"
                   class="padding-5"
                   width="100%"
                   style="border: 1px dashed #B0BBBF;margin-bottom: 10px;">
                <tbody>
                <tr>
                    <td><?php echo $VALUE_NAME; ?>:</td>
                    <td>
                        <?php if (intval($height) == 1): ?>
                            <input type="text"
                                   size="10"
                                   value="<?php echo $VALUE['VALUE'][self::$cnt]; ?>"
                                   name="<?php echo $strHTMLControlName["VALUE"] . '[' . self::$cnt . ']'; ?>" />
                        <?php else: ?>
                            <textarea name="<?php echo $strHTMLControlName["VALUE"]; ?>"
                                      cols="<?php echo $width; ?>"
                                      rows="<?php echo $height; ?>"><?php echo $VALUE['VALUE']; ?></textarea>
                        <?php endif; ?>
                    </td>
                </tr>
                <?php if ($arProperty['WITH_DESCRIPTION'] == 'Y'):
                    self::$cnt++;
                    ?>
                    <tr>
                        <td><?php echo $DESCRIPTION_NAME; ?>:</td>
                        <td>
                            <?php if (intval($height) == 1): ?>
                                <input type="text"
                                       size="20"
                                       value="<?php echo $VALUE['DESCRIPTION']; ?>"
                                       name="<?php echo $strHTMLControlName["DESCRIPTION"]; ?>" />
                            <?php else: ?>
                                <textarea name="<?php echo $strHTMLControlName["DESCRIPTION"]; ?>"
                                          cols="<?php echo $width; ?>"
                                          rows="<?php echo $height; ?>"><?php echo $VALUE['DESCRIPTION']; ?></textarea>
                            <?php endif; ?>
                        </td>
                    </tr>
                    <tr>
                        <td><?php echo $TIME_NAME ?>:</td>
                        <td>
                            <?php if (intval($height) == 1): ?>
                                <input type="text"
                                       size="<?php echo $width; ?>"
                                       value="<?php echo $VALUE["VALUE"][self::$cnt]; ?>"
                                       name="<?php echo $strHTMLControlName["VALUE"] . '[' . self::$cnt . ']'; ?>" />
                            <?php else: ?>
                                <textarea name="<?php echo $strHTMLControlName["VALUE"]; ?>"
                                          cols="<?php echo $width; ?>"
                                          rows="<?php echo $height; ?>"><?php echo $VALUE["TIME_NAME"]; ?></textarea>
                            <?php endif; ?>
                        </td>
                    </tr>
                    <?php self::$cnt++; ?>
                    <tr>
                        <td><?php echo $PROGRAM_NAME ?>:</td>
                        <td>
                            <?php if (intval($height) == 1): ?>
                                <input type="text"
                                       size="50"
                                       value="<?php echo $VALUE["VALUE"][self::$cnt]; ?>"
                                       name="<?php echo $strHTMLControlName["VALUE"] . '[' . self::$cnt . ']'; ?>" />
                            <?php else: ?>
                                <textarea name="<?php echo $strHTMLControlName["VALUE"]; ?>"
                                          cols="<?php echo $width; ?>"
                                          rows="<?php echo $height; ?>"><?php echo $VALUE["PROGRAM_NAME"]; ?></textarea>
                            <?php endif; ?>
                        </td>
                    </tr>
                <?php endif; ?>
                </tbody>
            </table>
            <?php
            self::$cnt = 0;
            $b = ob_get_clean();

            return $b;
        }

        function GetAdminListViewHTML($arProperty, $value, $strHTMLControlName)
        {
            $VALUE_NAME       = 'Значение';
            $DESCRIPTION_NAME = 'Описание';
            $TIME_NAME        = 'Время';
            $PROGRAM_NAME        = 'Программа';
            if (isset($arProperty['USER_TYPE_SETTINGS']['VALUE_NAME'])) {
                $VALUE_NAME = $arProperty['USER_TYPE_SETTINGS']['VALUE_NAME'];
            }
            if (isset($arProperty['USER_TYPE_SETTINGS']['DESCRIPTION_NAME'])) {
                $DESCRIPTION_NAME = $arProperty['USER_TYPE_SETTINGS']['DESCRIPTION_NAME'];
            }
            if (isset($arProperty['USER_TYPE_SETTINGS']['TIME_NAME'])) {
                $TIME_NAME = $arProperty['USER_TYPE_SETTINGS']['TIME_NAME'];
            }
            if (isset($arProperty['USER_TYPE_SETTINGS']['PROGRAM_NAME'])) {
                $PROGRAM_NAME = $arProperty['USER_TYPE_SETTINGS']['PROGRAM_NAME'];
            }
            $html = "";
            if (strlen($value['VALUE']) > 0) {
                $html .= "<div style=\"border: 1px dashed #B2BFC3; padding: 5px;\"><b>" . $VALUE_NAME . "</b>:" . $value['VALUE'];
                if ($arProperty['WITH_DESCRIPTION'] == 'Y' && strlen($value['DESCRIPTION']) > 0) {
                    $html .= "<br><b>" . $DESCRIPTION_NAME . "</b>:" . $value['DESCRIPTION'];
                    $html .= "<br><b>" . $TIME_NAME . "</b>:" . $value['VALUE'];
                    $html .= "<br><b>" . $PROGRAM_NAME . "</b>:" . $value['VALUE'];
                }
                $html .= "</div>";
            }

            return $html;
        }

        function ConvertToDB($arProperty, $value)
        {

            $value["VALUE"] = implode("|", $value["VALUE"]);

            return $value;
        }

        function ConvertFromDB($arProperty, $value)
        {

            $value["VALUE"] = explode("|", $value["VALUE"]);
            foreach ($value["VALUE"] as $key => $val) {
                $value["VALUE"][self::propertiesCode[$key]] = $val;
                //unset($value["VALUE"][$key]);
            }
            return $value;
        }

    }

?>
