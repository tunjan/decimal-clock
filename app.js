function currentTime() {
  var date = new Date(); 
  var hh = date.getHours();
  var mm = date.getMinutes();
  var ss = date.getSeconds();
  var ms = date.getMilliseconds();
    
  var st = (hh + mm/60 + ss/3600 + ms/3600000) * (1000/24);

  per = Math.trunc(st/10);

  st = st.toFixed(3);

  st = st.replace(".", ":");

  var time = st;

  var elem = document.getElementById("Bar");

  elem.style.width = per  + "%";

  elem.innerHTML = per + "%";

  document.getElementById("clock").innerText = time; 
  var t = setTimeout(function(){ currentTime() }, 1); 
}

currentTime();

