'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const balances = ['symbol', 'date', 'Cash and cash equivalents', 'Short-term investments', 'Cash and short-term investments', 'Receivables', 'Inventories', 'Total current assets', 'Property, Plant & Equipment Net', 'Goodwill and Intangible Assets', 'Long-term investments', 'Tax assets', 'Total non-current assets', 'Total assets', 'Payables', 'Short-term debt', 'Total current liabilities', 'Long-term debt', 'Total debt', 'Deferred revenue', 'Tax Liabilities', 'Deposit Liabilities', 'Total non-current liabilities', 'Total liabilities', 'Other comprehensive income', 'Retained earnings (deficit)', 'Total shareholders equity', 'Investments', 'Net Debt', 'Other Assets', 'Other Liabilities'];

const incomes = ['symbol', 'date', 'Revenue', 'Revenue Growth', 'Cost of Revenue', 'Gross Profit', 'R&D Expenses', 'SG&A Expense', 'Operating Expenses', 'Operating Income', 'Interest Expense', 'Earnings before Tax', 'Income Tax Expense', 'Net Income - Non-Controlling int', 'Net Income - Discontinued ops', 'Net Income', 'Preferred Dividends', 'Net Income Com', 'EPS', 'EPS Diluted', 'Weighted Average Shs Out', 'Weighted Average Shs Out (Dil)', 'Dividend per Share', 'Gross Margin', 'EBITDA Margin', 'EBIT Margin', 'Profit Margin', 'Free Cash Flow margin', 'EBITDA', 'EBIT', 'Consolidated Income', 'Earnings Before Tax Margin', 'Net Profit Margin'];

const cashflows = ['symbol', 'date', 'Depreciation & Amortization', 'Stock-based compensation', 'Operating Cash Flow', 'Capital Expenditure', 'Acquisitions and disposals', 'Investment purchases and sales', 'Investing Cash flow', 'Issuance (repayment) of debt', 'Issuance (buybacks) of shares', 'Dividend payments', 'Financing Cash Flow', 'Effect of forex changes on cash', 'Net cash flow / Change in cash', 'Free Cash Flow', 'Net Cash/Marketcap'];

const enterpriseValues = ['symbol', 'date', 'Stock Price', 'Number of Shares', 'Market Capitalization', '- Cash & Cash Equivalents', '+ Total Debt', 'Enterprise Value'];

const Raw = {
  balances,
  incomes,
  cashflows,
  enterpriseValues
};

exports.Raw = Raw;
exports.balances = balances;
exports.cashflows = cashflows;
exports.enterpriseValues = enterpriseValues;
exports.incomes = incomes;
