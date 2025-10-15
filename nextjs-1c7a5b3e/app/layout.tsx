import Link from 'next/link';

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="hu">
      <body>
        <header style={{padding: '1rem', backgroundColor: '#004080', color: 'white'}}>
          <nav style={{display: 'flex', gap: '1rem'}}>
            <Link href="/" style={{color: 'white', textDecoration: 'none'}}>Főoldal</Link>
            <Link href="/vehicles" style={{color: 'white', textDecoration: 'none'}}>Járművek</Link>
            <Link href="/booking" style={{color: 'white', textDecoration: 'none'}}>Foglalás</Link>
          </nav>
        </header>

        <main style={{padding: '2rem', maxWidth: '800px', margin: 'auto'}}>
          {children}
        </main>

        <footer style={{textAlign: 'center', padding: '1rem', borderTop: '1px solid #ccc', marginTop: '2rem'}}>
          &copy; 2025 Autóbérlés
        </footer>
      </body>
    </html>
  );
}