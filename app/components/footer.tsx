import Link from "next/link"
import { Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <div className="space-y-3">
              <img 
                src="/images-icons/Red Blue Simple Bold Medical Solutions Stethoscope Logo.svg" 
                alt="Dr. Κυριαζόπουλος Logo" 
                className="h-10 w-auto"
              />
              <div>
                <p className="text-base font-medium text-white">Dr. Εμμανουήλ Κυριαζόπουλος</p>
                <p className="text-gray-400 text-sm">Καρδιολόγος</p>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Παρέχουμε υψηλής ποιότητας καρδιολογικές υπηρεσίες στο χώρο σας, με έμπειρους ιατρούς και σύγχρονο
                εξοπλισμό. Μέλος Ελληνικής Καρδιολογικής Εταιρείας.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Υπηρεσίες</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/services#kardiologikos-elegxos" className="hover:text-[#b90f3c]">
                  Καρδιολόγος Κατ' Οίκον
                </Link>
              </li>
              <li>
                <Link href="/services#ikg" className="hover:text-[#b90f3c]">
                  ΗΚΓ στο Σπίτι
                </Link>
              </li>
              <li>
                <Link href="/services#triplex" className="hover:text-[#b90f3c]">
                  Triplex Καρδιάς
                </Link>
              </li>
              <li>
                <Link href="/services#holter" className="hover:text-[#b90f3c]">
                  Holter Ρυθμού & Πίεσης
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Σύνδεσμοι</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-[#b90f3c]">
                  Αρχική
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#b90f3c]">
                  Σχετικά με εμάς
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#b90f3c]">
                  Υπηρεσίες
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#b90f3c]">
                  Επικοινωνία
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Επικοινωνία</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#b90f3c]" />
                <span>+30 210 1234567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#b90f3c]" />
                <span>+30 6945 XXX XXX</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#b90f3c]" />
                <span>Φιλυρών 13, Νέο Ηράκλειο</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-500">
              Για επείγοντα περιστατικά: 166
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© 2024 Dr. Εμμανουήλ Κυριαζόπουλος. Με επιφύλαξη παντός δικαιώματος.</p>
        </div>
      </div>
    </footer>
  )
}