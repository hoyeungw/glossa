import del from 'del'
import { Table } from '@analys/table'
import { matchSlice } from '@analys/table-init'
import { deca } from '@spare/logger'
import { says } from '@palett/says'
import { vinylizeTableChips } from './vinylizeTableChips'
import { vinylizeTableLookup } from './vinylizeTableLookup'
import { rename } from '../utils/rename'
import { tableReader } from './tableReader'

export class TableGulp {
  /** @type {Table} */ #table
  /** @type {string} */ src
  /** @type {string} */ dest

  constructor (src, dest, table,) {
    this.src = src
    this.dest = dest
    this.#table = Table.from(table || {})
  }
  get table () { return this.#table }
  set table (value) { Object.assign(this.#table, value |> matchSlice) }
  static build ({ src, dest, table = {} }) {
    ({ src, dest }) |> deca({ wo: 128 }) |> says['TableGulp'].p('build')
    return new TableGulp(src, dest, table)
  }

  CleanDest () {
    const clean = () => del([this.dest])
    return rename(clean, says.roster('clean') + ' ' + this.dest)
  }

  Read (filename) {
    const { src, table } = this
    const method = tableReader.bind({ table, src, raw: filename })
    return rename(method, says.roster('read') + ' ' + filename)
  }

  TableLookup (key, field) {
    const { dest, table } = this
    const method = vinylizeTableLookup.bind({ dest, table, key, field })
    return rename(method, says.roster(key) + ' -> ' + says.roster(field))
  }

  TableChips (key, field, mode) {
    const { dest, table } = this
    const method = vinylizeTableChips.bind({ dest, table, key, field, mode })
    return rename(method, says.roster(key) + ' -> ' + says.roster(field))
  }
}



