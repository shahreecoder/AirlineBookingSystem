const {AirplaneService} =require('../services');
const { StatusCodes} = require('http-status-codes')
const {Log} = require('../config');
const { error } = require('winston');

/*
* POST: /airplanes
* Req-boody:{modelNumber:"AirbusABC", capacity:200}
*/

async function createAirplane (req,res){
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity
        })
        
    return res 
    .status(StatusCodes.CREATED)
    .json ({
        success:true,
        message: 'Airplane Created Successfully',
        data: airplane,
        error:{}
    })
    } catch (error) {
        Log.error(`Error in Create Airplane Controller `, {label: 'Airplane Controller'});
        return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json ({
            success:false,
            message: 'Something went wrong',
            data: {},
            error:error
        })
    }
}



module.exports = {
    createAirplane
}