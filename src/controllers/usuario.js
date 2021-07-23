const { response, request } = require("express");
const _ = require('underscore');
const Usuarios = require("../models/usuario");

const usuarioGet = async(req = request, res = response) => {
    const [usuarios] = await Promise.all([Usuarios.find({cita:false})]);

    res.json( usuarios );
};

const usuarioPost = async(req, res) => {
    let body = req.body;

    let usuario = new Usuarios({
        cedula: body.cedula,
        nombre: body.nombre,
        apellido: body.apellido,
        cita: body.cita,
        year: body.year,
        vacunacion_completa: body.vacunacion_completa
    });

    usuario.save((err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }


        res.json({
            ok: true,
            usuario: usuarioDB
        });
    });
};



module.exports = {
    usuarioGet,
    usuarioPost
};