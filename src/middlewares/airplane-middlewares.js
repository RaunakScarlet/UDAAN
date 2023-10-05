const { StatusCodes } = require('http-status-codes');

const {ErrorResponse}=require('../utils/common/index');
const AppError = require('../utils/errors/app-error');

function validCreateRequest(req, res, next) {
    if (!req.body.modelNumber) {

        ErrorResponse.message = "something went wrong while creating plane";
        ErrorResponse.error = new AppError(['Model number not found in oncoming request'], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }

    next(); 
}

module.exports = {
    validCreateRequest
}