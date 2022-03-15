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

    const validation = () => {
        let title, score, healthScore, steps, summary
        if (recipe.title.length !== 0) {
            title = true
        } else alert('Ingresa un titulo')
        if (recipe.score >= 0 && recipe.score <= 100) {
            score = true
        } else alert('Debe ingresar un score como numero, ademas estar entre 0 6 100')
        if (recipe.healthScore >= 0 && recipe.score <= 100) {
            healthScore = true
        } else alert('Debe ingresar un health score como numero, ademas estar entre 0 6 100')
        if (recipe.steps.length !== 0) {
            steps = true
        } else alert('Debe ingresar por lo menos un paso')
        if (recipe.summary.length !== 0) {
            summary = true
        } else alert('Debe ingresar un summary')
        if (title && score && healthScore && steps && summary)
            return true
    }

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
        if (e.target[0].value.length !== 0) { // SI NO TENGO NADA, NO AGREGO NADA
            setRecipe({
                ...recipe,
                steps: [...recipe.steps, e.target[0].value]
            })
        }
        e.target[0].value = "" // La utilizo para borrar el contendio de mi input cada vez que agrego un paso
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validation()) {
            dispatch(addRecipeDb(recipe))
            console.log(recipe)
        }
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
        <div className='contenedor'>
            <div className='recipe'>
                <form onSubmit={(e) => handleSubmit(e)} className='create-recipe'>
                    <h2 className='recipe-title'>Create recipe</h2>
                    <div className='contenedor-colectores'>
                        <label className='nombre-colector'>Title: <input placeholder='Title of recipe' type='text' name='title' onChange={handleChange} value={recipe.title} required></input></label>
                        <label className='nombre-colector'>Score: <input placeholder='0 - 100' min='0' max='100' type='text' name='score' onChange={handleChange} value={recipe.score} required></input></label>
                        <label className='nombre-colector'>Health Score: <input placeholder='0 - 100' min='0' max='100' type='text' name='healthScore' onChange={handleChange} value={recipe.healthScore} required></input></label>
                        <label className='nombre-colector'>Image: <input placeholder='Image URL' type='url' name='image' onChange={handleChange} value={recipe.image} required></input></label>
                        <label className='nombre-colector'>Summary: <input placeholder='Summary' type='textarea' name='summary' onChange={handleChange} value={recipe.summary} required></input></label>
                    </div>
                    <select className='recipe-diets-selector' onChange={handleSelect}>
                        <option>Diets types</option>
                        {
                            diets?.map(e => {
                                return <option key={e.id} value={e.name} >{e.name}</option>
                            })
                        }
                    </select>

                    <button className='create-recipe-button' type='submit'>Create Recipe</button>
                </form>

                <form onSubmit={addStep} className='create-recipe-steps'>
                    <label>Steps: <input className='recipe-steps-selector' placeholder='Add step' type='text'></input></label>
                    <button className='steps-button' type='submit'>Add step</button>
                </form>

            </div>
            <div className='preview'>

                <h2 className='preview-title'>Preview</h2>
                {
                    (recipe.image === "")
                        ? <p>¡Aqui se mostrara su imagen!</p>
                        : <img className='preview-image' src={recipe.image} alt='img' />
                }
                <span className='preview-mostrador'>Title: </span><p>{recipe.title}</p>
                <span className='preview-mostrador'>Score: </span><p>{recipe.score}</p>
                <span className='preview-mostrador'>Health Score: </span><p>{recipe.healthScore}</p>
                <span className='preview-mostrador'>Summary: </span><p>{recipe.summary}</p>
                <div className='preview-diets'>
                    <ul>
                        <li>
                            {
                                (recipe.diets.length !== 0)
                                    ? recipe.diets.map((e, i) => {

                                        return <p key={i}>
                                            <button onClick={() => handleDelete({ e }, "diets")}>X</button>
                                            {e}
                                        </p>
                                    })
                                    : <p>Aun no se agrego ningun tipo de dieta</p>
                            }
                        </li>
                    </ul>
                </div>
                <div className='preview-steps'>
                    <ul>
                        <li>
                            {
                                (recipe.steps.length !== 0)
                                    ? recipe.steps.map((e, i) => {

                                        return <p key={i}>
                                            <button onClick={() => handleDelete({ e }, "steps")}>X</button>
                                            {i + 1}. {e}
                                        </p>
                                    })
                                    : <p>No se agrego ningun paso aun</p>
                            }
                        </li>
                    </ul>
                </div>
            </div>



            <Link to={'/home'}>
                <button type='submit'>Go back</button>
            </Link>
        </div>
    )
}