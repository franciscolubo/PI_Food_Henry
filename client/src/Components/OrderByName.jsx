import React from 'react'
import { useDispatch } from 'react-redux'
import { orderByName } from '../actions'

export default function OrderByName({ ordered }) {
    const dispatch = useDispatch()

    const handleOrderName = (e) => {
        e.preventDefault()
        ordered(e.target.value)
        dispatch(orderByName(e.target.value))
    }

    return (
        <div>
            <select onChange={(e) => handleOrderName(e)}>
                <option >Select order</option>
                <option value='asc'>Ascendent</option>
                <option value='des'>Descendent</option>
            </select>
        </div>
    )
}