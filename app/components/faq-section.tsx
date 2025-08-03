"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

interface FAQItemProps {
  number: string
  question: string
  answer: string
  defaultOpen?: boolean
}

export function FAQItem({ number, question, answer, defaultOpen = false }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
      <div className="w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full cursor-pointer p-6 text-left"
        >
          <div className="flex items-center gap-4">
            <span className="text-[#b90f3c] font-bold">{number}.</span>
            <h3 className="text-xl font-medium">{question}</h3>
          </div>
          <div className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
            <ChevronDown className="h-6 w-6 text-[#b90f3c]" />
          </div>
        </button>
        {isOpen && (
          <div className="px-6 pb-6 pt-0">
            <p className="text-gray-600">{answer}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function FAQSection() {
  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-r from-[#faedf0]/50 to-white">
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-gray-800 mb-3">Οι Πιο Συχνές Απορίες Των Ασθενών Μας</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Εδώ θα βρείτε απαντήσεις σε ερωτήσεις που μας κάνουν καθημερινά οι ασθενείς μας σχετικά με την καρδιολογική φροντίδα στο σπίτι.
            </p>
          </div>

          <div className="space-y-4">
            <FAQItem
              number="1"
              question="Ποιες καρδιολογικές εξετάσεις μπορούν να γίνουν στο σπίτι;"
              answer="Προσφέρουμε πλήρες πακέτο κατ’ οίκον εξετάσεων όπως Ηλεκτροκαρδιογράφημα (ΗΚΓ), Triplex καρδιάς, Holter ρυθμού & πίεσης, καθώς και κλινική εξέταση από εξειδικευμένο καρδιολόγο. Όλες οι εξετάσεις πραγματοποιούνται με φορητό εξοπλισμό τελευταίας τεχνολογίας."
              defaultOpen={true}
            />

            <FAQItem
              number="2"
              question="Πότε πρέπει να καλέσω καρδιολόγο στο σπίτι;"
              answer="Εάν εμφανίζετε πόνο στο στήθος, ταχυπαλμίες, δύσπνοια, ζάλη, ή έχετε ιστορικό καρδιολογικών προβλημάτων, η επίσκεψη κατ’ οίκον είναι ο ιδανικός τρόπος για άμεση και ασφαλή αξιολόγηση, ειδικά αν δυσκολεύεστε να μετακινηθείτε."
            />

            <FAQItem
              number="3"
              question="Είναι οι καρδιαγγειακές παθήσεις κληρονομικές;"
              answer="Ναι, αρκετές παθήσεις όπως αρτηριακή υπέρταση, χοληστερίνη, στεφανιαία νόσος και ορισμένες αρρυθμίες έχουν κληρονομικό υπόβαθρο. Ο τακτικός προληπτικός έλεγχος είναι σημαντικός, ειδικά αν υπάρχει οικογενειακό ιστορικό."
            />

            <FAQItem
              number="4"
              question="Κάθε πότε πρέπει να κάνω καρδιολογικό έλεγχο;"
              answer="Ανάλογα με την ηλικία και το ιστορικό σας. Γενικά, προτείνεται κάθε 1-2 χρόνια μετά τα 40, ενώ αν έχετε παράγοντες κινδύνου (υπέρταση, διαβήτη, κάπνισμα, οικογενειακό ιστορικό), μπορεί να απαιτείται πιο συχνός έλεγχος. Η ομάδα μας παρέχει εξατομικευμένες συστάσεις."
            />
          </div>
        </div>
      </div>
    </section>
  )
}
