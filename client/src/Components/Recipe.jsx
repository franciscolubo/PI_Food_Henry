import React from 'react'

export default function Recipe({ title, score, healthScore, image, diets }) {
    return (
        <div>
            <img alt='recipe image' src={image} />
            <div>
                <h2>{title}</h2>
                <p>Score: {score}</p>
                <p>Health Score: {healthScore}</p>
                <p>Diets: {diets}</p>
            </div>
        </div>
    )
}