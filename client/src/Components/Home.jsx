import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRecipeDb, getDiets, getRecipes } from "../actions/index.js";
import Pagination from "./Pagination.jsx";
import Recipes from './Recipes.jsx'
import NavBar from "./NavBar.jsx";
import OrderByName from "./OrderByName.jsx";
import OrderByDiets from "./OrderByDiets.jsx";
import OrderByScore from "./OrderByScore.jsx";
import DbOrApi from "./DbOrApi.jsx";
import { CONTAINER_GENERAL } from "../Style/OrdersBy-styled.js";
import { HOME_CONTAINER } from "../Style/Home-styled.js";
import Loading from "./Loading.jsx";
import NotFound from "./NotFound.jsx";

export default function Home() {
    const dispatch = useDispatch()
    const recipesCopy = useSelector(state => state.recipesCopy)
    const [currentPage, setCurrentPage] = useState(1)
    const [order, setOrder] = useState("") // Creo un Hook para poder aplicar los cambios de mis ordenamientos
    const [loading, setLoading] = useState(false)
    const page = (e) => {
        setCurrentPage(e)
    }

    const ordered = (e) => {  // Es el encargado de modificar el order y permitir hacer un componentUpdate
        setOrder(e)
    }

    useEffect(() => {
        dispatch(getRecipes())
        dispatch(getDiets())
    }, [dispatch])

    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
        }, 3000)
    }, [recipesCopy.length > 0])
    console.log(recipesCopy)
    if (recipesCopy.length === 100) {
        // for (let i in recipesCopy) {
        //     console.log(recipesCopy[i])
        //     dispatch(addRecipeDb(recipesCopy[i]))
        // }
        console.log((recipesCopy[0]))
        dispatch(addRecipeDb(recipesCopy[0]))
    }
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
            {
                loading === false ?
                    <Loading />
                    : recipesCopy.length > 0 ?
                        <div>
                            <Recipes
                                recipesCopy={recipesCopy} // array
                                currentPage={currentPage} // 2
                            />
                            <Pagination
                                recipesCopy={recipesCopy.length}
                                page={page}
                            />
                        </div>
                        : <NotFound />
            }
        </HOME_CONTAINER>
    )
}