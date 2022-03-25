import React from 'react'
import { Container_Recipes } from '../Style/Recipes-styled'
import Recipe from './Recipe'


export default function Recipes({ recipesCopy, currentPage }) {
    const lastRecipe = currentPage * 9 // 4 * 9 = 36
    const firstRecipe = lastRecipe - 9 // 36 - 9 = 27
    const pagesRecipes = recipesCopy.slice(firstRecipe, lastRecipe) // 27, 36


    return (
        <Container_Recipes>
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
        </Container_Recipes>
    )
}