'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class Ratios {
  /** @type {string} */

  /** @type {number} */

  /** @type {number} */

  /** @type {number} */

  /** @type {number} */

  /** @type {number} */

  /** @type {number} */

  /** @type {number} */

  /** @type {number} */

  /** @type {number} */

  /** @type {number} */

  /** @type {number} */

  /** @type {number} */

  /** @type {number} */

  /** @type {number} */

  /** @type {number} */
  // profit

  /** @type {number} */
  // profit

  /** @type {number} */
  // profit

  /** @type {number} */
  // profit

  /** @type {number} */
  // profit

  /** @type {number} */
  // profit

  /** @type {number} */
  // profit

  /** @type {number} */
  // profit

  /** @type {number} */
  // profit

  /** @type {number} */
  // profit

  /** @type {number} */

  /** @type {number} */
  constructor(balances, profits) {
    _defineProperty(this, "date", void 0);

    _defineProperty(this, "ast", void 0);

    _defineProperty(this, "curAst", void 0);

    _defineProperty(this, "ncurAst", void 0);

    _defineProperty(this, "liab", void 0);

    _defineProperty(this, "curLiab", void 0);

    _defineProperty(this, "ncurLiab", void 0);

    _defineProperty(this, "eqt", void 0);

    _defineProperty(this, "invt", void 0);

    _defineProperty(this, "monetCap", void 0);

    _defineProperty(this, "tFa", void 0);

    _defineProperty(this, "accRecv", void 0);

    _defineProperty(this, "fxAst", void 0);

    _defineProperty(this, "intgAst", void 0);

    _defineProperty(this, "gdw", void 0);

    _defineProperty(this, "rev", void 0);

    _defineProperty(this, "opCosts", void 0);

    _defineProperty(this, "opPft", void 0);

    _defineProperty(this, "saExp", void 0);

    _defineProperty(this, "mangExp", void 0);

    _defineProperty(this, "finExp", void 0);

    _defineProperty(this, "intrExp", void 0);

    _defineProperty(this, "rdExp", void 0);

    _defineProperty(this, "pft", void 0);

    _defineProperty(this, "netInc", void 0);

    _defineProperty(this, "eps", void 0);

    _defineProperty(this, "marketCap", void 0);

    this.balances = balances;
    this.profits = profits;
  }

  set balances(sample) {
    Object.assign(this, sample);
  }

  set profits(sample) {
    Object.assign(this, sample);
  }

  set marketCap(marketCap) {
    Object.assign(this, {
      marketCap
    });
  }

  currRatio() {
    return this.curAst / this.curLiab;
  }

  acidRatio() {
    return (this.curAst - this.invt) / this.curLiab;
  }

  cashRatio() {
    return (this.monetCap + this.tFa) / this.curLiab;
  }

  debtRatio() {
    return this.liab / this.ast;
  }

  intrCovRatio() {
    return this.netInc / (this.finExp + this.intrExp);
  }

  equityMultiplier() {
    return this.ast / this.eqt;
  }

  astTRatio() {
    return this.rev / this.ast;
  }

  invtTRatio() {
    return this.rev / this.invt;
  }

  recvTRatio() {
    return this.rev / this.accRecv;
  }

  currTRatio() {
    return this.rev / this.curAst;
  }

  invtTDays() {
    return 365 / this.invtTRatio();
  }

  recvTDays() {
    return 365 / this.recvTRatio();
  }

  currTDays() {
    return 365 / this.currTRatio();
  }

  roe() {
    return this.netInc / this.eqt;
  }

  roa() {
    return this.netInc / this.ast;
  }

  roic() {
    return this.netInc / this.ast;
  }

  grossMargin() {
    return this.opPft / this.rev;
  }

  salesMargin() {
    return this.netInc / this.rev;
  }

  profitMargin() {
    return this.netInc / this.rev;
  }

  pe() {
    return this.marketCap / this.netInc;
  }

  pgp() {
    return this.marketCap / this.pft;
  }

  ps() {
    return this.marketCap / this.rev;
  }

  pb() {
    return this.marketCap / this.eqt;
  }

}

exports.Ratios = Ratios;
