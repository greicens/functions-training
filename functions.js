// TODO: add your solutions here!

function combineWords(word1, word2){
  return word1 + word2;
}



function repeatPhrase(phrase, n){
  for(var i = 0; i < 5; i++){
    console.log(phrase);
  }
}



function toTheNthPower(number, power){
  var result = 1;
  for(var i = 0; i < power; i++){
    result *= number;
  }
  return result;
}



function areaOfACircle(radius){
  return (Math.PI * toTheNthPower(radius, 2)).toFixed(2);
}



function pythagoreanTheorem(a, b){
  return Math.sqrt((Math.pow(a, 2)) + (Math.pow(b, 2)));
}



function isXEvenlyDivisibleByY(x,y){
  return x % y === 0;
}



function countVowels(word){
  var vowels = "aeiou".split('');
  var count = 0;

  for(var i = 0; i < word.length; i++){
    if(vowels.indexOf(word[i].toLowerCase()) !== -1){
      count++;
    }
  }

  return count;
}



function findWdi(array){
  if(array.indexOf("wdi") !== -1){
    return true;
  }

  return false;
}



function printTriangle(length) {
  var star = '';

  for(var i = 0; i < length; i++){
    console.log(star += "*");
  }
}


function printPyramid(length){
  for (var i = 1; i <= length; i++) {
    var pyramid = "";

    for (var j = length - i; j > 0; j--) {
      pyramid += " ";
    }

    for (var k = 0; k < i; k++){
      pyramid += "* ";
    }

    console.log(pyramid);
  }
}
