
function betweenExtremes(numbers) {
    const sortArray = numbers.sort((a, b)=> a-b)
    return sortArray[sortArray.length - 1] - sortArray[0]
}



function high(x){

    const alh = 'abcdefjhijklmnopqrstuvwxyz'.split('');
    const arrayX = x.split(' ')
    let arraBal = []

    arrayX.forEach(element => {
        let num = 0;
        const arrayElem = element.split('')
        arrayElem.forEach(item=>{
            num += alh.indexOf(item) + 1;
        })

        arraBal.push({title: element, bal: num})
    })
    
    const result = arraBal.sort((a, b)=>a.bal - b.bal)
    //  console.log( result[result.length -1].title)
    console.log(result)
}


function solution(string) {
    const arrayString = string.split('')

    const result = arrayString.map(item=>{
        if(item === item.toUpperCase()){
            const index = item.indexOf()
            return ` ${item}`
        }
        return item
    })

    return result.join('')
}

// solution('privetMirPor')

function cakes(recipe, available) {
    const array = [];
    for (key in recipe){

        if(available[key] === undefined || available[key] === 0){
            array.push(0)
            break
        }

        let num = Math.floor(available[key] / recipe[key])

        array.push(num)
    }

    return Math.min(...array)
}

// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 


function humanReadable (seconds) {
    const addZero =(num)=>{
     return num < 10 ? `0${num}` : num
    }
    const hour = addZero(Math.floor(seconds / 3600))
    const minute = addZero(Math.floor(seconds / 60 % 60))
    const second = addZero(Math.floor(seconds % 60))

    return `${hour}:${minute}:${second}`
  }


//   humanReadable(324405)


function narcissistic(value) {
    const arr = String(value).split('')
    let sum = 0;
    arr.forEach(item=> sum += Math.pow(+item, arr.length))
    return value === sum 
}


// narcissistic(154)

function sumEvenNumbers(input) {
    let sum = 0;
    input.map(item => {
        if(item % 2 === 0) sum += item
    })
    return sum
}

// sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])


function keepOrder(ary, val) {
    ary.push(val)
    return ary.sort((a, b)=> a-b).indexOf(val)
}

// keepOrder([1, 2, 3, 4, 7], 5)


function giveChange(amount) {
    const arr = []
    let ost = amount
    const s = (index, sum, amoun)=>{
        ost = amoun % sum
        arr[index] = Math.floor((amoun - ost) / sum)
    }
    
    s(5, 100, ost)
    s(4, 50, ost)
    s(3, 20, ost)
    s(2, 10, ost)
    s(1, 5, ost)
    s(0, 1, ost)

    return arr
}

// giveChange(365)


function disemvowel(str) {
    const glas = ['A', 'E', 'I', 'O', 'U']
    return str.split('').map(item => {
        if(glas.indexOf(item.toUpperCase()) > -1) return
        return item
    }).join('');
}

// disemvowel('sim to night and shool')



function consecutive(arr) {
    const newArr = arr.sort((a, b)=> a-b)
    let num = 0;
    for(let i = newArr[0]; i <= newArr[newArr.length - 1]; i++){
        if(newArr.indexOf(i) === -1) num++
    }
    return num
}

// consecutive([1,2,3,4])


function alphabetPosition(text) {
    const alh = 'abcdefghijklmnopqrstuvwxyz'.split('')
    arr = text.split('').map(item => {
        let index = alh.indexOf(item.toLowerCase())
        if(index >= 0) return index + 1
    }).filter(item => item !== undefined).join(' ')
    console.log(arr)
    return text;
}

// alphabetPosition("The sunset sets at twelve o' clock.")


function order(words){
    const arr = words.split(' ')
    const result = []

    for(let i = 0; i < arr.length; i++){
        const a = arr[i].split('')

        for(let k = 0; k < a.length; k++){
             if(typeof +a[k] == 'number'){
                result[+a[k]-1] = arr[i]
             }
        }
    }

    return result.join(' ')
}

// order("is2 Thi1s T4est 3a")



function longest(s1, s2) {
    const arr = []

    const addSymToArray = (str)=>{
        str.split('').map(item => {
            if(arr.indexOf(item) === -1)  arr.push(item)
        })
    }

    addSymToArray(s1)
    addSymToArray(s2)

   return arr.sort().join('')
}

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b)


function litres(time) {
    return Math.floor(time*0.5);
}

// litres(12.3)

function findUniq(arr) {
       const num = arr.filter((item, i, items)=>{
            return items.indexOf(item) !== i
        })

       return arr.filter(item => item !== num[0])[0]
}
  
// findUniq([ 0, 1, 0 ])


function areYouPlayingBanjo(name) {
    return name[0].toUpperCase() === 'R' ? `${name} plays banjo` : `${name} does not play banjo`;
}

// areYouPlayingBanjo("Ringo")


function openOrSenior(data){
    return data.map(item => {
        if(item[0] >= 55 && item[1] > 7) return "Senior"
        return "Open"
    })
}

// openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])

function validatePIN (pin) {
    if(!!Number(pin) && (pin.length === 6 || pin.length === 4)) return true 
    return false
}


// validatePIN("143a")


function getMiddle(s){
return s.length % 2 == 0 ? `${s[s.length/2 -1]}${s[s.length/2]}` : s[Math.round(s.length/2 - 1)]
}


// getMiddle("tesast")


function squareSum(numbers){
    let sum = 0
    numbers.forEach(item => sum += Math.pow(item, 2))
    return sum
}

// squareSum([1,2])

function greet(name){
    return `Hello, ${name} how are you doing today?`
}

// greet("Ryan")

function nbYear(p0, percent, aug, p) {
    let nas = p0
    let year = 0
    while(nas <= p){
        nas =  nas + nas * (percent / 100) + aug
        year++
    }

    return year
}

// nbYear(1500, 5, 100, 5000)


function findShort(s){
    console.log(
        s.split(' ').map(item => item.length).sort((a, b)=> a-b)[0]
    )
}

// findShort("bitcoin take over the world maybe who knows perhaps")

function isIsogram(str){
    const arr = str.toLowerCase().split('').filter((item, i, items)=>{
           return items.indexOf(item) !== i
    })
    return arr.length < 1
}

// isIsogram("moOse")

function booleanToString(b){
    return String(b)
  }

// booleanToString(false)

function paperwork(n, m) {
    console.log(n > 0 || m > 0 ? n * m  : 0)
    return 
}

// paperwork(-5, -5)

function greet(){
    return "hello world!"
}

function digitize(n) {
       return String(n).split('').map(item=>+item).reverse()
}
// digitize(35231)

class SmallestIntegerFinder {
    findSmallestInt(args) {
       return args.sort((a, b)=> a-b)[0]
    }
  }
// const sif = new SmallestIntegerFinder()
//   sif.findSmallestInt([78,56,232,12,8])

function past(h, m, s){
    return (h*3600 + m * 60 + s ) * 1000
}

// past(0,1,1)

function invert(array) {
       return array.map(item => item > 0 ? -item : item * -1)
 }

//  invert([1,-2,3,4,5])

const stringToNumber = function(str){
    return +str;
  }

//   stringToNumber("1234")

function XO(str) {
    let x = 0
    let o = 0
    str.split('').forEach(item => {
        if(item.toLowerCase() === 'x') x++
        if(item.toLowerCase() === 'o') o++
    })
    console.log(x === o)
    return x === o
}

// XO('xo')


function printerError(s) {
    const alh = 'abcdefghijklm'
    let err = 0

    s.split('').forEach(item => {
        if(alh.indexOf(item) < 0) err++
    })
    
    return `${err}/${s.length}`
}

// printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")


function grow(x){
    let sum = 1;
    x.forEach(i => sum *= i)
    return sum
}

// grow([1, 2, 3])

function filter_list(l) {
    return l.filter(item => typeof item === 'number')
}

// filter_list([1,2,'a','b'])

function DNAtoRNA(dna) {
       return dna.split('').map(item => {
            if(item === 'T') return 'U'
            return item
        }).join('')
}

// DNAtoRNA("GCAT")

function accum(s) {
    return s.split('').map((item, i)=>{
            return item.toUpperCase() + item.repeat(i).toLowerCase()
        }).join('-')
}

// accum("ZpglnRxqenU")

function makeUpperCase(str) {
    return str.toUpperCase()
}

// makeUpperCase("hello")




function solution(str){
    const arr = str.split('')

    let res =[]

    for(let i = 0; i <arr.length-1; i++){
        // console.log(oneStr + ' ' + twoStr + ` ${i}`)
        console.log(i)
        if(i % 2 === 0) {
            res.push(arr[i] + arr[i+1])
        }else if(i === arr.length -2) {
            res.push(`${arr[i+1]}_`)
        } 
       
        
        
    }
    return res
}
// solution("abcdefg")

function pigIt(str){
    const strArr = str.split(' ')
    
    return strArr.map(item=>{
            if(item === '!' || item === '?') return item
            return item.split('').splice(1, item.length -1).join('')+item[0]+'ay'
        }).join(' ')
  }

//   pigIt('Pig latin is cool')

var summation = function (num) {
    let sum = 0
    for(let i = 1; i <= num; i++){
        sum+=i
    }
    return sum
  }

  const binaryArrayToNumber = arr => {
    return parseInt(+arr.join(''), 2)
  };

//   binaryArrayToNumber([0,0,1,0])

function abbrevName(name){
    const arr = name.split(' ')
    return `${arr[0][0].toUpperCase()}.${arr[1][0].toUpperCase()}`

}

// abbrevName("Sam Harris")


function genPasswd(key, str, pwLen){
    let arr = []
    let k = key
    let s = str.split('').reverse()
    let num = 0
    let index = key;
    for(let i = 1; i <= pwLen; i++){
        if(num % 2 === 0){
            arr.push(k)
            k++
            if(k > 9){
                k = 0
            }
            if(index === s.length){
                index = 0
            }
            num++
        }else if(num % 2 === 1){
            arr.push(s[index])
            num++
            index++ 
        }
    }   
    console.log(arr.join(''))
    return arr.join('')
  }
// genPasswd(8, '0123456789#', 15)


function zero(mat) {
   return number(0, mat)
  }
  function one(mat) {
    return number(1, mat)
  }
  function two(mat) {
    return number(2, mat)
  }
  function three(mat) {
    return number(3, mat)
  }
  function four(mat) {
    return number(4, mat)
  }
  function five(mat) {
    return number(5, mat)
  }
  function six(mat) {
    return number(6, mat)
  }
  function seven(mat) {
    return number(7, mat)
  }
  function eight(mat) {
    return number(8, mat)
  }
  function nine(mat) {
    return number(9, mat)
  }

  function number(n, mat){
    if(mat == undefined){
        return n
    }
    return Math.floor(eval(`${n}${mat}`))
  }
//   
  function plus(func) {
    return '+' + func
  }
  function minus(func) {
    return '-' + func
  }
  function times(func) {
    return '*' + func
  }
  function dividedBy(func) {
    return '/' + func
  }

//   nine(times(eight()))



  
