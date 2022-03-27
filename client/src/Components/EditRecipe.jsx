import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { editDataBase } from '../actions'
import { Link, useNavigate } from 'react-router-dom'
import { BUTTON, CONTAINER, EDIT_CONTAINER } from '../Style/EditRecipe-styled'

export default function EditRecipe() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const dietsDb = useSelector(state => state.diets)
    const oldRecipe = useSelector(state => state.detail)
    const { id } = useParams()
    const [editRecipe, setEditRecipe] = useState({
        title: oldRecipe.title,
        score: oldRecipe.score,
        healthScore: oldRecipe.healthScore,
        image: oldRecipe.image,
        summary: oldRecipe.summary,
        diets: oldRecipe.diets,
        steps: oldRecipe.steps,
    })

    const validaciones = () => {
        if (editRecipe.title.length === 0) {
            setEditRecipe({
                ...editRecipe,
                title: oldRecipe.title
            })
        }
        if (editRecipe.score.length === 0) {
            setEditRecipe({
                ...editRecipe,
                score: oldRecipe.score
            })
        }
        if (editRecipe.healthScore.length === 0) {
            setEditRecipe({
                ...editRecipe,
                healthScore: oldRecipe.healthScore
            })
        }
        if (editRecipe.image.length === 0) {
            setEditRecipe({
                ...editRecipe,
                image: oldRecipe.image
            })
        }
        if (editRecipe.summary.length === 0) {
            setEditRecipe({
                ...editRecipe,
                summary: oldRecipe.summary
            })
        }

        return true
    }

    const handleDelete = (e, option) => {
        if (option === 'diet') {
            setEditRecipe({
                ...editRecipe,
                diets: editRecipe.diets.filter(diet => diet !== e.e)
            })
        }

        if (option === 'steps') {
            setEditRecipe({
                ...editRecipe,
                steps: editRecipe.steps.filter(steps => steps !== e.e)
            })
        }
    }

    const handleChange = (e) => {
        e.preventDefault()
        setEditRecipe({
            ...editRecipe,
            [e.target.name]: e.target.value
        })
    }

    const addDiets = (e) => {
        e.preventDefault()
        let existDiet = editRecipe.diets.filter(diet => diet === e.target.value)
        if (existDiet.length === 0) {
            setEditRecipe({
                ...editRecipe,
                diets: [...editRecipe.diets, e.target.value]
            })
        }
    }

    const addSteps = (e) => {
        e.preventDefault()
        setEditRecipe({
            ...editRecipe,
            steps: [...editRecipe.steps, e.target[0].value]
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validaciones()) {
            console.log('hola')
            dispatch(editDataBase(editRecipe, id))
        }
        navigate('/home')
    }

    return (
        <div>
            <CONTAINER>
                <h1>Formulario de edicion receta</h1>
                <EDIT_CONTAINER>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Title</label>
                            <input placeholder='Title' name='title' type='text' onChange={handleChange} />
                        </div>
                        <div>
                            <label>Score</label>
                            <input name='score' type='range' onChange={handleChange} />
                        </div>
                        <div>
                            <label>Health score</label>
                            <input name='healthScore' id='healthScore' type='range' onChange={handleChange} />
                        </div>
                        <div>
                            <label>Image</label>
                            <input placeholder='Image' name='image' type='url' onChange={handleChange} />
                        </div>
                        <div>
                            <label>Summary</label>
                            <input placeholder='Summary' name='summary' id='summary' type='text-area' onChange={handleChange} />
                        </div>

                        <div>
                            <label>Diets</label>
                            <select onChange={addDiets}>
                                <option value=''>Select diet</option>
                                {
                                    dietsDb.map(e => {
                                        return <option key={e.id} name='diets' value={e.name}>{e.name}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div>
                            <div>
                                <button type='submit'>ENVIAR</button>
                            </div>
                        </div>
                    </form>

                    <form onSubmit={addSteps}>
                        <input placeholder='Steps' type='text'></input>
                        <button type='submit'>Add steps</button>
                    </form>
                </EDIT_CONTAINER>
                <div>
                    {
                        (editRecipe.diets.length === 0)
                            ? <h2>Aqui iran sus dietas seleccionadas</h2>
                            : <h2>Estas son sus dietas seleccionadas</h2>
                    }
                    <ul>
                        {
                            editRecipe.diets?.map((e, i) => {
                                return <li key={i}>
                                    <button onClick={() => handleDelete({ e }, 'diet')}>X</button>
                                    {e}</li>
                            })
                        }
                    </ul>
                </div>

                <div>
                    {
                        (editRecipe.steps.length === 0)
                            ? <h2>Aqui iran sus pasos creados</h2>
                            : <h2>Estos son sus pasos creados</h2>
                    }
                    <ul>
                        {
                            editRecipe.steps?.map((e, i) => {
                                return <li key={i}>
                                    <button onClick={() => handleDelete({ e }, 'steps')}>X</button>
                                    {e}</li>
                            })
                        }
                    </ul>
                </div>
            </CONTAINER>
            <BUTTON>
                <Link to='/home'><button>Go home</button></Link>
            </BUTTON>
        </div>
    )
}