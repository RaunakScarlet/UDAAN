const express = require('express');

const { AirplaneController } = require('../../controllers/index');
const {AirplaneMiddlewares}=require('../../middlewares')

const router = express.Router();

    router
    .post(
    '/',
    AirplaneMiddlewares.validCreateRequest,
    AirplaneController.createAirplane);

    router
    .get(
    '/',
        AirplaneController.getAirplanes);


    router
    .get(
    '/:id',
        AirplaneController.getAirplane);
    
    
    router
    .delete(
    '/:id',
    AirplaneController.destroyAirplane);

module.exports = router;