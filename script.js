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
let Tales = [];
let Stories = [];
let x=0;
const finalSubmit = document.getElementById('submitToModerate');
const tale = document.getElementById('tale');
const story = document.getElementById('story');


const addSubmission = (evnt)=>{
    evnt.preventDefault();
    x++;
    
    let submission = {
        date: Date.now(),
        id: x,
        state: document.getElementById('state').value,
        email: document.getElementById('email').value,
        submission: document.getElementById('fullSubmission').value
    }
    if(tale.checked){
        Tales.push(submission);
        document.querySelector('form').reset();
    } else{
        Stories.push(submission);
        document.querySelector('form').reset();
    }
    alert('Thank you for your submission! We will read your post and either email you with an opportunity to remove/edit the published content or we will respond to you directly about how you might go about editing your content to publish! Thnx again, cutie!');
    
};

    finalSubmit.addEventListener('click', addSubmission);

    console.log(Tales);
    console.log(Stories);

    // console.log(eitherOr);

// finalSubmit.addEventListener('click', function(){
//     
//     if (taleOrStory.checked){
//         addSubmission(Tales.push(submission));
        

//     } else{
//         addSubmission();
//         Stories.push(submission);
//     };
//     })
   
// // **an email would maybe be sent at this point to give ppl the opportunity to to remove/edit**