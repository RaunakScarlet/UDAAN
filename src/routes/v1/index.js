const express = require('express');


const { InfoController } = require('../../controllers/index');

const airplaneRoutes = require('./airplane-routes')
const cityRoutes = require('./city-routes')
const airportRoutes = require('./airprt-routes')
const flightRoutes=require('./flight-routes')

const router = express.Router();

router.use('/airplanes', airplaneRoutes)
router.use('/cities', cityRoutes)
router.use('/airports', airportRoutes)
router.use('/flights',flightRoutes)


router.get('/info', InfoController.info );

module.exports = router;