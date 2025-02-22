import type { Metadata } from "next";
import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Script from "next/script";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Hive | The Place to Bee",
  description: "Made with Love by 0x_Johnson",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased bg-[url('/background.png')] dark:bg-[url('/background-dark.png')] bg-cover bg-center`}>
      <Script 
        src="https://cloud.umami.is/script.js" data-website-id="9029468a-9d1c-4f1c-b14a-deb7a1da8670" strategy="afterInteractive"
      />
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
