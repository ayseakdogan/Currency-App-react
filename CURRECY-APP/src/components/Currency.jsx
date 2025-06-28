import React, { useState } from 'react'
import '../css/currency.css'
import { FiArrowRightCircle } from "react-icons/fi";
import axios from 'axios'

let BASE_URL = 'https://api.freecurrencyapi.com/v1/latest';
let API_KEY = 'fca_live_D53c5baLQKf9UuQeIUCHs8Yr7EbE9d1x52EgpA0w';


function Currency() {
    const [amount, setAmount] = useState(0);
    const [result, setResult] = useState(0);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const exchange = async () => {
        console.log(amount)
        console.log(result)
        console.log(fromCurrency)
        console.log(toCurrency)
        debugger;
        const x = `${BASE_URL}?apikey=${API_KEY}&base_curreny=${fromCurrency}`;
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
        setResult((amount * response.data.data[toCurrency]).toFixed(2))
    }
    return (
        <div className='currency-div'>
            <div style={{ fontWeight: 'bold', backgroundColor: '#85bb65', width: '100%', textAlign: 'center', color: '#fff' }}>
                <h1 >DÖVİZ KURU</h1>
            </div>
            <div className='currency-table'>
                <div>
                    <input type="number" className='amount' value={amount} onChange={(e) => setAmount(e.target.value)} min="0" />
                    <select onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option'>
                        <option>USD</option>
                        <option>EUR</option>
                        <option>TRY</option>
                    </select>
                </div>
                <div>
                    <FiArrowRightCircle style={{ fontSize: '20px', marginRight: '10px' }} />
                </div>
                <div>
                    <select onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option'>
                        <option>TRY</option>
                        <option>USD</option>
                        <option>EUR</option>
                    </select>
                    <input type="number" className='result' value={result} readOnly />
                </div>

            </div>
            <div>
                <button className='exchange-button' onClick={exchange}>ÇEVİR</button>
            </div>

        </div>
    )
}

export default Currency