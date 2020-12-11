//button that converts temperature.
let convertBtn = document.getElementById('btn')

//event button that listens for click event and fires a function.
convertBtn.addEventListener('click', function(event){

    let fahrTemp = document.getElementById('temperature').value

    fahrTemp = parseInt(fahrTemp)//turning the value into an integer.

    let celsTemp = document.querySelector('#result')

    fahrTemp ? celsTemp.textContent = ((fahrTemp - 32) *  5/9).toFixed(2) : 'NaN'
    
})