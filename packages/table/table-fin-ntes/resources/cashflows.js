export const cashflows = {
  head: ['type', 'raw', 'db', 'lite', 'ratio', 'abbr', 'eng', 'chs'], 
  rows: [
    ['string', 101, 101, 101, 101, 'date'                                  , 'date'                                                                                                        , '报告日期'                      ], 
    ['number', 102, 102, 102, 102, 'cFrGdSv'                               , 'cash from goods sales or services provision'                                                                 , '销售商品_提供劳务收到的现金'            ], 
    ['number', 103, 103, NaN, NaN, 'netIcCuDpoInterbkDpo'                  , 'net increase in customer deposits and interbank deposits'                                                    , '客户存款和同业存放款项净增加额'           ], 
    ['number', 104, 104, NaN, NaN, 'netIcBorwFrCbkRmb10k'                  , 'net increase in borrowings from the central bank rmb10k'                                                     , '向中央银行借款净增加额_万元'            ], 
    ['number', 105, 105, NaN, NaN, 'netIcBorwFrOFinInstitutions'           , 'net increase in borrowings from other financial institutions'                                                , '向其他金融机构拆入资金净增加额'           ], 
    ['number', 106, 106, NaN, NaN, 'cFrPremOfOriInsrContract'              , 'cash received from premium of original insurance contract'                                                   , '收到原保险合同保费取得的现金'            ], 
    ['number', 107, 107, NaN, NaN, 'netCFrReinsrB'                         , 'net cash received from reinsurance business'                                                                 , '收到再保险业务现金净额'               ], 
    ['number', 108, 108, NaN, NaN, 'netIcDpoIvOfInsured'                   , 'net increase in deposits and investments of the insured'                                                     , '保户储金及投资款净增加额'              ], 
    ['number', 109, 109, NaN, NaN, 'netIcDspOfTFa'                         , 'net increase in disposal of trading financial assets'                                                        , '处置交易性金融资产净增加额'             ], 
    ['number', 110, 110, NaN, NaN, 'cChargedForIntrCms'                    , 'cash charged for interest and Commission'                                                                    , '收取利息_手续费及佣金的现金'            ], 
    ['number', 111, 111, NaN, NaN, 'netIcBorwFunds'                        , 'net increase in borrowed funds'                                                                              , '拆入资金净增加额'                  ], 
    ['number', 112, 112, NaN, NaN, 'netIcRepurcBFunds'                     , 'net increase in repurchase business funds'                                                                   , '回购业务资金净增加额'                ], 
    ['number', 113, 113, NaN, NaN, 'refundOfTxFeRecv'                      , 'refund of tax and fees received'                                                                             , '收到的税费返还'                   ], 
    ['number', 114, 114, NaN, NaN, 'oCRecvRelatingToOp'                    , 'other cash received relating to operating activities'                                                        , '收到的其他与经营活动有关的现金'           ], 
    ['number', 115, 115, 103, 103, 'cinOp'                                 , 'subtotal of cash inflow from operating activities'                                                           , '经营活动现金流入小计'                ], 
    ['number', 116, 116, 104, 104, 'cPdGdSv'                               , 'cash paid for goods purchased and services received'                                                         , '购买商品_接受劳务支付的现金'            ], 
    ['number', 117, 117, NaN, NaN, 'netIcCuLoAdv'                          , 'net increase in customer loans and advances'                                                                 , '客户贷款及垫款净增加额'               ], 
    ['number', 118, 118, NaN, NaN, 'netIcDpoWithCbkOBks'                   , 'net increase in deposits with the central bank and other banks'                                              , '存放中央银行和同业款项净增加额'           ], 
    ['number', 119, 119, NaN, NaN, 'cPdClaimsUnderOriInsrContract'         , 'cash paid for claims under the original insurance contract'                                                  , '支付原保险合同赔付款项的现金'            ], 
    ['number', 120, 120, NaN, NaN, 'cPdIntrCms'                            , 'cash paid for interest and commission'                                                                       , '支付利息_手续费及佣金的现金'            ], 
    ['number', 121, 121, NaN, NaN, 'cPdPolicyDiv'                          , 'cash paid for policy dividend'                                                                               , '支付保单红利的现金'                 ], 
    ['number', 122, 122, NaN, NaN, 'cPdForEmployees'                       , 'cash paid to and for employees'                                                                              , '支付给职工以及为职工支付的现金'           ], 
    ['number', 123, 123, 105, 105, 'txPd'                                  , 'taxes paid'                                                                                                  , '支付的各项税费'                   ], 
    ['number', 124, 124, NaN, NaN, 'oCPdRelatingToOp'                      , 'other cash paid relating to operating activities'                                                            , '支付的其他与经营活动有关的现金'           ], 
    ['number', 125, 125, 106, 106, 'coutOp'                                , 'subtotal of cash outflow from operating activities'                                                          , '经营活动现金流出小计'                ], 
    ['number', 126, 126, NaN, NaN, 'netCfFrOp'                             , 'net cash flow from operating activities'                                                                     , '经营活动产生的现金流量净额'             ], 
    ['number', 127, 127, NaN, NaN, 'cFrIvRecovery'                         , 'cash received from investment recovery'                                                                      , '收回投资所收到的现金'                ], 
    ['number', 128, 128, 107, 107, 'cFrIvInc'                              , 'cash received from investment income'                                                                        , '取得投资收益所收到的现金'              ], 
    ['number', 129, 129, NaN, NaN, 'netCFrDspOfFxAstIntgAstOLtAst'         , 'net cash received from disposal of fixed assets, intangible assets and other long-term assets'               , '处置固定资产_无形资产和其他长期资产所收回的现金净额'], 
    ['number', 130, 130, NaN, NaN, 'netCFrDspOfSubsidiariesOBUnits'        , 'net cash received from disposal of subsidiaries and other business units'                                    , '处置子公司及其他营业单位收到的现金净额'       ], 
    ['number', 131, 131, NaN, NaN, 'oCRecvRelatingToIv'                    , 'other cash received relating to investment activities'                                                       , '收到的其他与投资活动有关的现金'           ], 
    ['number', 132, 132, NaN, NaN, 'reduceCFrPledgesTimeDpo'               , 'reduce cash received from pledges and time deposits'                                                         , '减少质押和定期存款所收到的现金'           ], 
    ['number', 133, 133, 108, 108, 'cinIv'                                 , 'subtotal of cash inflow from investment activities'                                                          , '投资活动现金流入小计'                ], 
    ['number', 134, 134, NaN, NaN, 'cPdAcqConstructionOfFxAstIntgAstOLtAst', 'cash paid for the acquisition and construction of fixed assets, intangible assets and other long-term assets', '购建固定资产_无形资产和其他长期资产所支付的现金'  ], 
    ['number', 135, 135, 109, 109, 'cPdIv'                                 , 'cash paid for investment'                                                                                    , '投资所支付的现金'                  ], 
    ['number', 136, 136, NaN, NaN, 'netIcPledgedLo'                        , 'net increase in pledged loans'                                                                               , '质押贷款净增加额'                  ], 
    ['number', 137, 137, NaN, NaN, 'netCPdAcquireSubsidiariesOBUnits'      , 'net cash paid to acquire subsidiaries and other business units'                                              , '取得子公司及其他营业单位支付的现金净额'       ], 
    ['number', 138, 138, NaN, NaN, 'oCPdRelatedToIv'                       , 'other cash paid related to investment activities'                                                            , '支付的其他与投资活动有关的现金'           ], 
    ['number', 139, 139, NaN, NaN, 'increaseCPdPledgeTmDpo'                , 'increase cash paid for pledge and term deposits'                                                             , '增加质押和定期存款所支付的现金'           ], 
    ['number', 140, 140, 110, 110, 'coutIv'                                , 'subtotal of cash outflow from investment activities'                                                         , '投资活动现金流出小计'                ], 
    ['number', 141, 141, NaN, NaN, 'netCfFrIv'                             , 'net cash flow from investing activities'                                                                     , '投资活动产生的现金流量净额'             ], 
    ['number', 142, 142, NaN, NaN, 'cFrIvAbsorption'                       , 'cash received from investment absorption'                                                                    , '吸收投资收到的现金'                 ], 
    ['number', 143, 143, NaN, NaN, 'cFrMinIvBySubsidiaries'                , 'cash received from minority shareholders\' investment by subsidiaries'                                       , '其中_子公司吸收少数股东投资收到的现金'       ], 
    ['number', 144, 144, NaN, NaN, 'cFrBorw'                               , 'cash received from borrowing'                                                                                , '取得借款收到的现金'                 ], 
    ['number', 145, 145, NaN, NaN, 'cFrBondIssue'                          , 'cash received from bond issue'                                                                               , '发行债券收到的现金'                 ], 
    ['number', 146, 146, NaN, NaN, 'oCRecvRelatingToFin'                   , 'other cash received relating to financing activities'                                                        , '收到其他与筹资活动有关的现金'            ], 
    ['number', 147, 147, 112, 112, 'cinFin'                                , 'subtotal of cash inflow from financing activities'                                                           , '筹资活动现金流入小计'                ], 
    ['number', 148, 148, 113, 113, 'cPdDebtRepm'                           , 'cash paid for debt repayment'                                                                                , '偿还债务支付的现金'                 ], 
    ['number', 149, 149, NaN, NaN, 'cPdDivDistributionIntrPm'              , 'cash paid for dividend distribution or interest payment'                                                     , '分配股利_利润或偿付利息所支付的现金'        ], 
    ['number', 150, 150, NaN, NaN, 'ofWhichDivsPftsPdBySubsidiariesToMin'  , 'of which, dividends and profits paid by subsidiaries to minority shareholders'                               , '其中_子公司支付给少数股东的股利_利润'       ], 
    ['number', 151, 151, NaN, NaN, 'oCPmRelatedToFin'                      , 'other cash payments related to financing activities'                                                         , '支付其他与筹资活动有关的现金'            ], 
    ['number', 152, 152, 114, 114, 'coutFin'                               , 'subtotal of cash outflow from financing activities'                                                          , '筹资活动现金流出小计'                ], 
    ['number', 153, 153, NaN, NaN, 'netCfFrFin'                            , 'net cash flow from financing activities'                                                                     , '筹资活动产生的现金流量净额'             ], 
    ['number', 154, 154, NaN, NaN, 'effectOfExchRateChOnCce'               , 'effect of exchange rate changes on cash and cash equivalents'                                                , '汇率变动对现金及现金等价物的影响'          ], 
    ['number', 155, 155, NaN, NaN, 'netIcCce'                              , 'net increase in cash and cash equivalents'                                                                   , '现金及现金等价物净增加额'              ], 
    ['number', 156, 156, NaN, NaN, 'plusBalOfCceAtBeginningOfPeriod'       , 'plus balance of cash and cash equivalents at the beginning of the period'                                    , '加_期初现金及现金等价物余额'            ], 
    ['number', 157, 157, NaN, NaN, 'balOfCceAtEndOfPeriod'                 , 'balance of cash and cash equivalents at the end of the period'                                               , '期末现金及现金等价物余额'              ], 
    ['number', 158, 158, NaN, NaN, 'netInc'                                , 'net income'                                                                                                  , '净利润'                       ], 
    ['number', 159, 159, NaN, NaN, 'minIntrInc'                            , 'minority interest income'                                                                                    , '少数股东损益'                    ], 
    ['number', 160, 160, NaN, NaN, 'unrecgIvLoss'                          , 'unrecognized investment loss'                                                                                , '未确认的投资损失'                  ], 
    ['number', 161, 161, NaN, NaN, 'astDeprRsvs'                           , 'assets depreciation reserves'                                                                                , '资产减值准备'                    ], 
    ['number', 162, 162, NaN, NaN, 'deprOfFxAstOilGasAstProdMat'           , 'depreciation of fixed assets, oil and gas assets and productive materials'                                   , '固定资产折旧_油气资产折耗_生产性物资折旧'     ], 
    ['number', 163, 163, NaN, NaN, 'amoOfIntgAst'                          , 'amortization of intangible assets'                                                                           , '无形资产摊销'                    ], 
    ['number', 164, 164, NaN, NaN, 'amoOfLtUnamoExp'                       , 'amortization of long term unamortized expenses'                                                              , '长期待摊费用摊销'                  ], 
    ['number', 165, 165, NaN, NaN, 'dcUnamoExp'                            , 'decrease of unamortized expenses'                                                                            , '待摊费用的减少'                   ], 
    ['number', 166, 166, NaN, NaN, 'icAccruedExp'                          , 'increase of accrued expenses'                                                                                , '预提费用的增加'                   ], 
    ['number', 167, 167, NaN, NaN, 'lossOnDspOfFxAstIntgAstOLtAst'         , 'loss on disposal of fixed assets and intangible assets and other long-term assets'                           , '处置固定资产_无形资产和其他长期资产的损失'     ], 
    ['number', 168, 168, NaN, NaN, 'lossOnRetirementOfFxAst'               , 'loss on retirement of fixed assets'                                                                          , '固定资产报废损失'                  ], 
    ['number', 169, 169, NaN, NaN, 'lossOnChInFairV'                       , 'loss on changes in fair value'                                                                               , '公允价值变动损失'                  ], 
    ['number', 170, 170, NaN, NaN, 'icDefInc'                              , 'increase in deferred income'                                                                                 , '递延收益增加'                    ], 
    ['number', 171, 171, NaN, NaN, 'estLiab'                               , 'estimated liabilities'                                                                                       , '预计负债'                      ], 
    ['number', 172, 172, NaN, NaN, 'finExp'                                , 'financial expenses'                                                                                          , '财务费用'                      ], 
    ['number', 173, 173, NaN, NaN, 'ivLoss'                                , 'investment loss'                                                                                             , '投资损失'                      ], 
    ['number', 174, 174, NaN, NaN, 'dcDefTxAst'                            , 'decrease in deferred tax assets'                                                                             , '递延所得税资产减少'                 ], 
    ['number', 175, 175, NaN, NaN, 'icDefIncTxLiab'                        , 'increase in deferred income tax liabilities'                                                                 , '递延所得税负债增加'                 ], 
    ['number', 176, 176, NaN, NaN, 'dcInvt'                                , 'decrease in inventory'                                                                                       , '存货的减少'                     ], 
    ['number', 177, 177, NaN, NaN, 'dcOpRecv'                              , 'decrease in operating receivables'                                                                           , '经营性应收项目的减少'                ], 
    ['number', 178, 178, NaN, NaN, 'icOpPyb'                               , 'increase in operating payables'                                                                              , '经营性应付项目的增加'                ], 
    ['number', 179, 179, NaN, NaN, 'dcCompletedUnsettledPm'                , 'decrease of completed but unsettled payment'                                                                 , '已完工尚未结算款的减少'               ], 
    ['number', 180, 180, NaN, NaN, 'icSettledNotCompletedPm'               , 'increase of settled but not completed payment'                                                               , '已结算尚未完工款的增加'               ], 
    ['number', 181, 181, NaN, NaN, 'o'                                     , 'other'                                                                                                       , '其他'                        ], 
    ['number', 182, 182, NaN, NaN, 'netCfFrOp'                             , 'net cash flow from operating activities'                                                                     , '经营活动产生现金流量净额'              ], 
    ['number', 183, 183, NaN, NaN, 'debtToCap'                             , 'debt to capital'                                                                                             , '债务转为资本'                    ], 
    ['number', 184, 184, NaN, NaN, 'convertibleBondsDw1y'                  , 'convertible bonds due within one year'                                                                       , '一年内到期的可转换公司债券'             ], 
    ['number', 185, 185, NaN, NaN, 'fxAstUnderFinLease'                    , 'fixed assets under financing lease'                                                                          , '融资租入固定资产'                  ], 
    ['number', 186, 186, NaN, NaN, 'cBalOfC'                               , 'closing balance of cash'                                                                                     , '现金的期末余额'                   ], 
    ['number', 187, 187, NaN, NaN, 'oBalOfC'                               , 'opening balance of cash'                                                                                     , '现金的期初余额'                   ], 
    ['number', 188, 188, NaN, NaN, 'cBalOfCEqv'                            , 'closing balance of cash equivalents'                                                                         , '现金等价物的期末余额'                ], 
    ['number', 189, 189, NaN, NaN, 'oBalOfCEqv'                            , 'opening balance of cash equivalents'                                                                         , '现金等价物的期初余额'                ], 
    ['number', 190, 190, 115, 115, 'netIcCce'                              , 'net increase in cash and cash equivalents'                                                                   , '现金及现金等价物的净增加额'             ], 
  ], 
}