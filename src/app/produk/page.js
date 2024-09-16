import { Banner } from "@/components/Banner";
import { ProdLarge } from "@/components/ProductComponents/ProdLarge";
import { DataProducts } from "../../../public/Database/AboutUsData";

export default function ProdukPage() {
    return (
        <>
            <Banner />
            <ProdLarge data={[...DataProducts.udang.lists, ...DataProducts.kepiting.lists]} text={'Udang & Kepiting'}/>
            <ProdLarge data={DataProducts.ikan.lists} text={'Ikan'}/>
        </>
    )
}