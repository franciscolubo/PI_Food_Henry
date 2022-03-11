import axios from 'axios'

export function getRecipes() {
    return async function(dispatch) {
        const json = await axios.get('http://localhost:3001/recipes')
        console.log(json.data)
        return dispatch({
            type: '@get_recipes',
            payload: json.data
        })
    }
}

export function getRecipeName(name) {
    return async function(dispatch) {
        const json = await axios.get(`http://localhost:3001/recipes?name=${name}`)
        return dispatch({
            type: '@get_recipes_name',
            payload: json.data
        })
    }
}

export function orderByName(payload) {
    return {
        type: '@order_by_name',
        payload
    }
}

export function orderByScore(payload) {
    return {
        type: '@order_by_score',
        payload
    }
}

export function getDiets() {
    return async function(dispatch) {
        const json = await axios.get('http://localhost:3001/types')
        return dispatch({
            type: '@get_diets',
            payload: json.data
        })
    }
}

export function orderByDiets(payload) {
    return {
        type: '@order_by_diets',
        payload
    }
}

export function recipeDetail(recipeId) {
    return async function(dispatch) {
        const json = await axios.get(`http://localhost:3001/recipes/${recipeId}`)
        return dispatch({
            type: '@recipe_detail',
            payload: json.data
        })
    }
}

