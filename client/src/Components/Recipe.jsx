import React from 'react'
import { Link } from 'react-router-dom'

export default function Recipe({ title, image, diets, score, id }) {
    console.log(image.length)
    console.log(image)

    return (

        <div>
            {
                (image.length === 0)
                    ? <img alt='img' src='https://www.verte.tv/thumb/28831/800-null-92/interrogacion.jpeg' />
                    : <img alt='img' src={image} />
            }

            <div>
                <h2>{title}</h2>
                <p><span>Score</span>: {score}</p>
                <p>Diets:</p>
                {
                    diets.map((e, i) => { return <p key={i + 1}>{e}</p> })
                }
            </div>
            <Link to={`/recipes/${id}`}><button>More details</button></Link>
        </div>

    )
}