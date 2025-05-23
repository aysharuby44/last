import { Outfit } from "next/font/google";
import "./globals.css";

const outfitFont = Outfit({ subsets: ['latin'], weight: ["400", "500", "600", "700"] });

export const metadata = {
  title: "Tomahawk",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add the favicon here */}
        <link rel="icon" href="/logo2.png" type="image/png" />
        <title>{`Welcome to the best specialty café on Reem Island. It’s a unique concept — we believe the best coffees bring people together. `}</title>
<meta name="description" content={`Welcome to the best specialty café on Reem Island. It’s a unique concept — we believe the best coffees bring people together. `} />
  </head>
      <body className={`${outfitFont.className} bg-[#0a1616] text-white min-h-screen`}>
        {children}
      </body>
    </html>
  );
}