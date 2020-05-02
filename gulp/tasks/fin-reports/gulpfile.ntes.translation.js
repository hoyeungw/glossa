import { Clean }                                from '@flua/clean'
import { DynamicAssign }                        from '@flua/dynamic-import'
import { esvar }                                from '@flua/utils'
import { Vinylize }                             from '@flua/vinylize'
import { Abbr }                                 from '@glossa/abbr-fin'
import { BALANCES, BASICS, CASHFLOWS, INCOMES } from '@glossa/enum-fin'
import { ChsToEng }                             from '@glossa/i18n-fin-ntes'
import { says }                                 from '@palett/says'
import { SP }                                   from '@spare/enum-chars'
import { decoSamples }                          from '@spare/logger'
import { snakeToCamel }                         from '@spare/phrasing'
import { MakeReplaceable }                      from '@spare/translator'
import { Verse }                                from '@spare/verse'
import { Rename }                               from '@vect/rename'
import { mapper }                               from '@vect/vector-mapper'
import gulp                                     from 'gulp'

const DEST = 'packages/i18n/i18n-fin-ntes/resources/abbr'

const mem = {}

const Translate = (topic) => {
  return (async () => {
    const words = mem['raw'][topic]
    const chToEn = mem['chsToEng'][topic] |> MakeReplaceable({ sort: true })
    const enToAb = Abbr(topic) |> MakeReplaceable({ sort: true })
    const samples = await mapper(words, raw => {
      const ntes = raw.replace(chToEn)
      const abbr = ntes.replace(enToAb, x => x.trim().toLowerCase()|> snakeToCamel)
      return { abbr, ntes, raw }
    })
    samples |> decoSamples |> says[topic]

    Vinylize(topic + '.js')
      .p(esvar(topic))
      .p(samples.map(({ raw, abbr }) => [raw, abbr]) |>  Verse.entries)
      .pipe(gulp.dest(DEST))
  }) |> Rename(says.roster('translate') + SP + says.roster(topic))
}

export const buildNtesTranslation = gulp.series(
  Clean(DEST),
  DynamicAssign({ target: mem, src: '@glossa/raw-fin-ntes', prop: 'Raw', name: 'raw' }),
  DynamicAssign({ target: mem, src: '@glossa/i18n-fin-ntes', prop: 'ChsToEng', name: 'chsToEng' }),
  Translate(BALANCES),
  Translate(INCOMES),
  Translate(CASHFLOWS),
  Translate(BASICS),
)




