let displayBtn = document.querySelector('.displayBtn')

displayBtn.style.fontSize = '30px'

displayBtn.style.color = 'red'

displayBtn.style.backgroundColor = 'white'


let container = document.querySelector('.container')

let divContained = document.querySelector('.contained-div')

let sectionDiv = document.querySelector('.section-div')

function hideDisplay(event){
    event.preventDefault()
    container.style.display = 'none'
    divContained.style.display = 'none'
    sectionDiv.style.display = 'none'
}
displayBtn.addEventListener('click', hideDisplay)

function showDisplay(event){
    event.preventDefault()
    container.style.display = 'block'
    divContained.style.display = 'block'
    sectionDiv.style.display = 'block'
}
displayBtn.addEventListener('dblclick', showDisplay)





