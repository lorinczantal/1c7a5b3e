"use client";
import { useState } from "react";
import Link from 'next/link';
import Layout from '../layout';

export default function Booking() {
  const [name, setName] = useState("");
  const [car, setCar] = useState("");
  const [date, setDate] = useState("");

  return (
    <>
    <Layout>
      <h1>Autóbérlési foglalás</h1>
      <nav>
        <Link href="/">Főoldal</Link> |{" "}
        <Link href="/vehicles">Járművek</Link>
      </nav>
      <form>
        <label>
          Név:
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Autó típusa:
          <select
            value={car}
            onChange={e => setCar(e.target.value)}
          >
            <option value="">Válassz autót</option>
            <option value="Opel Astra">Opel Astra</option>
            <option value="Toyota Corolla">Toyota Corolla</option>
            <option value="VW Passat">VW Passat</option>
          </select>
        </label>
        <br />
        <label>
          Dátum:
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Foglalás</button>
      </form>
    </Layout>
     </>
  );
}