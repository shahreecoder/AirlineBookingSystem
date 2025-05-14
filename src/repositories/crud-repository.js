const { Log} = require ('../config/')

class CrudReposotry {
    constructor(model) {
        this.model = model;
    }
    async create (data){
        try {
            const response = await this.model.create(data);
            return response;
        }catch (error){
            Log.error(`Error in Create Function in Crud Repo `, {label: 'Crud Repository'});
            throw error;

        }
    }
    async destroy (data){
        try {
            const response = await this.model.destroy({
                where:{
                    id:data
                }
            });
            return response;
        }catch (error){
            Log.error(`Error in Destroy Function in Crud Repo `, {label: 'Crud Repository'});
            throw error;

        }
    }
    async get (data){
        try {
            const response = await this.model.findByPk(data);
            return response;

        }catch (error){
            Log.error(`Error in Get Function in Crud Repo `, {label: 'Crud Repository'});
            throw error;

        }
    }
    async getAll (){
        try {
            const response = await this.model.findAll();
            return response;
        }catch (error){
            Log.error(`Error in Get Function in Crud Repo `, {label: 'Crud Repository'});
            throw error;

        }
    }
    async update (id, data){  //data --> {columnName: value, columnName: value}
        try {
            const response = await this.model.update(data, {
                where:{
                    id:id
                }
            });
            return response;
        }catch (error){
            Log.error(`Error in Get Function in Crud Repo `, {label: 'Crud Repository'});
            throw error;

        }
    }

}

module.exports = {CrudReposotry};