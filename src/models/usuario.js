const { Schema, model } = require('mongoose');

const UsuariosSchema = Schema({
    cedula: {
        type: String,
    },
    nombre: {
        type: String,
    },
    apellido: {
        type: String,
    },
    cita: {
        type: Boolean,
    },
    year: {
        type: Number,
    },
    vacunacion_completa: {
        type: Boolean,
    },
});

UsuariosSchema.methods.toJSON = function() {
    const { __v, password, ...usuarios } = this.toObject();
    return usuarios;
}

module.exports = model('Usuarios', UsuariosSchema);