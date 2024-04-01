import { connect, disconnect } from "@/server/db";
import { getDonationById } from "@/server/handlers/donation.handler";


export default async function Page({
    searchParams,
}: {
    searchParams: { donacion: string }
}) {
    console.log({ searchParams })

    await connect();
    const donation = await getDonationById(searchParams.donacion);
    console.log({ donation, status: donation?.paymentStatus });
    await disconnect();

    if (!donation) return <h1>Donación no encontrada</h1>;

    return (
        <main className='relative min-h-[80vh] pt-40 text-black'>
            holaaa
        </main>

    )
}