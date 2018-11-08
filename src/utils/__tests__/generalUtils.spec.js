import {LEVELS, ONLY_DIGITS_REGEX} from '../generalUtils'

describe('generalUtils', () => {

  it('should match the 4 levels in the design', () => {
    expect(LEVELS).toEqual([
      'Bachelor / Graduate',
      'GCSE / A-Level / High School / GED',
      'Master / Post-Graduate / PhD',
      'Vocational / Diploma / Associates degree'
    ])
  })

  it('should match the regex to only digits (and blanks)', () => {
    const str = 'tacos'
    const str2 = '5'
    expect(ONLY_DIGITS_REGEX.test(str)).toEqual(false)
    expect(ONLY_DIGITS_REGEX.test(str2)).toEqual(true)
  })
})

