document.addEventListener('click', function(event) {
    let arg = event.target;

    if (arg.classList.contains('header-menu-burger')) {
        $(".header-menu-burger, .header-left, .header-bottom").toggleClass("burger-menu");    
    }
})
