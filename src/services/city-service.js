const { CityRepository } = require('../repositiries/index');

const { StatusCodes } = require('http-status-codes');

const AppError=require('../utils/errors/app-error')

const cityRepository = new CityRepository();

async function createCity(data) {
    try {
        
        const City = await cityRepository.create(data);
        return City; 

    } catch (error) {
          
        if (error.name == 'SequelizeValidationError') {
            
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            console.log(explanation);
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
            
      }
         throw new AppError('cannot create a new  City object',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getCitys() {
    try {
        
        const city = await cityRepository.getAll();
        return city;

    } catch (error) {
throw new AppError('cannot fetch data of the Citys',StatusCodes.INTERNAL_SERVER_ERROR);
     }
}

async function getCity(id) {
    try {
        
        const city = await cityRepository.get(id);
        return city;

    } catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError('The City you requested in not present',error.statusCode);
        }
throw new AppError('cannot fetch data of the Citys',StatusCodes.INTERNAL_SERVER_ERROR);
     }
}


async function destroyCity(id) {
    try {
        
        const response = await cityRepository.destroy(id);
        return response;

    } catch (error) {
         if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError('The City you requested to delete is not present',error.statusCode);
        }
throw new AppError('cannot fetch data of the Citys',StatusCodes.INTERNAL_SERVER_ERROR);
     }
}
module.exports = {
    createCity,
    getCitys,
    getCity,
    destroyCity
}