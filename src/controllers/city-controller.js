const { CityService } = require('../services')
const { StatusCodes } = require('http-status-codes')
const {ErrorResponse,SuccessResponse}=require('../utils/common')

async function createCity(req, res) {
    try {
       //console.log(req.body);
        const city = await CityService.createCity ({
           name: req.body.name,
           
        })
        SuccessResponse.data = city;
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

module.exports = {
    createCity
}