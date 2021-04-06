import TABLE from '../../../c12n/c12n-fin-tush/static/Sectors'
import { deca, DecoTable, delogger, logger } from '@spare/logger'
import { FinInsight } from '../src/FinInsight'
import { Table } from '@analys/table'
import { NUM_DESC } from '@aryth/comparer'

const table = TABLE |> Table.from
table.sort('fixAst', NUM_DESC) |> DecoTable({ top: 5, bottom: 1, fullAngle: true }) |> delogger
FinInsight.tsInsight(TABLE) |> deca({ va:2 }) |> logger





