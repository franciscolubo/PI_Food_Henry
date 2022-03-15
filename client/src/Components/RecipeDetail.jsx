import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { recipeDetail } from '../actions'
import { Link } from 'react-router-dom'

export default function RecipeDetail() {
    const dispatch = useDispatch()
    const { idRecipe } = useParams()
    const recipe = useSelector(state => state.detail)

    useEffect(() => {
        dispatch(recipeDetail(idRecipe))
    }, [dispatch])

    return (
        <div>
            {
                (recipe.length === 0)
                    ? <p>Estamos cargando todo</p>
                    :
                    <div>
                        <img alt='img' src={recipe.image} />
                        <div>
                            <h2>{recipe.title}</h2>
                            <p><span>Score: </span>{recipe.score}</p>
                            <p><span>Health score: </span>{recipe.healthScore}</p>
                            <p><span>Description: </span>{recipe.summary}</p>
                            <div>
                                {
                                    recipe.diets?.map((e, i) => {
                                        return <p key={i + 1}>{e}</p>
                                    })
                                }
                            </div>
                            <div>
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
            <Link to='/home'>
                <button>Back to home</button>
            </Link>
        </div>
    )
}