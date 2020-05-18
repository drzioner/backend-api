const { asClass, asFunction, asValue, createContainer } = require('awilix')

/**
 * Config
 */
const config = require('../config')
const app = require('.')

/**
 * Services
 */
const { HomeService } = require('../services')

/**
 * Controllers
 */
const { HomeController } = require('../controllers')

/**
 * Routes
 */
const { HomeRoutes } = require('../routes/index.routes')
const Routes = require('../routes')

/**
 * Models
 */
const { Comment, Idea, User } = require('../models')

const contanier = createContainer()

contanier
    .register({
        app: asClass(app).singleton(),
        router: asFunction(Routes).singleton(),
        config: asValue(config),
    })
    .register({
        HomeService: asClass(HomeService).singleton(),
    })
    .register({
        HomeController: asClass(
            HomeController.bind(HomeController)
        ).singleton(),
    })
    .register({
        HomeRoutes: asFunction(HomeRoutes).singleton(),
    })
    .register({
        Comment: asValue(Comment),
        Idea: asValue(Idea),
        User: asValue(User),
    })

module.exports = contanier
