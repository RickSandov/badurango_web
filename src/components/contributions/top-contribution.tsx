import Image from 'next/image'


export type ContributionProps = {
    rank: number
    name: string
    amount: string
    type?: string
    image: string
}

export const TopContribution = ({
    rank,
    name,
    amount,
    type,
    image
}: ContributionProps) => {
    return (
        <article className='bg-white max-w-full flex-grow rounded-lg shadow-lg py-10 px-16 flex flex-col items-center justify-center gap-3 transition-all hover:scale-[1.02] duration-300 hover:shadow-xl h-[300px] max-w-full'>
            <div className="relative size-24 p-2">
                <div className='size-full rounded-full relative bg-white shadow-lg overflow-hidden' >
                    <Image src={image} alt={name} fill objectFit='contain' />
                </div>
                <span className='absolute -top-1 right-0 text-sm size-7 leading-none bg-red-500 text-white rounded-full font-semibold flex justify-center items-center'>{rank}</span>
            </div>
            <div className='text-center'>
                <h3 className='text-black font-semibold text-lg leading-tight'>{name}</h3>
                {type && <span className='text-slate-400 font-semibold text-sm'>{type}</span>}
            </div>
            <p className='bg-primary text-primaryLight rounded-full px-3 py-1 font-semibold'>{amount}</p>

        </article>
    )
}
