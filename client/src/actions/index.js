import axios from 'axios'

export function getRecipes() {
    return async function(dispatch) {
        const json = await axios.get('http://localhost:3001/recipes');
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
        console.log(json.data)
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
