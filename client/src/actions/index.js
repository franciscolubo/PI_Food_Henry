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

export function addRecipeDb(recipe) {
    return async function (dispatch) {
        const addRecipe = await axios.post('http://localhost:3001/recipes/recipe', recipe)
        return addRecipe
    }
}

export function DbOrApiActions(payload) {
    return {
        type: '@db_or_api',
        payload
    }
}

export function editDataBase(editRecipe, id){
    return async function (dispatch) {
        const newEdit = await axios.put(`http://localhost:3001/recipes/edit/${id}`, editRecipe)
        return newEdit
    }
}

export function deleteRecipe(id){
    return async function (dispatch) {
        const deleteRecip = await axios.delete(`http://localhost:3001/recipes/delete/${id}`)
        return alert('Receta eliminada')
    }
}

