import React from 'react'
import { useDispatch } from 'react-redux'
import { DbOrApiActions } from '../actions'

export default function DbOrApi({ page }) {
    const dispatch = useDispatch()

    const handleChange = (e) => {
        e.preventDefault()
        page(1)
        dispatch(DbOrApiActions(e.target.value))
    }

    return (
        <div className='order-db-api'>
            <p className='p'>Recipe for <span className='resaltar'>db</span> or <span className='resaltar'>api</span>: </p>
            <select className='order-select' onChange={(e) => handleChange(e)}>
                <option value="">All</option>
                <option value="db">DataBase</option>
                <option value="api">Api</option>
            </select>
        </div>
    )
}