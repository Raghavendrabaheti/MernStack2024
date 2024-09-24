console.log("hello");
//string
let firstName = 'raghav';

console.log(typeof firstName);
//number
let age =20;
console.log(typeof age);
//boolean
let isJsFun = true;
console.log(typeof isJsFun);

const item= {
    "rag":true,
    "nak": false,
    "lvi":67,
    "rohan":undefined

}
console.log(item["rag"])

let rad;
 console.log(typeof(rad));

 //null 

 let1name=null;
 console.log(typeof(let1name));

 // Keywords used to declare variables in the js 
// TODO -> Var let const

// 1)Var-> In the case of var we can redeclare and reassign the variable name and its value;
var department ="CS";
department ="ME"; //redeclaration -1
console.log(department);

department ="Civil"; //redeclaration -2
console.log(department);


// LET -> In the case of let we can reassign its value but cannot declare it

let college ='Techno';
college="Lovely";
console.log(college)

//REDECLARATION of the variables name 
//❌ let college = 'GIT'

// NOTE - CONST
// NOTE in the case of the const we cannot reassign the value and not decalre the variable name;

const emoji = '❌';
// emoji = '🍻';
// console.log(emoji); // we get the error here 


// /NOTE AIRTHMATIC (+ ,- ,* , % , /, **);


//NOTE ASSIGNMENT(= , += , -= , *= , /=)
let x =5 ;
// x = x+ 5 ;
x += 5  //equivalent (x = x+5)
console.log(x)

//NOTE COMPARISON(==,===, != , !== > , < , <= , >= ) ;
//NOTE LOOSE EQUALITY (==) ;
const a= 5 ;
const b = '5' ;

//NOTE LOOSE EQUALITY
//❌ always aviod to use 
console.log(a==b)

//NOTE STRICT EQUALITY
console.log(a===b) ;

//NOTE !=
console.log(5 != '5') ; //❌

//NOTE !==
console.log(5 !== '5') ; //✅

//NOTE LOGICAL (|| , && , !)  ;

// prompt , alert

// const firstNamee = prompt('Enter you name')
// console.log(firstNamee)

// username='admin'
// password = 'admin123'

//NOTE  create two prompt one for username and other for password , use && logical operator to check if the username === 'admin' and password === "admin123" , if both conditions are true then  console.log('authentication successful) else console.log('authentication failed') ;

//NOTE TYPE COERSION AND TYPE  CONVERSION ;

//NOTE IMPLICIT(TYPE COERSION) when javascript internally convert the type of variable from one datatype to another ;

const c = 3 + '3' ;
console.log(typeof c) ;

const subs = 7 -'4' ;
console.log(subs)


const bol = true + 1 ;
console.log(bol)
console.log(typeof bol)

const d = +'5' ;
console.log(d)
console.log(typeof d) 

//NOTE TYPE CONVERSION
const num = 5 ;
console.log(typeof String(num))

const str = 'true' ;
console.log(typeof Boolean(str))


// objects;

// Objects have properties which have keys and value pair

const myDetails ={
    firstName: 'raghav',
    age: 2024-2003,
    friends:['aman','raj'],
    'two hundred': 200,
    address: {
        street: 32,
        state: 'rajasthan',
        city: 'udaipur',
    },
    fulllDetails: function(){  // old version of creating function
    },

    fulldetail2(){      // new version of creating function
        console.log(`my name is ${this.firstName}`)

    }
};


// Accessing the value in the object using dot notation
console.log(myDetails.firstName);      
console.log(myDetails.friends[0]);     

// Updating an existing property in the object
myDetails.firstName = 'abc';
console.log(myDetails);                

// Adding a new property in the address object correctly
myDetails.address.pincode = 313001;
console.log(myDetails);                

// Using bracket notation
let aa = 'age';
console.log(myDetails[aa]);          

console.log(myDetails['two hundred']);

// Accessing nested object properties
console.log(myDetails.address.city); 
myDetails.fulldetail2();

//REVIEW - The function we creaate in an object are called "METHODS";

//NOTE  "FOR IN" AND "FOR OF" LOOP SPECIFIC IN THE JS:

const companies =['meta','google','netflix','ibm'];

for(let company of companies){
    console.log(company);
}
const product = {
    name :'tv',
    price : 'Rs 500000'
}

for(let key in product){
    console.log(`${key}: ${product [key]}`);
}


//TODO ----------------------REMAINING ARRAYS METHODS------------------------------


//NOTE SPLICE (index,decleteCount,newElement);

// const numbersArr=[1,2,3,4,5];

// const splicedOutput = numbersArr.splice(1,0,8);

// console.log(numbersArr);
// console.log(splicedOutput);


const fruits = ['mango','grapes','watermelon','banana','orange'];

const splicedOutput = fruits.splice(1,1,'guava');
console.log(splicedOutput);
console.log(fruits)

// object assign

const obj1={a:1,b:2};
const obj2={c:3,d:4};

// NOTE:Target and source

// Object.assign(target,source)
Object.assign(obj2,obj1);
console.log(obj2)

// object freeze

const products={
    name:'TV',
    price:'28000'
}
Object.freeze(products);
products.name='washing machine';
console.log(products);

// note:destructuring
const items=['tv','ac','mobile'];
const [first, ,third]=items;
console.log(first,third)

//object
const productss={
    name:'mobile',price:'500000'
} 
// to change the default property name you can use product name : variablename
const{name:productname,price,category='electronics'}=productss;
console.log(productname,price,category)

//destructing used in function param
function sum3([a,b,c]){
    return a+b+c;
}
console.log(sum3([1,2,3]));

// Spread operator (...);

const itemm =['tv','ac','mobile'];
const newItem=['laptop','tablet','watch'];
const allItem=[...itemm,...newItem];
console.log(allItem);

const arr2=[1,2,3];
arr2.push(4);
//console.log(arr2)
//arr3=[...arr2];
// console.log(arr3)

//NOTE : Coping THE ARRAY USING THE SPREAD OPERATOR 
const arr3=[...arr2];
arr3.push(4);
console.log(arr2,arr3)

// note:concate two arrays
const fruit=['apple','mango'];
const vegetables=['carrot','potato'];
const grocery=['grapes',...fruit,...vegetables,'pumpkin'];
console.log(grocery)

// int the case of object
const obb1={a:1,b:2};
const obb2={c:3,d:4};
// note: creating a shallow copy
const obb3={...obb1};
//note: concating two objects
const obb4={
    ...obb1,...obb2
}

console.log(obb4);
// note :rest parameter
const players=['a','b','c','d','e'];
const [firstplayer,secondplayer,...other]=players;
console.log(firstplayer,secondplayer,...other)


// Section HtMLCOLLECTION which looks like an array but it is not an array we cannot use array methods on it.

const para = document.getElementsByTagName('p');
console.log(para);

//Converting html collection into array
const paraArray = [...para];
console.log(paraArray);

// getElementsByClassName
// getElementsByClassName also return a html collection;
const li =document.getElementsByClassName('special');
console.log(li);


// getElementsById
const heading = document.getElementById('heading');
console.log(heading);


// queryselector
const photo = document.querySelector('.special');
console.log(photo);

// querySelectorAll
// NOTE NodeList where we can directly use forEach method without converting it to an array
const lil = document.querySelectorAll('.special');
    console.log(lil);
    lii.forEach((el)=>{
        console.log(el.textContent)
    });

