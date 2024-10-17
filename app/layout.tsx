import type { Metadata } from "next";
import { Mali } from "next/font/google";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import Head from "next/head";

const mali = Mali({
  subsets: ["thai"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Love Box Me",
  description: "Game Mobile 2D Animation Classic RPG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mali.className}>
        <Head>
          <meta property="og:image" content="<generated>" />
          <meta property="og:image:type" content="<generated>" />
          <meta property="og:image:width" content="<generated>" />
          <meta property="og:image:height" content="<generated>" />
          <meta name="twitter:image" content="<generated>" />
          <meta name="twitter:image:type" content="<generated>" />
          <meta name="twitter:image:width" content="<generated>" />
          <meta name="twitter:image:height" content="<generated>" />
        </Head>
        <main className="flex min-h-screen pt-16 flex-col bg-[url('/bg.png')] bg-cover bg-center overflow-hidden relative">
          <div className="absolute w-full bottom-0">
            <div className="flex justify-between mx-auto max-w-[1600px] pb-10 lg:pb-0">
              <Image
                alt="char-1"
                src="/char-1.png"
                width={805}
                height={1285}
                className="w-[35vw] max-w-[200px] object-contain object-center lg:translate-y-[-150px]"
              />
              <Image
                alt="char-2"
                src="/char-2.png"
                width={934}
                height={1343}
                className="w-[45vw] max-w-[250px] object-contain object-center lg:translate-y-[-200px]"
              />
            </div>
            <div className="h-[20vh] md:h-[50vh] left-0 w-full bottom-0 absolute bg-gradient-to-t from-white to-[#ffffff00] via-[#ffffff80]" />
          </div>
          <div className="relative w-fit mx-auto mt-10 flex justify-center items-center pointer-events-none px-4">
            <Image
              alt="Flare"
              src="/flare.png"
              width={500}
              height={500}
              className="absolute min-w-[200%]"
            />
            <Image
              alt="logo"
              src="/lbm_logo.png"
              width={5720}
              height={2095}
              className="w-full max-w-[520px] relative"
            />
          </div>
          <Image
            alt="Head line"
            src="/head_line.png"
            width={914}
            height={134}
            className="w-full max-w-[800px] relative mx-auto mt-14 mb-10 px-2"
          />
          <div className="relative">{children}</div>
          <div className="w-full mt-auto relative">
            <div className="w-full max-w-[1600px] p-4  flex items-center gap-8 justify-end">
              <Image
                alt="bgs logo"
                src="/bgs-logo.png"
                width={315}
                height={151}
                className="max-w-[90px] w-[20vw]"
              />
              <Image
                alt="chinese gamer logo"
                src="/chinese-gamer-logo.png"
                width={1733}
                height={1233}
                className="max-w-[70px] w-[15vw]"
              />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
