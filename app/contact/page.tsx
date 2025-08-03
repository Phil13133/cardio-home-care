"use client"

import { Metadata } from "next"
import { useState } from "react"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  AlertCircle,
  CheckCircle,
  MessageSquare,
  Smartphone
} from "lucide-react"

// Since this is a client component, we can't export metadata directly
// You would need to handle this in a layout or parent server component
// export const metadata: Metadata = {
//   title: 'Επικοινωνία | Dr. Κυριαζόπουλος Καρδιολόγος',
//   description: 'Επικοινωνήστε με τον Dr. Κυριαζόπουλο για να κλείσετε ραντεβού για καρδιολογικές εξετάσεις κατ\'οίκον.'
// }

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        reason: '',
        message: ''
      })
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }, 1000)
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#b90f3c] to-[#9a0d32] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">
            Επικοινωνήστε με τον Dr. Κυριαζόπουλο
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Κλείστε το ραντεβού σας για καρδιολογική εξέταση κατ' οίκον
          </p>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="bg-red-50 border-b border-red-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center text-red-800">
            <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
            <p className="font-medium">
              Για επείγοντα περιστατικά καλέστε το <span className="font-bold">166</span> ή το <span className="font-bold">6945 XXX XXX</span>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-serif text-gray-800 mb-6">
                Φόρμα Επικοινωνίας
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Ονοματεπώνυμο *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b90f3c] focus:border-[#b90f3c] outline-none transition"
                    placeholder="Εισάγετε το ονοματεπώνυμό σας"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b90f3c] focus:border-[#b90f3c] outline-none transition"
                    placeholder="example@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Τηλέφωνο *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b90f3c] focus:border-[#b90f3c] outline-none transition"
                    placeholder="69XXXXXXXX"
                  />
                </div>
                
                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                    Λόγος επικοινωνίας *
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b90f3c] focus:border-[#b90f3c] outline-none transition"
                  >
                    <option value="">Επιλέξτε λόγο επικοινωνίας</option>
                    <option value="appointment">Ραντεβού για εξέταση</option>
                    <option value="general">Γενική ερώτηση</option>
                    <option value="emergency">Επείγον περιστατικό</option>
                    <option value="results">Ερώτηση για αποτελέσματα</option>
                    <option value="followup">Follow-up εξέταση</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Μήνυμα
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b90f3c] focus:border-[#b90f3c] outline-none transition resize-none"
                    placeholder="Περιγράψτε τον λόγο επικοινωνίας σας..."
                  />
                </div>
                
                <div className="text-sm text-gray-600">
                  <p>* Υποχρεωτικά πεδία</p>
                  <p className="mt-1">
                    Τα προσωπικά σας δεδομένα προστατεύονται σύμφωνα με τον GDPR.
                  </p>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#b90f3c] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#9a0d32] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    'Αποστολή...'
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Αποστολή Μηνύματος
                    </>
                  )}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <div className="text-green-800">
                      <p className="font-medium">Το μήνυμά σας στάλθηκε επιτυχώς!</p>
                      <p className="text-sm mt-1">Θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό.</p>
                    </div>
                  </div>
                )}
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-serif text-gray-800 mb-6">
                  Ιατρείο Dr. Κυριαζόπουλου
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-[#b90f3c] mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">Διεύθυνση</h3>
                      <p className="text-gray-600">
                        Φιλυρών 13<br />
                        Νέο Ηράκλειο, Αττική
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-[#b90f3c] mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">Τηλέφωνα Επικοινωνίας</h3>
                      <p className="text-gray-600">
                        Σταθερό: <a href="tel:+302101234567" className="text-[#b90f3c] hover:underline">210 1234567</a><br />
                        Κινητό: <a href="tel:+306945XXXXXX" className="text-[#b90f3c] hover:underline">6945 XXX XXX</a>
                        <span className="text-sm text-gray-500"> (για επείγοντα)</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-[#b90f3c] mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:info@cardiohomecare.gr" className="text-[#b90f3c] hover:underline">
                          info@cardiohomecare.gr
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-[#b90f3c] mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-800 mb-2">Ωράριο Επικοινωνίας</h3>
                      <div className="text-gray-600 space-y-1">
                        <p><span className="font-medium">Δευτέρα - Παρασκευή:</span> 9:00 - 20:00</p>
                        <p><span className="font-medium">Σάββατο:</span> 10:00 - 14:00</p>
                        <p><span className="font-medium">Κυριακή:</span> Κλειστά (μόνο επείγοντα)</p>
                        <p className="text-sm text-gray-500 mt-2">
                          Κατ' οίκον επισκέψεις κατόπιν ραντεβού
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Additional Contact Options */}
              <div className="bg-[#faedf0] rounded-lg p-8">
                <h3 className="font-medium text-xl text-gray-800 mb-4">
                  Άλλοι Τρόποι Επικοινωνίας
                </h3>
                
                <div className="space-y-4">
                  <a
                    href="tel:+302101234567"
                    className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-[#b90f3c] mr-3" />
                      <span className="font-medium">Τηλεφωνική Επικοινωνία</span>
                    </div>
                    <span className="text-gray-500">→</span>
                  </a>
                  
                  <a
                    href="#"
                    className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center">
                      <MessageSquare className="h-5 w-5 text-[#b90f3c] mr-3" />
                      <span className="font-medium">WhatsApp / Viber</span>
                    </div>
                    <span className="text-gray-500">→</span>
                  </a>
                  
                  <div className="p-4 bg-white rounded-lg">
                    <div className="flex items-center mb-2">
                      <Smartphone className="h-5 w-5 text-[#b90f3c] mr-3" />
                      <span className="font-medium">SMS για Ραντεβού</span>
                    </div>
                    <p className="text-sm text-gray-600 ml-8">
                      Στείλτε SMS με "ΡΑΝΤΕΒΟΥ" στο 6945 XXX XXX
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-serif text-gray-800 text-center mb-8">
            Βρείτε μας στον Χάρτη
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-500 mx-auto mb-2" />
                <p className="text-gray-600">Χάρτης Θέσης Ιατρείου</p>
                <p className="text-sm text-gray-500 mt-2">Φιλυρών 13, Νέο Ηράκλειο, Αττική</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}