export class DateParser {
  /**
   * Return a new Date object from a string in the format dd/mm/yyyy
   * @param date
   * @returns string
   */
  static format(date: Date): string {
    return `${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}/${
      date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    }/${date.getFullYear()}`
  }

  /**
   * Return a new Date object from a string in the format dd/mm/yyyy
   * @param stringDate
   * @returns Date
   */
  static parse(stringDate: string): Date {
    const re = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/
    if (!re.test(stringDate)) {
      throw new Error('Invalid date format, expected dd/mm/yyyy.')
    }
    const [day, month, year] = stringDate.split('/')
    return new Date(Number(year), Number(month) - 1, Number(day))
  }
}
