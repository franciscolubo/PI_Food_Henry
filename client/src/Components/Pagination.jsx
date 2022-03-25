import React from 'react'
import { Containter_Pagination, Pagination_List } from '../Style/Pagination-styled'

export default function Pagination({ recipesCopy, page }) {
    let pages = []
    for (let i = 1; i <= Math.ceil(recipesCopy / 9); i++) {
        pages.push(i) // pages[1,2,3,4,5,6,7,8,9,10,11]
    }


    return (
        <div>
            <nav>
                <Containter_Pagination>
                    {
                        pages.map((e, i) => (
                            <Pagination_List key={i}>
                                <button onClick={() => { page(e) }}>{e}</button>
                            </Pagination_List>
                        ))
                    }
                </Containter_Pagination>
            </nav>
        </div>
    )
}