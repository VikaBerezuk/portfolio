import React, {useEffect, useState} from 'react';
import Title from "../../Title";
import Loader from "react-loaders";
import Collection from "./Collection";
import './index.scss';

const  categories =[
    { "name": "Все" },
    { "name": "Море" },
    { "name": "Горы" },
    { "name": "Архитектура" },
    { "name": "Города" }
];

const Photo = () => {
    const [collections, setCollections] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [categoryId, setCategoryID] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);

    console.log(Math.ceil(collections.length / 3))
    useEffect(() => {
        const category = categoryId ? `category=${categoryId}`: '';

        setIsLoading(true);
        fetch(
            `https://62050517161670001741b335.mockapi.io/test/photo_collections?page=${page}&limit=3&${category}`)
            .then((res) => res.json())
            .then((json) => {
                setCollections(json);
                console.log(json)
            })
            .catch((err) => {
                console.log(err);
                alert('Сould not get information')
            })
            .finally(() => setIsLoading(false));
    }, [categoryId, page])

    return (
        <>
            <Title strArray={['P', 'h', 'o', 't', 'o', ' ', 'c', 'o', 'l', 'l', 'e', 'c', 't', 'i', 'o', 'n']}/>
            <div className='section'>
                <div className="photo">
                    <div className="photo--title">
                        <ul className="photo--tags">
                            {categories.map((obj, i) =>
                                <li onClick={() => setCategoryID(i)} className={categoryId === i ? 'active' : ''}
                                    key={obj.name}>{obj.name}</li>)}
                        </ul>
                        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className="search-input"
                               placeholder="Поиск по названию"/>
                    </div>
                </div>
                {isLoading ?
                    <Loader type="pacman" active/> :
                    <>
                        <div className="content">
                            {collections
                                .filter((obj) => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
                                .map((obj, i) => (
                                    <Collection key={i} name={obj.name} images={obj.photos}/>
                                ))}
                        </div>
                        <ul className="pagination">
                            {
                                [...Array(3)].map((_, i) =>
                                    <li onClick={() => setPage(i + 1)} className={page === (i + 1) ? 'active' : ''}>{i+1}</li>)
                            }
                        </ul>
                    </>
                }
            </div>
        </>
    );
};

export default Photo;