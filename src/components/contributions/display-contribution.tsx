
import { ContributionProps } from './top-contribution'

export type ContributionPropsWithNoImage = Omit<ContributionProps, 'image'>;

export const DisplayContribution = ({
    name,
    amount,
    type,
    rank
}: ContributionPropsWithNoImage) => {
    return (
        <article className='bg-white rounded-md shadow-lg py-5 px-6 flex items-center transition-all hover:scale-[1.02] duration-300 hover:shadow-xl'>
            <span className='text-primary font-semibold text-lg w-8'>{rank}</span>
            <div className="">
                <h3 className='text-black font-semibold'>{name}</h3>
                {type && <span>{type}</span>}
            </div>
            <p className='bg-primary text-primaryLight rounded-full px-3 py-1 font-semibold ml-auto text-center text-sm md:text-base'>{amount}</p>
        </article>
    )
}
