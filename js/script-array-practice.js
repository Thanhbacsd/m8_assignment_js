// STEP 1
let m_array = ['The Beekeeper', 'Madame Web', 'Damsel', 'Monkey Man', 'Boy Kills World']
console.log(m_array[1])
console.log()

//  STEP 2

let movies = new Array(5)
movies[0] = 'The Beekeeper'
movies[1] = 'Madame Web'
movies[2] = 'Damsel'
movies[3] = 'Monkey Man'
movies[4] = 'Boy Kills World'
console.log(movies[0])
console.log()

//  STEP 3

movies = []
movies[0] = 'The Beekeeper'
movies[1] = 'Madame Web'
movies[2] = 'Damsel'
movies[3] = 'Monkey Man'
movies[4] = 'Boy Kills World'
movies.splice(3,0,'Atlas')
console.log(movies.length)
console.log()

//  STEP 4

movies = []
movies[0] = 'The Beekeeper'
movies[1] = 'Madame Web'
movies[2] = 'Damsel'
movies[3] = 'Monkey Man'
movies[4] = 'Boy Kills World'
delete movies[0]
console.log(movies)
console.log()

//  STEP 5

movies = []
movies[0] = 'The Beekeeper'
movies[1] = 'Madame Web'
movies[2] = 'Damsel'
movies[3] = 'Monkey Man'
movies[4] = 'Boy Kills World'
movies[5] = 'Hit Man'
movies[6] = 'Twisters'
for(let i in movies){
    console.log(movies[i])
}
console.log()

//  STEP 6

movies = []
movies[0] = 'The Beekeeper'
movies[1] = 'Madame Web'
movies[2] = 'Damsel'
movies[3] = 'Monkey Man'
movies[4] = 'Boy Kills World'
movies[5] = 'Hit Man'
movies[6] = 'Twisters'
for(let i of movies){
    console.log(i)
}
console.log()

//  STEP 7

movies = []
movies[0] = 'The Beekeeper'
movies[1] = 'Madame Web'
movies[2] = 'Damsel'
movies[3] = 'Monkey Man'
movies[4] = 'Boy Kills World'
movies[5] = 'Hit Man'
movies[6] = 'Twisters'
for(let i of movies.sort()){
    console.log(i)
}

//  STEP 8

movies = []
movies[0] = 'The Beekeeper'
movies[1] = 'Madame Web'
movies[2] = 'Damsel'
movies[3] = 'Monkey Man'
movies[4] = 'Boy Kills World'
movies[5] = 'Hit Man'
movies[6] = 'Twisters'

let leastFavMovies = []
leastFavMovies[0] = 'Damsel'
leastFavMovies[1] = 'Boy Kills World'
leastFavMovies[2] = 'Hit Man'

console.log()
console.log('Movies I like:')
console.log()
for(let i of movies)(
    console.log(i)
)

console.log()
console.log('Movies I regret watching:')
console.log()
for(let i of leastFavMovies)(
    console.log(i)
)
console.log()

//  STEP 9

movies = []
movies[0] = 'The Beekeeper'
movies[1] = 'Madame Web'
movies[2] = 'Damsel'
movies[3] = 'Monkey Man'
movies[4] = 'Boy Kills World'
movies[5] = 'Hit Man'
movies[6] = 'Twisters'

leastFavMovies = []
leastFavMovies[0] = 'Damsel'
leastFavMovies[1] = 'Boy Kills World'
leastFavMovies[2] = 'Hit Man'

movies = movies.concat(leastFavMovies)
console.log(movies.sort().reverse())

//  STEP 10

movies = []
movies[0] = 'The Beekeeper'
movies[1] = 'Madame Web'
movies[2] = 'Damsel'
movies[3] = 'Monkey Man'
movies[4] = 'Boy Kills World'
movies[5] = 'Hit Man'
movies[6] = 'Twisters'

leastFavMovies = []
leastFavMovies[0] = 'Damsel'
leastFavMovies[1] = 'Boy Kills World'
leastFavMovies[2] = 'Hit Man'

movies = movies.concat(leastFavMovies)

let lastElement = movies[movies.length - 1];

console.log(lastElement);
console.log()

//  STEP 11

movies = []
movies[0] = 'The Beekeeper'
movies[1] = 'Madame Web'
movies[2] = 'Damsel'
movies[3] = 'Monkey Man'
movies[4] = 'Boy Kills World'
movies[5] = 'Hit Man'
movies[6] = 'Twisters'

leastFavMovies = []
leastFavMovies[0] = 'Damsel'
leastFavMovies[1] = 'Boy Kills World'
leastFavMovies[2] = 'Hit Man'

movies = movies.concat(leastFavMovies)

let firstElement = movies[0];

console.log(firstElement);
console.log()

//  STEP 12

movies = []
movies[0] = 'The Beekeeper'
movies[1] = 'Madame Web'
movies[2] = 'Damsel'
movies[3] = 'Monkey Man'
movies[4] = 'Boy Kills World'
movies[5] = 'Hit Man'
movies[6] = 'Twisters'

let unlikeMovies = ['Damsel','Boy Kills World','Hit Man']
let addMovies = ['SIXTY MINUTES','ONE MORE SHOT','MAYHEM!']
let c = 0
for(let i = 0; i < movies.length; i++){
    unlikeMovies.forEach((el) => {
        if(movies[i] === el){
            movies.splice(i,1,addMovies[c])
            c++
        }
    })
}
console.log(movies)

// STEP 13

movies = [[]]
movies[0] = ['The Beekeeper',1]
movies[1] = ['Madame Web',2]
movies[2] = ['Damsel',3]
movies[3] = ['Monkey Man',4]
movies[4] = ['Boy Kills World',5]
console.log(movies)

let movies_names = []
c = 0
movies.forEach((el) => {
     movies_names[c] = el.filter((item) => {
        return typeof item != 'number'
     })
    c++
})
console.log(movies_names)

// STEP 14

let employees =['ZAK','JESSICA','MARK','FRED','SALLY']
let showEmloyee = (arr) => {
    console.log()
    console.log('Employees:')
    console.log()
    for(let el of arr){
        console.log(el)
    }
}
showEmloyee(employees)

// STEP 15

let arrToFilter = [58,'','abcd', true, null, false, 0]
let itemsFilter =[false,null,0,'']   //null, 0 and blank values
let receivedArr = []
function arrFilter(itF,arrTF){
    itF.forEach((el) => {
        receivedArr = arrTF.filter((item) => {
            return item != el
        })
    })
    console.log(receivedArr)
}
arrFilter(itemsFilter,arrToFilter)

// STEP 16

let myarr =[1,2,3,4,5,6,7,8,9,10]
function arrRandom(arr){
    //let i = Math.round(Math.random()*arr.length)
    let i = Math.floor(Math.random()*(arr.length))
    console.log("The random item is: " + arr[i])
    return rNum = arr[i]   
}
arrRandom(myarr)

// STEP 17

let num_arr =[11,22,13,43,15,78,37,68,29,14]
let maxElement = (nArr) => {
    console.log("The largest number from a numeric array: " + nArr.sort()[nArr.length - 1])
    return maxNum = nArr.sort()[nArr.length - 1]
}
maxElement(num_arr)