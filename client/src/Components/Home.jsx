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
        <div>
            <div>
                <NavBar
                    page={page}
                />
            </div>
            <div>
                Order for name: <OrderByName
                    ordered={ordered}
                    page={page}
                />
                Order for score: <OrderByScore
                    ordered={ordered}
                    page={page}
                />
                Order by diet: <OrderByDiets
                    ordered={ordered}
                />
                Recipe for Db or Api: <DbOrApi
                    page={page}
                />
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