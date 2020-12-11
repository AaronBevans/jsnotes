/*
- variables
- data types
- strings
- short circuiting
- ternary
- conditionals
- switch statements
- functions; accessing global variables/scope
- closures/ partial application
- default parameters
- arrow functions
- call-back functions
- object literals; destructuring, ...object spread
- map object type; .set(), forEach(()=>{}), ...map object spread

- PRACTICE ARRAY METHODS/OPERATIONS -

- map(()=>{})
- filter(()=>{})
- reduce(()=>{})
- some(()=>{}) / every(()=>{})
- find(()=>{})
- forEach(()=>{})

Plus:

- findIndex()
- slice(beginning place, ending place)
- concat()
- includes()
- array destructuring
- array spread operator [...arraySpread]
- Object.keys()
- Object.values()
- Object.entries()
- for-in loop; iterates over object data
- sets
- for-of loop; iterates over new Set data;
sets maintain uniques values; unless different object type.
- for-loop
- constructor functions
- classes
- class methods
- prototype.chaining
- extends keyword
- super(); function/method used for child classes inheriting properties
from parent classes.
*/

/*
PRACTICE CLASS METHODS/OPERATIONS

classes;

Classes are a template for creating objects.
They encapsulate data with code to work on that data.
Classes in JS are built on prototypes but also have some syntax and
semantics that are not shared with ES5 classalike semantics.

- sharing methods between parent and children classes.
- how to use 'get' and 'set' keywords on classes.
- .bind() explicitly binds a method(s) to classes within the constructors().
.bind() makes a method refer to a class/value. 

- DOM; Document Object Model.
- what is the DOM?
- Get single and multiple elements
- Create and modify HTML elements
- Dynamically add css styles
- Work with and understand events

//what is the DOM?
//DOM; Document Object Model; document; lives on the window.
/*DOM is an object that represents all of the HTML as objects that can 
be modified by js.*/
/*
- get single element tags containing id from DOM; document.getElementById()
- get multiple elements with matching tags from DOM; document.getElementsByTagName()
- get first single element from DOM id/class; document.querySelector()
- get multiple elements from DOM id/class; document.querySelectorAll()//most superior.
- access a tag and link with forEach(()=>{}), conditionals and .matches('tag type[]'). method.
- creating and modifying html elements; 
- applying class selector to an element with .className = ''
*/

//each tag is a 'node'
//console.log(document.body)

//creating an element and adding it to the DOM.
// const p = document.createElement('p')
// p.innerText = 'working with the DOM'
// document.body.append(p)

//access a specific DOM node and applying style to it.
document.body.style.backgroundColor = 'tan'


//document.getElementById = used to get individual elements with Ids

//Ids can only be used once/are unique.
let homeTagId = document.getElementById('search')
console.log(homeTagId)

let aboutTagId = document.getElementById('about-me')
console.log(aboutTagId)

let myWorkTagId = document.getElementById('my-work')
console.log(myWorkTagId)

let contactMeTagId = document.getElementById('contact-me')
console.log(contactMeTagId)

//document.querySelector = used to get first single elements
let firstOfUls = document.querySelector('ul')
firstOfUls.style.border = 'solid 10px black'
console.log(firstOfUls)

//accesses a node list.
let pageAccessed = document.querySelectorAll('p')
console.log(pageAccessed)

// //document.querySelectorAll = used to get multiple elements
// let anchors = document.querySelectorAll('a')
// console.log(anchors)

// //logging a DOM node and its anchor tag link.
// let getAnchorElements = anchors.forEach((anchor)=>{
//     if(anchor.matches('a[href="https://www.google.com/"]')){
//         let searchLink = anchor
//         console.log(searchLink)
//     }
// })

//returns an html collection of specific node tags
let newDiv = document.getElementsByTagName('div')
console.log(newDiv)

//getting multiple elements with querySelectorAll() method.
// Dynamicallty add css styles individually 
let imgTagAccess = document.querySelectorAll('img')
imgTagAccess = document.querySelector('img')
imgTagAccess.style.backgroundColor = 'white'
console.log(imgTagAccess)

//creating and modifying html elements.
//applying properties to the DOM node/objects.

let newPostDiv = document.createElement('div')
newPostDiv.className = 'strong-post'
console.log(newPostDiv)
newPostDiv.innerHTML = '<strong>This is the first post.</strong>'
newPostDiv.style.backgroundColor = 'ghostWhite'
newPostDiv.style.textAlign = 'center'

//adding the newly created and styled element with the .append() method.
document.body.append(newPostDiv)
// document.body.prepend(newPostDiv)


//understanding what is targeted when an event gets targetted.
let pTarget = document.querySelector('p')

pTarget.addEventListener('click', event =>{
    console.log(event.target)//logging out the targeted elements contents.
})

// Dynamicallty add css styles individually or using forEach(()=>{})
let paragraphText = document.querySelectorAll('.p-text')

paragraphText.forEach(pText=>{

    pText.addEventListener('click', ()=>{
        pText.style.backgroundColor = 'yellow'
        pText.style.padding = '10px'
        pText.style.margin = '50px'
        pText.style.textAlign = 'center'
        console.log(pText.className)
    })
})

//loops over all 'img' elements and applies event and styling.
let pageImg = document.querySelectorAll('.main-image')

pageImg.forEach((manageImg)=>{
    manageImg.addEventListener('click', event =>{
        manageImg.style.backgroundColor = 'red'
    })
})

pageImg = document.querySelectorAll('.main-image')

pageImg.forEach(imgManaged=>{
    imgManaged.addEventListener('dblclick', event =>{
        imgManaged.style.backgroundColor = 'blue'
    })
})

//peforms action on elements closest to targeted element.
document.body.addEventListener('click', event=>{
    if(!event.target.closest('a')) return
    console.log('leave current page?')
})

//loops over all 'a' elements and applies event and styling.
let anchorsTag = document.querySelectorAll('a')

anchorsTag.forEach(aTag=>{
    aTag.addEventListener('click', event=>{
        aTag.style.textDecoration = 'underlined'
    })
})

anchorsTag = document.querySelectorAll('a')

anchorsTag.forEach(aTag=>{
    aTag.addEventListener('dblclick', event=>{
        aTag.style.textDecoration = 'none'
    })
})



// const posts = document.querySelectorAll(".post");

// posts.forEach(post => {  
//   post.addEventListener('click', event => {
//     console.log(event.target);  
//     console.log('Do you want to edit this post?')
//   });
// post.style.backgroundColor = 'red'
// })

/*
- variables
- data types
- strings
- short circuiting
- ternary
- conditionals
- switch statements
- functions; accessing global variables/scope
- closures/ partial application
- default parameters
- arrow functions
- call-back functions; A callback is a function passed as an argument to another function
This technique allows a function to call another function.
A callback function can run after another function has finished
- object literals; destructuring, ...object spread
- map object type; .set(), forEach(()=>{}), ...map object spread

- PRACTICE ARRAY METHODS/OPERATIONS -

- map(()=>{})
- filter(()=>{})
- reduce(()=>{})
- some(()=>{}) / every(()=>{})
- find(()=>{})
- forEach(()=>{})

Plus:

- findIndex()
- slice(beginning place, ending place)
- concat()
- includes()
- array destructuring
- array spread operator [...arraySpread]
- Object.keys()
- Object.values()
- Object.entries()
- for-in loop; iterates over object data
- sets
- for-of loop; iterates over new Set data;
sets maintain uniques values; unless different object type.
- for-loop; iterates over an array's contents.
- constructor functions
- classes
- class methods
- prototype.chaining
- extends keyword
- super(); function/method used for child classes inheriting properties
from parent classes.
*/

/*
PRACTICE CLASS METHODS/OPERATIONS

classes;

Classes are a template for creating objects.
They encapsulate data with code to work on that data.
Classes in JS are built on prototypes but also have some syntax and
semantics that are not shared with ES5 classalike semantics.

- sharing methods between parent and children classes.
- how to use 'get' and 'set' keywords on classes.
- .bind() explicitly binds a method(s) to classes within the constructors().
.bind() makes a method refer to a class/value. 

- DOM; Document Object Model.
- what is the DOM?
- Get single and multiple elements
- Create and modify HTML elements
- Dynamically add css styles
- Work with and understand events

//what is the DOM?
//DOM; Document Object Model; document; lives on the window.
/*DOM is an object that represents all of the HTML as objects that can 
be modified by js.*/
/*
- get single element tags containing id from DOM; document.getElementById()
- get multiple elements with matching tags from DOM; document.getElementsByTagName()
- get first single element from DOM id/class; document.querySelector()
- get multiple elements from DOM id/class; document.querySelectorAll()//most superior.
- access a tag and link with forEach(()=>{}), conditionals and .matches('tag type[]'). method.
- creating and modifying html elements; 
- applying class selector to an element with .className = ''
- add events to elements with .addEventListener(()=>{
})

- loop over events with .forEach(()=>{ and add styling to multiple elements.
    .addEventListener(('fired event', param)=>{
        .style. = ''
    })
})

- peform event actions on elements that are closest()/macthes() a targeted element with;
- Ajax;

- Working with AJAX; asynchronus javaScript;
With Ajax, web applications can send and retrieve data from a server asynchronously 
(in the background)without interfering with the display and behaviour of the existing page.
- non-blocking; can continue operations when others are taking longer to complet.
- ajax allows multiple lines of code to run.
- ajax; some operations will take an unknown amount of time to execute.
- problems with callbacks
- fix callback hell (an abundance of callback functions.); new Promise((resolve, reject)=>{
new Promise(()=>{}); type of ajax constructor function.
})
- call-back functions; A callback is a function passed as an argument to another function
This technique allows a function to call another function.
A callback function can run after another function has finished.

- new Promise(()=>{}); is a constructor function; returns an instance of itself.
promises; contain three different states when created; pending, fulfilled, rejected.
promises; start with the 'pending' state until promise is either 'fulfilled' or 'rejected'.
promises; 
*/


let logNewHeading = document.querySelector('.strong-post')//strong post contains <strong> styling on it.

logNewHeading.addEventListener('click', event=>{
    setTimeout(()=>{//basic async function.
        event.target.textContent = 'Element created and appended using js.'//run code after 3 seconds.
    }, 3000)//delay code for 3 seconds.
})


//peform event actions on elements that are closest()/macthes() a targeted element with;
//Ajax;

document.body.addEventListener('click', event=>{
    if(!event.target.closest('h1')) return//conditional statement.
    setTimeout(()=>{//basic async function.
        console.log('welcome!')
    }, 3000)
})

//fixing callback hell; promises
//listening for changes in promises based on returned state.
//.then(()=>{}) or .catch(()=>{}); one state is used at a time based on function/conditions.
//.finally(()=>{})

//callback functions; take other functions as arguments 
//callback hell v
function displayTitle(){
    let display = '<h1>Working with the DOM</h1>'
    document.querySelector('h1').innerHTML = display
}

function changeMainTitle(newDisplay){
    let title1 = document.querySelector('h1')
    return newDisplay(
        title1.addEventListener('click', event=>{
            event.target.textContent = 'Callback operations on the DOM'
        })
    )
}


function changeMainTitle2(newDisplay){
    let title2 = document.querySelector('h1')
    return newDisplay(
        title2.addEventListener('click', event=>{
            event.target.textContent = 'More Callback operations on the DOM'
        })
    )
}

changeMainTitle2(displayTitle)
changeMainTitle(displayTitle)






////
let promise = new Promise((resolve, reject)=>{
    resolve('success')
})
promise.then(value=> console.log(value))
console.log(promise)


function addTwoNums(num1, num2){
    let val = num1 + num2
    if(val < 5){
        console.log(`${val} is less than 5`)
    }else{
        console.log(`${val} is greater than 5`)
    }
}

let newPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('promise success')
    }, 1000)
})
newPromise.then(
    addTwoNums(1, 1)
).catch(error => console.log(error)).finally(()=> console.log('done'))


//challange; create a function using setTimeout(()=>{}, 1000) called paused but write it as a promise.
let paused = new Promise((resolve, reject)=>{//resolve and reject are built in functions.
        setTimeout(()=>{
            function mathPerformance(){
                let val = 1 + 1
                if(val === 2){
                    console.log(`${val} is the correct value`)
                    resolve('math promise success')
                }else{
                    console.log(`${val} is the correct value`)
                    resolve('math promise failed')
                }
        }
        mathPerformance()
    }, 3000)
})
paused.then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log('done')
})

//alternate
paused = new Promise((resolve, reject)=>{//resolve and reject are built in functions.
        setTimeout(()=>{
            function mathPerformance(){
                let val = 1 + 2
                if(val === 2){
                    console.log(`${val} is the correct value`)
                    resolve('math promise success')
                }else{
                    console.log(`${val} is the correct value`)
                    reject('math promise failed')
                }
        }
        mathPerformance()
    }, 3000)
})
paused.then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log('done')
})


//write a function called paused that will list out an array object based on a certain condition.
let pausedPromise = new Promise((resolve, reject)=>{

    function arrayfun(){
        let arrayObj = [
            {value: 1},
            {value: 2},
            {value: 3}
        ]
        
        let clonedArray = arrayObj.map((array) =>{
            if(array.value > 1){
                setTimeout(()=>{
                console.log(array.value)
                }, 3000)
            }else{
                console.log('object value is not greater than 1')
            }
        })
    }
    arrayfun()

})
pausedPromise.then((value)=>{
    console.log(value)
}).catch((error)=>{//error will not run because no error found.
    console.error('array promise failed')
}).finally(()=>{
    console.log('done')
})

//callback functions.

let num = 1
function numberOps(){//function that returns a number
    return `number starts at ${num * 1}.`
}


function numberOpsProduct(callback){//function that greets user with the new product.
    let newProduct = `${num * 2}`
    return callback(
        console.log(`the returned product is ${newProduct}.`)
    )
}

function greetingWithProduct(callback){//function that greets user with the new product.
    let newestProduct = `${num * 3}` 
    return callback(
        console.log(`the returned product is ${newestProduct}.`)
    )
}

numberOpsProduct(numberOps)
greetingWithProduct(numberOps)

//convert callback into a promise
let mathPromise = new Promise((resolve, reject)=>{
    let numbers = [
        1, 2, 3, 4, 5
    ]
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] < 10){
        setTimeout(()=>{
            console.log(numbers[i] * 2)
        }, 5000)
        }else{
            console.log('bad math loop')
        }
    }
})
mathPromise.then((value)=>{
    console.log('success')
}).catch((error)=>{
    console.log('error')
}).finally(()=>{
    console.log('done')
})


/*
- variables
- data types
- strings
- short circuiting
- ternary
- conditionals
- switch statements
- functions; accessing global variables/scope
- closures/ partial application
- default parameters
- arrow functions
- call-back functions; A callback is a function passed as an argument to another function
This technique allows a function to call another function.
A callback function can run after another function has finished
- object literals; destructuring, ...object spread
- map object type; .set(), forEach(()=>{}), ...map object spread

- PRACTICE ARRAY METHODS/OPERATIONS -

- map(()=>{})
- filter(()=>{})
- reduce(()=>{})
- some(()=>{}) / every(()=>{})
- find(()=>{})
- forEach(()=>{})

Plus:

- findIndex()
- slice(beginning place, ending place)
- concat()
- includes()
- array destructuring
- array spread operator [...arraySpread]
- Object.keys()
- Object.values()
- Object.entries()
- for-in loop; iterates over object data
- sets
- for-of loop; iterates over new Set data;
sets maintain uniques values; unless different object type.
- for-loop; iterates over an array's contents.
- constructor functions
- classes
- class methods
- prototype.chaining
- extends keyword
- super(); function/method used for child classes inheriting properties
from parent classes.
*/

/*
PRACTICE CLASS METHODS/OPERATIONS

classes;

Classes are a template for creating objects.
They encapsulate data with code to work on that data.
Classes in JS are built on prototypes but also have some syntax and
semantics that are not shared with ES5 classalike semantics.

- sharing methods between parent and children classes.
- how to use 'get' and 'set' keywords on classes.
- .bind() explicitly binds a method(s) to classes within the constructors().
.bind() makes a method refer to a class/value. 

- DOM; Document Object Model.
- what is the DOM?
- Get single and multiple elements
- Create and modify HTML elements
- Dynamically add css styles
- Work with and understand events

//what is the DOM?
//DOM; Document Object Model; document; lives on the window.
/*DOM is an object that represents all of the HTML as objects that can 
be modified by js.*/
/*
- get single element tags containing id from DOM; document.getElementById()
- get multiple elements with matching tags from DOM; document.getElementsByTagName()
- get first single element from DOM id/class; document.querySelector()
- get multiple elements from DOM id/class; document.querySelectorAll()//most superior.
- access a tag and link with forEach(()=>{}), conditionals and .matches('tag type[]'). method.
- creating and modifying html elements; 
- applying class selector to an element with .className = ''
- add events to elements with .addEventListener(()=>{
})

- loop over events with .forEach(()=>{ and add styling to multiple elements.
    .addEventListener(('fired event', param)=>{
        .style. = ''
    })
})

- peform event actions on elements that are closest()/macthes() a targeted element with;
- Ajax;

- Working with AJAX; asynchronus javaScript;
With Ajax, web applications can send and retrieve data from a server asynchronously 
(in the background) without interfering with the display and behaviour of the existing page.
- AJAX enables a Web page to update just part of a page 
without disrupting what the user is doing.
- non-blocking; can continue operations when others are taking longer to complet.
- ajax allows multiple lines of code to run.
- ajax; some operations will take an unknown amount of time to execute.
- problems with callbacks
- fix callback hell (an abundance of callback functions.); new Promise((resolve, reject)=>{
new Promise(()=>{}); type of ajax constructor function.
})

- call-back functions; A callback is a function passed as an argument to another function
This technique allows a function to call another function.
A callback function can run after another function has finished.

- new Promise(()=>{}); is a constructor function; returns an instance of itself.
promises; contain three different states when created; pending, fulfilled, rejected.
promises; start with the 'pending' state until promise is either 'fulfilled' or 'rejected'.
promises;

- .fetch() method api; used to make an ajax network request to retrieve data from 
REST api architectual code.
CRUD; CRUD is an acronym that comes from the world of computer programming and 
refers to the four functions that are considered necessary to implement a 
persistent storage application: create, read, update and delete.  
- CRUD; v
Create; POST method; creates resource/data.
Rread; GET method; retrieves data from database.
Update; PUT/PATCH methods; updates data.
Delete; DELETE method; allows deletion of data.

- Dead-simple Promises with async-await; 
allows us to avoid writting multiple callback functions
when using the fetch() api/method

- async functions always returns a promise
*/


//practtice code
function name(myName){
    return myName
}
name('cyberman')

let newNumsArray = [
    1, 2, 3, 4, 5
]

let modifyArrayValues = newNumsArray.reduce((acc, nums)=>{
    if(nums > 1){
        return acc + nums
    }else{
        return acc
    }
}, 0)
console.log(modifyArrayValues)

modifyArrayValues = newNumsArray.reduce((acc, nums)=>{
    if(nums > 1){
        return acc.concat(nums)
    }else{
        return acc
    }
}, [])


modifyArrayValues = newNumsArray.map((nums)=>{
    if(nums > 1){
        return nums > 1 
    }else{
        return nums
    }
})

modifyArrayValues = newNumsArray.map((nums)=>{
    if(nums > 1){
        console.log(true)
    }else{
        console.log(false)
    }
})

// GET data with .fetch()
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .finally(console.log('promise complete'))


/*
depending on the outcome of our fetch request
when retrieving data, we can return success or error codes with; 
throw new  Error(response.status)
*/
//start with promise('callback function template')

let myNewPost = {
    title: 'my first data post',
    body: 'this is my first data post',
    userId: 1
}

fetch('https://jsonplaceholder.typicode.com/posts', {/*the fetch() method takes 
an object when posting.*/
    method: 'POST',
    headers: {
        'Content-type': 'application/json; charset= UTF-8',
    },
    body: JSON.stringify(myNewPost)
})
.then(response => response.json())
.then(data => console.log(data))//determined how the incoming data is presented to user.
.finally(console.log('promise complete'))


/*create a network request to REST api templet to 'POST' data using the fetch() api
*/
let recentPost = {
    title: 'my most recent post',
    body: 'most recent post',
    userId: 2
}

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers:{
        'Content-type': 'application/json; charset= UTF-8'
    },
    body: JSON.stringify(recentPost)
})
.then(response => response.json())
.then(data=> console.log(data))//determined how the incoming data is presented to user.
.catch(error => console.error('promise error'))



/*
create a network request to REST api template using 'PUT' to 
update data using the fetch() api.
*/
recentPost = {
    title: 'most recent post',
    date: '11.10.2020',
    body: 'most recent post updated 11.10.2020',
    uerId: 2
}
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    headers:{
        'Content-type': 'application/json; charset= UTF-8'
    },
    body: JSON.stringify(recentPost)
})
.then(response=> response.json())
.then(data=> console.log(data))//determined how the incoming data is presented to user.
.finally(console.log('promise update complete'))

/*
create a network request to REST api template using 'PATCH' to 
update data using the fetch() api.
*/
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    headers:{
        'Content-type': 'application/json, charset=UTF-8'
    },
    body: JSON.stringify({
        title: 'most recent post 11.10.2020 updated with PATCH method'
    })
})
.then(response=> response.json())
.then(data=> console.log(data))//determined how the incoming data is presented to user.
.catch(error=> console.error('promise request error'))
.finally(console.log('promise request fulfilled'))



/*
create a network request to REST api template using 'DELETE' to 
delete data using the fetch() api.
*/
fetch('https://jsonplaceholder.typicode.com/posts/1',{
    method: 'DELETE'
})
.then(response=> response.json())
.then(data=> console.log(data))//json object deleted.
.catch(error=> console.error('promise request error'))
.finally(console.log('promise request fulfilled'))

/*
// Challenge: 
// The JSON Placeholder API has /users endpoint, 
// just like the one we saw in the tutorial for /posts
// Get the user with ID 3 and log their name and company they work for.
// Handle errors if something does not quite work. 
*/

fetch("https://jsonplaceholder.typicode.com/users/3")
.then(response=>{
    if (!response.ok){//handle error if an error exists.
        throw new Error(response.status)
    }
    return response.json()
})
.then(data =>{
    console.log(`${data.name} works at ${data.company.name}`)
})
.catch(error => console.log(err))


/*
- variables
- data types
- strings
- short circuiting
- ternary
- conditionals
- switch statements
- functions; accessing global variables/scope
- closures/ partial application
- default parameters
- arrow functions
- call-back functions; A callback is a function passed as an argument to another function
This technique allows a function to call another function.
A callback function can run after another function has finished
- object literals; destructuring, ...object spread
- map object type; .set(), forEach(()=>{}), ...map object spread

- PRACTICE ARRAY METHODS/OPERATIONS -

- map(()=>{})
- filter(()=>{})
- reduce(()=>{})
- some(()=>{}) / every(()=>{})
- find(()=>{})
- forEach(()=>{})

Plus:

- findIndex()
- slice(beginning place, ending place)
- concat()
- includes()
- array destructuring
- array spread operator [...arraySpread]
- Object.keys()
- Object.values()
- Object.entries()
- for-in loop; iterates over object data
- sets
- for-of loop; iterates over new Set data;
sets maintain uniques values; unless different object type.
- for-loop; iterates over an array's contents.
- constructor functions
- classes
- class methods
- prototype.chaining
- extends keyword
- super(); function/method used for child classes inheriting properties
from parent classes.
*/

/*
PRACTICE CLASS METHODS/OPERATIONS

classes;

Classes are a template for creating objects.
They encapsulate data with code to work on that data.
Classes in JS are built on prototypes but also have some syntax and
semantics that are not shared with ES5 classalike semantics.

- sharing methods between parent and children classes.
- how to use 'get' and 'set' keywords on classes.
- .bind() explicitly binds a method(s) to classes within the constructors().
.bind() makes a method refer to a class/value. 

- DOM; Document Object Model.
- what is the DOM?
- Get single and multiple elements
- Create and modify HTML elements
- Dynamically add css styles
- Work with and understand events

//what is the DOM?
//DOM; Document Object Model; document; lives on the window.
/*DOM is an object that represents all of the HTML as objects that can 
be modified by js.*/
/*
- get single element tags containing id from DOM; document.getElementById()
- get multiple elements with matching tags from DOM; document.getElementsByTagName()
- get first single element from DOM id/class; document.querySelector()
- get multiple elements from DOM id/class; document.querySelectorAll()//most superior.
- access a tag and link with forEach(()=>{}), conditionals and .matches('tag type[]'). method.
- creating and modifying html elements; 
- applying class selector to an element with .className = ''
- add events to elements with .addEventListener(()=>{
})

- loop over events with .forEach(()=>{ and add styling to multiple elements.
    .addEventListener(('fired event', param)=>{
        .style. = ''
    })
})

- peform event actions on elements that are closest()/macthes() a targeted element with;
- Ajax;

- Working with AJAX; asynchronus javaScript;
With Ajax, web applications can send and retrieve data from a server asynchronously 
(in the background) without interfering with the display and behaviour of the existing page.
- AJAX enables a Web page to update just part of a page 
without disrupting what the user is doing.
- non-blocking; can continue operations when others are taking longer to complet.
- ajax allows multiple lines of code to run.
- ajax; some operations will take an unknown amount of time to execute.
- problems with callbacks
- fix callback hell (an abundance of callback functions.); new Promise((resolve, reject)=>{
new Promise(()=>{}); type of ajax constructor function.
})

- call-back functions; A callback is a function passed as an argument to another function
This technique allows a function to call another function.
A callback function can run after another function has finished.

- new Promise(()=>{}); is a constructor function; returns an instance of itself.
promises; contain three different states when created; pending, fulfilled, rejected.
promises; start with the 'pending' state until promise is either 'fulfilled' or 'rejected'.
promises;

- .fetch() method api; used to make an ajax network request to retrieve data from 
REST api architectual code.
CRUD; CRUD is an acronym that comes from the world of computer programming and 
refers to the four functions that are considered necessary to implement a 
persistent storage application: create, read, update and delete.  
- CRUD; v
Create; POST method; creates resource/data.
Rread; GET method; retrieves data from database.
Update; PUT/PATCH methods; updates data.
Delete; DELETE method; allows deletion of data.

- Dead-simple Promises with async-await; 
allows us to avoid writting multiple callback functions
when using the fetch() api/method

- async functions always returns a promise

/*
- nest a Promise inside of an async function.
*/

/*
- async await pauses promise code until all requests are resolved;
not using .then() or .catch() or .finally().
*/

/*
- async functions using the fetch() api.
used to write cleaner promises; avoids callback hell.
use of await.
*/


/*
async functions always returns a promise
*/

//returns data string and a promise.
async function returnAsyncData(){
    console.log('returning data')
}
returnAsyncData()

/*
nest a Promise inside of an async function.
*/

async function returnPromiseData(){
    let funPromise = new Promise((resolve, reject)=>{
        console.log('logging promise data using async functions')
    })
    .then(value=> console.log(value))
    .catch(error=> console.error(error))
    .finally(()=> console.log('done'))
}
returnPromiseData()


/*
async await pauses code until all requests are resolved;
not using .then() or .catch() or .finally().
*/
async function returnAsyncPromiseData(){
    let funPromise = new Promise((resolve, reject)=>{
        console.log('logging promise data using async functions')
    })
    let result = await funPromise;
    console.log(result)
    console.log('done')
}
returnAsyncPromiseData()

/*
async functions using the fetch() api.
used to write cleaner promises; avoids callback hell.
*/
async function fetchAwaits(){
    const request = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data = await request.json()
    console.log(data)
    console.log('done')
}
fetchAwaits()

/*
nest a Promise inside of an async function.
*/
async function logPromiseData(){
    let promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response=> response.json())
            .then(json=> console.log(json))
        }, 3000)
    })
    promise.then(value=> console.log(value))
    .catch(error=> console.error(error))
    .finally(console.log('done'))
}
logPromiseData()

/*
async await pauses promise code until all requests are resolved;
not using .then() or .catch() or .finally().
*/
async function resultAwaits(){
    let promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response=> response.json())
            .then(json=> console.log(json))
        }, 3000)
    })

    let result = await promise
    console.log(result)
    console.log('done')
}
resultAwaits()

/*
async functions using the fetch() api.
used to write cleaner promises; avoids callback hell.
use of await.
*/
async function logData(){
    let request = await fetch('https://jsonplaceholder.typicode.com/posts')
    let dataResults = await request.json()
    console.log(dataResults)
}
logData()

/*
nest a Promise inside of an async function.
*/
async function nestedAsyncPromise(){
    let promise = new Promise((resolve, reject)=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response=> response.json())
        .then(data=> console.log(data))//deterimines how/if data will be displayed.
        .catch(error=> console.error(error))
        .finally(()=> console.log('done'))
    })
}
nestedAsyncPromise()


/*
async await pauses promise code until all requests are resolved;
not using .then() or .catch() or .finally().
*/
async function displayAsyncData(){
    setTimeout(()=>{
        let promise = new Promise((resolve, reject)=>{
            fetch('https://jsonplaceholder.typicode.com/posts/2')
            .then(response=> response.json())
            .then(json=> console.log(json))//data is returned as json.
            .catch(error=> console.error(error))
        })
    }, 3000)

    let result = await promise
    console.log(result)
    console.log('done')
}
displayAsyncData()


/*
async functions using the fetch() api.
used to write cleaner promises; avoids callback hell.
use of await.
*/
async function promisedAsyncData(){
    let promise = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    let result = await promise.json()//converts network request response into json.
    console.log(result)//logs out json data.
    console.log('done')
}
promisedAsyncData()

/*
- variables
- data types
- strings
- short circuiting
- ternary
- conditionals
- switch statements
- functions; accessing global variables/scope
- closures/ partial application
- default parameters
- arrow functions
- call-back functions; A callback is a function passed as an argument to another function
This technique allows a function to call another function.
A callback function can run after another function has finished
- object literals; destructuring, ...object spread
- map object type; .set(), forEach(()=>{}), ...map object spread

- PRACTICE ARRAY METHODS/OPERATIONS -

- map(()=>{})
- filter(()=>{})
- reduce(()=>{})
- some(()=>{}) / every(()=>{})
- find(()=>{})
- forEach(()=>{})

Plus:

- findIndex()
- slice(beginning place, ending place)
- concat()
- includes()
- array destructuring
- array spread operator [...arraySpread]
- Object.keys()
- Object.values()
- Object.entries()
- for-in loop; iterates over object data
- sets
- for-of loop; iterates over new Set data;
sets maintain uniques values; unless different object type.
- for-loop; iterates over an array's contents.
- constructor functions
- classes
- class methods
- prototype.chaining
- extends keyword
- super(); function/method used for child classes inheriting properties
from parent classes.
*/

/*
PRACTICE CLASS METHODS/OPERATIONS

classes;

Classes are a template for creating objects.
They encapsulate data with code to work on that data.
Classes in JS are built on prototypes but also have some syntax and
semantics that are not shared with ES5 classalike semantics.

- sharing methods between parent and children classes.
- how to use 'get' and 'set' keywords on classes.
- .bind() explicitly binds a method(s) to classes within the constructors().
.bind() makes a method refer to a class/value. 

- DOM; Document Object Model.
- what is the DOM?
- Get single and multiple elements
- Create and modify HTML elements
- Dynamically add css styles
- Work with and understand events

//what is the DOM?
//DOM; Document Object Model; document; lives on the window.
/*DOM is an object that represents all of the HTML as objects that can 
be modified by js.*/
/*
- get single element tags containing id from DOM; document.getElementById()
- get multiple elements with matching tags from DOM; document.getElementsByTagName()
- get first single element from DOM id/class; document.querySelector()
- get multiple elements from DOM id/class; document.querySelectorAll()//most superior.
- access a tag and link with forEach(()=>{}), conditionals and .matches('tag type[]'). method.
- creating and modifying html elements; 
- applying class selector to an element with .className = ''
- add events to elements with .addEventListener(()=>{
})

- loop over events with .forEach(()=>{ and add styling to multiple elements.
    .addEventListener(('fired event', param)=>{
        .style. = ''
    })
})

- peform event actions on elements that are closest()/macthes() a targeted element with;
- Ajax;

- Working with AJAX; asynchronus javaScript;
With Ajax, web applications can send and retrieve data from a server asynchronously 
(in the background) without interfering with the display and behaviour of the existing page.
- AJAX enables a Web page to update just part of a page 
without disrupting what the user is doing.
- non-blocking; can continue operations when others are taking longer to complet.
- ajax allows multiple lines of code to run.
- ajax; some operations will take an unknown amount of time to execute.
- problems with callbacks
- fix callback hell (an abundance of callback functions.); new Promise((resolve, reject)=>{
new Promise(()=>{}); type of ajax constructor function.
})

- call-back functions; A callback is a function passed as an argument to another function
This technique allows a function to call another function.
A callback function can run after another function has finished.

- new Promise(()=>{}); is a constructor function; returns an instance of itself.
promises; contain three different states when created; pending, fulfilled, rejected.
promises; start with the 'pending' state until promise is either 'fulfilled' or 'rejected'.
promises;

- .fetch() method api; used to make an ajax network request to retrieve data from 
REST api architectual code.
CRUD; CRUD is an acronym that comes from the world of computer programming and 
refers to the four functions that are considered necessary to implement a 
persistent storage application: create, read, update and delete.  
- CRUD; v
Create; POST method; creates resource/data.
Rread; GET method; retrieves data from database.
Update; PUT/PATCH methods; updates data.
Delete; DELETE method; allows deletion of data.

- Dead-simple Promises with async-await; 
allows us to avoid writting multiple callback functions
when using the fetch() api/method

- async functions always returns a promise
The async and await keywords enable asynchronous, 
promise-based behavior to be written in a cleaner style, 
avoiding the need to explicitly configure promise chains.

/*
- nest a Promise inside of an async function.
*/

/*
- async await pauses promise code until all requests are resolved;
not using .then() or .catch() or .finally().
*/

/*
- async functions using the fetch() api
used to write cleaner promises; avoids callback hell.

- await; The await expression causes async function execution to pause until a Promise is settled 
(that is, fulfilled or rejected), and to resume execution of the async function after fulfillment.

//we use catch to notify user that there is an error when retrieving data.
*/

///
/*
- nest a Promise inside of an async function.
*/
async function promiseAsyncApi(){
    let promise = new Promise((resolve, reject)=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(netResponse=> netResponse.json())
        .then(json=> console.log(json))
        .catch(error=> console.error(error))
    })
}
promiseAsyncApi()

/*
- async await pauses promise code until all requests are resolved;
*/
async function awaitOnAsyncPromise(){
    let promise = new Promise((resolve, reject)=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response=> response.json())
        .then(json=> console.log(json))
    })
    let result = await promise
    console.log(result)
}
awaitOnAsyncPromise()

/*
- async functions using the fetch() api.
used to write cleaner promises; avoids callback hell.
use of await.
not using .then() or .catch() or .finally().
*/
async function noChainPromise(){
    let dataRequest = await fetch('https://jsonplaceholder.typicode.com/posts')
    let dataResult = await dataRequest.json()
    if(!dataResult){
        console.error(Error('404 error on promise'))
    }else{
        console.log(dataResult)
    }
}
noChainPromise()

/*
write cleaner promises with async, await 
catch errors on try{} & catch(error){}.
handle errors.
*/

async function callAsync(){
    try{
        let request = await fetch('https://jsonplaceholder.typicode.com/posts')
        let result = await request.json()
        console.log(result)
    }catch(error){//ids any error in the promise code and logs it.
        error = await Promise.reject(Error('404 error on request'))
        console.error(error)
    }
}
callAsync()


//
async function catchOnAsyncPromise(){
    try{
       let netRequest = await fetch('https://jsonplaceholder.typicode.com/posts')
       let dataResult = await netRequest.json()
    }catch(promiseError){
        promiseError = await Promise.reject(Error('error on network request'))
        console.log('ERROR')
    }
}
catchOnAsyncPromise()



//CREATE, READ, UPDATE, DELETE(CRUD) data while using ftech() api.
//CREATE
let createPost = {
    title: 'creat new data',
    body: 'latest data post',
    userId: 1
}

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(createPost),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
})
.then(response=> response.json())
.then(json=> console.log(json))

//READ
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=> response.json())
    .then(json=> console.log(json))

//UPDATE
createPost = {
    dataId: 1,
    title: 'creat new data',
    body: 'latest data post',
    userId: 1
}
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify(createPost),
    headers:{
        'content-type' : 'application/json; charset = UTF-8'
    }
})
.then(response=> response.json())
.then(json=> console.log(json))

createPost = {
    dataId: 1,
    title: 'creat new data',
    body: 'latest data post',
    userId: 1,
    date: '11.12.2020'
}

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    body: JSON.stringify(createPost),
    headers:{
        'content-type' : 'application/json; charset=UTF-8'
    }
})
.then(response=> response.json())
.then(json=> console.log(json))

fetch('https://jsonplaceholder.typicode.com/posts/1',{
    method: 'DELETE',
    headers: {
        'content-type' : 'application/json; charset=UTF-8'
    }
})
.then(response=> response.json())
.then(json=> console.log(json))

//write cleaner promises with async, await
async function cleanerPromise(){
    let promise = new Promise((resolve, reject)=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response=> response.json())
            .then(json=> console.log(json))
    })
    let result = await promise 
    console.log(result)
    console.log('done')
}
cleanerPromise()

async function syncPromise(){
    let request = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    let response = await request.json()
    console.log(response)
    console.log('promise request fulfilled')
}
syncPromise()

//CATCH promise/fetch() errors with try{}, catch(){} cleaner promises.
async function validateRequest(){
    try{
        let request = await fetch('https://jsonplaceholder.typicode.com/posts')
        let responseData = await request.json()
        setTimeout(()=>{
            switch(responseData){
                case responseData:
                    console.log(responseData)
                break;
                case noRequest:
                    console.error('error on request promise')
                break;
            }
        }, 5000)
    }catch(error){
        setTimeout(()=>{
            console.error(error)
        }, 3000)
    }
}
validateRequest()



//CATCH promise errors with try{}, catch(){} cleaner promises.
async function asyncDataFunction(){
    try{
        let promise = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        if(!promise){
            // console.log('404 error on data request promise')
            throw new Error(promise.status)
        }else{
            setTimeout(()=>{
                console.log(promise.json())
            }, 5000)
        }
    }catch(error){
        console.error(error)
    }
}
asyncDataFunction()

// Challenge: 
// Rewrite the GET API call from the previous challenge using async-await
// 'https://jsonplaceholder.typicode.com/users/3'

async function getUserData(){
    try{
        let request = await fetch('https://jsonplaceholder.typicode.com/users/3')
        switch(request){
            case request: 
                let person = await request.json()
                console.log(`${person.name} works for ${person.company.name}.`)
                break;
            case requestError:
                console.log( Error(request.status))
                break;
        }
    }catch(error){
        console.error(error)
    }
}   
getUserData()





