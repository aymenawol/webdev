// // ========================================
// // Arrays 🗃
// // ========================================

// let fruits = ["apple","orange","banana","coconut"];
// fruits.push("coconut")
// fruits.pop();
// fruits.unshift("mango")
// fruits.shift()
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
// console.log(fruits[3])

// let num = fruits.length
// let index = fruits.indexOf("apple")
// console.log(index)
// fruits.sort().reverse();
// for(let fruit of fruits){
//     console.log(fruit)
// }

// let numbers = [1,2,3,4,5]
// let max = Math.max(...numbers)
// let min = Math.min(...numbers)
// console.log(max)

// // ========================================
// // Spread operator 📖
// // ========================================

// let username = "Aymen Awol";
// let letters = [...username].join("-")
// console.log(letters)
// let fruits = ["apple","orange","banana"]
// let vegetables = ["carrots","celery","potatoes"]
// let newFruits = [...fruits, ...vegetables, "eggs","milk"];
// console.log(newFruits)

// // ========================================
// // Rest parameters 🗄
// // ========================================

// function openFridge(...foods){
//     console.log(...foods)
// }
// function getFood(...foods){
//     return foods;
// }
// const food1 = "pizza";
// const food2 = "hamburger";
// const food3 = "hotdog";
// const food4 = "sushi";

// //openFridge(food1,food2,food3,food4)
// const foods = getFood(food1, food2, food3, food4)
// console.log(foods)
// function sum(...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result+=number;
//     }
//     return result;
// }
// function getAverage(...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result+=number;
//     }
//     return result/numbers.length;
// }
// const total = getAverage(23,75,100)
// console.log(total)
// function combineStrings(...strings){
//     return strings.join(" ");
// }

// const fullname = combineStrings("Mr.","Spongebob","Squarepants","III");
// console.log(fullname)

// // ========================================
// // Callbacks 🤙
// // ========================================

// hello(wait);
// function hello(callback){
//     console.log("Hello!");
//     callback();
// }

// function wait(){
//     console.log("Wait!")
// }

// function leave(){
//     console.log("Leave!")
// }

// function goodbye(){
//     console.log("Goodbye!")
// }

// sum(display,1,2)

// function sum(callback, x, y){
//     let result = x+y;
//     callback(result);
// }

// function display(result){
//     console.log(result)
// }

// // ========================================
// // forEach() ➿ method
// // ========================================

// let numbers = [1,2,3,4,5];

// numbers.forEach(square)
// numbers.forEach(display)

// function double(element, index, array){
//     array[index] = element*2;
// }

// function triple(element,index,array){
//     array[index] = element*3;
// }
// function square(element,index,array){
//     array[index] = Math.pow(element,2)
// }
// function display(element){
//     console.log(element)
// }

// let fruits = ["apple", "orange","banana","coconut"]
// fruits.forEach(capFirst)
// fruits.forEach(display)

// function upperCase(element,index,array){
//     array[index] = element.toUpperCase();
// }
// function lowerCase(element,index,array){
//     array[index] = element.toLowerCase();
// }
// function capFirst(element,index,array){
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }
// function display(element){
//     console.log(element)
// }

// // ========================================
// // map() 🗺
// // ========================================

// const numbers = [1,2,3,4,5];

// const squares = numbers.map(square)
// const cubes = numbers.map(cube)

// function square(element){
//     return Math.pow(element,2);
// }
// function cube(element){
//     return Math.pow(element,3)
// }
// console.log(cubes)

// const students = ["Spongebob","Patrick","Squidward","Sandy"];

// const studentsUpper = students.map(upperCase)

// function upperCase(element){
//     return element.toUpperCase();
// }

// console.log(studentsUpper)

// const dates = ["2024-1-10","2025-2-20","2026-3-30"]
// const formattedDates = dates.map(formatDates)
// console.log(formattedDates)
// function formatDates(element){
//     const parts = element.split("-");
//     return `${parts[1]}/${parts[2]}/${parts[0]}`;
// }

// // ========================================
// // filter() 🚰
// // ========================================

// let numbers = [1,2,3,4,5,6,7];
// let evenNums = numbers.filter(isEven)
// let oddNums = numbers.filter(isOdd)
// console.log(oddNums)
// function isEven(element){
//     return element % 2 === 0
// }
// function isOdd(element){
//     return element%2!==0
// }

// const ages = [16,17,18,18,19,20,60];

// const adults = ages.filter(isAdult)
// console.log(adults)
// function isAdult(element){
//     return element>=18;
// }

// const word = ["apple","orange","banana","kiwi","pomegranate","coconut"];
// const shortWords = word.filter(getShortWords)
// console.log(shortWords)
// function getShortWords(element){
//     return element.length<=6;
// }

// // ========================================
// // reduce() ♻
// // ========================================

// const total = numbers.reduce(function(accumulator, element){
//     return accumulator+element;
// })
// console.log(total)

// // ========================================
// // Function expressions 🐣
// // ========================================

// const hello = function(){
//     console.log("hello")
// }
// hello();

// setTimeout(function(){
//     console.log("hello")
// }, 3000);

// const numbers = [1,2,3,4,5,6];

// const squares = numbers.map(function(element){
//     return Math.pow(element,2);
// })
// const cubes = numbers.map(function(element){
//     return Math.pow(element,3)
// })
// const evenNums = numbers.filter(function(element){
//     return element%2===0;
// })

// // ========================================
// // Arrow functions 🎯
// // ========================================

// const hello = (name, age) => {console.log(`Hello ${name}`)
//                          console.log(`You are ${age} years old`)}
// hello("Aymen", 18);
// setTimeout(() => console.log("hello"), 3000);

// const numbers = [1,2,3,4,5,6];

// const squares = numbers.map((element) => Math.pow(element,2))
// const cubes = numbers.map((element) => Math.pow(element,3))
// const evenNums = numbers.filter((element) => element%2==0)
// const total = numbers.reduce((accumulator, element) => accumulator + element)
// console.log(total)

// // ========================================
// // JavaScript Objects 🧍
// // ========================================

// const person1 = {
//     firstName: "Spongebob",
//     lastName: "Squarepants",
//     age: 30,
//     isEmployed: true,
//     sayHello: ()=>console.log("Hi! I'm Spongebob"),
//     eat: ()=> console.log("I'm eating a krabby patty"),
// }

// const person2 = {
//     firstName: "Patrick",
//     lastName: "Star",
//     age: 40,
//     isEmployed: false,
//     sayHello: ()=>console.log("Hey im patrick"),
//     eat: ()=>console.log("Im eating roast beef")
// }
// person1.sayHello()
// person2.sayHello()
// person1.eat()
// person2.eat()

// // ========================================
// // What is THIS 👈
// // ========================================

// const person1 = {
//     name: "spongebob",
//     favFood: "hamburgers",
//     sayHello: function(){
//         console.log(`Hi, I am ${this.name}`)
//     },
//     eat: function(){
//         console.log(`${this.name} is eating ${this.favFood}`)
//     }

// }
// const person2 = {
//     name: "Patrick",
//     favFood: "Beef",
//     sayHello: function(){
//         console.log(`Hi, I am ${this.name}`)
//     },
//     eat: function(){
//         console.log(`${this.name} is eating ${this.favFood}`)
//     }

// }
// person1.sayHello();
// person1.eat();
// person2.sayHello()
// person2.eat()

// // ========================================
// // Constructors 🛠
// // ========================================

// function Car(make,model,year,color){
//     this.make = make,
//     this.model = model,
//     this.year = year,
//     this.color = color
//     this.drive = function(){
//         return `You drive the ${this.model} from year ${this.year}`
//     }
// }

// const car1 = new Car("Ford","Mustang","2024","red");
// const car2 = new Car("Cherolet","Camaro",2025,"blue")
// const car3 = new Car("Dodge","Charger",2026,"silver")

// console.log(car3.drive())

// function Users(username,age,favFood){
//     this.username = username;
//     this.age = age;
//     this.favFood = favFood;
//     this.getInfo = function(){
//         console.log(`${this.username}'s favorite food is ${this.favFood}`)
//     };
// }

// const user1 = new Users("Lina",20,"Ice Cream")
// const user2 = new Users("Aymen",19,"Chicken")
// const user3 = new Users("Hafiz",14,"Cookies")

// user1.getInfo();
// user2.getInfo();
// user3.getInfo();

// // ========================================
// // Classes 🏭
// // ========================================

// class Product{
//     constructor(name,price){
//         this.name = name;
//         this.price = price;
//     }

//     displayProduct(){
//         console.log(`Product: ${this.name}`)
//         console.log(`Price: $${this.price.toFixed(2)}`)
//     }
//     calculateTotal(salesTax){
//         return this.price + (this.price*salesTax)
//     }
// }

// const salesTax = 0.05;

// const product1 = new Product("Shirt",19.99)
// const product2 = new Product("Pants",22.50)
// const product3 = new Product("Underwear",100.00)
// product3.displayProduct()
// const total = product3.calculateTotal(salesTax);
// console.log(`Total Price (with tax): ${total.toFixed(2)}`)

// class Person{
//     constructor(name,age,favFood){
//         this.name = name;
//         this.age = age;
//         this.favFood = favFood;
//     }
//     getInfo(){
//         console.log(`${this.name}'s favorite food is ${this.favFood}`)
//     }
// }

// const person1 = new Person("Aymen",19,"Chicken")
// person1.getInfo()

// // ========================================
// // STATIC keyword ⚡
// // ========================================

// class MathUtil{
//     static PI = 3.14159;
//     static getDiameter(radius){
//         return radius*2;
//     }
//     static getCircumference(radius){
//         return 2*this.PI*radius;
//     }
//     static getArea(radius){
//         return this.PI * radius *radius
//     }
// }

// console.log(MathUtil.PI)
// console.log(MathUtil.getDiameter(4))
// console.log(MathUtil.getCircumference(10))
// console.log(MathUtil.getArea(10))

// class User{

//     static userCount = 0;

//     constructor(username){
//         this.username = username;
//         User.userCount++;
//     }

//     sayHello(){
//         console.log(`Hello, my username is ${this.username}`)
//     }
//     static getUserCount(){
//         console.log(`There are ${User.userCount} users online`)
//     }
// }

// const user1 = new User("Spongebob")
// const user2 = new User("Patrick")
// const user3 = new User("Sandy")

// user1.sayHello()
// user2.sayHello()
// user3.sayHello()

// User.getUserCount()

// // ========================================
// // Inheritance 🐇
// // ========================================

// class Animal{
//     alive = true;

//     eat(){
//         console.log(`This ${this.name} is eating`)
//     }
//     sleep(){
//         console.log(`This ${this.name} is sleeping`)
//     }
//     move(){
//         console.log(`This ${this.name} is ${this.movement}`)
//     }
// }

// class Rabbit extends Animal{
//     name = "rabbit";
//     movement = "running"
// }

// class Fish extends Animal{
//     name = "fish";
//     movement = "swimming"
// }

// class Hawk extends Animal{
//     name = "hawk"
//     movement = "flying"
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// fish.move()

// // ========================================
// // SUPER keyword 🦸‍♂️
// // ========================================

// class Animal {
//     constructor(name, age, moveType, moveSpeed) {
//         this.name = name;
//         this.age = age;
//         this.moveType = moveType;
//         this.moveSpeed = moveSpeed;
//     }

//     move(moveSpeed) {
//         console.log(`The ${this.name} moves at a speed of ${this.moveSpeed} mph`);
//     }
// }

// class Rabbit extends Animal {
//     constructor(name, moveType, age, runSpeed) {
//         super(name, moveType, age, runSpeed);
//     }
//     run(){
//         console.log(`This ${this.name} can run`)
//         super.move(this.runSpeed)
//     }
// }

// class Fish extends Animal {
//     constructor(name, moveType, age, swimSpeed) {
//         super(name, moveType, age, swimSpeed);
//     }
//     swim(){
//         console.log(`This ${this.name} can swim`)
//         super.move(this.swimSpeed)
//     }
// }

// class Hawk extends Animal {
//     constructor(name, moveType, age, flySpeed) {
//         super(name, moveType, age, flySpeed);
//     }
//     fly(){
//         console.log(`This ${this.name} can fly`)
//        super.move(this.flySpeed)
//     }
// }

// const rabbit = new Rabbit("rabbit", 1,"running", 25);
// const fish = new Fish("fish", 2,"swimming", 12);
// const hawk = new Hawk("hawk", 3, "flying", 50);

// rabbit.run()

// // ========================================
// // Getters & Setters 📐
// // ========================================

// class Rectangle{
//     constructor(width,height){
//         this.width = width;
//         this.height = height;
//     }
//     set width(newWidth){
//         if(newWidth > 0){
//             this._width = newWidth;
//         } else{
//             console.error("Width must be a positive number")
//         }
//     }

//     set height(newHeight){
//         if(newHeight > 0){
//             this._height = newHeight;
//         } else{
//             console.error("Height must be a positive number")
//         }
//     }

//     get width(){
//         return this._width;
//     }
//     get height(){
//         return this._height;
//     }
//     get area(){
//         return this._width * this._height; 
//     }
// }

// const rectangle = new Rectangle(3,4)
// rectangle.width = 5;
// rectangle.height = 6;
// console.log(rectangle.width)
// console.log(rectangle.height)

// class Person{
//     constructor(firstName,lastName,age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     set firstName(newFirstName){
//         if(typeof newFirstName === "string" && newFirstName.length > 0){
//             this._firstName = this.firstName;
//         } else{
//             console.error("First name must be a non-empty string")
//         }
//     }

//     set lastName(newLastName){
//         if(typeof newLastName === "string" && newLastName.length > 0){
//             this._lastName = this.lastName;
//         } else{
//             console.error("Last name must be a non-empty string")
//         }
//     }
// }

// const person = new Person(420, 69, "pizza");

// console.log(person.firstName)
// console.log(person.lastName)
// console.log(person.age)

// class Animal{
//     constructor(name,type){
//         this.name = name;
//         this.type = type;
//     }
//     getInfo(){
//         console.log(`${this.name} is a ${this.type}`)
//     }
// }

// class Dog extends Animal{
//     constructor(hasFleas,name,type){
//         super(name,type)
//         this.hasFleas = hasFleas
//     }
//     isHealthy(){
//         if(!this.hasFleas){
//             return `${this.name} is healthy`
//         }
//         return `${this.name} is not healthy`
//     }
// }

// const dog1 = new Dog(false,"Brody","dog")

// console.log(dog1.isHealthy())

// // ========================================
// // Destructuring 💥
// // ========================================

// let a = 1;
// let b = 2;
// [a,b] = [b,a];
// console.log(a)
// console.log(b)

// const colors = ["red","green","blue","black","white"];
// // [colors[0],colors[4]] = [colors[4],colors[0]]
// // console.log(colors)
// const [firstColor,secondColor,thirdColor,...extraColors] = colors;
// console.log(firstColor)
// console.log(secondColor)
// console.log(thirdColor)
// console.log(extraColors)

// function displayPerson({}){

// }

// const person1 = {
//     firstName: "Spongebob",
//     lastName: "Squarepants",
//     age: 30,
//     job: "Fry Cook",
// }

// const person2 = {
//     firstName: "Patrick",
//     lastName: "Star",
//     age: 34,
// }

// const {firstName, lastName, age, job="Unemployed"} = person1;

// console.log(firstName)
// console.log(lastName)
// console.log(age)
// console.log(job)

// function displayPerson({firstName,lastName,age,job="Unemployed"}){
//     console.log(`name: ${firstName} ${lastName}`)
//     console.log(`age: ${age}`)
//     console.log(`job: ${job}`)
// }

// const person1 = {
//     firstName: "Spongebob",
//     lastName: "Squarepants",
//     age: 30,
//     job: "Fry Cook",
// }

// const person2 = {
//     firstName: "Patrick",
//     lastName: "Star",
//     age: 34,
// }

// displayPerson(person1)

// // ========================================
// // Nested objects 📫
// // ========================================

// const person = {
//     fullName: "Spongebob Squarepants",
//     age: 30,
//     isStudent: true,
//     hobbies: ["karate","jellyfishing","cooking"],
//     address: {
//         street: "124 Conch St.",
//         city: "Bikini Bottom",
//         country: "Int. Water",
//     }
// }

// for(const property in person.address){
//     console.log(person.address[property])
// }

// class Person{
//     constructor(name,age,...address){
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address)
//     }
// }
// class Address{
//     constructor(street,city,country){
//         this.street = street;
//         this.city = city;
//         this.country = country;
//     }
// }

// const person1 = new Person("Spongebob",30,
//     "124 Conch St.",
//     "Bikini Bottom",
//     "Int. Waters")

// const person2 = new Person("Patrick",37,
//     "128 Conch St.",
//     "Bikini Bottom",
//     "Int. Waters")

// const person3 = new Person("Squidward",45,
//     "126 Conch St.",
//     "Bikini Bottom",
//     "Int. Waters")

// console.log(person1.address.country)

// // ========================================
// // Arrays of objects 🍎
// // ========================================

// const fruits = [{name: "apple", color:"red",calories:95},
//                 {name: "orange", color:"orange",calories:45},
//                 {name: "banana", color:"yellow",calories:105},
//                 {name: "coconut", color:"white",calories:159},
//                 {name: "pineapple", color:"yellow",calories:37}]
// // const fruitNames = fruits.map(fruit => fruit.name)
// // const fruitColors = fruits.map(fruit => fruit.color)
// // console.log(fruitColors)

// // const yellowFruits = fruits.filter(fruit => fruit.color === "yellow")
// // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)
// // console.log(lowCalFruits)

// const maxFruit = fruits.reduce((max,fruit) => 
//                         fruit.calories>max.calories ? fruit:max)
// const minFruit = fruits.reduce((min,fruit) => 
//                         fruit.calories<min.calories ? fruit:min)

// console.log(minFruit)

// // ========================================
// // Sorting 🗃
// // ========================================

// let fruits = ["apple","orange","banana","coconut","pineapple"]
// fruits.sort();
// console.log(fruits)

// let numbers = [1,10,2,9,3,4,7,5,6];
// numbers.sort((a,b)=>a-b)
// console.log(numbers)

//  const people = [{name: "Spongebob",age: 30,gpa: 3.0},
//                  {name: "Patrick",age: 37,gpa: 1.5},
//                  {name: "Squidward",age: 51,gpa: 2.5},
//                  {name: "Sandy",age: 27,gpa: 4.0}]

// people.sort((a,b)=>a.name - b.name)
// console.log(people)

// // ========================================
// // Shuffle an array 🔀
// // ========================================

// const cards = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];
// shuffle(cards)
// function shuffle(array){
// for(let i=array.length - 1;i>0;i--){
//     const random = Math.floor(Math.random()*(i+1))
//     array(i),array[random] = array[random],array[i]
// }
// }

// // ========================================
// // Dates 📅
// // ========================================

// const date = new Date()
// const year = date.getFullYear()
// const month = date.getMonth()
// const day = date.getDate()
// const hour = date.getHours()
// const minutes = date.getMinutes()
// const seconds = date.getSeconds()
// const dayOfWeek = date.getDay()
// console.log(year)
// console.log(month)
// console.log(day)
// console.log(hour)
// console.log(minutes)
// console.log(dayOfWeek)

// date.setFullYear(2024)
// date.setMonth(0)
// date.setDate(1)
// date.setMinutes(3)

// const date1 = new Date("2023-12-31")
// const date2 = new Date("2024-01-01")

// if(date2>date1){
//     console.log("Happy New Year")
// }

// // ========================================
// // Closures 🔒
// // ========================================

// function outer(){

//     let message = "Hello";
//     function inner(){
//         console.log(message)
//     }
//     inner()
// }

// message = "Goodbye"

// outer()

// function createCounter(){
//     let count = 0;
//     function increment() {
//         count++;
//         console.log(`Count increased to ${count}`)
//     }
//     return {increment}
// }

// const counter = createCounter()
// counter.increment()
// counter.increment()

// function outer(){
//     let count = 0;
//     function inner(){
//         count++;
//         console.log(count)
//     }
// }
// function createGame() {
//     let score = 0;

//     function increaseScore(points) {
//         score += points;
//         console.log(`+${points}pts`)
//     }
//     function decreaseScore(points) {
//         score -= points;
//         console.log(`-${points}pts`)
//     }
//     function getScore() {
//         return score;
//     }
//     return {increaseScore,decreaseScore,getScore}
// }
// const game = createGame()
// game.increaseScore(5)
// game.increaseScore(6)
// game.decreaseScore(3)
// console.log(`Final score is ${game.getScore()}pts`)

// // ========================================
// // setTimeout() ⏰
// // ========================================

// const timeOutId = setTimeout(()=>window.prompt("Hello"),3000)
// let timeOutId;
// function startTimer(){
//     timeOutId = setTimeout(()=>window.alert("Hello"),3000)
// }

// function clearTimer(){
//     clearTimeout(timeOutId)
// }

// // ========================================
// // ES6 Modules 🚢
// // ========================================

// import {pi,getCircumference,getArea,getVolume} from './mathUtil.js';

// // ========================================
// // Asynchronous code 💤
// // ========================================

// function func1(callback) {
//     setTimeout(() => {console.log("Task 1");
//         callback()}, 3000)

// }

// function func2() {
//     console.log("Task 2")
//     console.log("Task 3")
//     console.log("Task 4")
// }

// func1(func2)

// // ========================================
// // Error handling ⚠
// // ========================================

// try {
//     console.leg(x);
// }
// catch(error){
//     console.error(error);
// }
// finally{
//     console.log("This always executes")
// }
// console.log("End reached")

// try{
// const dividend = 1
// const divisor = pizza
// if(divisor==0){
//     throw new Error("cant divide by 0")
// }
// const result = dividend/divisor;

// console.log(result)
// }
// catch(error){
//     console.log(error)
// }

// console.log("You have reached end")

// // ========================================
// // What is the DOM? 🌳
// // ========================================

// const username = "Aymen";
// const welcomeMsg = document.getElementById("welcome-msg");
// welcomeMsg.textContent += username === "" ?  'Guest':username

// const myHeading = document.getElementById("my-heading");
// myHeading.style.backgroundColor = "green";
// myHeading.style.textAlign = "center";
// console.log(myHeading)

// // ========================================
// // Element selectors 📑
// // ========================================

// const fruits = document.getElementsByClassName("fruits");

// Array.from(fruits).forEach(fruit=>{
//     fruit.style.backgroundColor = "yellow"
// });

// const h4Elements = document.getElementsByTagName("h4");
// const liElements = document.getElementsByTagName("li")
// for(let h4Element of h4Elements){
//     h4Element.style.backgroundColor = "yellow"
// }

// for(let liElement of liElements){
//     liElement.style.backgroundColor = "lightgreen"
// }
// Array.from(h4Elements).forEach(h4Element=> h4Element.style.backgroundColor = "yellow")
// Array.from(liElements).forEach(liElement=> liElement.style.backgroundColor = "green")

// const element = document.querySelector("li")
// element.style.backgroundColor = "yellow"

// // ========================================
// // DOM navigation 🧭
// // ========================================

// const element = document.getElementById("desserts");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow"

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElement=>{
//     const firstChild = ulElement.firstElementChild;
//     firstChild.style.backgroundColor = "yellow";
// })

// const element = document.getElementById("fruits")
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "yellow"

// const ulElements = document.querySelectorAll("ul")

// ulElements.forEach(ulElement=>{
//     const lastChild = ulElement.lastElementChild;
//     lastChild.style.backgroundColor = "yellow"
// })

// const element = document.getElementById("potatoes")
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "yellow"

// const element = document.getElementById("vegetables");
// const previousSibling = element.previousElementSibling;
// previousSibling.style.backgroundColor = "yellow"

// const element = document.getElementById("carrots")
// const parent = element.parentElement;
// parent.style.backgroundColor = "yellow";

// const element = document.getElementById("desserts")
// const children = element.children;
// // Array.from(children).forEach(child=>{
// //     child.style.backgroundColor = "yellow";
// // })
// children[0].style.backgroundColor = "yellow";

// // ========================================
// // Add & change HTML 🛠️
// // ========================================

// const newH1 = document.createElement("h1") 
// newH1.textContent = "I like pizza";
// newH1.id = "myH1"
// newH1.style.color = "tomato"
// newH1.style.textAlign = "center"
// document.body.append(newH1)
// // document.body.prepend(newH1)
// document.getElementById("box1").append(newH1);
// document.getElementById("box1").prepend(newH1);
// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1,box2)

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1,boxes[1])
// document.getElementById("box1").removeChild(newH1)

// const newListItem = document.createElement("li");
// newListItem.id = "coconut"
// newListItem.style.fontWeight = "bold";
// newListItem.style.backgroundColor = "lightgreen"
// newListItem.textContent = "coconut"
// document.getElementById("fruits").append(newListItem)

// // const banana = document.getElementById("banana");
// // document.getElementById("fruits").insertBefore(newListItem,banana)

// const listItems = document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newListItem,listItems[0])

// // ========================================
// // Mouse events 🖱
// // ========================================

// const myBox = document.getElementById("myBox");
// const myButton = document.getElementById("myButton")
// let wasClicked = false;
// myBox.addEventListener("click", event => {
//     event.target.style.backgroundColor = "blue";
//     event.target.textContent = "Ouch! 😪"
//     wasClicked = true;
// })

// myBox.addEventListener("mouseover", event => {
//     if (!wasClicked) {
//         event.target.style.backgroundColor = "yellow";
//         event.target.textContent = "Don't! 🤨"
//     } else {
//         event.target.style.backgroundColor = "blue";
//         event.target.textContent = "Ouch! 😪"
//     }


// })

// myBox.addEventListener("mouseout", event => {
//     if (wasClicked) {
//         event.target.style.backgroundColor = "blue";
//         event.target.textContent = "Ouch! 😪"
//     } else {
//         event.target.style.backgroundColor = "lightgreen";
//         event.target.textContent = " Click Me 😀"
//     }

// })

// myButton.addEventListener("click",event=>{
//     wasClicked = false;
//     myBox.style.backgroundColor = "lightgreen"
//     myBox.style.textContent = "Click Me 😀"
// })

// // ========================================
// // Key events ⌨
// // ========================================

// const myBox = document.getElementById("myBox")
// const moveAmount = 100;
// let x = 0;
// let y = 0;

// document.addEventListener("keydown",event=>{
//     if(event.key.startsWith("Arrow")){
//         event.preventDefault()
//         switch(event.key){
//             case "ArrowUp":
//                 y -= moveAmount;
//                 break;
//             case "ArrowDown":
//                 y += moveAmount;
//                 break;
//             case "ArrowLeft":
//                 x -= moveAmount;
//                 break;
//             case "ArrowRight":
//                 x += moveAmount;
//                 break;
//         }
//         myBox.style.top = `${y}px`;
//         myBox.style.left = `${x}px`;
//     }
// })
// document.addEventListener("keydown",event=>{
//     myBox.textContent = "😂";
//     myBox.style.backgroundColor = "tomato"
// })
// document.addEventListener("keyup",event=>{
//     myBox.textContent = "😁";
//     myBox.style.backgroundColor = "lightblue"
// })

// // ========================================
// // Hide/show HTML 🖼
// // ========================================

// const myButton = document.getElementById("myButton")
// const myImg = document.getElementById("myImg")
// myButton.addEventListener("click",event=>{
//     if(myImg.style.display == "block"){
//     myImg.style.display = "none"
//     myButton.textContent = "Show"
//     } else{
//         myImg.style.display = "block"
//     myButton.textContent = "Hide"
//     }
// })

// // ========================================
// // NodeLists 📃
// // ========================================

// let buttons = document.querySelectorAll(".myButtons")

// buttons.forEach(button=>{
//     button.style.backgroundColor = "green"
//     button.textContent += " green"
// })

// buttons.forEach(button=>{
//     button.addEventListener("click",event=>{
//         event.target.style.backgroundColor = "tomato"
//     })
// })

// buttons.forEach(button=>{
//     button.addEventListener("mouseover",event=>{
//         event.target.textContent = " click"
//     })
// })

// let newButton = document.createElement("button")
// newButton.textContent = "Button5";
// newButton.classList = "myButtons"
// document.body.appendChild(newButton)

// buttons = document.querySelectorAll(".myButtons");
// console.log(buttons)

// let buttons = document.querySelectorAll(".myButtons")

// buttons.forEach(button => {
//     button.addEventListener("click", event => {
//         event.target.remove();
//         buttons = document.querySelectorAll(".myButtons");
//         console.log(buttons)
//     })
// })

// // ========================================
// // classList 🧾
// // ========================================

// const myButton = document.getElementById("myButton")

// myButton.addEventListener("mouseover",event=>{
//     event.target.classList.toggle("hover")
// })
// myButton.addEventListener("mouseout",event=>{
//     event.target.classList.toggle("hover")
// })

// myButton.classList.add("enabled")
// myButton.addEventListener("click",event=>{
//     if(event.target.classList.contains("disabled")){
//         event.target.textContent+="😂"
//     } else{
//     event.target.classList.replace("enabled","disabled")

//     }
// })

// let name = "aymen"
// string name = "aymen"

// let buttons = document.querySelectorAll(".myButtons");
// buttons.forEach(button=>{
//     button.classList.add("enabled")
// })

// buttons.forEach(button=>{
//     button.addEventListener("mouseover",event=>{
//         event.target.classList.toggle("hover")
//     })  
// })
// buttons.forEach(button=>{
//     button.addEventListener("mouseout",event=>{
//         event.target.classList.toggle("hover")
//     })  
// })
// buttons.forEach(button=>{
//     button.addEventListener("click",event=>{
//         if(event.target.classList.contains("disabled")){
//             event.target.textContent+="😛"
//         }
//         event.target.classList.replace("enabled","disabled")
//     })
// })

// // ========================================
// // Callback Hell? 🔥
// // ========================================

// function task1(callback){
//     setTimeout(()=>{
//         console.log("task 1 complete")
//         callback();
//     },2000);

// }
// function task2(callback){
//     setTimeout(()=>{
//         console.log("task 2 complete")
//         callback();
//     },1000);
// }
// function task3(callback){
//     setTimeout(()=>{
//         console.log("task 3 complete")
//         callback()
//     },3000);
// }
// function task4(callback){
//     setTimeout(()=>{
//         console.log("task 4 complete")
//         callback();
//     },1500);
// }
// task1(()=>{
//     task2(()=>{
//         task3(()=>{
//             task4(()=>console.log("all tasks complete"))
//         })
//     });
// })

// // ========================================
// // Promises 🤞
// // ========================================

// async function walkDog() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             const dogWalked = true;

//             if (dogWalked) {
//                 resolve("You walk the dog")
//             } else {
//                 reject("You didnt walk the dog")
//             }


//         }, 1500)
//     })
// }
// function cleanKitchen() {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             const kitchenCleaned = true;

//             if (kitchenCleaned) {
//                 resolve("You clean the kitchen")
//             } reject("You didnt cleant the kitchen")
//         }, 2500)
//     })
// }

// function takeOutTrash() {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             let trashTakenOut = true;
//             if (trashTakenOut) {
//                 resolve("You take out the trash")
//             } reject("You didnt take out the trash")
//         }, 500)
//     })
// }

// walkDog().then(value => {
//     console.log(value);
//     return cleanKitchen()
// }).then(value => {
//     console.log(value)
//     return takeOutTrash();
// }).then(value => {
//     console.log(value);
//     console.log("done")
// }).catch(error=>console.error(error))

// // ========================================
// // Async/Await ⏳
// // ========================================

// async function doChores(){

//     const walkDogResult = await walkDog();
//     console.log(walkDogResult)

//     const cleanKitchenResult = await cleanKitchen();
//     console.log(cleanKitchenResult)

//     const takeOutTrashResult = await takeOutTrash();
//     console.log(takeOutTrashResult)

//     console.log("chores done")

// }
// doChores()

// // ========================================
// // JSON files 📄
// // ========================================

// const jsonNames = `["Spongebob","Patrick","Squidward","Sandy"]`

// const jsonPerson = `{
//     "name":"Spongebob",
//     "age": 30,
//     "isEmployed": true,
//     "hobbies": ["Jellyfishing","Karate","Cooking"]
// }`

// const jsonPeople = `[
// {
//     "name":"Spongebob",
//     "age": 30,
//     "isEmployed": true,
//     "hobbies": ["Jellyfishing","Karate","Cooking"]
// },
// {
//     "name":"Patrick",
//     "age": 34,
//     "isEmployed": false
// },
// {
//     "name":"Squidward",
//     "age": 50,
//     "isEmployed": true
// },
// {
//     "name":"Sandy",
//     "age": 27,
//     "isEmployed": false
// }
// ]`

// const parsedData = JSON.parse(jsonPeople)
// console.log(parsedData)

// fetch("people.json")
//     .then(response=>response.json())
//     .then(values=>values.forEach(value=>console.log(value.name)))
//     .catch(error=>console.error(error))

// // ========================================
// // Fetch data from an API ↩️
// // ========================================

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response=>{
//         if(!response.ok){
//             throw new Error("Pokemon not found")
//         }
//         return response.json();
//     })
//     .then(data=>console.log(data.abilities))
//     .catch(error=>console.log(error))

// async function fetchData(){
//     try{
//         const pokemonName = document.getElementById("pokemonName").value.toLowerCase()
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
//         if(!response.ok){
//             throw new Error("Pokemon not found")
//         }
//         const data = await response.json()
//         const pokemonSprite = data.sprites.front_default
//         const imgElement = document.getElementById("pokemonSprite")
//         imgElement.src = pokemonSprite;
//         imgElement.style.display = "block";
//     }
//     catch(error){
//         console.error(error)
//     }
// }

// function scoreOfSum(s){
// let sum = 0;
// for(let i=0;i<s.length-1;i++){
//     sum+=Math.abs(s.charCodeAt(i)-s.charCodeAt(i+1));
// }
// return sum
// }

// console.log(scoreOfSum(new Array(100).fill("a").join("")))

// console.log(scoreOfSum("hello"))

// const arr = [101,20,30,40,50];
// console.log(arr.map(e=>e))

