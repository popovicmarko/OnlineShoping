import React from "react";
import "./Ordering.css";
import FormCart from "../../components/Form/FormCart/FormCart";

export default function Ordering() {
    return (
        <div>
            <h1>Ordering</h1>
            <div className="order-container">
                <FormCart />
            </div>
        </div>

    );
}