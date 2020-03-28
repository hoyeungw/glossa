export class Ratios {
  /** @type {string} */ date
  /** @type {number} */ ast
  /** @type {number} */ curAst
  /** @type {number} */ ncurAst
  /** @type {number} */ liab
  /** @type {number} */ curLiab
  /** @type {number} */ ncurLiab
  /** @type {number} */ eqt
  /** @type {number} */ invt
  /** @type {number} */ monetCap
  /** @type {number} */ tFa
  /** @type {number} */ accRecv
  /** @type {number} */ fixAst
  /** @type {number} */ intgAst
  /** @type {number} */ gdw
  /** @type {number} */ rev
  /** @type {number} */ opCost
  /** @type {number} */ opPft
  /** @type {number} */ saExp
  /** @type {number} */ mangExp
  /** @type {number} */ finExp
  /** @type {number} */ intrExp
  /** @type {number} */ rdExp
  /** @type {number} */ pft
  /** @type {number} */ netInc
  /** @type {number} */ eps
  /** @type {number} */ marketCap
  constructor (balances, profits) {
    this.balances = balances
    this.profits = profits
  }

  set balances (sample) { Object.assign(this, sample) }
  set profits (sample) { Object.assign(this, sample) }
  set marketCap (marketCap) { Object.assign(this, { marketCap }) }

  currRatio () { return this.curAst / this.curLiab }
  acidRatio () { return (this.curAst - this.invt) / this.curLiab }
  cashRatio () { return (this.monetCap + this.tFa) / this.curLiab }
  dnetIncRatio () { return this.liab / this.ast }
  intrCovRatio () { return this.netInc / (this.finExp + this.intrExp) }
  equityMultiplier () { return this.ast / this.eqt }

  astTRatio () { return this.rev / this.ast }
  invtTRatio () { return this.rev / this.invt }
  recvTRatio () { return this.rev / this.accRecv }
  currTRatio () { return this.rev / this.curAst }
  invtTDays () { return 365 / this.invtTRatio() }
  recvTDays () { return 365 / this.recvTRatio() }
  currTDays () { return 365 / this.currTRatio() }

  roe () { return this.netInc / this.eqt }
  roa () { return this.netInc / this.ast }
  roic () { return this.netInc / this.ast }
  grossMargin () { return this.opPft / this.rev }
  salesMargin () { return this.netInc / this.rev }
  profitMargin () { return this.netInc / this.rev }

  pe () { return this.marketCap / this.netInc }
  pgp () { return this.marketCap / this.pft }
  ps () { return this.marketCap / this.rev }
  pb () { return this.marketCap / this.eqt }
}
