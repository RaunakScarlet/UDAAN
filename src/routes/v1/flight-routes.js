const express = require('express');

const { FlightController } = require('../../controllers/index');
const {FlightMiddlewares}=require('../../middlewares')

const router = express.Router();

    router
    .post(
    '/',
    FlightMiddlewares.validCreateRequest,
        FlightController.createFlight);
    
        router
    .get(
    '/',
        FlightController.getAllFlights);
    
        router.patch(
        '/:id/seats', 
        FlightMiddlewares.validateUpdateSeatsRequest,
        FlightController.updateSeats
);

module.exports = router;