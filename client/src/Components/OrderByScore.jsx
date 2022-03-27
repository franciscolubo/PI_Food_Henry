import React from 'react'
import { useDispatch } from 'react-redux'
import { orderByScore } from '../actions'
import { CONTAINER } from '../Style/OrdersBy-styled'

export default function OrderByScore({ ordered, page }) {
    const dispatch = useDispatch()

    const handleChange = (e) => {
        e.preventDefault()
        ordered(e.target.value)
        page(1)
        dispatch(orderByScore(e.target.value))
    }

    return (
        <CONTAINER>
            <p>Order by <span>score</span>: </p>
            <select onChange={(e) => handleChange(e)}>
                <option value=''>Select order</option>
                <option value='score_asc'>Ascendant</option>
                <option value='score_des'>Descendant</option>
            </select>
        </CONTAINER>
    )
}