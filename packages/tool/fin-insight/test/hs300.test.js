import TABLE from '../../../index/index-fin-hs300/static/IndexHS300'
import { delogger } from '@spare/logger'
import { FinInsight } from '../src/FinInsight'

FinInsight.hs300Insight(TABLE) |> delogger





