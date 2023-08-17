"use client"
import { FcSearch } from "react-icons/fc";

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';



// import required modules
import { EffectCards } from 'swiper/modules';
const AutoplaySlider = withAutoplay(AwesomeSlider);




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


{/* banner section */}


  <section className="w-[90%] mx-auto pt-12">
  <AutoplaySlider
             animation="cubeAnimation"
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}
  >
    <div className="rounded-md" data-src="https://i.ibb.co/rkbNpFV/pic-5.jpg" />
    <div className="rounded-md" data-src="https://i.ibb.co/9ZvZr5r/pic-3.jpg"  />
    <div className="rounded-md" data-src="https://i.ibb.co/GV7bvZ7/pic-4.jpg" />
    <div className="rounded-md" data-src="https://i.ibb.co/zr85Nds/pic-2.jpg" />
    <div className="rounded-md" data-src="https://i.ibb.co/zm0HPrZ/pic-1.jpg" />
  </AutoplaySlider>
      </section>

{/* about section */}


      <section className="flex">
        <div>
      
        </div>
        <div>
          
        <h1 className="text-5xl text-center font-bold text-red-500 pt-12">About Us</h1>
        </div>
      </section>
   
   </>
  )
}
export default HomePage;
