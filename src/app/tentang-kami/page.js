import { AboutUs } from "@/components/AboutUsComponent/AboutUs";
import { MarketLocation } from "@/components/AboutUsComponent/MarketLocation";
import { MVM } from "@/components/AboutUsComponent/MVM";
import { Quote } from "@/components/AboutUsComponent/Quote";
import { Banner } from "@/components/Banner";

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