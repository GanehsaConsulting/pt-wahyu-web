import { HomeBanner } from "@/components/HomeBanner";
import { Products } from "@/components/ProductComponents/Products";
import { WhyUs } from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <Products />
      <WhyUs />
    </>
  );
}
