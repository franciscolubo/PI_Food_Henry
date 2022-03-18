
const initialState = {
    recipes: [],
    recipesCopy: [],
    diets: [],
    detail: []
}


const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case '@get_recipes':
            let newRecipe = action.payload
            for (let i = 0; i < newRecipe.length; i++) {
                if (newRecipe[i].hasOwnProperty('isDb')) {
                    let diets = []
                    newRecipe[i].diets.map(e => {
                        diets.push(e.name)
                    })
                    newRecipe[i].diets = diets
                }
            }
            return{
                ...state,
                recipes: newRecipe,
                recipesCopy: newRecipe
            }
            
        case '@get_recipes_name':
            return{
                ...state,
                recipesCopy: action.payload
            }

        case '@order_by_name':
            let orderNameList = state.recipes.sort(function (a, b) {
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
            let orderScoreList = state.recipes.sort(function (a, b) {
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
            let newRecipeDetail = action.payload
            if (action.payload.hasOwnProperty('isDb')) {
                let diets = []
                newRecipeDetail.diets.map(e => {
                    diets.push(e.name)
                })
                newRecipeDetail.diets = diets
            }
            return {
                ...state,
                detail: newRecipeDetail
            }

            case '@db_or_api':
                let array = []
                if (action.payload === 'db') {
                    array = state.recipes.filter(e => e.isDb)
                } else if (action.payload === 'api'){
                    array = state.recipes.filter(e => !e.isDb)
                } else {
                    array = [...state.recipes]
                }

                return {
                    ...state,
                    recipesCopy: array
                }
            
            case '@delete_detail':
                return {
                    ...state,
                    detail: []
                }

        default: return {
            ...state
        }
    }
}

export default rootReducer