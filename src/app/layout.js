import Header from "./components/Header";
import "./globals.css";
import { Mulish } from 'next/font/google'
import Footer from "./components/Footer";
 
const mulish = Mulish({
  weight: ['300','400','500','600','700','800','900'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mulish.className}>
      <body>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
