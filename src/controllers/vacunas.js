const { response, request } = require("express");

const Vacunas = require("../models/vacunas");

const vacunasGet = async (req = request, res = response) => {
  const [vacunas] = await Promise.all([Vacunas.find({})]);

  res.json({ vacunas });
};

const vacunasPut = async (req, res = response) => {
  const { id } = req.params;

  const { _id, numero } = req.body;

  const { nombre, dosis, cantidad, existencia } = await Vacunas.findById(id);

  if (cantidad) {
    if ((numero == -1 && dosis == 2 )) {
      const respuesta = cantidad + numero;
      const vacunas = await Vacunas.findByIdAndUpdate(id, {
        cantidad: respuesta,
      });

      res.json({ vacunas, msg: "Aplicado la segunda dosis", nombre });
    } else if ((numero == -1 && dosis == 1)) {
      const respuesta = cantidad + numero;
      const vacunas = await Vacunas.findByIdAndUpdate(id, {
        cantidad: respuesta,
      });

      res.json({ vacunas, msg: "Aplicado la primera dosis", nombre });
    } else if (numero < -1) {
      res.json({ msg: "una dosis por peticion" });
    }
  } else if (numero > 0) {
    await Vacunas.findByIdAndUpdate(
      id,
      {
        cantidad: cantidad + numero,
      },
      {
        existencia: true,
      }
    );
    res.json({ msg: "disponible" });
  }
};

module.exports = {
  vacunasGet,
  vacunasPut,
};
