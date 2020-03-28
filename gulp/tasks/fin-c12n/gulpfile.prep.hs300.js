import gulp from 'gulp'
import { AREA, CHS, CODE, CONCEPTS, ENG, SECTOR, SECTORS, WEIGHT } from '@glossa/enum-fin'
import { cleanEng } from '@glossa/index-fin-hs300/src/cleanEng'
import { FinInsight } from '@glossa/fin-insight'
import { AssignTable } from '@flua/gulp-init'
import { TableChips, TableLookup } from '@flua/table-gulp'
import { DynamicImport } from '@flua/dynamic-import'
import { Clean } from '@flua/clean'
import { deca, logger } from '@spare/logger'
import { Table } from '@analys/table'
import { Verse } from '@spare/verse'
import { mapper as mapperObject } from '@vect/object-mapper'
import { Rename } from '@vect/rename'
import { OBJECTIFY } from '../../functions/readValue'
import { Insight } from '../../functions/Insight'
import {
  CODE_AREA,
  CODE_CONCEPTS,
  CODE_SECTOR,
  CODE_SECTORS,
  CONCEPT_CODES,
  SECTOR_CODES
} from '../../constants/projections'
import { MakeTable } from '../../utils/MakeTable'
import { quote } from '@spare/quote'
import { vinylize } from '@flua/vinylize'
import { esvar } from '@flua/utils'
import { intersect } from '@vect/vector-algebra'
import { SHENWAN } from '../../constants/sources'

const BASE = 'packages/index/index-fin-hs300'
const RAW = 'IndexHS300.json'
const SRC = BASE + '/static'
const DEST = BASE + '/resources'

const table = new Table()
const mem = {}

const MergeTable = (table) => {
  return (async () => {
    mem |> deca({ hi: 1 }) |> logger
    const codes = table.column(CODE)
    for (let [key, label] of [
      [CODE_SECTOR, SECTOR],
      [CODE_SECTORS, SECTORS],
      [CODE_CONCEPTS, CONCEPTS],
      [CODE_AREA, AREA],
    ]) {
      const dict = mem[key]
      table.pushColumn(label, codes.map(x => dict[x]))
    }
    table.mutateColumn(CODE, x => quote(x))
    table.mutateColumn(ENG, cleanEng)
  }) |> Rename('merge table')
}

const SectorToCodes = ({ label, table, suffix }) => {
  return (async () => {
    const filename = label + (suffix ?? '')
    const dict = mem[label]
    const codes = table.column(CODE)
    const o = mapperObject(dict, list => intersect(list, codes))
    vinylize(filename + '.js',
      esvar(filename),
      Verse.object(o, OBJECTIFY.std)
    ).pipe(gulp.dest(DEST))
  }) |> Rename('merge table')
}

export const buildHs300 = gulp.series(
  Clean(DEST),
  AssignTable({ target: table, src: SRC, filename: RAW }),
  DynamicImport({ target: mem, src: '@glossa/c12n-fin-shenwan', prop: SECTOR_CODES }),
  DynamicImport({ target: mem, src: '@glossa/c12n-fin-sina', prop: CONCEPT_CODES }),
  gulp.parallel(
    SectorToCodes({ label: SECTOR_CODES, table, suffix: SHENWAN }),
    SectorToCodes({ label: CONCEPT_CODES, table }),
  ),
  DynamicImport({ target: mem, src: '@glossa/c12n-fin-tush', prop: CODE_SECTOR }),
  DynamicImport({ target: mem, src: '@glossa/c12n-fin-shenwan', prop: CODE_SECTORS }),
  DynamicImport({ target: mem, src: '@glossa/c12n-fin-sina', prop: CODE_CONCEPTS }),
  DynamicImport({ target: mem, src: '@glossa/c12n-fin-tush', prop: CODE_AREA }),
  MergeTable(table),
  Insight({ filename: RAW, table: table, insight: FinInsight.hs300Insight }),
  MakeTable({ table, dest: DEST, filename: 'table' }),
  gulp.parallel(
    TableLookup({ table, key: CODE, field: CHS, dest: DEST, config: OBJECTIFY.std }),
    TableLookup({ table, key: CODE, field: ENG, dest: DEST, config: OBJECTIFY.std }),
    TableLookup({ table, key: CODE, field: WEIGHT, dest: DEST, config: OBJECTIFY.loose }),
    TableLookup({ table, key: CODE, field: SECTORS, dest: DEST, config: OBJECTIFY.std }),
    TableLookup({ table, key: CODE, field: SECTOR, dest: DEST, config: OBJECTIFY.std }),
    TableLookup({ table, key: CODE, field: CONCEPTS, dest: DEST, config: OBJECTIFY.std }),
    TableLookup({ table, key: CODE, field: AREA, dest: DEST, config: OBJECTIFY.std }),
    TableChips({ table, key: SECTOR, field: CODE, dest: DEST, config: OBJECTIFY.std }),
  ),
)
