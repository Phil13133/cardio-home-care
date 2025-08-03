import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Noto_Sans, Noto_Serif } from "next/font/google"
import Navigation from "./components/navigation"
import Footer from "./components/footer"

const notoSans = Noto_Sans({
  subsets: ["latin", "greek"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans",
})

const notoSerif = Noto_Serif({
  subsets: ["latin", "greek"],
  weight: ["400", "700"],
  variable: "--font-noto-serif",
})

export const metadata: Metadata = {
  title: {
    default: "Dr. Κυριαζόπουλος Καρδιολόγος | Καρδιολογικές Εξετάσεις Κατ' Οίκον",
    template: "%s | Dr. Κυριαζόπουλος Καρδιολόγος"
  },
  description: "Ο Dr. Εμμανουήλ Κυριαζόπουλος παρέχει εξειδικευμένες καρδιολογικές υπηρεσίες κατ' οίκον. ΗΚΓ, Triplex καρδιάς, Holter ρυθμού και πίεσης στο χώρο σας.",
  keywords: "καρδιολόγος, καρδιολόγος κατ οίκον, καρδιολογικές εξετάσεις, ΗΚΓ, Triplex καρδιάς, Holter, Αθήνα, Κυριαζόπουλος",
  authors: [{ name: "Dr. Εμμανουήλ Κυριαζόπουλος" }],
  openGraph: {
    title: "Dr. Κυριαζόπουλος - Καρδιολόγος Κατ' Οίκον",
    description: "Εξειδικευμένες καρδιολογικές υπηρεσίες στο χώρο σας",
    type: "website",
    locale: "el_GR",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="el">
      <body className={`${notoSans.variable} ${notoSerif.variable} font-sans`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}