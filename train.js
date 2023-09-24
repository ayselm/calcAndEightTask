// orderNumberField.innerText = orderNumber;
// answerField.innerText = `Вы загадали число ${answerNumber}?`;


//       const phraseRandom = Math.round(Math.random());
//             const answerPhrase = (phraseRandom === 1) ?
//                 `Вы загадали неправильное число!\n\u{1F914}` :
//                 `Я сдаюсь..\n\u{1F92F}`;
//             answerField.innerText = answerPhrase;





//             const winRandom = Math.round(Math.random());
//             const winPhrase = (winRandom === 1) ?
//                 `Я так и знал \n\u{1F914}` :
//                 `А когда не угадывали? \n\u{1F914}`;
//             answerField.innerText = winPhrase;




//             document.getElementById('btnEqual').addEventListener('click', function () {
//                 if (gameRun){
//                     const winRandom = Math.round(Math.random());
//                     const winPhrase = (winRandom === 2) ?
//                         `Я так и знал \n\u{1F914}` :
//                         `Это было легко \n\u{1F914}` ;
//                         `А когда не угадывали? \n\u{1F914}`;
//                     answerField.innerText = winPhrase;
//                     gameRun = false;
//                 }
//             })

//             document.getElementById('btnEqual').addEventListener('click', function () {
//                 const winPhrase = [
//                     `Я так и знал \n\u{1F914}`,
//                     `Это было легко \n\u{1F914}`,
//                     `А когда не угадывали? \n\u{1F914}`
//                 ];
//                 if (gameRun){
//                     const winRandom = Math.round(Math.floor(Math.random() * phrases.length));
//                     const winPhrase = phrases[winRandom];
//                     answerField.innerText = winPhrase;
//                     gameRun = false;
            
//                 }
//             })




// function getRandomPhrase(phrases) {
//   const randomIndex = Math.floor(Math.random() * phrases.length);
//   return phrases[randomIndex];
// }

// document.getElementById("btnRetry").addEventListener("click", function () {
//   minValue = parseInt(prompt("Минимальное знание числа для игры", "0"));
//   maxValue = parseInt(prompt("Максимальное знание числа для игры", "100"));
//   orderNumber = 0;
//   gameRun = true;
//   answerNumber = Math.floor((minValue + maxValue) / 2);
//   orderNumberField.innerText = orderNumber;
//   const questionPhrase = getRandomPhrase(questionPhrases).replace("...", answerNumber);
//   answerField.innerText = questionPhrase;
// });

// document.getElementById("btnOver").addEventListener("click", function () {
//   if (gameRun) {
//     if (minValue === maxValue) {
//       const losePhrase = getRandomPhrase(losePhrases);
//       answerField.innerText = losePhrase;
//       gameRun = false;
//     } else {
//       minValue = answerNumber + 1;
//       answerNumber = Math.floor((minValue + maxValue) / 2);
//       orderNumber++;
//       orderNumberField.innerText = orderNumber;
//       const questionPhrase = getRandomPhrase(questionPhrases).replace("...", answerNumber);
//       answerField.innerText = questionPhrase;
//     }
//   }
// });

// document.getElementById("btnLess").addEventListener("click", function () {
//   if (gameRun) {
//     if (minValue === maxValue) {
//       const losePhrase = getRandomPhrase(losePhrases);
//       answerField.innerText = losePhrase;
//       gameRun = false;
//     } else {
//       maxValue = answerNumber - 1;
//       answerNumber = Math.floor((minValue + maxValue) / 2);
//       orderNumber++;
//       orderNumberField.innerText = orderNumber;
//       const questionPhrase = getRandomPhrase(questionPhrases).replace("...", answerNumber);
//       answerField.innerText = questionPhrase;
//     }
//   }
// });

// document.getElementById("btnEqual").addEventListener("click", function () {
//   if (gameRun) {
//     const winPhrase = getRandomPhrase(winPhrases);
//     answerField.innerText = winPhrase;
//     gameRun = false;
//   }
// });




// let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
// let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
// alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
// let answerNumber  = Math.floor((minValue + maxValue) / 2);
// let orderNumber = 1;
// let gameRun = true;

// const orderNumberField = document.getElementById('orderNumberField');
// const answerField = document.getElementById('answerField');

// orderNumberField.innerText = orderNumber;
// answerField.innerText = `Вы загадали число ${answerNumber }?`;

// document.getElementById('btnRetry').addEventListener('click', function () {
//     minValue = 0;
//     maxValue = 100;
//     orderNumber = 0;
// })

// document.getElementById('btnOver').addEventListener('click', function () {
//     if (gameRun){
//         if (minValue === maxValue){
//             const phraseRandom = Math.round(Math.random());
//             const answerPhrase = (phraseRandom === 1) ?
//                 `Вы загадали неправильное число!\n\u{1F914}` :
//                 `Я сдаюсь..\n\u{1F92F}`;

//             answerField.innerText = answerPhrase;
//             gameRun = false;
//         } else {
//             minValue = answerNumber  + 1;
//             answerNumber  = Math.floor((minValue + maxValue) / 2);
//             orderNumber++;
//             orderNumberField.innerText = orderNumber;
//             const questionRandom = Math.round(Math.random());
//             const questionPhrase = (questionRandom === 1) ?
//                 `Вы загадали число ${answerNumber}?` :
//                 `Наверное, это число ${answerNumber}?`;
//             answerField.innerText = questionPhrase;
//         }
//     }
// })

// document.getElementById('btnLess').addEventListener('click', function () {
//     if (gameRun){
//         if (minValue === maxValue){
//             const phraseRandom = Math.round(Math.random());
//             const answerPhrase = (phraseRandom === 1) ?
//                 `Вы загадали неправильное число!\n\u{1F914}` :
//                 `Я сдаюсь..\n\u{1F92F}`;
//             answerField.innerText = answerPhrase;
//             gameRun = false;
//         } else {
//             maxValue = answerNumber - 1;
//             answerNumber = Math.floor((minValue + maxValue) / 2)
//             orderNumber++;
//             orderNumberField.innerText = orderNumber;
//             const questionRandom = Math.round(Math.random());
//             const questionPhrase = (questionRandom === 1) ?
//                 `Вы загадали число ${answerNumber}?` :
//                 `Наверное, это число ${answerNumber}?`;
//             answerField.innerText = questionPhrase;
//         }
//     }
// }
// )


// document.getElementById('btnEqual').addEventListener('click', function () {
//     if (gameRun){
//         const winRandom = Math.round(Math.random());
//         const winPhrase = (winRandom === 1) ?
//             `Я так и знал \n\u{1F914}` :
//             `Это было легко \n\u{1F914}` ;
//             `А когда не угадывали? \n\u{1F914}`;
//         answerField.innerText = winPhrase;
//         gameRun = false;
//     }
// })



// document.getElementById('btnRetry').addEventListener('click', function () {
//   minValue = parseInt(prompt('Минимальное значение числа для игры', '0'));
//   maxValue = parseInt(prompt('Максимальное значение числа для игры', '100'));
//   orderNumber = 1;
//   answerNumber = Math.floor((minValue + maxValue) / 2);
//   gameRun = true;
//   orderNumberField.innerText = orderNumber;
//   orderNumberField.innerText = 'Вы загадали число ${answerNumber}?';
// });



// // база 

// // let minValue = parseInt(prompt('Минимальное знание числа для игры','0')) || 0;
// // let maxValue = parseInt(prompt('Максимальное знание числа для игры','100')) || 100;
// // if (minValue < -999) {
// //     minValue = -999;
// // }
// // if (maxValue > 999) {
// //     maxValue = 999;
// // }
// // alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
// // let answerNumber  = Math.floor((minValue + maxValue) / 2);
// // if (answerNumber.length < 20){
// //     answerNumber 
// // }
// // let orderNumber = 1;
// // let gameRun = true;



// const orderNumberField = document.getElementById('orderNumberField');
// const answerField = document.getElementById('answerField');


// orderNumberField.innerText = orderNumber;
// answerField.innerText = `Вы загадали число ${ answerNumber }?`;

// const questionPhrases = [
//     "Да это легко! Ты загадал ...",
//     "Наверное, это число ...",
//     "Может быть, это число ..."
// ];
  
// const winPhrases = [
//     "Я так и знал  \n\u{1F914}",
//     "Это было легко",
//     "А когда не угадывали?"
// ];
  
// const losePhrases = [
//     "Вы загадали неправильное число! \n\u{1F914}",
//     "Я сдаюсь.. \n\u{1F92F}",
//     "Мне плохо"
// ];

// function getRandomPhrase(phrases) {
//     const randomIndex = Math.floor(Math.random() * phrases.length);
//     return phrases[randomIndex];
// }
  
  

// document.getElementById('btnOver').addEventListener('click', function () {
//         if (minValue === maxValue){
//             const phraseRandom = Math.round(Math.random());
//             const answerPhrase = (phraseRandom === 1) ?
//                 `Вы загадали неправильное число! \n\u{1F914}` :
//                 `Я сдаюсь.. \n\u{1F92F}`;

//             answerField.innerText = answerPhrase;
//             gameRun = false;
//         } else {
//             minValue = answerNumber  + 1;
//             answerNumber  = Math.floor((minValue + maxValue) / 2);
//             orderNumber++;
//             orderNumberField.innerText = orderNumber;
//             const questionPhrase = getRandomPhrase(questionPhrases).replace("...", answerNumber);
//             answerField.innerText = questionPhrase;      
//         }
// })

// document.getElementById('btnLess').addEventListener('click', function () {
//         if (minValue === maxValue){
//             const phraseRandom = Math.round(Math.random());
//             const answerPhrase = (phraseRandom === 1) ?
//                 `Вы загадали неправильное число! \n\u{1F914}` :
//                 `Я сдаюсь.. \n\u{1F92F}`;
//             answerField.innerText = answerPhrase;
//             gameRun = false;
//         } else {
//             maxValue = answerNumber - 1;
//             answerNumber = Math.floor((minValue + maxValue) / 2)
//             orderNumber++;
//             orderNumberField.innerText = orderNumber;
//             const questionPhrase = getRandomPhrase(questionPhrases).replace("...", answerNumber);
//             answerField.innerText = questionPhrase;      
//         }
// }
// )


// document.getElementById('btnEqual').addEventListener('click', function () {
//     if (gameRun){
//         const winPhrase = getRandomPhrase(winPhrases);
//         answerField.innerText = winPhrase;
//         gameRun = false;
//     } 
// })



// document.getElementById('btnRetry').addEventListener('click', function () {
//     minValue = parseInt(prompt('Минимальное значение числа для игры', '0'));
//     maxValue = parseInt(prompt('Максимальное значение числа для игры', '100'));
//     if (minValue < -999) {
//         minValue = -999;
//     }
//     if (maxValue > 999) {
//         maxValue = 999;
//     }
//     orderNumber = 1;
//     answerNumber = Math.floor((minValue + maxValue) / 2);
//     gameRun = true;
//     orderNumber++;
//     orderNumberField.innerText = orderNumber;
//     const questionPhrase = getRandomPhrase(questionPhrases).replace("...", answerNumber);
//     answerField.innerText = questionPhrase; 
//   });


//   function getRandomPhrase(phrases, number) {
//     const randomIndex = Math.floor(Math.random() * phrases.length);
//     let questionPhrase;
//     if (number.toString().length <= 20) {
//         questionPhrase = phrases[randomIndex].replace("...", numberTexts[number]);
//     } else {
//         questionPhrase = phrases[randomIndex].replace("...", number);
//     }
//     return questionPhrase;
// }

// document.getElementById('btnEqual').addEventListener('click', function () {
//     if (gameRun){
//         let winPhrase;
//         if (answerNumber.toString().length <= 20) {
//             winPhrase = getRandomPhrase(winPhrases, numberTexts[answerNumber]);
//         } else {
//             winPhrase = getRandomPhrase(winPhrases, answerNumber);
//         }
//         answerField.innerText = winPhrase;
//         gameRun = false;
//     } 
// })
  

let n = parseInt(prompt(' знание n','0')) || 0;
const numberTexts = [
    'ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять',
  ];
  

const numberTextsTens = [
    'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят',
    'восемьдесят', 'девяносто',
]

const numberTextsHundreads = [
    'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот',
    'семьсот', 'восемьсот', 'девятьсот'
]

const numberTexts1Ten = [
    'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать',
    'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать',
]

function totext(n) {
    let ntext='';
  if( n.length ==1) {
    ntext = numberTexts[n]
  }
  if( n.length ==2) {
   
    if (n >19) { /* n 34 */
        if (n[1]>0){ntext[1] = numberTexts[n[1]]}
        ntext[0] = numberTextsTens[n[0] - 2]
    }
    else { // 10 11.  12.  13.  19
        ntext[0] = numberTexts1Ten[n[1]]
    }
  }
    if (n.length ==3) {
    if (999 > n > 99) { // 100.  500 '546'[1]= 4
        ntext[0] = numberTextsHundreads[n[0] - 1]
        if (n[1]==1) {
            ntext[1] = numberTexts1Ten[n[1]]
        }
        else {
            ntext[1] = numberTextsTens[n[1] - 2]
            ntext[2] = numberTexts[n[0]]
        }
    }
    }
    return ntext;
}

console.log(totext(n))