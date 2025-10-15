import Link from 'next/link';
import Layout from '../layout';

export default function Vehicles() {
  return (
    <html>
      <body>
        <Layout>
          <h1>Elérhető járművek</h1>
          <nav>
            <Link href="/">Főoldal</Link> |{" "}
            <Link href="/booking">Foglalás</Link>
          </nav>
          <ul>
            <li>Opel Astra - 2021 - manuális</li>
            <li>Toyota Corolla - 2022 - automata</li>
            <li>VW Passat - 2020 - manuális</li>
          </ul>
        </Layout>
      </body>
    </html>
  );
}