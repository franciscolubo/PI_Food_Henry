import React, { useEffect, useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'
import { recipeDetail, deleteRecipe, deleteDetail } from '../actions'
import { Link } from 'react-router-dom'
import { Container_Details } from '../Style/RecipeDetail-styled'

export default function RecipeDetail() {
    const dispatch = useDispatch()
    const { idRecipe } = useParams()
    const recipe = useSelector(state => state.detail)
    console.log(recipe)
    useEffect(() => {
        dispatch(recipeDetail(idRecipe))
        return () => { dispatch(deleteDetail()) }
    }, [dispatch])

    const editRecipe = (e) => {
        e.preventDefault()
        alert('Solo puedes editar recetas creadas por ti')
    }

    const deleteRec = () => {
        if (recipe.hasOwnProperty('isDb')) {
            dispatch(deleteRecipe(idRecipe))
        } else alert('No puedes eliminar cualquier receta')
    }

    return (
        <Container_Details>
            {
                (recipe.length === 0)
                    ? <h3>Estamos cargando todo</h3>
                    :
                    <div>
                        <img alt='img' src={recipe.image} />
                        <div>
                            <h2>{recipe.title}</h2>
                            <h4>Score</h4><p>{recipe.score}</p>
                            <h4>Health Score</h4><p>{recipe.healthScore}</p>
                            <h4>Description</h4><p>{recipe.summary}</p>
                            <div>
                                <h4>Diets</h4>
                                {
                                    recipe.diets?.map((e, i) => {
                                        return <p key={i + 1}>{e}</p>
                                    })
                                }
                            </div>
                            <div>
                                <h4>Steps</h4>
                                {
                                    (recipe.steps?.length === 0)
                                        ? <p>No hay pasos para esta receta</p>
                                        : recipe.steps?.map((e, i) => {
                                            return <p key={i}><span>Paso {i + 1}:</span> {e}</p>
                                        })
                                }
                            </div>
                        </div>
                    </div>
            }
            {
                (recipe.hasOwnProperty('isDb'))
                    ? <Link to={`/recipes/editRecipe/${idRecipe}`}><button>Edit recipe</button></Link>
                    : <button onClick={editRecipe}>Edit recipe</button>
            }
            <Link to='/home'>
                <button onClick={deleteRec}>Delete recipe</button>
            </Link>

            <Link to='/home'>
                <button>Back to home</button>
            </Link>
        </Container_Details>
    )
}