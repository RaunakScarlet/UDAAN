const express = require('express');

const { CityController } = require('../../controllers/index');
const {CityMiddlewares}=require('../../middlewares')

const router = express.Router();

    router
    .post(
    '/',
    CityMiddlewares.validCreateRequest,
    CityController.createCity);

    router
    .get(
    '/',
        CityController.getCitys);


    router
    .get(
    '/:id',
        CityController.getCity);
    
    
    router
    .delete(
    '/:id',
    CityController.destroyCity);

module.exports = router;