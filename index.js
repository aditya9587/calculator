// const buttons = [...document.getElementsByClassName("number")];
// // const buttons = document.getElementsByClassName("number");
const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
  button.addEventListener("click", function() {
    const value = this.getAttribute('data-value');
    handelButtonclick(value);
  });
});

function handelButtonclick(value){
  if(value === 'reset'){
    clearDisplay();
  }else if(value === 'equal'){
    displaySum();
  }else if(value ==='del') {
    removeOne();
  }
  else{
    appendToDisplay(value);
  }
}

function clearDisplay(){
  document.getElementById("value-box").value="0";
}
function removeOne(){
  const display = document.getElementById('value-box');
    display.value = display.value.slice(0,-1);
}
function appendToDisplay(value){
  const display = document.getElementById('value-box');
  if (display.value === '0'){
    display.value = value;
  }
  else{
    display.value += value;
  }
}
 
function displaySum(){
  const display = document.getElementById('value-box');
  try{
    display.value = eval(display.value);
  }catch(error){
    display.value = "error";
  }
}