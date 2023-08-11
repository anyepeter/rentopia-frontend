import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/element/css/thumbs';
import 'swiper/css/effect-fade';


// import required modules
import { EffectFade, Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';

import '../../../Styles/houseListing/HouseDetails/imageSwiper.css'

export const ImageSwip = ()  => {
  
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const thumbsSwiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.realIndex);
  };



  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        effect={'fade'}
        spaceBetween={10}
        navigation={true}
       loop={true}
       thumbs={{ swiper: thumbsSwiperRef.current }}
        modules={[EffectFade, Autoplay, FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide>
          <img className="autoplaying" src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="autoplaying" src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="autoplaying" src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="autoplaying" src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={(swiper) => (thumbsSwiperRef.current = swiper)}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchslidesvisibility={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default ImageSwip;
