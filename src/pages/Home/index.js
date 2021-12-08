import React, { useState} from "react";
import {Link, useLocation} from "wouter";
import ListOfGifs from "../../components/ListOfFGifs";
import { useGifs } from "../../hooks/useGifs";

const POPULAR_GIFS = ["México","Chile","Perú","Canada"]

export default function Home() {
    const [keyword, setKeyword] = useState('');
    const [path, pushLocation] = useLocation();
    const { loading, gifs} = useGifs()
    
    const handleSubmit = evt =>{
        evt.preventDefault()
        // Navegar a otra ruta
        pushLocation(`/search/${keyword}`)
    }
    const handleChange = evt =>{
        setKeyword(evt.target.value)
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input placeholder="Search a gif here ..." onChange={handleChange} type='text' value={keyword}></input>
                <button>Buscar</button>
            </form>
            <h3>Última busqueda</h3>
            <ListOfGifs gifs={gifs}></ListOfGifs>
            <h3 className="App-title">Los Gifs mas populares</h3>
            <ul>
                {POPULAR_GIFS.map((popularGif)=>(
                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}>Gif de {popularGif}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}