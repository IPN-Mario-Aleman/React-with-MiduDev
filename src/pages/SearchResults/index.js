import React, { useCallback, useRef, useEffect} from "react";
import Spinner from "components/Spinner";
import ListOfGifs from "components/ListOfFGifs";
import { useGifs } from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";
import debounce from 'just-debounce-it'
import useTitle from "hooks/useSeo";
import { Helmet } from "react-helmet";

export default function SearchResults ({params}) {
    const { keyword } = params
    const { loading, gifs, setPage} = useGifs({keyword})
    
    const externalRef = useRef()
    const {isNearScreen} = useNearScreen({
        externalRef: loading ? null : externalRef,
        once: false
    })
    const title = gifs ? `${gifs.length} resultados de ${keyword}` : ''
    useTitle({title})
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debounceHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1), 200
    ), [setPage])
    
    useEffect(function () {
        if (isNearScreen) debounceHandleNextPage()
    }, [debounceHandleNextPage, isNearScreen])
    

    return <>
        {loading
            ? <Spinner />
            : <>
                <Helmet>{title}
                    <meta name="description" content={title}></meta>
                    <meta name="rating" content="General"/>
                </Helmet>
                <h3 className="App-title">{decodeURI(keyword)}</h3>
                <ListOfGifs gifs={gifs} />
                <div id="visor" ref={externalRef}></div>
            </>
        }        
    </>    
}