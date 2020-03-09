'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const balances = ['报告日期', '货币资金', '结算备付金', '拆出资金', '交易性金融资产', '衍生金融资产', '应收票据', '应收账款', '预付款项', '应收保费', '应收分保账款', '应收分保合同准备金', '应收利息', '应收股利', '其他应收款', '应收出口退税', '应收补贴款', '应收保证金', '内部应收款', '买入返售金融资产', '存货', '待摊费用', '待处理流动资产损益', '一年内到期的非流动资产', '其他流动资产', '流动资产合计', '发放贷款及垫款', '可供出售金融资产', '持有至到期投资', '长期应收款', '长期股权投资', '其他长期投资', '投资性房地产', '固定资产原值', '累计折旧', '固定资产净值', '固定资产减值准备', '固定资产', '在建工程', '工程物资', '固定资产清理', '生产性生物资产', '公益性生物资产', '油气资产', '无形资产', '开发支出', '商誉', '长期待摊费用', '股权分置流通权', '递延所得税资产', '其他非流动资产', '非流动资产合计', '资产总计', '短期借款', '向中央银行借款', '吸收存款及同业存放', '拆入资金', '交易性金融负债', '衍生金融负债', '应付票据', '应付账款', '预收账款', '卖出回购金融资产款', '应付手续费及佣金', '应付职工薪酬', '应交税费', '应付利息', '应付股利', '其他应交款', '应付保证金', '内部应付款', '其他应付款', '预提费用', '预计流动负债', '应付分保账款', '保险合同准备金', '代理买卖证券款', '代理承销证券款', '国际票证结算', '国内票证结算', '递延收益', '应付短期债券', '一年内到期的非流动负债', '其他流动负债', '流动负债合计', '长期借款', '应付债券', '长期应付款', '专项应付款', '预计非流动负债', '长期递延收益', '递延所得税负债', '其他非流动负债', '非流动负债合计', '负债合计', '实收资本', '资本公积', '减_库存股', '专项储备', '盈余公积', '一般风险准备', '未确定的投资损失', '未分配利润', '拟分配现金股利', '外币报表折算差额', '归属于母公司股东权益合计', '少数股东权益', '所有者权益合计', '负债和所有者权益总计'];

const incomes = ['报告日期', '营业总收入', '营业收入', '利息收入', '已赚保费', '手续费及佣金收入', '房地产销售收入', '其他业务收入', '营业总成本', '营业成本', '利息支出', '手续费及佣金支出', '房地产销售成本', '研发费用', '退保金', '赔付支出净额', '提取保险合同准备金净额', '保单红利支出', '分保费用', '其他业务成本', '营业税金及附加', '销售费用', '管理费用', '财务费用', '资产减值损失', '公允价值变动收益', '投资收益', '对联营企业和合营企业的投资收益', '汇兑收益', '期货损益', '托管收益', '补贴收入', '其他业务利润', '营业利润', '营业外收入', '营业外支出', '非流动资产处置损失', '利润总额', '所得税费用', '未确认投资损失', '净利润', '归属于母公司所有者的净利润', '被合并方在合并前实现净利润', '少数股东损益', '基本每股收益', '稀释每股收益'];

const cashflows = ['报告日期', '销售商品_提供劳务收到的现金', '客户存款和同业存放款项净增加额', '向中央银行借款净增加额_万元', '向其他金融机构拆入资金净增加额', '收到原保险合同保费取得的现金', '收到再保险业务现金净额', '保户储金及投资款净增加额', '处置交易性金融资产净增加额', '收取利息_手续费及佣金的现金', '拆入资金净增加额', '回购业务资金净增加额', '收到的税费返还', '收到的其他与经营活动有关的现金', '经营活动现金流入小计', '购买商品_接受劳务支付的现金', '客户贷款及垫款净增加额', '存放中央银行和同业款项净增加额', '支付原保险合同赔付款项的现金', '支付利息_手续费及佣金的现金', '支付保单红利的现金', '支付给职工以及为职工支付的现金', '支付的各项税费', '支付的其他与经营活动有关的现金', '经营活动现金流出小计', '经营活动产生的现金流量净额', '收回投资所收到的现金', '取得投资收益所收到的现金', '处置固定资产_无形资产和其他长期资产所收回的现金净额', '处置子公司及其他营业单位收到的现金净额', '收到的其他与投资活动有关的现金', '减少质押和定期存款所收到的现金', '投资活动现金流入小计', '购建固定资产_无形资产和其他长期资产所支付的现金', '投资所支付的现金', '质押贷款净增加额', '取得子公司及其他营业单位支付的现金净额', '支付的其他与投资活动有关的现金', '增加质押和定期存款所支付的现金', '投资活动现金流出小计', '投资活动产生的现金流量净额', '吸收投资收到的现金', '其中_子公司吸收少数股东投资收到的现金', '取得借款收到的现金', '发行债券收到的现金', '收到其他与筹资活动有关的现金', '筹资活动现金流入小计', '偿还债务支付的现金', '分配股利_利润或偿付利息所支付的现金', '其中_子公司支付给少数股东的股利_利润', '支付其他与筹资活动有关的现金', '筹资活动现金流出小计', '筹资活动产生的现金流量净额', '汇率变动对现金及现金等价物的影响', '现金及现金等价物净增加额', '加_期初现金及现金等价物余额', '期末现金及现金等价物余额', '净利润', '少数股东损益', '未确认的投资损失', '资产减值准备', '固定资产折旧_油气资产折耗_生产性物资折旧', '无形资产摊销', '长期待摊费用摊销', '待摊费用的减少', '预提费用的增加', '处置固定资产_无形资产和其他长期资产的损失', '固定资产报废损失', '公允价值变动损失', '递延收益增加', '预计负债', '财务费用', '投资损失', '递延所得税资产减少', '递延所得税负债增加', '存货的减少', '经营性应收项目的减少', '经营性应付项目的增加', '已完工尚未结算款的减少', '已结算尚未完工款的增加', '其他', '经营活动产生现金流量净额', '债务转为资本', '一年内到期的可转换公司债券', '融资租入固定资产', '现金的期末余额', '现金的期初余额', '现金等价物的期末余额', '现金等价物的期初余额', '现金及现金等价物的净增加额'];

const basics = ['报告日期', '基本每股收益', '每股净资产', '每股经营活动产生的现金流量净额', '主营业务收入', '主营业务利润', '营业利润', '投资收益', '营业外收支净额', '利润总额', '净利润', '净利润', '经营活动产生的现金流量净额', '现金及现金等价物净增加额', '总资产', '流动资产', '总负债', '流动负债', '股东权益不含少数股东权益', '净资产收益率加权'];

const Raw = {
  balances,
  incomes,
  cashflows,
  basics
};

exports.Raw = Raw;
exports.balances = balances;
exports.basics = basics;
exports.cashflows = cashflows;
exports.incomes = incomes;
