import { HomeBanner } from "@/components/HomeBanner";
import { Products } from "@/components/ProductComponents/Products";
import { WhyUs } from "@/components/WhyUs";
import Head from "next/head";
import { DataBanner } from "../../public/Database/System";

export const metadata = {
  title: 'PT Wahyu Tatawasana - Home',
  description: 'Selamat datang di PT Wahyu Tatawasana. Temukan informasi terkini tentang produk dan layanan kami.',
  metadataBase: new URL('https://www.wahyutatawasana.co.id'),
};
export default function Home() {
  const { aboutUs } = DataBanner;
  return (
    <>
      <Head>
        <title>{'PT Wahyu Tatawasana, Penyedia Produk Perikanan Berkelanjutan dan Berkualitas'}</title>
        <meta name="description" content="PT Wahyu Tatawasana adalah solusi terbaik untuk produk perikanan berkualitas tinggi yang diambil dari sumber yang berkelanjutan. Kami menyediakan berbagai produk laut seperti udang, kepiting, ikan, dan banyak lagi, dengan fokus pada praktik keberlanjutan dan kualitas produk." />
        <meta name="keywords" content="Perikanan, Kualitas Tinggi, Keberlanjutan, Produk Laut, Udang, Kepiting, Ikan, PT Wahyu Tatawasana" />
        <meta property="og:title" content="PT Wahyu Tatawasana - Penyedia Produk Perikanan Berkualitas" />
        <meta property="og:description" content="Kami berkomitmen untuk menyediakan produk perikanan dari sumber berkelanjutan yang menjaga kelestarian laut. Pilihan produk laut berkualitas untuk kebutuhan bisnis Anda." />
        <meta property="og:image" content="/icon.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="/icon.png" />
        <meta name="twitter:title" content="PT Wahyu Tatawasana - Produk Laut Berkualitas dan Berkelanjutan" />
        <meta name="twitter:description" content="Dapatkan produk perikanan berkualitas tinggi dari sumber yang berkelanjutan. PT Wahyu Tatawasana berfokus pada kelestarian laut dan kualitas produk yang prima." />
        <meta name="twitter:image" content="/icon.png" />
      </Head>
      <HomeBanner />
      <Products />
      <WhyUs />
    </>
  );
}
