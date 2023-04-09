function convertCtoF(celsius) {
    let fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
  }
  
  convertCtoF(30);

  function factorialize(num) {
    let fak = 1;
    for(let i = 1; i <= num; i++){
      fak *= i
    }
    return fak;
  }
  
  factorialize(5);

  function findLongestWordLength(str) {
    return str.split(' ').map(item => item.length).sort((a, b)=>b-a)[0];
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

  function largestOfFour(arr) {
    let index = []
    for(let i = 0; i < arr.length; i++){
      index.push(Math.max(...arr[i]))
    }
    return index;
  }
  
  // largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


  function confirmEnding(str, target) {
    return str.split('').splice(-target.length, target.length).join('') === target
  }
  
  // confirmEnding("Open sesame", "sage")


  function repeatStringNumTimes(str, num) {
    let s = '';
    if(num > 0){

      for(let i = 0; i < num; i++){
        s += str
      }
      return s
    } else{
      return ''
    }
    console.log(s)
  }
  
  // repeatStringNumTimes("abc", 3);


  function truncateString(str, num) {

    return str.length > num ? str.split('').splice(0, num).join('') + '...' : str
    
  }
  
  // truncateString("A-tisket a-tasket A green and yellow basket", 8);

  function findElement(arr, func) {
    let num = undefined;
    
    for(let i = 0; i < arr.length; i++){
      if(func(arr[i])){
        num = arr[i]
        break
      }
    }
    return num;
  }
  
  findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });