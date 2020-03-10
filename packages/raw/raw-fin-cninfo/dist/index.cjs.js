'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var zh = [
	"证券简称",
	"证券代码",
	"机构名称",
	"公告日期",
	"截止日期",
	"报告年度",
	"合并类型编码",
	"合并类型",
	"报表来源编码",
	"报表来源",
	"货币资金",
	"结算备付金",
	"拆出资金",
	"以公允价值计量且其变动计入当期损益的金融资产(20190322弃用)",
	"衍生金融资产",
	"应收票据",
	"应收账款",
	"预付款项",
	"应收保费",
	"应收分保账款",
	"应收分保合同准备金",
	"其中：应收利息",
	"其中：应收股利",
	"其他应收款",
	"应收关联公司款",
	"买入返售金融资产",
	"存货",
	"其中：消耗性生物资产",
	"划分为持有待售的资产",
	"发放贷款及垫款-流动资产",
	"一年内到期的非流动资产",
	"交易性金融资产",
	"应收票据及应收账款",
	"合同资产",
	"其他流动资产",
	"流动资产合计",
	"发放贷款及垫款-非流动资产",
	"可供出售金融资产",
	"持有至到期投资",
	"长期应收款",
	"长期股权投资",
	"投资性房地产",
	"固定资产",
	"在建工程",
	"工程物资",
	"固定资产清理",
	"生产性生物资产",
	"油气资产",
	"无形资产",
	"开发支出",
	"商誉",
	"长期待摊费用",
	"递延所得税资产",
	"债权投资",
	"其他债权投资",
	"其他权益工具投资",
	"其他非流动金融资产",
	"其他非流动资产",
	"非流动资产合计",
	"资产总计",
	"短期借款",
	"向中央银行借款",
	"吸收存款及同业存放",
	"拆入资金",
	"以公允价值计量且其变动计入当期损益的金融负债（20190322弃用）",
	"衍生金融负债",
	"应付票据",
	"应付账款",
	"预收款项",
	"卖出回购金融资产款",
	"应付手续费及佣金",
	"应付职工薪酬",
	"应交税费",
	"其中：应付利息",
	"其中：应付股利",
	"其他应付款",
	"应付关联公司款",
	"应付分保账款",
	"保险合同准备金",
	"代理买卖证券款",
	"代理承销证券款",
	"划分为持有待售的负债",
	"一年内到期的非流动负债",
	"预计负债-流动负债",
	"递延收益-流动负债",
	"交易性金融负债",
	"应付票据及应付账款",
	"合同负债",
	"其他流动负债",
	"流动负债合计",
	"长期借款",
	"应付债券",
	"其中：优先股-非流动负债",
	"永续债-非流动负债",
	"长期应付款",
	"长期应付职工薪酬",
	"专项应付款",
	"预计负债",
	"递延收益-非流动负债",
	"递延所得税负债",
	"其他非流动负债",
	"非流动负债合计",
	"负债合计",
	"实收资本（或股本）",
	"其他权益工具",
	"其中：优先股-所有者权益",
	"永续债-所有者权益",
	"资本公积",
	"减：库存股",
	"其他综合收益",
	"专项储备",
	"盈余公积",
	"一般风险准备",
	"未分配利润",
	"外币报表折算价差",
	"归属于母公司所有者权益",
	"少数股东权益",
	"非正常经营项目收益调整",
	"所有者权益（或股东权益）合计",
	"负债和所有者（或股东权益）合计",
	"备注",
	"应收款项融资",
	"使用权资产",
	"租赁负债"
];

var zh$1 = [
	"证券代码",
	"证券简称",
	"机构名称",
	"公告日期",
	"开始日期",
	"截止日期",
	"报告年度",
	"合并类型编码",
	"合并类型",
	"报表来源编码",
	"报表来源",
	"一、营业总收入",
	"其中：营业收入",
	"利息收入",
	"已赚保费",
	"手续费及佣金收入",
	"二、营业总成本",
	"其中：营业成本",
	"利息支出",
	"手续费及佣金支出",
	"退保金",
	"赔付支出净额",
	"提取保险合同准备金净额",
	"保单红利支出",
	"分保费用",
	"营业税金及附加",
	"销售费用",
	"管理费用",
	"堪探费用",
	"财务费用",
	"研发费用",
	"资产减值损失",
	"加：公允价值变动净收益",
	"投资收益",
	"其中：对联营企业和合营企业的投资收益",
	"汇兑收益",
	"基它收入",
	"信用减值损失",
	"净敞口套期收益",
	"资产处置收益",
	"影响营业利润的其他科目",
	"三、营业利润",
	"加：补贴收入",
	"营业外收入",
	"其中：非流动资产处置利得",
	"减：营业外支出",
	"其中：非流动资产处置损失",
	"加：影响利润总额的其他科目",
	"四、利润总额",
	"减：所得税",
	"加：影响净利润的其他科目",
	"五、净利润",
	"持续经营净利润",
	"终止经营净利润",
	"归属于母公司所有者的净利润",
	"少数股东损益",
	"（一）基本每股收益",
	"（二）稀释每股收益",
	"七、其他综合收益",
	"八、综合收益总额",
	"其中：归属于母公司",
	"其中：归属于少数股东",
	"备注",
	"其中：利息费用",
	"其中：利息收入",
	"信用减值损失（2019格式）",
	"资产减值损失（2019格式）"
];

var zh$2 = [
	"证券简称",
	"证券代码",
	"机构名称",
	"公告日期",
	"开始日期",
	"截止日期",
	"报告年度",
	"合并类型编码",
	"合并类型",
	"报表来源编码",
	"报表来源",
	"销售商品、提供劳务收到的现金",
	"客户存款和同业存放款项净增加额",
	"向中央银行借款净增加额",
	"向其他金融机构拆入资金净增加额",
	"收到原保险合同保费取得的现金",
	"收到再保险业务现金净额",
	"保户储金及投资款净增加额",
	"处置以公允价值计量且其变动计入当期损益的金融资产净增加额",
	"收取利息、手续费及佣金的现金",
	"拆入资金净增加额",
	"回购业务资金净增加额",
	"收到的税费返还",
	"收到其他与经营活动有关的现金",
	"经营活动现金流入小计",
	"购买商品、接受劳务支付的现金",
	"客户贷款及垫款净增加额",
	"存放中央银行和同业款项净增加额",
	"支付原保险合同赔付款项的现金",
	"支付利息、手续费及佣金的现金",
	"支付保单红利的现金",
	"支付给职工以及为职工支付的现金",
	"支付的各项税费",
	"支付其他与经营活动有关的现金",
	"经营活动现金流出小计",
	"经营活动产生的现金流量净额",
	"收回投资收到的现金",
	"取得投资收益收到的现金",
	"处置固定资产、无形资产和其他长期资产收回的现金净额",
	"处置子公司及其他营业单位收到的现金净额",
	"收到其他与投资活动有关的现金",
	"投资活动现金流入小计",
	"购建固定资产、无形资产和其他长期资产支付的现金",
	"投资支付的现金",
	"质押贷款净增加额",
	"取得子公司及其他营业单位支付的现金净额",
	"支付其他与投资活动有关的现金",
	"投资活动现金流出小计",
	"投资活动产生的现金流量净额",
	"吸收投资收到的现金",
	"其中：子公司吸收少数股东投资收到的现金",
	"取得借款收到的现金",
	"发行债券收到的现金",
	"收到其他与筹资活动有关的现金",
	"筹资活动现金流入小计",
	"偿还债务支付的现金",
	"分配股利、利润或偿付利息支付的现金",
	"其中：子公司支付给少数股东的股利、利润",
	"支付其他与筹资活动有关的现金",
	"筹资活动现金流出小计",
	"筹资活动产生的现金流量净额",
	"四、汇率变动对现金的影响",
	"四(2)、其他原因对现金的影响",
	"五、现金及现金等价物净增加额",
	"期初现金及现金等价物余额",
	"期末现金及现金等价物余额",
	"净利润",
	"加：资产减值准备",
	"固定资产折旧、油气资产折耗、生产性生物资产折旧",
	"投资性房地产的折旧及摊销",
	"无形资产摊销",
	"长期待摊费用摊销",
	"处置固定资产、无形资产和其他长期资产的损失",
	"固定资产报废损失",
	"公允价值变动损失",
	"财务费用",
	"投资损失",
	"递延所得税资产减少",
	"递延所得税负债增加",
	"存货的减少",
	"经营性应收项目的减少",
	"经营性应付项目的增加",
	"其他",
	"经营活动产生的现金流量净额2",
	"债务转为资本",
	"一年内到期的可转换公司债券",
	"融资租入固定资产",
	"现金的期末余额",
	"减：现金的期初余额",
	"加：现金等价物的期末余额",
	"减：现金等价物的期初余额",
	"加：其他原因对现金的影响2",
	"现金及现金等价物净增加额2"
];

var zh$3 = [
	"机构名称",
	"证券代码",
	"证券简称",
	"开始日期",
	"截止日期",
	"数据来源编码",
	"数据来源",
	"每股收益",
	"基本每股收益",
	"稀释每股收益",
	"扣除非经常性损益每股收益",
	"每股未分配利润",
	"每股净资产",
	"调整后每股净资产",
	"每股资本公积金",
	"营业利润率",
	"营业税金率",
	"营业成本率",
	"净资产收益率",
	"投资收益率",
	"总资产报酬率",
	"净利润率",
	"管理费用率",
	"财务费用率",
	"成本费用利润率",
	"三费比重",
	"应收账款周转率",
	"存货周转率",
	"运营资金周转率",
	"总资产周转率",
	"固定资产周转率",
	"应收账款周转天数",
	"存货周转天数",
	"流动资产周转率",
	"流动资产周转天数",
	"总资产周转天数",
	"股东权益周转率",
	"流动资产比率",
	"货币资金比率",
	"交易性金融资产比率",
	"存货比率",
	"固定资产比率",
	"负债结构比",
	"产权比率",
	"净资产比率",
	"资产负债比率",
	"流动比率",
	"速动比率",
	"现金比率",
	"利息保障倍数",
	"营运资金",
	"非流动负债比率",
	"流动负债比率",
	"保守速动比率",
	"现金到期债务比率",
	"有形资产净值债务率",
	"营业收入增长率",
	"净利润增长率",
	"净资产增长率",
	"固定资产增长率",
	"总资产增长率",
	"投资收益增长率",
	"营业利润增长率",
	"每股现金流量",
	"每股经营现金流量",
	"经营净现金比率（短期债务）",
	"经营净现金比率（全部债务）",
	"经营活动现金净流量与净利润比率",
	"营业收入现金含量",
	"全部资产现金回收率",
	"净资产收益率(扣除非经常性损益)",
	"净资产收益率-加权",
	"净资产收益率-加权(扣除非经常性损益)",
	"报告年度",
	"合并类型编码",
	"合并类型",
	"扣除非经常性损益后的净利润",
	"非经常性损益合计",
	"毛利率",
	"期间费用率",
	"现金转换周期",
	"净资产收益率",
	"净利含金量",
	"非经常性损益占比",
	"期间费用增长率",
	"基本获利能力",
	"应收账款占比",
	"存货占比",
	"年化期间费用毛利比",
	"营业收入",
	"营业成本",
	"销售费用",
	"管理费用",
	"财务费用",
	"三费合计",
	"公允价值变动净收益",
	"投资收益",
	"营业利润",
	"补贴收入",
	"营业外收支净额",
	"利润总额",
	"净利润",
	"归属于母公司所有者的净利润",
	"扣除非经常性损益后的净利润(2007版)",
	"非经常性损益合计(2007版)",
	"经营活动现金流量净额",
	"投资活动现金流量净额",
	"筹资活动现金流量净额",
	"现金及现金等价物净增加额",
	"货币资金",
	"交易性金融资产",
	"应收账款",
	"存货",
	"流动资产合计",
	"投资性房地产",
	"商誉",
	"固定资产",
	"非流动资产合计",
	"资产总计",
	"流动负债合计",
	"非流动负债合计",
	"负债合计",
	"股本",
	"资本公积",
	"盈余公积",
	"库存股",
	"未分配利润",
	"归属于母公司所有者权益",
	"少数股东权益",
	"股东权益合计"
];

const Raw = {
  balances: zh,
  incomes: zh$1,
  cashflows: zh$2,
  ratios: zh$3
};

exports.Raw = Raw;
exports.balances = zh;
exports.cashflows = zh$2;
exports.incomes = zh$1;
exports.ratios = zh$3;
