import React, { useState } from "react";
import "./FormCart.css";

function DodavanjeKreditneKartice() {
  const [imeNaKartici, setImeNaKartici] = useState("");
  const [brojKartice, setBrojKartice] = useState("");
  const [datumIsticanja, setDatumIsticanja] = useState("");
  const [sigurnosniKod, setSigurnosniKod] = useState("");
  const [greske, setGreske] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const novaGreska = {};

    if (imeNaKartici.trim() === "") {
      novaGreska.imeNaKartici = "Molimo unesite ime na kartici.";
    }

    if (brojKartice.trim() === "") {
      novaGreska.brojKartice = "Molimo unesite broj kartice.";
    }

    if (datumIsticanja.trim() === "") {
      novaGreska.datumIsticanja = "Molimo unesite datum ističanja.";
    }

    if (sigurnosniKod.trim() === "") {
      novaGreska.sigurnosniKod = "Molimo unesite sigurnosni kod.";
    }

    if (Object.keys(novaGreska).length === 0) {
      // Nema grešaka, možete obraditi podatke ili poslati na server
      console.log("Podaci kartice:", {
        imeNaKartici,
        brojKartice,
        datumIsticanja,
        sigurnosniKod,
      });

      // Resetovanje forme nakon slanja
      setImeNaKartici("");
      setBrojKartice("");
      setDatumIsticanja("");
      setSigurnosniKod("");
      setGreske({});
    } else {
      // Postoje greške, postavite ih u stanje greske
      setGreske(novaGreska);
    }
  };

  return (
    <div className="container">
      <h2>Dodavanje kreditne kartice</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="ime">Ime na kartici:</label>
        <input
          type="text"
          id="ime"
          value={imeNaKartici}
          onChange={(e) => setImeNaKartici(e.target.value)}
          required
        />
        {greske.imeNaKartici && <p>{greske.imeNaKartici}</p>}
        <br />
        <br />

        <label htmlFor="broj_kartice">Broj kartice:</label>
        <input
          type="text"
          id="broj_kartice"
          value={brojKartice}
          onChange={(e) => setBrojKartice(e.target.value)}
          required
        />
        {greske.brojKartice && <p>{greske.brojKartice}</p>}
        <br />
        <br />

        <label htmlFor="datum_isticanja">Datum ističanja:</label>
        <input
          type="text"
          id="datum_isticanja"
          value={datumIsticanja}
          onChange={(e) => setDatumIsticanja(e.target.value)}
          placeholder="MM/GG"
          required
        />
        {greske.datumIsticanja && <p>{greske.datumIsticanja}</p>}
        <br />
        <br />

        <label htmlFor="sigurnosni_kod">Sigurnosni kod:</label>
        <input
          type="text"
          id="sigurnosni_kod"
          value={sigurnosniKod}
          onChange={(e) => setSigurnosniKod(e.target.value)}
          required
        />
        {greske.sigurnosniKod && <p>{greske.sigurnosniKod}</p>}
        <br />
        <br />

        <input type="submit" value="Dodaj karticu" />
      </form>
    </div>
  );
}

export default DodavanjeKreditneKartice;