const { Router } = require('express');
const routeRecipe = require('./recipes')
const routeDiet = require('./diets')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router()

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/recipes', routeRecipe)
router.use('/types', routeDiet)

module.exports = router;
