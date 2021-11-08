import React, {useEffect, useState} from "react";
import Gif from "./Gif"
import getGifs from '../services/getGifs';

export default function ListOfGifs ({params}){    
    const {keyword}=params
    const [gifs, setGifs] = useState({Loading: false, results: []})

    useEffect(function (){
        setGifs(actualGif => ({Loading: true, results: actualGif}))
        getGifs({keyword}).then(gifs => {
            setGifs({Loading: false, results: gifs})
        })
    }, [keyword]) //eslint-disable-line

    if(gifs.Loading) return <span>Cargando :smile: </span>

    return <div className="card">
        {
            gifs.results.map(({id,title,url}) => 
            <Gif 
                id={id}
                key={id}
                title={title} 
                url={url} 
            />
        )
        }
    </div> 
}