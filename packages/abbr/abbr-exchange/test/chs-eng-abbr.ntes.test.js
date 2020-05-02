import { Abbr } from '../src/abbr'
import { Translator } from '@spare/translator'
import { Raw } from '@glossa/raw-fin-ntes'
import { ChsToEng } from '@glossa/i18n-fin-ntes'
import { ChsToEng as ChsToEngQtx } from '@glossa/i18n-fin-qtx'
import { decoSamples, says } from '@spare/logger'
import { mapper } from '@vect/vector-mapper'
import { BALANCES, BASICS, CASHFLOWS, INCOMES } from '@glossa/enum-fin'
import { dashedToCamel } from '@spare/string'

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
    const abbr = abbreviator.parse(ntes).trim().toLowerCase() |> dashedToCamel
    return { abbr, ntes, tqtx, raw }
  })
  samples |> decoSamples |> says[topic]
}




