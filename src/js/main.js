const navMobile = document.querySelector('.mobile')
const navBtn = document.querySelector('.fa-bars')
const footerYear = document.querySelector('.footer__year');

const handleNav = () => {
    navBtn.classList.toggle('--active');
    navMobile.classList.toggle('mobile--active');
    navMobile.classList.remove('--active');
}

navBtn.addEventListener('click', handleNav);
navMobile.addEventListener('click', handleNav);



const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}
handleCurrentYear();
