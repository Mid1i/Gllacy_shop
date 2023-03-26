const slider = document.getElementsByClassName("slider")[0];
const back_image = document.getElementsByClassName("back__image")[0];


slider.addEventListener("click", () => {

    let dataId = $(".slick-active").attr("data-slick-index");
    
    switch (dataId) {
        case "0":
            $("body, .header-left").css("background", "var(--back-color-1)");
            back_image.style.cssText = "--back-image: url('../img/background-images/slide-1.png')"; 
            break;
        case "1":
            $("body, .header-left").css("background", "var(--back-color-2)");
            back_image.style.cssText = "--back-image: url('../img/background-images/slide-2.png')";
            break;
        case "2":
            $("body, .header-left").css("background", "var(--back-color-3)");
            back_image.style.cssText = "--back-image: url('../img/background-images/slide-3.png')";
            break;  
        default: break;  
    }
});


document.addEventListener('click', (event) => {
    if (event.target.classList.contains('header-menu-burger')) {
        $(".header-menu-burger, .header-left, .header-bottom").toggleClass("burger-menu"); 
        $("body").toggleClass("lock");   
    }
});
