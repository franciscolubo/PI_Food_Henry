import React from 'react'
import { useDispatch } from 'react-redux'
import { DbOrApiActions } from '../actions'
import { CONTAINER } from '../Style/OrdersBy-styled'

export default function DbOrApi({ page }) {
    const dispatch = useDispatch()

    const handleChange = (e) => {
        e.preventDefault()
        page(1)
        dispatch(DbOrApiActions(e.target.value))
    }

    return (
        <CONTAINER>
            <p>Recipe for <span>db</span> or <span>api</span>: </p>
            <select onChange={(e) => handleChange(e)}>
                <option value="">All</option>
                <option value="db">DataBase</option>
                <option value="api">Api</option>
            </select>
        </CONTAINER>
    )
}