import React, { useState } from 'react';
import './FormAdress.css';

const OrderForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [postalCode, setPostalCode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ovde možete izvršiti željenu logiku za online poručivanje, kao što je slanje podataka na server

        // Resetovanje polja nakon poručivanja
        setName('');
        setEmail('');
        setAddress('');
        setPostalCode('');
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label>
                    Ime:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    Adresa:
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </label>
                <label>
                    Poštanski kod:
                    <input
                        type="text"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                    />
                </label>
                <button type="submit">Poruči</button>
            </form>
        </div>
    );
};

export default OrderForm;