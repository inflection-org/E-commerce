const LocalTime = (date) => {
  var gmtDate = new Date(date)
  var localTimeZoneOffset = new Date().getTimezoneOffset()

  gmtDate.setMinutes(gmtDate.getMinutes() - localTimeZoneOffset)

  // Example: Display the adjusted date in a specific format
  var localDateString = gmtDate.toLocaleString()

  return localDateString
}
export default LocalTime
