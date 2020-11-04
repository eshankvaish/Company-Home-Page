const hamburgerToggle = document.querySelector('.logo-toggle__hamburger');
const crossToggle = document.querySelector('.logo-toggle__cross');
const topNavList = document.querySelector('.top-nav-list');

document.addEventListener('DOMContentLoaded', function() {
    function toggleMenu(clickedOn) {
        if(clickedOn === 'Hamburger') {
            hamburgerToggle.classList.remove('toggle-active');
            crossToggle.classList.add('toggle-active');
            topNavList.classList.add('toggle-active');
        } else {
            hamburgerToggle.classList.add('toggle-active');
            crossToggle.classList.remove('toggle-active');
            topNavList.classList.remove('toggle-active');
        }
    }
    hamburgerToggle.addEventListener('click', () => {
        toggleMenu('Hamburger');
    });
    crossToggle.addEventListener('click', () => {
        toggleMenu('Cross');
    });     
});
