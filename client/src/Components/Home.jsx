import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiets, getRecipes } from "../actions/index.js";
import Pagination from "./Pagination.jsx";
import Recipes from './Recipes.jsx'
import NavBar from "./NavBar.jsx";
import OrderByName from "./OrderByName.jsx";
import OrderByDiets from "./OrderByDiets.jsx";
import OrderByScore from "./OrderByScore.jsx";
import DbOrApi from "./DbOrApi.jsx";
import { CONTAINER_GENERAL } from "../Style/OrdersBy-styled.js";
import { HOME_CONTAINER } from "../Style/Home-styled.js";

export default function Home() {
    const dispatch = useDispatch()
    const recipesCopy = useSelector(state => state.recipesCopy)
    const [currentPage, setCurrentPage] = useState(1)
    const [order, setOrder] = useState("") // Creo un Hook para poder aplicar los cambios de mis ordenamientos

    const page = (e) => {
        setCurrentPage(e)
    }

    const ordered = (e) => {  // Es el encargado de modificar el order y permitir hacer un componentUpdate
        setOrder(e)
    }

    useEffect(() => {
        dispatch(getRecipes())

    }, [dispatch])

    useEffect(() => {
        dispatch(getDiets())
    }, [])


    return (
        <HOME_CONTAINER>
            <NavBar
                page={page}
            />
            <CONTAINER_GENERAL>
                <OrderByName
                    ordered={ordered}
                    page={page}
                />
                <OrderByScore
                    ordered={ordered}
                    page={page}
                />
                <OrderByDiets
                    ordered={ordered}
                />
                <DbOrApi
                    page={page}
                />
            </CONTAINER_GENERAL>

            <Recipes
                recipesCopy={recipesCopy} // array
                currentPage={currentPage} // 2
            />
            <Pagination
                recipesCopy={recipesCopy.length}
                page={page}
            />
        </HOME_CONTAINER>
    )
}