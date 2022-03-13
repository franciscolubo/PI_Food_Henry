import React from 'redux'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { addRecipeDb } from '../actions'

export default function CreateRecipe() {
    const dispatch = useDispatch()
    const diets = useSelector(state => state.diets)
    const [recipe, setRecipe] = useState({
        title: "",
        score: "",
        healthScore: "",
        summary: "",
        image: "",
        diets: [],
        steps: []
    })

    const handleChange = (e) => {
        e.preventDefault()
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value
        })
    }

    const handleSelect = (e) => {
        e.preventDefault();
        (e.target.value === 'Diets types')
            ? e.target.value = ""
            : setRecipe({
                ...recipe,
                diets: [...recipe.diets, e.target.value]
            })
    }

    const handleDelete = (element, option) => {
        if (option === 'diets') {
            setRecipe({
                ...recipe,
                diets: recipe.diets.filter(e => e !== element.e)
            })
        } else {
            setRecipe({
                ...recipe,
                steps: recipe.steps.filter(e => e !== element.e)
            })
        }
    }

    const addStep = (e) => {
        e.preventDefault()
        console.log(e)
        if (e.target[0].value.length !== 0) {
            setRecipe({
                ...recipe,
                steps: [...recipe.steps, e.target[0].value]
            })
        }
        e.target[0].value = "" // La utilizo para borrar el contendio de mi input cada vez que agrego un paso
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({ ...recipe })
        dispatch(addRecipeDb(recipe))
        setRecipe({
            title: "",
            score: "",
            healthScore: "",
            summary: "",
            image: "",
            diets: [],
            steps: []
        })
    }

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h2>Create recipe</h2>
                <label>Title: <input placeholder='Title of recipe' type='text' name='title' onChange={handleChange} value={recipe.title} required></input></label>
                <label>Score: <input placeholder='Score' min='0' max='100' type='text' name='score' onChange={handleChange} value={recipe.score} required></input></label>
                <label>Health Score: <input placeholder='Health score' min='0' max='100' type='text' name='healthScore' onChange={handleChange} value={recipe.healthScore} required></input></label>
                <label>Image: <input placeholder='Image URL' type='url' name='image' onChange={handleChange} value={recipe.image} required></input></label>
                <label>Summary: <input placeholder='Summary' type='textarea' name='summary' onChange={handleChange} value={recipe.summary} required></input></label>
                <select onChange={handleSelect}>
                    <option>Diets types</option>
                    {
                        diets?.map(e => {
                            return <option key={e.id} value={e.name} >{e.name}</option>
                        })
                    }
                </select>

                <button type='submit'>Create Recipe</button>
            </form>

            <form onSubmit={addStep}>
                <label>Steps: <input placeholder='Add step' type='text'></input></label>
                <button type='submit'>Add step</button>
            </form>

            <div>

                <h2>Preview</h2>
                {
                    (recipe.image === "")
                        ? <p>¡Aqui se mostrara su imagen!</p>
                        : <img src={recipe.image} alt='img' />
                }
                <span>Title: </span><p>{recipe.title}</p>
                <span>Score: </span><p>{recipe.score}</p>
                <span>Health Score: </span><p>{recipe.healthScore}</p>
                <span>Summary: </span><p>{recipe.summary}</p>
                <div>
                    <ul>
                        <li>
                            {
                                (recipe.diets.length !== 0)
                                    ? recipe.diets.map((e, i) =>
                                        <p key={i}>
                                            <button onClick={() => handleDelete({ e }, "diets")}>X</button>
                                            {e}
                                        </p>
                                    )
                                    : <p>Aun no se agrego ningun tipo de dieta</p>
                            }
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            {
                                (recipe.steps.length !== 0)
                                    ? recipe.steps.map((e, i) =>
                                        <p key={i}>
                                            <button onClick={() => handleDelete({ e }, "steps")}>X</button>
                                            {e}
                                        </p>
                                    )
                                    : <p>No se agrego ningun paso aun</p>
                            }
                        </li>
                    </ul>
                </div>
            </div>







            <Link to={'/home'}>
                <button type='submit'>Go back</button>
            </Link>
        </>
    )
}