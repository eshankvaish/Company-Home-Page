//using IIFE
(function() {
    const hamburgerToggle = document.querySelector('.logo-toggle__hamburger');
    const crossToggle = document.querySelector('.logo-toggle__cross');
    const topNavList = document.querySelector('.top-nav-list');
    const body = document.querySelector('body');
    const header = document.querySelector('header');
    let previousScrollPosition = window.pageYOffset; //Current Scroll Position

    document.querySelector('.copyright__year').innerHTML = new Date().getFullYear(); //Setting the year dynamically
    
    //Function for Toggling the Navigation Bar in Mobile View
    function toggleMenu(clickedOn) {
        if(clickedOn === 'Hamburger') {
            hamburgerToggle.classList.remove('toggle-active');
            crossToggle.classList.add('toggle-active');
            topNavList.classList.add('toggle-active');
            body.classList.add('overflow-hidden');
        } else {
            hamburgerToggle.classList.add('toggle-active');
            crossToggle.classList.remove('toggle-active');
            topNavList.classList.remove('toggle-active');
            body.classList.remove('overflow-hidden');
        }
    }

    //Using Event Delegation
    document.addEventListener('click', function(e) {
        if(e.target.classList.contains('logo-toggle__hamburger')) {
            toggleMenu('Hamburger');
        } else if(e.target.classList.contains('logo-toggle__cross')) {
            toggleMenu('Cross');
        } else if(e.target.classList.contains('top-nav-list__item--content')) {
            toggleMenu('Cross');
        }  
    });  

    //For hiding the navbar on scroll down and show on scroll up
    window.addEventListener('scroll', function() {
        let currentScrollPosition = window.pageYOffset;
        if(currentScrollPosition < previousScrollPosition) {
            header.classList.remove('hide-header');
        } else if (currentScrollPosition > 100) {
            header.classList.add('hide-header');
        }
        previousScrollPosition = window.pageYOffset;  //storing the current position
    });
})();
