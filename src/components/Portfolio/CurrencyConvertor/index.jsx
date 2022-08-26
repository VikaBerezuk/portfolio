import React, { useEffect, useRef, useState} from 'react';
import './index.scss';
import Block from "./Block";
import Loader from "react-loaders";
import Title from "../../Title";

//import {useGetCurrencyQuery} from "../../../store/currencyApi";
// const {data = [], isLoading } = useGetCurrencyQuery();
/* useEffect(()=> {
     const node =  ratesRef.current;
     node.current = data?.rates;
     onChangeToPrice(1);
 }, [data]);*/

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
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        onChangeFromPrice(fromPrice);
        // eslint-disable-next-line
    }, [fromCurrency]);

    useEffect(() => {
        onChangeToPrice(toPrice);
        // eslint-disable-next-line
    },[toCurrency]);

    useEffect(() => {
        setTimeout(() =>{
            setIsLoading(false)
        }, 1500)
    }, []);


    const onChangeFromPrice = (value) => {
        const price = value / ratesRef.current[fromCurrency];
        const result = price * ratesRef.current[toCurrency];
        setFromPrice(value)
        setToPrice(parseFloat(result.toFixed(3)));
    }

    const onChangeToPrice = (value) => {
        const result = (ratesRef.current[fromCurrency] / ratesRef.current[toCurrency]) * value;
        setFromPrice(parseFloat(result.toFixed(3)));
        setToPrice(value);
    }

    return (
        <>
            {isLoading ? '' : (
                <div className='currency'>
                    <Title strArray={['C', 'u', 'r', 'r', 'e', 'n', 'c', 'y', ' ', 'c', 'o', 'n', 'v', 'e', 'r', 't', 'o', 'r']}/>
                    <div className="section">
                        <div className='convector'>
                            <Block value={fromPrice} currency={fromCurrency} onChangeCurrency={setFromCurrency}
                                   onChangeValue={onChangeFromPrice}/>
                            <Block value={toPrice} currency={toCurrency} onChangeCurrency={setToCurrency}
                                   onChangeValue={onChangeToPrice}/>
                        </div>
                    </div>
                </div>
            )}
            <Loader type="pacman" active/>
        </>
    );
};

export default CurrencyConvertor;