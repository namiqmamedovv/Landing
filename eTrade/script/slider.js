$(".slider").slick({

    // normal options...
    infinite: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    
    // the magic
    responsive: [{
    
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          infinite: true
        }
    
      }, {
    
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true
        }
    
      }, {
    
        breakpoint: 300,
        settings: "unslick" // destroys slick
    
      }]
    });
    
    
    AOS.init();
    
    
    AOS.init({
      once: true,
      easing: 'ease-in-out'
    });
    var iconButton = $("button");
    iconButton.on("click", function() {
      $(iconButton).removeClass('aos-animate');
      setTimeout(function() {
          $(iconButton).addClass('aos-animate');
      }, 400);
    });
    
    

    
$('.shop-content').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



  
$('.shop-content2').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1
});
	


  $('.rsp-boxes').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });




  // explore product 


  $('.explore-product').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
  });
 
  $('.explore-product1').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    
  }
  
  );

  $('.explore-product3').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
 
  $('.explore-product4').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  }
  
  );

  


  // users feedback

  $('.all1').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });
 

  $('.all2').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
 


  $('.slider-feedback').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
 


  $('.news-product').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
  });

  $('.detailprdd').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });


  $('.news-product1').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });



  $('.categorie-product').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 7,
    slidesToScroll: 8
  });


  $('.categorie-product1').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 8
  });
  
 


  $('.campaign').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  });

  
            