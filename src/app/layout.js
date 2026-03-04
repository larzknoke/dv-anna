import { Arsenal } from "next/font/google";
import "./globals.css";

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
      <body className={`${arsenal.className}  antialiased`}>{children}</body>
    </html>
  );
}
