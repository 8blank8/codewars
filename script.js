function likes(names) {
    let str;
    switch(names.length) {
        case 0:
            str ='no one likes this' 
            break
        case 1:
            str = `${names[0]} likes this`
            break
        case 2:
            str = `${names[0]} and ${names[1]} like this`
            break
        case 3:
            str = `${names[0]}, ${names[1]} and ${names[2]} like this`
            break
        default:
            str = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
            break
    }   
    return str
}

//   likes(['Alex', 'Jacob', 'Mark'])

function sumArray(array) {
    if(!Array.isArray(array)){
        return 0
    }
    const arr = array.sort((a, b)=> a-b)
    let sum = 0

    for(let i = 1; i <array.length - 1; i++){
        sum+=arr[i]
    }

    return sum
}

sumArray(null)

function getSum(a, b){
    const arr = [a, b].sort((a,b)=>b-a)
    let sum = 0
    for(let i = arr[0];i <= arr[1]; i++){
        sum += i 
    }
    return sum
}

// getSum(2, 2)

function sortArray(array) {
    const indexArr = []
    const oddArray = []

    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 !== 0){
            indexArr.push(i)
            oddArray.push(array[i])
        }
    }

    const a = oddArray.sort((a, b)=> a-b)

    for(let i = 0; i < indexArr.length; i++){
        array[indexArr[i]] = a[i]
    }
    console.log(array)
    return array
}

//  sortArray([13, -15, 15, -31, 23, 35])/

 function arrayDiff(a, b) {
    let arr_a = a;
    let arr_b = b;

    if(a.length === 0){
        return []
    } else if(b.length === 0){
        return a
    }
    for(let i = 0; i < arr_a.length; i++){
        for(let k = 0; k < arr_b.length; k++){
            if(arr_a[i] === arr_b[k]){
                delete arr_a[i]
            }
        }
    }

    let res = arr_a.filter(item => typeof item === 'number')

    return res
  }

//  console.log(arrayDiff([1,2,3], [1,2]))


function removeSmallest(numbers) {
    let res = JSON.parse(JSON.stringify(numbers))
    res.splice(res.indexOf(Math.min(...res)), 1)
    return res;
  }

//   console.log(removeSmallest([ 2, 3,1,  4, 5]))


function oddOrEven(array) {
    let sum = 0
    for(let i = 0; i < array.length; i++){
        sum+=array[i]
    }
    return sum % 2 === 0 ? 'even' : 'odd'
 }

//  console.log(oddOrEven([0, 1, 5]))

function bouncingBall(h,  bounce,  window) {
    let view = 1;
    let newH = h

    if(h < 0 || bounce >= 1 || bounce < 0 || h <= window){
        return -1
    }
    
    while(newH * bounce > window){
        newH *= bounce
        view += 2
    }
    return view
  }

// console.log(bouncingBall(40, 1, 10))

function expandedForm(num) {
    
    return String(num).split('').map((item , i)=>{
        if(item != 0){
            return item + '0'.repeat(String(num).length - i - 1)
        }
    }).filter(res => res !== undefined).join(' + ')
  }

//   console.log(expandedForm(70304))

function countBy(x, n) {
    let z = [];
    let num = 0;
    for(let i = 0; i < n; i ++ ){
        z.push(num + x)
        num += x
    }
    return z;
  }

//   console.log(countBy(1,10))

function isDivisible(n, x, y) {
   return Number.isInteger(n/x) && Number.isInteger(n/y) ?  true : false
  }

//   console.log(isDivisible(12,3,4))


  function SubtractSum(n){
    let nArr = n
    let res;

    do{
        res = eval(String(nArr).split('').join('+'))
        nArr -= res
    } while(nArr > 100)

    return eval(nArr)
  }


//   console.log(SubtractSum(365))


const obj = {
1:'kiwi',
2:'pear',
3:'kiwi',
4:'banana',
5:'melon',
6:'banana',
7:'melon',
8:'pineapple',
9:'apple',
10:'pineapple',
11:'cucumber',
12:'pineapple',
13:'cucumber',
14:'orange',
15:'grape',
16:'orange',
17:'grape',
18:'apple',
19:'grape',
20:'cherry',
21:'pear',
22:'cherry',
23:'pear',
24:'kiwi',
25:'banana',
26:'kiwi',
27:'apple',
28:'melon',
29:'banana',
30:'melon',
31:'pineapple',
32:'melon',
33:'pineapple',
34:'cucumber',
35:'orange',
36:'apple',
37:'orange',
38:'grape',
39:'orange',
40:'grape',
41:'cherry',
42:'pear',
43:'cherry',
44:'pear',
45:'apple',
46:'pear',
47:'kiwi',
48:'banana',
49:'kiwi',
50:'banana',
51:'melon',
52:'pineapple',
53:'melon',
54:'apple',
55:'cucumber',
56:'pineapple',
57:'cucumber',
58:'orange',
59:'cucumber',
60:'orange',
61:'grape',
62:'cherry',
63:'apple',
64:'cherry',
65:'pear',
66:'cherry',
67:'pear',
68:'kiwi',
69:'pear',
70:'kiwi',
71:'banana',
72:'apple',
73:'banana',
74:'melon',
75:'pineapple',
76:'melon',
77:'pineapple',
78: 'cucumber',
79: 'pineapple',
80: 'cucumber',
81: 'apple',
82: 'grape',
83: 'orange',
84: 'grape',
85: 'cherry',
86: 'grape',
87: 'cherry',
88: 'pear',
89: 'cherry',
90: 'apple',
91: 'kiwi',
92: 'banana',
93: 'kiwi',
94: 'banana',
95: 'melon',
96: 'banana',
97: 'melon',
98: 'pineapple',
99: 'apple',
100: 'pineappl',
}

function sumMix(x){
  let sum = 0
  for(let i = 0; i < x.length; i++){
    sum += +x[i]
  }
  return sum
}

// console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]))

function maximizePoints(team1, team2) {
   
   let team1Sort = team1.sort((a, b)=> a-b)
   let res = 0
   for(let i = 0; i < team2.length; i++){
    for(let k = 0; k < team1.length; k++){
        if(team1Sort[k] > team2[i]){
            
            delete team2[i]
            delete team1Sort[k]
            res++
        }
    }
   }
   
   return res

  }

//   console.log(maximizePoints([25, 7, 26, 48],[1, 36, 5, 33]))


function tiaosheng(failedCount){
    let second = 0
    let num = 0
    while(second < 60){
        second++
        num++
        for(let i = 0; i < failedCount.length; i++){
            if(num === failedCount[i]){
                second += 3
            }
        }
    }
    return num
}

// console.log(tiaosheng([12, 23, 45]))


function mazeRunner(maze, directions) {
    let coord = []
    let res
    for(let i = 0; i < maze.length; i++){
        for(let k = 0; k < maze[i].length; k++){
            if(maze[i][k] === 2){
                coord = [i, k]
            }
        }
    }

    for(let i = 0; i < directions.length; i++){
        switch(directions[i]){
            case 'N':
                coord[0] -= 1
                break
            case 'E':
                coord[1] += 1
                break
            case 'W':
                coord[1] -= 1
                break
            case 'S':
                coord[0] += 1
        }

        if(coord[0] < 0 || coord[0] > maze.length - 1 || coord[1] < 0 || coord[1] > maze[0].length - 1 || maze[coord[0]][coord[1]] == 1){
            res = 'Dead'
            break
        }else if(maze[coord[0]][coord[1]] == 3){
            res = 'Finish'
            break
        } else{
            res = 'Lost'
        }
    }

    return res
  }


var maze = [[1,1,1,1,1,1,1],
            [1,0,0,0,0,0,3],
            [1,0,1,0,1,0,1],
            [0,0,1,0,0,0,1],
            [1,0,1,0,1,0,1],
            [1,0,0,0,0,0,1],
            [1,2,1,0,1,0,1]]

// console.log(mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E","W","W"]))

function lengthOfRailway(sounds){
    let speed = false
    let arr = sounds.split('')    
    let meters = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === '呜' && arr[i+1] === '呜' && arr[i+2] === '呜'){
            speed = !speed
        }

        if(arr[i] === '哐' && arr[i+1] === '当'){
            if(speed){
                meters += 20
            } else{
                meters += 10
            }
        }
    }

    return meters
  }
// console.log(lengthOfRailway("呜呜呜哐当哐当哐当哐当哐当呜呜呜哐当哐当哐当哐当哐当"))