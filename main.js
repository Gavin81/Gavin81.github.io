const header = document.getElementByTagName('header');
const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

// hamMenu.addEventListener('click', () => {
//     hamMenu.classList.toggle('active');
//     offScreenMenu.classList.toggle('active');
// })

header.classList.toggle('sticky', isPastHeader);