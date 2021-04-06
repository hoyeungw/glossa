export const balances = {
  head: ['type', 'raw', 'db', 'lite', 'ratio', 'abbr', 'eng', 'chs'], 
  rows: [
    ['string', 100, 100, 100, 100, 'symbol'                            , 'symbol'                                                        , 'symbol'      ], 
    ['string', 100, 101, 101, 101, 'date'                              , 'date'                                                          , '报告日期'        ], 
    ['number', 100, 102, 104, 102, 'monetCap'                          , 'monetary capital'                                              , '货币资金'        ], 
    ['number', 100, NaN, NaN, NaN, 'settlementProvisions'              , 'settlement provisions'                                         , '结算备付金'       ], 
    ['number', 100, 104, NaN, NaN, 'lendingFunds'                      , 'lending funds'                                                 , '拆出资金'        ], 
    ['number', 100, 105, NaN, 103, 'tFa'                               , 'transactional financial assets'                                , '交易性金融资产'     ], 
    ['number', 100, 106, NaN, NaN, 'deriFa'                            , 'derivative financial assets'                                   , '衍生金融资产'      ], 
    ['number', 100, 107, NaN, NaN, 'billsRecv'                         , 'bills receivables'                                             , '应收票据'        ], 
    ['number', 100, 108, NaN, 104, 'accRecv'                           , 'accounts receivables'                                          , '应收账款'        ], 
    ['number', 100, 109, NaN, NaN, 'prepm'                             , 'prepayments'                                                   , '预付款项'        ], 
    ['number', 100, 110, NaN, NaN, 'premRecv'                          , 'premium receivables'                                           , '应收保费'        ], 
    ['number', 100, NaN, NaN, NaN, 'reinsrAccRecv'                     , 'reinsurance accounts receivables'                              , '应收分保账款'      ], 
    ['number', 100, NaN, NaN, NaN, 'reinsrContractRsvRecv'             , 'reinsurance contract reserve receivables'                      , '应收分保合同准备金'   ], 
    ['number', 100, 113, NaN, NaN, 'intrRecv'                          , 'interest receivables'                                          , '应收利息'        ], 
    ['number', 100, 114, NaN, NaN, 'divsRecv'                          , 'dividends receivables'                                         , '应收股利'        ], 
    ['number', 100, 115, NaN, NaN, 'oRecv'                             , 'other receivables'                                             , '其他应收款'       ], 
    ['number', 100, NaN, NaN, NaN, 'exportTxRefundRecv'                , 'export tax refund receivables'                                 , '应收出口退税'      ], 
    ['number', 100, NaN, NaN, NaN, 'subsidiesRecv'                     , 'subsidies receivables'                                         , '应收补贴款'       ], 
    ['number', 100, 118, NaN, NaN, 'marginRecv'                        , 'margin receivables'                                            , '应收保证金'       ], 
    ['number', 100, 119, NaN, NaN, 'internalRecv'                      , 'internal receivables'                                          , '内部应收款'       ], 
    ['number', 100, 120, NaN, NaN, 'buyBackFa'                         , 'buy back financial assets'                                     , '买入返售金融资产'    ], 
    ['number', 100, 121, 105, 105, 'invt'                              , 'inventory'                                                     , '存货'          ], 
    ['number', 100, 122, NaN, NaN, 'prepaidExp'                        , 'prepaid expenses'                                              , '待摊费用'        ], 
    ['number', 100, NaN, NaN, NaN, 'pftLossOfCurAstTbDsp'              , 'profit and loss of current assets to be disposed'              , '待处理流动资产损益'   ], 
    ['number', 100, 124, NaN, NaN, 'ncurAstDw1y'                       , 'non current assets due within one year'                        , '一年内到期的非流动资产' ], 
    ['number', 100, 125, NaN, NaN, 'oCurAst'                           , 'other current assets'                                          , '其他流动资产'      ], 
    ['number', 100, 126, 103, 106, 'curAst'                            , 'total current assets'                                          , '流动资产合计'      ], 
    ['number', 100, 127, NaN, NaN, 'loAdvToCus'                        , 'loans and advances to customers'                               , '发放贷款及垫款'     ], 
    ['number', 100, 128, NaN, NaN, 'afsFa'                             , 'available-for-sale financial assets'                           , '可供出售金融资产'    ], 
    ['number', 100, 129, NaN, NaN, 'htmIv'                             , 'held-to-maturity investment'                                   , '持有至到期投资'     ], 
    ['number', 100, 130, NaN, NaN, 'ltRecv'                            , 'long term receivables'                                         , '长期应收款'       ], 
    ['number', 100, 131, NaN, NaN, 'ltEqtIv'                           , 'long term equity investment'                                   , '长期股权投资'      ], 
    ['number', 100, 132, NaN, NaN, 'oLtIv'                             , 'other long-term investments'                                   , '其他长期投资'      ], 
    ['number', 100, 133, NaN, NaN, 'ivRe'                              , 'investment real estate'                                        , '投资性房地产'      ], 
    ['number', 100, 134, NaN, NaN, 'oriVOfFxAst'                       , 'original value of fixed assets'                                , '固定资产原值'      ], 
    ['number', 100, 135, NaN, NaN, 'accumDepr'                         , 'accumulated depreciation'                                      , '累计折旧'        ], 
    ['number', 100, 136, NaN, NaN, 'netVOfFxAst'                       , 'net value of fixed assets'                                     , '固定资产净值'      ], 
    ['number', 100, NaN, NaN, NaN, 'fxAstDeprRsvs'                     , 'fixed assets depreciation reserves'                            , '固定资产减值准备'    ], 
    ['number', 100, 138, 107, 107, 'fxAst'                             , 'fixed assets'                                                  , '固定资产'        ], 
    ['number', 100, 139, NaN, NaN, 'cip'                               , 'construction in progress'                                      , '在建工程'        ], 
    ['number', 100, 140, NaN, NaN, 'engMat'                            , 'engineering materials'                                         , '工程物资'        ], 
    ['number', 100, 141, NaN, NaN, 'dspOfFxAst'                        , 'disposal of fixed assets'                                      , '固定资产清理'      ], 
    ['number', 100, 142, NaN, NaN, 'prodBioAst'                        , 'productive biological assets'                                  , '生产性生物资产'     ], 
    ['number', 100, 143, NaN, NaN, 'npftBioAst'                        , 'non-profit biological assets'                                  , '公益性生物资产'     ], 
    ['number', 100, 144, NaN, NaN, 'oilGasAst'                         , 'oil and gas assets'                                            , '油气资产'        ], 
    ['number', 100, 145, 108, 108, 'intgAst'                           , 'intangible assets'                                             , '无形资产'        ], 
    ['number', 100, 146, NaN, 109, 'devExpd'                           , 'development expenditure'                                       , '开发支出'        ], 
    ['number', 100, 147, 109, 110, 'gdw'                               , 'goodwill'                                                      , '商誉'          ], 
    ['number', 100, 148, NaN, NaN, 'ltUnamoExp'                        , 'long term unamortized expenses'                                , '长期待摊费用'      ], 
    ['number', 100, NaN, NaN, NaN, 'shareSplitTRights'                 , 'share split trading rights'                                    , '股权分置流通权'     ], 
    ['number', 100, 150, NaN, NaN, 'defTxAst'                          , 'deferred tax assets'                                           , '递延所得税资产'     ], 
    ['number', 100, 151, NaN, NaN, 'oNcurAst'                          , 'other non current assets'                                      , '其他非流动资产'     ], 
    ['number', 100, 152, 106, 111, 'ncurAst'                           , 'total non current assets'                                      , '非流动资产合计'     ], 
    ['number', 100, 153, 102, 112, 'ast'                               , 'total assets'                                                  , '资产总计'        ], 
    ['number', 100, 154, NaN, NaN, 'stLo'                              , 'short term loans'                                              , '短期借款'        ], 
    ['number', 100, 155, NaN, NaN, 'borwFrCbk'                         , 'borrowing from the central bank'                               , '向中央银行借款'     ], 
    ['number', 100, NaN, NaN, NaN, 'dpoIntrTakingInterBkDpoIntr'       , 'deposit interest taking and inter-bank deposit interest'       , '吸收存款及同业存放'   ], 
    ['number', 100, 157, NaN, NaN, 'borwFunds'                         , 'borrowed funds'                                                , '拆入资金'        ], 
    ['number', 100, 158, NaN, NaN, 'tFinLiab'                          , 'transactional financial liabilities'                           , '交易性金融负债'     ], 
    ['number', 100, 159, NaN, NaN, 'deriFinLiab'                       , 'derivative financial liabilities'                              , '衍生金融负债'      ], 
    ['number', 100, 160, NaN, NaN, 'billsPyb'                          , 'bills payable'                                                 , '应付票据'        ], 
    ['number', 100, 161, NaN, NaN, 'accPyb'                            , 'accounts payable'                                              , '应付账款'        ], 
    ['number', 100, 162, NaN, NaN, 'advReceipts'                       , 'advance receipts'                                              , '预收账款'        ], 
    ['number', 100, NaN, NaN, NaN, 'faSoldForRepurc'                   , 'financial assets sold for repurchase'                          , '卖出回购金融资产款'   ], 
    ['number', 100, 164, NaN, NaN, 'feCmsPyb'                          , 'fees and commissions payable'                                  , '应付手续费及佣金'    ], 
    ['number', 100, 165, NaN, NaN, 'payrollPyb'                        , 'payroll payable'                                               , '应付职工薪酬'      ], 
    ['number', 100, 166, NaN, NaN, 'txPyb'                             , 'taxes payable'                                                 , '应交税费'        ], 
    ['number', 100, 167, NaN, NaN, 'intrPyb'                           , 'interest payable'                                              , '应付利息'        ], 
    ['number', 100, 168, NaN, NaN, 'divsPyb'                           , 'dividends payable'                                             , '应付股利'        ], 
    ['number', 100, 169, NaN, NaN, 'oPyb'                              , 'other payables'                                                , '其他应交款'       ], 
    ['number', 100, 170, NaN, NaN, 'marginPyb'                         , 'margin payable'                                                , '应付保证金'       ], 
    ['number', 100, 171, NaN, NaN, 'internalPyb'                       , 'internal payables'                                             , '内部应付款'       ], 
    ['number', 100, 172, NaN, NaN, 'oPyb'                              , 'other payables'                                                , '其他应付款'       ], 
    ['number', 100, 173, NaN, NaN, 'accruedExp'                        , 'accrued expenses'                                              , '预提费用'        ], 
    ['number', 100, 174, NaN, NaN, 'estCurLiab'                        , 'estimated current liabilities'                                 , '预计流动负债'      ], 
    ['number', 100, NaN, NaN, NaN, 'reinsrPremPyb'                     , 'reinsurance premiums payable'                                  , '应付分保账款'      ], 
    ['number', 100, NaN, NaN, NaN, 'insrContractRsvs'                  , 'insurance contract reserves'                                   , '保险合同准备金'     ], 
    ['number', 100, NaN, NaN, NaN, 'cuBrokerageDpo'                    , 'customer brokerage deposits'                                   , '代理买卖证券款'     ], 
    ['number', 100, NaN, NaN, NaN, 'securitiesUnderwritingBrokerageDpo', 'securities underwriting brokerage deposits'                    , '代理承销证券款'     ], 
    ['number', 100, NaN, NaN, NaN, 'internationalBillSettlement'       , 'international bill settlement'                                 , '国际票证结算'      ], 
    ['number', 100, NaN, NaN, NaN, 'domesticBillSettlement'            , 'domestic bill settlement'                                      , '国内票证结算'      ], 
    ['number', 100, 181, NaN, NaN, 'defInc'                            , 'deferred income'                                               , '递延收益'        ], 
    ['number', 100, 182, NaN, NaN, 'stBondsPyb'                        , 'short term bonds payable'                                      , '应付短期债券'      ], 
    ['number', 100, 183, NaN, NaN, 'ncurLiabDw1y'                      , 'non current liabilities due within one year'                   , '一年内到期的非流动负债' ], 
    ['number', 100, 184, NaN, NaN, 'oCurLiab'                          , 'other current liabilities'                                     , '其他流动负债'      ], 
    ['number', 100, 185, 112, 113, 'curLiab'                           , 'total current liabilities'                                     , '流动负债合计'      ], 
    ['number', 100, 186, NaN, NaN, 'ltBorw'                            , 'long term borrowings'                                          , '长期借款'        ], 
    ['number', 100, 187, NaN, NaN, 'bondsPyb'                          , 'bonds payable'                                                 , '应付债券'        ], 
    ['number', 100, 188, NaN, NaN, 'ltPyb'                             , 'long term payables'                                            , '长期应付款'       ], 
    ['number', 100, 189, NaN, NaN, 'specialPyb'                        , 'special payables'                                              , '专项应付款'       ], 
    ['number', 100, 190, NaN, NaN, 'estNcurLiab'                       , 'estimated non current liabilities'                             , '预计非流动负债'     ], 
    ['number', 100, 191, NaN, NaN, 'ltDefInc'                          , 'long term deferred income'                                     , '长期递延收益'      ], 
    ['number', 100, 192, NaN, NaN, 'defIncTxLiab'                      , 'deferred income tax liabilities'                               , '递延所得税负债'     ], 
    ['number', 100, 193, NaN, NaN, 'oNcurLiab'                         , 'other non current liabilities'                                 , '其他非流动负债'     ], 
    ['number', 100, 194, 113, 114, 'ncurLiab'                          , 'total non current liabilities'                                 , '非流动负债合计'     ], 
    ['number', 100, 195, 111, 115, 'liab'                              , 'total liabilities'                                             , '负债合计'        ], 
    ['number', 100, 196, NaN, NaN, 'paidInCap'                         , 'paid in capital'                                               , '实收资本'        ], 
    ['number', 100, 197, NaN, NaN, 'capRsv'                            , 'capital reserve'                                               , '资本公积'        ], 
    ['number', 100, NaN, NaN, NaN, 'lessTreasuryShares'                , 'less treasury shares'                                          , '减_库存股'       ], 
    ['number', 100, 199, NaN, NaN, 'specialRsv'                        , 'special reserve'                                               , '专项储备'        ], 
    ['number', 100, 200, NaN, NaN, 'surplusRsv'                        , 'surplus reserve'                                               , '盈余公积'        ], 
    ['number', 100, NaN, NaN, NaN, 'generalRiskProvisions'             , 'general risk provisions'                                       , '一般风险准备'      ], 
    ['number', 100, NaN, NaN, NaN, 'undeterminedIvLoss'                , 'undetermined investment loss'                                  , '未确定的投资损失'    ], 
    ['number', 100, NaN, NaN, NaN, 'undistributedPft'                  , 'undistributed profit'                                          , '未分配利润'       ], 
    ['number', 100, NaN, NaN, NaN, 'cashDivsTbDistributed'             , 'cash dividends to be distributed'                              , '拟分配现金股利'     ], 
    ['number', 100, NaN, NaN, NaN, 'translationRsv'                    , 'translation reserve'                                           , '外币报表折算差额'    ], 
    ['number', 100, NaN, NaN, NaN, 'eqtAttrParentCompany'              , 'total shareholders\' equity attributable to the parent company', '归属于母公司股东权益合计'], 
    ['number', 100, 207, NaN, NaN, 'minEqt'                            , 'minority equity'                                               , '少数股东权益'      ], 
    ['number', 100, 208, 114, 116, 'eqt'                               , 'total shareholders\' equity'                                   , '所有者权益合计'     ], 
    ['number', 100, 209, 110, 117, 'liabEqt'                           , 'total liabilities and shareholders\' equity'                   , '负债和所有者权益总计'  ], 
  ], 
}