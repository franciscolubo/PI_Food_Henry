import React from 'react'
import { useDispatch } from 'react-redux'
import { orderByScore } from '../actions'

export default function OrderByScore({ ordered }) {
    const dispatch = useDispatch()

    const handleChange = (e) => {
        e.preventDefault()
        ordered(e.target.value)
        dispatch(orderByScore(e.target.value))
    }

    return (
        <div>
            <select onChange={(e) => handleChange(e)}>
                <option>Select order</option>
                <option value='score_asc'>Ascendant</option>
                <option value='score_des'>Descendant</option>
            </select>
        </div>
    )
}