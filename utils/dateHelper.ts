export const formatDeadline = (start: string, end: string) => {
  const startDate = new Date(start).toLocaleDateString('in-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const endDate = new Date(end).toLocaleDateString('in-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const [startDay, startMonth, startYear] = startDate.split(' ')
  const [endDay, endMonth, endYear] = endDate.split(' ')

  if (startYear !== endYear) {
    // ex. 28 desember 2022 - 5 Januari 2023
    return `${startDate} - ${endDate}`
  } else if (startMonth === endMonth) {
    // ex. 5 - 11 Desember 2022
    return `${startDay} - ${endDay} ${endMonth} ${endYear}`
  } else {
    // ex. 28 Januari - 4 Februari 2023
    return `${startDay} ${startMonth} - ${endDay} ${endMonth} ${endYear}`
  }
}

export const replaceSlashWithDash = (date: string) => {
  return date.replace(/\//g, '-')
}

export const isInThePast = (date: Date) => {
  const today = new Date()

  today.setHours(0, 0, 0, 0)

  return date < today
}

export const isMoreThanAMonthAgo = (date: Date) => {
  const oneMonthAgo = new Date()
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1)
  oneMonthAgo.setHours(0, 0, 0, 0)

  return date < oneMonthAgo
}
