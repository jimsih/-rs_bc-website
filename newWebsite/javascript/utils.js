
function getDateFormat(date) {
  d = new Date(date);
  year = d.getFullYear();
  month = ("0" + (d.getMonth()+1)).slice(-2);
  date = ("0" + d.getDate()).slice(-2);
  hours = ("0" + d.getHours()).slice(-2);
  minutes = ("0" + d.getMinutes()).slice(-2);
  seconds = ("0" + d.getSeconds()).slice(-2);
  
  return {"year":year, "month":month, "date":date, "hours":hours, "minutes":minutes, "seconds":seconds};
}
