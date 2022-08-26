import React, {useEffect, useState} from 'react';
import Title from '../../Title';
import Loader from 'react-loaders';
import Collection from './Collection';
import './index.scss';

const  categories =[
    { 'name': 'Все' },
    { 'name': 'Море' },
    { 'name': 'Горы' },
    { 'name': 'Архитектура' },
    { 'name': 'Города' }
];

const Photo = () => {
    const [collections, setCollections] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [categoryId, setCategoryID] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const category = categoryId ? `category=${categoryId}`: '';

        setIsLoading(true);
        fetch(
            `https://62050517161670001741b335.mockapi.io/test/photo_collections?page=${page}&limit=3&${category}`)
            .then((res) => res.json())
            .then((json) => {
                setCollections(json);
            })
            .catch((err) => {
                console.log(err);
                alert('Сould not get information')
            })
            .finally(() => setIsLoading(false));
    }, [categoryId, page]);

    const handlerInput = (e) => {
        setPage(1);
        setCategoryID(0);
        setSearchValue(e.target.value);
    }

    return (
        <section className='photo'>
            <Title strArray={['C', 'o', 'l', 'l', 'e', 'c', 't', 'i', 'o', 'n']}/>
            <div className='photo-title'>
                <ul>
                    {categories.map((obj, i) =>
                        <li onClick={() => {
                            setPage( 1)
                            setCategoryID(i)
                        }} className={categoryId === i ? 'active' : ''}
                            key={obj.name}>{obj.name}</li>)}
                </ul>
                <input value={searchValue} onChange={(e) => handlerInput(e)} className='search-input'
                       placeholder='Поиск по названию'/>
            </div>
            {isLoading ?
                <Loader type='pacman' active
                /> :
                <>
                    <div className='photo-content'>
                        {collections
                            .filter((obj) => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
                            .map((obj, i) => (
                                <Collection key={i} name={obj.name} images={obj.photos}/>
                            ))}
                    </div>
                    <ul className='photo-pagination'>
                        {
                            categoryId === 0 ?
                                [...Array(3)].map((_, i) =>
                                <li key={i} onClick={() => setPage(i + 1)}
                                    className={page === (i + 1) ? 'active' : ''}>{i + 1}</li>)
                                :  <li className='active'>1</li>
                        }
                    </ul>
                </>
            }
        </section>
    );
};

export default Photo;