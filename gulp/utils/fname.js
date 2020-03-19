import { basename, extname } from 'path'

export const fname = path => basename(path, extname(path))
