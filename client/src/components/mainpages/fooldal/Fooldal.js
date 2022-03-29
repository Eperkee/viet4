import React from "react";
import { Link } from "react-router-dom";
// import { DataProvider } from "./GlobalState";
// import Header from "./components/headers/Header";
// import MainPages from "./components/mainpages/Pages";

function Fooldal() {
  return (
    <>
      <h1>Írjunk ide valamit!</h1>
      {/* <Link to="/kezdo">Kezdőlap</Link> */}
      <div className="cim">
        <h2>Legyél te is önkéntes!</h2>
      </div>
      <h3>Kezdőlap Kutyáink Örökbefogadás Elérhetőségeink</h3>
      <img src="Ellipse.svg" alt="minta"></img>
      <div className="onkent">
        <h3>
          Gyere el te is és tedd szebbé egy menhelyi kutya életét. Fogadj örökbe
          vagy csatlakozz hozzánk!
        </h3>
      </div>
      <img src="phone-call.png" alt="hivas"></img>
      <p>06306485393</p>
      <img src="email.png" alt="email"></img>
      <p>furgelabak@gmail.com</p>
    </>
  );
}

export default Fooldal;
