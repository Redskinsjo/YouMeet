export const formatDate = (dateMs: any) => {
  const date = new Date(dateMs)
  const year = String(date.getFullYear())
  const month =
    date.getMonth() < 10 ? '0' + date.getMonth() : String(date.getMonth())
  const day = String(date.getDate())
  return year + month + day
}
