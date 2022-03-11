import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getRecipeName, getRecipes } from '../actions'
import { Link } from 'react-router-dom'

export default function NavBar({ page }) {
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")

    const handleChange = (e) => {
        e.preventDefault();
        setTitle(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault();
        page(1)
        dispatch(getRecipeName(title))
    }

    const handleClickReset = (e) => {
        e.preventDefault();
        page(1)
        dispatch(getRecipes())
    }

    return (
        <div>
            <nav>
                <input type='text' placeholder='Search recipe by name' onChange={(e) => handleChange(e)}></input>
                <button type='submit' onClick={(e) => handleClick(e)}>Search</button>

                <button type='reset' onClick={(e) => handleClickReset(e)}>Restart</button>

                <Link to={'/recipes'}>
                    <button>Create recipe</button>
                </Link>
            </nav>
        </div >
    )
}