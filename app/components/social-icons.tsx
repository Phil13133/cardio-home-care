import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MessageCircle, HelpCircle } from "lucide-react"
import Link from "next/link"

export default function SocialIcons() {
  return (
    <section className="bg-[#faedf0] py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-2xl font-serif text-gray-800 mb-6">Ακολουθήστε μας</h3>

          <div className="flex space-x-6">
            <Link href="#" className="social-icon-link">
              <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#b90f3c] hover:text-white transition-colors duration-300">
                <Facebook className="h-6 w-6" />
              </div>
            </Link>

            <Link href="#" className="social-icon-link">
              <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#b90f3c] hover:text-white transition-colors duration-300">
                <Instagram className="h-6 w-6" />
              </div>
            </Link>

            <Link href="#" className="social-icon-link">
              <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#b90f3c] hover:text-white transition-colors duration-300">
                <Twitter className="h-6 w-6" />
              </div>
            </Link>

            <Link href="#" className="social-icon-link">
              <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#b90f3c] hover:text-white transition-colors duration-300">
                <Youtube className="h-6 w-6" />
              </div>
            </Link>

            <Link href="#" className="social-icon-link">
              <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#b90f3c] hover:text-white transition-colors duration-300">
                <Mail className="h-6 w-6" />
              </div>
            </Link>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="#" className="flex items-center space-x-2 text-gray-700 hover:text-[#b90f3c] transition-colors">
              <Phone className="h-5 w-5" />
              <span>+30 210 1234567</span>
            </Link>

            <Link href="#" className="flex items-center space-x-2 text-gray-700 hover:text-[#b90f3c] transition-colors">
              <MessageCircle className="h-5 w-5" />
              <span>Live Chat</span>
            </Link>

            <Link href="#" className="flex items-center space-x-2 text-gray-700 hover:text-[#b90f3c] transition-colors">
              <HelpCircle className="h-5 w-5" />
              <span>Βοήθεια</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
