const { Router } = require('express')
const { Op } = require('sequelize')
const { getAllInfo } = require('../Controllers/getAll')
const { getAllId } = require('../Controllers/getId')
const { Recipe, Diet } = require('../db')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const { name } = req.query
        const recipes = await getAllInfo()
        if (name) {
            const existName = recipes.filter(e => e.title.toLowerCase().includes(name.toLowerCase())) // e.title=Facturas === name: facturas
            existName.length
                ? res.status(200).json(existName) 
                : res.status(404).send('No se encontro una receta con ese nombre')
        } else {
            res.status(200).send(recipes)
        }
    } catch (error) {
        res.send(error)
    }
});

router.get('/:idRecipe', async (req, res) => {
    try {
        const { idRecipe } = req.params
        if (idRecipe) {  
            const recipeId = await getAllId(idRecipe)
            res.json(recipeId)
        } else {
            res.send('No se ingreso ningun ID')
        }
    } catch (error) {
        res.send(error)
    }
})

router.post('/recipe', async (req, res) => {
    let { title, summary, healthScore, image, score, diets, steps } = req.body
    try {
        let newRecipe = await Recipe.create({
            title,
            summary,
            score,
            healthScore,
            steps,
            image,
        })
        let newDiets = await Diet.findAll({
            where: {
                name: diets
            }
        })
        
        newRecipe.addDiet(newDiets)
        res.status(201).json(newRecipe)
    } catch (error) {
        res.send(error)
    }
})

module.exports = router