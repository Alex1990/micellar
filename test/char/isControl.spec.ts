import { expect } from 'chai'
import isControl from '../../src/char/isControl'

describe('char/isControl', () => {
  const chars: Array<string> = []

  before(() => {
    for (let i = 0; i <= 31; i++) {
      chars.push(String.fromCharCode(i))
    }
    chars.push(String.fromCharCode(127))
  })

  it('should return true', () => {
    const result = chars.every(ch => isControl(ch))
    expect(result).to.equal(true)
  })

  it('should return false', () => {
    expect(isControl({})).to.equal(false)
    expect(isControl('')).to.equal(false)
    expect(isControl(null)).to.equal(false)
    expect(isControl(undefined)).to.equal(false)
  })
})
