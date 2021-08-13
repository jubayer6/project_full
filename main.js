// landing swiper 
var swiper0 = new Swiper('.in_slider .swiper-container', {
  pagination: {
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  }
});

// OUR PROFESSIONAL SERVICE silder

var swiper1 = new Swiper('.slider_of_service .swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }
});



// slider of create meeting 

var swiper2 = new Swiper('.in_create_meeting .swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }
});


// slider of what is our survice 

var swiper3 = new Swiper('.first_slider_of_our_survice .swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


// activation of service and shop 

var sbsb_act = document.querySelector('.sbsb_act');
var survice_btn = document.querySelector('.survice_btn');
var shop_btn = document.querySelector('.shop_btn');

var survice_btn_p = document.querySelector('.survice_btn p');
var shop_btn_p = document.querySelector('.shop_btn p');
var s_act = document.querySelector('.s_act');


shop_btn.addEventListener('click', function(){
  sbsb_act.style.left = '63%';
  survice_btn_p.classList.remove('s_act');
  shop_btn_p.classList.add('s_act');

});

survice_btn.addEventListener('click', function(){
  sbsb_act.style.left = '0%';
  shop_btn_p.classList.remove('s_act');
  survice_btn_p.classList.add('s_act');
});


// slider of our social media feature

var swiper4 = new Swiper('.in_yCUSM .swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }
});


// slider of world biggest service plateform

var swiper5 = new Swiper('.wBSP_slider .swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 2,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  loop:true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  }
});

// today best view 

// image slider 
// image slider 
var swiper6 = new Swiper('.tIMG_box .swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
      el: '.swiper-pagination',
  },
});

// column slider 

var swiper7 = new Swiper('.slider_ofTBV .big_swiper_container.swiper-container', {
  pagination: {
    el: '.big_pagination.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }
});

// heart red and o system

function heart(){
  var redh = document.getElementById('red_h');
  var redh_o = document.getElementById('o_h');
  redh.style.display = 'none';
  redh_o.style.display = 'block';
};

function heart_o(){
  var redh = document.getElementById('red_h');
  var redh_o = document.getElementById('o_h');
  redh_o.style.display = 'none';
  redh.style.display = 'block'; 
};


// download app slider 

var swiper8 = new Swiper('.mobail_app_slider .swiper-container', {
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }
});

// bar code slider 

var swiper9 = new Swiper('.in_bar_code .swiper-container', {
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }
}); 


var swiper10 = new Swiper('.aHol_txt_sld .swiper-container', {
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }
});

var swiper11 = new Swiper('.in_payment_method .swiper-container', {
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }
});  
