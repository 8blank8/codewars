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


  function booWho(bool) {
    return typeof bool === 'boolean' ? true : false;
  }
  
  // booWho(null);


  function titleCase(str) {
    return str.split(' ').map(item=>{
      item.toLowerCase()
      return item[0].toUpperCase() + item.split('').splice(1, item.length).join('').toLowerCase()
    }).join(' ')
  }
  
  // titleCase("sHoRt AnD sToUt")


  function frankenSplice(arr1, arr2, n) {

    const res = [...arr2]
    res.splice(n, 0, ...arr1)
    return res;
  }
  
  // frankenSplice([1, 2, 3], [4, 5, 6], 1);


  function bouncer(arr) {
    let newArr = []
    arr.forEach(item => {
      if(item) return newArr.push(item)
    });
    return newArr
  }
  
  // bouncer([false, null, 0, NaN, undefined, ""])


  function getIndexToIns(arr, num) {
    const index = [...arr, num].sort((a, b)=> a-b).indexOf(num)
    return index
  }
  
  // getIndexToIns([40, 60], 50);


  function mutation(arr) {
    const str1 = arr[0].toLowerCase().split('')
    const str2 = arr[1].toLowerCase().split('')
    let res = true;
    for(let i =0; i < str2.length; i++){
      if(str1.indexOf(str2[i]) === -1) res = false
    }
    return res;
  }
  
  // mutation(["hello", "he"]);

  function chunkArrayInGroups(arr, size) {
    let newArr = []
    let index = 0
    for(let i = 0; i < arr.length; i += size){
      newArr.push([])
      for(let k = 0; k < size; k++){
        if(arr.indexOf(arr[index]) !== -1){
          newArr[newArr.length -1].push(arr[index])
        }
        index++
      }
    }
    return newArr
  }

  chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)

  