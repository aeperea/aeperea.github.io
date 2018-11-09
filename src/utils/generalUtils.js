export const LEVELS = [
  'Bachelor / Graduate',
  'GCSE / A-Level / High School / GED',
  'Master / Post-Graduate / PhD',
  'Vocational / Diploma / Associates degree'
]

export const ONLY_DIGITS_REGEX = /^(\s*|\d+)$/

export const getObjectValues = obj => Object.keys(obj).map(el => obj[el])
