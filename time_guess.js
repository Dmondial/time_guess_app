

function timer(){
  let msec = document.getElementById("msec");
  let sec = document.getElementById("sec");
  let min = document.getElementById("min");

  if(Number(msec.innerHTML) < 9){
    msec.innerHTML = addZero((Number(msec.innerHTML) + 1 ));
  } else {
    msec.innerHTML = "00";
    if(Number(sec.innerHTML) < 59){
      sec.innerHTML = addZero((Number(sec.innerHTML) + 1 ));
    }else{
      sec.innerHTML = "00";
      min.innerHTML = addZero((Number(min.innerHTML) + 1 ));
    }
  }
  
};

function addZero(num){
  if(num < 10){
      ret = "0" + num;
      return ret;
  } else {
      return num;
  }
};

function buttonAction(){

  let timeFlag = 0;
      const startButton = document.getElementById("start_button");
      const stopButton = document.getElementById("stop_button");

      startButton.addEventListener("click",()=>{
          start = setInterval(timer, 100)
          console.log(startButton);
          timeFlag = 1;
          startButton.setAttribute("style","display:none");
          stopButton.removeAttribute("style");
      });
    
      stopButton.addEventListener("click",()=>{
          clearInterval(start);
          timeFlag = 0;
          stopButton.setAttribute("style","display:none");
          startButton.removeAttribute("style");
      });

      const resetButton = document.getElementById("reset_button");
      resetButton.addEventListener("click",()=>{
    
          let msec = document.getElementById("msec");
          let sec = document.getElementById("sec");
          let min = document.getElementById("min");

          msec.innerHTML = "00";
          sec.innerHTML = "00";
          min.innerHTML = "00";
      });
};

window.addEventListener("load",buttonAction);
