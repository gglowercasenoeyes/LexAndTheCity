const submitBttn = document.querySelector('button');
const submitContent = document.getElementById('pick_me');
// const swap1 = document.getElementById('swap1');
// const swapIn = document.createElement('p');
// swapIn.innerText = '&#x21b5'

submitBttn.onclick = function(){
    submitBttn.classList.toggle('content__open')
    submitContent.classList.toggle('accordian__content__open');
    // submitBttn.replaceChild(swap1, swapIn);
};
