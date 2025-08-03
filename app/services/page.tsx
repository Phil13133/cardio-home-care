import { Metadata } from "next"
import Link from "next/link"
import {
  Stethoscope,
  Activity,
  Heart,
  Timer,
  ClipboardCheck,
  MessageCircle,
  CheckCircle,
  Phone,
  AlertCircle,
  Clock,
  Euro
} from "lucide-react"

export const metadata: Metadata = {
  title: 'Καρδιολογικές Υπηρεσίες | Dr. Κυριαζόπουλος Καρδιολόγος',
  description: 'Εξειδικευμένες καρδιολογικές εξετάσεις στο χώρο σας από τον Dr. Κυριαζόπουλο. ΗΚΓ, Triplex καρδιάς, Holter ρυθμού και πίεσης.'
}

export default function ServicesPage() {
  const services = [
    {
      icon: <Stethoscope className="h-12 w-12" />,
      title: "Καρδιολογικός Έλεγχος",
      subtitle: "Πλήρης κλινική εξέταση από τον Dr. Κυριαζόπουλο",
      description: "Ολοκληρωμένη καρδιολογική εξέταση που περιλαμβάνει:",
      features: [
        "Λήψη λεπτομερούς ιστορικού",
        "Μέτρηση αρτηριακής πίεσης",
        "Ακρόαση καρδιάς και πνευμόνων",
        "Έλεγχος σφυγμών",
        "Αξιολόγηση καρδιαγγειακού κινδύνου",
        "Συστάσεις για περαιτέρω εξετάσεις αν χρειάζεται"
      ],
      duration: "45-60 λεπτά",
      ideal: "Ιδανικό για: Προληπτικό έλεγχο, αξιολόγηση συμπτωμάτων, follow-up"
    },
    {
      icon: <Activity className="h-12 w-12" />,
      title: "Ηλεκτροκαρδιογράφημα (ΗΚΓ)",
      subtitle: "Άμεση διάγνωση καρδιακών προβλημάτων",
      description: "Καταγραφή της ηλεκτρικής δραστηριότητας της καρδιάς για διάγνωση:",
      features: [
        "Αρρυθμιών",
        "Στεφανιαίας νόσου",
        "Εμφράγματος μυοκαρδίου",
        "Διαταραχών αγωγιμότητας",
        "Υπερτροφίας καρδιακών κοιλοτήτων",
        "Ηλεκτρολυτικών διαταραχών"
      ],
      duration: "15-20 λεπτά",
      ideal: "Ιδανικό για: Θωρακικό πόνο, αίσθημα παλμών, δύσπνοια, ζάλη"
    },
    {
      icon: <Timer className="h-12 w-12" />,
      title: "Holter Ρυθμού 24ωρο",
      subtitle: "Συνεχής καταγραφή καρδιακού ρυθμού",
      description: "24ωρη ή 48ωρη συνεχής καταγραφή του καρδιακού ρυθμού για ανίχνευση:",
      features: [
        "Αρρυθμιών που εμφανίζονται περιστασιακά",
        "Σιωπηλής κολπικής μαρμαρυγής",
        "Βραδυκαρδίας ή ταχυκαρδίας",
        "Παύσεων καρδιακού ρυθμού",
        "Αξιολόγηση αποτελεσματικότητας φαρμάκων",
        "Συσχέτιση συμπτωμάτων με αρρυθμίες"
      ],
      duration: "24-48 ώρες καταγραφή",
      ideal: "Ιδανικό για: Αίσθημα παλμών, λιποθυμικά επεισόδια, ζάλη"
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: "Triplex Καρδιάς",
      subtitle: "Υπερηχογραφικός έλεγχος καρδιάς",
      description: "Πλήρης υπερηχογραφική μελέτη της καρδιάς που εξετάζει:",
      features: [
        "Λειτουργία αριστερής κοιλίας",
        "Κατάσταση καρδιακών βαλβίδων",
        "Πάχος καρδιακών τοιχωμάτων",
        "Μέγεθος καρδιακών κοιλοτήτων",
        "Περικαρδιακή συλλογή",
        "Συγγενείς ανωμαλίες"
      ],
      duration: "30-45 λεπτά",
      ideal: "Ιδανικό για: Καρδιακή ανεπάρκεια, βαλβιδοπάθειες, μετά από έμφραγμα"
    },
    {
      icon: <ClipboardCheck className="h-12 w-12" />,
      title: "Holter Πίεσης 24ωρο",
      subtitle: "Ακριβής μέτρηση αρτηριακής πίεσης",
      description: "24ωρη αυτόματη καταγραφή της αρτηριακής πίεσης για:",
      features: [
        "Διάγνωση υπέρτασης λευκής μπλούζας",
        "Αξιολόγηση νυχτερινής πίεσης",
        "Έλεγχο αποτελεσματικότητας θεραπείας",
        "Ανίχνευση κρυφής υπέρτασης",
        "Καταγραφή διακυμάνσεων πίεσης",
        "Συσχέτιση με καθημερινές δραστηριότητες"
      ],
      duration: "24 ώρες καταγραφή",
      ideal: "Ιδανικό για: Διάγνωση υπέρτασης, έλεγχο θεραπείας, διακυμάνσεις πίεσης"
    },
    {
      icon: <MessageCircle className="h-12 w-12" />,
      title: "Καρδιολογική Συμβουλευτική",
      subtitle: "Εξατομικευμένες συμβουλές από τον Dr. Κυριαζόπουλο",
      description: "Προσωπική συμβουλευτική για:",
      features: [
        "Πρόληψη καρδιαγγειακών νοσημάτων",
        "Διαχείριση παραγόντων κινδύνου",
        "Διατροφικές συστάσεις",
        "Πρόγραμμα άσκησης",
        "Διακοπή καπνίσματος",
        "Διαχείριση stress"
      ],
      duration: "30-45 λεπτά",
      ideal: "Ιδανικό για: Πρόληψη, οικογενειακό ιστορικό, αλλαγή τρόπου ζωής"
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#b90f3c] to-[#9a0d32] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">
            Καρδιολογικές Υπηρεσίες - Dr. Κυριαζόπουλος
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Εξειδικευμένες καρδιολογικές εξετάσεις στο χώρο σας
          </p>
          <p className="mt-4 text-lg text-white/80">
            Όλες οι εξετάσεις πραγματοποιούνται από τον Dr. Κυριαζόπουλο προσωπικά
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-[#faedf0] to-[#f9dde3] p-8 flex flex-col items-center justify-center text-center">
                    <div className="bg-white rounded-full p-6 shadow-md mb-4">
                      <div className="text-[#b90f3c]">{service.icon}</div>
                    </div>
                    <h2 className="text-2xl font-medium text-gray-800 mb-2">{service.title}</h2>
                    <p className="text-gray-600 text-sm">{service.subtitle}</p>
                    <div className="mt-4 text-sm text-gray-500">
                      <Clock className="h-4 w-4 inline mr-1" />
                      {service.duration}
                    </div>
                  </div>
                  
                  <div className="md:w-2/3 p-8">
                    <p className="text-lg text-gray-700 mb-6">{service.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#b90f3c] mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-[#faedf0] rounded-lg p-4">
                      <p className="text-sm font-medium text-gray-700">{service.ideal}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-gray-800 text-center mb-12">
            Πώς Πραγματοποιούνται οι Εξετάσεις
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-[#faedf0] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#b90f3c]">1</span>
              </div>
              <h3 className="font-medium mb-2">Επικοινωνία</h3>
              <p className="text-sm text-gray-600">
                Καλέστε μας για να κλείσετε ραντεβού
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#faedf0] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#b90f3c]">2</span>
              </div>
              <h3 className="font-medium mb-2">Επίσκεψη</h3>
              <p className="text-sm text-gray-600">
                Ο Dr. Κυριαζόπουλος έρχεται στο χώρο σας
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#faedf0] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#b90f3c]">3</span>
              </div>
              <h3 className="font-medium mb-2">Εξέταση</h3>
              <p className="text-sm text-gray-600">
                Διενέργεια εξέτασης με φορητό εξοπλισμό
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#faedf0] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#b90f3c]">4</span>
              </div>
              <h3 className="font-medium mb-2">Αποτελέσματα</h3>
              <p className="text-sm text-gray-600">
                Άμεση παράδοση αποτελεσμάτων & συστάσεων
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-serif text-gray-800 mb-6 flex items-center">
                <AlertCircle className="h-8 w-8 text-[#b90f3c] mr-3" />
                Σημαντικές Πληροφορίες
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Σύγχρονος Εξοπλισμός</h3>
                    <p className="text-gray-600">
                      Όλες οι εξετάσεις πραγματοποιούνται με πιστοποιημένο φορητό εξοπλισμό 
                      τελευταίας τεχνολογίας που πληροί όλα τα διεθνή πρότυπα.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Άμεσα Αποτελέσματα</h3>
                    <p className="text-gray-600">
                      Τα αποτελέσματα των εξετάσεων παραδίδονται άμεσα με λεπτομερή ιατρική 
                      έκθεση και εξατομικευμένες συστάσεις.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Ασφάλεια & Υγιεινή</h3>
                    <p className="text-gray-600">
                      Τηρούνται αυστηρά πρωτόκολλα υγιεινής και ασφάλειας. Όλος ο εξοπλισμός 
                      απολυμαίνεται πριν από κάθε εξέταση.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Ευέλικτο Ωράριο</h3>
                    <p className="text-gray-600">
                      Δυνατότητα προγραμματισμού ραντεβού και εκτός κανονικού ωραρίου, 
                      κατόπιν συνεννόησης.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-red-50 rounded-lg border border-red-200">
                <p className="text-red-800 font-medium flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  Για επείγοντα περιστατικά καλέστε το 166
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#b90f3c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-4">
            Κλείστε το Ραντεβού σας Σήμερα
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Επικοινωνήστε μαζί μας για να προγραμματίσουμε την εξέτασή σας
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-[#b90f3c] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Κλείστε Ραντεβού Online
            </Link>
            <a
              href="tel:+302310123456"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-[#b90f3c] transition-colors flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              2310 123456
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