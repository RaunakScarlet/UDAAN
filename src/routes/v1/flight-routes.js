const express = require('express');

const { FlightController } = require('../../controllers/index');
const {FlightMiddlewares}=require('../../middlewares')

const router = express.Router();

    router
    .post(
    '/',
    FlightMiddlewares.validCreateRequest,
    FlightController.createFlight);


module.exports = router;