import React, {useEffect, useRef, useState} from 'react';
import './index.scss';
import Block from "./Block";
import Loader from "react-loaders";
import Title from "../../Title";

const CurrencyConvertor = () => {
    const ratesRef = useRef({});

    const [isLoading, setIsLoading] = useState(true);
    const [fromCurrency, setFromCurrency] = useState('UAH');
    const [toCurrency, setToCurrency] = useState('USD');
    const [fromPrice, setFromPrice] = useState(0);
    const [toPrice, setToPrice] = useState(1);

    useEffect(() => {
        fetch('https://cdn.cur.su/api/latest.json')
            .then((res) => res.json())
            .then((json) => {
                ratesRef.current = json.rates;
                onChangeToPrice(1);
            })

            .catch((err) => {
                console.log(err);
                alert('Сould not get information')
            });
    },[]);

    const onChangeFromPrice = (value) => {
        const price = value / ratesRef.current[fromCurrency];
        const result = price * ratesRef.current[toCurrency];
        setFromPrice(value)
        setToPrice(result.toFixed(3))
    }

    const onChangeToPrice = (value) => {
        const result = (ratesRef.current[fromCurrency] / ratesRef.current[toCurrency]) * value;
        setFromPrice(result.toFixed(3));
        setToPrice(value);
    }

    useEffect(() => {
        onChangeFromPrice(fromPrice);
    }, [fromCurrency]);

    useEffect(() => {
        onChangeToPrice(toPrice);
    },[toCurrency]);

    useEffect(() => {
        setTimeout(() =>{
            setIsLoading(false)
        }, 1500)
    }, []);

    return (
        <>
            {isLoading ? '' : (
                <>
                    <Title strArray={['C', 'u', 'r', 'r', 'e', 'n', 'c', 'y', ' ', 'c', 'o', 'n', 'v', 'e', 'r', 't', 'o', 'r']}/>
                    <div className="section">
                        <div className='convector'>
                            <Block value={fromPrice} currency={fromCurrency} onChangeCurrency={setFromCurrency}
                                   onChangeValue={onChangeFromPrice}/>
                            <Block value={toPrice} currency={toCurrency} onChangeCurrency={setToCurrency}
                                   onChangeValue={onChangeToPrice}/>
                        </div>
                    </div>
                </>
            )}
            <Loader type="pacman" active/>
        </>
    );
};

export default CurrencyConvertor;