'use client'

import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
     var settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrow :false,
     };

     return (
          <section className='h-screen w-full flex justify-center items-center'>
               <div className="cardPromotion w-[90%] h-[80vh] grid grid-cols-5 bg-main rounded-3xl">
                    <div className=' col-span-2 '></div>
                    <div className=' col-span-3 p-10' >
                         <Slider {...settings}>
                              <div className='bg-slate-200 h-[70vh]  flex justify-center items-center'>
                                   <h3>1</h3>
                              </div>
                              <div className='bg-slate-200 h-[70vh]  flex justify-center items-center'>
                                   <h3>1</h3>
                              </div>
                              <div className='bg-slate-200 h-[70vh]  flex justify-center items-center'>
                                   <h3>1</h3>
                              </div>
                              
                         </Slider>
                    </div>
               </div>
          </section>

     )
}

export default Carousel