const { Schema, model } = require('mongoose');

const UsuariosSchema = Schema({

    cedula: {
        type: Number,
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
    vacunacion: [{
            Dosis1ra: {
                type: String,
            },
            id_vacuna: {
                type: String,
            },
            nombre_vacuna: {
                type: String,
            }
        },
        {
            Dosis2da: {
                type: String,
            },
            id_vacuna: {
                type: String,
            },
            nombre_vacuna: {
                type: String,
            }
        }
    ],
});

UsuariosSchema.methods.toJSON = function() {
    const { __v, password, ...usuarios } = this.toObject();
    return usuarios;
}

module.exports = model('Usuarios', UsuariosSchema);