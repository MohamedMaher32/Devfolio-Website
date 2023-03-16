
$(window).ready(function(){
    $(".landing").fadeOut(2000)
    $(window).scroll(function(){
        let scrollTop = $(window).scrollTop()
        if(scrollTop > 10){
            $(".navbar").addClass("main-bg")
            $(".arrow-up").fadeIn(1000)
        }
        else{
            $(".navbar").removeClass("main-bg")
            $(".arrow-up").fadeOut(1000)
        }
    })
    $(".nav-link").click(function(){
        let sectionHref = $(this).attr("href")
        let sectionTop = $(sectionHref).offset().top
        $("body,html").animate({scrollTop: sectionTop} , {duration: 500 , queue: false})
        $(this).addClass("active")
        $(this).parent().siblings().children().removeClass("active")
        $(".navbar-collapse").addClass("d-none")
        $(".navbar-collapse").removeClass("d-block")
    })
    $(".navbar-toggler").click(function(){
        // $(".navbar-collapse").addClass("d-block")
        $(".navbar-collapse").removeClass("d-none")
    })
    
    $(".arrow-up").click(function(){
        $("body,html").animate({scrollTop: "0px"} , 500)
        $(".nav-link").parent().siblings().children().removeClass("active")
    })
    let width = $(".inner-setting").outerWidth(true)
    $(".setting").css({right:`-${width}px`})
    $(".setting .setting-icon").click(function(){
        let right = $(".setting").css("right")
        if(right == "0px"){
            let width = $(".inner-setting").outerWidth(true)
            $(".setting").animate({right:`-${width}px`},1000)
        }
        else{
            $(".setting").animate({right:`0px`},1000)
        }
    
    })
    $(".box").click(function(){
    let color = $(this).css("background-color")
    $(":root").css("--main-color", color)
    })
    $(".bgBox img").click(function(){
        let imgPath = $(this).attr("src")
        $("#HOME").css("background-image",`url(${imgPath})`)
    })
    new Typed('#typing', {
        strings: [`Frontend Developer.`, `Freelance Developer.`],
        typeSpeed: 100,
        loop: true,
        backSpeed: 100
    });
    wow = new WOW({offset: 150,})
    wow.init();
    new PureCounter();
})

