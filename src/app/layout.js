import "./globals.css";
import localFont from "next/font/local";

const satoshi = localFont({
  src: "../../public/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  display: "swap",
  weight: "300 900",
});

const poppins = localFont({
  src: [
    {
      path: "../../public/fonts/Poppins/Poppins-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/Poppins/Poppins-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../public/fonts/Poppins/Poppins-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "ByteSpace",
  description: "Learn. Create. Grow.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${satoshi.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}