import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Επικοινωνία',
  description: 'Επικοινωνήστε με τον Dr. Κυριαζόπουλο για να κλείσετε ραντεβού για καρδιολογικές εξετάσεις κατ\'οίκον στην Αθήνα.'
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}