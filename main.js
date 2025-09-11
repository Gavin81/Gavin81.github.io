// const header = document.getElementByTagName('header');
const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const accordionButton = document.querySelector('.accordion-header');
// const accordion = document.querySelectorAll('.accordion');


// hamMenu.addEventListener('click', () => {
//     hamMenu.classList.toggle('active');
//     offScreenMenu.classList.toggle('active');
// })

// header.classList.toggle('sticky', isPastHeader);


accordionButton.addEventListener('click', e => {
    const accordionBody = document.querySelector('.accordion-body');
    accordionBody.classList.toggle('active');
    if(accordionBody.textContent === '+'){
        accordionBody.textContent = '-';
    } else {
        accordionBody.textContent = '+';
    }
})


// accordion.forEach(accordion => {
//     accordion.addEventListener('click', e => {
//         let accordionBtn = accordion.querySelector('button');
//         accordion.classList.toggle('active');
//         if(accordionBtn.textContent === '+'){
//             accordionBtn.textContent = '-';
//         } else {
//             accordionBtn.textContent = '+';
//         }
//     })
// })

// const accordions = document.querySelectorAll('.accordion');
// accordions.forEach(accordion => {
//   accordion.addEventListener('click', e => {
//     let accordionBtn = accordion.querySelector('button');
//     accordion.classList.toggle('active');
//     if (accordionBtn.textContent === '+') {
//       accordionBtn.textContent = '-';
//     } else {
//       accordionBtn.textContent = '+';
//     }
//   })
// })

