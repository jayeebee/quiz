var timeleft = 90;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("time").innerHTML = "0 sec";
    window.alert("Times Up! Game Over!")
  } else {
    document.getElementById("time").innerHTML = timeleft + " sec";
  }
  timeleft -= 1;
}, 1000);