import React from 'redux'
import { useSelector, useDispatch } from 'react-redux'
import { orderByDiets } from '../actions'
import { CONTAINER } from '../Style/OrdersBy-styled'

export default function OrderByDiets({ ordered }) {
    const dispatch = useDispatch()
    const diets = useSelector(state => state.diets)

    const handleClick = (e) => {
        e.preventDefault()
        ordered(e.target.value)
        dispatch(orderByDiets(e.target.value))
    }

    return (
        <CONTAINER>
            <p>Order by <span>diet</span>: </p>
            <select onChange={(e) => handleClick(e)}>
                <option value='all'>All diets</option>
                {
                    diets.map((e) => {
                        return <option key={e.id} value={e.name}>{e.name}</option>
                    })
                }
            </select>
        </CONTAINER>
    )
}