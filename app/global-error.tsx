'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="el">
      <body>
        <div style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          backgroundColor: '#f9fafb'
        }}>
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Κάτι πήγε πολύ στραβά!
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Παρουσιάστηκε ένα κρίσιμο σφάλμα.
            </p>
            <button
              onClick={() => reset()}
              style={{
                backgroundColor: '#b90f3c',
                color: 'white',
                padding: '0.5rem 1.5rem',
                borderRadius: '0.25rem',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Επαναφόρτωση σελίδας
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}