import { AboutUs } from "@/components/AboutUsComponent/AboutUs";
import { MarketLocation } from "@/components/AboutUsComponent/MarketLocation";
import { MVM } from "@/components/AboutUsComponent/MVM";
import { Quote } from "@/components/AboutUsComponent/Quote";
import { Banner } from "@/components/Banner";

export const metadata = {
    title: 'PT Wahyu Tatawasana - Tentang Kami',
    description: 'Pelajari lebih lanjut tentang PT Wahyu Tatawasana.',
    metadataBase: new URL('https://www.wahyutatawasana.co.id/tentang-kami'),
  };

export default function TentangKamiPage() {
    return (
        <>
            <Banner />
            <AboutUs />
            <MVM />
            <Quote />
            <MarketLocation />
        </>
    )
}