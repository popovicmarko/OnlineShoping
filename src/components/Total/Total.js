import React from "react";
import { useContext } from "react";
import "./Total.css";
import { AppContext } from "../../context/AppContext";

export default function Total() {
    const { calculateTotalPrice } = useContext(AppContext);


    return(
    <div className="total">
        <p>Ukupno: {calculateTotalPrice()}EUR</p>
        <button type="submit">Poruci</button>

    </div>
    );
}