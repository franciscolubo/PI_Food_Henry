import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, orderByName } from "../actions/index.js";
import Pagination from "./Pagination.jsx";
import Recipes from './Recipes.jsx'
import NavBar from "./NavBar.jsx";
import OrderByName from "./OrderByName.jsx";
import OrderByScore from './OrderByScore.jsx'

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
        console.log(e)
    }

    useEffect(() => {
        dispatch(getRecipes())
    }, [dispatch])


    return (
        <div>
            <div>
                <NavBar
                    page={page}
                />
            </div>
            <div>
                <OrderByName
                    ordered={ordered}
                />
                <OrderByScore />
            </div>
            <div>
                <Recipes
                    recipesCopy={recipesCopy} // array
                    currentPage={currentPage} // 2
                />
            </div>
            <div>
                <Pagination
                    recipesCopy={recipesCopy.length}
                    page={page}
                />
            </div>
        </div>
    )
}