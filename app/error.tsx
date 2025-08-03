'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Κάτι πήγε στραβά!
        </h2>
        <p className="text-gray-600 mb-6">
          Παρουσιάστηκε ένα σφάλμα κατά την φόρτωση της σελίδας.
        </p>
        <button
          onClick={() => reset()}
          className="bg-[#b90f3c] text-white px-6 py-2 rounded hover:bg-[#9a0d32] transition-colors"
        >
          Δοκιμάστε ξανά
        </button>
      </div>
    </div>
  )
}