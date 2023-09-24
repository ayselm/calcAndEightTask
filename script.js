let minValue = parseInt(prompt('Минимальное знание числа для игры','0')) || 0;
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100')) || 100;
minValue = (minValue < -999) ? -999 : minValue;
maxValue = (maxValue > 999) ? 999 : maxValue;
minValue = (minValue == NaN) ? 0 : minValue;
maxValue = (maxValue == NaN) ? 100 : maxValue;

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let answerText;
let orderNumber = 1;
let gameRun = true;



const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');


orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${ answerNumber }?`;

const questionPhrases = [
    "Да это легко! Ты загадал ...",
    "Наверное, это число ...",
    "Может быть, это число ..."
];
  
const winPhrases = [
    "Я так и знал  \n\u{1F914}",
    "Это было легко",
    "А когда не угадывали?"
];
  
const losePhrases = [
    "Вы загадали неправильное число! \n\u{1F914}",
    "Я сдаюсь.. \n\u{1F92F}",
    "Мне плохо"
];

function getRandomPhrase(phrases) {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
}
  
  

document.getElementById('btnOver').addEventListener('click', function () {
        if (minValue === maxValue){
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число! \n\u{1F914}` :
                `Я сдаюсь.. \n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            answerText = totext(answerNumber);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const questionPhrase = getRandomPhrase(questionPhrases).replace("...", answerText);
            answerField.innerText = questionPhrase;      
        }
})

document.getElementById('btnLess').addEventListener('click', function () {
        if (!gameRun){
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число! \n\u{1F914}` :
                `Я сдаюсь.. \n\u{1F92F}`;
            answerField.innerText = answerPhrase;
            console.log('if',gameRun, minValue, maxValue, answerNumber); 

        } else {
            console.log('1 else', gameRun, minValue, maxValue, answerNumber); 

                if((minValue +1) == maxValue){
                    gameRun = false;
                }
                else {
                maxValue = answerNumber - 1;
                answerNumber = Math.floor((minValue + maxValue) /2)
                answerText = totext(answerNumber);
                orderNumber++;
                orderNumberField.innerText = orderNumber;
                const questionPhrase = getRandomPhrase(questionPhrases).replace("...", answerText);
                answerField.innerText = questionPhrase;  
                console.log('2 else',gameRun, minValue, maxValue, answerNumber); 
                }
       }
}
)


document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const winPhrase = getRandomPhrase(winPhrases);
        answerField.innerText = winPhrase;
        gameRun = false;
    } 
})



document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt('Минимальное значение числа для игры', '0'));
    maxValue = parseInt(prompt('Максимальное значение числа для игры', '100'));
    if (minValue < -999) {
        minValue = -999;
    }
    if (maxValue > 999) {
        maxValue = 999;
    }
    orderNumber = 1;
    answerNumber = Math.floor((minValue + maxValue) / 2);
    gameRun = true;
    orderNumber++;
    orderNumberField.innerText = orderNumber;
    const questionPhrase = getRandomPhrase(questionPhrases).replace("...", answerNumber);
    answerField.innerText = questionPhrase; 
  });


  //let n = prompt(' знание n','0');
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
      let ntext;
    console.log(n)
    n = String(n);
      if( n.length ==1) {
          ntext = numberTexts[n]
      }
      if( n.length ==2) {
          console.log(n, n.length, '==2')
          if (n >19) { /* n 34 */
              console.log(n, n.length, '>19')
              ntext = numberTextsTens[n[0] - 2]
              
              if (n[1]>0){
                  ntext += ' ' + numberTexts[n[1]]
              }
              
              
          }
          else { // 10 11.  12.  13.  19
              console.log(n, n.length, '<19')
              ntext = numberTexts1Ten[n[1]]
          }
      }
      if (n.length ==3) {    
          console.log(n, n.length)
          if ((999 >= n) && (n>99)) { // 100.  500 '546'[1]= 4
              ntext = numberTextsHundreads[n[0] - 1]
              console.log(ntext, n[0], numberTextsHundreads[n[0] - 1])
              if (n[1]==1) {
                  ntext += ' ' + numberTexts1Ten[n[2]]
              }
              else {
                  ntext += ' ' + numberTextsTens[n[1] - 2]
                  ntext += ' ' + numberTexts[n[2]]
              }
          }
      } 
      if (ntext.length > 20) {
        ntext=n
     }
      return ntext;
  }
  
  
 
  