export const balances = [
  [        '报告日期', 'date'],
  [        '货币资金', 'monetCap'],
  [       '结算备付金', 'settlementProvisions'],
  [        '拆出资金', 'lendingFunds'],
  [     '交易性金融资产', 'tFa'],
  [      '衍生金融资产', 'deriFa'],
  [        '应收票据', 'billsRecv'],
  [        '应收账款', 'accRecv'],
  [        '预付款项', 'prepm'],
  [        '应收保费', 'premRecv'],
  [      '应收分保账款', 'reinsrAccRecv'],
  [   '应收分保合同准备金', 'reinsrContractRsvRecv'],
  [        '应收利息', 'intrRecv'],
  [        '应收股利', 'divsRecv'],
  [       '其他应收款', 'oRecv'],
  [      '应收出口退税', 'exportTxRefundRecv'],
  [       '应收补贴款', 'subsidiesRecv'],
  [       '应收保证金', 'marginRecv'],
  [       '内部应收款', 'internalRecv'],
  [    '买入返售金融资产', 'buyBackFa'],
  [          '存货', 'invt'],
  [        '待摊费用', 'prepaidExp'],
  [   '待处理流动资产损益', 'pftLossOfCurAstTbDsp'],
  [ '一年内到期的非流动资产', 'ncurAstDw1y'],
  [      '其他流动资产', 'oCurAst'],
  [      '流动资产合计', 'curAst'],
  [     '发放贷款及垫款', 'loAdvToCus'],
  [    '可供出售金融资产', 'afsFa'],
  [     '持有至到期投资', 'htmIv'],
  [       '长期应收款', 'ltRecv'],
  [      '长期股权投资', 'ltEqtIv'],
  [      '其他长期投资', 'oLtIv'],
  [      '投资性房地产', 'ivRe'],
  [      '固定资产原值', 'oriVOfFxAst'],
  [        '累计折旧', 'accumDepr'],
  [      '固定资产净值', 'netVOfFxAst'],
  [    '固定资产减值准备', 'fxAstDeprRsvs'],
  [        '固定资产', 'fxAst'],
  [        '在建工程', 'cip'],
  [        '工程物资', 'engMat'],
  [      '固定资产清理', 'dspOfFxAst'],
  [     '生产性生物资产', 'prodBioAst'],
  [     '公益性生物资产', 'npftBioAst'],
  [        '油气资产', 'oilGasAst'],
  [        '无形资产', 'intgAst'],
  [        '开发支出', 'devExpd'],
  [          '商誉', 'gdw'],
  [      '长期待摊费用', 'ltUnamoExp'],
  [     '股权分置流通权', 'shareSplitTRights'],
  [     '递延所得税资产', 'defTxAst'],
  [     '其他非流动资产', 'oNcurAst'],
  [     '非流动资产合计', 'ncurAst'],
  [        '资产总计', 'ast'],
  [        '短期借款', 'stLo'],
  [     '向中央银行借款', 'borwFrCbk'],
  [   '吸收存款及同业存放', 'dpoIntrTakingInterBkDpoIntr'],
  [        '拆入资金', 'borwFunds'],
  [     '交易性金融负债', 'tFinLiab'],
  [      '衍生金融负债', 'deriFinLiab'],
  [        '应付票据', 'billsPyb'],
  [        '应付账款', 'accPyb'],
  [        '预收账款', 'advReceipts'],
  [   '卖出回购金融资产款', 'faSoldForRepurc'],
  [    '应付手续费及佣金', 'feCmsPyb'],
  [      '应付职工薪酬', 'payrollPyb'],
  [        '应交税费', 'txPyb'],
  [        '应付利息', 'intrPyb'],
  [        '应付股利', 'divsPyb'],
  [       '其他应交款', 'oPyb'],
  [       '应付保证金', 'marginPyb'],
  [       '内部应付款', 'internalPyb'],
  [       '其他应付款', 'oPyb'],
  [        '预提费用', 'accruedExp'],
  [      '预计流动负债', 'estCurLiab'],
  [      '应付分保账款', 'reinsrPremPyb'],
  [     '保险合同准备金', 'insrContractRsvs'],
  [     '代理买卖证券款', 'cuBrokerageDpo'],
  [     '代理承销证券款', 'securitiesUnderwritingBrokerageDpo'],
  [      '国际票证结算', 'internationalBillSettlement'],
  [      '国内票证结算', 'domesticBillSettlement'],
  [        '递延收益', 'defInc'],
  [      '应付短期债券', 'stBondsPyb'],
  [ '一年内到期的非流动负债', 'ncurLiabDw1y'],
  [      '其他流动负债', 'oCurLiab'],
  [      '流动负债合计', 'curLiab'],
  [        '长期借款', 'ltBorw'],
  [        '应付债券', 'bondsPyb'],
  [       '长期应付款', 'ltPyb'],
  [       '专项应付款', 'specialPyb'],
  [     '预计非流动负债', 'estNcurLiab'],
  [      '长期递延收益', 'ltDefInc'],
  [     '递延所得税负债', 'defIncTxLiab'],
  [     '其他非流动负债', 'oNcurLiab'],
  [     '非流动负债合计', 'ncurLiab'],
  [        '负债合计', 'liab'],
  [        '实收资本', 'paidInCap'],
  [        '资本公积', 'capRsv'],
  [       '减_库存股', 'lessTreasuryShares'],
  [        '专项储备', 'specialRsv'],
  [        '盈余公积', 'surplusRsv'],
  [      '一般风险准备', 'generalRiskProvisions'],
  [    '未确定的投资损失', 'undeterminedIvLoss'],
  [       '未分配利润', 'undistributedPft'],
  [     '拟分配现金股利', 'cashDivsTbDistributed'],
  [    '外币报表折算差额', 'translationRsv'],
  ['归属于母公司股东权益合计', 'eqtAttrParentCompany'],
  [      '少数股东权益', 'minEqt'],
  [     '所有者权益合计', 'eqt'],
  [  '负债和所有者权益总计', 'liabEqt'],
]