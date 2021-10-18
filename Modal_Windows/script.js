'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnclosemodal = document.querySelector('.close-modal');
const btnsOpenmodal = document.querySelectorAll('.show-modal');
const openModal = function () {
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenmodal.length; i++)
    btnsOpenmodal[i].addEventListener('click', openModal);
const closeModel = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
btnclosemodal.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);
document.addEventListener('keydown', function (e) {
    console.log(e.key);
    if (e.key === 'Escape') {
        if (!modal.classList.contains('hidden')) {
            closeModel();
        }
    }
});