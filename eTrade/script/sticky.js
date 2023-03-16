$(function(){


$(window).scroll(function(){ 

    $(window).scroll(function(){
        if($(window).scrollTop() > 0) {
            $(".header-main").addClass("sticky");
        }
        else {
            $(".header-main").removeClass("sticky");
        }

    });

});

}); 




