type Output = {
  year: number
  month: number
  day: number
}

export function getNowYMD(): Output{
  const dateNow = new Date().toLocaleDateString()

  const [day, month, year] = dateNow.split('/')

  return {
    year: Number(year),
    month: Number(month),
    day: Number(day),
  }
}
