export const incomes = {
  head: ['type', 'raw', 'db', 'lite', 'ratio', 'abbr', 'eng', 'chs'],
  rows: [
    ['string', 100, 100, 100, 100, 'symbol'                      , 'symbol'                                              , 'symbol'         ],
    ['string', 101, 101, 101, 101, 'date'                        , 'date'                                                , '报告日期'           ],
    ['number', 102, 102, 102, 102, 'rev'                         , 'revenue'                                             , '营业总收入'          ],
    ['number', 103, 103, 103, 103, 'opInc'                       , 'operating income'                                    , '营业收入'           ],
    ['number', 104, 104, NaN, NaN, 'intrInc'                     , 'interest income'                                     , '利息收入'           ],
    ['number', 105, 105, NaN, NaN, 'earnedPrem'                  , 'earned premium'                                      , '已赚保费'           ],
    ['number', 106, 106, NaN, NaN, 'cmsInc'                      , 'commission income'                                   , '手续费及佣金收入'       ],
    ['number', 107, 107, NaN, NaN, 'reSaInc'                     , 'real estate sales income'                            , '房地产销售收入'        ],
    ['number', 108, 108, NaN, NaN, 'oOpInc'                      , 'other operating income'                              , '其他业务收入'         ],
    ['number', 109, 109, 104, 104, 'revCosts'                    , 'revenue costs'                                       , '营业总成本'          ],
    ['number', 110, 110, 105, 105, 'opCosts'                     , 'operating costs'                                     , '营业成本'           ],
    ['number', 111, 111, 106, 106, 'intrExp'                     , 'interest expenses'                                   , '利息支出'           ],
    ['number', 112, 112, 107, 107, 'svCmsExp'                    , 'service charge and commission expenses'              , '手续费及佣金支出'       ],
    ['number', 113, 113, NaN, NaN, 'reSaCosts'                   , 'real estate sales costs'                             , '房地产销售成本'        ],
    ['number', 114, 114, 108, 108, 'rdExp'                       , 'r&d expenses'                                        , '研发费用'           ],
    ['number', 115, 115, NaN, NaN, 'surrender'                   , 'surrender'                                           , '退保金'            ],
    ['number', 116, NaN, NaN, NaN, 'netCompenExp'                , 'net compensation expenses'                           , '赔付支出净额'         ],
    ['number', 117, NaN, NaN, NaN, 'netProvisionForInsrContracts', 'net provision for insurance contracts'               , '提取保险合同准备金净额'    ],
    ['number', 118, NaN, NaN, NaN, 'policyDivExp'                , 'policy dividend expenses'                            , '保单红利支出'         ],
    ['number', 119, 119, NaN, NaN, 'reinsrExp'                   , 'reinsurance expenses'                                , '分保费用'           ],
    ['number', 120, 120, NaN, NaN, 'oOpCosts'                    , 'other operating costs'                               , '其他业务成本'         ],
    ['number', 121, 121, NaN, NaN, 'txSurc'                      , 'tax and surcharges'                                  , '营业税金及附加'        ],
    ['number', 122, 122, 109, 109, 'saExp'                       , 'sales expenses'                                      , '销售费用'           ],
    ['number', 123, 123, 110, 110, 'mangExp'                     , 'management expenses'                                 , '管理费用'           ],
    ['number', 124, 124, 111, 111, 'finExp'                      , 'financial expenses'                                  , '财务费用'           ],
    ['number', 125, 125, NaN, 112, 'astDeval'                    , 'assets devaluation'                                  , '资产减值损失'         ],
    ['number', 126, NaN, NaN, NaN, 'incFrFairVCh'                , 'income from fair value changes'                      , '公允价值变动收益'       ],
    ['number', 127, 127, NaN, NaN, 'ivInc'                       , 'investment income'                                   , '投资收益'           ],
    ['number', 128, NaN, NaN, NaN, 'ivIncFrAssoJv'               , 'investment income from associates and joint ventures', '对联营企业和合营企业的投资收益'],
    ['number', 129, 129, NaN, NaN, 'exGain'                      , 'exchange gain'                                       , '汇兑收益'           ],
    ['number', 130, NaN, NaN, NaN, 'futuresPftLoss'              , 'futures profit and loss'                             , '期货损益'           ],
    ['number', 131, NaN, NaN, NaN, 'custodyProceeds'             , 'custody proceeds'                                    , '托管收益'           ],
    ['number', 132, 132, NaN, NaN, 'subsidyInc'                  , 'subsidy income'                                      , '补贴收入'           ],
    ['number', 133, 133, NaN, NaN, 'oOpPft'                      , 'other operating profit'                              , '其他业务利润'         ],
    ['number', 134, 134, 112, 112, 'opPft'                       , 'operating profit'                                    , '营业利润'           ],
    ['number', 135, 135, NaN, NaN, 'nopInc'                      , 'non operating income'                                , '营业外收入'          ],
    ['number', 136, 136, NaN, NaN, 'nopExp'                      , 'non operating expenses'                              , '营业外支出'          ],
    ['number', 137, NaN, NaN, NaN, 'lossOnDspOfNcurAst'          , 'loss on disposal of non current assets'              , '非流动资产处置损失'      ],
    ['number', 138, 138, 113, 113, 'pft'                         , 'total profit'                                        , '利润总额'           ],
    ['number', 139, 139, 114, 114, 'incTxExp'                    , 'income tax expenses'                                 , '所得税费用'          ],
    ['number', 140, NaN, NaN, NaN, 'unrecgIvLoss'                , 'unrecognized investment loss'                        , '未确认投资损失'        ],
    ['number', 141, 141, 115, 115, 'ni'                          , 'net income'                                          , '净利润'            ],
    ['number', 142, NaN, NaN, NaN, 'niAttrParentCompanyOwner'    , 'net income attributable to parent company owner'     , '归属于母公司所有者的净利润'  ],
    ['number', 143, NaN, NaN, NaN, 'niOfMergedPartyBeforeMerger' , 'net income of the merged party before the merger '   , '被合并方在合并前实现净利润'  ],
    ['number', 144, 144, NaN, NaN, 'minIntrInc'                  , 'minority interest income'                            , '少数股东损益'         ],
    ['number', 145, 145, NaN, NaN, 'eps'                         , 'earnings per share'                                  , '基本每股收益'         ],
    ['number', 146, 146, NaN, NaN, 'epsDil'                      , 'earnings per share diluted'                          , '稀释每股收益'         ],
  ],
}
