import ora from 'ora'
import { promises as fsp } from 'fs'
import { TABLE } from '@analys/enum-tabular-types'
import { says, Xr } from '@spare/logger'
import { Table } from '@analys/table'
import { iso as isoV } from '@vect/vector-init'
import { ACCUM } from '@analys/enum-pivot-mode'
import { wind } from '@vect/object-init'
import { SectorCn } from '../SectorCn'

const FOLDER = './packages/financial/c12n-fin-shenwan/src/assets'
const CODE = 'code', NAME = 'name', SECTOR = 'c_name', FLAG = 'flag'

export const saveSector = async (source = 'sina') => {
  const spn = ora().start(Xr(source).progress(`begin collecting sectors info`))
  const table = Table.from(await SectorCn.sectors({ source, format: TABLE }))
  // table |> DecoTable({ top: 5, bottom: 2, fullAngle: true }) |> logger
  spn.succeed(Xr(source).progress(`collected sectors info`))
  await saveCodeToNames(table), ('saved' |> says['code > name'])
  await saveCodeToSectors(table), ('saved' |> says['code > sector'])
  await saveCodeToSectorLists(table), ('saved' |> says['code > sectorList'])
  await saveSectorToCodeLists(table), ('saved' |> says['sector > codeList'])
}

/**
 * @param {Table} table
 * @returns {Promise<Table>}
 */
const saveCodeToNames = async (table) => {
  const
    codes = table.column(CODE),
    names = table.column(NAME),
    CodeToNames = wind(codes, names)
  await fsp.writeFile(`${FOLDER}/${table.title}/CodeToNames.json`, JSON.stringify(CodeToNames))
  return table
}

/**
 * @param {Table} table
 * @returns {Promise<Table>}
 */
const saveCodeToSectors = async (table) => {
  const
    codes = table.column(CODE),
    sectors = table.column(SECTOR),
    CodeToSectors = wind(codes, sectors)
  await fsp.writeFile(`${FOLDER}/${table.title}/CodeToSectors.json`, JSON.stringify(CodeToSectors))
  return table
}

/**
 * @param {Table} table
 * @returns {Promise<Table>}
 */
const saveCodeToSectorLists = async (table) => {
  const COLUMN_LABEL = 1
  if (table.coin(FLAG) < 0) table.pushColumn(FLAG, isoV(table.ht, COLUMN_LABEL))
  const crostab = table.crosTab({
    side: CODE,
    banner: FLAG,
    cell: { field: SECTOR, mode: ACCUM }
  })
  const
    codes = crostab.side,
    sectorLists = crostab.column(COLUMN_LABEL),
    SectorToCodeLists = wind(codes, sectorLists)
  await fsp.writeFile(`${FOLDER}/${table.title}/CodeToSectorLists.json`, JSON.stringify(SectorToCodeLists))
  return table
}

/**
 * @param {Table} table
 * @returns {Promise<Table>}
 */
const saveSectorToCodeLists = async (table) => {
  const COLUMN_LABEL = 1
  if (table.coin(FLAG) < 0) table.pushColumn(FLAG, isoV(table.ht, COLUMN_LABEL))
  const crostab = table.crosTab({
    side: SECTOR,
    banner: FLAG,
    cell: { field: CODE, mode: ACCUM }
  })
  const
    sectors = crostab.side,
    codeLists = crostab.column(COLUMN_LABEL),
    SectorToCodeLists = wind(sectors, codeLists)
  await fsp.writeFile(`${FOLDER}/${table.title}/SectorToCodeLists.json`, JSON.stringify(SectorToCodeLists))
  return table
}
