import isNumber from './lang/isNumber'

export default function numberFormat (number: number, digits: number = -1, dot: string = '.', sep: string = ','): string {
  if (!isNumber(number)) {
    return ''
  }
  const tenExp = Math.pow(10, digits)
  let result = ''
  let intPart
  let decPart
  let intPartStr
  let decPartStr

  if (digits > -1) {
    number = Math.round(number * tenExp) / tenExp
  }
  intPart = Math.floor(number)
  decPart = ((number * tenExp) - (intPart * tenExp)) / tenExp

  intPartStr = intPart.toString()

  if (decPart === 0) {
    decPartStr = ''
  } else {
    decPartStr = decPart.toString().slice(2)
  }

  if (digits > -1) {
    for (let i = 0; i < digits; i++) {
      if (!decPartStr[i]) {
        decPartStr += '0'
      }
    }
    decPartStr = decPartStr.slice(0, digits)
  }

  const len = intPartStr.length
  for (let i = 0; i < len; i++) {
    if (i % 3 === 0 && i !== 0) {
      result += sep
    }
    result += intPartStr[len - 1 - i]
  }
  result = result.split('').reverse().join('')

  if (decPartStr) {
    result += dot
    result += decPartStr
  }

  return result
}
