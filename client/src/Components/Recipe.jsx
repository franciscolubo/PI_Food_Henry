import React from 'react'
import { Link } from 'react-router-dom'

export default function Recipe({ title, image, diets, score, id }) {
    console.log(image.length)
    console.log(image)

    return (

        <div className='card'>
            {
                (image.length === 0)
                    ? <img className='image' alt='img' src='https://www.verte.tv/thumb/28831/800-null-92/interrogacion.jpeg' />
                    : <img className='image' alt='img' src={image} />
            }

            <div className='card-text'>
                <h2 className='card-title'>{title}</h2>
                <p><span className='resaltar'>Score</span>: {score}</p>
                <p className='resaltar'>Diets:</p>
                {
                    diets.map((e, i) => { return <p className='card-diets' key={i + 1}>{e}</p> })
                }
            </div>
            <Link to={`/recipes/${id}`} className='link'><button className='button'>More details</button></Link>
        </div>

    )
}