const {AirplaneRepository} = require('../repositories');
const {Log} = require('../config');

const airplaneRepository = new AirplaneRepository();

async function createAirplane (data){
    try {
        const airplane = await airplaneRepository.create (data);
        return airplane;
    } catch (error) {
        Log.error(`Error in Create Airplane Service `, {label: 'Airplane Service'});
        throw error;
    }
}



module.exports = {
    createAirplane,
}