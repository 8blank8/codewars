// Setup
const myaArray = [];
let i = 10;

// Only change code below this line
do {
    myaArray.push(i);
    i++;
} while (i < 5)

// console.log(myArray)

function sum(arr, n) {
    // Only change code below this line
    if(n < 1){
        return 0
    } else{
        return sum(arr, n-1) + arr[n-1]
    }
    // Only change code above this line
  }

//   console.log(sum([2, 3, 4], 1))


// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
    let result = null;
    for(let i = 0; i < contacts.length; i++){
        if(contacts[i].firstName === name ){
            if(contacts[i][prop] === undefined) {
                result = 'No such property'
                break
            } else{
                result = contacts[i][prop]
                break
            }
        } else {
            result = 'No such contact'
        }
    }
 
    return result
    // Only change code above this line
  }
  
//   lookUpProfile("Harry", "likess");



function randomFraction() {

    // Only change code below this line
    console.log(
        Math.floor(Math.random() * 10)
    )
    return 0;
  
    // Only change code above this line
  }

//   randomFraction()


function randomRange(myMin, myMax) {
    // Only change code below this line
    console.log(
        Math.floor(Math.random() * (myMax - myMin + 1) + myMin)
    )
    return 0;
    // Only change code above this line
  }

//   randomRange(50, 100)

function countdown(n){
    if(n < 1){
        return []
    } else {
        const num = countdown(n -1)
        num.push(n)
        return num.sort((a, b)=> b-a)
    }
  }

// console.log(countdown(5))


function rangeOfNumbers(startNum, endNum) {
    if(endNum < startNum){
        return []
    } else{
        const arr = rangeOfNumbers(startNum ,endNum - 1)
        arr.push(endNum)
        return arr
    }
  };

// console.log(rangeOfNumbers(78, 99))


const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    const failureItems = arr.map(item =>{
        return `<li class="text-warning">${item}</li>`
    });
    // Only change code above this line
  
    return failureItems;
  }
  
//   const failuresList = makeList(result.failure);




// Only change code below this line
class Thermostat{
    constructor(temp){
        this.temp = temp
    }

    get temperature(){
        return 5/9 * (this.temp - 32)
    }
    
    set temperature(t){
        this.temp = t * 9/5 + 32
    }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

// let quoteSample = "Blueberry 3.141592653s are delicious.";
// let myRegex = /[h-s]|[2-6]/gi; // Change this line
// let res =quoteSample.match(myRegex) ; // Change this line



// let quoteSample = "3 blind mice.";
// let myRegex = /[^3aeiou]/gi; // Change this line
// let res = quoteSample.match(myRegex);

// console.log(res)


// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*?>/; // Change this line
// let res = text.match(myRegex);

// console.log(res)

// let username = "Z97";
// let userCheck = /^[a-z][a-z]+[0-9]*$/gi; // Change this line
// let res = userCheck.test(username);
// console.log(res)


// let sampleWord = "12345";
// let pwRegex = /(?=.{5,})(?=\D+\d{2})/; // Change this line
// let res = pwRegex.test(sampleWord)
// console.log(res)

// let myString = "EleanorRoosevelt";
// let myRegex = /(Franklin D.|Eleanor) Roosevelt/; // Change this line
// let res = myRegex.test(myString); // Change this line
// console.log(res)
// After passing the challenge experiment with myString and see how the grouping works

// let str = "one two three";
// let fixRegex = /(\D+)\s(\D+)\s(\D+)/; // Change this line
// let replaceText = "$3 $2 $1"; // Change this line
// let res = str.replace(fixRegex, replaceText);
// console.log(res)


// let hello = "   Hello, World!  ";
// let wsRegex = /\s\s+/g; // Change this line
// let res = hello.replace(wsRegex, ''); //
// console.log(res)


// function zeroArray(m, n) {
//     let newArray = [];
//     let row = [];
//     for (let i = 0; i < m; i++) {
//       for (let j = 0; j < n; j++) {
//         row.push(0);
//       }
//       newArray.push(row);
//       row =[]
//     }
//     return newArray;
//   }
  
//   let matrix = zeroArray(3, 2);
//   console.log(matrix);
  

//   function copyMachine(arr, num) {
//     let newArr = [];
//     while (num >= 1) {
//       // Only change code below this line
//         newArr.push([...arr])
//       // Only change code above this line
//       num--;
//     }
//     return newArr;
//   }
  
//   console.log(copyMachine([true, false, true], 2));

function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for(let i = 0; i<arr.length; i++){
        if(arr[i].indexOf(elem) === -1){
            newArr.push(arr[i])
        }
    }
    // Only change code above this line
    return newArr;
  }
  
//   console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));


  let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function getArrayOfUsers(obj) {
    // Only change code below this line
    return Object.keys(obj)
    // Only change code above this line
  }
  
//   console.log(getArrayOfUsers(users));



  let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  function addFriend(userObj, friend) {
    // Only change code below this line
   return userObj.data.friends = [...userObj.data.friends, friend]
    
    // Only change code above this line
  }
  
  console.log(addFriend(user, 'Pete'));