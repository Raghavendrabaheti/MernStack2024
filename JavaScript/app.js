// let age=prompt("enter a number");
//  {
//     if (number > 0) {
//         console.log("The number is positive");
//     } else if (number < 0) {
//         console.log("The number is negative");
//     } else {
//         console.log("The number is zero");
//     }
//     if (age > 18) {
//         console.log("You are eligible to vote");
//     } else if (age < 18 && age > 0) {
//         console.log("You are not eligible to vote");
//     } else {
//         console.log("Invalid input");
//     }

// }

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
    lil.forEach((el)=>{
        console.log(el.textContent)
    });

console.log(document.body.innerText)


const paara = document.getElementById('para');
console.log(paara);

paara.innerText="helloo"
// paara.innerHTML = "<span> HEllo kk </span>"

// NOTE textContent = directly reads the text without performing calculation on the css the text is printed as it is as our file 

//NOTE innerText = preserves the css properties
//NOTE innerHTML = when you have to create the html in the element you have selected

// value , href , src 

const input = document.getElementById("bear")
console.dir(input.value);

//href 
const a= document.getElementById('address');
console.log(a.href);
a.href='https://www.amazon.com'

//src
const pic = document.getElementById('bear-photo');
console.log(pic.src)
pic.src='./don.jpeg';

// NOTE - changing style on the element 
heading.style.color='red';
heading.style.backgroundColor='blue';

//NOTE - SetAttribute and get Attribute
a.setAttribute('class','address');

//NOTE - get the value of the specific attribute
// console.log(a.getAnimations('class'))

input.setAttribute('placeholder','enter bear Name');

// remoing classes or add classes
console.log(heading.classList.remove('h1'))
heading.classList.add('h1') ;

// NOTE create new elements using Js ;
// createElement() only available on the document object

// const h2 = document.createElement('h2');
// h2.innerText = "secondary heading"
// console.log(h2) ;

//NOTE decide where to place your new created element then select the particular element where you have to place the new element.
//NOTE append to add element after the selected element
//NOTE prepend to add element before the selected element
// heading.prepend(h2) ;  

// const newli = document.createElement('li');
// newli.textContent = 'new list';
// console.log(newli) ;
// const ul = document.getElementById('list');
// ul.prepend(newli) ;

//NOTE adding a newly created element to the document or html file
// append , appendChild 

//NOTE insertAdjacentElement(position , element)
// position have four values beforebegin , afterbegin , beforeend , afterend
// ul.insertAdjacentElement('afterend', newli) ;


//NOTE EVENTS  
//click , mouseenter , moosueleave , keypress , onchange , onsubmit
//addEventListerner(eventName , function)
//click , mouseenter , mouseLeave
// const btn = document.getElementById('btn');
// btn.addEventListener('click', ()=>{
//     document.body.style.backgroundColor = 'red'
// })

//keypress , keydown and keyup
// document.addEventListener('keyup',(event)=>{
// if(event.key === 'f'){
//     heading.style.color = 'red'
// }
// }) ;
// input.addEventListener('change', ()=>{
//     console.log(input.value)
// })

//submit ;
//REVIEW ALWAYS APPLY ON THE FORM TAG;
// const form = document.getElementById('form');

// form.addEventListener('submit',(event)=>{
    //Note prevents the default refreshing behaviour of the page when we try to submit the form.
//     event.preventDefault();

//  console.log(input.value);
// })

//short circuting;
// || &&
console.log(2&&3);
console.log(0||1);
console.log(null ?? 10);
//nullish cooelsing operator ??

// console.log(window) ;

// setTimeout(()=>{
// console.log('hello')
// },3000)

// const clrInterval = setInterval(()=>{
//     console.log('run in every 1 sec')
// },1000)

//to clear the execution of the setInterval
// clearInterval(clrInterval);

//event loop ;
//call stack;
//execution context ;
//global execution context ;
//callback queue ;

//NOTE callback ;

// function first(callback){
//     console.log(callback)
// const d = 'hello ' ;
// callback(d);
// }

// function second(data){
//     console.log(data)
// }

// first((data)=>{
// console.log(data)
// })

//when next step is dependent on previour one in the case of the callback leads to callback hell ..

// function step1(callback){
//    setTimeout(()=>{
//   console.log('step1 complete');
//   callback();
//    },1000) 

// }

// function step2(callback){
//    setTimeout(()=>{
//   console.log('step2 complete');
//   callback();
//    },1000) 

// }

// function step3(callback){
//    setTimeout(()=>{
//   console.log('step3 complete');
//   callback();
//    },1000) 

// }
// function step4(){
//    setTimeout(()=>{
//   console.log('step4 complete');
  
//    },1000) 

// }


// step1(()=>{
//     step2(()=>{
//         step3(()=>{
//             step4()
//         })
//     })
// })

    //promises :

    // promises = placeholder,it is a js object 
    // promises = always return from a function 
    //promises have different stages => fulfilled , rejected

    //creating a promises

    const willYouPassInExam = new Promise((resolve,reject)=>{
        resolve('yes');
    })
    console.log(willYouPassInExam)

    function data (){
        return new Promise((resolve,reject)=>{
            const data = 'hello we are learning promises'
            reject(data);
        })
    }
    console.log(data())
    data().then((data)=>{
        console.log(data)
    }).catch((err)=>{
        console.error(err)
    }).finally(()=>{
        console.log('run everytime')
    })

    //🥊NOTE =in the case of the promises fulfilled we have to hancle with .then() method
    //🥊REVIEW in the case of the promises of rejected we have handle with .catch() method
    //🥊REVIEW finally() will always run in both cases.

    // REGULAR PROMISES
    // fetch('https://restcountries.com/v3.1/all').then

    // NOTE ASYNC AWAIT 

    const fetchData = async()=>{
        const res = await fetch('https://randomuser.me/api/');
        const data =await res.json()
        console.log(data)
    }

    fetchData();
    //NOTE STEP-1 create a function and make it async

const apikey = '909d6461103c15e65a08fdc29010e158'
const city1 = 'Tokyo'
const city2 ='London'
const city3 = 'Mumbai'

const url1 = `https://api.openweathermap.org/data/2.5/weather?q=${city1}&appid=${apikey}`
const url2 = `https://api.openweathermap.org/data/2.5/weather?q=${city2}&appid=${apikey}`
const url3 = `https://api.openweathermap.org/data/2.5/weather?q=${city3}&appid=${apikey}`


const fetchWeatherData = async () => {

//   console.log(Promise.all([fetch(url1),fetch(url2),fetch(url3)]))
const [res1,res2,res3]= await Promise.all([fetch(url1),fetch(url2),fetch(url3)])

  console.log(res1,res2,res3)
}

fetchWeatherData()

// //NOTE : Protoypes in javascript ;
// const obj = {
//   name : "ritesh"
// }

// console.log(obj.__proto__) ;

// const animal = {
//   eats : true,
//   walk(){
//     console.log('is walking')
//   }
// }
// const rabbit = {
//   run : true,
//   __proto__ : animal
// }

// //NOTE Object.create creates an empty object and sets the prototype of the newly created object to the value we have passed in the create method ;
// const lion = Object.create(animal) ;
// console.log(lion)
// console.log(lion.eats)



// // we can also use this
// rabbit.__proto__ = animal ;

// console.log(animal)
// console.log(rabbit)
// console.log(animal.eats)
// console.log(rabbit.eats)


//ways to create an object ;

//constructor functions ;

function Animal(name){
    this.name = name ;
  //   this.walk = function(){
  //     console.log(`${this.name} is walking`)
  //   }
  }
  
  //NOTE we can directly set methods on the prototype of the animal which are then available to the all the instance we are going to create with the animal.
  
  Animal.prototype.walk = function(){
      console.log(`${this.name} is walking`)
  }
  
  //ways to call constructor function
  //always call with new keyword ;
  
  const rabbit = new Animal('rabbit')
  console.log(rabbit)
  
  const lion = new Animal('lion');
  console.log(lion.walk())
  
  
  console.log(rabbit.__proto__)
  
  
  const arr = [1,2,3,4];
  console.log(arr) ;
  
  //another way to create an array in the js
  const arr2 = new Array();
  // console.log(arr2)
  //NOTE directly saving methods on the prototype;
  Array.prototype.laugh = function(){
      console.log('haha')
  }
  
  console.log(arr2.laugh()) ;

  import React, { useEffect , useState } from 'react'

function App() {
  const [count ,setCount] = useState(0);
  
//NOTE without dependency array
  useEffect(()=>{
    console.log('this will run every time')
  })

  //NOTE with empty dependency array
  useEffect(()=>{
    console.log("this will run one time when page refresh")
  },[])

  //note this will run when dependency changes or updated
  useEffect(()=>{
    console.log('this will run when count increase')
  },[count])

  return (
    <div>
      <p>{count}</p>
    <button onClick={()=>{setCount(count+1)}}>increase</button>
    </div>
  )
}

export default App

// useEffect(callback ,dependeny array) ;

//NOTE useEffect is a hook in react which is used to perform side effects in the functional component.

//NOTE useEffect is a replacement of the lifecycle methods in the class component.

function product(){
    useEffect(()=>{
        const fetchData = async
        const res = await fetch('https://randomuser.me/api/');
        const data =await res.json();
        console.log(data.products);
        fetchData();
    }, []);
}