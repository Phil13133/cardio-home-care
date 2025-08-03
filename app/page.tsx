import { Metadata } from "next"
import Link from "next/link"
import {
  HeartIcon,
  Stethoscope,
  Activity,
  Clock,
  Zap,
  Heart,
  Timer,
  Phone,
  MapPin,
  ClipboardCheck,
  Check,
  Clock3,
  Laptop,
  HomeIcon,
  Calendar,
  HeartPulse,
  ActivitySquare,
  UserRound,
} from "lucide-react"
import FAQSection from "./components/faq-section"
import SocialIcons from "./components/social-icons"

export const metadata: Metadata = {
  title: 'Αρχική',
  description: 'Ο Dr. Εμμανουήλ Κυριαζόπουλος προσφέρει ολοκληρωμένη καρδιολογική φροντίδα στο σπίτι σας. ΗΚΓ, Triplex καρδιάς, Holter 24/7.'
}

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="relative bg-white text-gray-800">
        <div className="container relative z-20 mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-8">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl font-serif">
                  <span className="text-[#b90f3c]">Καρδιολόγος</span> <span className="text-gray-800">Εμμανουήλ Κυριαζόπουλος</span>
                </h1>
                <p className="text-xl text-gray-600">Ολοκληρωμένη Καρδιολογική Φροντίδα Στο Σπίτι Σας</p>
                <p className="text-lg text-gray-500 mt-2">Μέλος Ελληνικής Καρδιολογικής Εταιρείας</p>
              </div>

              <Link
                href="/contact"
                className="inline-block bg-[#b90f3c] text-white px-6 py-2 rounded shadow-md hover:shadow-lg transition-all duration-300"
              >
                Κλείστε Ραντεβού Τώρα
              </Link>
            </div>

            <div className="relative hidden md:block">
              <div className="relative z-10">
                <HeartMonitor />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<HeartPulse className="h-10 w-10 text-[#b90f3c]" />}
              title="Εξατομικευμένη Καρδιολογική Φροντίδα"
              description="Προσαρμοσμένα προγράμματα παρακολούθησης και Θεραπείας Για Κάθε Ασθενή, Με Βάση Το Ιστορικό & Τις Ανάγκες Του."
            />
            <FeatureCard
              icon={<Stethoscope className="h-10 w-10 text-[#b90f3c]" />}
              title="Ομάδα Εξειδικευμένων Καρδιολόγων"
              description="Η Ομάδα Μας Περιλαμβάνει Έμπειρους Καρδιολόγους, Νοσηλευτές Και Ειδικούς Υγείας Που Συνεργάζονται Για Να Διασφαλίσουν Την Καλύτερη Δυνατή Φροντίδα."
            />
            <FeatureCard
              icon={<ActivitySquare className="h-10 w-10 text-[#b90f3c]" />}
              title="Τακτικοί Καρδιολογικοί Έλεγχοι - Checkups"
              description="Πραγματοποιούμε καρδιογραφήματα, Holter ρυθμού/πίεσης και check-ups για να προλάβουμε σοβαρές καρδιακές επιπλοκές."
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#faedf0]/30 py-16">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="relative mb-12">
            <div className="bg-[#b90f3c] text-white py-3 px-6 inline-block rounded-r-lg shadow-md">
              <h2 className="text-2xl md:text-3xl font-serif">Οι Υπηρεσίες μας Κατ' Οίκον</h2>
            </div>
            <div className="absolute -bottom-3 left-0 w-24 h-1 bg-[#b90f3c]/50"></div>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={<Stethoscope className="h-8 w-8" />}
              title="Καρδιολόγος Κατ' Οίκον"
              description="Πλήρης καρδιολογική εξέταση & συμβουλευτική στο χώρο σας."
            />

            <ServiceCard
              icon={<Zap className="h-8 w-8" />}
              title="ΗΚΓ στο Σπίτι"
              description="Άμεσο ηλεκτροκαρδιογράφημα για γρήγορη διάγνωση."
            />

            <ServiceCard
              icon={<Heart className="h-8 w-8" />}
              title="Triplex Καρδιάς στο Σπίτι"
              description="Υπερηχογράφημα καρδιάς με σύγχρονο φορητό εξοπλισμό."
            />

            <ServiceCard
              icon={<Timer className="h-8 w-8" />}
              title="Holter Ρυθμού & Πίεσης"
              description="24ωρη καταγραφή ρυθμού ή πίεσης για πλήρη εικόνα."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-gray-800 mb-2">Πώς Λειτουργεί;</h2>
            <div className="relative">
              <span className="text-xl text-[#b90f3c] font-medium">3 Απλά Βήματα</span>
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-24 h-1 bg-[#b90f3c]/30 rounded-full"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="relative">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-[#faedf0] flex items-center justify-center mb-4 shadow-md relative">
                  <Phone className="h-10 w-10 text-[#b90f3c]" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#b90f3c] text-white flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">Καλέστε μας</h3>
                <p className="text-gray-600 text-center">Επικοινωνήστε μαζί μας τηλεφωνικά για να κλείσετε ραντεβού.</p>
              </div>
              {/* Connecting line from step 1 to step 2 */}
              <div className="hidden md:block absolute top-10 left-[60%] right-[-60%] border-t-2 border-dashed border-[#b90f3c]/30"></div>
            </div>

            <div className="relative">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-[#faedf0] flex items-center justify-center mb-4 shadow-md relative">
                  <MapPin className="h-10 w-10 text-[#b90f3c]" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#b90f3c] text-white flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">Ο Γιατρός Έρχεται</h3>
                <p className="text-gray-600 text-center">
                  Έμπειρος καρδιολόγος έρχεται στο σπίτι σας την συμφωνημένη ώρα.
                </p>
              </div>
              {/* Connecting line from step 2 to step 3 */}
              <div className="hidden md:block absolute top-10 left-[60%] right-[-60%] border-t-2 border-dashed border-[#b90f3c]/30"></div>
            </div>

            <div className="relative">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-[#faedf0] flex items-center justify-center mb-4 shadow-md relative">
                  <ClipboardCheck className="h-10 w-10 text-[#b90f3c]" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#b90f3c] text-white flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">Εξέταση & Διάγνωση</h3>
                <p className="text-gray-600 text-center">
                  Πραγματοποιείται η εξέταση και λαμβάνετε άμεσα αποτελέσματα/συμβουλές.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-b from-gray-100 to-gray-200 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-gray-800 mb-2">Γιατί να μας Επιλέξετε;</h2>
            <div className="w-24 h-1 bg-[#b90f3c]/50 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#b90f3c] text-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-medium mb-2">Άνεση & Ευκολία</h3>
                <p className="text-white/90">Χωρίς μετακινήσεις και αναμονή σε ιατρεία.</p>
              </div>
            </div>

            <div className="bg-[#b90f3c] text-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <Clock3 className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-medium mb-2">Ταχύτητα & Άμεση Ανταπόκριση</h3>
                <p className="text-white/90">Ιδανικό για επείγοντα περιστατικά ή άτομα με δυσκολία μετακίνησης.</p>
              </div>
            </div>

            <div className="bg-[#b90f3c] text-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <UserRound className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-medium mb-2">Έμπειροι Καρδιολόγοι</h3>
                <p className="text-white/90">Εξειδικευμένοι γιατροί με σύγχρονο εξοπλισμό.</p>
              </div>
            </div>

            <div className="bg-[#b90f3c] text-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <Laptop className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-medium mb-2">Φορητός Εξοπλισμός</h3>
                <p className="text-white/90">Διενέργεια ΗΚΓ, Triplex, Holter στο χώρο σας.</p>
              </div>
            </div>

            <div className="bg-[#b90f3c] text-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <HomeIcon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-medium mb-2">Ασφάλεια & Άνεση Σπιτιού</h3>
                <p className="text-white/90">Εξέταση στο οικείο περιβάλλον του σπιτιού σας.</p>
              </div>
            </div>

            <div className="bg-[#b90f3c] text-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-medium mb-2">Ευέλικτο Ωράριο</h3>
                <p className="text-white/90">Δυνατότητα ραντεβού και εκτός ωραρίου (κατόπιν συνεννόησης).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Social Media Section */}
      <SocialIcons />
      
      {/* CTA Section */}
      <section className="py-16 bg-[#b90f3c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-4">
            Προγραμματίστε την Εξέτασή σας Σήμερα
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Ο Dr. Κυριαζόπουλος είναι διαθέσιμος για κατ' οίκον επισκέψεις
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-[#b90f3c] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Κλείστε Ραντεβού
            </Link>
            <a
              href="tel:+302101234567"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-[#b90f3c] transition-colors flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              210 1234567
            </a>
          </div>
          <p className="mt-6 text-white/80">
            Για επείγοντα περιστατικά: <span className="font-medium">6945 XXX XXX</span>
          </p>
        </div>
      </section>
    </main>
  )
}

function HeartMonitor() {
  return (
    <div className="relative h-80 bg-gradient-to-br from-[#f8f8f8] to-white rounded-xl border-3 border-[#b90f3c]/20 p-4 pb-10 shadow-xl">
      {/* Glass Effect Overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-xl z-0"></div>

      {/* Monitor Header */}
      <div className="relative z-10 flex justify-between items-center mb-3 border-b border-[#b90f3c]/30 pb-2">
        <div className="flex items-center space-x-2">
          <Activity className="h-5 w-5 text-[#b90f3c]" />
          <span className="text-gray-800 text-sm font-medium">Dr. Κυριαζόπουλος - Cardiac Monitor</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4 text-gray-600" />
            <span className="text-gray-600 text-xs">Real-time</span>
          </div>
          <div className="h-2 w-2 rounded-full bg-[#b90f3c] animate-pulse shadow-[0_0_8px_rgba(185,15,60,0.6)]"></div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="relative z-10 grid grid-cols-3 gap-2 mb-4">
        <div className="bg-white p-2 rounded shadow-md border border-gray-100">
          <div className="text-xs text-gray-500">Καρδιακός Ρυθμός</div>
          <div className="text-gray-800 font-bold">
            72 <span className="text-xs font-normal">BPM</span>
          </div>
        </div>
        <div className="bg-white p-2 rounded shadow-md border border-gray-100">
          <div className="text-xs text-gray-500">Πίεση</div>
          <div className="text-gray-800 font-bold">120/80</div>
        </div>
        <div className="bg-white p-2 rounded shadow-md border border-gray-100">
          <div className="text-xs text-gray-500">O2 Saturation</div>
          <div className="text-gray-800 font-bold">
            98<span className="text-xs font-normal">%</span>
          </div>
        </div>
      </div>

      {/* Heartbeat Line */}
      <div className="relative z-10 h-40 bg-white rounded-lg shadow-inner border border-gray-100">
        <svg viewBox="0 0 400 100" className="w-full h-full">
          <defs>
            <linearGradient id="heartLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#b90f3c" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#b90f3c" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path d="M0,50 Q50,0 100,50 T200,50 T300,50 T400,50" fill="none" stroke="transparent" strokeWidth="1" />
          <path
            d="M0,50 Q25,50 50,50 T75,50 T100,50 T125,50 L150,20 L175,80 L200,50 L225,50 L250,50 L275,50 L300,50 L325,20 L350,50 L375,50 L400,50"
            fill="none"
            stroke="url(#heartLineGradient)"
            strokeWidth="3"
            className="heartbeat"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="drop-shadow(0 0 2px rgba(185,15,60,0.5))"
          />
        </svg>

        {/* Grid Lines */}
        <div className="absolute inset-0 grid grid-cols-8 grid-rows-4 pointer-events-none">
          {[...Array(32)].map((_, i) => (
            <div key={i} className="border-[0.5px] border-gray-200"></div>
          ))}
        </div>
      </div>

      {/* Patient Info */}
      <div className="relative z-10 mt-2 mb-4 flex justify-between items-center text-xs text-gray-600">
        <div>Ασθενής ID: HW-29384</div>
        <div className="flex items-center">
          <span className="mr-2">Εμπειρία:</span>
          <div className="flex space-x-1">
            <span className="px-1 py-0.5 bg-[#b90f3c]/10 rounded text-[#b90f3c] font-medium">20+ Χρόνια</span>
            <span className="px-1 py-0.5 bg-[#b90f3c]/10 rounded text-[#b90f3c] font-medium">10000+ Ασθενείς</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-[#FAEDF0] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative z-10">
      <div className="flex items-start space-x-4">
        <div className="bg-white p-3 rounded-full shadow-sm">{icon}</div>
        <div>
          <h3 className="font-medium text-lg mb-2 text-gray-800">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg group">
      <div className="flex flex-col items-center p-6">
        {/* Icon */}
        <div className="bg-[#faedf0] p-5 rounded-full mb-4 group-hover:bg-[#b90f3c]/10 transition-colors duration-300">
          <div className="text-[#b90f3c]">{icon}</div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-medium text-center mb-2">{title}</h3>

        {/* Description */}
        <p className="text-gray-600 text-sm text-center mb-6">{description}</p>

        {/* Button */}
        <button className="mt-auto text-[#b90f3c] hover:text-[#b90f3c]/80 font-medium text-sm py-2 px-4 rounded-full bg-[#faedf0] hover:bg-[#b90f3c]/10 transition-colors duration-300">
          Μάθετε Περισσότερα
        </button>
      </div>
    </div>
  )
}
