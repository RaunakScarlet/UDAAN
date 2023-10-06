const { log } = require('winston');
const { AirportService } = require('../services')
const { StatusCodes } = require('http-status-codes')
const {ErrorResponse,SuccessResponse}=require('../utils/common')

async function createAirport(req, res) {
    try {
       //console.log(req.body);
        const airport = await AirportService.createAirport ({
            name: req.body.name,
            city_id: req.body.city_id,
            code:req.body.code
        })
        SuccessResponse.data = airport;
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

async function getAirports(req, res) {
    try {
        
 const airports = await AirportService.getAirports()
        SuccessResponse.data = airports;
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

async function getAirport(req,res) {
    try {
        
 const airport = await AirportService.getAirport(req.params.id)
        SuccessResponse.data = airport;
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


async function destroyAirport(req,res) {
    try {
        
 const response= await AirportService.destroyAirport(req.params.id)
        SuccessResponse.data = response;
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
    createAirport,
    getAirports,
    getAirport,
    destroyAirport
    
}