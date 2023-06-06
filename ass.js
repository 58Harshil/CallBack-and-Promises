//1
function doubleArray(arr, callback){
    const doubleedArr = arr.map((num)=>{
        return callback(num)
    })
    return doubleedArr
}
const originalArray = [1,2,3,4]
function callback(num){
    return num*2
}
const doubledArray = doubleArray(originalArray, callback)
//console.log(doubledArray);


//2
function manipulateString(inputString,callback){
    const manipulateString = inputString.toUpperCase()
    callback(manipulateString)
}
function longString(manipulateString){
    //console.log("The Manuplate String is ",manipulateString);
}
manipulateString("Hello World!! ",longString)



//3
const person = {
  firstName: "Harshil",
  lastName: "Choudhary",
  age: 19, 
};
function ageInDays(personObject,callback){
    const fullName = personObject.firstName + " " + personObject.lastName
    const ageInDays = personObject.age * 365
    callback(fullName,ageInDays)
}
function logResult(fullName,ageInDays){
    //console.log("The person full name is " + fullName + " and there age in days is " + ageInDays);
}
ageInDays(person,logResult)


//4
const books = [
    {
        title: "Boat",
        author: "Green",
        year: 1959,
    },
    {
        title: "Apple",
        author: "Hari",
        year: 1299,
    },
    {
        title: "Samsun",
        author: "Natu Kaka",
        year: 1949,
    },
    {
        title: "OnePlus",
        author: "Chin-Chon-Chin",
        year: 1994,
    },
];
function logTitles(titles){
    titles.sort()
    //console.log(titles.join(", "));
}
function extraxtTitles(books, callback){
    const titles = books.map((book)=>book.title)
    //console.log(titles);
}
extraxtTitles(books,logTitles)

//6
async function FetchData(){
    const response = await
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    const Data = await response.json()
    //console.log(Data);
}
FetchData()
