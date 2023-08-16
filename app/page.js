"use client"
import { FcSearch } from "react-icons/fc";
import { useRef, useState
 } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';



export const metadata = {
  title: 'BloodBond--Network || Home',
  description: 'Spider Alpha',
}
 const HomePage=()=> {
  return (
   
   <>
  <div className='w-[25%] mx-auto flex gap-2'>
    <div>
    
   <input  type="text" placeholder="Search Your Location" className="input input-bordered w-full max-w-xs" />

    </div>
    <button  className="btn btn-outline btn-error" >Search  <FcSearch className=' text-3xl'></FcSearch></button>
   
  </div>

  <div className="pt-16">
  <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide >
          <img src="https://i.ibb.co/9ZvZr5r/pic-3.jpg" alt=""
        
          ></img>
        </SwiperSlide>

         <SwiperSlide>
         <img src="https://i.ibb.co/GV7bvZ7/pic-4.jpg" alt=""
           
           ></img>
         </SwiperSlide>
         <SwiperSlide>
         <img src="https://i.ibb.co/zr85Nds/pic-2.jpg" alt=""
          
          ></img>
         </SwiperSlide>
         
        <SwiperSlide>
        <img src="https://i.ibb.co/zm0HPrZ/pic-1.jpg"  alt=""
            
            ></img>
        </SwiperSlide>
       
      </Swiper>
      </div>
   
   </>
  )
}
export default HomePage;
