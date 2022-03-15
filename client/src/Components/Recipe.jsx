import React from 'react'
import { Link } from 'react-router-dom'

export default function Recipe({ title, image, diets, id }) {


    return (

        <div className='card'>

            <img className='image' alt='img' src={image} />

            <div className='card-text'>
                <h2 className='card-title'>{title}</h2>
                {
                    diets.map((e, i) => { return <p className='card-diets' key={i + 1}>{e}</p> })
                }
            </div>
            <Link to={`/recipes/${id}`} className='link'><button className='button'>More details</button></Link>
        </div>

    )
}