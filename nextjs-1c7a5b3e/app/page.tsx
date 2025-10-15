import Link from 'next/link';
import Layout from '../app/layout';

export default function Home() {
  return (
    <Layout>
      <main>
        <h1>Autóbérlés</h1>
        <nav>
          <Link href="/vehicles">Járművek</Link> |{" "}
          <Link href="/booking">Foglalás</Link>
        </nav>
        <p>
          Üdvözlünk az autóbérlési szolgáltatásunk oldalán! Fedezd fel ajánlatainkat és foglalj egyszerűen autót online.
        </p>
      </main>
    </Layout>
  );
}