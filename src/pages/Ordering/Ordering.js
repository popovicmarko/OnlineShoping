import React from "react";
import "./Ordering.css";
import FormCart from "../../components/Form/FormCart/FormCart";
import FormAdress from "../../components/Form/FormAdress/FormAdress";

export default function Ordering() {
    return (
        <div className="cointener">
            <h1>Ordering</h1>
            <div className="order-container">
                <FormCart />
                <FormAdress />
            </div>
        </div>

    );
}