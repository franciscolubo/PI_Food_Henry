import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { editDataBase } from '../actions'
import { Link } from 'react-router-dom'

export default function EditRecipe() {
    const dispatch = useDispatch()
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

    const checkboxs = (e) => {
        let id = e.target.id.substring(5)
        let comprobacion = document.getElementById(id).readOnly
        if (comprobacion) {
            document.getElementById(id).readOnly = false;
        } else {
            document.getElementById(id).readOnly = true;
        }
    }

    const handleDelete = (e, option) => {
        if (option === 'diet') {
            setEditRecipe({
                ...editRecipe,
                diets: editRecipe.diets.filter(diet => diet !== e.e)
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
    }

    return (
        <div className='edit-recipe-contenedor'>
            <h1>Formulario de edicion receta</h1>
            <div className='contenedor-form'>
                <form onSubmit={handleSubmit} className='edit-form'>
                    <div className='div-inputs'>
                        <label>Title<input type='checkbox' id='chec-title' onClick={checkboxs} /></label>
                        <input className='input-normal' placeholder='Title' name='title' id='title' type='text' onChange={handleChange} readOnly />
                    </div>
                    <div className='div-inputs'>
                        <label>Score<input type='checkbox' id='chec-score' onClick={checkboxs} /></label>
                        <input className='input-normal' placeholder='Score' name='score' id='score' type='text' onChange={handleChange} readOnly />
                    </div>
                    <div className='div-inputs'>
                        <label>Health score<input type='checkbox' id='chec-healthScore' onClick={checkboxs} /></label>
                        <input className='input-normal' placeholder='Health score' name='healthScore' id='healthScore' type='text' onChange={handleChange} readOnly />
                    </div>
                    <div className='div-inputs'>
                        <label>Image<input type='checkbox' id='chec-image' onClick={checkboxs} /></label>
                        <input className='input-normal' placeholder='Image' name='image' id='image' type='url' onChange={handleChange} readOnly />
                    </div>
                    <div className='div-inputs'>
                        <label>Summary<input type='checkbox' id='chec-summary' onClick={checkboxs} /></label>
                        <input className='input-normal' placeholder='Summary' name='summary' id='summary' type='text-area' onChange={handleChange} readOnly />
                    </div>

                    <div className='div-diets'>
                        <select onChange={addDiets} className='select-diets'>
                            <option value=''>Select diet</option>
                            {
                                dietsDb.map(e => {
                                    return <option key={e.id} name='diets' value={e.name}>{e.name}</option>
                                })
                            }
                        </select>
                    </div>

                    <button type='submit' className='button-form'>ENVIAR</button>
                </form>

                <form onSubmit={addSteps} className='form-steps'>
                    <input className='input-steps' placeholder='Steps' type='text'></input>
                    <button className='button-steps' type='submit'>Add steps</button>
                </form>
            </div>
            <div className='diets-steps'>
                {
                    (editRecipe.diets.length === 0)
                        ? <h2>Aqui iran sus dietas seleccionadas</h2>
                        : <h2>Estas son sus dietas seleccionadas</h2>
                }
                <ul>
                    {
                        editRecipe.diets?.map((e, i) => {
                            return <li key={i}>
                                <button className='button-delete' onClick={() => handleDelete({ e }, 'diet')}>X</button>
                                {e}</li>
                        })
                    }
                </ul>
            </div>

            <div className='diets-steps'>
                {
                    (editRecipe.steps.length === 0)
                        ? <h2>Aqui iran sus pasos creados</h2>
                        : <h2>Estos son sus pasos creados</h2>
                }
                <ul>
                    {
                        editRecipe.steps?.map((e, i) => {
                            return <li key={i}>
                                <button className='button-delete' onClick={() => handleDelete({ e }, 'steps')}>X</button>
                                {e}</li>
                        })
                    }
                </ul>
            </div>
            <Link to='/home'><button className='button-home'>Go home</button></Link>
        </div>
    )
}