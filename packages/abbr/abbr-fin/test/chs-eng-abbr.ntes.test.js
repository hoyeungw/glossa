import { Abbr } from '../src/abbr'
import { Translator } from '@glossa/translator'
import { Raw } from '@glossa/raw-fin-ntes'
import { ChsToEng } from '@glossa/i18n-fin-ntes'
import { ChsToEng as ChsToEngQtx } from '@glossa/i18n-fin-qtx'
import { decoSamples, says } from '@spare/logger'
import { mapper } from '@vect/vector-mapper'
import { BALANCES, BASICS, CASHFLOWS, INCOMES } from '@glossa/enum-fin'
import { dashedToCamel } from '@spare/string'

const abbrevPhrase = function (phrase, de = '') {
  // if (phrase.length < 24) return phrase
  const ve = phrase
    .replace(/the( ?)/gi, '')
    .split(/\s/g)
  let ph = ve[0], i = 0, w, t = ''
  while ((w = ve[++i])) {
    if (w.length > 4) w = w[0]
    if (w.length <= 1) {
      t += w
    } else {
      (ph += t.length ? (de + t + de + w) : (de + w)) , t = ''
    }
  }
  return t.length ? ph + de + t : ph
}

// const DASHED = /[A-Za-z&\d]+/g
// const dashedToCamel = (dashed, de = '') => {
//   const matches = dashed.match(DASHED)
//   return matches ? matches[0].toLowerCase() + matches.slice(1).map(wd => wd[0].toUpperCase() + wd.slice(1).toLowerCase()).join(de) : dashed
// }

for (let topic of [
  BALANCES, INCOMES, CASHFLOWS, BASICS
]) {
  const words = Raw[topic]
  const translator = Translator.build(ChsToEng[topic])
  const translatorQtx = Translator.build(ChsToEngQtx[topic] || [])
  const abbreviator = Translator.build(Abbr(topic))
  const samples = mapper(words, raw => {
    const ntes = translator.parse(raw)
    const tqtx = translatorQtx.parse(raw)
    let abbrev = abbreviator.parse(ntes).trim().toLowerCase()
    // if (abbrev.length > 24) abbrev = abbrev.split(' ').map(([c]) => c).join('')
    // if (10 < abbrev.length)
    abbrev = dashedToCamel(abbrev)
    // if (abbrev.length <= 10) abbrev = abbrev.replace(/ /g, '')
    return { abbrev, ntes, tqtx, raw }
  })
  samples |> decoSamples |> says[topic]
}




