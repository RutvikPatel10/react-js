import React from 'react'
import footer1 from '../src/images/facebook 1.png'
import footer2 from '../src/images/linkedin 1.png'
import footer3 from '../src/images/search 1.png'

const Footer = () => {
  return (
    <>
        <div className='max-w-7xl mx-auto px-4' id='footer'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 font-Rubik bg-light-blue px-10 md:px-20 gap-y-5  py-6 md:py-11'>
                <div className=''>
                    <p className='font-bold ml-8 mb-4'>Social</p>
                    <div className='flex mb-4'>
                        <img src={footer1} alt="" className='object-contain mr-4' />
                        <a href='#' className='text-sm'>Facebook</a>
                    </div>
                    <div className='flex mb-4'>
                        <img src={footer2} alt="" className='object-contain mr-4' />
                        <a href='#' className='text-sm'>Linkedin</a>
                    </div>
                    <div className='flex'>
                        <img src={footer3} alt="" className='object-contain mr-4' />
                        <a href='#' className='text-sm'>Google +</a>
                    </div>
                </div>
                <div>
                    <p className='font-bold  mb-4'>Explore</p>
                    <div className='flex flex-col'>
                        <a href='#' className='text-sm mb-4'>Services</a> 
                        <a href='#' className='text-sm mb-4'>Team</a> 
                        <a href='#' className='text-sm mb-4'>Clients</a>
                    </div>
                </div>
                <div>
                    <p className='font-bold mb-4'>Explore</p>
                    <p className='leading-9'>Lorem Ipsum dummy address <br /> used for display <br /> 1234567890</p>
                </div>
                <div>
                    <p className='font-bold mb-4'>Explore</p>
                    <p>mendleson communication@email.com</p>
                </div>
            </div>
        </div>
        <div className='text-center font-Rubik'>
            <p className='p-6'>© Copyright 2018 Mendleson Communication Pty Ltd </p>
        </div>
    </>
  )
}

export default Footer