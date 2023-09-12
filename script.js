let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');


document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})

document.getElementById('btn_one').addEventListener('click', function () {

    inputWindow.value += '1';
})

document.getElementById('btn_two').addEventListener('click', function () {

    inputWindow.value += '2';
})

document.getElementById('btn_three').addEventListener('click', function () {
   
    inputWindow.value += '3';
})

document.getElementById('btn_plus').addEventListener('click', function () {
     lastOperand = inputWindow.value;
    operation = "+";
    inputWindow.value = '';
})

document.getElementById('btn_four').addEventListener('click', function () {
    inputWindow.value += '4';
})

document.getElementById('btn_five').addEventListener('click', function () {
    inputWindow.value += '5';
})

document.getElementById('btn_six').addEventListener('click', function () {
    inputWindow.value += '6';
})

document.getElementById('btn_minus').addEventListener('click', function () {
    lastOperand = inputWindow.value;
   operation = "-";
   inputWindow.value = '';
})

document.getElementById('btn_seven').addEventListener('click', function () {
    inputWindow.value += '7';
})

document.getElementById('btn_eight').addEventListener('click', function () {
    inputWindow.value += '8';
})

document.getElementById('btn_nine').addEventListener('click', function () {
    inputWindow.value += '9';
})

document.getElementById('btn_mult').addEventListener('click', function () {
    lastOperand = inputWindow.value;
   operation = "*";
   inputWindow.value = '';
})

document.getElementById('btn_run').addEventListener('click', function () {

   if (operation=='+') {
      inputWindow.value =  Number(inputWindow.value) + Number(lastOperand);
   }

   if (operation=='-') {
    inputWindow.value =  Number(lastOperand) - Number(inputWindow.value);
 }
   //inputWindow.value = '';
   operation = null;
   lastOperand = 0;
})

document.getElementById('btn_zero').addEventListener('click', function () {
    inputWindow.value += '0';
})

document.getElementById('btn_root').addEventListener('click', function () {
    lastOperand = inputWindow.value;
   operation = "√";
   inputWindow.value = '';
})

document.getElementById('btn_divide').addEventListener('click', function () {
    lastOperand = inputWindow.value;
   operation = "/";
   inputWindow.value = '';
})