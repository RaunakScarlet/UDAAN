const express = require('express');

const { AirportController } = require('../../controllers/index');
const {AirportMiddlewares}=require('../../middlewares')

const router = express.Router();

    router
    .post(
    '/',
    AirportMiddlewares.validCreateRequest,
    AirportController.createAirport);

    router
    .get(
    '/',
        AirportController.getAirports);


    router
    .get(
    '/:id',
        AirportController.getAirport);
    
    
    router
    .delete(
    '/:id',
    AirportController.destroyAirport);

module.exports = router;