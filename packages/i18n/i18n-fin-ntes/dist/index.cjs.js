'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const balances = [['报告日期', 'date'], ['货币资金', 'monetary capital'], ['结算备付金', 'settlement provisions'], ['拆出资金', 'lending funds'], ['交易性金融资产', 'transactional financial assets'], ['衍生金融资产', 'derivative financial assets'], ['应收票据', 'bills receivables'], ['应收账款', 'accounts receivables'], ['预付款项', 'prepayments'], ['应收保费', 'premium receivables'], ['应收分保账款', 'reinsurance accounts receivables'], ['应收分保合同准备金', 'reinsurance contract reserve receivables'], ['应收利息', 'interest receivables'], ['应收股利', 'dividends receivables'], ['其他应收款', 'other receivables'], ['应收出口退税', 'export tax refund receivables'], ['应收补贴款', 'subsidies receivables'], ['应收保证金', 'margin receivables'], ['内部应收款', 'internal receivables'], ['买入返售金融资产', 'buy back financial assets'], ['存货', 'inventory'], ['待摊费用', 'prepaid expenses'], ['待处理流动资产损益', 'profit and loss of current assets to be disposed'], ['一年内到期的非流动资产', 'non current assets due within one year'], ['其他流动资产', 'other current assets'], ['流动资产合计', 'total current assets'], ['发放贷款及垫款', 'loans and advances to customers'], ['可供出售金融资产', 'available-for-sale financial assets'], ['持有至到期投资', 'held-to-maturity investment'], ['长期应收款', 'long term receivables'], ['长期股权投资', 'long term equity investment'], ['其他长期投资', 'other long-term investments'], ['投资性房地产', 'investment real estate'], ['固定资产原值', 'original value of fixed assets'], ['累计折旧', 'accumulated depreciation'], ['固定资产净值', 'net value of fixed assets'], ['固定资产减值准备', 'fixed assets depreciation reserves'], ['固定资产', 'fixed assets'], ['在建工程', 'construction in progress'], ['工程物资', 'engineering materials'], ['固定资产清理', 'disposal of fixed assets'], ['生产性生物资产', 'productive biological assets'], ['公益性生物资产', 'non-profit biological assets'], ['油气资产', 'oil and gas assets'], ['无形资产', 'intangible assets'], ['开发支出', 'development expenditure'], ['商誉', 'goodwill'], ['长期待摊费用', 'long term unamortized expenses'], ['股权分置流通权', 'share split trading rights'], ['递延所得税资产', 'deferred tax assets'], ['其他非流动资产', 'other non current assets'], ['非流动资产合计', 'total non current assets'], ['资产总计', 'total assets'], ['短期借款', 'short term loans'], ['向中央银行借款', 'borrowing from the central bank'], ['吸收存款及同业存放', 'deposit interest taking and inter-bank deposit interest'], ['拆入资金', 'borrowed funds'], ['交易性金融负债', 'transactional financial liabilities'], ['衍生金融负债', 'derivative financial liabilities'], ['应付票据', 'bills payable'], ['应付账款', 'accounts payable'], ['预收账款', 'advance receipts'], ['卖出回购金融资产款', 'financial assets sold for repurchase'], ['应付手续费及佣金', 'fees and commissions payable'], ['应付职工薪酬', 'payroll payable'], ['应交税费', 'taxes payable'], ['应付利息', 'interest payable'], ['应付股利', 'dividends payable'], ['其他应交款', 'other payables'], ['应付保证金', 'margin payable'], ['内部应付款', 'internal payables'], ['其他应付款', 'other payables'], ['预提费用', 'accrued expenses'], ['预计流动负债', 'estimated current liabilities'], ['应付分保账款', 'reinsurance premiums payable'], ['保险合同准备金', 'insurance contract reserves'], ['代理买卖证券款', 'customer brokerage deposits'], ['代理承销证券款', 'securities underwriting brokerage deposits'], ['国际票证结算', 'international bill settlement'], ['国内票证结算', 'domestic bill settlement'], ['递延收益', 'deferred income'], ['应付短期债券', 'short term bonds payable'], ['一年内到期的非流动负债', 'non current liabilities due within one year'], ['其他流动负债', 'other current liabilities'], ['流动负债合计', 'total current liabilities'], ['长期借款', 'long term borrowings'], ['应付债券', 'bonds payable'], ['长期应付款', 'long term payables'], ['专项应付款', 'special payables'], ['预计非流动负债', 'estimated non current liabilities'], ['长期递延收益', 'long term deferred income'], ['递延所得税负债', 'deferred income tax liabilities'], ['其他非流动负债', 'other non current liabilities'], ['非流动负债合计', 'total non current liabilities'], ['负债合计', 'total liabilities'], ['实收资本', 'paid in capital'], ['资本公积', 'capital reserve'], ['减_库存股', 'less treasury shares'], ['专项储备', 'special reserve'], ['盈余公积', 'surplus reserve'], ['一般风险准备', 'general risk provisions'], ['未确定的投资损失', 'undetermined investment loss'], ['未分配利润', 'undistributed profit'], ['拟分配现金股利', 'cash dividends to be distributed'], ['外币报表折算差额', 'translation reserve'], ['归属于母公司股东权益合计', 'total shareholders\' equity attributable to the parent company'], ['少数股东权益', 'minority equity'], ['所有者权益合计', 'total shareholders\' equity'], ['负债和所有者权益总计', 'total liabilities and shareholders\' equity']];

const basics = [['报告日期', 'date'], ['基本每股收益', 'basic eps'], ['每股净资产', 'net assets per share'], ['每股经营活动产生的现金流量净额', 'operating cash flow per share'], ['主营业务收入', 'operating income'], ['主营业务利润', 'operating profit'], ['营业利润', 'operating profit'], ['投资收益', 'investment income'], ['营业外收支净额', 'net non-operating income'], ['利润总额', 'total profit'], ['净利润', 'net profit'], ['经营活动产生的现金流量净额', 'net cash flow from operating activities'], ['现金及现金等价物净增加额', 'net increase in cash and cash equivalents'], ['总资产', 'total assets'], ['流动资产', 'current assets'], ['总负债', 'total liabilities'], ['流动负债', 'current liabilities'], ['股东权益不含少数股东权益', 'shareholders\' equity wo minority'], ['净资产收益率加权', 'weighted return on equity']];

const cashflows = [['报告日期', 'date'], ['销售商品_提供劳务收到的现金', 'cash from goods sales or services provision'], ['客户存款和同业存放款项净增加额', 'net increase in customer deposits and interbank deposits'], ['向中央银行借款净增加额_万元', 'net increase in borrowings from the central bank rmb10k'], ['向其他金融机构拆入资金净增加额', 'net increase in borrowings from other financial institutions'], ['收到原保险合同保费取得的现金', 'cash received from premium of original insurance contract'], ['收到再保险业务现金净额', 'net cash received from reinsurance business'], ['保户储金及投资款净增加额', 'net increase in deposits and investments of the insured'], ['处置交易性金融资产净增加额', 'net increase in disposal of trading financial assets'], ['收取利息_手续费及佣金的现金', 'cash charged for interest and Commission'], ['拆入资金净增加额', 'net increase in borrowed funds'], ['回购业务资金净增加额', 'net increase in repurchase business funds'], ['收到的税费返还', 'refund of tax and fees received'], ['收到的其他与经营活动有关的现金', 'other cash received relating to operating activities'], ['经营活动现金流入小计', 'subtotal of cash inflow from operating activities'], ['购买商品_接受劳务支付的现金', 'cash paid for goods purchased and services received'], ['客户贷款及垫款净增加额', 'net increase in customer loans and advances'], ['存放中央银行和同业款项净增加额', 'net increase in deposits with the central bank and other banks'], ['支付原保险合同赔付款项的现金', 'cash paid for claims under the original insurance contract'], ['支付利息_手续费及佣金的现金', 'cash paid for interest and commission'], ['支付保单红利的现金', 'cash paid for policy dividend'], ['支付给职工以及为职工支付的现金', 'cash paid to and for employees'], ['支付的各项税费', 'taxes paid'], ['支付的其他与经营活动有关的现金', 'other cash paid relating to operating activities'], ['经营活动现金流出小计', 'subtotal of cash outflow from operating activities'], ['经营活动产生的现金流量净额', 'net cash flow from operating activities'], ['收回投资所收到的现金', 'cash received from investment recovery'], ['取得投资收益所收到的现金', 'cash received from investment income'], ['处置固定资产_无形资产和其他长期资产所收回的现金净额', 'net cash received from disposal of fixed assets, intangible assets and other long-term assets'], ['处置子公司及其他营业单位收到的现金净额', 'net cash received from disposal of subsidiaries and other business units'], ['收到的其他与投资活动有关的现金', 'other cash received relating to investment activities'], ['减少质押和定期存款所收到的现金', 'reduce cash received from pledges and time deposits'], ['投资活动现金流入小计', 'subtotal of cash inflow from investment activities'], ['购建固定资产_无形资产和其他长期资产所支付的现金', 'cash paid for the acquisition and construction of fixed assets, intangible assets and other long-term assets'], ['投资所支付的现金', 'cash paid for investment'], ['质押贷款净增加额', 'net increase in pledged loans'], ['取得子公司及其他营业单位支付的现金净额', 'net cash paid to acquire subsidiaries and other business units'], ['支付的其他与投资活动有关的现金', 'other cash paid related to investment activities'], ['增加质押和定期存款所支付的现金', 'increase cash paid for pledge and term deposits'], ['投资活动现金流出小计', 'subtotal of cash outflow from investment activities'], ['投资活动产生的现金流量净额', 'net cash flow from investing activities'], ['吸收投资收到的现金', 'cash received from investment absorption'], ['其中_子公司吸收少数股东投资收到的现金', 'cash received from minority shareholders\' investment by subsidiaries'], ['取得借款收到的现金', 'cash received from borrowing'], ['发行债券收到的现金', 'cash received from bond issue'], ['收到其他与筹资活动有关的现金', 'other cash received relating to financing activities'], ['筹资活动现金流入小计', 'subtotal of cash inflow from financing activities'], ['偿还债务支付的现金', 'cash paid for debt repayment'], ['分配股利_利润或偿付利息所支付的现金', 'cash paid for dividend distribution or interest payment'], ['其中_子公司支付给少数股东的股利_利润', 'of which, dividends and profits paid by subsidiaries to minority shareholders'], ['支付其他与筹资活动有关的现金', 'other cash payments related to financing activities'], ['筹资活动现金流出小计', 'subtotal of cash outflow from financing activities'], ['筹资活动产生的现金流量净额', 'net cash flow from financing activities'], ['汇率变动对现金及现金等价物的影响', 'effect of exchange rate changes on cash and cash equivalents'], ['现金及现金等价物净增加额', 'net increase in cash and cash equivalents'], ['加_期初现金及现金等价物余额', 'plus balance of cash and cash equivalents at the beginning of the period'], ['期末现金及现金等价物余额', 'balance of cash and cash equivalents at the end of the period'], ['净利润', 'net income'], ['少数股东损益', 'minority interest income'], ['未确认的投资损失', 'unrecognized investment loss'], ['资产减值准备', 'assets depreciation reserves'], ['固定资产折旧_油气资产折耗_生产性物资折旧', 'depreciation of fixed assets, oil and gas assets and productive materials'], ['无形资产摊销', 'amortization of intangible assets'], ['长期待摊费用摊销', 'amortization of long term unamortized expenses'], ['待摊费用的减少', 'decrease of unamortized expenses'], ['预提费用的增加', 'increase of accrued expenses'], ['处置固定资产_无形资产和其他长期资产的损失', 'loss on disposal of fixed assets and intangible assets and other long-term assets'], ['固定资产报废损失', 'loss on retirement of fixed assets'], ['公允价值变动损失', 'loss on changes in fair value'], ['递延收益增加', 'increase in deferred income'], ['预计负债', 'estimated liabilities'], ['财务费用', 'financial expenses'], ['投资损失', 'investment loss'], ['递延所得税资产减少', 'decrease in deferred tax assets'], ['递延所得税负债增加', 'increase in deferred income tax liabilities'], ['存货的减少', 'decrease in inventory'], ['经营性应收项目的减少', 'decrease in operating receivables'], ['经营性应付项目的增加', 'increase in operating payables'], ['已完工尚未结算款的减少', 'decrease of completed but unsettled payment'], ['已结算尚未完工款的增加', 'increase of settled but not completed payment'], ['其他', 'other'], ['经营活动产生现金流量净额', 'net cash flow from operating activities'], ['债务转为资本', 'debt to capital'], ['一年内到期的可转换公司债券', 'convertible bonds due within one year'], ['融资租入固定资产', 'fixed assets under financing lease'], ['现金的期末余额', 'closing balance of cash'], ['现金的期初余额', 'opening balance of cash'], ['现金等价物的期末余额', 'closing balance of cash equivalents'], ['现金等价物的期初余额', 'opening balance of cash equivalents'], ['现金及现金等价物的净增加额', 'net increase in cash and cash equivalents']];

const incomes = [['报告日期', 'date'], ['营业总收入', 'revenue'], ['营业收入', 'operating income'], ['利息收入', 'interest income'], ['已赚保费', 'earned premium'], ['手续费及佣金收入', 'commission income'], ['房地产销售收入', 'real estate sales income'], ['其他业务收入', 'other operating income'], ['营业总成本', 'revenue costs'], ['营业成本', 'operating costs'], ['利息支出', 'interest expenses'], ['手续费及佣金支出', 'service charge and commission expenses'], ['房地产销售成本', 'real estate sales costs'], ['研发费用', 'r&d expenses'], ['退保金', 'surrender'], ['赔付支出净额', 'net compensation expenses'], ['提取保险合同准备金净额', 'net provision for insurance contracts'], ['保单红利支出', 'policy dividend expenses'], ['分保费用', 'reinsurance expenses'], ['其他业务成本', 'other operating costs'], ['营业税金及附加', 'tax and surcharges'], ['销售费用', 'sales expenses'], ['管理费用', 'management expenses'], ['财务费用', 'financial expenses'], ['资产减值损失', 'assets devaluation'], ['公允价值变动收益', 'income from fair value changes'], ['投资收益', 'investment income'], ['对联营企业和合营企业的投资收益', 'investment income from associates and joint ventures'], ['汇兑收益', 'exchange gain'], ['期货损益', 'futures profit and loss'], ['托管收益', 'custody proceeds'], ['补贴收入', 'subsidy income'], ['其他业务利润', 'other operating profit'], ['营业利润', 'operating profit'], ['营业外收入', 'non operating income'], ['营业外支出', 'non operating expenses'], ['非流动资产处置损失', 'loss on disposal of non current assets'], ['利润总额', 'total profit'], ['所得税费用', 'income tax expenses'], ['未确认投资损失', 'unrecognized investment loss'], ['净利润', 'net income'], ['归属于母公司所有者的净利润', 'net income attributable to parent company owner'], ['被合并方在合并前实现净利润', 'net income of the merged party before the merger '], ['少数股东损益', 'minority interest income'], ['基本每股收益', 'earnings per share'], ['稀释每股收益', 'earnings per share diluted']];

const ChsToEng = {
  balances,
  incomes,
  cashflows,
  basics
};

const sortKeysByLength = dict => dict.sort(([a], [b]) => String(b).length - String(a).length);

const makeReplaceable$1 = function (dict) {
  if (this !== null && this !== void 0 && this.sort) sortKeysByLength(dict);
  Object.defineProperty(dict, Symbol.replace, {
    value(word, after) {
      for (let [curr, proj] of this) word = word.replace(curr, proj);

      return after ? after(word) : word;
    },

    configurable: true,
    enumerable: false
  });
  return dict;
};

const MakeReplaceable = ({
  sort = true
} = {}) => makeReplaceable$1.bind({
  sort
});

const makeReplaceable = MakeReplaceable({
  sort: true
});
const DictCollection = {
  get balances() {
    var _balances;

    return _balances = balances, makeReplaceable(_balances);
  },

  get incomes() {
    var _incomes;

    return _incomes = incomes, makeReplaceable(_incomes);
  },

  get cashflows() {
    var _cashflows;

    return _cashflows = cashflows, makeReplaceable(_cashflows);
  },

  get basics() {
    var _basics;

    return _basics = basics, makeReplaceable(_basics);
  }

};

exports.ChsToEng = ChsToEng;
exports.DictCollection = DictCollection;
exports.balances = balances;
exports.basics = basics;
exports.cashflows = cashflows;
exports.incomes = incomes;
