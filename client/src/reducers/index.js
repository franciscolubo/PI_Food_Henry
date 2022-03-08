
const initialState = {
    recipes: [],
    recipesCopy: []
}


const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case '@get_recipes':
            return{
                ...state,
                recipes: action.payload,
                recipesCopy: action.payload
            }
            
        case '@get_recipes_name':
            return{
                ...state,
                recipesCopy: action.payload
            }

        case '@order_by_name':
            let orderList = state.recipesCopy.sort(function (a, b) {
                if (a.title.toLowerCase() > b.title.toLowerCase()){
                    return 1
                } else if (a.title.toLowerCase() < b.title.toLowerCase()) {
                    return -1
                } else {
                    return 0
                }    
            })
            if (action.payload === 'des') { orderList = orderList.reverse() }
            
            return{
                ...state,
                recipesCopy: orderList
            }

        default: return {
            ...state
        }
    }
}

export default rootReducer