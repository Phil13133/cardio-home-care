import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <h2 className="text-6xl font-bold text-[#b90f3c] mb-4">404</h2>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Η σελίδα δεν βρέθηκε
        </h3>
        <p className="text-gray-600 mb-8">
          Λυπούμαστε, η σελίδα που αναζητάτε δεν υπάρχει.
        </p>
        <Link
          href="/"
          className="bg-[#b90f3c] text-white px-6 py-3 rounded hover:bg-[#9a0d32] transition-colors inline-block"
        >
          Επιστροφή στην Αρχική
        </Link>
      </div>
    </div>
  )
}