

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }


    });






    // slide-up-Script


    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });



    /* toggle menu /navbar  script */

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })

});



//typing animation section

var typed = new Typed(".typing",{
    strings: ["Designer","numismatic"],
    typeSpeed:100,
    backSpeed: 60,
    loop:true

});

var typed = new Typed(".typing-2",{
    strings: ["Designer","numismatic"],
    typeSpeed:100,
    backSpeed: 60,
    loop:true

});





//script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>