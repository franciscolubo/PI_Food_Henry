const axios = require('axios');
const { APIKEY } = process.env;
const { Recipe, Diet } = require('../db')


const getApiId = async(id) => {
    try {
        const getApi = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=c26ff6241a6149c084bc043159c78135`)
        const idApi = getApi.data
        return {
            id: idApi.id,
            title: idApi.title,
            summary: idApi.summary.replace(/<[^>]*>?/g, ''),
            healthScore: idApi.healthScore,
            image: idApi.image,
            score: idApi.spoonacularScore,
            diets: idApi.diets,
            steps: idApi.analyzedInstructions[0]?.steps.map(e => {return e.step})
        }
    } catch (error) {
        return error
    }
}

const getDbId = async(id) => {
    try {
        return await Recipe.findByPk(id, {
            include: {
                model: Diet,
                attributes: [ 'name' ],
                through: {
                    attributes: []
                }
            }
        })
    } catch {
        return error
    }
}

const getAllId = async(id) => {
    const apiId = await getApiId(id)
    const dbId = await getDbId()
    return await Promise.all([apiId, dbId])
}

module.exports = {
    getApiId,
    getDbId,
    getAllId
}

/* id: el.id,
                title: el.title,
                summary: el.summary,
                healthScore: el.healthScore,
                image: el.image,
                score: el.spoonacularScore,
                diets: el.diets,
                steps: el.analyzedInstructions[0].steps,
                */