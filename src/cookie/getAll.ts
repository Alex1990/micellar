import { Cookies, Decoder } from './types'

export default function getAll (decoder: Decoder = decodeURIComponent): Cookies {
  const reKey = /(?:^|; )([^=]+?)(?:=([^;]*))?(?:;|$)/g
  const cookies: Cookies = {}
  let match

  while ((match = reKey.exec(document.cookie))) {
    reKey.lastIndex = (match.index + match.length) - 1
    cookies[match[1]] = typeof decoder === 'function' ? decoder(match[2]) : match[2]
  }

  return cookies
}
