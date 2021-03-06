import React from 'redux'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { addRecipeDb } from '../actions'
import { BUTTON_HOME, CONTAINER_CREATE, CONTAINER_CREAT_AND_PREV, CONTAINER_PREVIEW, FORM_CREATE, PREVIEW } from '../Style/CreateRecipe-styled'



export default function CreateRecipe() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
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
        let existRecipe = recipe.diets.filter(d => d === e.target.value)
        console.log(e.target.value)
        console.log(existRecipe)
        if (existRecipe.length === 0) {
            (e.target.value === 'Diets types')
                ? e.target.value = ""
                : setRecipe({
                    ...recipe,
                    diets: [...recipe.diets, e.target.value]
                })
        } else alert('Ya se agrego esta dieta')
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
        navigate('/home')
    }

    return (
        <div>
            <CONTAINER_CREAT_AND_PREV>
                <CONTAINER_CREATE>
                    <FORM_CREATE onSubmit={(e) => handleSubmit(e)}>
                        <h2 >Create recipe</h2>
                        <div>
                            <label>Title: <input placeholder='Title of recipe' type='text' name='title' onChange={handleChange} value={recipe.title} required></input>
                            </label>
                            <label>Score: <input placeholder='0 - 100' min='0' max='100' type='range' name='score' onChange={handleChange} value={recipe.score} required></input></label>
                            <label>Health Score: <input placeholder='0 - 100' min='0' max='100' type='range' name='healthScore' onChange={handleChange} value={recipe.healthScore} required></input></label>
                            <label>Image: <input placeholder='Image URL' type='url' name='image' onChange={handleChange} value={recipe.image} required></input></label>
                            <label>Summary: <input placeholder='Summary' type='textarea' name='summary' onChange={handleChange} value={recipe.summary} required></input></label>
                            <label>Diets:
                                <select onChange={handleSelect}>
                                    <option>Diets types</option>
                                    {
                                        diets?.map(e => {
                                            return <option key={e.id} value={e.name} >{e.name}</option>
                                        })
                                    }
                                </select>
                            </label>
                            <button type='submit'>Create Recipe</button>
                        </div>

                    </FORM_CREATE>

                    <FORM_CREATE onSubmit={addStep}>
                        <div>
                            <label>Steps: <input placeholder='Add step' type='text'></input></label>
                            <button type='submit'>Add step</button>
                        </div>
                    </FORM_CREATE>

                </CONTAINER_CREATE>
                <CONTAINER_PREVIEW>
                    <PREVIEW>
                        <h2>Preview</h2>
                        <div>
                            {
                                (recipe.image === "")
                                    ? <p>??Aqui se mostrara su imagen!</p>
                                    : <img src={recipe.image} alt='img' />
                            }
                            <h4>Title: </h4><p>{recipe.title}</p>
                            <h4>Score: </h4><p>{recipe.score}</p>
                            <h4>Health Score: </h4><p>{recipe.healthScore}</p>
                            <h4>Summary: </h4><p>{recipe.summary}</p>
                        </div>
                        <div>
                            <h4>Diets</h4>
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
                        </div>
                        <div>
                            <h4>Steps</h4>
                            {
                                (recipe.steps.length !== 0)
                                    ? recipe.steps.map((e, i) => {

                                        return <p key={i}>
                                            <button onClick={() => handleDelete({ e }, "steps")}>X</button>
                                            <span>{i + 1}.</span> {e}
                                        </p>
                                    })
                                    : <p>No se agrego ningun paso a??n</p>
                            }
                        </div>
                    </PREVIEW>
                </CONTAINER_PREVIEW>


            </CONTAINER_CREAT_AND_PREV>
            <BUTTON_HOME>
                <Link to={'/home'}>
                    <button type='submit'>Go back</button>
                </Link>
            </BUTTON_HOME>
        </div>
    )
}