const { log } = require('winston');
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

async function getCitys(req, res) {
    try {
        
 const citys = await CityService.getCitys()
        SuccessResponse.data = citys;
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

async function getCity(req,res) {
    try {
        
 const Citys = await CityService.getCity(req.params.id)
        SuccessResponse.data = Citys;
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


async function destroyCity(req,res) {
    try {
        
 const Citys = await CityService.destroyCity(req.params.id)
        SuccessResponse.data = Citys;
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
    createCity,
    getCitys,
    getCity,
    destroyCity
    
}