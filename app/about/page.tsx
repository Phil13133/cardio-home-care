import { Metadata } from "next"
import Link from "next/link"
import { 
  GraduationCap, 
  Award, 
  Briefcase, 
  Heart, 
  Users, 
  Clock,
  UserCircle,
  Quote
} from "lucide-react"

export const metadata: Metadata = {
  title: 'Σχετικά με τον Dr. Κυριαζόπουλο | Dr. Κυριαζόπουλος Καρδιολόγος',
  description: 'Γνωρίστε τον Dr. Εμμανουήλ Κυριαζόπουλο, εξειδικευμένο καρδιολόγο με εμπειρία στις κατ\'οίκον καρδιολογικές εξετάσεις.'
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#b90f3c] to-[#9a0d32] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif text-center mb-4">
            Σχετικά με τον Dr. Κυριαζόπουλο
          </h1>
          <p className="text-xl text-center text-white/90 max-w-3xl mx-auto">
            Εξειδικευμένος Καρδιολόγος με πάθος για την παροχή υψηλής ποιότητας 
            καρδιολογικής φροντίδας στο χώρο σας
          </p>
        </div>
      </section>

      {/* Professional Profile Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-200 rounded-lg w-full h-96 flex items-center justify-center">
                <UserCircle className="h-48 w-48 text-gray-400" />
                <span className="sr-only">Φωτογραφία του Dr. Κυριαζόπουλου</span>
              </div>
              <div className="mt-6 bg-[#faedf0] rounded-lg p-6">
                <h3 className="font-medium text-lg mb-2 text-gray-800">Μέλος:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Ελληνική Καρδιολογική Εταιρεία</li>
                  <li>• Ευρωπαϊκή Καρδιολογική Εταιρεία (ESC)</li>
                  <li>• Ιατρικός Σύλλογος Θεσσαλονίκης</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-serif text-gray-800 mb-6">
                Dr. Εμμανουήλ Κυριαζόπουλος
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Ο Dr. Εμμανουήλ Κυριαζόπουλος είναι εξειδικευμένος καρδιολόγος με πάνω από 20 χρόνια 
                εμπειρίας στη διάγνωση και θεραπεία καρδιολογικών παθήσεων. Εξειδικεύεται στην παροχή 
                υψηλής ποιότητας καρδιολογικής φροντίδας κατ' οίκον, προσφέροντας εξατομικευμένες 
                υπηρεσίες σε ασθενείς που αντιμετωπίζουν δυσκολίες μετακίνησης.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Με ιδιαίτερη έμφαση στην φροντίδα ηλικιωμένων και ατόμων με περιορισμένη κινητικότητα, 
                ο Dr. Κυριαζόπουλος συνδυάζει την κλινική του εμπειρία με σύγχρονο φορητό εξοπλισμό 
                για να παρέχει ολοκληρωμένη καρδιολογική εξέταση στην άνεση του σπιτιού σας.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-[#faedf0] rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-[#b90f3c]">20+</div>
                  <div className="text-gray-600">Χρόνια Εμπειρίας</div>
                </div>
                <div className="bg-[#faedf0] rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-[#b90f3c]">10,000+</div>
                  <div className="text-gray-600">Ασθενείς</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Qualifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <GraduationCap className="h-10 w-10 text-[#b90f3c] mr-3" />
            <h2 className="text-3xl font-serif text-gray-800">Εκπαίδευση & Προσόντα</h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#b90f3c]">
              <h3 className="font-medium text-xl mb-2">Πτυχίο Ιατρικής</h3>
              <p className="text-gray-600">Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης</p>
              <p className="text-gray-500">Αποφοίτηση με άριστα</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#b90f3c]">
              <h3 className="font-medium text-xl mb-2">Ειδικότητα Καρδιολογίας</h3>
              <p className="text-gray-600">Γενικό Νοσοκομείο Θεσσαλονίκης "Γ. Παπανικολάου"</p>
              <p className="text-gray-500">5ετής εξειδίκευση στην Καρδιολογία</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#b90f3c]">
              <h3 className="font-medium text-xl mb-2">Μετεκπαίδευση</h3>
              <p className="text-gray-600">Υπερηχοκαρδιογραφία & Holter Monitoring</p>
              <p className="text-gray-500">Πιστοποιημένος στη χρήση σύγχρονου διαγνωστικού εξοπλισμού</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#b90f3c]">
              <h3 className="font-medium text-xl mb-2">Συνεχιζόμενη Εκπαίδευση</h3>
              <p className="text-gray-600">Τακτική συμμετοχή σε διεθνή συνέδρια καρδιολογίας</p>
              <p className="text-gray-500">Ενημέρωση για τις τελευταίες εξελίξεις στην καρδιολογία</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <Briefcase className="h-10 w-10 text-[#b90f3c] mr-3" />
            <h2 className="text-3xl font-serif text-gray-800">Επαγγελματική Εμπειρία</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#b90f3c]/30"></div>
              
              <div className="space-y-8">
                <div className="relative flex items-start">
                  <div className="absolute left-8 w-4 h-4 bg-[#b90f3c] rounded-full -translate-x-1/2"></div>
                  <div className="ml-16">
                    <h3 className="font-medium text-xl mb-1">Ιδιώτης Καρδιολόγος</h3>
                    <p className="text-[#b90f3c] mb-2">2010 - Σήμερα</p>
                    <p className="text-gray-600">
                      Παροχή εξειδικευμένων καρδιολογικών υπηρεσιών κατ' οίκον. 
                      Εξυπηρέτηση ασθενών με περιορισμένη κινητικότητα και ηλικιωμένων.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex items-start">
                  <div className="absolute left-8 w-4 h-4 bg-[#b90f3c] rounded-full -translate-x-1/2"></div>
                  <div className="ml-16">
                    <h3 className="font-medium text-xl mb-1">Επιμελητής Καρδιολογίας</h3>
                    <p className="text-[#b90f3c] mb-2">2005 - 2010</p>
                    <p className="text-gray-600">
                      Νοσοκομείο "Άγιος Παύλος", Θεσσαλονίκη. 
                      Υπεύθυνος καρδιολογικού τμήματος και μονάδας Holter.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex items-start">
                  <div className="absolute left-8 w-4 h-4 bg-[#b90f3c] rounded-full -translate-x-1/2"></div>
                  <div className="ml-16">
                    <h3 className="font-medium text-xl mb-1">Ειδικευόμενος Καρδιολόγος</h3>
                    <p className="text-[#b90f3c] mb-2">2000 - 2005</p>
                    <p className="text-gray-600">
                      Γενικό Νοσοκομείο Θεσσαλονίκης "Γ. Παπανικολάου". 
                      Εκπαίδευση σε όλο το φάσμα της καρδιολογίας.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <Heart className="h-10 w-10 text-[#b90f3c] mr-3" />
            <h2 className="text-3xl font-serif text-gray-800">Φιλοσοφία</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <Quote className="h-12 w-12 text-[#b90f3c]/20 mb-4" />
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                "Πιστεύω ότι κάθε ασθενής αξίζει εξατομικευμένη φροντίδα υψηλής ποιότητας, 
                ανεξάρτητα από την ικανότητά του να μετακινηθεί. Η απόφασή μου να προσφέρω 
                καρδιολογικές υπηρεσίες κατ' οίκον πηγάζει από την πεποίθηση ότι η υγεία 
                πρέπει να είναι προσβάσιμη σε όλους."
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                "Η δυνατότητα να εξετάζω τους ασθενείς μου στο οικείο περιβάλλον του σπιτιού τους 
                μου επιτρέπει να παρέχω πιο ολοκληρωμένη και ανθρώπινη φροντίδα. Συχνά, οι ασθενείς 
                αισθάνονται πιο άνετα και χαλαροί στο σπίτι τους, γεγονός που συμβάλλει σε πιο 
                ακριβείς μετρήσεις και καλύτερη επικοινωνία."
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                "Στόχος μου είναι να συνδυάσω την κλινική μου εμπειρία με τη σύγχρονη τεχνολογία 
                για να προσφέρω την καλύτερη δυνατή καρδιολογική φροντίδα, όπου κι αν βρίσκεστε."
              </p>
              <div className="mt-6 text-right">
                <p className="font-medium text-[#b90f3c]">- Dr. Εμμανουήλ Κυριαζόπουλος</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Home Visits Matter */}
      <section className="py-16 bg-[#faedf0]/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-gray-800 text-center mb-12">
            Γιατί οι Κατ' Οίκον Επισκέψεις Κάνουν τη Διαφορά
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-md">
                <Users className="h-10 w-10 text-[#b90f3c]" />
              </div>
              <h3 className="font-medium text-xl mb-2">Εξυπηρέτηση Ευάλωτων Ομάδων</h3>
              <p className="text-gray-600">
                Ειδική μέριμνα για ηλικιωμένους, άτομα με κινητικά προβλήματα και 
                χρόνιους ασθενείς που δυσκολεύονται να επισκεφθούν ιατρείο.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-md">
                <Heart className="h-10 w-10 text-[#b90f3c]" />
              </div>
              <h3 className="font-medium text-xl mb-2">Ολοκληρωμένη Φροντίδα</h3>
              <p className="text-gray-600">
                Πλήρης καρδιολογικός έλεγχος με όλον τον απαραίτητο εξοπλισμό 
                στην άνεση του σπιτιού σας.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-md">
                <Clock className="h-10 w-10 text-[#b90f3c]" />
              </div>
              <h3 className="font-medium text-xl mb-2">Εξοικονόμηση Χρόνου</h3>
              <p className="text-gray-600">
                Αποφυγή αναμονής και ταλαιπωρίας. Προγραμματισμένα ραντεβού 
                στην ώρα τους.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#b90f3c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-4">
            Έτοιμοι να Φροντίσουμε την Καρδιά σας;
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Επικοινωνήστε μαζί μας για να κλείσετε το ραντεβού σας
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#b90f3c] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Κλείστε Ραντεβού
          </Link>
          <p className="mt-4 text-white/80">
            Για επείγοντα: <span className="font-medium">6945 XXX XXX</span>
          </p>
        </div>
      </section>
    </main>
  )
}