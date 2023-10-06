const { StatusCodes } = require('http-status-codes');

const {ErrorResponse}=require('../utils/common/index');
const AppError = require('../utils/errors/app-error');

function validCreateRequest(req, res, next) {
    if (!req.body.name) {

        ErrorResponse.message = "something went wrong while creating airport";
        ErrorResponse.error = new AppError(['name not found in oncoming request'], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if (!req.body.code) {

        ErrorResponse.message = "something went wrong while creating airport";
        ErrorResponse.error = new AppError(['code not found in oncoming request'], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if (!req.body.city_id) {

        ErrorResponse.message = "something went wrong while creating airport";
        ErrorResponse.error = new AppError(['City ID not found in oncoming request'], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }

    next(); 
}

module.exports = {
    validCreateRequest
}