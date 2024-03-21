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
        <article className='bg-white flex-grow rounded-lg shadow-lg py-10 px-16 flex flex-col items-center justify-center gap-3 transition-all hover:scale-[1.02] duration-300 hover:shadow-xl h-[300px] max-w-full'>
            <div className="relative p-2 size-24">
                <div className='relative overflow-hidden bg-white rounded-full shadow-lg size-full' >
                    <Image src={image} alt={name} width={100} height={100} className='object-contain' />
                </div>
                <span className='absolute right-0 flex items-center justify-center text-sm font-semibold leading-none text-white bg-red-500 rounded-full -top-1 size-7'>{rank}</span>
            </div>
            <div className='text-center'>
                <h3 className='text-lg font-semibold leading-tight text-black'>{name}</h3>
                {type && <span className='text-sm font-semibold text-slate-400'>{type}</span>}
            </div>
            <p className='px-3 py-1 font-semibold rounded-full bg-primary text-primaryLight'>{amount}</p>

        </article>
    )
}
