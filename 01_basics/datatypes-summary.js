// Primitive 

// 7 types: string, number, boolean, null, undefined, symbol,bigInt 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
let outsideTemp = null
let userEmail;// takes undefined

const id = Symbol('123')
const anotherid = Symbol('123')

// console.log(id == anotherid)

const bigNumber = 74646378287264546454383n

//Reference type or NonPrimitive 
// array, objects,functions

const heros = ["shaktimaan","nagraj","doga"]
let myObj ={
    name: "Ananya",
    age: 19,
}

const MyFunction = function(){
    console.log("hello world")
}

console.log(typeof MyFunction)
console.log(typeof undefined)
console.log(typeof null)
console.log(typeof Boolean)
console.log(typeof Number)
console.log(typeof String)


