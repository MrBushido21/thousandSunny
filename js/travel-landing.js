const swiperFirst = new Swiper('.swiper', {
    //  Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // If we need pagination
      speed: 800,
  
    watchOverflow: true, // если будет не достаточно слайдов он перестанет работать 
  
    spaceBetween: 30, // отступы между слайдами
  
    autoplay: {
      delay: 3000, // пауза между прокруткой
      stopOnLastSlide: true, // закончить на последнем слайде
      disableOnInteraction: true, //отключить после ручного переключания
    },
      
    slidesPerView: 1, // количесвто слайдов 
    });

    //================================================================================================================================================
    //-----------------Burger---------------\\

    const burger = document.querySelector('.burger');
    const headerList = document.querySelector('.header__list');

    burger.addEventListener("click", function() {
      headerList.classList.toggle('_open');
    });

    //================================================================================================================================================
    //-----------------dinaic-adaptiv---------------\\