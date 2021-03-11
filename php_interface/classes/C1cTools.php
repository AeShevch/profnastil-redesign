<?

    class C1cTools
    {

        private static $prodUrl = "https://srv.nbcom.ru:31443/nbcom81/ws/BitrixExchange.1cws?wsdl";

        private static $testUrl = "https://srv.nbcom.ru:30443/nbcom81_training/ws/BitrixExchange.1cws?wsdl";

        private static $testMode = true;

        private $login = "WebService";

        private $pwd = "ZI5ptI2HeSRoxXFaAlZQ";

        private $connection = null;

        public $connection_timeout = 10;

        public $default_socket_timeout = 10;

        public $need_order_status = "3"; //статус из 1с, необходимый для полной оплаты

        public $start_order_status = "2"; //статус заказа, выставляемый после холдирования денег

        public $finish_order_status = "4"; //статус заказа, выставляемый после полной оплаты

        public $cancel_order_status = "6"; //статус заказа, выставляемый после отмены оплаты (полной или захолдированной)

        public $need_status_to_cancel_order = "5"; //статус из 1с, необходимый для полной отмены оплаты

        public $need_status_to_cancel_freeze_order = "7"; //статус из 1с, необходимый для отмены холдирования денег

        public static function checkServer()
        {
            $ch = curl_init((self::$testMode ? self::$testUrl : self::$prodUrl));
            curl_setopt($ch, CURLOPT_HEADER, 0);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
            curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 2);
            $result = curl_exec($ch);
            curl_close($ch);

            return $result;

        }

        public function __construct($connectionTimeoutIn = 0, $defaultSocketTimeoutIn = 0)
        {
            self::$testMode = COption::GetOptionString("realweb.site", '1C_TEST_MODE') == 'Y' ? true : false;

            $connectionTimeoutIn    = intval($connectionTimeoutIn);
            $defaultSocketTimeoutIn = intval($defaultSocketTimeoutIn);
            $url                    = (self::$testMode ? self::$testUrl : self::$prodUrl);

            if ($connectionTimeoutIn > 0) {
                $this->connection_timeout = $connectionTimeoutIn;
            }
            if ($defaultSocketTimeoutIn > 0) {
                $this->default_socket_timeout = $connectionTimeoutIn;
            }

            try {
                $this->connection = new SoapClient($url, $this->getParams());
                if (!$this->connection) {
                    $this->getErrorConnection("", "0");
                }
            } catch (Exception $ex) {
                $this->getErrorConnection($ex);
            }

        }

        public static function getOrderStatusList()
        {

            return [
                "1" => "Не оплачен",
                "2" => "Предварительно авторизован",
                "3" => "Подтвержден",
                "4" => "Оплачен",
                "5" => "Откатить оплату",
                "6" => "Отменен",
                "7" => "Откатить холдирование",
            ];

        }

        public static function getErrorsList()
        {

            return [
                "0" => "Ошибка подключения к Web-сервису. Проверьте корректность  url, логин и пароль",
            ];

        }

        public function getParams()
        {

            return [
                'login'                  => $this->login,
                'password'               => $this->pwd,
                'trace'                  => true,
                'connection_timeout'     => $this->connection_timeout,
                'default_socket_timeout' => $this->default_socket_timeout,
                "exceptions"             => true,
                'soap_version'           => SOAP_1_1,
                'cache_wsdl'             => WSDL_CACHE_NONE,
                "stream_context"         => stream_context_create(
                    [
                        'ssl' => [
                            'verify_peer'      => false,
                            'verify_peer_name' => false,
                        ],
                    ]
                ),
            ];
        }

        public function getOrderStatus($OrderNumber)
        {

            $OrderNumber = (string) $OrderNumber;

            return $this->connection->CheckOrderStatus([ "OrderNumber" => $OrderNumber ]);

        }

        public function ChangeOrderStatus($OrderNumber, $IdOrderStatus, $PaymentAmount = false)
        {
            $OrderNumber       = (string) $OrderNumber;
            $IdOrderStatus     = (string) $IdOrderStatus;
            $arOrderStatusList = self::getOrderStatusList();
            $paramsArray       = [
                "OrderNumber"   => $OrderNumber,
                "IdOrderStatus" => $IdOrderStatus,
            ];
            if ($PaymentAmount) {
                $paramsArray += [
                    "PaymentAmount" => $PaymentAmount,
                ];
            }

            if (isset($arOrderStatusList[$IdOrderStatus])) {
                return $this->connection->ChangeOrderStatus($paramsArray);
            }

            return false;
        }

        public function GetFailureOrders()
        {

            $res = $this->connection->GetFailureOrders();
            if ($res->return == "200" && is_object($res->OrderNumbers)) {
                $arOrdersIDS = $res->OrderNumbers->Orders;
                if ($arOrdersIDS) {
                    if (is_array($arOrdersIDS) && count($arOrdersIDS) > 0) {
                        return $arOrdersIDS;
                    } elseif (is_string($arOrdersIDS) && strlen($arOrdersIDS) > 0) {
                        return [ $arOrdersIDS ];
                    }
                }
            }

            return false;
        }

        public function GetAuthorizedOrders()
        {

            $res = $this->connection->GetAuthorizedOrders();
            if ($res->return == "200" && is_object($res->OrderNumbers)) {
                $arOrdersIDS = $res->OrderNumbers->Orders;
                if ($arOrdersIDS) {
                    if (is_array($arOrdersIDS) && count($arOrdersIDS) > 0) {
                        return $arOrdersIDS;
                    } elseif (is_string($arOrdersIDS) && strlen($arOrdersIDS) > 0) {
                        return [ $arOrdersIDS ];
                    }
                }
            }

            return false;
        }

        public function GetListOrders($IdOrderStatus)
        {
            $IdOrderStatus = (string) $IdOrderStatus;
            $res           = $this->connection->GetListOrders([ "IdOrderStatus" => $IdOrderStatus, "StoreName" => "Microprice" ]);
            if ($res->return == "200" && is_object($res->OrderNumbers)) {
                $arOrdersIDS = $res->OrderNumbers->Orders;
                if ($arOrdersIDS) {
                    if (is_array($arOrdersIDS) && count($arOrdersIDS) > 0) {
                        return $arOrdersIDS;
                    } elseif (is_string($arOrdersIDS) && strlen($arOrdersIDS) > 0) {
                        return [ $arOrdersIDS ];
                    }
                }
            }

            return false;
        }

        public function PreOrderGetListByPhoneNumber($phoneNumber, $productID)
        {

            $res = $this->connection->PreOrderGetListByPhoneNumber([ "PhoneNumber" => $phoneNumber, "IdProduct" => $productID ]);
            if ($res->return == "200" && is_object($res->OrderNumberList)) {
                $arOrdersIDS = $res->OrderNumberList->Orders;
                if ($arOrdersIDS) {
                    if (is_array($arOrdersIDS) && count($arOrdersIDS) > 0) {
                        return $arOrdersIDS;
                    } elseif (is_string($arOrdersIDS) && strlen($arOrdersIDS) > 0) {
                        return [ $arOrdersIDS ];
                    }
                }
            }

            return false;

        }

        public function GetBuyersDetailByPhoneNumber($phoneNumber)
        {

            $res = $this->connection->GetBuyersDetailByPhoneNumber([ "PhoneNumber" => $phoneNumber ]);

            if (is_object($res->return)) {
                //INFO: в ключе "ShopRegistration" передается код магазина
                return (array) $res->return;
            }

            return false;

        }

        public function UpdateBuyersDetailByPhoneNumber($phoneNumber, $fio, $birthDay, $shopReg, $email)
        {

            $phoneNumber = trim($phoneNumber);

            $res = $this->connection->UpdateBuyersDetailByPhoneNumber(
                [
                    PhoneNumber      => $phoneNumber,
                    FIO              => $fio,
                    DateOfBirth      => $birthDay,
                    ShopRegistration => $shopReg,
                    Email            => $email,
                ]
            );

            return $res;

            return false;

        }

        public function PreOrderGetInfo($OrderNumber)
        {

            $return = [];
            $res    = $this->connection->PreOrderGetInfo([ "OrderNumber" => $OrderNumber ]);

            if (is_object($res->return)) {
                if (is_object($res->return->BuyerDetail)) {
                    $return = (array) $res->return->BuyerDetail;
                }
                if ($res->return->Shop) {
                    $return["Shop"] = $res->return->Shop;
                }
                if (is_object($res->return->GoodsID)) {
                    $return["GoodsID"] = (is_array(
                        $res->return->GoodsID->Orders
                    ) ? $res->return->GoodsID->Orders : [ (string) $res->return->GoodsID->Orders ]);
                }
                if (gettype($res->return->Status) != "unknown type") {
                    $return["Status"] = $res->return->Status;
                }

                return $return;
            }

            return false;

        }

        public function PreOrderGetCount($IdProduct)
        {

            $res = $this->connection->PreOrderGetCount([ "IdProduct" => $IdProduct ]);

            if ($res->return == "200") {
                return (string) $res->PreOrderCount;
            }

            return false;

        }

        /*
         * @param $OrderNumber (string) - ID заказа
         * @param $Delete (bool) - флаг удаления заказа
         * @param $Goods ([["KOD", "QNT", "SORT"], [], ...]) - обновляемые товары в заказе
         * @param $Shop (string) - код магазина
         *
         * @return []
         */
        public function PreOrderUpdate($OrderNumber, $Delete, $Goods, $Shop, $ShopAdress)
        {

            $res = $this->connection->PreOrderUpdate(
                [
                    "OrderNumber" => $OrderNumber,
                    "Delete"      => $Delete,
                    "Goods"       => $Goods,
                    "Shop"        => $Shop,
                    "ShopAdress"  => $ShopAdress,
                ]
            );

            return $res->return;

        }

        public function PreOrderUpdatePriority($OrderNumber, $Priority)
        {

            $res = $this->connection->PreOrderUpdatePriority(
                [
                    "OrderNumber" => $OrderNumber,
                    "Priority"    => $Priority,
                ]
            );

            return $res->return;

        }

        public function GetListUsers($ShopCode)
        {

            $res = $this->connection->GetListUsers([ "ShopCode" => $ShopCode ]);

            if ($res->return == "200" && is_object($res->Users1C) && is_array($res->Users1C->FIO)) {
                return $res->Users1C->FIO;
            }

            return false;

        }

        public function PreOrderUpdateDates($OrderNumber, $DateMin, $DateMax)
        {

            $res = $this->connection->PreOrderUpdateDates(
                [
                    "OrderNumber" => $OrderNumber,
                    "DateMin"     => $DateMin,
                    "DateMax"     => $DateMax,
                ]
            );

            return $res->return;

        }

        public function UpdateCreditStatus($OrderNumber, $Status, $CreditProgramName, $IdOrderBank)
        {

            $res = $this->connection->UpdateCreditStatus(
                [
                    "OrderNumber"       => $OrderNumber,
                    "Status"            => $Status,
                    "CreditProgramName" => $CreditProgramName,
                    "IdOrderBank"       => $IdOrderBank,
                ]
            );

            return $res->return;

        }

        public function GetListCreditPrograms($IdProduct)
        {

            $return = [ "CREDIT" => [ "Кредит" ], "INSTALLMENT" => [] ];
            $res    = $this->connection->GetListCreditPrograms(
                [
                    "IdProduct" => $IdProduct,
                ]
            );

            if (is_object($res->return)) {
                if (is_array($res->return->Programs) && count($res->return->Programs) > 0) {
                    foreach ($res->return->Programs as $programName) {
                        if (stripos($programName, "Кредит") === false) {
                            $return["INSTALLMENT"][] = $programName;
                        }
                    }
                } elseif (!empty($res->return->Programs)) {
                    $return["INSTALLMENT"][] = $res->return->Programs;
                }
            }

            $return["INSTALLMENT"] = [ "0-0-10" ];

            return $return;

        }

        public function GetListReadyOrdersForBank()
        {

            $res = $this->connection->GetListReadyOrdersForBank([]);

            if ($res->return == "200") {
                return (array) $res->OrderNumbers->Orders;
            }

            return [];

        }

        /*
         *
         */
        public function GetEmailListsWithRelatedData($type)
        {

            $res = $this->connection->GetEmailListsWithRelatedData([ tipe => $type ]);

            if (is_object($res->return) && isset($res->return->ArrayEmailListString)) {
                return (array) $res->return->ArrayEmailListString;
            }

            return [];

        }

        public static function getError($errorCode)
        {

            $arErrors = self::getErrorsList();
            if (isset($arErrors[$errorCode])) {
                return $arErrors[$errorCode];
            }

            return false;

        }

        public function getErrorConnection($obError, $errorCode)
        {

            $errorCode = (string) $errorCode;
            if (strlen($errorCode) > 0) {
                $printError = self::getError($errorCode);
                if (!$printError) {
                    $printError = "Неизвестная ошибка. Обратитесть к администрации сайта.";
                }
                print($printError);
            } else {
                print("SOAP Fault: (faultcode: " . $obError->faultcode . ", faultstring: " . $obError->faultstring . ")");
            }

        }

        public function debug()
        {

            return $this->checkOrderStatus();

        }

        public function getCompanyByINN($INN)
        {
            $arResult = [];
            $result   = $this->connection->CompanyDetails([ "ИНН" => $INN ]);
            if ($result->return == 200) {
                $arResult = [
                    "COMPANY_NAME"           => $result->НаименованиеКомпании,
                    "COMPANY_KPP"            => $result->КПП,
                    "COMPANY_ADDRESS"        => $result->ЮридическийАдрес,
                    "COMPANY_ACTUAL_ADDRESS" => $result->ФактическийАдрес,
                    "CHECKING_ACCOUNT"       => $result->РасчетныйСчет,
                    "COMPANY_BANK"           => $result->БанкПлательщика,
                    "COMPANY_BIK"            => $result->БИК,
                ];
            }

            return $arResult;
        }

    }

?>
