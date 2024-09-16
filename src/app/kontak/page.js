import { Banner } from "@/components/Banner";
import { ListContact } from "@/components/KontakComponents/ListContact";
import { QALists } from "@/components/KontakComponents/QALists";

export const metadata = {
    title: 'PT Wahyu Tatawasana - Kontak Kami',
    description: 'Hubungi kami untuk informasi lebih lanjut mengenai produk dan layanan kami.',
    metadataBase: new URL('https://www.wahyutatawasana.co.id/kontak'),
};

export default function KontakPage() {
    return (
        <>
            <Banner />
            <ListContact />
            <QALists/>
        </>
    )
}