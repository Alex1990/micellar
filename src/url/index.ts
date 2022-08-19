import isAbsolute from './isAbsolute'
import join from './join'
import parse from './parse'
import stringify from './stringify'

export type { URLObject } from './parse'
export type { URLParts } from './stringify'

export default {
  isAbsolute,
  join,
  parse,
  stringify,
}
