import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from "../actions";
import { CONTAINER_NOTFOUND } from "../Style/NotFound-styled";
import notfound from '../UI/not-found.gif'

export default function NotFound() {
    const dispatch = useDispatch()
    useEffect(() => {
        setTimeout(() => {
            dispatch(getRecipes())
        }, 3000);
    }, [])

    return (
        <CONTAINER_NOTFOUND>
            <img src={notfound} alt='not found' />
            <h2>Not found recipes</h2>
        </CONTAINER_NOTFOUND>
    )
}