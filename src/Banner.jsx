import React from 'react'
import logo from '../src/images/logo-1.png'


const Banner = () => {

  return (
    <>
        <div className='banner h-[550px]  md:h-[800px] font-Rubik p-4 '>
            <div className='header flex justify-between items-center  md:px-4 lg:px-32'>
                <div>
                    <img src={logo} className="object-contain w-full" alt=""/>
                </div>
                <div className='hidden md:block'>
                    <a href="#aboutus" className='mx-2 md:mx-4 p-2 hover:bg-pink-100 rounded focus:bg-pink-100'>AboutUs</a>
                    <a href="#Services" className='mx-2 md:mx-4 p-2 hover:bg-pink-100 rounded focus:bg-pink-100'>Services</a>
                    <a href="#Ourteam" className='mx-2 md:mx-4 p-2 hover:bg-pink-100 rounded focus:bg-pink-100'>Team</a>
                    <a href="#Ourclients" className='mx-2 md:mx-4 p-2 hover:bg-pink-100 rounded focus:bg-pink-100'>Clients</a>
                    <a href="#footer" className='mx-2 md:mx-4 p-2 hover:bg-pink-100 rounded focus:bg-pink-100'>ContactUs</a>
                </div>
            </div>
            <div className='container m-auto relative h-full'>
                <div className='max-w-lg absolute md:h-full top-1/4 right-0'>
                    <p className='font-medium text-3xl md:text-[56px] leading-8 md:leading-[4rem]'>Mendleson <br />  Communication <br /> and Engagement</p>
                    <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sed ipsum, ut quam volutpat, tortor.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner