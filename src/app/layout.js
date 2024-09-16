import "./globals.css";
import { Montserrat, Raleway } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Head from "next/head";

const montserrat = Raleway({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata = {
  title: "PT Wahyu Tatawasana",
  description: "Terpecaya kesegarannya dalam hasil laut",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <link rel="icon" type="image/png" sizes="16x16" href="icon.png" />
      </Head>
      <body className={montserrat.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
