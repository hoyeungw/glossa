import { RAW, DB, LITE, RATIO } from '@glossa/enum-data-scopes';
import { CHS } from '@glossa/enum-fin';
import { TYPE } from '@glossa/enum-general-fields';
import { STR, NUM } from '@typen/enum-data-types';
import { Table } from '@analys/table';

const balances$1 = {
  head: [TYPE, RAW, DB, LITE, RATIO, CHS],
  rows: [[STR, 100, 100, 100, 100, 'symbol'], // rawdata里没有
  [STR, 100, 101, 101, 101, '报告日期'], [NUM, 100, 102, 104, 102, '货币资金'], [NUM, 100, 103, NaN, NaN, '结算备付金'], [NUM, 100, 104, NaN, NaN, '拆出资金'], [NUM, 100, 105, NaN, 103, '交易性金融资产'], [NUM, 100, 106, NaN, NaN, '衍生金融资产'], [NUM, 100, 107, NaN, NaN, '应收票据'], [NUM, 100, 108, NaN, 104, '应收账款'], [NUM, 100, 109, NaN, NaN, '预付款项'], [NUM, 100, 110, NaN, NaN, '应收保费'], [NUM, 100, 111, NaN, NaN, '应收分保账款'], [NUM, 100, 112, NaN, NaN, '应收分保合同准备金'], [NUM, 100, 113, NaN, NaN, '应收利息'], [NUM, 100, 114, NaN, NaN, '应收股利'], [NUM, 100, 115, NaN, NaN, '其他应收款'], [NUM, 100, 116, NaN, NaN, '应收出口退税'], [NUM, 100, 117, NaN, NaN, '应收补贴款'], [NUM, 100, 118, NaN, NaN, '应收保证金'], [NUM, 100, 119, NaN, NaN, '内部应收款'], [NUM, 100, 120, NaN, NaN, '买入返售金融资产'], [NUM, 100, 121, 105, 105, '存货'], [NUM, 100, 122, NaN, NaN, '待摊费用'], [NUM, 100, 123, NaN, NaN, '待处理流动资产损益'], [NUM, 100, 124, NaN, NaN, '一年内到期的非流动资产'], [NUM, 100, 125, NaN, NaN, '其他流动资产'], [NUM, 100, 126, 103, 106, '流动资产合计'], [NUM, 100, 127, NaN, NaN, '发放贷款及垫款'], [NUM, 100, 128, NaN, NaN, '可供出售金融资产'], [NUM, 100, 129, NaN, NaN, '持有至到期投资'], [NUM, 100, 130, NaN, NaN, '长期应收款'], [NUM, 100, 131, NaN, NaN, '长期股权投资'], [NUM, 100, 132, NaN, NaN, '其他长期投资'], [NUM, 100, 133, NaN, NaN, '投资性房地产'], [NUM, 100, 134, NaN, NaN, '固定资产原值'], [NUM, 100, 135, NaN, NaN, '累计折旧'], [NUM, 100, 136, NaN, NaN, '固定资产净值'], [NUM, 100, 137, NaN, NaN, '固定资产减值准备'], [NUM, 100, 138, 107, 107, '固定资产'], [NUM, 100, 139, NaN, NaN, '在建工程'], [NUM, 100, 140, NaN, NaN, '工程物资'], [NUM, 100, 141, NaN, NaN, '固定资产清理'], [NUM, 100, 142, NaN, NaN, '生产性生物资产'], [NUM, 100, 143, NaN, NaN, '公益性生物资产'], [NUM, 100, 144, NaN, NaN, '油气资产'], [NUM, 100, 145, 108, 108, '无形资产'], [NUM, 100, 146, NaN, 109, '开发支出'], [NUM, 100, 147, 109, 110, '商誉'], [NUM, 100, 148, NaN, NaN, '长期待摊费用'], [NUM, 100, 149, NaN, NaN, '股权分置流通权'], [NUM, 100, 150, NaN, NaN, '递延所得税资产'], [NUM, 100, 151, NaN, NaN, '其他非流动资产'], [NUM, 100, 152, 106, 111, '非流动资产合计'], [NUM, 100, 153, 102, 112, '资产总计'], [NUM, 100, 154, NaN, NaN, '短期借款'], [NUM, 100, 155, NaN, NaN, '向中央银行借款'], [NUM, 100, 156, NaN, NaN, '吸收存款及同业存放'], [NUM, 100, 157, NaN, NaN, '拆入资金'], [NUM, 100, 158, NaN, NaN, '交易性金融负债'], [NUM, 100, 159, NaN, NaN, '衍生金融负债'], [NUM, 100, 160, NaN, NaN, '应付票据'], [NUM, 100, 161, NaN, NaN, '应付账款'], [NUM, 100, 162, NaN, NaN, '预收账款'], [NUM, 100, 163, NaN, NaN, '卖出回购金融资产款'], [NUM, 100, 164, NaN, NaN, '应付手续费及佣金'], [NUM, 100, 165, NaN, NaN, '应付职工薪酬'], [NUM, 100, 166, NaN, NaN, '应交税费'], [NUM, 100, 167, NaN, NaN, '应付利息'], [NUM, 100, 168, NaN, NaN, '应付股利'], [NUM, 100, 169, NaN, NaN, '其他应交款'], [NUM, 100, 170, NaN, NaN, '应付保证金'], [NUM, 100, 171, NaN, NaN, '内部应付款'], [NUM, 100, 172, NaN, NaN, '其他应付款'], [NUM, 100, 173, NaN, NaN, '预提费用'], [NUM, 100, 174, NaN, NaN, '预计流动负债'], [NUM, 100, 175, NaN, NaN, '应付分保账款'], [NUM, 100, 176, NaN, NaN, '保险合同准备金'], [NUM, 100, 177, NaN, NaN, '代理买卖证券款'], [NUM, 100, 178, NaN, NaN, '代理承销证券款'], [NUM, 100, 179, NaN, NaN, '国际票证结算'], [NUM, 100, 180, NaN, NaN, '国内票证结算'], [NUM, 100, 181, NaN, NaN, '递延收益'], [NUM, 100, 182, NaN, NaN, '应付短期债券'], [NUM, 100, 183, NaN, NaN, '一年内到期的非流动负债'], [NUM, 100, 184, NaN, NaN, '其他流动负债'], [NUM, 100, 185, 112, 113, '流动负债合计'], [NUM, 100, 186, NaN, NaN, '长期借款'], [NUM, 100, 187, NaN, NaN, '应付债券'], [NUM, 100, 188, NaN, NaN, '长期应付款'], [NUM, 100, 189, NaN, NaN, '专项应付款'], [NUM, 100, 190, NaN, NaN, '预计非流动负债'], [NUM, 100, 191, NaN, NaN, '长期递延收益'], [NUM, 100, 192, NaN, NaN, '递延所得税负债'], [NUM, 100, 193, NaN, NaN, '其他非流动负债'], [NUM, 100, 194, 113, 114, '非流动负债合计'], [NUM, 100, 195, 111, 115, '负债合计'], [NUM, 100, 196, NaN, NaN, '实收资本'], [NUM, 100, 197, NaN, NaN, '资本公积'], [NUM, 100, 198, NaN, NaN, '减_库存股'], [NUM, 100, 199, NaN, NaN, '专项储备'], [NUM, 100, 200, NaN, NaN, '盈余公积'], [NUM, 100, 201, NaN, NaN, '一般风险准备'], [NUM, 100, 202, NaN, NaN, '未确定的投资损失'], [NUM, 100, 203, NaN, NaN, '未分配利润'], [NUM, 100, 204, NaN, NaN, '拟分配现金股利'], [NUM, 100, 205, NaN, NaN, '外币报表折算差额'], [NUM, 100, 206, NaN, NaN, '归属于母公司股东权益合计'], [NUM, 100, 207, NaN, NaN, '少数股东权益'], [NUM, 100, 208, 114, 116, '所有者权益合计'], [NUM, 100, 209, 110, 117, '负债和所有者权益总计']]
};

const basics$1 = {
  head: [TYPE, RAW, DB, LITE, RATIO, CHS],
  rows: [[STR, 100, 100, 100, 100, 'symbol'], // rawdata里没有
  [STR, 100, 100, 101, 101, '报告日期'], [NUM, 101, 101, 102, 102, '基本每股收益'], [NUM, 102, 102, 103, 103, '每股净资产'], [NUM, 103, 103, 104, 104, '每股经营活动产生的现金流量净额'], [NUM, 104, 104, 105, 105, '主营业务收入'], [NUM, 105, 105, 106, 106, '主营业务利润'], [NUM, 106, 106, 107, 107, '营业利润'], [NUM, 107, 107, 108, 108, '投资收益'], [NUM, 108, 108, 109, 109, '营业外收支净额'], [NUM, 109, 109, 110, 110, '利润总额'], [NUM, 110, 110, 111, 111, '净利润'], [NUM, 111, 111, NaN, NaN, '净利润'], [NUM, 112, 112, NaN, NaN, '经营活动产生的现金流量净额'], [NUM, 113, 113, NaN, NaN, '现金及现金等价物净增加额'], [NUM, 114, 114, NaN, NaN, '总资产'], [NUM, 115, 115, NaN, NaN, '流动资产'], [NUM, 116, 116, NaN, NaN, '总负债'], [NUM, 117, 117, NaN, NaN, '流动负债'], [NUM, 118, 118, NaN, NaN, '股东权益不含少数股东权益'], [NUM, 119, 119, 113, 113, '净资产收益率加权']]
};

const incomes$1 = {
  head: [TYPE, RAW, DB, LITE, RATIO, CHS],
  rows: [[STR, 100, 100, 100, 100, 'symbol'], // rawdata里没有
  [STR, 101, 101, 101, 101, '报告日期'], [NUM, 102, 102, 102, 102, '营业总收入'], [NUM, 103, 103, 103, 103, '营业收入'], [NUM, 104, 104, NaN, NaN, '利息收入'], [NUM, 105, 105, NaN, NaN, '已赚保费'], [NUM, 106, 106, NaN, NaN, '手续费及佣金收入'], [NUM, 107, 107, NaN, NaN, '房地产销售收入'], [NUM, 108, 108, NaN, NaN, '其他业务收入'], [NUM, 109, 109, 104, 104, '营业总成本'], [NUM, 110, 110, 105, 105, '营业成本'], [NUM, 111, 111, 106, 106, '利息支出'], [NUM, 112, 112, 107, 107, '手续费及佣金支出'], [NUM, 113, 113, NaN, NaN, '房地产销售成本'], [NUM, 114, 114, 108, 108, '研发费用'], [NUM, 115, 115, NaN, NaN, '退保金'], [NUM, 116, 116, NaN, NaN, '赔付支出净额'], [NUM, 117, 117, NaN, NaN, '提取保险合同准备金净额'], [NUM, 118, 118, NaN, NaN, '保单红利支出'], [NUM, 119, 119, NaN, NaN, '分保费用'], [NUM, 120, 120, NaN, NaN, '其他业务成本'], [NUM, 121, 121, NaN, NaN, '营业税金及附加'], [NUM, 122, 122, 109, 109, '销售费用'], [NUM, 123, 123, 110, 110, '管理费用'], [NUM, 124, 124, 111, 111, '财务费用'], [NUM, 125, 125, NaN, 112, '资产减值损失'], [NUM, 126, 126, NaN, NaN, '公允价值变动收益'], [NUM, 127, 127, NaN, NaN, '投资收益'], [NUM, 128, 128, NaN, NaN, '对联营企业和合营企业的投资收益'], [NUM, 129, 129, NaN, NaN, '汇兑收益'], [NUM, 130, 130, NaN, NaN, '期货损益'], [NUM, 131, 131, NaN, NaN, '托管收益'], [NUM, 132, 132, NaN, NaN, '补贴收入'], [NUM, 133, 133, NaN, NaN, '其他业务利润'], [NUM, 134, 134, 112, 112, '营业利润'], [NUM, 135, 135, NaN, NaN, '营业外收入'], [NUM, 136, 136, NaN, NaN, '营业外支出'], [NUM, 137, 137, NaN, NaN, '非流动资产处置损失'], [NUM, 138, 138, 113, 113, '利润总额'], [NUM, 139, 139, 114, 114, '所得税费用'], [NUM, 140, 140, NaN, NaN, '未确认投资损失'], [NUM, 141, 141, 115, 115, '净利润'], [NUM, 142, 142, NaN, NaN, '归属于母公司所有者的净利润'], [NUM, 143, 143, NaN, NaN, '被合并方在合并前实现净利润'], [NUM, 144, 144, NaN, NaN, '少数股东损益'], [NUM, 145, 145, NaN, NaN, '基本每股收益'], [NUM, 146, 146, NaN, NaN, '稀释每股收益']]
};

const cashflows$1 = {
  head: [TYPE, RAW, DB, LITE, RATIO, CHS],
  rows: [[STR, 100, 100, 100, 100, 'symbol'], // rawdata里没有
  [STR, 101, 101, 101, 101, '报告日期'], [NUM, 102, 102, 102, 102, '销售商品_提供劳务收到的现金'], [NUM, 103, 103, NaN, NaN, '客户存款和同业存放款项净增加额'], [NUM, 104, 104, NaN, NaN, '向中央银行借款净增加额_万元'], [NUM, 105, 105, NaN, NaN, '向其他金融机构拆入资金净增加额'], [NUM, 106, 106, NaN, NaN, '收到原保险合同保费取得的现金'], [NUM, 107, 107, NaN, NaN, '收到再保险业务现金净额'], [NUM, 108, 108, NaN, NaN, '保户储金及投资款净增加额'], [NUM, 109, 109, NaN, NaN, '处置交易性金融资产净增加额'], [NUM, 110, 110, NaN, NaN, '收取利息_手续费及佣金的现金'], [NUM, 111, 111, NaN, NaN, '拆入资金净增加额'], [NUM, 112, 112, NaN, NaN, '回购业务资金净增加额'], [NUM, 113, 113, NaN, NaN, '收到的税费返还'], [NUM, 114, 114, NaN, NaN, '收到的其他与经营活动有关的现金'], [NUM, 115, 115, 103, 103, '经营活动现金流入小计'], [NUM, 116, 116, 104, 104, '购买商品_接受劳务支付的现金'], [NUM, 117, 117, NaN, NaN, '客户贷款及垫款净增加额'], [NUM, 118, 118, NaN, NaN, '存放中央银行和同业款项净增加额'], [NUM, 119, 119, NaN, NaN, '支付原保险合同赔付款项的现金'], [NUM, 120, 120, NaN, NaN, '支付利息_手续费及佣金的现金'], [NUM, 121, 121, NaN, NaN, '支付保单红利的现金'], [NUM, 122, 122, NaN, NaN, '支付给职工以及为职工支付的现金'], [NUM, 123, 123, 105, 105, '支付的各项税费'], [NUM, 124, 124, NaN, NaN, '支付的其他与经营活动有关的现金'], [NUM, 125, 125, 106, 106, '经营活动现金流出小计'], [NUM, 126, 126, NaN, NaN, '经营活动产生的现金流量净额'], [NUM, 127, 127, NaN, NaN, '收回投资所收到的现金'], [NUM, 128, 128, 107, 107, '取得投资收益所收到的现金'], [NUM, 129, 129, NaN, NaN, '处置固定资产_无形资产和其他长期资产所收回的现金净额'], [NUM, 130, 130, NaN, NaN, '处置子公司及其他营业单位收到的现金净额'], [NUM, 131, 131, NaN, NaN, '收到的其他与投资活动有关的现金'], [NUM, 132, 132, NaN, NaN, '减少质押和定期存款所收到的现金'], [NUM, 133, 133, 108, 108, '投资活动现金流入小计'], [NUM, 134, 134, NaN, NaN, '购建固定资产_无形资产和其他长期资产所支付的现金'], [NUM, 135, 135, 109, 109, '投资所支付的现金'], [NUM, 136, 136, NaN, NaN, '质押贷款净增加额'], [NUM, 137, 137, NaN, NaN, '取得子公司及其他营业单位支付的现金净额'], [NUM, 138, 138, NaN, NaN, '支付的其他与投资活动有关的现金'], [NUM, 139, 139, NaN, NaN, '增加质押和定期存款所支付的现金'], [NUM, 140, 140, 110, 110, '投资活动现金流出小计'], [NUM, 141, 141, NaN, NaN, '投资活动产生的现金流量净额'], [NUM, 142, 142, NaN, NaN, '吸收投资收到的现金'], // 11
  [NUM, 143, 143, NaN, NaN, '其中_子公司吸收少数股东投资收到的现金'], [NUM, 144, 144, NaN, NaN, '取得借款收到的现金'], [NUM, 145, 145, NaN, NaN, '发行债券收到的现金'], [NUM, 146, 146, NaN, NaN, '收到其他与筹资活动有关的现金'], [NUM, 147, 147, 112, 112, '筹资活动现金流入小计'], [NUM, 148, 148, 113, 113, '偿还债务支付的现金'], [NUM, 149, 149, NaN, NaN, '分配股利_利润或偿付利息所支付的现金'], [NUM, 150, 150, NaN, NaN, '其中_子公司支付给少数股东的股利_利润'], [NUM, 151, 151, NaN, NaN, '支付其他与筹资活动有关的现金'], [NUM, 152, 152, 114, 114, '筹资活动现金流出小计'], [NUM, 153, 153, NaN, NaN, '筹资活动产生的现金流量净额'], [NUM, 154, 154, NaN, NaN, '汇率变动对现金及现金等价物的影响'], [NUM, 155, 155, NaN, NaN, '现金及现金等价物净增加额'], [NUM, 156, 156, NaN, NaN, '加_期初现金及现金等价物余额'], [NUM, 157, 157, NaN, NaN, '期末现金及现金等价物余额'], [NUM, 158, 158, NaN, NaN, '净利润'], [NUM, 159, 159, NaN, NaN, '少数股东损益'], [NUM, 160, 160, NaN, NaN, '未确认的投资损失'], [NUM, 161, 161, NaN, NaN, '资产减值准备'], [NUM, 162, 162, NaN, NaN, '固定资产折旧_油气资产折耗_生产性物资折旧'], [NUM, 163, 163, NaN, NaN, '无形资产摊销'], [NUM, 164, 164, NaN, NaN, '长期待摊费用摊销'], [NUM, 165, 165, NaN, NaN, '待摊费用的减少'], [NUM, 166, 166, NaN, NaN, '预提费用的增加'], [NUM, 167, 167, NaN, NaN, '处置固定资产_无形资产和其他长期资产的损失'], [NUM, 168, 168, NaN, NaN, '固定资产报废损失'], [NUM, 169, 169, NaN, NaN, '公允价值变动损失'], [NUM, 170, 170, NaN, NaN, '递延收益增加'], [NUM, 171, 171, NaN, NaN, '预计负债'], [NUM, 172, 172, NaN, NaN, '财务费用'], [NUM, 173, 173, NaN, NaN, '投资损失'], [NUM, 174, 174, NaN, NaN, '递延所得税资产减少'], [NUM, 175, 175, NaN, NaN, '递延所得税负债增加'], [NUM, 176, 176, NaN, NaN, '存货的减少'], [NUM, 177, 177, NaN, NaN, '经营性应收项目的减少'], [NUM, 178, 178, NaN, NaN, '经营性应付项目的增加'], [NUM, 179, 179, NaN, NaN, '已完工尚未结算款的减少'], [NUM, 180, 180, NaN, NaN, '已结算尚未完工款的增加'], [NUM, 181, 181, NaN, NaN, '其他'], [NUM, 182, 182, NaN, NaN, '经营活动产生现金流量净额'], [NUM, 183, 183, NaN, NaN, '债务转为资本'], [NUM, 184, 184, NaN, NaN, '一年内到期的可转换公司债券'], [NUM, 185, 185, NaN, NaN, '融资租入固定资产'], [NUM, 186, 186, NaN, NaN, '现金的期末余额'], [NUM, 187, 187, NaN, NaN, '现金的期初余额'], [NUM, 188, 188, NaN, NaN, '现金等价物的期末余额'], [NUM, 189, 189, NaN, NaN, '现金等价物的期初余额'], [NUM, 190, 190, 115, 115, '现金及现金等价物的净增加额']]
};

const balances = {
  head: ['type', 'raw', 'db', 'lite', 'ratio', 'abbr', 'eng', 'chs'],
  rows: [['string', 100, 100, 100, 100, 'symbol', 'symbol', 'symbol'], ['string', 100, 101, 101, 101, 'date', 'date', '报告日期'], ['number', 100, 102, 104, 102, 'monetCap', 'monetary capital', '货币资金'], ['number', 100, NaN, NaN, NaN, 'settlementProvisions', 'settlement provisions', '结算备付金'], ['number', 100, 104, NaN, NaN, 'lendingFunds', 'lending funds', '拆出资金'], ['number', 100, 105, NaN, 103, 'tFa', 'transactional financial assets', '交易性金融资产'], ['number', 100, 106, NaN, NaN, 'deriFa', 'derivative financial assets', '衍生金融资产'], ['number', 100, 107, NaN, NaN, 'billsRecv', 'bills receivables', '应收票据'], ['number', 100, 108, NaN, 104, 'accRecv', 'accounts receivables', '应收账款'], ['number', 100, 109, NaN, NaN, 'prepm', 'prepayments', '预付款项'], ['number', 100, 110, NaN, NaN, 'premRecv', 'premium receivables', '应收保费'], ['number', 100, NaN, NaN, NaN, 'reinsrAccRecv', 'reinsurance accounts receivables', '应收分保账款'], ['number', 100, NaN, NaN, NaN, 'reinsrContractRsvRecv', 'reinsurance contract reserve receivables', '应收分保合同准备金'], ['number', 100, 113, NaN, NaN, 'intrRecv', 'interest receivables', '应收利息'], ['number', 100, 114, NaN, NaN, 'divsRecv', 'dividends receivables', '应收股利'], ['number', 100, 115, NaN, NaN, 'oRecv', 'other receivables', '其他应收款'], ['number', 100, NaN, NaN, NaN, 'exportTxRefundRecv', 'export tax refund receivables', '应收出口退税'], ['number', 100, NaN, NaN, NaN, 'subsidiesRecv', 'subsidies receivables', '应收补贴款'], ['number', 100, 118, NaN, NaN, 'marginRecv', 'margin receivables', '应收保证金'], ['number', 100, 119, NaN, NaN, 'internalRecv', 'internal receivables', '内部应收款'], ['number', 100, 120, NaN, NaN, 'buyBackFa', 'buy back financial assets', '买入返售金融资产'], ['number', 100, 121, 105, 105, 'invt', 'inventory', '存货'], ['number', 100, 122, NaN, NaN, 'prepaidExp', 'prepaid expenses', '待摊费用'], ['number', 100, NaN, NaN, NaN, 'pftLossOfCurAstTbDsp', 'profit and loss of current assets to be disposed', '待处理流动资产损益'], ['number', 100, 124, NaN, NaN, 'ncurAstDw1y', 'non current assets due within one year', '一年内到期的非流动资产'], ['number', 100, 125, NaN, NaN, 'oCurAst', 'other current assets', '其他流动资产'], ['number', 100, 126, 103, 106, 'curAst', 'total current assets', '流动资产合计'], ['number', 100, 127, NaN, NaN, 'loAdvToCus', 'loans and advances to customers', '发放贷款及垫款'], ['number', 100, 128, NaN, NaN, 'afsFa', 'available-for-sale financial assets', '可供出售金融资产'], ['number', 100, 129, NaN, NaN, 'htmIv', 'held-to-maturity investment', '持有至到期投资'], ['number', 100, 130, NaN, NaN, 'ltRecv', 'long term receivables', '长期应收款'], ['number', 100, 131, NaN, NaN, 'ltEqtIv', 'long term equity investment', '长期股权投资'], ['number', 100, 132, NaN, NaN, 'oLtIv', 'other long-term investments', '其他长期投资'], ['number', 100, 133, NaN, NaN, 'ivRe', 'investment real estate', '投资性房地产'], ['number', 100, 134, NaN, NaN, 'oriVOfFxAst', 'original value of fixed assets', '固定资产原值'], ['number', 100, 135, NaN, NaN, 'accumDepr', 'accumulated depreciation', '累计折旧'], ['number', 100, 136, NaN, NaN, 'netVOfFxAst', 'net value of fixed assets', '固定资产净值'], ['number', 100, NaN, NaN, NaN, 'fxAstDeprRsvs', 'fixed assets depreciation reserves', '固定资产减值准备'], ['number', 100, 138, 107, 107, 'fxAst', 'fixed assets', '固定资产'], ['number', 100, 139, NaN, NaN, 'cip', 'construction in progress', '在建工程'], ['number', 100, 140, NaN, NaN, 'engMat', 'engineering materials', '工程物资'], ['number', 100, 141, NaN, NaN, 'dspOfFxAst', 'disposal of fixed assets', '固定资产清理'], ['number', 100, 142, NaN, NaN, 'prodBioAst', 'productive biological assets', '生产性生物资产'], ['number', 100, 143, NaN, NaN, 'npftBioAst', 'non-profit biological assets', '公益性生物资产'], ['number', 100, 144, NaN, NaN, 'oilGasAst', 'oil and gas assets', '油气资产'], ['number', 100, 145, 108, 108, 'intgAst', 'intangible assets', '无形资产'], ['number', 100, 146, NaN, 109, 'devExpd', 'development expenditure', '开发支出'], ['number', 100, 147, 109, 110, 'gdw', 'goodwill', '商誉'], ['number', 100, 148, NaN, NaN, 'ltUnamoExp', 'long term unamortized expenses', '长期待摊费用'], ['number', 100, NaN, NaN, NaN, 'shareSplitTRights', 'share split trading rights', '股权分置流通权'], ['number', 100, 150, NaN, NaN, 'defTxAst', 'deferred tax assets', '递延所得税资产'], ['number', 100, 151, NaN, NaN, 'oNcurAst', 'other non current assets', '其他非流动资产'], ['number', 100, 152, 106, 111, 'ncurAst', 'total non current assets', '非流动资产合计'], ['number', 100, 153, 102, 112, 'ast', 'total assets', '资产总计'], ['number', 100, 154, NaN, NaN, 'stLo', 'short term loans', '短期借款'], ['number', 100, 155, NaN, NaN, 'borwFrCbk', 'borrowing from the central bank', '向中央银行借款'], ['number', 100, NaN, NaN, NaN, 'dpoIntrTakingInterBkDpoIntr', 'deposit interest taking and inter-bank deposit interest', '吸收存款及同业存放'], ['number', 100, 157, NaN, NaN, 'borwFunds', 'borrowed funds', '拆入资金'], ['number', 100, 158, NaN, NaN, 'tFinLiab', 'transactional financial liabilities', '交易性金融负债'], ['number', 100, 159, NaN, NaN, 'deriFinLiab', 'derivative financial liabilities', '衍生金融负债'], ['number', 100, 160, NaN, NaN, 'billsPyb', 'bills payable', '应付票据'], ['number', 100, 161, NaN, NaN, 'accPyb', 'accounts payable', '应付账款'], ['number', 100, 162, NaN, NaN, 'advReceipts', 'advance receipts', '预收账款'], ['number', 100, NaN, NaN, NaN, 'faSoldForRepurc', 'financial assets sold for repurchase', '卖出回购金融资产款'], ['number', 100, 164, NaN, NaN, 'feCmsPyb', 'fees and commissions payable', '应付手续费及佣金'], ['number', 100, 165, NaN, NaN, 'payrollPyb', 'payroll payable', '应付职工薪酬'], ['number', 100, 166, NaN, NaN, 'txPyb', 'taxes payable', '应交税费'], ['number', 100, 167, NaN, NaN, 'intrPyb', 'interest payable', '应付利息'], ['number', 100, 168, NaN, NaN, 'divsPyb', 'dividends payable', '应付股利'], ['number', 100, 169, NaN, NaN, 'oPyb', 'other payables', '其他应交款'], ['number', 100, 170, NaN, NaN, 'marginPyb', 'margin payable', '应付保证金'], ['number', 100, 171, NaN, NaN, 'internalPyb', 'internal payables', '内部应付款'], ['number', 100, 172, NaN, NaN, 'oPyb', 'other payables', '其他应付款'], ['number', 100, 173, NaN, NaN, 'accruedExp', 'accrued expenses', '预提费用'], ['number', 100, 174, NaN, NaN, 'estCurLiab', 'estimated current liabilities', '预计流动负债'], ['number', 100, NaN, NaN, NaN, 'reinsrPremPyb', 'reinsurance premiums payable', '应付分保账款'], ['number', 100, NaN, NaN, NaN, 'insrContractRsvs', 'insurance contract reserves', '保险合同准备金'], ['number', 100, NaN, NaN, NaN, 'cuBrokerageDpo', 'customer brokerage deposits', '代理买卖证券款'], ['number', 100, NaN, NaN, NaN, 'securitiesUnderwritingBrokerageDpo', 'securities underwriting brokerage deposits', '代理承销证券款'], ['number', 100, NaN, NaN, NaN, 'internationalBillSettlement', 'international bill settlement', '国际票证结算'], ['number', 100, NaN, NaN, NaN, 'domesticBillSettlement', 'domestic bill settlement', '国内票证结算'], ['number', 100, 181, NaN, NaN, 'defInc', 'deferred income', '递延收益'], ['number', 100, 182, NaN, NaN, 'stBondsPyb', 'short term bonds payable', '应付短期债券'], ['number', 100, 183, NaN, NaN, 'ncurLiabDw1y', 'non current liabilities due within one year', '一年内到期的非流动负债'], ['number', 100, 184, NaN, NaN, 'oCurLiab', 'other current liabilities', '其他流动负债'], ['number', 100, 185, 112, 113, 'curLiab', 'total current liabilities', '流动负债合计'], ['number', 100, 186, NaN, NaN, 'ltBorw', 'long term borrowings', '长期借款'], ['number', 100, 187, NaN, NaN, 'bondsPyb', 'bonds payable', '应付债券'], ['number', 100, 188, NaN, NaN, 'ltPyb', 'long term payables', '长期应付款'], ['number', 100, 189, NaN, NaN, 'specialPyb', 'special payables', '专项应付款'], ['number', 100, 190, NaN, NaN, 'estNcurLiab', 'estimated non current liabilities', '预计非流动负债'], ['number', 100, 191, NaN, NaN, 'ltDefInc', 'long term deferred income', '长期递延收益'], ['number', 100, 192, NaN, NaN, 'defIncTxLiab', 'deferred income tax liabilities', '递延所得税负债'], ['number', 100, 193, NaN, NaN, 'oNcurLiab', 'other non current liabilities', '其他非流动负债'], ['number', 100, 194, 113, 114, 'ncurLiab', 'total non current liabilities', '非流动负债合计'], ['number', 100, 195, 111, 115, 'liab', 'total liabilities', '负债合计'], ['number', 100, 196, NaN, NaN, 'paidInCap', 'paid in capital', '实收资本'], ['number', 100, 197, NaN, NaN, 'capRsv', 'capital reserve', '资本公积'], ['number', 100, NaN, NaN, NaN, 'lessTreasuryShares', 'less treasury shares', '减_库存股'], ['number', 100, 199, NaN, NaN, 'specialRsv', 'special reserve', '专项储备'], ['number', 100, 200, NaN, NaN, 'surplusRsv', 'surplus reserve', '盈余公积'], ['number', 100, NaN, NaN, NaN, 'generalRiskProvisions', 'general risk provisions', '一般风险准备'], ['number', 100, NaN, NaN, NaN, 'undeterminedIvLoss', 'undetermined investment loss', '未确定的投资损失'], ['number', 100, NaN, NaN, NaN, 'undistributedPft', 'undistributed profit', '未分配利润'], ['number', 100, NaN, NaN, NaN, 'cashDivsTbDistributed', 'cash dividends to be distributed', '拟分配现金股利'], ['number', 100, NaN, NaN, NaN, 'translationRsv', 'translation reserve', '外币报表折算差额'], ['number', 100, NaN, NaN, NaN, 'eqtAttrParentCompany', 'total shareholders\' equity attributable to the parent company', '归属于母公司股东权益合计'], ['number', 100, 207, NaN, NaN, 'minEqt', 'minority equity', '少数股东权益'], ['number', 100, 208, 114, 116, 'eqt', 'total shareholders\' equity', '所有者权益合计'], ['number', 100, 209, 110, 117, 'liabEqt', 'total liabilities and shareholders\' equity', '负债和所有者权益总计']]
};

const basics = {
  head: ['type', 'raw', 'db', 'lite', 'ratio', 'abbr', 'eng', 'chs'],
  rows: [['string', 100, 100, 100, 100, 'symbol', 'symbol', 'symbol'], ['string', 100, 100, 101, 101, 'date', 'date', '报告日期'], ['number', 101, 101, 102, 102, 'eps', 'basic eps', '基本每股收益'], ['number', 102, 102, 103, 103, 'bvps', 'net assets per share', '每股净资产'], ['number', 103, 103, 104, 104, 'opCfps', 'operating cash flow per share', '每股经营活动产生的现金流量净额'], ['number', 104, 104, 105, 105, 'opInc', 'operating income', '主营业务收入'], ['number', 105, 105, 106, 106, 'opPft', 'operating profit', '主营业务利润'], ['number', 106, 106, 107, 107, 'opPft', 'operating profit', '营业利润'], ['number', 107, 107, 108, 108, 'ivInc', 'investment income', '投资收益'], ['number', 108, 108, 109, 109, 'netNopInc', 'net non-operating income', '营业外收支净额'], ['number', 109, 109, 110, 110, 'pft', 'total profit', '利润总额'], ['number', 110, 110, 111, 111, 'netPft', 'net profit', '净利润'], ['number', 111, 111, NaN, NaN, 'netPft', 'net profit', '净利润'], ['number', 112, 112, NaN, NaN, 'netCfFrOp', 'net cash flow from operating activities', '经营活动产生的现金流量净额'], ['number', 113, 113, NaN, NaN, 'netIcCce', 'net increase in cash and cash equivalents', '现金及现金等价物净增加额'], ['number', 114, 114, NaN, NaN, 'ast', 'total assets', '总资产'], ['number', 115, 115, NaN, NaN, 'curAst', 'current assets', '流动资产'], ['number', 116, 116, NaN, NaN, 'liab', 'total liabilities', '总负债'], ['number', 117, 117, NaN, NaN, 'curLiab', 'current liabilities', '流动负债'], ['number', 118, 118, NaN, NaN, 'eqtWoMin', 'shareholders\' equity wo minority', '股东权益不含少数股东权益'], ['number', 119, 119, 113, 113, 'wroe', 'weighted return on equity', '净资产收益率加权']]
};

const cashflows = {
  head: ['type', 'raw', 'db', 'lite', 'ratio', 'abbr', 'eng', 'chs'],
  rows: [['string', 100, 100, 100, 100, 'symbol', 'symbol', 'symbol'], ['string', 101, 101, 101, 101, 'date', 'date', '报告日期'], ['number', 102, 102, 102, 102, 'cFrGdSv', 'cash from goods sales or services provision', '销售商品_提供劳务收到的现金'], ['number', 103, NaN, NaN, NaN, 'netIcCuDpoInterbkDpo', 'net increase in customer deposits and interbank deposits', '客户存款和同业存放款项净增加额'], ['number', 104, NaN, NaN, NaN, 'netIcBorwFrCbkRmb10k', 'net increase in borrowings from the central bank rmb10k', '向中央银行借款净增加额_万元'], ['number', 105, NaN, NaN, NaN, 'netIcBorwFrOFinInstitutions', 'net increase in borrowings from other financial institutions', '向其他金融机构拆入资金净增加额'], ['number', 106, NaN, NaN, NaN, 'cFrPremOfOriInsrContract', 'cash received from premium of original insurance contract', '收到原保险合同保费取得的现金'], ['number', 107, 107, NaN, NaN, 'netCFrReinsrB', 'net cash received from reinsurance business', '收到再保险业务现金净额'], ['number', 108, NaN, NaN, NaN, 'netIcDpoIvOfInsured', 'net increase in deposits and investments of the insured', '保户储金及投资款净增加额'], ['number', 109, 109, NaN, NaN, 'netIcDspOfTFa', 'net increase in disposal of trading financial assets', '处置交易性金融资产净增加额'], ['number', 110, NaN, NaN, NaN, 'cChargedForIntrCms', 'cash charged for interest and Commission', '收取利息_手续费及佣金的现金'], ['number', 111, 111, NaN, NaN, 'netIcBorwFunds', 'net increase in borrowed funds', '拆入资金净增加额'], ['number', 112, NaN, NaN, NaN, 'netIcRepurcBFunds', 'net increase in repurchase business funds', '回购业务资金净增加额'], ['number', 113, 113, NaN, NaN, 'refundOfTxFeRecv', 'refund of tax and fees received', '收到的税费返还'], ['number', 114, NaN, NaN, NaN, 'oCRecvRelatingToOp', 'other cash received relating to operating activities', '收到的其他与经营活动有关的现金'], ['number', 115, 115, 103, 103, 'cinOp', 'subtotal of cash inflow from operating activities', '经营活动现金流入小计'], ['number', 116, 116, 104, 104, 'cPdGdSv', 'cash paid for goods purchased and services received', '购买商品_接受劳务支付的现金'], ['number', 117, 117, NaN, NaN, 'netIcCuLoAdv', 'net increase in customer loans and advances', '客户贷款及垫款净增加额'], ['number', 118, NaN, NaN, NaN, 'netIcDpoWithCbkOBks', 'net increase in deposits with the central bank and other banks', '存放中央银行和同业款项净增加额'], ['number', 119, NaN, NaN, NaN, 'cPdClaimsUnderOriInsrContract', 'cash paid for claims under the original insurance contract', '支付原保险合同赔付款项的现金'], ['number', 120, 120, NaN, NaN, 'cPdIntrCms', 'cash paid for interest and commission', '支付利息_手续费及佣金的现金'], ['number', 121, 121, NaN, NaN, 'cPdPolicyDiv', 'cash paid for policy dividend', '支付保单红利的现金'], ['number', 122, 122, NaN, NaN, 'cPdForEmployees', 'cash paid to and for employees', '支付给职工以及为职工支付的现金'], ['number', 123, 123, 105, 105, 'txPd', 'taxes paid', '支付的各项税费'], ['number', 124, 124, NaN, NaN, 'oCPdRelatingToOp', 'other cash paid relating to operating activities', '支付的其他与经营活动有关的现金'], ['number', 125, 125, 106, 106, 'coutOp', 'subtotal of cash outflow from operating activities', '经营活动现金流出小计'], ['number', 126, 126, NaN, NaN, 'netCfFrOp', 'net cash flow from operating activities', '经营活动产生的现金流量净额'], ['number', 127, 127, NaN, NaN, 'cFrIvRecovery', 'cash received from investment recovery', '收回投资所收到的现金'], ['number', 128, 128, 107, 107, 'cFrIvInc', 'cash received from investment income', '取得投资收益所收到的现金'], ['number', 129, NaN, NaN, NaN, 'netCFrDspOfFxAstIntgAstOLtAst', 'net cash received from disposal of fixed assets, intangible assets and other long-term assets', '处置固定资产_无形资产和其他长期资产所收回的现金净额'], ['number', 130, NaN, NaN, NaN, 'netCFrDspOfSubsidiariesOBUnits', 'net cash received from disposal of subsidiaries and other business units', '处置子公司及其他营业单位收到的现金净额'], ['number', 131, NaN, NaN, NaN, 'oCRecvRelatingToIv', 'other cash received relating to investment activities', '收到的其他与投资活动有关的现金'], ['number', 132, NaN, NaN, NaN, 'reduceCFrPledgesTimeDpo', 'reduce cash received from pledges and time deposits', '减少质押和定期存款所收到的现金'], ['number', 133, 133, 108, 108, 'cinIv', 'subtotal of cash inflow from investment activities', '投资活动现金流入小计'], ['number', 134, NaN, NaN, NaN, 'cPdAcqConstructionOfFxAstIntgAstOLtAst', 'cash paid for the acquisition and construction of fixed assets, intangible assets and other long-term assets', '购建固定资产_无形资产和其他长期资产所支付的现金'], ['number', 135, 135, 109, 109, 'cPdIv', 'cash paid for investment', '投资所支付的现金'], ['number', 136, 136, NaN, NaN, 'netIcPledgedLo', 'net increase in pledged loans', '质押贷款净增加额'], ['number', 137, NaN, NaN, NaN, 'netCPdAcquireSubsidiariesOBUnits', 'net cash paid to acquire subsidiaries and other business units', '取得子公司及其他营业单位支付的现金净额'], ['number', 138, 138, NaN, NaN, 'oCPdRelatedToIv', 'other cash paid related to investment activities', '支付的其他与投资活动有关的现金'], ['number', 139, NaN, NaN, NaN, 'increaseCPdPledgeTmDpo', 'increase cash paid for pledge and term deposits', '增加质押和定期存款所支付的现金'], ['number', 140, 140, 110, 110, 'coutIv', 'subtotal of cash outflow from investment activities', '投资活动现金流出小计'], ['number', 141, 141, NaN, NaN, 'netCfFrIv', 'net cash flow from investing activities', '投资活动产生的现金流量净额'], ['number', 142, 142, NaN, NaN, 'cFrIvAbsorption', 'cash received from investment absorption', '吸收投资收到的现金'], ['number', 143, NaN, NaN, NaN, 'cFrMinIvBySubsidiaries', 'cash received from minority shareholders\' investment by subsidiaries', '其中_子公司吸收少数股东投资收到的现金'], ['number', 144, 144, NaN, NaN, 'cFrBorw', 'cash received from borrowing', '取得借款收到的现金'], ['number', 145, 145, NaN, NaN, 'cFrBondIssue', 'cash received from bond issue', '发行债券收到的现金'], ['number', 146, NaN, NaN, NaN, 'oCRecvRelatingToFin', 'other cash received relating to financing activities', '收到其他与筹资活动有关的现金'], ['number', 147, 147, 112, 112, 'cinFin', 'subtotal of cash inflow from financing activities', '筹资活动现金流入小计'], ['number', 148, 148, 113, 113, 'cPdDebtRepm', 'cash paid for debt repayment', '偿还债务支付的现金'], ['number', 149, NaN, NaN, NaN, 'cPdDivDistributionIntrPm', 'cash paid for dividend distribution or interest payment', '分配股利_利润或偿付利息所支付的现金'], ['number', 150, NaN, NaN, NaN, 'ofWhichDivsPftsPdBySubsidiariesToMin', 'of which, dividends and profits paid by subsidiaries to minority shareholders', '其中_子公司支付给少数股东的股利_利润'], ['number', 151, 151, NaN, NaN, 'oCPmRelatedToFin', 'other cash payments related to financing activities', '支付其他与筹资活动有关的现金'], ['number', 152, 152, 114, 114, 'coutFin', 'subtotal of cash outflow from financing activities', '筹资活动现金流出小计'], ['number', 153, 153, NaN, NaN, 'netCfFrFin', 'net cash flow from financing activities', '筹资活动产生的现金流量净额'], ['number', 154, 154, NaN, NaN, 'exRateChOnCce', 'effect of exchange rate changes on cash and cash equivalents', '汇率变动对现金及现金等价物的影响'], ['number', 155, 155, NaN, NaN, 'netIcCce', 'net increase in cash and cash equivalents', '现金及现金等价物净增加额'], ['number', 156, NaN, NaN, NaN, 'plusBalOfCceAtBeginningOfPeriod', 'plus balance of cash and cash equivalents at the beginning of the period', '加_期初现金及现金等价物余额'], ['number', 157, NaN, NaN, NaN, 'balOfCceAtEndOfPeriod', 'balance of cash and cash equivalents at the end of the period', '期末现金及现金等价物余额'], ['number', 158, 158, NaN, NaN, 'netInc', 'net income', '净利润'], ['number', 159, 159, NaN, NaN, 'minIntrInc', 'minority interest income', '少数股东损益'], ['number', 160, 160, NaN, NaN, 'unrecgIvLoss', 'unrecognized investment loss', '未确认的投资损失'], ['number', 161, 161, NaN, NaN, 'astDeprRsvs', 'assets depreciation reserves', '资产减值准备'], ['number', 162, NaN, NaN, NaN, 'deprOfFxAstOilGasAstProdMat', 'depreciation of fixed assets, oil and gas assets and productive materials', '固定资产折旧_油气资产折耗_生产性物资折旧'], ['number', 163, 163, NaN, NaN, 'amoOfIntgAst', 'amortization of intangible assets', '无形资产摊销'], ['number', 164, 164, NaN, NaN, 'amoOfLtUnamoExp', 'amortization of long term unamortized expenses', '长期待摊费用摊销'], ['number', 165, 165, NaN, NaN, 'dcUnamoExp', 'decrease of unamortized expenses', '待摊费用的减少'], ['number', 166, 166, NaN, NaN, 'icAccruedExp', 'increase of accrued expenses', '预提费用的增加'], ['number', 167, NaN, NaN, NaN, 'lossOnDspOfFxAstIntgAstOLtAst', 'loss on disposal of fixed assets and intangible assets and other long-term assets', '处置固定资产_无形资产和其他长期资产的损失'], ['number', 168, NaN, NaN, NaN, 'lossOnRetirementOfFxAst', 'loss on retirement of fixed assets', '固定资产报废损失'], ['number', 169, 169, NaN, NaN, 'lossOnChInFairV', 'loss on changes in fair value', '公允价值变动损失'], ['number', 170, 170, NaN, NaN, 'icDefInc', 'increase in deferred income', '递延收益增加'], ['number', 171, 171, NaN, NaN, 'estLiab', 'estimated liabilities', '预计负债'], ['number', 172, 172, NaN, NaN, 'finExp', 'financial expenses', '财务费用'], ['number', 173, 173, NaN, NaN, 'ivLoss', 'investment loss', '投资损失'], ['number', 174, 174, NaN, NaN, 'dcDefTxAst', 'decrease in deferred tax assets', '递延所得税资产减少'], ['number', 175, 175, NaN, NaN, 'icDefIncTxLiab', 'increase in deferred income tax liabilities', '递延所得税负债增加'], ['number', 176, 176, NaN, NaN, 'dcInvt', 'decrease in inventory', '存货的减少'], ['number', 177, 177, NaN, NaN, 'dcOpRecv', 'decrease in operating receivables', '经营性应收项目的减少'], ['number', 178, 178, NaN, NaN, 'icOpPyb', 'increase in operating payables', '经营性应付项目的增加'], ['number', 179, NaN, NaN, NaN, 'dcCompletedUnsettledPm', 'decrease of completed but unsettled payment', '已完工尚未结算款的减少'], ['number', 180, NaN, NaN, NaN, 'icSettledNotCompletedPm', 'increase of settled but not completed payment', '已结算尚未完工款的增加'], ['number', 181, 181, NaN, NaN, 'o', 'other', '其他'], ['number', 182, 182, NaN, NaN, 'netCfFrOp', 'net cash flow from operating activities', '经营活动产生现金流量净额'], ['number', 183, 183, NaN, NaN, 'debtToCap', 'debt to capital', '债务转为资本'], ['number', 184, NaN, NaN, NaN, 'convertibleBondsDw1y', 'convertible bonds due within one year', '一年内到期的可转换公司债券'], ['number', 185, NaN, NaN, NaN, 'fxAstUnderFinLease', 'fixed assets under financing lease', '融资租入固定资产'], ['number', 186, 186, NaN, NaN, 'cBalOfC', 'closing balance of cash', '现金的期末余额'], ['number', 187, 187, NaN, NaN, 'oBalOfC', 'opening balance of cash', '现金的期初余额'], ['number', 188, 188, NaN, NaN, 'cBalOfCEqv', 'closing balance of cash equivalents', '现金等价物的期末余额'], ['number', 189, 189, NaN, NaN, 'oBalOfCEqv', 'opening balance of cash equivalents', '现金等价物的期初余额'], ['number', 190, 190, 115, 115, 'netIcCce', 'net increase in cash and cash equivalents', '现金及现金等价物的净增加额']]
};

const incomes = {
  head: ['type', 'raw', 'db', 'lite', 'ratio', 'abbr', 'eng', 'chs'],
  rows: [['string', 100, 100, 100, 100, 'symbol', 'symbol', 'symbol'], ['string', 101, 101, 101, 101, 'date', 'date', '报告日期'], ['number', 102, 102, 102, 102, 'rev', 'revenue', '营业总收入'], ['number', 103, 103, 103, 103, 'opInc', 'operating income', '营业收入'], ['number', 104, 104, NaN, NaN, 'intrInc', 'interest income', '利息收入'], ['number', 105, 105, NaN, NaN, 'earnedPrem', 'earned premium', '已赚保费'], ['number', 106, 106, NaN, NaN, 'cmsInc', 'commission income', '手续费及佣金收入'], ['number', 107, 107, NaN, NaN, 'reSaInc', 'real estate sales income', '房地产销售收入'], ['number', 108, 108, NaN, NaN, 'oOpInc', 'other operating income', '其他业务收入'], ['number', 109, 109, 104, 104, 'revCosts', 'revenue costs', '营业总成本'], ['number', 110, 110, 105, 105, 'opCosts', 'operating costs', '营业成本'], ['number', 111, 111, 106, 106, 'intrExp', 'interest expenses', '利息支出'], ['number', 112, 112, 107, 107, 'svCmsExp', 'service charge and commission expenses', '手续费及佣金支出'], ['number', 113, 113, NaN, NaN, 'reSaCosts', 'real estate sales costs', '房地产销售成本'], ['number', 114, 114, 108, 108, 'rdExp', 'r&d expenses', '研发费用'], ['number', 115, 115, NaN, NaN, 'surrender', 'surrender', '退保金'], ['number', 116, NaN, NaN, NaN, 'netCompenExp', 'net compensation expenses', '赔付支出净额'], ['number', 117, NaN, NaN, NaN, 'netProvisionForInsrContracts', 'net provision for insurance contracts', '提取保险合同准备金净额'], ['number', 118, NaN, NaN, NaN, 'policyDivExp', 'policy dividend expenses', '保单红利支出'], ['number', 119, 119, NaN, NaN, 'reinsrExp', 'reinsurance expenses', '分保费用'], ['number', 120, 120, NaN, NaN, 'oOpCosts', 'other operating costs', '其他业务成本'], ['number', 121, 121, NaN, NaN, 'txSurc', 'tax and surcharges', '营业税金及附加'], ['number', 122, 122, 109, 109, 'saExp', 'sales expenses', '销售费用'], ['number', 123, 123, 110, 110, 'mangExp', 'management expenses', '管理费用'], ['number', 124, 124, 111, 111, 'finExp', 'financial expenses', '财务费用'], ['number', 125, 125, NaN, 112, 'astDeval', 'assets devaluation', '资产减值损失'], ['number', 126, NaN, NaN, NaN, 'incFrFairVCh', 'income from fair value changes', '公允价值变动收益'], ['number', 127, 127, NaN, NaN, 'ivInc', 'investment income', '投资收益'], ['number', 128, NaN, NaN, NaN, 'ivIncFrAssoJv', 'investment income from associates and joint ventures', '对联营企业和合营企业的投资收益'], ['number', 129, 129, NaN, NaN, 'exGain', 'exchange gain', '汇兑收益'], ['number', 130, NaN, NaN, NaN, 'futuresPftLoss', 'futures profit and loss', '期货损益'], ['number', 131, NaN, NaN, NaN, 'custodyProceeds', 'custody proceeds', '托管收益'], ['number', 132, 132, NaN, NaN, 'subsidyInc', 'subsidy income', '补贴收入'], ['number', 133, 133, NaN, NaN, 'oOpPft', 'other operating profit', '其他业务利润'], ['number', 134, 134, 112, 112, 'opPft', 'operating profit', '营业利润'], ['number', 135, 135, NaN, NaN, 'nopInc', 'non operating income', '营业外收入'], ['number', 136, 136, NaN, NaN, 'nopExp', 'non operating expenses', '营业外支出'], ['number', 137, NaN, NaN, NaN, 'lossOnDspOfNcurAst', 'loss on disposal of non current assets', '非流动资产处置损失'], ['number', 138, 138, 113, 113, 'pft', 'total profit', '利润总额'], ['number', 139, 139, 114, 114, 'incTxExp', 'income tax expenses', '所得税费用'], ['number', 140, NaN, NaN, NaN, 'unrecgIvLoss', 'unrecognized investment loss', '未确认投资损失'], ['number', 141, 141, 115, 115, 'ni', 'net income', '净利润'], ['number', 142, NaN, NaN, NaN, 'niAttrParentCompanyOwner', 'net income attributable to parent company owner', '归属于母公司所有者的净利润'], ['number', 143, NaN, NaN, NaN, 'niOfMergedPartyBeforeMerger', 'net income of the merged party before the merger ', '被合并方在合并前实现净利润'], ['number', 144, 144, NaN, NaN, 'minIntrInc', 'minority interest income', '少数股东损益'], ['number', 145, 145, NaN, NaN, 'eps', 'earnings per share', '基本每股收益'], ['number', 146, 146, NaN, NaN, 'epsDil', 'earnings per share diluted', '稀释每股收益']]
};

const TableCollection = {
  get balances() {
    return Table.from(balances);
  },

  get incomes() {
    return Table.from(incomes);
  },

  get cashflows() {
    return Table.from(cashflows);
  },

  get basics() {
    return Table.from(basics);
  }

};

export { TableCollection, balances$1 as balances, basics$1 as basics, cashflows$1 as cashflows, incomes$1 as incomes };
