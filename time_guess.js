function timer(){
  let msec = document.getElementById("msec");
  let sec = document.getElementById("sec");
  let min = document.getElementById("min");

  if(Number(msec.innerHTML) < 9){
    msec.innerHTML = (Number(msec.innerHTML) + 1 );
  } else {
    msec.innerHTML = 0;
    if(Number(sec.innerHTML) < 59){
      sec.innerHTML = (Number(sec.innerHTML) + 1 );
    }else{
      sec.innerHTML = 0;
      min.innerHTML = (Number(min.innerHTML) + 1 );
    }
  }
  
};

function buttonAction(){

  let timeFlag = 0;
      const startButton = document.getElementById("start_button");
      startButton.addEventListener("click",()=>{
          start = setInterval(timer, 100)
          timerFlag = 1;
      });
    
      const stopButton = document.getElementById("stop_button");
      stopButton.addEventListener("click",()=>{

          clearInterval(start);
          timerFlag = 0;
      });

      const resetButton = document.getElementById("reset_button");
      resetButton.addEventListener("click",()=>{
    
          let msec = document.getElementById("msec");
          let sec = document.getElementById("sec");
          let min = document.getElementById("min");

          msec.innerHTML = 0;
          sec.innerHTML = 0;
          min.innerHTML = 0;
      });
};

window.addEventListener("load",buttonAction);
