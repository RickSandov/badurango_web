import { connect, disconnect } from "@/server/db";
import { getDonationById } from "@/server/handlers/donation.handler";
import { formatter } from "../checkout/helpers";
import { format } from "date-fns";


export default async function Page({
    searchParams,
}: {
    searchParams: { donacion: string, gracias: string }
}) {
    const gracias = searchParams.gracias === 'true';

    console.log({ gracias })

    await connect();
    const donation = await getDonationById(searchParams.donacion);
    await disconnect();

    if (!donation) return <h1>Donación no encontrada</h1>;

    const { date, description, value, publicDonation, paymentStatus } = donation;

    return (
        <main className='relative min-h-[70vh] pt-40 text-black px-20'>
            <div className="flex flex-wrap justify-between items-end w-[500px] max-w-[90%] mb-16">
                <h1 className="text-4xl font-bold text-baGreen">
                    Donación
                </h1>
                <p role="date" className="font-medium text-slate-600">{format(date, "dd/MM/yyyy")}</p>
            </div>
            <article className="mb-10">
                <div className="">
                    <p className="text-center md:text-left leading-loose">Valor de donación <b className="px-3 py-2 font-bold text-white bg-black drop-shadow-sm">{formatter.format(value)}</b></p>
                    <div className="mt-5">
                        <p className="text-bared">{paymentStatus === 'requires_action' ? 'Donación requiere pago en oxxo.' : 'Donación pagada y registrada'}</p>
                        {
                            !publicDonation ? (
                                <p>{description.split('hecha')[0]}</p>
                            ) : (
                                <p>{description.split('hecha')[0]}</p>
                            )
                        }
                    </div>
                </div>
            </article>
        </main>

    )
}