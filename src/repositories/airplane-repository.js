const {CrudReposotry} = require('./crud-repository');

const { Airplane } = require('../models');

class AirplaneRepository extends CrudReposotry{
    constructor (){
        super(Airplane);
    }
}

module.exports = 
    AirplaneRepository;