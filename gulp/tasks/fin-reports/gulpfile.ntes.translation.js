import { Clean }                                from '@flua/clean'
import { DynamicAssign }                        from '@flua/dynamic-import'
import { Abbr }                                 from '@glossa/abbr-fin'
import { BALANCES, BASICS, CASHFLOWS, INCOMES } from '@glossa/enum-fin'
import { ChsToEng }                             from '@glossa/i18n-fin-ntes'
import { Raw }                                  from '@glossa/raw-fin-ntes'
import { decoSamples, delogger, says }          from '@spare/logger'
import { snakeToCamel }                         from '@spare/phrasing'
import { MakeReplaceable }                      from '@spare/translator'
import { Rename }                               from '@vect/rename'
import { mapper }                               from '@vect/vector-mapper'
import gulp                                     from 'gulp'

const DEST = 'packages/i18n/i18n-fin-ntes/assets'

const mem = {}

const translate = (async () => {
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
}) |> Rename('translate')

const checkMem = () => {
  mem['Abbr'] |> delogger
}

export const buildNtesTranslation = gulp.series(
  Clean(DEST),
  DynamicAssign({ target: mem, src: '@glossa/raw-fin-ntes', prop: 'Raw' }),
  DynamicAssign({ target: mem, src: '@glossa/abbr-fin', prop: 'Abbr' }),
  translate,
  checkMem,
)




