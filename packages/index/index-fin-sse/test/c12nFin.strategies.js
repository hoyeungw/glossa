import { CodeToChs, CodeToEst as CodeToEstShenwan, CodeToSector } from '@glossa/c12n-fin-shenwan'
import { unwind } from '@vect/entries-unwind'
import { Table } from '@analys/table'
import { AREA, CHS, CONCEPTS, ENG, EST, SECTOR, SYMBOL } from '@glossa/enum-fin'
import { CodeToArea, CodeToEst } from '@glossa/c12n-fin-tush'
import { CodeToConcepts } from '@glossa/c12n-fin-sina'
import { CodeToEng } from '@glossa/index-fin-hs300'
import { decoCrostab, DecoTable } from '@spare/logger'
import { strategies } from '@valjoux/strategies'
import { says } from '@palett/says'

const classic = () => {
  const [symbols, chs] = Object.entries(CodeToChs) |> unwind
  const table = new Table([SYMBOL], symbols.map(x => [x]))
  table.pushColumn(CHS, chs)
  table.pushColumn(EST, symbols.map(x => CodeToEst[x] ?? CodeToEstShenwan[x]))
  table.pushColumn(SECTOR, symbols.map(x => CodeToSector[x]))
  table.pushColumn(CONCEPTS, symbols.map(x => CodeToConcepts[x]))
  table.pushColumn(AREA, symbols.map(x => CodeToArea[x]))
  table.pushColumn(ENG, symbols.map(x => CodeToEng[x]))
  return table
}

const dev = () => {
  const head = [
    SYMBOL,
    CHS,
    EST,
    SECTOR,
    CONCEPTS,
    AREA,
    ENG,
  ]
  const rows = Object.entries(CodeToChs).map(([code, chs]) =>
    [
      code,
      chs,
      CodeToEst[code]?? CodeToEstShenwan[x],
      CodeToSector[code],
      CodeToConcepts[code],
      CodeToArea[code],
      CodeToEng[code],
    ])
  return Table.from({ head, rows })
}

const { lapse, result } = strategies({
  repeat: 1E+2,
  candidates: {
    simple: [],
  },
  methods: {
    bench: x => x,
    classic: classic,
    dev: dev,
  }
})
lapse |> decoCrostab |> says['lapse']
result.cell('simple', 'classic') |> DecoTable({ top: 2, bottom: 2, fullAngle: true }) |> says['classic']

result.cell('simple', 'dev') |> DecoTable({ top: 2, bottom: 2, fullAngle: true }) |> says['dev']



