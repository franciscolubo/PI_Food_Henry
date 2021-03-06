const axios = require('axios');
require('dotenv').config();
const { APIKEY } = process.env;
const { Recipe, Diet } = require('../db')
const json = require('../json/recipes.json')


const getApiId = async(id) => {
    try {
        // const getApi = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${APIKEY}`)
        // const idApi = getApi.data
        // return {
        //     id: idApi.id,
        //     title: idApi.title,
        //     summary: idApi.summary.replace(/<[^>]*>?/g, ''),
        //     healthScore: idApi.healthScore,
        //     image: idApi.image,
        //     score: idApi.spoonacularScore,
        //     diets: idApi.diets,
        //     steps: idApi.analyzedInstructions[0]?.steps.map(e => {return e.step})
        // }

        return json.find(e => e.id.toString() === id)

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
    } catch (error){
        return error
    }
}

const getAllId = async(id) => {
    const validacion = id.length

    if(validacion > 7) {
        const dbId = await getDbId(id)
        return dbId
    } else {
        const apiId = await getApiId(id)
        return apiId
    }
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