// const header = document.getElementByTagName('header');
const toggleThemeBtn = document.querySelector('#toggleThemeBtn');
const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const accordionHeader = document.querySelector('.accordion-header');
const accordionButton = document.querySelector('.accordion-header button');
// const accordion = document.querySelectorAll('.accordion');


// hamMenu.addEventListener('click', () => {
//     hamMenu.classList.toggle('active');
//     offScreenMenu.classList.toggle('active');
// })

// header.classList.toggle('sticky', isPastHeader);


toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
})


accordionHeader.addEventListener('click', e => {
    const accordionBody = document.querySelector('.accordion-body');
    accordionBody.classList.toggle('active');
    if(accordionButton.textContent === '+'){
        accordionButton.textContent = '-';
    } else {
        accordionButton.textContent = '+';
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

