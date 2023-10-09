const { log } = require('winston');
const { FlightService } = require('../services')
const { StatusCodes } = require('http-status-codes')
const {ErrorResponse,SuccessResponse}=require('../utils/common');
const { query } = require('express');

async function createFlight(req, res) {
    try {
       //console.log(req.body);
        const flight = await FlightService.createFlight ({
            flightNumber:req.body.flightNumber,
            airplaneId:req.body.airplaneId,
            departureAirportId:req.body.departureAirportId,
            arrivalAirportId:req.body.arrivalAirportId,
            price:req.body.price,
            boardingGateway:req.body.boardingGateway,
            totalSeats:req.body.totalSeats,
            arrivalTime:req.body.arrivalTime,
            departueTime:req.body.departueTime
        })
        SuccessResponse.data = flight;
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

async function getAllFlights(req, res) {
    
    try {

        const flights= await FlightService.getAllFlights(req.query)
        SuccessResponse.data = flights;
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

async function getFlight(req,res) {
    try {
        
 const flight = await FlightService.getFlight(req.params.id)
        SuccessResponse.data = flight;
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


async function updateSeats(req, res) {
    try {
        console.log(req.body);
        const response = await FlightService.updateSeats({
            flightId: req.params.id,
            seats: req.body.seats, 
            dec: req.body.dec
        });
        SuccessResponse.data = response;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

module.exports = {
    createFlight,
    getAllFlights,
    getFlight,
   updateSeats
    
}