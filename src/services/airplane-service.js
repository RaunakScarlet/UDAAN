const { AirplaneRepository } = require('../repositiries/index');

const { StatusCodes } = require('http-status-codes');

const AppError=require('../utils/errors/app-error')

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
    try {
        
        const airplane = await airplaneRepository.create(data);
        return airplane; 

    } catch (error) {
          
        if (error.name == 'SequelizeValidationError') {
            
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            console.log(explanation);
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
            
      }
         throw new AppError('cannot create a new  airplane object',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplanes() {
    try {
        
        const airplanes = await airplaneRepository.getAll();
        return airplanes;

    } catch (error) {
throw new AppError('cannot fetch data of the Airplanes',StatusCodes.INTERNAL_SERVER_ERROR);
     }
}

async function getAirplane(id) {
    try {
        
        const airplane = await airplaneRepository.get(id);
        return airplane;

    } catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError('The Airplane you requested in not present',error.statusCode);
        }
throw new AppError('cannot fetch data of the Airplanes',StatusCodes.INTERNAL_SERVER_ERROR);
     }
}


module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane
}