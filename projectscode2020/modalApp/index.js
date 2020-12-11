let openModal = document.getElementById('open-modal')

openModal.addEventListener('click', function(){
    let showOverLay = document.getElementById('overlay')
    showOverLay.style.display = 'block';
})


let closeModal = document.getElementById('close-modal')

closeModal.addEventListener('click', function(){
    let hideOverLay = document.getElementById('overlay')
    hideOverLay.style.display = 'none';
})