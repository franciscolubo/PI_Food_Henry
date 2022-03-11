
const initialState = {
    recipes: [],
    recipesCopy: [],
    diets: [],
    detail: []
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
            let orderNameList = state.recipesCopy.sort(function (a, b) {
                if (a.title.toLowerCase() > b.title.toLowerCase()){
                    return 1
                } else if (a.title.toLowerCase() < b.title.toLowerCase()) {
                    return -1
                } else {
                    return 0
                }    
            })
            if (action.payload === 'des') { orderNameList = orderNameList.reverse() }
            
            return{
                ...state,
                recipesCopy: orderNameList
            }
        
        case '@order_by_score':
            let orderScoreList = state.recipesCopy.sort(function (a, b) {
                if (a.score > b.score){
                    return 1
                } else if (a.score < b.score) {
                    return -1
                } else {
                    return 0
                }  
            })
            if (action.payload === 'score_des') { orderScoreList = orderScoreList.reverse()}
            
            return{
                ...state,
                recipesCopy: orderScoreList
            }

        case '@get_diets':
            return {
                ...state,
                diets: action.payload
            }

        case '@order_by_diets':
            let diets = action.payload === 'all' ? state.recipes : state.recipesCopy.filter(e => e.diets.includes(action.payload))
            return {
                ...state,
                recipesCopy: diets
            }
        
        case '@recipe_detail':
            return {
                ...state,
                detail: action.payload
            }

        default: return {
            ...state
        }
    }
}

export default rootReducer