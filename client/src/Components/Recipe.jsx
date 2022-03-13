import React from 'react'
import { Link } from 'react-router-dom'

export default function Recipe({ title, image, diets, id }) {
    let bool = false
    console.log(diets)
    bool = diets.map(e => {
        if (e.hasOwnProperty('name')) {
            return true;
        }
    })
    console.log(bool[0])

    return (
        <>
            <Link to={`/recipes/${id}`}>
                <div>

                    <img alt='img' src={image} />

                    <div>
                        <h2>{title}</h2>
                        {

                            (bool[0])
                                ? diets.map((e) => {
                                    return <p key={e.id}>{e.name}</p>
                                })
                                : diets.map((e, i) => { return <p key={i}>{e}</p> })
                        }
                    </div>
                </div>
            </Link>
        </>
    )
}