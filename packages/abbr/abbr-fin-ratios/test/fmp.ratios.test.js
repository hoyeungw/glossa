import { DictCollection }             from '@glossa/abbr-fin'
import { says }                       from '@palett/says'
import { decoSamples }                from '@spare/logger'
import { camelToSnake, snakeToCamel } from '@spare/phrasing'
import { makeReplaceable }            from '@spare/translator'
import { acquire }                    from '@vect/vector-merge'
import { ratios }                     from '../index'

const nestedFields = {
  investmentValuationRatios: [
    'priceBookValueRatio',
    'priceToBookRatio',
    'priceToSalesRatio',
    'priceEarningsRatio',
    'receivablesTurnover',
    'priceToFreeCashFlowsRatio',
    'priceToOperatingCashFlowsRatio',
    'priceCashFlowRatio',
    'priceEarningsToGrowthRatio',
    'priceSalesRatio',
    'dividendYield',
    'enterpriseValueMultiple',
    'priceFairValue',
  ],
  profitabilityIndicatorRatios: [
    'ebitperRevenue',
    'ebtperEBIT',
    'niperEBT',
    'grossProfitMargin',
    'operatingProfitMargin',
    'pretaxProfitMargin',
    'netProfitMargin',
    'effectiveTaxRate',
    'returnOnAssets',
    'returnOnEquity',
    'returnOnCapitalEmployed',
    'nIperEBT',
    'eBTperEBIT',
    'eBITperRevenue',
  ],
  operatingPerformanceRatios: [
    'receivablesTurnover',
    'payablesTurnover',
    'inventoryTurnover',
    'fixedAssetTurnover',
    'assetTurnover',
  ],
  liquidityMeasurementRatios: [
    'currentRatio',
    'quickRatio',
    'cashRatio',
    'daysOfSalesOutstanding',
    'daysOfInventoryOutstanding',
    'operatingCycle',
    'daysOfPayablesOutstanding',
    'cashConversionCycle',
  ],
  debtRatios: [
    'debtRatio',
    'debtEquityRatio',
    'longtermDebtToCapitalization',
    'totalDebtToCapitalization',
    'interestCoverage',
    'cashFlowToDebtRatio',
    'companyEquityMultiplier',
  ],
  cashFlowIndicatorRatios: [
    'operatingCashFlowPerShare',
    'freeCashFlowPerShare',
    'cashPerShare',
    'payoutRatio',
    'receivablesTurnover',
    'operatingCashFlowSalesRatio',
    'freeCashFlowOperatingCashFlowRatio',
    'cashFlowCoverageRatios',
    'shortTermCoverageRatios',
    'capitalExpenditureCoverageRatios',
    'dividendpaidAndCapexCoverageRatios',
    'dividendPayoutRatio',
  ],
}

const capitalize = word => word[0].toUpperCase() + word.substring(1)

export const test = () => {
  const lex = acquire(
    ratios,
    DictCollection.build('generals', 'balances', 'incomes', 'cashflows')
  )|> makeReplaceable
  for (const [key, vec] of Object.entries(nestedFields)) {
    vec.map(x => ({
      o: x,
      alpha: camelToSnake(capitalize(x), ' '),
      beta: camelToSnake(capitalize(x), ' ').replace(lex, snakeToCamel).trim(),
    }))
      |> decoSamples
      |> says[key]
  }
}
test()
