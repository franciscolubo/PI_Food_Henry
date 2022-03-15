import React from 'redux'
import { useSelector, useDispatch } from 'react-redux'
import { orderByDiets } from '../actions'

export default function OrderByDiets({ ordered }) {
    const dispatch = useDispatch()
    const diets = useSelector(state => state.diets)

    const handleClick = (e) => {
        e.preventDefault()
        ordered(e.target.value)
        dispatch(orderByDiets(e.target.value))
    }

    return (
        <div className='order-diets'>
            <p className='p'>Order by <span className='resaltar'>diet</span>: </p>
            <select className='order-select' onChange={(e) => handleClick(e)}>
                <option value='all'>All diets</option>
                {
                    diets.map((e) => {
                        return <option key={e.id} value={e.name}>{e.name}</option>
                    })
                }
            </select>
        </div>
    )
}