
//accessing an input element id and its contents
let searchBar = document.getElementById('searchInput')

    searchBar.addEventListener('click', function(event){

        //varible containing multiple elements with same class-name.
        let softwareList = document.getElementsByClassName('name')

        
        let searchQuery = event.target.value.toLowerCase()

        for(i = 0; i < softwareList.length; i++){

            const listItems = softwareList[i].textContent.toLowerCase()

            listItems.includes(searchQuery) ? softwareList[i].style.display = 'block' :
                softwareList[i].style.display = 'none'
        }
})




//button functionality
let results = document.getElementById('results')

let hide = document.querySelector('.hide-search')//hide button

let show = document.querySelector('.show-search')//display button

hide.addEventListener('click', function(){
    
    results.style.display = 'none'
    hide.style.display = 'none'
    show.style.display = 'initial'
})

show.addEventListener('click', function(){

    results.style.display = 'block'
    hide.style.display = 'initial'
    show.style.display = 'none'
})































/*

let showSearch = document.querySelector('.btn-search')

        showSearch.addEventListener('click', function(){

        let show = document.querySelector('#results')
        show.style.display = 'block'
        
})*/









