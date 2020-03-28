import { expect } from 'chai'
import timeAgo from '../../src/date/timeAgo'

describe('date/timeAgo', () => {
  beforeEach(() => {
    timeAgo.setLocale('en_US')
  })

  it('should the current locale', () => {
    expect(timeAgo.getLocale()).to.equal('en_US')
  })

  it('should return the set locale', () => {
    timeAgo.setLocale('zh_CN')
    expect(timeAgo.getLocale()).to.equal('zh_CN')
  })

  it('should return the expected formatted string', () => {
    const now = Date.now()
    type FormatParams = [number | string | Date]
    type TestUnit = [FormatParams, string]
    const testUnits: Array<TestUnit> = [
      [
        [now],
        'just now'
      ],
      [
        [now - 5000],
        '5 seconds ago'
      ],
      [
        [now - (60 * 1000)],
        '1 minute ago'
      ],
      [
        [now - (5 * 60 * 1000)],
        '5 minutes ago'
      ],
      [
        [now - (60 * 60 * 1000)],
        '1 hour ago'
      ],
      [
        [now - (5 * 60 * 60 * 1000)],
        '5 hours ago'
      ],
      [
        [now - (24 * 60 * 60 * 1000)],
        '1 day ago'
      ],
      [
        [now - (5 * 24 * 60 * 60 * 1000)],
        '5 days ago'
      ],
      [
        [now - (7 * 24 * 60 * 60 * 1000)],
        '1 week ago'
      ],
      [
        [now - (2 * 7 * 24 * 60 * 60 * 1000)],
        '2 weeks ago'
      ],
      [
        [now - (30 * 24 * 60 * 60 * 1000)],
        '1 month ago'
      ],
      [
        [now - (5 * 30 * 24 * 60 * 60 * 1000)],
        '5 months ago'
      ],
      [
        [now - (365 * 24 * 60 * 60 * 1000)],
        '1 year ago'
      ],
      [
        [now - (5 * 365 * 24 * 60 * 60 * 1000)],
        '5 years ago'
      ]
    ]
    testUnits.forEach((testUnit) => {
      expect(timeAgo.format.apply(null, testUnit[0])).to.equal(testUnit[1])
    })
  })

  it('should work with the second `locale` parameter', () => {
    const now = Date.now()
    expect(timeAgo.format(now - 5000, 'zh_CN')).to.equal('5 秒前')
  })

  it('should work with the third `nowDate` paramter', () => {
    const now = Date.now()
    const nowDate = new Date(now - 5000)
    expect(timeAgo.format(now, undefined, nowDate)).to.equal('in 5 seconds')
  })

  it('should add the specified locale', () => {
    const locale: Array<[string, string]> = [
      ['-', '+'],
      ['-%s seconds', '+%s seconds'],
      ['-%s minute', '+%s minute'],
      ['-%s minutes', '+%s minutes']
    ]
    timeAgo.addLocale('custom', locale)
    timeAgo.setLocale('custom')
    expect(timeAgo.getLocale()).to.equal('custom')

    type FormatParams = [number | string | Date, string?, Date?]
    type TestUnit = [FormatParams, string]
    const now = Date.now()
    const testUnits: Array<TestUnit> = [
      [
        [now],
        '-'
      ],
      [
        [now - 5000],
        '-5 seconds'
      ],
      [
        [now, undefined, new Date(now - 5000)],
        '+5 seconds'
      ],
      [
        [now - (60 * 1000)],
        '-1 minute'
      ]
    ]

    testUnits.forEach((testUnit) => {
      expect(timeAgo.format.apply(null, testUnit[0])).to.equal(testUnit[1])
    })
  })
})
