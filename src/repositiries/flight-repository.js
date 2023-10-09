const { Sequelize } = require('sequelize');

const CrudRepository = require('./crud-repository');

const db = require('../models');

const { Flight, Airplane, Airport , City} = require('../models');
const { addRowlockOnFlights } = require('./queries');




class FlightRepository extends CrudRepository{

    constructor() {
        super(Flight);
    }

    async getAllFlights(filter,sort) {
        const response = await Flight.findAll({
            where: filter,
            order: sort,
            include: [
                {
                    model: Airplane,
                    required: true,
                    as: 'airplaneDetail'
                },
                {
                    model: Airport,
                    required: true,
                    as: 'departureAirport',
                    on : {
                        col1: Sequelize.where(Sequelize.col("Flight.departureAirportId"), "=", Sequelize.col("departureAirport.code"))
                    },
                    include: {
                        model: City,
                        required: true
                    }
                },
                {
                    model: Airport,
                    required: true,
                    as: 'arrivalAirport',
                    on : {
                        col1: Sequelize.where(Sequelize.col("Flight.arrivalAirportId"), "=", Sequelize.col("arrivalAirport.code"))
                    },
                    include: {
                        model: City,
                        required: true
                    }
                }
            ]
        });
        return response;
    }

//     async updatedRemainingSeats(flightId, seats, dec = true) {
//         const flight=await Flight.findByPk(flightId)
//         if (dec) {
//             const response = await flight.decrement('totalSeats', { by: seats });
//             await flight.save(); 
//             return response;
//         } else {
//              const response = await flight.increment('totalSeats', { by: seats });
//             return response;
//     }
    // }
    
       async updateRemainingSeats(flightId, seats, dec = true) {
        await db.sequelize.query(addRowlockOnFlights(flightId));
           const flight = await Flight.findByPk(flightId);
           console.log("hjvghvhhghghv",dec);
        if(!parseInt(dec)) {
            await flight.decrement('totalSeats', {by: seats});
        } else {
            await flight.increment('totalSeats', {by: seats});
        }
        return flight;
    }

}

module.exports = FlightRepository;