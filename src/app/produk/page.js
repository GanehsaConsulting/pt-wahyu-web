import { Banner } from "@/components/Banner";
import { ProdLarge } from "@/components/ProductComponents/ProdLarge";
import { DataProducts } from "../../../public/Database/AboutUsData";

export const metadata = {
    title: 'PT Wahyu Tatawasana - Produk',
    description: 'Lihat berbagai produk laut segar yang ditawarkan oleh PT Wahyu Tatawasana.',
    metadataBase: new URL('https://www.wahyutatawasana.co.id/produk'),
};

export default function ProdukPage() {
    return (
        <>
            <Banner />
            <ProdLarge data={[...DataProducts.udang.lists, ...DataProducts.kepiting.lists]} text={'Udang & Kepiting'}/>
            <ProdLarge data={DataProducts.ikan.lists} text={'Ikan'}/>
        </>
    )
}