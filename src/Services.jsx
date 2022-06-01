import React from 'react'
import services1 from '../src/images/Engagement vector 1.png'
import services2 from '../src/images/Coominucation vector 1.png'
import services3 from '../src/images/facilation vector 1.png'
import services4 from '../src/images/Consultation vector 1.png'
import services5 from '../src/images/Training and vector 1.png'

const Services = () => {
  return (
    <div id='Services' className='services'>
        <div className='container mx-auto py-20 px-4 font-Rubik'>
            <div className='border-b w-max mb-5 mx-auto'>
                <p className='font-medium text-3xl md:text-5xl pb-1'>SERVICES</p>
                <div className='border-b-4 border rounded-full w-16 -mb-[3px]'></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-16 md:gap-x-36 gap-y-7 mb-[60px]'>
                <div className='my-auto ' data-aos="zoom-in-left">
                    <p className='font-medium text-2xl md:text-3xl lg:text-[42px] mb-5 md:text-right uppercase'>Engagement</p>
                    <p className='md:text-right'>We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.</p>
                </div>
                <div className='my-auto' data-aos="zoom-in-right" data-aos-delay="100">
                    <img src={services1} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-16 md:gap-x-36 gap-y-7 mb-[60px]'>
                <div className='my-auto order-2 md:order-1' data-aos="zoom-in-right" data-aos-delay="100">
                    <img src={services2} alt=""  />
                </div>
                <div className='my-auto order-1 md:order-2' data-aos="zoom-in-left">
                    <p className='font-medium text-2xl md:text-3xl lg:text-[42px] mb-5 text-left uppercase'>Communications</p>
                    <p className='text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus. </p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-16 md:gap-x-36 gap-y-7 mb-[60px]'>
                <div className='my-auto' data-aos="zoom-in-left">
                    <p className='font-medium text-2xl md:text-3xl lg:text-[42px] mb-5 md:text-right uppercase'>facilitation</p>
                    <p className='md:text-right'>We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.</p>
                </div>
                <div className='my-auto' data-aos="zoom-in-right" data-aos-delay="100">
                    <img src={services3}  />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-16 md:gap-x-36 gap-y-7 mb-[60px]'>
                <div className='my-auto order-2 md:order-1' data-aos="zoom-in-right" data-aos-delay="100">
                    <img src={services4} alt="" />
                </div>
                <div className='my-auto order-1 md:order-2' data-aos="zoom-in-left">
                    <p className='font-medium text-2xl md:text-3xl lg:text-[42px] mb-5 text-left uppercase'>Consultation and Research</p>
                    <p className='text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus. </p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-16 md:gap-x-36 gap-y-7 '>
                <div className='my-auto' data-aos="zoom-in-left">
                    <p className='font-medium text-2xl md:text-3xl lg:text-[42px] mb-5 md:text-right uppercase'>Traning & Mentoring</p>
                    <p className='md:text-right'>We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.</p>
                </div>
                <div className='my-auto' data-aos="zoom-in-right" data-aos-delay="100">
                    <img src={services5} alt=""  />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services