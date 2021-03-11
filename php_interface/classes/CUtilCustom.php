<?
class CUtilCustom
{
    
    public static function translit($str, $lang, $params = array())
    {
        
        static $search = array();

        if(!isset($search[$lang]))
        {
            $mess = IncludeModuleLangFile($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/js_core_translit.php", $lang, true);
            $trans_from = explode(",", $mess["TRANS_FROM"]);
            $trans_to = explode(",", $mess["TRANS_TO"]);
            foreach($trans_from as $i => $from)
                $search[$lang][$from] = $trans_to[$i];
        }

        $defaultParams = array(
            "max_len" => 100,
            "change_case" => 'L', // 'L' - toLower, 'U' - toUpper, false - do not change
            "replace_space" => '_',
            "replace_other" => '_',
            "delete_repeat_replace" => true,
            "safe_chars" => '',
            "replace" => array()
        );
        foreach($defaultParams as $key => $value)
            if(!array_key_exists($key, $params))
                $params[$key] = $value;

        $len = strlen($str);
        $str_new = '';
        $last_chr_new = '';

        for($i = 0; $i < $len; $i++)
        {
            $chr = substr($str, $i, 1);
            
            if(isset($params["replace"][$chr]))
            {
                $chr_new = $params["replace"][$chr];
            }
            else
            {
                if(preg_match("/[a-zA-Z0-9]/".BX_UTF_PCRE_MODIFIER, $chr) || strpos($params["safe_chars"], $chr)!==false)
                {
                    $chr_new = $chr;
                }
                elseif(preg_match("/\\s/".BX_UTF_PCRE_MODIFIER, $chr))
                {
                    if (
                        !$params["delete_repeat_replace"]
                        ||
                        ($i > 0 && $last_chr_new != $params["replace_space"])
                    )
                        $chr_new = $params["replace_space"];
                    else
                        $chr_new = '';
                }
                else
                {
                    if(array_key_exists($chr, $search[$lang]))
                    {
                        $chr_new = $search[$lang][$chr];
                    }
                    else
                    {
                        if (
                            !$params["delete_repeat_replace"]
                            ||
                            ($i > 0 && $i != $len-1 && $last_chr_new != $params["replace_other"])
                        )
                            $chr_new = $params["replace_other"];
                        else
                            $chr_new = '';
                    }
                }
            }

            if(strlen($chr_new))
            {
                if($params["change_case"] == "L" || $params["change_case"] == "l")
                    $chr_new = ToLower($chr_new);
                elseif($params["change_case"] == "U" || $params["change_case"] == "u")
                    $chr_new = ToUpper($chr_new);

                $str_new .= $chr_new;
                $last_chr_new = $chr_new;
            }
            

            if (strlen($str_new) >= $params["max_len"])
                break;
        }

        return $str_new;
        
    }

    public static function getSectionPathArray($currentSectionID)
    {
        $arSections = [];
        if ($currentSectionID) {
            $secDB = CIBlockSection::GetNavChain(false, $currentSectionID, [ "NAME" ]);
            while ($section = $secDB->Fetch()) {
                $arSections[] = $section["NAME"];
            }
        }

        return array_unique($arSections);
    }


    public static function getSectionPathString($currentSectionID, $glue = "/")
    {
        return implode($glue, self::getSectionPathArray($currentSectionID));
    }

    /**
     * Выводит переданный массив в консоль браузера
     *
     * @param array $array Массив, который необходимо вывести в консоль
     * @return void
     */
    public static function console_log($array)
    {
        $json = str_replace('&nbsp;', '', json_encode($array, true));
        echo "<script>window.jsonFromPhp={$json};console.log(window.jsonFromPhp);</script>";
    }

    /**
     * Возвращает строку с css классом,
     * состоящую из типа страницы и указанного параметром префикса.
     * Например:
     * getBodyClass("-page"); // Вернёт "catalog-page" на страницах каталога
     *
     * @param string $prefix - Префикс для класса
     * @return string
     */
    public static function getBodyClass($prefix)
    {
        global $APPLICATION;
        $urlSections = explode('/', $APPLICATION->GetCurDir());
        return ($urlSections[1] !== '' ? $urlSections[1] : "index") . $prefix;
    }

    /**
     * Возвращает строку с названием операционной системы клиента
     * @return string
     */
    public static function getOS() {

        $user_agent = $_SERVER['HTTP_USER_AGENT'];

        $os_platform =   "Unknown Operating System";
        $os_array =   array(
            '/windows nt 10/i'      =>  'Windows 10',
            '/windows nt 6.3/i'     =>  'Windows 8.1',
            '/windows nt 6.2/i'     =>  'Windows 8',
            '/windows nt 6.1/i'     =>  'Windows 7',
            '/windows nt 6.0/i'     =>  'Windows Vista',
            '/windows nt 5.2/i'     =>  'Windows Server 2003/XP x64',
            '/windows nt 5.1/i'     =>  'Windows XP',
            '/windows xp/i'         =>  'Windows XP',
            '/windows nt 5.0/i'     =>  'Windows 2000',
            '/windows me/i'         =>  'Windows ME',
            '/win98/i'              =>  'Windows 98',
            '/win95/i'              =>  'Windows 95',
            '/win16/i'              =>  'Windows 3.11',
            '/macintosh|mac os x/i' =>  'Mac OS X',
            '/mac_powerpc/i'        =>  'Mac OS 9',
            '/linux/i'              =>  'Linux',
            '/ubuntu/i'             =>  'Ubuntu',
            '/iphone/i'             =>  'iPhone',
            '/ipod/i'               =>  'iPod',
            '/ipad/i'               =>  'iPad',
            '/android/i'            =>  'Android',
            '/blackberry/i'         =>  'BlackBerry',
            '/webos/i'              =>  'Mobile'
        );

        foreach ( $os_array as $regex => $value ) {
            if ( preg_match($regex, $user_agent ) ) {
                $os_platform = $value;
            }
        }
        return $os_platform;
    }
    
}
