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
    console.log(recipe)
    useEffect(() => {
        dispatch(recipeDetail(idRecipe))
    }, [dispatch])

    const editRecipe = (e) => {
        e.preventDefault()
        alert('Solo puedes editar recetas creadas por ti')
    }
    return (
        <div className='contenedor-detail'>
            {
                (recipe.length === 0)
                    ? <p>Estamos cargando todo</p>
                    :
                    <div>
                        <img className='detail-img' alt='img' src={recipe.image} />
                        <div className='detail-cont-info'>
                            <h2>{recipe.title}</h2>
                            <p><span className='resaltar-detail'>Score: </span>{recipe.score}</p>
                            <p><span className='resaltar-detail'>Health score: </span>{recipe.healthScore}</p>
                            <p><span className='resaltar-detail'>Description: </span>{recipe.summary}</p>
                            <div>
                                <h4>Diets</h4>
                                {
                                    recipe.diets?.map((e, i) => {
                                        return <p className='detail-diets' key={i + 1}>{e}</p>
                                    })
                                }
                            </div>
                            <div>
                                {
                                    (recipe.steps?.length === 0)
                                        ? <p>No hay pasos para esta receta</p>
                                        : recipe.steps?.map((e, i) => {
                                            return <p className='detail-steps' key={i}><span>Paso {i + 1}:</span> {e}</p>
                                        })
                                }
                            </div>
                        </div>
                    </div>
            }
            {
                (recipe.hasOwnProperty('isDb'))
                    ? <Link to={'/recipes/editRecipe'}><button>Edit recipe</button></Link>
                    : <button onClick={editRecipe}>Edit recipe</button>
            }
            <Link to='/home'>
                <button className='button-home'>Back to home</button>
            </Link>
        </div>
    )
}