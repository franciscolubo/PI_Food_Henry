import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function EditRecipe() {
    const dispatch = useDispatch()
    const oldRecipe = useSelector(state => state.detail)
    const [editRecipe, setEditRecipe] = useState({
        title: oldRecipe.title,
        score: oldRecipe.score,
        healthScore: oldRecipe.healthScore,
        image: oldRecipe.image,
        summary: oldRecipe.summary,
        diets: oldRecipe.diets,
        steps: oldRecipe.steps
    })

    const validaciones = () => {
        if (editRecipe.title.length === 0) {
            setEditRecipe({
                ...editRecipe,
                title: oldRecipe.title
            })
        }
    }

    const checkboxs = () => {
        let comprobacion = document.getElementById('check-title').readOnly
        if (comprobacion) {
            document.getElementById('check-title').readOnly = false;
        } else {
            document.getElementById('check-title').readOnly = true;
        }
    }

    const handleChange = (e) => {
        e.preventDefault()
        setEditRecipe({
            ...editRecipe,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        validaciones()
        console.log(editRecipe)
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Title<input type='checkbox' id='chec-title' onChange={checkboxs} /></label>
                    <input placeholder='Title' name='title' id='check-title' onChange={handleChange} readOnly />

                    <button type='submit'>ENVIAAR</button>
                </form>
            </div>
        </div>
    )
}