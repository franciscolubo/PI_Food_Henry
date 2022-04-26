const { Router } = require('express')
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
            if (existName.length !== 0) {
                res.status(200).json(existName)
            } else {
                res.status(404).send('No se encontro una receta con ese nombre')
            }
            

            // existName.length
            //     ? res.status(200).json(existName) 
            //     : res.status(404).send('No se encontro una receta con ese nombre')
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
        let newRecipe = await Recipe.findOrCreate({
            where: {
                title: title
            },
            defaults: {
                title,
                summary: summary.slice(0, 255),
                score,
                healthScore,
                steps,
                image,
            }
        })
        let newDiets = await Diet.findAll({
            where: {
                name: diets
            }
        })
        
        newRecipe.addDiet(newDiets)
        console.log(newRecipe)
        res.status(201).json(newRecipe)
    } catch (error) {
        res.send(error)
    }
})

router.put('/edit/:id', async (req, res) => {
    try {
        let { id } = req.params
        let { title, score, healthScore, summary, image, diets, steps } = req.body
        let recipeUpdate = await Recipe.findOne({
            where: {
                id: id
            }
        })

        let newUpdate = await recipeUpdate.update({
            title: title,
            score: score,
            healthScore: healthScore,
            image: image,
            summary: summary,
            steps: steps,
        })

        let dietsDb = await Diet.findAll({
            where: {
                name: diets
            }
        })

        newUpdate.setDiets(dietsDb)
        res.status(202).json(newUpdate)
    } catch (error) {
        res.send(error)
    }
})

router.delete('/delete/:idRecipe', async (req, res) => {
    try {
        let { idRecipe } = req.params
        console.log(idRecipe)
        await Recipe.destroy({
            where: {
                id: idRecipe
            }
        })

        res.send('Recipe eliminada')
    } catch (error) {
        res.send(error)
    } 
})

module.exports = router