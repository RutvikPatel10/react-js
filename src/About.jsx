import React from 'react'
import aboutus1 from '../src/images/about us 1.png'
import aboutus2 from '../src/images/Enagagement icon 1.png'
import aboutus3 from '../src/images/coomunication icon 1.png'


const About = () => {
  
  return (
    <>
      <div id='aboutus'>
        <div className='container mx-auto font-Rubik py-20 sm:text-2xl px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='order-2 md:order-1 my-auto ' data-aos="zoom-in-right" data-aos-delay="100">
                <img src={aboutus1} alt="" className='object-contain' />                
            </div>
            <div className='order-1 md:order-2 ' data-aos="zoom-in-left">
              <div>
                <div className='border-b w-max mb-5 mx-auto md:mx-0'>
                  <p className='font-medium text-3xl md:text-5xl pb-1'>ABOUT US</p>
                  <div className='border-b-4 border rounded-full w-16 md:w-40 -mb-[3px]'></div>
                </div>
                <p className='text-base md:text-lg mb-10'>We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.</p>
                <div className='grid grid-cols-2 gap-x-8 md:gap-x-16'>
                  <div>
                    <img src={aboutus2} alt="" className='mb-6 object-contain' />
                    <p className=' font-medium mb-3'>Engagement</p>
                    <p className='text-base md:text-lg'>We are engagement specialists, who have led projects at all levels of the IAP2 spectrum.READ MORE</p>
                  </div>
                  <div>
                    <img src={aboutus3} alt="" className='mb-6 object-contain' />
                    <p className=' font-medium mb-3'>Engagement</p>
                    <p className='text-base md:text-lg'>We are engagement specialists, who have led projects at all levels of the IAP2 spectrum.READ MORE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About