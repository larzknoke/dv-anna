import { Arsenal } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const arsenal = Arsenal({
  // variable: "--font-arsenal",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Diakonischer Verband Anna Margareta",
  description: "Diakonischer Verband Anna Margareta",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${arsenal.className} antialiased`}>
        <div className="flex flex-col min-h-screen bg-gray-100">
          <Header />
          <main className="flex-1 flex justify-center px-4 md:px-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
