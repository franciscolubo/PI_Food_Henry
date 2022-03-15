import React from 'react'

export default function Pagination({ recipesCopy, page }) {
    let pages = []
    for (let i = 1; i <= Math.ceil(recipesCopy / 9); i++) {
        pages.push(i) // pages[1,2,3,4,5,6,7,8,9,10,11]
    }


    return (
        <div className='pagination'>
            <nav className='pagination-h'>
                <ul className='pagination-ul'>
                    {
                        pages.map((e, i) => (
                            <li className='pagination-li' key={i}>
                                <button className='pagination-button' onClick={() => { page(e) }}>{e}</button>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}