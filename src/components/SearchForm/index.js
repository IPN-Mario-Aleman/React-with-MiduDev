import React from 'react'
import { useLocation } from 'wouter';
import css from "./SearchForm.module.css"
import useForm from './hook';

const RATINGS = ['g', 'pg', 'pg-13', 'r']

/*const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.UPDATE_KEYWORD:
            return {
                ...state,
                keyword: action.payload,
                times: state.times + 1
            }
        case ACTIONS.UPDATE_RATING:
            return {
                ...state,
                rating: action.payload
            }
        default:
            return state
    }
}*/

function SearchForm({initialKeyword = '', initialRating = 'g' }){
    const {keyword, rating, times, updateKeyword, updateRaiting} = useForm({
        initialKeyword,
        initialRating
    })

    const [_, pushLocation] = useLocation();


    const handleChange = (evt) => {
        updateKeyword(evt.target.value)
    }

    const handleSubmit = (evt) =>{
        evt.preventDefault()
        // Navegar a otra ruta
        pushLocation(`/search/${keyword}/${rating}`)
    }

    const handleChangeRating = (evt) =>{
        updateRaiting(evt.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit} className={css["c-search"]}>
                <button>Buscar</button>
                <input
                    className={css["c-search-input"]}
                    placeholder="Search a gif here..."
                    onChange={handleChange}
                    type="text"
                    value={keyword}
                />
                <select className={css["c-search-list"]} value={rating} onChange={handleChangeRating}>
                    <option disabled>
                        Rating:
                    </option>
                    {RATINGS.map((rating) => (
                        <option key={rating}>{rating}</option>
                    ))}
                </select>
                <small>{times}</small>
            </form>
        </> 
    )
}

export default React.memo(SearchForm)
