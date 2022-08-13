function currentTime() {

  let date = new Date(); 

  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let millisecond = date.getMilliseconds();

  let toHour = hour + minute/60 + second/3600 + millisecond/3600000;

  let toDecimal = toHour * (1000/24);
   
  let decimalRounded = Math.trunc(toDecimal/10);

  toDecimal = toDecimal.toFixed(3);

  toDecimal = toDecimal.replace(".", " : ");

  let elem = document.getElementById("Bar");

  elem.style.width = decimalRounded  + "%";

  elem.innerHTML = decimalRounded + "%";

  document.getElementById("clock").innerText = toDecimal; 
  let t = setTimeout(function(){ currentTime() }, 1); 
}

currentTime();

