import { useEffect, useState } from "react";
import { useGifs } from "./useGifs";
import getSingleGif from "services/getSingleGif";

export default function useSingleGif({ id }){
    const {gifs} = useGifs()
    const gifFromCache = gifs.find(singleGif => singleGif.id === id)

    const [gif, setGif] = useState(gifFromCache)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setError] = useState(false)


    useEffect(function(){
        if(!gif){
            //cargar el servicio
            setIsLoading(true)
            // llamar al servicio si no tenemos gif
            getSingleGif({id})
                .then(gif => {
                    setGif(gif)
                    setIsLoading(false)
                    setError(false)
                }).catch(err => {
                    setIsLoading(false)
                    setError(true)
                })
        }
    }, [gif, id])

    return {gif, isLoading, isError}
}