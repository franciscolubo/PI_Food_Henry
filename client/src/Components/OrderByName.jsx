import React from 'react'
import { useDispatch } from 'react-redux'
import { orderByName } from '../actions'
import { Container } from '../Style/OrdersBy-styled'

export default function OrderByName({ ordered, page }) {
    const dispatch = useDispatch()

    const handleOrderName = (e) => {
        e.preventDefault()
        ordered(e.target.value)
        page(1)
        dispatch(orderByName(e.target.value))
    }

    return (
        <Container>
            <p>Order by <span>name</span>: </p>
            <select onChange={(e) => handleOrderName(e)}>
                <option >Select order</option>
                <option value='asc'>Ascendent</option>
                <option value='des'>Descendent</option>
            </select>
        </Container>
    )
}