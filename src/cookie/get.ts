import isString from '../lang/isString'
import escapeRegexp from '../string/escapeRegexp'
import { Decoder } from './types'


export default function get (key: string, decoder: Decoder | null = decodeURIComponent): any {
  if (!isString(key) || !key) {
    return null
  }

  const reKey = new RegExp(`(?:^|; )${escapeRegexp(key)}(?:=([^;]*))?(?:;|$)`)
  const match = reKey.exec(document.cookie)

  if (match === null) {
    return null
  }

  return typeof decoder === 'function' ? decoder(match[1]) : match[1]
}
