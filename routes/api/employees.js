const express = require("express");
const router = express.Router();
const Employee = require("../../models/employee");

// metodo get
router.get("/", (req, res) => {
  Employee.find()
    .then((empleado) => res.json(empleado))
    .catch((err) =>
      res.status(404).json({ employeefound: "pagina no encontrada" })
    );
});

// metodo post
router.post("/", (req, res) => {
  Employee.create(req.body)
    .then((empleado) => res.json({ msg: "Employee added successfully" }))
    .catch((err) => res.status(400).json({ error: "Employee added error" }));
});

router.delete("/:id", (req, res) => {
  Employee.findByIdAndRemove(req.params.id, req.body)
    .then((empleado) => res.json({ msg: "Employee delete successfully" }))
    .catch((err) => res.status(400).json({ error: "Employee delete error" }));
});

router.put("/:id", (req, res) => {
  Employee.findByIdAndUpdate(req.params.id, req.body)
    .then((empleado) => res.json({ msg: "Employee update successfully" }))
    .catch((err) => res.status(400).json({ error: "Employee update error" }));
});

module.exports = router;
