'use strict';

const showModal = document.querySelectorAll('.show-modal');
console.log(showModal);
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

// Open Model Function
const openModel = function(){
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

// Close Model Function
const close = function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}


// Assign Event Listiner to all class 
for(let i = 0; i<showModal.length;i++ ){
showModal[i].addEventListener('click',openModel);
}

document.addEventListener('keydown',function(e){
console.log(e);
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        close();
    }

});


closeModal.addEventListener('click',close);
overlay.addEventListener('click',close);

