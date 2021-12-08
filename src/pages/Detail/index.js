import React, {useContext} from "react";
import StaticContext from '../../context/StaticContext'
import GifsContext from '../../context/GifContext';
import Gif from '../../components/Gif'

export default function Detail({params}){
    /*const staticConfig = useContext(StaticContext)
    console.log(staticConfig)*/
    
    const {gifs} = useContext(GifsContext)
    //console.log({gifs}) 

    const gif = gifs.find(singleGif => 
        singleGif.id === params.id
    )
    console.log(gif)
    //console.log(params.id)
    return <Gif {...gif} />
}