

import React from 'react'

type Props = {
    text: string
    className?: string
    position?: 'left' | 'center' | 'right'
}

export const Title = ({
    text,
    className,
    position = 'left',
}: Props) => {

    return (
        <h3 className={`text-5xl font-bold text-black relative'} ${className}`} >
            {text}
        </h3>
    )
}
