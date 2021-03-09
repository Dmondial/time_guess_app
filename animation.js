function animation() {
  let result = document.getElementById("result");
  console.log(result) ;
  let min = document.getElementById("min");
  let sec = document.getElementById("sec");
  let msec = document.getElementById("msec");

  if(Number(sec.innerHTML) == 10 || Number(sec.innerHTML) == 9){
    if(Number(msec.innerHTML) == 0 && Number(min.innerHTML) == 10){
      result.innerHTML = "すげー！";
    } else{
      result.innerHTML = "おしい!!";
    };
  }else {
  result.innerHTML = "全然ダメ"
  };
};

function animationAction(){
  const stopButton = document.getElementById("stop_button");
  stopButton.addEventListener("click",animation);
}
window.addEventListener("load", animationAction)