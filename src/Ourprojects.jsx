import React from 'react'
import projects1 from '../src/images/Our Project_ 1 img 1.png'
import projects2 from '../src/images/Our Project _ 2 img 1.png'
import projects3 from '../src/images/Our Project_ 3 img 1.png'
const Ourprojects = () => {
  return (
    <>
        <div className='ourprojects'>
            <div className='container mx-auto px-4 pt-28 '>
                <div className='border-b w-max mb-7 mx-auto'>
                    <p className='font-medium text-3xl md:text-5xl pb-1'>OUR PROJECTS</p>
                    <div className='border-b-4 border rounded-full w-16 -mb-[3px]'></div>
                </div>
                <div className='grid grid-cols-12 gap-6 items-stretch'>
                    <div className='col-span-6 row-span-2'>
                        <img src={projects1} alt="" className='w-full  h-full' />
                    </div>
                    <div className='col-span-6'>
                        <img src={projects2} alt="" className='w-full' />
                    </div>
                    <div  className='col-span-6'>
                        <img src={projects3} alt="" className='w-full' />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Ourprojects