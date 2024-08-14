import { getNowYMD } from './getNowYMD'

export function getYearValid() {
  const years = []
  const { year } = getNowYMD()

  for (let i = year; i >= 2023; i--) {
    years.push(i)
  }

  return years
}
