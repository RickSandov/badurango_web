'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { calcLength, motion, useAnimation } from 'framer-motion';

export const Progress = () => {
    const [percentage, setPercentage] = useState(30);

    // Datos de ejemplo para las etiquetas
    const labels = [
        { color: '#2141A5', label: "Terreno" },
        { color: '#439699', label: "Despalme y limpieza" },
        { color: '#5DCB3C', label: "Plataformas" },
        { color: '#BF2873', label: "Cimentación" },
        { color: '#E83323', label: "Barda perimetral" },
        { color: '#EC7D30', label: "Infraestructura y estacionamiento" },
        { color: '#F3AF3D', label: "Edificación" },
        { color: '#6917A7', label: "Equipamiento" },
    ];

    return (
        <section id='progreso' className='flex flex-col justify-center items-center p-12 gap-4'>
            <h3 className='text-xl font-bold text-white text-center relative bg-bared inline px-6 py-4 lg:mb-12'>
                Progreso de construcción
            </h3>

            <div className='flex flex-col-reverse w-full justify-between px-8 lg:flex-row lg:px-14'>
                <div className='relative flex h-80 lg:w-3/5 mt-12 lg:mt-0 lg-h-96'>
                    <div className='relative bg-baCream border-primary border-8 h-full w-8 md:w-16 lg:w-22'>
                        <div style={{ height: `${percentage}%` }} className='absolute bottom-0 bg-primary w-full flex items-center justify-center'>
                            <h4 className='text-white font-bold text-xs lg:text-base'>{percentage}%</h4>
                        </div>

                        <div className='absolute flex flex-col text-black -top-10 -left-3 md:left-0'>
                            <h6 className='absolute -top-2 font-semibold text-[8px] self-end md:-top-2 md:text-[12px] lg:text-xs'>meta</h6>
                            <h3 className='font-black text-md md:text-xl lg:text-2xl'>70M</h3>
                        </div>
                    </div>

                    <div className='flex flex-1 items-center justify-center relative'>
                        <div className='absolute h-full w-full border-black border-8 z-10' />
                        <div className='absolute h-full w-full'>
                            <Image
                                alt='Proyecto de construcción blanco y negro'
                                src='/images/ba-architecture.jpg'
                                fill
                                style={{
                                    objectFit: 'cover',
                                }}
                            />
                        </div>
                        <motion.div
                            className='absolute w-full h-full z-20  '
                            style={{
                                clipPath: `inset(${100 - percentage}% 0 0 0)`,
                                backgroundImage: 'url(/images/ba-architecture-color.jpg)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                    </div>

                    <div style={{ bottom: `${percentage}%`, width: "calc(100% + 9px)" }} className='absolute flex z-30 -left-1 w-full -translate-y-1'>
                        <span className='absolute bg-bared w-full h-2 z-40 
                        before:absolute before:top-[50%] before:bottom-[50%] before:translate-y-[-50%] before:bg-bared before:w-[4.7px] before:h-[21.3px] 
                        after:absolute after:top-[50%] after:bottom-[50%] after:translate-y-[-50%] after:right-0 after:bg-bared after:w-[4.7px] after:h-[21.3px]' />

                        <div className='absolute -left-9 top-0 flex flex-col text-black md:-left-12 lg:-left-16'>
                            <h6 className='absolute -top-2 font-semibold text-[8px] self-end md:-top-2 md:text-[12px] lg:text-xs'>actual</h6>
                            <h3 className='font-black text-md md:text-xl lg:text-2xl'>25M</h3>
                        </div>
                    </div>
                </div>

                {/* Etiquetas */}
                <div className='flex flex-wrap items-center justify-center gap-2 lg:h-32 lg:w-2/5'>
                    {labels.map((label, index) => (
                        <div key={index} style={{ backgroundColor: label.color }} className='inline-block rounded-md text-white font-normal p-2 text-center text-md'>
                            <span className='text-lg font-bold'>{index + 1}</span> {label.label}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
