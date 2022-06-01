import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import person1 from '../src/images/Person 1 img 1.png'
import person2 from '../src/images/Person 2 img 1.png'
import person3 from '../src/images/Person 3 img 1.png'

const Ourteam = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 0,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                dots: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <>
        <div className='ourteam pt-24 md:pt-48 ' id='Ourteam'>
            <div className='container mx-auto px-4 font-Rubik'>
                <div className='border-b w-max mb-10 mx-auto'>
                    <p className='font-medium text-3xl md:text-5xl pb-1'>OUR TEAM</p>
                    <div className='border-b-4 border rounded-full w-16 -mb-[3px]'></div>
                </div>
                <Slider {...settings}>
                    <div>
                        <img src={person1} alt="" className='mx-auto mb-6 sm:mb-12' />
                        <p className='sm:text-2xl text-center'>Jessica D’suza</p>
                    </div>
                    <div>
                        <img src={person2} alt="" className='mx-auto mb-6  sm:mb-12' />
                        <p className='sm:text-2xl text-center'>Johny Williams</p>
                    </div>
                    <div>
                        <img src={person3} alt="" className='mx-auto mb-6  sm:mb-12' />
                        <p className='sm:text-2xl text-center'>Sanya R,</p>
                    </div>
                </Slider>
            </div>
        </div>
    </>
  )
}

export default Ourteam