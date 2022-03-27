import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getRecipeName, getRecipes } from '../actions'
import { Link } from 'react-router-dom'
import { BUTTONS, BUTTONS_DIV, CONTAINER, CONTAINER_SEARCHBAR } from '../Style/NavBar-styled'

export default function NavBar({ page }) {
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")

    const validation = () => {
        if (title.length !== 0) {
            if (isNaN(title)) {
                return true
            } else alert('No existe ninguna receta con titulo numerico')
        } else alert('Debe ingresar algun nombre')
    }

    const handleChange = (e) => {
        e.preventDefault();
        setTitle(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault();
        page(1)
        if (validation()) {
            dispatch(getRecipeName(title))
        }
    }

    const handleClickReset = (e) => {
        e.preventDefault();
        page(1)
        dispatch(getRecipes())
    }

    return (
        <CONTAINER>
            <CONTAINER_SEARCHBAR>
                <input type='text' placeholder='Search recipe by name' onChange={(e) => handleChange(e)}></input>
                <button type='submit' onClick={(e) => handleClick(e)}>
                    <img src='/search.svg' alt='search' />
                </button>
            </CONTAINER_SEARCHBAR>
            <BUTTONS_DIV>

                <BUTTONS type='reset' onClick={(e) => handleClickReset(e)}><img src='/reset.svg' alt='reset' /></BUTTONS>

                <Link to={'/recipes'}>
                    <BUTTONS><img src='/createfood.svg' alt='createrecipe' /></BUTTONS>
                </Link>
            </BUTTONS_DIV>
        </CONTAINER>
    )
}