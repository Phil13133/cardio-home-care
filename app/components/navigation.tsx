import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img 
            src="/images-icons/Red Blue Simple Bold Medical Solutions Stethoscope Logo.svg" 
            alt="Dr. Κυριαζόπουλος - Καρδιολόγος" 
            className="h-12 w-auto md:h-14"
          />
        </Link>
        <div className="hidden md:flex items-center space-x-8 text-lg">
          <Link href="/" className="hover:text-[#faedf0]">
            Αρχική
          </Link>
          <Link href="/about" className="hover:text-[#faedf0]">
            Σχετικά
          </Link>
          <Link href="/services" className="hover:text-[#faedf0]">
            Υπηρεσίες
          </Link>
          <Link href="/contact" className="hover:text-[#faedf0]">
            Επικοινωνία
          </Link>
        </div>
        <Link 
          href="/contact" 
          className="bg-white text-[#b90f3c] px-6 py-2 rounded text-base font-medium hover:bg-gray-100 transition-colors"
        >
          Κλείστε Ραντεβού
        </Link>
      </div>
    </nav>
  )
}