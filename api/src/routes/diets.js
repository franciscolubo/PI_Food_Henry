const { Router } = require('express')
const { getApiInfo } = require('../Controllers/getAll')
const { Diet } = require('../db')
const fs = require('fs')
const json_diets = require('../json/diets.json')

const router = Router()

router.get('/', async (req, res) => {
    try {
        // const diets = await getApiInfo()
        // const types = diets.map(e => e.diets)
        // const newTypes = types.flat().concat('vegetarian', 'ketogenic')
        // const finalTypes = [...new Set(newTypes)]

        // for (let i in finalTypes) {
        //     Diet.findOrCreate({
        //         where: {name: finalTypes[i]}
        //     })
        // }
        for (let i in json_diets) {
            Diet.findOrCreate({
                where: {name: json_diets[i].name}
            })
        }

        // json_diets = await Diet.findAll()
        // fs.writeFile('./src/json/diets.json', JSON.stringify(newDiets), (err) => {
        //     if (err) console.log(err)
        //     else console.log('written successfully')
        // })
        res.status(200).json(json_diets)
    } catch (error) {
        res.send(error)
    }
})

module.exports = router