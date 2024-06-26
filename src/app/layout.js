import { Manrope } from "next/font/google";
import "./globals.css";

const Inter = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Doctor",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={Inter.className}>
        {children}
      </body>
    </html>
  );
}
