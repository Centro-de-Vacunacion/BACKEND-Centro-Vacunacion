
const { Schema, model } = require('mongoose');

const VacunasSchema = Schema({
    nombre: {
        type: String,
    },
    dosis: {
        type: Number,
    },
    cantidad: {
        type: Number,
    },
    existencia: {
        type: Boolean,
    },
});




VacunasSchema.methods.toJSON = function() {
    const { __v, password, ...vacunas  } = this.toObject();
    return vacunas;
}

module.exports = model( 'Vacunas', VacunasSchema );
