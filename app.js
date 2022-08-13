function currentTime() {
  let dateNow = new Date(); 
  let formattedDate = dateFormatter(toDecimal(dateNow));
  let elapsedPercent = Math.trunc(toDecimal(dateNow)/10); //output -> number between 0 and 100
  let elem = document.getElementById("Bar");
  elem.style.width = elapsedPercent  + "%";
  elem.innerHTML = elapsedPercent + "%";

  document.getElementById("clock").innerText = formattedDate; 
  let t = setTimeout(function(){ currentTime() }, 1); 
}

function toDecimal(date) {
  let dateToHour = date.getHours() + date.getMinutes()/60 + date.getSeconds()/3600 +  date.getMilliseconds()/3600000;
  let hourToDecimal = toHour * (1000/24);
  return hourToDecimal;
}

function dateFormatter(date) {
  date = date.toFixed(3);
  date = date.replace(".", " : ");
  return date;
}

currentTime();

