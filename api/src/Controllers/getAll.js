const axios = require('axios');
require('dotenv').config();
const { APIKEY } = process.env;
const { Recipe, Diet } = require('../db')


const getApiInfo = async () => {
    try {
        const getUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&addRecipeInformation=true&number=100`)
        const getInfo = getUrl.data?.results.map(el => {
            return {
                id: el.id,
                title: el.title,
                summary: el.summary.replace(/<[^>]*>?/g, ''),
                healthScore: el.healthScore,
                image: el.image,
                imageType: el.imageType,
                score: el.spoonacularScore,
                diets: el.diets,
                steps: el.analyzedInstructions[0]?.steps.map(e => {return e.step})
            }
        })
        return getInfo
    } catch (error) {
        return error
    }
}

const getDataBase = async () => {
    try {
        return await Recipe.findAll({
            include: {
                model: Diet,
                attributes: ['name'],
                through:{
                    attributes: [],
                }
            }
        });
        
    } catch (error) {
        console.log(error)
    }
}

const getAllInfo = async () => {
    const getApi = await getApiInfo()
    const getDb = await getDataBase()
    const allInfo = [...getApi, ...getDb]
    return allInfo
}

module.exports = {
    getApiInfo,
    getDataBase,
    getAllInfo
}
