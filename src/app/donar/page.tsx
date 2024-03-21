
import { DisplayProduct } from '@/components/display-product'
import { Title } from '@/components/title'
import { TheProject } from './the-project'
import { TopContribution } from '@/components/contributions/top-contribution'
import { DisplayContribution } from '@/components/contributions/display-contribution'
import { DonateForm } from './donate-form'
import { DisplayChashDonation } from '@/components/display-cash-donation'
import { TProduct } from '@/types'



async function getData(): Promise<TProduct[]> {

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
        console.log({ res });
        const data = await res.json();
        console.log({ data })
        return data.products.map(({ title, price, image, description, _id }: TProduct) => ({ title, price, image, description, _id }))
    } catch (error) {
        console.log('Error from getData', { error })
        return []
    }
}

export default async function Donar() {
    const products = await getData();
    return (
        <>
            <main className='relative min-h-[100vh] pt-40'>

                <div className='px-10'>
                    <Title text='Tienda de donación' />
                </div>

                <ul id='productos' className='flex flex-wrap justify-center gap-10 px-20 mt-20 md:gap-5 md:justify-start'>
                    {products && products.map(({ title, price, image, description, _id }, index) => (
                        <DisplayProduct
                            key={index} product={
                                {
                                    title,
                                    price,
                                    image,
                                    description,
                                    _id
                                }
                            } />
                    ))}
                    <DisplayChashDonation />
                </ul>

                <div className='my-20 max-w-[90%] mx-auto' >
                    <Title text='Voluntariado y servicios' position='center' />
                    <div className='mt-10'>
                        <DonateForm />
                    </div>
                </div>


                {/* Background SVGs */}
                <BgTop />
                <BgBottom />
            </main>

            <TheProject />

            <div className="px-5 my-20">
                <Title text='Contribuciones' position='center' />
            </div>

            <section id='mayores-contribuciones' className='w-[1000px] max-w-[90%] pb-5 mx-auto flex flex-col md:flex-row md:flex-wrap items-center gap-4 justify-center'>
                <TopContribution rank={1} name='Grupo Maelsa' amount='2,600kg cemento' type='comercio' image='/images/maelsa.png' />
                <TopContribution rank={2} name='www.bloomi.coffee' amount='2,600kg cemento' type='comercio' image='/images/bloomi.png' />
                <TopContribution rank={3} name='Electromateriales Prome' amount='2,600kg cemento' type='comercio' image='/images/prome.png' />
            </section>

            <section id="contribuciones" className='w-[1000px] gap-5 max-w-[90%] mx-auto flex flex-col'>
                <DisplayContribution name='Fénix Tea House' amount='600kg cemento' rank={4} />
                <DisplayContribution name='Manuel Bueno' amount='550kg cemento' rank={5} />
                <DisplayContribution name='Ángel Cruz' amount='400kg cemento' rank={6} />
            </section>

        </>
    )
}


function BgBottom() {

    // ratio: width="650" height="252"
    return (
        <svg className='fixed -z-10 bottom-0 left-0 max-w-[70%] md:max-w-[50%]' viewBox="0 0 650 252" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0C70.5714 20.8376 141.361 41.6753 209.966 55.5671C278.571 69.4588 344.992 76.4047 415.563 90.8894C486.134 105.374 560.639 127.482 600.403 155.605C640.168 183.727 644.975 217.864 650 252H0V0Z" fill="#CE0F2D" />
        </svg>

    )
}

function BgTop() {

    // ratio: width="531" height="377"
    return (
        <svg className='fixed -z-10 top-0 right-0 max-w-[70%] md:max-w-[50%]' viewBox="0 0 531 377" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M530.5 377C469.693 358.118 408.886 339.237 341.482 324.283C273.898 309.457 199.718 298.432 155.494 266.498C111.093 234.69 96.6491 181.72 75.7857 133.819C54.9224 85.918 27.4612 42.959 0 0H530.5V377Z" fill="#FBAE3C" />
        </svg>

    )
}
