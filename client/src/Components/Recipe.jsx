import React from 'react'
import { Link } from 'react-router-dom'

export default function Recipe({ title, image, diets, id }) {
    return (
        <>
            <Link to={`/recipes/${id}`}>
                <div>

                    <img alt='img' src={image} />

                    <div>
                        <h2>{title}</h2>
                        <div>Diets: {diets.map((e, i) => { return <p key={i}>{e}</p> })}</div>
                    </div>
                </div>
            </Link>
        </>
    )
}