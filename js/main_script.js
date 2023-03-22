document.addEventListener('click', function(event) {
    if (event.target.classList.contains('header-menu-burger')) {
        $(".header-menu-burger, .header-left, .header-bottom").toggleClass("burger-menu");    
    }
})
