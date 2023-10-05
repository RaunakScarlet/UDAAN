const { log } = require('winston');
const { AirplaneService } = require('../services')
const { StatusCodes } = require('http-status-codes')
const {ErrorResponse,SuccessResponse}=require('../utils/common')

async function createAirplane(req, res) {
    try {
       //console.log(req.body);
        const airplane = await AirplaneService.createAirplane ({
            modelNumber: req.body.modelNumber,
            capacity:req.body.capacity
        })
        SuccessResponse.data = airplane;
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);

    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
         .json(ErrorResponse);
        
    }
}

async function getAirplanes(req, res) {
    try {
        
 const airplanes = await AirplaneService.getAirplanes()
        SuccessResponse.data = airplanes;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);

    } catch (error) {
         ErrorResponse.error = error;
        return res
            .status(error.statusCode)
         .json(ErrorResponse);
    }
}

module.exports = {
    createAirplane,
    getAirplanes
}