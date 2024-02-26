

import React from 'react'

type Props = {
    text: string
    className?: string
    position?: 'left' | 'center' | 'right'
}

export const Title = ({
    text,
    className,
    position = 'left'
}: Props) => {
    return (
        <h3 className={`max-w-[90%] text-3xl font-black text-black relative after:absolute after:-bottom-2 after:w-24 after:h-2 after:bg-bared w-full ${position === 'center' ? 'text-center after:left-1/2 after:-translate-x-1/2 mx-auto' : position === 'right' ? 'text-right' : 'text-left after:left-0'
            } ${className}`} >
            {text}
        </h3>
    )
}
