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
        <div className="Adresscontainer">

            <form  className='formAdress' onSubmit={handleSubmit}>
                 <h2>Dodacnje Adrese</h2>

                <label className='label'>
                    Ime:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label className='label'>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label className='label'>
                    Adresa:
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </label>
                <label className='label'>
                    Poštanski kod:
                    <input
                        type="text"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                    />
                </label>
                <button type="submit">Dodaj Adresu</button>
            </form>
        </div>
    );
};

export default OrderForm;