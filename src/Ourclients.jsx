import React from 'react'
import ourclients1 from '../src/images/Layer 19.png'
import ourclients2 from '../src/images/Layer 20.png'
import ourclients3 from '../src/images/1280px-Brigitte-Logo.png'
import ourclients4 from '../src/images/Layer 22.png'
import ourclients5 from '../src/images/BHP_2017_logo.png'
import ourclients6 from '../src/images/Layer 21.png'
import ourclients7 from '../src/images/Layer 23.png'
import ourclients8 from '../src/images/Layer 24.png'
import ourclients9 from '../src/images/MelbourneWaterLogo-1024x282.png'



const Ourclients = () => {
  return (
    <>
        <div className='ourclients pt-32 mb-[75px]' id='Ourclients'>
            <div className='container mx-auto'>
                <div className='border-b w-max mb-7 mx-auto'>
                    <p className='font-medium text-3xl md:text-5xl pb-1'>OUR CLIENTS</p>
                    <div className='border-b-4 border rounded-full w-16 -mb-[3px]'></div>
                </div>
                <div className="grid grid-cols-1  md:grid-cols-5 gap-8">
                    <div>
                        <div className='flex items-center'>
                            <img src={ourclients1} alt="" className='mx-auto w-full object-contain' />
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center'>
                            <img src={ourclients2} alt="" className='m-auto  object-contain'/>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center'>
                            <img src={ourclients3} alt="" className='m-auto  object-contain' />
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center'>
                            <img src={ourclients4} alt="" className='mx-auto  object-contain' />
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center'>
                            <img src={ourclients5} alt="" className='mx-auto  object-contain' />
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center'>
                            <img src={ourclients6} alt="" className='mx-auto  object-contain' />
                        </div>
                    </div>
                   <div>
                        <div className='col-span-2 flex items-center'>
                            <img src={ourclients7} alt="" className='mx-auto  object-contain' />
                        </div>
                   </div>
                    <div>
                        <div className='flex items-center'>
                            <img src={ourclients8} alt="" className='mx-auto  object-contain' />
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center'>
                            <img src={ourclients9} alt="" className='mx-auto  object-contain' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Ourclients