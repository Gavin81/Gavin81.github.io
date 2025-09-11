const header = document.getElementByTagName('header');
const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const accordionButton = document.querySelector('accordion h2');
// const accordion = document.querySelectorAll('.accordion');


// hamMenu.addEventListener('click', () => {
//     hamMenu.classList.toggle('active');
//     offScreenMenu.classList.toggle('active');
// })

header.classList.toggle('sticky', isPastHeader);


accordionButton.addEventListener('click', e => {
    p.classList.toggle('active');
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

