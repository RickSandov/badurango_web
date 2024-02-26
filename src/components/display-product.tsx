

import Image from 'next/image'
import React from 'react'

export const DisplayProduct = () => {
    return (
        <li className='mt-20 py-5 px-8 rounded-md shadow-md w-52 flex flex-col justify-center items-center gap-3 bg-white transition-all hover:scale-[1.02] duration-300 hover:shadow-xl'>

            <article className=''>
                <Image src={'/images/cemento.png'} alt={'cemento'} width={150} height={150} objectFit='contain' className='' />
                <h3 className='w-full leading-tight text-left text-black'>Cemento CPC40 <span className='font-bold'>50kg</span></h3>
                <div className='flex items-center justify-between w-full mt-3'>
                    <div className='flex items-center gap-2'>
                        <button className='w-5 h-5 leading-none bg-primary text-black font-bold'>
                            -
                        </button>
                        <p className='text-black font-black'>1</p>
                        <button className='w-5 h-5 leading-none bg-primary text-black font-bold'>
                            +
                        </button>
                    </div>
                    <p className='text-bared font-black'>$250</p>
                </div>
                <button className='text-white text-sm font-bold w-full text-center bg-baGreen py-1 transition-colors hover:bg-baGreenDark mt-5'>
                    Donar
                </button>
            </article>
        </li>
    )
}
