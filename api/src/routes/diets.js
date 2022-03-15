const { Router } = require('express')
const { getApiInfo } = require('../Controllers/getAll')
const { Diet } = require('../db')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const diets = await getApiInfo()
        const types = diets.map(e => e.diets)
        const newTypes = types.flat().concat('vegetarian', 'ketogenic')
        const finalTypes = [...new Set(newTypes)]

        for (let i in finalTypes) {
            Diet.findOrCreate({
                where: {name: finalTypes[i]}
            })
        }

        const newDiets = await Diet.findAll()
        res.status(200).json(newDiets)
    } catch (error) {
        res.send(error)
    }
})

module.exports = router