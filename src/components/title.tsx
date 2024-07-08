

import React from 'react'

type Props = {
    text: string
    className?: string
    position?: 'left' | 'center' | 'right'
    box: boolean
}

export const Title = ({
    text,
    className,
    position = 'left',
    box = false
}: Props) => {

    const titleTextComponent = <h3 className={`text-5xl font-bold text-black relative'
        } ${className}`} >
        {text}
    </h3>

    return (

        <>
            {
                box ? (
                    <div className="bg-primary w-[680px] h-24 flex float-left justify-center items-center" > 
                        {titleTextComponent}
                    </div>
                ) : titleTextComponent
            }
        </>
    )
}
