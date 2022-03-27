import React from 'react'
import { CONTAINER_RECIPES } from '../Style/Recipes-styled'
import Recipe from './Recipe'


export default function Recipes({ recipesCopy, currentPage }) {
    const lastRecipe = currentPage * 9 // 4 * 9 = 36
    const firstRecipe = lastRecipe - 9 // 36 - 9 = 27
    const pagesRecipes = recipesCopy.slice(firstRecipe, lastRecipe) // 27, 36


    return (
        <CONTAINER_RECIPES>
            {
                pagesRecipes.map(e => {
                    return <Recipe
                        title={e.title}
                        image={e.image}
                        diets={e.diets}
                        id={e.id}
                        score={e.score}
                        key={e.id}
                    />
                })
            }
        </CONTAINER_RECIPES>
    )
}