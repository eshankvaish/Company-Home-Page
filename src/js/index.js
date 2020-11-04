const hamburgerToggle = document.querySelector('.logo-toggle__hamburger');
const crossToggle = document.querySelector('.logo-toggle__cross');
const topNavList = document.querySelector('.top-nav-list');

document.addEventListener('DOMContentLoaded', function() {
    function toggleMenu(clickedOn) {
        if(clickedOn === 'Hamburger') {
            hamburgerToggle.classList.remove('active');
            crossToggle.classList.add('active');
            topNavList.classList.add('active');
        } else {
            hamburgerToggle.classList.add('active');
            crossToggle.classList.remove('active');
            topNavList.classList.remove('active');
        }
    }
    hamburgerToggle.addEventListener('click', () => {
        toggleMenu('Hamburger');
    });
    crossToggle.addEventListener('click', () => {
        toggleMenu('Cross');
    });     
});
