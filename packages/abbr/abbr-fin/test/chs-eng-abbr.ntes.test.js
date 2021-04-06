import { BALANCES, BASICS, CASHFLOWS, INCOMES } from '@glossa/enum-fin'
import { ChsToEng }                             from '@glossa/i18n-fin-ntes'
import { Raw }                                  from '@glossa/raw-fin-ntes'
import { decoSamples, says }                    from '@spare/logger'
import { snakeToCamel }                         from '@spare/phrasing'
import { MakeReplaceable }                      from '@spare/translator'
import { mapper }                               from '@vect/vector-mapper'
import { Abbr }                                 from '../src/abbr'

for (let topic of [
  BALANCES, INCOMES, CASHFLOWS, BASICS
]) {
  const words = Raw[topic]
  const chToEn = ChsToEng[topic] |> MakeReplaceable({ sort: true })
  const enToAb = Abbr(topic) |> MakeReplaceable({ sort: true })
  const samples = mapper(words, raw => {
    const ntes = raw.replace(chToEn)
    const abbr = ntes.replace(enToAb, x => x.trim().toLowerCase()|> snakeToCamel)
    return { abbr, ntes, raw }
  })
  samples |> decoSamples |> says[topic]
}




