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

  // chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)



  // function Bird(name) {
  //   this.name = name;
  //   this.numLegs = 2;
  // }
  
  // let canary = new Bird("Tweety");
  // let ownProps = [];

  // for(key in canary){
  //   if(key in canary){
  //     ownProps.push(key)
  //   }
  // }

 
  function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  for(let key in beagle){
    if(beagle.hasOwnProperty(key)){
      ownProps.push(key)
    } else {
      prototypeProps.push(key)
    }
  }

  // console.log(prototypeProps)


  function solution(number){
    let sum = 0
    for(let i = 1; i < number; i++){
      if(i % 3 === 0 || i % 5 === 0) sum += i
    }
    return sum
  }
  // console.log(solution(10))

  function findOdd(A) {
    const obj ={}
    let res
    A.forEach(item => {
      obj[item] = obj[item] + 1 || 1
    })

  for(let key in obj) {
    if(obj[key] % 2 === 1) res = key
  }
    return +res;
  }
  // console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))

  function digitalRoot(n) {
    if(n < 10){
      return n
    }else{
       let sum = 0
       String(n).split('').forEach(item=> sum += +item)
       return digitalRoot(sum)
    }
  }

  // console.log(digitalRoot(16))

  function createPhoneNumber(numbers){
    let phoneNumber = '('

    numbers.forEach((item, i)=>{
      switch(i){
        case 2:
          phoneNumber += `${item}) `
          break
        case 5:
          phoneNumber += `${item}-`
          break
        default:
          phoneNumber += `${item}`
          break
      }
    })

    return phoneNumber
  }

  // console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))


  var countBits = function(n) {
   return n === 0 ? 0 : n.toString(2).match(/1/g).join('').length
  };

  // console.log(countBits(0))

  function findOutlier(integers){
    let odd =[]
    let even=[]
    for(let i = 0; i < integers.length; i++){
      if(integers[i] % 2 === 0) {
        odd.push(i)
      }else{
        even.push(i)
      }
    }

    if(odd.length > even.length) {
      return integers[even[0]]
    }else{
      return integers[odd[0]]
    }
  }

  // console.log(findOutlier([2,6,8,10,3]))


  function duplicateCount(text){
    const arr = text.split('')
    const count = {}
    let res = 0

    arr.forEach(item=>{
      count[item.toLowerCase()] = count[item.toLowerCase()] + 1 || 1
    })

    for(let key in count){
      if(count[key] > 1) res += 1
    }

    return res
  }

  // console.log(duplicateCount("Indivisibilities"))

  function duplicateEncode(word){
    const arr = word.toLowerCase().split('')
    const count = {}
    let res = ''
    arr.forEach(item => count[item] = count[item] + 1 || 1)

    for(let i = 0; i < arr.length; i++){
        count[arr[i]] > 1 ? res += ')' : res += '('
    }

    return res
}

// console.log(duplicateEncode("recede"))


function isValidWalk(walk) {
  let minutes = 0
  let ver = 0
  let gor = 0

  for(let i = 0; i < walk.length; i++){
    minutes++
    switch(walk[i]){
      case 'n':
        ver++
        break
      case 's':
        ver--
        break
      case 'w':
        gor++
        break
      case 'e':
        gor--
        break
    }
  }

  if(minutes === 10 && ver === 0 && gor === 0){
    return true
  } else{
    return false
  }
}

// console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))


function toCamelCase(str){
  return str.replace(/_|-/g, ' ').split(' ').map((item, i) => {
    if(i != 0){
      return item[0].toUpperCase() + item.slice(1)
    }else{
      return item
    }
  }).join('')
}

// console.log(toCamelCase("the_stealth-warrior"))

var uniqueInOrder=function(iterable){
  let arr
  typeof iterable === 'string' ? arr = iterable.split('') : arr = iterable
  return arr.filter((item, i) =>item != iterable[i + 1])
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))