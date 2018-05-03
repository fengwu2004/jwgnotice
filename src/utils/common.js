export function getDateStr(timestamp) {
  
  let date = new Date(timestamp)
  
  let year = date.getFullYear()
  
  let month = date.getMonth()
  
  let day = date.getDate()
  
  let hour = date.getHours()
  
  let minute = date.getMinutes()
  
  return year + '-' + month + '-' + day + '  ' + hour + ':' + minute
}
