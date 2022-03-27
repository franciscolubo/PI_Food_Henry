import React from 'react'
import { CONTAINER_PAGINATION, PAGINATION_LIST } from '../Style/Pagination-styled'

export default function Pagination({ recipesCopy, page }) {
    let pages = []
    for (let i = 1; i <= Math.ceil(recipesCopy / 9); i++) {
        pages.push(i) // pages[1,2,3,4,5,6,7,8,9,10,11]
    }


    return (
        <div>
            <nav>
                <CONTAINER_PAGINATION>
                    {
                        pages.map((e, i) => (
                            <PAGINATION_LIST key={i}>
                                <button onClick={() => { page(e) }}>{e}</button>
                            </PAGINATION_LIST>
                        ))
                    }
                </CONTAINER_PAGINATION>
            </nav>
        </div>
    )
}