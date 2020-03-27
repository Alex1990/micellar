import isString from '../lang/isString'
import reRealNumber from './realNumber'

const isRealNumber = (string: string): boolean => isString(string) && reRealNumber.test(string)

export default isRealNumber
