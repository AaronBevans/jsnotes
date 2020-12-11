{/*assigning a constant variable*/}
const name = 'Aaron'

console.log(name)

{/*assigning a let variable*/}
let number;

number = 100;
console.log(number);

{/*reassigning a constant variable*/}
const data = 'some data';
let newData = data;

newData = 'even better data';
console.log(newData);

{/*User template literals*/}
let favLanguage = 'JavaScript';
let engineeringType = 'Front End';

let message = `I am using a ${favLanguage} library to create applications on the ${engineeringType}.`;
console.log(message);

{/*types, conditionals and switch statements*/}
let darkMode = false
let redMode = true

if(darkMode){
    console.log('dark mode activated!')
    document.body.style.backgroundColor = 'black'
}else if(redMode){
    console.log('red mode activated!')
    document.body.style.background = 'red'
}else{
    console.log('light mode activated!')
    document.body.style.backgroundColor = 'white'
}


switch(darkMode){

    case 'dark':
        console.log('dark mode activated!')
        document.body.style.backgroundColor = 'black';
        break;
    case 'solarized':
        console.log('solarized mode activated!')
        document.body.style.backgroundColor = 'palegoldenrod';
        break;
    default:
        console.log('light mode activated!')
        document.body.style.backgroundColor = 'black';
        break;
}

/*
Primitive types: data that is not an object and has no methods.

string
number
boolean
undefined
null
symbol

everything else - Object type
*/

//How to shorten conditionals with ternaries.
//excercise:
//set title = 'front end developer' if skill = 'javaScript' or false if skill = ''
const skill = 'javaScript'
let title;

title = skill ? 'front end developer' : false


//set title = 'software engineer' if skill = 'javaScript' or false if skill = ''
title = skill ? 1 + ' software engineer' : 0

//short circuiting//
//let name = ''


let username = name ? name : 'unidentified';
console.log(username)

//or op
username = name || 'cyberman'
console.log(username)

name = ''
faveLang = ''

//and op
username = faveLang && name || 'no code'

/* Challenge 1: Let's say you're building Reddit. Only users that are
either moderators or have reached a certain karma threshold are allowed to upvote. */

const karma = 143;
const isModerator = true;

// first use a ternary to set hasEnoughKarma to true if karma is above 100. If not, set it to false
let hasEnoughKarma = karma >= 100 ? isModerator : false;
console.log(hasEnoughKarma)

//  set the value of canUpvote with short-circuiting (using hasEnoughKarma and isModerator)
let canUpvote = hasEnoughKarma && isModerator || false;
console.log("canUpvote:", canUpvote);


/*
Challenge 2: Let's say that only moderators who have
enough karma are allowed to delete posts.  How would you set the canDelete variable
*/

// set canDelete to true if both hasEnoughKarma and isModerator is true
let canDelete = isModerator && canUpvote || false;
console.log("canDelete:", canDelete);


// Challenge 3: what is the value of user? What if you switch the hasValidEmail variable to false? What if the response is empty?

const response = "JohnDoe";
const hasValidEmail = false;

const user = hasValidEmail && (response || "guest");
console.log("user: ", user);//false

/*functions*/
/*purpose: to perform the same action at different times in an app.*/
const user1 = 'aaron'//global

const user2 = 'angelica'//global

message = 'user (user) says: (text)'//global

function echo(input){
    console.log(input)//local scoped
}
echo('hi')

let reply = 'hello there'//global outter scoped.

function replying(input){
    console.log(`${reply} ${input}`)//local scoped
}
replying(user1)

reply = 'how are you today'//global

function echo1(input){
    console.log(`${reply} ${input}?`)
}
echo1(user2)

//chat app with better readability
const newUser1 = 'aaron'
const newUser2 = 'angelica'

function sendMsg(user, text){
    console.log(`User ${user} says: ${text}`)
}
sendMsg(user1, 'Good morning')
sendMsg(user2, 'Good morning handsome')

//function challenge;
// Challenge: Write a function splitBill() that lets you know how much
// you need to pay to split any bill between you and your friends.
// It should return a message with a number.

function splitBill(amount, people){
    return `Everyone needs to pay ${amount / people}`
}
console.log(splitBill(10, 2))
console.log(splitBill(20, 5))
console.log(splitBill(30, 4))

//What is closure and why it matters.
//inner function being able to access outside variables.
function handleLike(){
    let likeCount = 0

    return function addLike(){
        likeCount += 1
        return likeCount
    }
    addLike()

}
const like = handleLike()

console.log('like count:', like())
console.log('like count:', like())
console.log('like count:', like())
console.log('like count:', like())
console.log('like count:', like())

//function closure challenge.
// Challenge: Write a countdown function with a hard-coded starting number inside closure
// Stretch goal: Write a countdown function that can count from a provided number,
// with a provided step

function countDown(number, step){
    return function minus(){//function accessed outter functions parameter/variable.
        number -= step
        return number
    }
    minus()
}
const count = countDown(105, 10)
console.log('new number:', count())
console.log('new number:', count())
console.log('new number:', count())
console.log('new number:', count())
console.log('new number:', count())


function minusCounting(num){
    return function subtracting(){
        num -= 5
        return num
    }
    subtracting()
}
const sub = minusCounting()
console.log('new number:', sub())
console.log('new number:', sub())

//applying closure on chat program.
function greet(){
    let greeting = 'aaron says hello there'
    return function message(){
        return greeting
    }
    message()
}
let convo = greet()
convo()


function msgGreeting(user, msg){
    return function message(){
        return `User ${user} says: ${msg}`
    }
    message()
}
let comms = msgGreeting('aaron', 'hello there')
comms()


//functions: default parameters; default values.
function convertTemp(cels, decimalPlace = 1){
    const fahr = cels * 1.8 + 32;
    return Number(fahr.toFixed(decimalPlace));
}
console.log(convertTemp(15))
console.log(convertTemp(21, 0))
console.log(convertTemp(22))

function addVal(num1, num2 = 5){
    return num1 + num2
}
console.log(addVal(10, 10))


//applying: accessing outside variables,
//closure,
//default parameters
function addNums(num1, num2 = 10){
    return function newSum(){
        num1 += 5
        return num1
    }
    newValSum()
}
let val = addNums(1)
console.log(val())

function addNums1(num1, num2 = 10){
    return function newSum(){
        return num1 += num2
    }
    newSum()
}
let vaL = addNums1(1)
console.log(val())

function fillInMsg(){
    let msg = 'I am'
    let name = 'aaron'
    let lang = 'my favorite language is:'
    return function answers(){
        msg = 'I am: a front end software engineer'
        name = 'cyberman'
        lang = 'my favorite language is: javaSvript'
        return `Hello, ${msg}, my name is ${name} ${lang}`
    }
    answers()
}
convo = fillInMsg()
convo()

//acessing outter variables and using cosure.
let num1;
let num2;

function outterVars(){
    num1 = 5
    num2 = 5
    return function closureFun(){
        num2 = 15//new value to num2 varable.
        num1 += num2
        return num1
    }
    closureFun()
}
let addThis = outterVars()
addThis()

function closureDefaults(num1, num2 = 5){
    return function addVals(){
        num2 = 6
        return `${num1 += num2}`//parameters are reassigned by closure vriables.
    }
    addVals()
}
addThis = closureDefaults(10, 1)
addThis()


//functions: arrow functions/callback functions.

// Challenge: Rewrite your first function from a previous challnge to be an arrow function.
// Stretch goal: Rewrite counting down closure in arrow function form.
const splitBills =(amount, numPeople)=> `Each person needs to pay ${amount / numPeople}`

console.log(splitBills(10, 2));
console.log(splitBills(10, 4));
console.log(splitBills(10, 5));


// Stretch goal start
const countedDown =(startingNumber, step)=>{
    let countFrom = startingNumber + step;
    /**/return ()=> countFrom -= step;
}
const difference = countedDown(20, 5)

console.log(difference());
console.log(difference());
console.log(difference());

//applying: acessing outer variables,
//closure,
//default parameters.
//callback functions

let numb1 = 5
let numb2 = 5

const addSum =()=>{
    let added = numb1 += numb2
    numb1 = 6
    numb2 = 6
    return ()=> numb1 + numb2
}
const sum1 = addSum()
sum1()


const useDefault =(num1, num2 = 5)=>{
    let sum = num1 + num2
    return ()=> num1 += num2
}
let newParams = useDefault(10)
newParams()

//using a callback function to tripple value.
numb1 = 10//global variable of 10.

const doubled = num => num * 2//function that doubles 10.

const tripple =(num, callback)=>{//function that will tripple a value.

    return callback(doubled(num))//returning a callback that takes in doubled function
    //and doubled num value and itself as an argument.
}
const cubed = tripple(numb1, (num) =>{//cubed holds the tripple function
//that takes in numb1 value and a function as arguments

    return num * 3//function now is invoked and trippled the new value of
    //numb1.
})

console.log(cubed)

//functions: partial application/higher-order functions.
function displayName(alias){
    return function newAlias(){
        return alias += ' is cyberman'
    }
}
name = displayName('aaron')//name 
console.log(name())

//how functions should be named.
/*function editName(name){
    let alias = 'cyberman '
    return function addToName(){
        alias += name
        return alias
    }
}
let displayingName = editName('is aaron bevans')

console.log(displayingName())*/

//functions; partial application that returns object data.
let info = 'software engineer'

let systemsAlias = {
        alias: 'cyberman',
        skill: 'hacker'
}

let primarySkills = {
        operatingSystems: 'rhel',
        operatingSystems1: 'windows x',
        operatingSystems2: 'macOs',
        task0: 'penetration testing',
        task1: 'systems administration',
        task2: 'front-end web development',
        languageSpecs: 'scripting',
        language1: 'html5',
        language2: 'css3',
        language3: 'javaScript',
        framework: 'react.js'
}

let getInfo = (info) =>{///parameter(variable)
    return (info, systemsAlias, primarySkills)=>{//closure; closing over a previous value
        return `${info}: ${systemsAlias}, ${primarySkills}`
    }
}
let getData = getInfo(info)
getData(info, systemsAlias.skill, primarySkills.operatingSystems2)


//functions; how they should be named.
//should be named by what they are used for/what they will do.

//objects; variables: boxes, objects: file cabinet for boxes.

//objects and maps
//color application
let blueColor = 'lightblue'
let orangeColor = 'lightorange'

//object to store colors
let object = {

    key: {//nested object
        subKey: 'value'//
    },

    method(){//object functions = methods
        console.log('object method!')
    },

    newMethod: ()=>{
        console.log('new object method!')
    }
}
object.newMethod()

/* objects challenge create a method that stores my favorite technology values and logs out
a message stating what can be done with a specific software technology.*/

let lang = 'javaScript'
let oS = 'linux'
let library = 'react.js'

let techObject = {
    lang,
    oS,
    library,
    greeting(){
        return `I can create a fully functional user interface with ${lang}.`
    }
}
console.log(techObject.oS)
techObject.greeting()



/*
objects: primitives vs objects

primitives: undefined
null, boolean, string, symbol.

immutable;
primitives: maintain the same
data values throughout a program and
are not objects and no methods.


mutable;
objects: have data values can be changed and
can contain methods. Reference type.

two objects: are never a like, but
are assigned by referenced to eachother.
*/

/*creating and mutating object key value pairs*/
let language = 'apple language'
let lango = 'swift'

const languageObj = {
    lang: 'javaScript',
    lang1: 'html',
    lang2: 'css',
    lang3: 'python',
    [language]: lango//dynamically assigning an obj kvp;
}

//dot notation
languageObj.lang4 = 'jsx'
console.log(languageObj)

//square bracket notation
const lang5 = 'swift'
const lang6 = 'iOs development language'

languageObj['lang5'] = lang6
console.log(languageObj)

languageObj['lang6'] = lang5
console.log(languageObj)

//function that returns object key value pair.

const return_Color = key =>
    languageObj[key]
return_Color('lang')

return_Color([language])

/*creating, re/assigning, mutating object key value pairs*/
let freeLance = 'upwork'
let contract = 'free lance'

let techCompanyObj = {
    space: 'nasa',
    media: 'netflix',
    retail: 'amazon',
    socialNet: 'facebook',
    [freeLance]: contract,
    [contract]: freeLance,
    logCompany(key){
        return techCompanyObj[key]
    }
}
console.log(techCompanyObj.logCompany('retail'))

techCompanyObj.comms = 'verizon'
techCompanyObj.manufacturing = 'tesla'
console.log(techCompanyObj)

/*
applying the previous: outside variables, closure,
default parameters, arrow functions.
*/

let styleCSS = 'css styling'

function addLib(newly = 'backbone'){//function that uses closure to return new value.
    return function(){
        newly = newKeyVal = {
            css: 'bootstrap4'
        }
        return newly
    }
}
let addToObj = addLib()
addToObj()

let libraryObj = {
    facebook: 'react.js',
    google: 'angular.js',
    netflix: 'vue.js'
}

libraryObj[styleCSS] = addToObj//mutating & assigning a new value to a key value pair
libraryObj
console.log(libraryObj['css styling'])

//create an object containing a method that will create a new key value pair.
let someObject = {
    fbLibrary: libraryObj.facebook,//accessing outside values.
    createLib(){//method that creates a new key val pair.
        console.log(someObject.favLibrary = libraryObj.facebook)
    }
}

console.log(someObject.fbLibrary)
console.log(someObject.createLib())
console.log(someObject)
console.log(someObject.fbLibrary = someObject.favLibrary)

//object destructuring
const {facebook} = libraryObj

function displayFaveLib(){
    return `my favorite ui framework is ${facebook}`
}
displayFaveLib()

/*
create a new key value pair and use
object destructuring to access in through
a function.
*/

someObject.cssLib = 'boostrap4'

const {fbLibrary, cssLib} = someObject

function masterLib(){
    return `${facebook} and ${cssLib} frameworks are both on my list to master.`
}
masterLib()

/*
create an object that contains a nested object, use object destructuring
to access each key value pair to be returned in a function.
 */


let objectWithin = {
    keyVal: {
        favLang: 'javaScript',
        favFramework: 'react.js'
    }
}

//destructuring an object with nested objects within it.
const { keyVal:{favLang, favFramework} } = objectWithin
console.log(favLang, favFramework)

function extractNested( { keyVal: {favLang, favFramework} } ){
    return `${favLang} is the best language and ${favFramework} is the best library.`
}
extractNested(objectWithin)


console.log(fbLibrary)

function returnMethod({fbLibrary}){
    return `${fbLibrary}`
}
returnMethod(someObject)

//objects; merge objects with object spread.

const techObj = {
    language: '',
    framework: '',
    devEnd: '',
    operatingSystem: '',
    softwareEngineer: true
}

const devObj = {
    language: 'javaScript',
    framework: 'react.js',
    devEnd: 'front end',
    operatingSystem: 'macOs',
}

const verifiedObj = {
    ...techObj,
    ...devObj,
    softwareEngineer: true
}

console.log(verifiedObj)

//merging two objects

let objTemplate1 = {
    language:'',
    framework:'',
    ide:'',
    operatingSystem:'',
    frontEnd:''
}

let objTemplate2 = {
    language:'javaScript',
    framework:'react.js',
    ide:'vs code',
    operatingSystem:'macOs',
    frontEnd: true
}

let objConfirmed = {
    ...objTemplate1,
    ...objTemplate2,
    frontEnd: true
}

console.log(objConfirmed)
const {language} = objConfirmed//object destructuring.

//const {framework, language} = objConfirmed

//applying the previous.
//write a function that destructures an object and returns value.
const shareTools = (tool = 'framework') => {
   return `${language} ${tool}`
}
shareTools()

//closure
function shareKeyVals(){
    let newObj = {
        language: 'javaScript',
        framework: 'react'
    }
    return function(){//function that uses closure to mutate existing object.
        newObj.operatingSystem = 'macOs'
        return newObj
    }
}
let mutateObj = shareKeyVals()
console.log(mutateObj())

//maps: enhanced objects

let newMap = new Map([
    [1, 2],
    ['one', 'two']
])

console.log([...newMap])//object/map spread
console.log([...newMap.keys()])//object/map spread keys
console.log([...newMap.values()])//object/map spread keys

newMap.set(3, 'three')//mutates a map and adds additional key value pairs.
console.log(newMap)

newMap.forEach((value, key)=>{//loops through the map.
    console.log(1, 2)
    console.log('one', 'two')
    console.log(3, 'three')
})

//use object spread, and set on maps
let formedMap = new Map([
    ["language: ", 'javaScript'],
    ['engineer: ', 'front end']
])

console.log([...formedMap])
console.log([...formedMap.keys()])
console.log([...formedMap.values()])


let frontEndMap = new Map([
    [,]
])
console.log(frontEndMap)


frontEndMap = frontEndMap.set(formedMap)
console.log(frontEndMap)

frontEndMap.forEach((value, key)=>{
    console.log('language: ', 'javaScript')
})

//using set and get on maps
const favTechMap = new Map([
])
console.log(favTechMap)

const setFavLang = favTechMap.set('language', 'javaScript')
console.log(setFavLang)

const setFavFrame = favTechMap.set('framework', 'react.js')
console.log(setFavFrame)

const getFavLang = favTechMap.get('language')
console.log(getFavLang)

const getFavFrame = favTechMap.get('framework')
console.log(getFavFrame)

//use forEach on map
favTechMap.forEach((value, key)=>{
    console.log(key, value)
})

console.log([...favTechMap])
console.log([...favTechMap.keys()])
console.log([...favTechMap.values()])

//improve methods with arrow functions.
const devObject = {
    language: 'javaScript',
    framework: 'react.js',
    backEnd: 'node.js',
    devData(){
        console.log(`${this.framework}, ${this.backEnd}`)
    },
    langugeData(){
        return `${this.language}, ${this.framework}`
    }
}
console.log(devObject.devData())
console.log(devObject.langugeData())

//workiing with objectsand function closure.
const javaScriptObj = {
    language:'javaScript',
    topic: 'objects',
    operation: 'functions',
    specialized: 'closure'
}

function modifyObj(){
    return function(){
        javaScriptObj.language = 'es6'
        javaScriptObj.topic = 'objects: maps'
        console.log(`${javaScriptObj.language}, ${javaScriptObj.topic}`)
    }
}
let modified = modifyObj()
console.log(modified())

//working with maps and function closure.
const javaScriptMap = new Map([
    ['javaScript', 'react.js'],
    ['frontEnd', 'web development']
])

javaScriptMap.forEach((value, key)=>{
    console.log(`${key}, ${value}`)
})

function modifyMap(){
    let mapJs = javaScriptMap.get('javaScript')
    let mapFrontEnd = javaScriptMap.get('frontEnd')
    return function(){
        mapJs = javaScriptMap.set('javaScript', 'es6 scripting language')
        mapFrontEnd = javaScriptMap.set('frontEnd', 'react.js components')
        console.log(mapJs, mapFrontEnd)
    }
}
let mapModified = modifyMap()
console.log(mapModified())

/*Arrays and sets: arrays are a type of object
that stores indexed data in its memory.*/

let newArray = []
newArray.push(num1 = 0, num2 = 1)
console.log(newArray)

let pushThisObj = {
    num1: 0,
    num2: 1
}

let pushThisSecondArray = {
    num3: 2,
    num4: 3
}

newArray = []
newArray.push(pushThisObj, pushThisSecondArray)
console.log(newArray)

console.log(newArray.pop())

//array challenge
let techArray = []

console.log(
    techArray.push(
    'language: javaScript',
    'framework: react.js',
    'operating system: macOs'
    )
)

console.log(techArray)
console.log(techArray.pop())
console.log(techArray.length)
console.log(techArray[techArray.length - 1])//returns and indexed array item.
console.log(techArray)


techArray = [
    {technology: 'javaScript', isFrontEnd: true},
    {technology: 'html5', isFrontEnd: true},
    {technology: 'css3', isFrontEnd: true},
    {technology: 'python', isFrontEnd: false},
    {technology: 'sql', isFrontEnd: false},
]

const verifiedFrontEnd = techArray.every((tech)=> tech.isFrontEnd)//verifies if all true array-object value.
console.log(verifiedFrontEnd)// false 3/5 array-object values are true.

const unverifiedFrontEnd = techArray.some((tech)=> !tech.isFrontEnd)//verifies if some false array-object value.
console.log(unverifiedFrontEnd)// true 2/5 of the array-object values are false.

//applying .some(), .every(), push(), pop() to arrays.
const frontEndArray  = [
    {javaScript: 'front end language', isFrontEnd: true},
    {nodeJs: 'back end library', isFrontEnd: false},
    {reactJs: 'front end library', isFrontEnd: true},
    {python: 'back end language', isFrontEnd: false},
    {sql: 'back end language', isFrontEnd: false},
    {html5: 'front end language', isFrontEnd: true}
]

const verifyTrue = frontEndArray.some( frontEnd=> !frontEnd.isFrontEnd)
console.log(verifyTrue)//checks if some array-object values are false

const verifyAllTrue = frontEndArray.every( frontEnd=> frontEnd.isFrontEnd)
console.log(verifyAllTrue)//checks if every array-object values are true


//apply the previous;
//create a function that stores object keyVals inside of an array.
//apply closure
const applyTechsArray = []

function addToArray(){
    const techObj = {
        javaScript: {technology: 'front end language', isFrontEnd: true},
        reactJs: {technology: 'front end library', isFrontEnd: true},
        python: {technology: 'back end language', isFrontEnd: false},
        nodeJs: {technology: 'back end library', isFrontEnd: false}
    }
    applyTechsArray.push(techObj)
    return function(){
        const verifyFrontEndTech = applyTechsArray.some(tech => !tech.isfrontEnd)
        return verifyFrontEndTech
    }
}
let modifyArray = addToArray()
console.log(modifyArray())

//accessing globalvariables
let newDevAlias = 'cyberman'
let devSkills = 'user interface development'

function shareSkills(alias, skills){
    return `${newDevAlias} specializes in ${devSkills}`
}
shareSkills()

//function closure
function addToSkills(){
    let newDev = newDevAlias
    return function(){
        devSkills = 'front end software engineer'
        newDev += ` the ${devSkills}.`
        return `${newDev}`
    }
}
let shareDevData = addToSkills()
console.log(shareDevData())

//arrow functions
let newSkill = 'react.js development'

const addToDevSkills = skill =>
    `front end development with ${newSkill}.`
addToDevSkills()

//callback functions; add skills to existing skill variable.

numb1 = 10//global variable of 10.

const doubled = num => num * 2//function that doubles 10.

const tripple =(num, callback)=>{//function that will tripple a value.

    return callback(doubled(num))//returning a callback that takes in doubled function
    //and doubled num value and itself as an argument.
}
const cubed = tripple(numb1, (num) =>{//cubed holds the tripple function
//that takes in numb1 value and a function as arguments

    return num * 3//function now is invoked and trippled the new value of
    //numb1.
})
console.log(cubed)

////call back function////
let devSkills = 'front end engineering'

const devSkill = (skill) => {//function
    return skill += ', developing user interfaces'
}

const modifyDevSkill = (skill, callback) =>{//function
    return callback(devSkill(skill))
}

let newDevSkill = modifyDevSkill(devSkills, skill =>{
    let newTech = 'react.js'
    return `${skill} with ${newTech}`
})
console.log(newDevSkill)

/*objects*/
let frontEndObj = {
}

const frontEndObjMod =()=>{
    frontEndObj.frontEndLanguage = 'javaScript',
    frontEndObj.frontEndFramework = 'react.js',
    frontEndObj.frontEndLanguage2 = 'html',
    frontEndObj.frontEndLanguage3 = 'css'
    return frontEndObj
}
frontEndObjMod()

// const {frontEndLanguage} = frontEndObj
// console.log(frontEndLanguage)

function shareObjData({frontEndLanguage}){
    return frontEndLanguage;
}
shareObjData(frontEndObj)

//object spread
const spreadObj = {...frontEndObj}
console.log(spreadObj)

//object methods
let functionalObject = {
    modifyObj1:()=>{
        return `${frontEndObj.frontEndLanguage}`
    },
    modifyObj2:()=>{
        return frontEndObj.frontEndTechnology = 'ajax'
    }
}
console.log(functionalObject.modifyObj1())
console.log(functionalObject.modifyObj2())

//objects; merge objects with object spread.
const emptyObj = {
    name:'',
    title:'',
    language:'',

}

const objTemplate = {
    name:'aaron',
    title:'front end software engineer',
    language:'javaScript',
}

function createObject(){
    const createdObject = {
        ...emptyObj,
        ...objTemplate
    }
    console.log(createdObject)
}
createObject()

//Maps;
const formedMap = new Map([
])

function fillMap(engineerType, engineerTechVal){
    formedMap.set(engineerType, engineerTechVal)
    return formedMap
}
fillMap('software engineer', 'front end')
fillMap('software engineer', 'user interfaces')

formedMap.forEach((value, key)=>{
    console.log(key,value)
})


const mapSoftwareData = new Map([
    ['front end', 'software']
])

console.log([...mapSoftwareData])

mapSoftwareData.forEach((value, key)=>{
    console.log(key,value)
})

//arrays
let currentArray = []

currentArray.push(1)
console.log(currentArray)

currentArray.pop()
console.log(currentArray)

currentArray.push(
    {softwareEngineer: 'front-end', isFrontEndTech: true},
    {tech: 'html5', isFrontEndTech: true},
    {tech: 'css3', isFrontEndTech: true},
    {tech: 'javaScript', isFrontEndTech: true},
    {tech: 'jsx', isFrontEndTech: true},
    {tech: 'react.js', isFrontEndTech: true},
    {tech: 'redux', isFrontEndTech: true},
    {tech: 'node.js', isFrontEndTech: false}
)
console.log(currentArray)

let checkForTrue = currentArray.some(current=>{
    return current.isFrontEnd
})
console.log(checkForTrue)

let checkForAllTrue = currentArray.every(current=>{
    return current.isFrontEnd
})
console.log(checkForAllTrue)

//performing action on all elements; map, forEach
let frontEndVerified = currentArray.map(technology=>
    technology.isFrontEndTech ? {...technology, frontEndSoftware: true}
    : technology
)

frontEndVerified.forEach(technology=>{
    if(!technology.frontEndSoftware){
        console.log(`${technology.tech} is a back and software development technology.`)
    }
})
console.log(currentArray)
console.log(frontEndVerified)

//get subsets of arrays; filer, find
let results = currentArray.find(locateTech=>
    locateTech.isFrontEndTech
)
console.log(results)

results = currentArray.filter(locateTech=>
    locateTech.isFrontEndTech
)
console.log(results)

results = currentArray.find(locateTech=>
    !locateTech.isFrontEndTech
)
console.log(results)

results = currentArray.filter(locateTech=>
    !locateTech.isFrontEndTech
)
console.log(results)

let newCurrentElement = currentArray.map(techType=>//makes a transformed copy of the current array
    techType.webDev = 'web development technology.'
)
console.log(newCurrentElement)
console.log(currentArray)

//perform actions on objects and arrays.
let userInterfaceLanguage = 'javaScript'
let userInterfaceFramework = 'react.js'
let userInterfaceExtension = 'jsx'
let userInterfaceLibrary = 'redux'

let uIObject = {}

uIObject.language = userInterfaceLanguage
uIObject.framework = userInterfaceFramework
uIObject.extension = userInterfaceExtension
uIObject.Library = userInterfaceLibrary

console.log(uIObject)

let uIArray = []
console.log(uIArray)

uIArray.push(uIObject)
console.log(uIArray)

//apply previous
let backEndObj = {}

function modifyUIArray(){
    backEndObj.backEndLang = 'python'
    backEndObj.backEndLibrary = 'node.js'
    return function(){
        uIArray.push(backEndObj)
        console.log(uIArray)
    }
}
let modFunction = modifyUIArray()
console.log(modFunction())

//used object destructuring
// const {backEndLibrary} = backEndObj
// console.log(backEndLibrary)

let displayBackEndData = {...backEndObj}
console.log(displayBackEndData)

uIArray.forEach(arrayData =>{
    console.log(uIArray)
})

let addToUiArray = uIArray.map(arrayData=>
    arrayData.isFrontEnd = true
)

function modifyUiArrayElements(){
    let addBackEnd = uIArray.map(arrayData=>
        arrayData.backEndLang && arrayData.backEndLibrary
            ? {...arrayData, isBackEnd: true, isFrontEnd: false}
                : arrayData
    )
    console.log(addBackEnd)
}
modifyUiArrayElements()

//transform arrays with .reduce()
//.reduce() challenge; calculate the sum of all the vehicle weights.
const{vehicles = [
  { name: "Toyota", isElectric: false, weight: 1320 },
  { name: "Ford", isElectric: false, weight: 1400 },
  { name: "Volkswagen", isElectric: false, weight: 1370 },
  { name: "Honda", isElectric: false, weight: 1375 },
  { name: "Tesla", isElectric: true, weight: 1750 },
  { name: "BMW", isElectric: true, weight: 1350 },
];

const vehicleWeightTotal ={vehicles.reduce((sum,{vehicleBrand) => {
 console.log(
      `weight sum: ${sum},
    {vehicle brand weight: ${vehicleBrand.weight}`
 )
  return sum +{vehicleBrand.weight;
}, 0);
console.log(vehicleWeightTotal);

//.reduce() challenge; calculate the sum of all the electric vehicle weights.
const eVehicleWeightTotal ={vehicles.reduce((eVSum,{vehicleBrand) => {
    if{vehicleBrand.isElectric){
        console.log(
        `electric{vehicle brand: ${vehicleBrand.name},`
        )
    }

    if{vehicleBrand.isElectric){
        return eVSum +{vehicleBrand.weight
    }else{
        return eVSum
    }
}, 0);
console.log(eVehicleWeightTotal);

//creating a new array with .reduce(()=> {})
let numbersArray = [5, 10, 32, 4, 5, 6, 21, 45, 64]

const addToElements = numbersArray.reduce((accum, number)=>{
    accum.push(number + 1)
    return accum
}, [])
console.log(numbersArray)//logging out the new array.
console.log(addToElements)//logging out the second array.

//^same as

let doubleNumbersArray = numbersArray.map(num => num * 2)
console.log(doubleNumbersArray)

//function that creates keyVal pairs for a map.
let currentMap = new Map([
])

const setMapData =(newData, bool)=>{

    let addDataToMap = currentMap.set(newData, bool)
    return addDataToMap
}
setMapData('javaScript', true)

//.reduce() that checks for specific conditions.
let someNumbersArray = [5, 6, 7, 89, 54, 55, 50, 67.8, 43, 25, 15, 100]

const greaterThan = someNumbersArray.reduce((acc, num)=>{
    if(num > 50){
        acc.push(num)
    }
    return acc
}, [])

console.log(greaterThan)

let greaterThanNum = someNumbersArray.filter(num => num > 5)
console.log(greaterThanNum)

//avoid array mutations with array spread.
let devArray = ['html5', 'css3', 'javaScript', 'jsx', 'react.js']

let devSkillsArray = [...devArray]

devSkillsArray.push('ajax', 'jquery', 'node.js')
console.log(devSkillsArray)
console.log(devArray)

//molding arrays with the spread operator

let simpleArray = [1, 2, 3, 4, 5]

let numbersArray = [6, 7, 8, 9, 10]

let listNumbersArrays = [
    ...simpleArray,
    ...numbersArray,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20
]
console.log(listNumbersArrays)

//comparing reduce and map
let modNumbersArray = listNumbersArrays.reduce((array, num)=>{
    num = [21, 22, 23, 24, 25]
    array.push(num)
    return array
}, [])

//using array spread.
listNumbersArrays = [
    ...simpleArray,
    ...numbersArray,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    ...modNumbersArray
]
console.log(listNumbersArrays)
console.log(listNumbersArrays.slice(1, 11))//logs out specific indexed elements

//applying .filter() on arrays//searching for all elements that are greater than 1
//within the integersArray.
let integersArray = [1, 2, 3, 4, 5]

let findInt = integersArray.filter((locateInt)=>{
    if(locateInt > 1){
        console.log(locateInt)
    }
})
console.log(findInt)

findInt = integersArray.filter(locateInt=>
    locateInt > 1 ? console.log(locateInt) : locateInt
)
console.log(findInt)

/*
using array spread operator & .findIndex(()=>{
}) to modify, and removing elements in an array.
challeng: try adding an element into a new array.
 */

let randomIntsArray1 = [
    0, 1, 2, 3
]

let randomIntsArray2 = [
    0.4, 5, 6, 7
]

let combinedIntsArray = [
    ...randomIntsArray1,
    ...randomIntsArray2
]
console.log(combinedIntsArray)

let missingArrayInt = combinedIntsArray.findIndex(int => int === 0.4
)

let completeIntsArray = [
    ...combinedIntsArray.slice(0, missingArrayInt),
    4,
    ...combinedIntsArray.slice(missingArrayInt + 1)
]
console.log(completeIntsArray)

//destructuring arrays.

//assigning variables to elements
let technologiesArray = [
    'html5',
    'css3',
    'javaScript',
    'jsx',
    'react',
    'redux',
    'node.js'
]

let [
    markUpLang,
    styleLang,
    scriptingLang,
    extensionLang,
    frameTech,
    stateTech,
    backEndLib
] = technologiesArray

console.log(
    {
    markUpLang,
    styleLang,
    scriptingLang,
    extensionLang,
    frameTech,
    stateTech,
    backEndLib
    }
)

//swapping array variable values.
[
    scriptingLang,//variable swap within array destructuring
    styleLang,
    markUpLang,//variable swap within array destructuring
    extensionLang,
    frameTech,
    stateTech,
    backEndLib
] = [
    markUpLang,//original
    styleLang,
    scriptingLang,//original
    extensionLang,
    frameTech,
    stateTech,
    backEndLib
]

console.log(//logging array element variables in an object.
    {
        markUpLang,
        styleLang,
        scriptingLang,
        extensionLang,
        frameTech,
        stateTech,
        backEndLib
    }
)

//placing array elements in their own arrays.

let frontEndTechArray = ['html5', 'css3', 'javaScript', 'react.js']

let [markUplang, styleLang, ...userInterfaceTech] = frontEndTechArray
console.log(
    {
    markUplang,
    styleLang,
    ...userInterfaceTech
    }
)

// //array destructuring challenge,
// // Challenge:
// // In our restaurant, the chef has some favourite dishes in two different categories.
// // The chef loves all dishes that start with "S", while the rest are regular dishes
// // Use array destructoring to create arrays of the chefs favourite dishes of meat and
// // fish, and to create arrays of the regular meat and fish dishes

const fishDishes = ['Salmon Rillettes', 'Grilled Tuna Provencal', 'Fish and Chips']
const meatDishes = ['Lasagna', 'Spaghetti', 'Satay Chicken Skewers']

// Modify these four variables first
let [chefsFishDishes, ...regularFishDishes] = fishDishes
console.log(chefsFishDishes)
console.log(regularFishDishes)

let [regularMeatDishes, ...chefsMeatDishes] = meatDishes
console.log(regularMeatDishes)
console.log(chefsMeatDishes)


// Finally, use the spread operator to create these two arrays as well
let chefsDishes = [
    chefsFishDishes,
    ...chefsMeatDishes
]
console.log(chefsDishes)

let regularDishes = [
    ...regularFishDishes,
    regularMeatDishes
]
console.log(regularDishes)

//practice array destructuring
let technologyArrayItems = [
    'html5',
    'css3',
    'javaScript',
    'react.js',
    'node.js'
]

let [
    markUpSyntax,
    cascadingStyleLang,
    scriptingLanguage,
    componentBased,
    backEndTech
] = technologyArrayItems

console.log(scriptingLanguage, componentBased)

//swapping the array element variable and value.
[
    markUpSyntax,
    cascadingStyleLang,
    componentBased,
    scriptingLanguage,
    backEndTech
] = [
    markUpSyntax,
    cascadingStyleLang,
    scriptingLanguage,
    componentBased,
    backEndTech
]

console.log(
    markUpSyntax,
    cascadingStyleLang,
    scriptingLanguage,
    componentBased,
    backEndTech
)




//Turn Objects into flexible arrays
/*
for-in loop, Object.keys(), Object.values(), Object.entries()
 */
let techObjectValues = {
    frontEndSoftware: 'html, css, javaScript',
    backEndSoftware: 'node.js, sql, php'
}

for(let key in techObjectValues){
    console.log('key only:', key)
}

for(key in techObjectValues){
    console.log('values only:', techObjectValues[key])
}

//object methods that store keys and values into an array object.
Object.keys(techObjectValues)
Object.values(techObjectValues)

let monthlyExpenses = {
    phoneBill: 180,
    rent: 500,
{vehicleBill: 340,
}

let listKeys = Object.keys(monthlyExpenses).forEach(key=>{
    console.log(key)
})


let calculateExpenses = Object.values(monthlyExpenses).reduce((sum, expense)=>{
    return sum + expense
})
console.log(calculateExpenses)

//object that contains nested objects.

let techSoftwareObject = {
    language:{
        htmnl5: 'mark up syntax',
        frontEnd: true
    },
    language:{
        css3: 'styling based syntax',
        frontEnd: true
    },
    language: {
        javaScript: 'behavior and functionality syntax',
        frontEnd: true
    },
    software:{
        reactJs: 'component based user interfaces',
        frontEnd: true
    },
    software:{
        nodeJs: 'back-end, JavaScript runtime environment.',
        frontEnd: false
    }
}

let returnSoftwareTech = Object.entries(techSoftwareObject).reduce(
    (acc, [element, tech])=>{
        if(tech.frontEnd){/*key value pair*/
            acc.push({ ...tech, element })
        }
        return acc
}, [])
console.log(returnSoftwareTech)

//object containing nested objects,
//and storing specific key values in an array, based on a condition.

let programmerDataObject = {
    1230231:{
        name: 'cyberman',
        skill: 'user interface development',
        tool1: 'javaScript',
        tool2: 'react.js',
        frontEnd: true
    },
    2451542:{
        name: 'programmer_1',
        skill: 'database development',
        tool1: 'php',
        tool2: 'node.js',
        frontEnd: false
    },
    3651563:{
        name: 'programmer_2',
        skill: 'database development',
        tool1: 'sql',
        tool2: 'mongoDB',
        frontEnd: false
    },
    7890987:{
        name: 'programmer_3',
        skill: 'front-end development',
        tool1: 'css3',
        tool2: 'sass',
        frontEnd: true
    }
}

//verified false values
let verifyBackEnd = Object.entries(programmerDataObject).reduce(
    (acc, [id, dev])=>{
        if(!dev.frontEnd){
            acc.push({ id, ...dev })
        }
        return acc
}, [])
console.log(verifyBackEnd)

//verified true values
let verifyFrontEnd = Object.entries(programmerDataObject).reduce(
    (acc, [id, dev]) =>{
        if(dev.frontEnd){
            acc.push({ id, ...dev })
        }
        return acc
}, [])
console.log(verifyFrontEnd)

//get unique sets of data; sets.
let newTechArray = [
    'html5',
    'css3',
    'javaScript',
    'react.js',
    'jsx',
    'redux',
    'node.js',
    'react.js',
    'node.js',
    'html5',
    'python'
]

let uniqueSet = [...new Set(newTechArray)]
console.log(uniqueSet)

//loop over an object's key value pairs.
let numbersObj = {
    first:1,
    second:2,
    third:3,
    fourth:4,
    fifth:5
}

for(let key in numbersObj){//iterate over objects.
    console.log('numbers key values: ', numbersObj[key])
}

for(let key in numbersObj){//iterate over objects.
    console.log('numbers key: ', key)
}

for(let value of uniqueSet){//iterate over sets.
    console.log('tech value: ', value)
}

let ints = [
    1, 2, 1, 4, 5, 6, 6, 7, 5, 2, 1, 10
]

let someIntSet = new Set([...ints, 11])
console.log(someIntSet)

//maps
let intMap = new Map([
    ['one', 1],
    ['two', 2],
    ['three', 3],
    ['four', 4],
    ['five', 5]
])

let listItems = intMap.forEach((values, key)=>{
    console.log(key, values)
})

let newMapElement = intMap.set('six', 6)
console.log(newMapElement)

//adding obejct elements to an array
let newNumsArray = [
    {one: 1},
    {two: 2}
]

//using push
let newIntElementArray = {three: 3}
newNumsArray.push(newIntElementArray)
console.log(newNumsArray)

//using spread operator
newIntElementArray = [
    ...newNumsArray,
    {four: 4}
]

//using map
let addNewIntElement = newIntElementArray.map((intElement)=>{
    intElement.int = {five: 5}
    return intElement
})
console.log(addNewIntElement)

//adding elements to an array.
let intArray = [
    1,
    2
]

//using map
let addToIntsArray = intArray.map((newInt)=>{
    newInt = {...intArray, '2' : 3}
    return newInt
})
console.log(addToIntsArray.pop())


//adding elements to an array
addToIntsArray = intArray.reduce((acc, newInt)=>{
    newItem = {...intArray, '3' : 4}
    acc.push(newItem)
    return acc
}, [])
console.log(addToIntsArray.pop())

let newIntElement = addToIntsArray.findIndex(int => int === {'4' : 5}
)

//replacing an element withing an array.
let currentNewArray = [
    ...addToIntsArray.slice(0, newIntElement),
    ...addToIntsArray.slice(newIntElement + 1),
    {'5' : 6}
]
console.log(currentNewArray)

//adding an element to an array, with spread operator.
let addNewInt = [
    ...intArray.slice(0),//begin at the first element in the array
    3//finish at the added element in the array.
]
console.log(addNewInt)

//use map on arrays.
let intsArray = [1, 2]

//use spread operator to add a new value onto the current array;//AVOIDS ARRAY MUTATION.
let newIntsArray = [
    ...intsArray,
    3
]
console.log(newIntsArray)
console.log(intsArray)

console.log(newIntsArray.concat(4))//AVOIDS ARRAY MUTATION.
console.log(newIntsArray)

console.log(newIntsArray.push(5))//mutates original array.
console.log(newIntsArray)

console.log(newIntsArray[0])


//////////////////////////////////////////////////////////////////////////
//arrays review
//arrays are special types of object.
//arrays preserve order when managing collections of data.
//arrays count elements within itself; 0 indexed; 0, 1, 2, 3...
//built in methods to help us manage elements.

//method: .push(); pushes an element to the array.
//property; .length; returns the length of an array.
//method: .pop(); removes/returns the last element of an array.

//array challange;
// Challenge:
// 1. Create an array - favouriteSongs[] -  and add your 3 favourite songs using push()
// 2. Log out the last song in the array, and make it so that your solution will log out the
//last one regardless of how many items there are in the array
// 3. Invoke the pop method on your created array. What values do you have left in the array?

let mySongs = []//an empty array.
mySongs.push('song 1', 'song 2', 'song 3')

let lastSong = mySongs.length - 1
console.log(lastSong)

console.log(mySongs.pop())
console.log(mySongs)

//arrays review
//method; .indexOf(); gives the place of an index.
//if index = -1, element is not located on the array.

//return a boolean instead of an integer for verified array elements
let numsArray = [1, 2, 3, 56, 78, 0]
console.log(numsArray.indexOf(55) >= 0 ? true : false)
console.log(numsArray.indexOf(55) > -1)

/*method; .includes(); directly verifies if an element exists in
an array

.includes() only works with arrays that contain primitive data types.
*/
console.log(numsArray.includes(55))

/*
method; .some(()=>{}); iterates through array and verifies if an element meets specific conditions.
.some(()=>{}) returns/logs true or false based on elements condition.
*/
let greaterThanOneHundred = numsArray.some(num => num > 100)
console.log(greaterThanOneHundred)

let greaterThanTen = numsArray.some(num => num > 10)
console.log(greaterThanTen)

/*
method; .every(()=>{}) iterates through an array and returns/logs
true or false based on if ALL elements meet specific conditions.
*/
let lessThanOneHundred = numsArray.every(num => num < 100)
console.log(lessThanOneHundred)

/*
challenge; .some(()=>{}), .every(()=>{})
// Challenge:
// Here's a list of 5 most popular songs on Spotify.
// 1) Check if any song has won a Grammy
// 2) Check if all the songs were streamed for at least 1.5 million times
// Note: the timesStreamed value is already in million
*/

let hitSongs = [
    {song: 'song 1', streamed: 1.567, wonGrammy: true},
    {song: 'song 2', streamed: 1.234, wonGrammy: false},
    {song: 'song 3', streamed: 2.456, wonGrammy: true},
    {song: 'song 4', streamed: 1.360, wonGrammy: false}
]

//check to see if some songs have won a grammy.
let hasWonGrammy = hitSongs.some(song => song.wonGrammy)
console.log(hasWonGrammy)
/*used with basic conditional statements.
hitSongs.some((song) => {
    if(song.wonGrammy){
        return true
    }else{
        return false
    }
})*/


//check to see if every song has been streamed more than 1.5 million times.
let aMillionStreams = hitSongs.every(song => song.streamed > 1.5)
console.log(aMillionStreams)

/*
performing actions on all elements;
method; .map(()=>{}); transforms an arrays elements and returns
a new array.

returns an array with the same exact length.
*/
let devProfile = [
    {user: 'cyberman', language: 'javaScript', frontEndDev: true},
    {user: 'dev_1', language: 'css3', frontEndDev: true},
    {user: 'dev_2', language: 'xml', frontEndDev: true},
    {user: 'dev_3', language: 'python', frontEndDev: false},
    {user: 'dev_4', language: 'java', frontEndDev: false},
    {user: 'dev_5', language: 'scala', frontEndDev: false}
]

//transforms values on an array.
let convertToFrontEnd = devProfile.map(dev=>{
    dev.language = 'javaScript'//transforms value
    return dev//returns new array
})
console.log(convertToFrontEnd)

convertToFrontEnd = devProfile.map(dev=>{
    dev.frontEndDev = true//transforms value
    return dev//returns new array
})
console.log(convertToFrontEnd)

/*
can set conditions to .map(()=>{}) array method
and add onto elements. .map(()=>{}) CANNOT CHANGE THE LENGTH OF AN ARRAY!
*/


/*
method; forEach(()=>{}); iterates/loops over an array
applies a specific action/code block and does not create an array/new array.

can chain .map(()=>{}) and .forEach(()=>{}) to perform
specific actions/transformations for concise code.
*/

//use .forEach(()=>{}) to log out developers are front end.
let uIDev = devProfile.map(dev =>{
    dev.userInterfaceDevelopment = true
    return dev
})

uIDev = devProfile.forEach(dev =>
    dev.userInterfaceDevelopment ? console.log(`${dev.user} has transitioned to front end developer role`)
    : dev)
console.log(uIDev)

//use .forEach(()=>{}) to log out developers are front end.(chained)
// devProfile.map(dev =>{
//     dev.userInterfaceDevelopment = true
//     return dev
// }).forEach(dev =>
//     dev.userInterfaceDevelopment ? console.log(`${dev.user}; verified: front end development`)
//     : dev)
// console.log(uIDev)

/*
get subsets of arrays

method; .filter(()=>{}) returns data in a new array
based on given conditions based on certain conditions.

checks for return value.

method; .find(()=>{}); returns one/the first
array element based on a given condition.
*/
console.log(devProfile)

let devSubSetData = devProfile.filter(dev=>
    dev.user.toLowerCase().startsWith('c') && dev.userInterfaceDevelopment
)
console.log(devSubSetData)

devSubSetData = devProfile.find(dev =>
    dev.user === 'cyberman' && dev.userInterfaceDevelopment
)


/*
transform arrays with .reduce(()=>{})
method; .reduce(()=>{})

.reduce(()=>{}); can give us any type of data type.
iterates over array elements

two arguments; accumulator: is a storage for data
needs to be returned everytime.

most powerful of all the arrays methods.
*/

let{vehiclePrices = [
    36345,
    43543,
    68432,
    76321,
    90123
]

let sumAllPrices = vehiclePrices.reduce((acc, price)=>{
    return acc + price
}, 0)
console.log(sumAllPrices)

/*
Challenge; use .reduce(()=>{}); to calculate
the total weight of all the elements.

calculate/sum all non electric{vehicle weights
 */

let vehiclesObj = [
    {vehicle: 'Tesla', electric: true, weight: 1954},
    {vehicle: 'bmw', electric: false, weight: 1790},
    {vehicle: 'bronco', electric: false, weight: 2245},
    {vehicle: 'mustang mach e', electric: true, weight: 2065},
    {vehicle: 'cyber truck', electric: true, weight: 23446}
]

let vehicleweights = vehiclesObj.reduce((acc, vehicle)=>{
    return acc + vehicle.weight
}, 0)
console.log(vehicleweights)

vehicleweights = vehiclesObj.reduce((acc, vehicle)=>{
    if(vehicle.electric){
        return acc + vehicle.weight
    }
    return acc
}, 0)
console.log(vehicleweights)

/**
understand the power of reduce.
.push() elements onto new array when using .reduce(()=>{
})
 */

let numberArray = [
    1, 2, 3, 4, 5, 6, 7
]

let doubleInts = numberArray.reduce((acc, num)=>{
    acc.push(num * 2)
    return acc
}, [])
console.log(doubleInts)

/*
take integers that are greater than 3 and put them
in their own array.
*/

let greaterThanThree = numberArray.reduce((acc, num)=>{
    if(num > 3){
        acc.push(num)
    }
    return acc
}, [])
console.log(greaterThanThree)

greaterThanThree = numberArray.reduce((acc, num)=>
    num > 3 ?
    acc.concat(num) : acc, []
)
console.log(greaterThanThree)

/*
find numbers greater than three
in an array using; .find(()=>{}) and .filter(()=>{})
 */

let intsGreaterThanThree = numberArray.filter((number)=>{
    return number > 3
})
console.log(intsGreaterThanThree)

intsGreaterThanThree = numberArray.filter((number)=>{
    if(number > 3){
        return number > 3
    }
})
console.log(intsGreaterThanThree)

intsGreaterThanThree = numberArray.find((number)=>{
    if(number > 3){
        return number > 3
    }
})
console.log(intsGreaterThanThree)

/*
find numbers greater than three
in an array using; .some(()=>{}) and .every(()=>{})
*/

intsGreaterThanThree = numberArray.some((number)=>{
    if(number > 3){
        return number > 3
    }
})
console.log(intsGreaterThanThree)

intsGreaterThanThree = numberArray.every((number)=>{
    if(number > 3){
        return number > 3
    }
})
console.log(intsGreaterThanThree)

/*
Avoid Mutations with Array Spread
.push() and .concat() both create a
copied/mutated version of an original array.

because of arrays being reference type objects.

object spread clones and original version of
an array and does not mutate.
 */
let nameArray = [
    'aaron',
    'angelica',
    'avrie',
    'amirah',
    'amari'
]

let addToNameArray = [...nameArray]

addToNameArray.push('new puppy')
console.log(addToNameArray)

/**
Mold Arrays with the Spread Operator;

method; .unshift() adds items to an array, but mutates
original array.

can use spread operator and add items onto an array
together.

update arrays;
method; .slice() allows access to
specific positions in an array.

method; .findIndex(); locates the index of an element in an array.
*/

addToNameArray.unshift('bynx')
console.log(addToNameArray)//original array is now mutated.

let addMoreToNameArray = [
    ...addToNameArray,
    'goldFish'
]
console.log(addMoreToNameArray)

let updatedName = addMoreToNameArray.findIndex(name => name === 'goldfish')

let mostUpdatedNameArray = [
    ...addMoreToNameArray.slice(0, updatedName),
    'leapord shark-fish'
]

console.log(mostUpdatedNameArray)

let deletedName = addMoreToNameArray.findIndex(name => name === 'bynx')

finalNameArray = [
    ...mostUpdatedNameArray.slice(deletedName + 1)
]
console.log(finalNameArray)

let noPuppyName = finalNameArray.findIndex(name => name === 'new puppy')

let finalFamilyNames = [
    ...finalNameArray.slice(0, noPuppyName),
    ...finalNameArray.slice(noPuppyName + 1)
]

console.log(finalFamilyNames)


/**
more flexible arrays with DESTRUCTURING.

allows getting values from an array much easier.

do not have to declare variables on sepreate lines.

can apply object literal syntax to variables

...restOperator places the rest of an array elements into an array,
when destructuring.

*/

//array destructuring
let vehiclesArray = [
    'mustang',
    'bronco',
    'model x',
    'cyber truck',
    'hell cat'
]

let [coupe, suv, eSuv, truck, sedan] = vehiclesArray
console.log({coupe}, {suv}, {eSuv}, {truck}, {sedan})

//array destructuring; switch variables and value
[coupe, suv, eSuv, truck, sedan] = [coupe, eSuv, suv, truck, sedan]
console.log({coupe}, {suv}, {eSuv}, {truck}, {sedan})

//array destructuring; ...resOfOperator

let [fa{vehicle, ...favorites] = vehiclesArray

console.log({fa{vehicle}, favorites)
console.log({fa{vehicle}, 'remaining favorites: ',{favorites})





//map/object review
let myMap = new Map([
    ['javaScript', true],
    ['python', true]
])

let getMapData = myMap.get('javaScript')
console.log(getMapData)

getMapData = myMap.get('python')
console.log(getMapData)

let myObject = {
    name: 'cyberman',
    language: 'javaScript'
}

console.log({...myObject})

/**
challenge;
// In our restaurant, the chef has some favourite dishes in two different categories.
// The chef loves all dishes that start with "S", while the rest are regular dishes
// Use array destructoring to create arrays of the chefs favourite dishes of meat and
// fish, and to create arrays of the regular meat and fish dishes
*/

let fishDishes = ['shrimp scampi', 'salmon', 'prawns', 'lobster']

let regularFoodDishes = ['filet mignon', 'fried chicken', 'spaghetti', 'sloppy joe']

let [chefsFavSeaFood0, chefsFavSeaFood1, ...regularSeaFood] = fishDishes
console.log(chefsFavSeaFood0)
console.log(chefsFavSeaFood1)
console.log(regularSeaFood)

let [regularFood0, regularFood1, ...chefsSpecialities] = regularFoodDishes
console.log(regularFood0)
console.log(regularFood1)
console.log(chefsSpecialities)


let specialList = [
    chefsFavSeaFood0,
    chefsFavSeaFood1,
    ...chefsSpecialities
]

let regularList = [
    regularFood0,
    regularFood1,
    ...regularSeaFood
]

console.log(specialList)
console.log(regularList)

/**
turn objects into flexible arrays

loop over an array; for-in loop
to access objects data and convert to arrays of data;

Object.keys(), Object.values(), Object.entries()
 */

let{vehicleCost = {
    mustang: 23000,
    bronco: 26000,
    modelX: 76000,
    hellCat: 67000
}

//for-in loop; iterate over object data.

for(let vehicleObj in vehicleCost){//get whole object
    console.log{vehicleCost)
}

for(let{vehicleKey in{vehicleCost){//get keys
    console.log{vehicleKey)
}

for(let{vehicleKeyValue in{vehicleCost){//get values
    console.log{vehicleCost{vehicleKeyValue])
}

//method; Object.keys, Object.values(), Object.entries()
//these methods store data into arrays.

//getting array of keys from objects

let{vehicleKeys = Object.keys{vehicleCost).map(key => key)
console.log{vehicleKeys)

//concise syntax{vehicleKeys = Object.keys{vehicleCost)
console.log{vehicleKeys)


//key on other methods to each. v
//verify object keys.
let verifyKeys = Object.keys{vehicleCost).includes('mustang')
console.log(verifyKeys)


//getting array of values from objects
let{vehicleValues = Object.keys{vehicleCost).map(keyVal =>{vehicleCost[keyVal])
console.log{vehicleValues)

//concise syntax{vehicleValues = Object.values{vehicleCost)
console.log{vehicleValues)


//to return an array of Objects, use reduce.
let developers = {
    dev1:{
        language: 'javaScript',
        specialized: 'node.js',
        development: 'server side/back end'
    },
    dev2:{
        language: 'javaScript',
        specialized: 'react.js',
        development: 'user interfaces'
    },
    dev3:{
        language: 'sql',
        specialized: 'database',
        development: 'relational data'
    },
    dev4:{
        language: 'php',
        specialized: 'server side/back end',
        development: 'web development'
    }
}

let getDevData = Object.entries(developers).reduce((acc, [dev, devType])=>{
    if(devType.language === 'php'){

        acc.push( {...devType, dev} )
    }
    return acc
}, [])
console.log(getDevData)

/*get unique sets of data; sets.

spceial object type where values only occur once.

property; .size; checks for how many data values there are.

objects do not compare objects by value; every object is unique in a set.
*/

let newSet = new Set([
    1, 1, 1, 2, 3, 4
])
console.log(newSet)
console.log(newSet.size)

newSest = new Set([
    [1], [1], [1], [2], [3]
]).size
console.log(newSet)

/*for-of loop

array spread inside a set

spread operator on a set
*/

for(let numbers of newSet){
    console.log(newSet)
}

for(let numbers of newSet){
    console.log(numbers)
}

/*
- PRACTICE THESE
- map()
- filter()
- reduce()
- some() / every()
- find() / findIndex()
- forEach()

Plus:

- slice()
- concat()
- includes()
- destructuring
- array spread operator
- Obeject.keys()
- Object.values()
- Object.entries()
- sets
- for-in loop
- for-of loop
- for loop
*/

//.map(()=>{})
let vehicleSpecsObj = [
    {vehicle: 'mustang', model: 'shelby gt 350', cylinders: 8},
    {vehicle: 'tesla', model: 'x', cylinders: 100},
    {vehicle: 'bronco', model: 'bad lands', cylinders: 4},
    {vehicle: 'tesla', model: 'cyber truck', cylinders: 87.75}
]

//or
let verifyPerformance = vehicleSpecsObj.map(vehicle=>
    vehicle.cylinders > 5 ? vehicle.performance = true : vehicle
)
console.log(verifyPerformance)

//creates a new element within the array of objects.
verifyPerformance = vehicleSpecsObj.map(vehicle=>
    vehicle.cylinders > 5 ? {...vehicle, performance: true} : vehicle
)
console.log(verifyPerformance)


//.filter(()=>{})
let displayPerformanceVehicles = vehicleSpecsObj.filter((vehicle)=>{
    if(vehicle.cylinders > 4){
        console.log(vehicle.performance)
    }else if(vehicle.cylinders > 5){
        console.log(vehicle.performance)
    }else{
        return vehicle
    }
})

displayPerformanceVehicles = vehicleSpecsObj.filter((vehicle)=>{
    if(vehicle.cylinders > 4){
        return vehicle.performance
    }else if(vehicle.cylinders > 5){
        return vehicle.performance
    }else{
        return vehicle
    }
})

//.reduce(()=>{})
/*if vehicles name is 'tesla'
combine the total amount of cylinders between each tesla.
*/

//performing addition on elements.
//adds the values of elements meeting 'tesla' vehicle conditions.

let displayPerformanceVehicles = vehicleSpecsObj.reduce((acc, vehicle)=>
    vehicle.vehicle === 'tesla' ? acc + vehicle.cylinders : acc, 0
)


//used for accessing array object data.
//stores elements in an array that meet specific conditions.
displayPerformanceVehicles = vehicleSpecsObj.reduce((acc, vehicle)=>
    vehicle.cylinders > 5 ? acc.concat(vehicle) : acc, []
)

//used for accessing array object data.
//store specific elements that meet certain conditions.
displayPerformanceVehicles = vehicleSpecsObj.reduce((acc, vehicle)=>
    vehicle.vehicle === 'tesla' ? acc.concat(vehicle.cylinders) : acc, []
)


let integersArrayList = [
    1, 2, 33, 4, 5, 6, 7
]

//stores elements in an array that meet specific conditions.
integersArrayList.reduce((acc, ints)=>{//gathering specific data values into an array.
    if(ints > 5){
        acc.push(ints)
    }
    return acc
}, [])

/*
- PRACTICE THESE
- map()
- filter()
- reduce()
- some() / every()
- find() / findIndex()
- forEach()

Plus:

- slice()
- concat()
- includes()
- destructuring
- array spread operator
- Obeject.keys()
- Object.values()
- Object.entries()
- for-in loop
- for-of loop
- for loop
*/

//.some(()=>{})
//verifies integers existance based on conditions.
let someIntsMoreThanFive = integersArrayList.some((ints)=>
    ints > 5
)

//.find(()=>{})
//searches for array index place.
let intsLessThanFive = integersArrayList.find((ints)=> ints < 5)
console.log(intsLessThanFive)

let searchIndex = integersArrayList.findIndex(ints => ints === 1)
console.log(searchIndex)

searchIndex = integersArrayList.findIndex(ints => ints === 7)


//forEach(()=>{})
//loops through an array of items
let loopThroughArray = integersArrayList.forEach((ints)=>{
    console.log(ints)
})
console.log(loopThroughArray)

//.slice(); returns a portion of the
console.log(integersArrayList.slice(4, 6))

//.concat()
let integersArrayList = [
    1, 2, 33, 4, 5, 6, 7
]

//storing all int/elements greater than 1 into an array.
let storeInts = integersArrayList.reduce((acc, ints)=>
    ints > 1 ? acc.concat(ints) : acc, []
)
console.log(storeInts)

//stores elements into an array.
storeInts = integersArrayList.reduce((acc, ints)=>{
    if(ints > 1){
        return acc.concat(ints)
    }
    return acc
}, [])
console.log(storeInts)

//just returns 1 by itself not in array.
storeInts = integersArrayList.reduce((acc, ints)=>{
    if(ints = 1){
        return acc.push(ints)
    }
    return acc
}, [])
console.log(storeInts)

//.includes(); searches returns truthy based on given element.
let includesInts = integersArrayList.includes(5)

/*
- PRACTICE THESE
- map()
- filter()
- reduce()
- some() / every()
- find() / findIndex()
- forEach()

Plus:

- slice()
- concat()
- includes()
- destructuring
- array spread operator
- Obeject.keys()
- Object.values()
- Object.entries()
- for-in loop
- for-of loop
- for loop
- sets
*/

//array object destructuring. [arrayElementVariable]
let devLanguageArray = [
    'html',
    'css',
    'javaScript',
    'typeScript',
    'sql',
    'php',
    'python',
    'java',
    'scala',
    'kotlin',
    'bash',
    'jsx'
]

let [
    markUp,
    styling,
    behavior,
    codeValidation,
    dataBaseLang,
    serverSide,
    dataProcessing,
    backEnd1,
    backEnd2,
    backEnd3,
    linuxScripting,
    userInterface
] = devLanguageArray

console.log(codeValidation, behavior)
console.log(markUp, dataBaseLang)


let frontEndLanguages = [
    markUp,
    styling,
    behavior,
    userInterface
]
console.log(frontEndLanguages)

let backEndLanguages = [
    dataBaseLang,
    serverSide,
    dataProcessing,
    backEnd1,
    backEnd2,
    backEnd3
]
console.log(backEndLanguages)


//destructuring & object spread
let frontEndAndBackEndLangs = [
    'html',
    'css',
    'javaScript',
    'typeScript',
    'jsx',
    'sql',
    'php',
    'python',
    'java',
    'scala',
    'kotlin',
    'bash',
]


let [
    markUp,
    styling,
    behavior,
    confirmBehaviorCode,
    userInterfaces,
    ...backEndAndScripting

] = frontEndAndBackEndLangs

console.log(behavior)

let frontEndProgramming = [
    markUp,
    styling,
    behavior,
    confirmBehaviorCode,
    userInterfaces
]

console.log(frontEndProgramming)

let backEndProgramming = [
    ...backEndAndScripting
]

console.log(backEndProgramming)



/*
- PRACTICE THESE
- map()
- filter()
- reduce()
- some() / every()
- find() / findIndex()
- forEach()

Plus:

- slice()
- concat()
- includes()
- destructuring
- array spread operator
- Obeject.keys()
- Object.values()
- Object.entries()
- for-in loop; iterates over object data
- sets
- for-of loop; iterates over new Set data;
sets maintain uniques values; unless different object type.
- for loop
*/

//Object.keys(); stores all returned values(object keys) into an array
let softwareEngineeringObj = {
    html: 'markUp',
    css: 'styling',
    javaScript: 'behavior',
    jsx: 'user interfaces',
    sql: 'relational database management back end',
    php: 'server side scripting back end',
    python: 'general purpose scripting'
}

let objectKeys = Object.keys(softwareEngineeringObj)
console.log(objectKeys)

//Object.values(); stores object values(object key values) into an array.
let objectValues = Object.values(softwareEngineeringObj)
console.log(objectValues)

//Object.entries(); stores both object key value pairs(key: 'value') into an array.
let objectEntries = Object.entries(softwareEngineeringObj)
console.log(objectEntries)

//for-in loop
let devLanguageObject = {
    markUpLanguage: 'html5',
    stylingUiLanguage: 'css3',
    userInterfaceBehavior: 'javaScript',
    userInterfaceDevelopment: 'jsx',
    databaseManagement: 'sql',
    serverSideDevelopment: 'php'
}

//iterates through the whole object returns data as many times as there are keyVal pairs.
for (let key in devLanguageObject){
    console.log(devLanguageObject)
}

//iterates through and returns the value data of each key.
for(let key in devLanguageObject){
    console.log(devLanguageObject[key])
}

//returning specific value from specified key based on a condition.
for(let keyLanguage in devLanguageObject){
    keyLanguage = devLanguageObject.userInterfaceBehavior
        ? devLanguageObject.userInterfaceBehavior : keyLanguage
}


//sets; create a set/array object of unique elements.
//for-of loop; iterates through the content of a set.
let intsArrayList = [
    1,
    1,
    2,
    2,
    3,
    4,
    4
]

//using array object spread operator in a set.
let firstSet = new Set([...intsArrayList])
console.log(firstSet)

//converting an array's elements to unique elements.
firstSet = new Set([1, 2, 1, 4, 3, 5, 6, 7])
console.log(firstSet)

//using set spread and storing an array variable in a set.
let newSetArray = [...new Set(intsArrayList)]
console.log(newSetArray)

//sets cant create unique values of other objects within it.
firstSet = new Set([
    {name: 'aaron'},
    {name: 'aaron'},
    {devLanguage: 'javaScript'}
])

let lettersArray = [
    'a',
    'a',
    'b',
    'c',
    'c',
    'd',
    'e'
]

firstSet = new Set(lettersArray)
console.log(firstSet)

//spread operator
firstSet = [...new Set([
    'a',
    'b', 'c', 'd', 'd',
    'e',
    'E',
    'f',
    'ff',
    'f',
    'g',
    'g'
])]

console.log(firstSet)'

firstSet = new Set([...lettersArray])

firstSet = new Set([...lettersArray])

firstSet = new Set(lettersArray)

for(let key of lettersArray){//loops over original elements in an array.
    console.log(key)
}

for(let key of lettersArray){//loops over array the same amount of times as there are elements.
    console.log(lettersArray)
}

let doublesArray = [2, 3, 1, 2, 4, 4, 5, 6]
let uniquesSet = new Set([...doublesArray])

for(let multi of uniquesSet){
    if(multi < 10){
        console.log(multi)
    }else{
        console.log('each integer is greater than 10')
    }
}

for(let multi of uniquesSet){
    multi < 10 ? true : console.log('each integer is greater than 10')
}

/*
- PRACTICE ARRAY METHODS/OPERATIONS
- map()
- filter()
- reduce()
- some() / every()
- find() / findIndex()
- forEach()

Plus:

- slice()
- concat()
- includes()
- destructuring
- array spread operator
- Obeject.keys()
- Object.values()
- Object.entries()
- for-in loop; iterates over object data
- sets
- for-of loop; iterates over new Set data;
sets maintain uniques values; unless different object type.
- for loop
*/





let programDataObject = {
    programType1:{//every object needs a unique name.
        language: 'php',
        development: 'back end'
    },
    programType2:{
        language: 'javaScript',
        development: 'front end'
    },
    programType3:{
        language: 'cobol',
        development: 'mainframe'
    },
    programType4:{
        language: 'python',
        development: 'data processing'
    },
    programType5:{
        language: 'sql',
        development: 'database management'
    },
    programType6:{
        language: 'css3',
        development: 'front end'
    },
    programType7:{
        language: 'html5',
        development: 'front end'
    },
    programType8:{
        language: 'jsx',
        development: 'user interface'
    }
}


//stores specific object elements in an array that meet certain condtions.
                        //nested //object
let programTypeArray = Object.entries(programDataObject).reduce((acc, [program, devType])=>{
    if(devType.development === 'front end'){

        acc.push({...devType, program})//program = new elements
    }
    return acc
}, [])
console.log(programTypeArray)

let developers = {
    dev1:{
        language: 'javaScript',
        specialized: 'node.js',
        development: 'server side/back end'
    },
    dev2:{
        language: 'javaScript',
        specialized: 'react.js',
        development: 'user interfaces'
    },
    dev3:{
        language: 'sql',
        specialized: 'database',
        development: 'relational data'
    },
    dev4:{
        language: 'php',
        specialized: 'server side/back end',
        development: 'web development'
    }
}

let getDevData = Object.entries(developers).reduce((acc, [dev, devType])=>{
    if(devType.language === 'php'){

        acc.push( {...devType, dev} )
    }
    return acc
}, [])
console.log(getDevData)

/*
- PRACTICE ARRAY METHODS/OPERATIONS -

- map()
- filter()
- reduce()
- some() / every()
- find() / findIndex()
- forEach()

Plus:

- slice()
- concat()
- includes()
- destructuring
- array spread operator
- Obeject.keys()
- Object.values()
- Object.entries()
- for-in loop; iterates over object data
- sets
- for-of loop; iterates over new Set data;
sets maintain uniques values; unless different object type.
- for loop
*/

/*
PRACTICE CLASS METHODS/OPERATIONS

classes;

Classes are a template for creating objects.
They encapsulate data with code to work on that data.
Classes in JS are built on prototypes but also have some syntax and
semantics that are not shared with ES5 classalike semantics.
*/

/*
creating different types of drivers;
adding different types of vehicles properties
to single object.
*/

let driverProfile = {
    driver: 'speedster',
    skill: 'pure speed',
    vehicles: [],
    addVehicle(vehType){
        this.vehicles = [...this.vehicles, vehType]
    }
}

driverProfile.addVehicle('p1 mclaren')
console.log(driverProfile.vehicles)


/*
constructor functions
allows us to create multiple
objects and properties quickly.

 */
function Driver(name, skill, vehicle = []){
    this.name = name
    this.skill = skill
    this.vehicle = vehicle
}



//adding behavior/method with prototype property.
Driver.prototype.addVehicle = function(veh){
    this.vehicle = [...this.vehicle, veh]
}


const driver1 = new Driver('speedster', 'pure speed')

driver1.addVehicle( 'p1 mcleran' )
console.log( driver1.vehicle )

/////////////////////
let driver2 = new Driver('monsterRider', 'crushing')

driver2.addVehicle( 'monster truck' )

console.log( driver2.vehicle )
////////////////////

function Programmer(alias, programmingType, language = []){
    this.alias = alias
    this.programmingType = programmingType
    this.language = language
}
// let programmer1 = new Programmer('cyberman', 'user interfaces', 'javaScript')
// console.log(programmer1)

//adding behavior/method to constructor
Programmer.prototype.addSkill = function(language){
    this.language = [...this.language, language]
}

let programmer1 = new Programmer('cyberman', 'user interface/front end')

programmer1.addSkill('javScript')

console.log(programmer1.language)


////////////////////
function SoftwareDeveloper(alias, programmingType, language = []){
    this.alias = alias
    this.programmingType = programmingType
    this.language = language
}

let softwareDev1 = new SoftwareDeveloper('cyberman', 'front end')
let softwareDev2 = new SoftwareDeveloper('osHacker', 'automation scripting')

//adding behavior/method to c.function
SoftwareDeveloper.prototype.addLanguage = function(lang){
    this.language = [...this.language, lang]
}

softwareDev1.addLanguage('jsx')
softwareDev2.addLanguage('bash')

console.log(softwareDev1.language)
console.log(softwareDev2.language)

console.log(softwareDev1)
console.log(softwareDev2)

/////////////////////
function Coder(alias, codeType, language = []){
    this.alias = alias
    this.codeType = codeType
    this.language = language
}

let coder1 = new Coder('cyberman', 'user interfaces')

Coder.prototype.addLanguage = function(lang){//creates a method on the constructor function.
    this.language = [...this.language, lang]
}

coder1.addLanguage('javaScript')
console.log(coder1.langauge)
console.log(coder1)


/////////////////////
let programmerTypeObject = {
    alias: 'cyberman',
    codeType: 'front end',
    language: [],
    addLanguage(language){
        this.language = [...this.language, language]
    }
}

programmerTypeObject.addLanguage('javaScript')
console.log(programmerTypeObject.language)

/////////////////
function ProgrammerType(alias, devType, language = []){
    this.alias = alias
    this.codeType = devType
    this.language = language
}

//prototypical inheritance
ProgrammerType.prototype.addLanguage = function(language){
    this.language = [...this.language, language]
}

let devType1 = new ProgrammerType('cyberman', 'front end')

devType1.addLanguage('javaScript')
console.log(devType1.language)
console.log(devType1)


///////////////////
//understanding prototype chaining
console.log(Object.getPrototypeOf(devType1).constructor)
console.log(devType1.__proto__ === ProgrammerType.prototype)

/*
- PRACTICE ARRAY METHODS/OPERATIONS -

- map()
- filter()
- reduce()
- some() / every()
- find() / findIndex()
- forEach()

Plus:

- slice()
- concat()
- includes()
- destructuring
- array spread operator
- Obeject.keys()
- Object.values()
- Object.entries()
- for-in loop; iterates over object data
- sets
- for-of loop; iterates over new Set data;
sets maintain uniques values; unless different object type.
- for loop
- constructor functions
- classes
- class methods
- prototype.chaining
*/

/*
PRACTICE CLASS METHODS/OPERATIONS

classes;

Classes are a template for creating objects.
They encapsulate data with code to work on that data.
Classes in JS are built on prototypes but also have some syntax and
semantics that are not shared with ES5 classalike semantics.
*/

// classes, constructors & methods
class DataClass{
    constructor(data1, data2, data3 = []){
        this.data1 = data1
        this.data2 = data2
        this.data3 = data3
    }

    addData3(data3){
       return `data: ${data3}`
    }
}

let dataClass = new DataClass('cyberman', 'front end developer')

dataClass.addData3('computer programming')

console.log(dataClass.data3)

/* 1. A school's film club wants to 
store details of the films it has 
studied so far this year. Create a 
new class to do this. We want to store 
the following data about each film: id, 
title, director, releaseYear and genres[].

// 2. Create two methods on the class: 
one for adding multiple genres to the films - addGenre(genre) - and one to 
get the title of the film - getFilmTitle().

// 3. Instantiate a new instance of the class using 
data from your your favourite film. Add at least 1 genre 
to your film using addGenre(), and get the title using getFilmTitle()*/

class FilmClass{
    constructor(id, director, release, title = [], genre = []){
        this.id = id
        this.title = title
        this.diretor = director
        this.release = release
        this.genre = genre
    }
    getTitle(title){//returning a title
        return `film title: ${this.title}`
    }

    addGenre(genre){//creating a genre
        return this.genre = [...this.genre, genre]
    }

    addTitle(title){//creating a title
        return this.title = [...this.title, title]
    }
}

//creating an instance of the film class
let filmData = new FilmClass(1, 'Tim Burton', 1989)


console.log(filmData.addGenre('action/adventure'))
console.log(filmData.addTitle('Batman'))
console.log(filmData.getTitle())
console.log(filmData)


let filmData2 = new FilmClass(2, 'Tim Burton', 1993)


console.log(filmData2.addGenre('animation/fantasy'))
console.log(filmData2.addTitle('nightmare before christmas'))
console.log(filmData2.getTitle())
console.log(filmData2)


//classes, constructors; creating class methods

class DevClass{
    constructor(alias, development, language = []){
        this.alias = alias
        this.development = development
        this.language = language
    }

    getAlias(alias){
        return `developer alias: ${this.alias} develops applications with ${this.language}`
    }

    addLanguage(language){
        return this.language = [...this.language, language]
    }
}

let developerPro = new DevClass('cyberman', 'user interfaces')

console.log(developerPro.addLanguage('javaScript'))
console.log(developerPro.getAlias())



//share class features with 'extends'
//create inheritance with super
//share methods between classes
//create parent and child classes with related methods.

class DevDataClass{
    constructor(alias, development, frontEndDev){
        this.alias = alias
        this.development = development
        this.frontEndDev = frontEndDev
    }

    isFrontEnd(){ //returns a boolean value based on property.
        if(this.frontEndDev){
            return true
        }else{
            return false
        }
    }
}


class NewDevDataClass extends DevDataClass{

    constructor(alias, development, frontEndDev, devLanguage){ // added a new property.

        super(alias, development, frontEndDev) //child class inherits properties from parent class.

        this.devLanguage = devLanguage
    }

    getDeveloper(){
        if(super.isFrontEnd()){
            return `${this.alias} is a front end developer, who develops ${this.development}.` 
        }else{
            return `${this.alias} is not a front end developer, and develops ${this.development}.`
        }
    }

}

let developerTypeData = new NewDevDataClass('cyberman', 'user interfaces', true, 'javaScript')
console.log(developerTypeData.getDeveloper())

let developerTypeData2 = new NewDevDataClass('slitherynCode', 'big data', false, 'python 3')
console.log(developerTypeData2.getDeveloper())

let developerTypeData3 = new NewDevDataClass('roboticsPro', 'robotics', false, 'c++')
console.log(developerTypeData3.getDeveloper())


/////////////////
class Programmer{
    constructor(alias, devType, language){
        this.alias = alias
        this.devType = devType
        this.language = language
    }
    getLanguage(language){
        return this.language
    }
}

class NewProgrammer extends Programmer{
    constructor(alias, devType, language){
        super(alias, devType, language)
    }

    addUi(){
        if(this.language === 'javaScript' || this.language === 'jsx'){
            return `${this.alias} is a user interface developer, programming with ${this.language}.`
        }else{
            return `${this.alias} is not a user interface developer, programming with ${this.language}.`
        }
    }
}

let programmerA = new NewProgrammer(
    'cyberman', 
    'user interface development',
    'javaScript'
)

console.log(programmerA.addUi())
console.log(programmerA.getLanguage())



let programmerB = new NewProgrammer(
    'synthCode',
    'back end development',
    'php'
)

console.log(programmerB.addUi())
console.log(programmerB.getLanguage())

let programmerC = new NewProgrammer(
    'bitDev',
    'front end development',
    'jsx'
)

console.log(programmerC.addUi())
console.log(programmerC.getLanguage())

///////////////
/*
- PRACTICE ARRAY METHODS/OPERATIONS -

- map()
- filter()
- reduce()
- some() / every()
- find() / findIndex()
- forEach()

Plus:

- slice()
- concat()
- includes()
- destructuring
- array spread operator
- Obeject.keys()
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
*/

class NumberClass{
    constructor(a, b, c, d = []){
        this.a = a
        this.b = b
        this.c = c
        this.d = d
    }
    addNum(d){
        return this.d = [...this.d, d]
    }

    getNum(){
        return this.d
    }
}

let letteredNum = new NumberClass(1, 2, 3)
console.log(letteredNum.addNum(4))
console.log(letteredNum)

class NewNumberClass extends NumberClass{
    constructor(a, b, c, d){
        super(a, b, c, d)
    }

    checkNum(){
        if(letteredNum.d > 5){
            return `${this.d} is greater than 5.`
        }else{
            return `${this.d} is less than 5.`
        }
    }
}

let numberedLetter = new NewNumberClass(1, 2, 3, 'added number')
console.log(numberedLetter.checkNum())
console.log(numberedLetter)


///////////////
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
- arraow functions
- call-back functions
- object literals; destructuring, ...object spread, 
- map object type; .set(), forEach(()=>{}), ...map object spread

- PRACTICE ARRAY METHODS/OPERATIONS -

- map()
- filter()
- reduce()
- some() / every()
- find() / findIndex()
- forEach()

Plus:

- slice()
- concat()
- includes()
- destructuring
- array spread operator
- Obeject.keys()
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
*/

//variables
var newVar = 1
console.log(newVar)

let letVar = newVar += 1
console.log(letVar)

letVar = newVar
console.log(letVar)

const constVar = 3
console.log(constVar)

let reassignConst = constVar
console.log(reassignConst)

reassignConst += 2
console.log(reassignConst)

//data types
let trueVar = true
console.log(trueVar)

let numberVar = 5
console.log(numberVar)

let stringVar = 'this is a string'
console.log(stringVar)

//string interpolation
console.log(`${stringVar}`)


// short circuiting; if the variable contains a specific language then return true
let frontEndDevVar = true
let markUpLang =  'html'
let scriptint =  'javaScript'

console.log(frontEndDevVar ? markUpLang === 'html' || scripting === 'javaScript' : false)

markUpLang = 'html'
scripting = 'python 3'

console.log(frontEndDevVar ? markUpLang === 'html' && scripting === 'javaScript' : false)

///////////////
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
- arraow functions
- call-back functions
- object literals; destructuring, ...object spread, 
- map object type; .set(), forEach(()=>{}), ...map object spread

- PRACTICE ARRAY METHODS/OPERATIONS -

- map()
- filter()
- reduce()
- some() / every()
- find() / findIndex()
- forEach()

Plus:

- slice()
- concat()
- includes()
- destructuring
- array spread operator
- Obeject.keys()
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
*/

//ternary
let maxNumber = 100
let int1 = 50
let int2 = 30

console.log(maxNumber ? maxNumber < int1 : false)

console.log(maxNumber ? maxNumber > int2 : false)

if(maxNumber > int1 && int2){
    console.log(`${maxNumber} is greater than ${int1} and ${int2} combined`)
}else{
    console.log(`${maxNumber} is less than ${int1} and ${int2} combined`)
}

maxNumber = 79
let maxNumber2 = 100

if(maxNumber > int1 + int2){
    console.log(`${maxNumber} is greater than ${int1} and ${int2} combined.`)

}else if(maxNumber2 > int1 + int2){
    console.log(`${maxNumber} is less than ${int1} and ${int2} combined.`)
}

let maxNumber = 99
let newMaxNumber = 100

switch(maxNumber){
    case 100:
        console.log(`The number is ${newMaxNumber}.`)
        break;
    case 101:
        console.log(`The number is two less than ${newMaxNumber}.`)
        break;
    default:
        console.log(`The number is one less than ${newMaxNumber}.`)
}


let myName  = 'aaron'
let title = 'front end developer'
let undefined = undefined

switch(myName || title){
    case myName:
        console.log(`my name is ${myName}`)
        break;
    case title:
        console.log(`my name is ${title}`)
        break;
    default:
        console.log(`my name is ${undefined}`)
}


switch(myName && title){
    case myName:
        console.log(`my name is ${myName}`)
        break;
    case title:
        console.log(`I am a ${title}`)
        break;
    default:
        console.log(`my name is ${undefined}`)
}

let engineer = 'software engineer'

switch(engineer && myName){
    case myName:
        console.log(`my name is ${myName}`)
        break;
    case title:
        console.log(`I am a ${title}`)
        break;
    case engineer:
        console.log(`I am an ${engineer}`)
        break;
    default:
        console.log(`my name is ${undefined}`)
}

switch(engineer){
    case myName:
        console.log(`my name is ${myName}`)
        break;
    case title:
        console.log(`I am a ${title}`)
        break;
    case engineer:
        console.log(`I am a ${engineer}!`)
        break;
    default:
        console.log(`my name is ${undefined}`)
}
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

- map()
- filter()
- reduce()
- some() / every()
- find() / findIndex()
- forEach()

Plus:

- slice()
- concat()
- includes()
- destructuring
- array spread operator
- Obeject.keys()
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
*/

//functions; global vs local scope.
let aNumber = 5

function getNumber(){
    return `${aNumber}`
}
getNumber()

function getAddedNumber(num1, num2){
    return num1 + num2
}
getAddedNumber(5, 5)

function getTripleNumber(num3){
    return `${aNumber}` * num3
}
getTripleNumber(3)

//function and closures
let startNum = 1

function counterApp(){
    startNum += 4
    return function(){
        return startNum
    }
}
let count =  counterApp()
console.log(count())


//functions and closures
function modifyMessage(){
    let alias;
    let position;
    let message;
    return function(){
        alias = 'cyberman'
        position = 'front end software engineer'
        return message = `greetings! I am ${alias} and I am a ${position}.`
    }
}
let myMsg = modifyMessage()
console.log(myMsg())

//default paramters
function useOfDefault(numA, numB = 1){
    return numA + numB
}
useOfDefault(9)//use of default parameters when parameter is assigned.

useOfDefault(9, 6)//no use of default paramters when not parameter is assigned.

//arrow functions
const newFunction = (num1, num2 = 2) =>{
    return num1 + num2
}
newFunction(3)
newFunction(3, 7)

//arrow functions using implicit returns; shorter syntax.
const newFunctionB = num1 => num1 + 5 
newFunctionB(5)

const newFunctionC = num1 => num1 + 1 
newFunctionC(1)

//call-back functions; tripple the sum of two numbers.
//using a callback function to tripple value.

numb1 = 10//global variable of 10.

const doubled = num => num * 2//function that doubles 10.

const tripple =(num, callback)=>{//function that will tripple a value.

    return callback(doubled(num))//returning a callback that takes in doubled function
    //and doubled num value and itself as an argument.
}
const cubed = tripple(numb1, (num) =>{//cubed holds the tripple function
//that takes in numb1 value and a function as arguments

    return num * 3//function now is invoked and trippled the new value of
    //numb1.
})

console.log(cubed)

//callback function.
let someNum = 5

function doubleSomeNum(num){
    return num * 2
}

function trippleSomeNum(num, callBack){

    return callBack(
        doubleSomeNum(num)
    )
}

let trippled = trippleSomeNum(someNum, (num)=> { 
    return someNum * 1
})

console.log(trippled)


//object literals; destructuring, ...object spread
let newKey = 'reactJs'
let newKeyValue = 'component development'

let aNewObj = {
    name: 'cyberman',
    title: 'software engineer',
    language: 'javaScript',
    skill: 'user interface development',
    [newKey]: newKeyValue
}
console.log(aNewObj[newKey])

//object literal destructuring
let {name} = aNewObj
console.log(name)

//object destructuring using a function
function getObjKeyVals({name}){
    return `${name}`
}
getObjKeyVals(aNewObj)

let {language} = aNewObj
console.log(language)

//object destructuring using a function
function getObjLangKeyVal({language}){
    return `${language}`
}
getObjLangKeyVal(aNewObj)

//object literal spread; merging objects
let objectTemplate = {
    alias: '',
    language: '',
    development: ''
}

let objectTemplateUsage = {
    alias: 'cyberman',
    language: 'javaScript',
    development: 'front end development'
}

let newObjectCreated = {
    ...objectTemplate,
    ...objectTemplateUsage
}

console.log(newObjectCreated)

newObjectCreated = {
    ...objectTemplate,
    ...objectTemplateUsage,
    developmentTools: 'react.js'
}

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
- filter()
- reduce()
- some() / every()
- find() / findIndex()
- forEach()

Plus:

- slice()
- concat()
- includes()
- destructuring
- array spread operator
- Obeject.keys()
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
*/

//maps; forEach, .set(), .get()
let devMap = new Map([
    ['language','javaScript'],
    ['development', 'user interfaces']
])
console.log(devMap)

// devMap.forEach((mapData)=>{
//     console.log(mapData)
// })

// devMap.forEach((data, map)=>{
//     console.log(map, data)
// })

// let logMapData = devMap.forEach((map, data)=>{
//     console.log(`[${map}]: ${data}`)
// })

let logMapData = devMap.forEach((mapKey, mapValue)=>{
    let undefinedVar = undefined

    if(mapValue = 'javaScript'){
        console.log(`development language: ${mapValue}`)
    }else{
        console.log(`development language: ${undefinedVar}`)
    }
})
console.log(logMapData)

//using .set() to set a map keys

let devMap = new Map([
    ['language','javaScript'],
    ['development', 'user interfaces']
])
console.log(devMap)

let mapDataSet = devMap.set('framework', 'react.js')
console.log(mapDataSet)


//using .get() to get map keyValue pairs.

let mapDataGet = devMap.get('development')
console.log(mapDataGet)


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
- find(()=>{}) / findIndex()
- forEach(()=>{})

Plus:

- slice()
- concat()
- includes()
- destructuring
- array spread operator
- Obeject.keys()
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
*/

//using array method; .map(()=>{})
let intLettersArray = [
    a = 0,
    b = 1,
    c = 2,
    d = 3,
    e = 4,
    f = 5,
    g = 6
]

let modifyArray = intLettersArray.map(element =>
    element % 2 === 0 ? element = 'element is even.' : element
)
// console.log(modifyArray)

modifyArray = intLettersArray.map(element =>
    element % 2 === 0 ? `${element} is even.` : `${element} is odd.`
)

console.log(intLettersArray)//original array
console.log(modifyArray)//new clone of array.

modifyArray = intLettersArray.map(elementsClone =>
    elementsClone % 2 === 0 ? elementsClone = 'is even.' : elementsClone = 'is odd.'
)

let uniqueArrayObject = [
    {a: 0},
    {b: 1},
    {c: 2},
    {d: 3},
    {e: 4},
    {f: 5},
    {g: 6}
]

let modifyUniqueArray = uniqueArrayObject.map((arrayObject, element) =>{
    if(element % 2 === 1){
        return {...arrayObject, element: 'element is odd'} 
    }else{
        return {...arrayObject, element: 'element is even'}
    }
})

modifyUniqueArray = uniqueArrayObject.map((arrayObject, element) =>{
    if(element % 2 === 0){
        //using object spread and making new element on the arrayObject.
        return {...arrayObject, element: 'element is even'} 
    }else{
        return {...arrayObject, element: 'element is odd'}
    }
})
console.log(uniqueArrayObject)
console.log(modifyUniqueArray)

//using .filter(()=>{})
let uniqueArrayA = [
    a = 0,
    b = 1,
    c = 2,
    d = 3,
    e = 4
]

let greaterThanZer0 = uniqueArrayA.filter((elements)=>{
    return elements > 0 ? elements : elements 
})

console.log(greaterThanZer0)

greaterThanZer0 = uniqueArrayA.filter((elements)=>{
    if(elements > 1){
        console.log(`elements greater then 0: ${elements}`)
    }else{
        console.log(undefined)
    }
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
- slice()
- concat()
- includes()
- destructuring
- array spread operator
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
*/

//using .reduce(()=>{})
let teslaArrayObject = [
    {vehicleA: 'tesla model s', color: 'black', price: 97990},
    {vehicleB: 'tesla model x', color: 'white', price: 88990},
    {vehicleC: 'tesla model y', color: 'black', price: 68990},
    {vehicleD: 'tesla model 3', color: 'black', price: 54990}
]

//using .reduce(()=>{}) to add all values
let sumTeslaPrices = teslaArrayObject.reduce((acc, vehicle)=>{
    if(vehicle.price > 65000){
        return acc + vehicle.price
    }else{
        return acc
    }

}, 0)
console.log(sumTeslaPrices)

//using .reduce(()=>{}) to store certain elements inton a new array.
sumTeslaPrices = teslaArrayObject.reduce((acc, vehicle)=>{
    if(vehicle.price > 50000){
        return acc.concat(vehicle.price)
    }else{
        return acc
    }

}, [])
console.log(sumTeslaPrices)

//using .some(()=>{})
let someTeslaData = teslaArrayObject.some(vehicles =>
    vehicles.price > 60000 ? vehicles.price : vehicles
)
console.log(someTeslaData)


//using .every(()=>{})
someTeslaData = teslaArrayObject.every(vehicles =>
    vehicles.price > 50000 ? vehicles.price : vehicles
)

teslaArrayObject = [
    {vehicle: 'tesla model s', color: 'black', price: 97990},
    {vehicle: 'tesla model x', color: 'white', price: 88990},
    {vehicle: 'tesla model y', color: 'black', price: 68990},
    {vehicle: 'tesla model 3', color: 'black', price: 54990}
]

someTeslaData = teslaArrayObject.find(vehicles =>
    vehicles.price > 90000 ? vehicles.vehicle : vehicles
)

//forEach(()=>{}); iterates over elements in an array object.
let iterateTeslaData = teslaArrayObject.forEach((value, key)=>{
    console.log(key, value)
})
console.log(iterateTeslaData)


//classes; & constructor functions are templates that create object.
let devDataObject = {
    alias: 'cyberman',
    development: 'user interface development',
    languages: [],
    addedLanguages(language){
        return this.languages = [...this.languages, language]
    }
}

let addedDevLanguage = devDataObject.addedLanguages('javaScript')
console.log(addedDevLanguage)

console.log(devDataObject.languages)


////////////////////////

//constructor functions
function CreateDevData(alias, language, development = []){
    this.alias = alias
    this.language = language
    this.development = development
}

//*method()/function that lives on the CreateDevData object prototype.
CreateDevData.prototype.addDevData = function(development){
    this.development = [...this.development, development]
}

let devDataInstance = new CreateDevData('cyberman', 'javaScript')

devDataInstance.addDevData('user interface development')
console.log(devDataInstance.alias)
console.log(devDataInstance.language)
console.log(devDataInstance.development)

//class; constructor, child class extends, super(), sharing methods.
class DevClass{
    constructor(alias, language, development = []){
        this.alias = alias
        this.language = language
        this.development = development
    }
    
    addDevelopment(development){
        return this.development = [...this.development, development]
    }

    getAlias(){
        return this.alias
    }
}

let devClassInstance = new DevClass('cyberman', 'javaScript')

devClassInstance.addDevelopment('user interface development')
console.log(devClassInstance.development)
console.log(devClassInstance.getAlias())
console.log(devClassInstance)


class NewDevClass extends DevClass{
    constructor(alias, language, development, framework = []){
        super(alias, language, development)//super() 'supersedes' the older version of a properties.
        this.framework = framework
    }

    addFramework(framework){
        return this.framework = [...this.framework, framework]
    }
    
    verifyDeveloperSkill(){
        let undefinedVal = undefined

        if(super.getAlias = 'cyberman'){// the function super() calls a new version of a older method/function.
            return `${this.alias} specialized skill: ${this.development}; framework: ${this.framework}.`
        }else{
            return `${this.alias} specialized skill: ${undefinedVal}.`
        }
    }
}

let devClassInstanceB = new NewDevClass('cyberman', 'javaScript', 'user interface development')
console.log(devClassInstanceB)
console.log(devClassInstanceB.addFramework('react.js'))
console.log(devClassInstanceB)
console.log(devClassInstanceB.verifyDeveloperSkill())

/////////////////////////////

class VehicleClassData{
    constructor(vehicle, electric, price){
        this.vehicle = vehicle
        this.electric = electric
        this.price = price
    }
    isElectric(){
        if(this.electric){
            return true
        }else{
            return false
        }
    }
}

let vehicleDataA = new VehicleClassData('tesla: model x', true, 89990)
console.log(vehicleDataA.isElectric())
console.log(vehicleDataA.vehicle)
console.log(vehicleDataA)

class NewVehicleClassData extends VehicleClassData{
    constructor(vehicle, electric, price, specs = []){
        super(vehicle, electric, price)
        this.specs = specs
    }
    addSpecs(specs){
        return this.specs = [...this.specs, specs]
    }
    verifyElectric(){
        if(super.isElectric){//if electric is ided as true.
            return `${this.vehicle} is electric.`
        }else{
            return `${this.vehicle} is not electric.`
        }
    }
}

let vehicleDataB = new NewVehicleClassData(
    'tesla: model s', 
    true, 
    91990
)

console.log(vehicleDataB.addSpecs('performance: 387mi 163 mph 0 to 60; 2.3s'))
console.log(vehicleDataB)
console.log(vehicleDataB.verifyElectric())

//how to 'get', 'set' and simplify classes.

class Product {
  constructor(name, price, discountable) {
    this.name = name;
    this._price = price;
    this.discountable = discountable;
  }

  get price() {
    return this._price;
  }
  
  set price(price) {
    if (typeof price !== "number") {
      return this._price;
    } else {
      this._price = price; 
    }
  }
}

const product1 = new Product("Coffee Maker", 99.95, false);
product1.price = 30;
console.log(product1.price);

//challenge; create a 'get' and a 'set' that verifies that name is a matching name

class Developer{
    constructor(alias, development, language){
        this._alias = alias
        this.development = development
        this.language = language
    }
    get alias(){
        return this._alias
    }

    set alias(alias){
        let unidentifiedVal = 'unidentfied'
        if(alias !== 'cyberman'){
            console.log(`${unidentifiedVal}; access denied.`)
        }else{
            console.log(`${alias}; access granted.`)
        }
    }
}

//alias property value initially set
let devVerified = new Developer('cyberman', 'user interfaces', 'javaScript')

//can change the property value if necessary.
devVerified.alias = 'cyberman'

devVerified.alias = 'coder'

//fix content problems with .bind()

let isUser = 'aaron bevans';
const user = {
  favorites: []
};

class Product {
  constructor(item, price) {
    this.item = item;
    this.price = price;
    this.favoriteProduct = this.favoriteProduct.bind(this);//method is bound to class.
  }
  
  favoriteProduct(){
    user.favorites.push(this.item);
    console.log(`${this.item} favorited!`);
  }


  handleFavoriteProduct(){
    if (isUser === 'aaron bevans') {
      this.favoriteProduct()
    } else {
      console.log("You must be signed in to favorite products!");
    }
  }
}

const product1 = new Product('coaster', 89.99)
product1.handleFavoriteProduct()


//BIND()
//.bind() a method onto a classes constructor.

class DevClassA{
    constructor(alias, language, development, framework){
        this.alias = alias
        this.language = language
        this.development = development
        this.framework = framework

        //methods that live on the class.
        this.logDevType = this.logDevType.bind(this) //property/method belonging to the class.
        this.logFrameType = this.logFrameType.bind(this) //property/method belonging to the class.
        this.handleDevelopmentType = this.handleDevelopmentType.bind(this) //property/method belonging to the class.
    } 

     logDevType(){
        if(this.development === 'user interface development'){
            return true
        }else{
            return false
        }
     }

    logFrameType(){
        if(this.framework === 'react.js'){
            return true
        }else{
            return false
        }
    } 

    handleDevelopmentType(){//metod only lives on the class it is within.
        let unindentifiedVal = 'unidentified development'
        let preferDevType = this.development
        let myFramework = this.framework

        if(this.logDevType() && this.logFrameType()){
            return `development type: ${preferDevType}; framework type: ${myFramework}`
        }else{
            return `development type: ${unindentifiedVal}`
        }
    }
}

//global scoped variable
let developmentDataA = new DevClassA(
    'cyberman', 
    'javaScript',
    'user interface development',
    'react.js'
)

console.log(developmentDataA)
developmentDataA.handleDevelopmentType()


let developmentDataB = new DevClassA(
    'cyberman',
    'java',
    'mobile development',
    'angular'
)

console.log(developmentDataB)
developmentDataB.handleDevelopmentType()

//using child classes and super() methods

class ChildDevClassA extends DevClassA{
    constructor(alias, language, development, framework){
        super(alias, language, development, framework)
        this.confirmDevFrameData = this.confirmDevFrameData.bind(this)
    }

    confirmDevFrameData(){//method only lives on the class it is within.
        if(super.logDevType() && super.logFrameType()){
            return `${this.framework}`
        }else{
            return false
        }
    }
}

let childClassDevData = new ChildDevClassA(
    'cyberman', 
    'javaScript', 
    'user interface development', 
    'react.js'
)
childClassDevData.confirmDevFrameData()

let childClassDevDataB = new ChildDevClassA(
    'programmer', 
    'java', 
    'android mobile development', 
    'angular'
)
childClassDevDataB.confirmDevFrameData()









//////////
//sharing method logic between parent and child classes

class ParentClass{
    constructor(alias, language, development){
        this.alias = alias
        this.language = language
        this.development = development
    }
    getDevelopment(){
        if(this.development === 'user interface development'){
            return true 
        }else{
            return false
        }
    }
}

let parentClassData = new ParentClass(
    'cyberman',
    'javaScript',
    'user interface development'
)

console.log(parentClassData)
parentClassData.getDevelopment()

class ChildClass extends ParentClass{
    constructor(alias, language, development){
        super(alias, language, development)
    }

    verifyDevelopment(){
        if(super.getDevelopment()){
            return 'user interface development confirmed'
        }else{
            return 'development unidentified'
        }
    }
}

let childClassData = new ChildClass(
    'programmer_1',
    'python',
    'video game development'
)

console.log(childClassData)
childClassData.verifyDevelopment()

let childClassDataB = new ChildClass(
    'programmer_1',
    'javaScript/jsx',
    'user interface development'
)

console.log(childClassDataB)
childClassDataB.verifyDevelopment()



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
- *!!call-back functions!!*
- object literals; destructuring, ...object spread
- maps object type; .set(), forEach(()=>{}), ...map object spread

- PRACTICE *ARRAY* METHODS/OPERATIONS -

- map(()=>{})
- filter(()=>{})
- reduce(()=>{})
- some(()=>{}) / every(()=>{})
- find(()=>{})
- forEach(()=>{})

Plus:

- findIndex()
- slice()
- concat()
- includes()
- destructuring
- array spread operator
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
- get single element tags from DOM; document.getElementById()
- 
*/

//find all positive solutions under 1000 to a**3 + b**3 = c**3 + d**3
 
















































































