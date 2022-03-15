import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getRecipeName, getRecipes } from '../actions'
import { Link } from 'react-router-dom'

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
        <div className='navbar-p'>
            <nav className='navbar'>
                <input className='navbar-input' type='text' placeholder='Search recipe by name' onChange={(e) => handleChange(e)}></input>
                <button className='navbar-button' type='submit' onClick={(e) => handleClick(e)}>Search</button>

                <button className='navbar-button' type='reset' onClick={(e) => handleClickReset(e)}>Restart</button>

                <Link to={'/recipes'}>
                    <button className='navbar-button'>Create recipe</button>
                </Link>
            </nav>
        </div >
    )
}