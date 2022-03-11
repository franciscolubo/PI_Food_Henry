const { Router } = require('express')
const { getAllInfo } = require('../Controllers/getAll')
const { Diet } = require('../db')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const diets = await getAllInfo()
        const types = diets.map(e => e.diets)
        const newTypes = [...new Set(types)]
        const finalTypes = newTypes.flat().concat('vegetarian', 'ketogenic')

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