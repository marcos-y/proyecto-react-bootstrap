const express = require("express");
const app = express();
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: false, limit: "10mb" }));


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});


const productos = [
  {
    nombre: "coca",
    precio: "200",
    descripcion: "fria",
    categoria: "2"
  },

  {
    nombre: "pan",
    precio: "200",
    descripcion: "verde",
    categoria: "2"
  },

  {
    nombre: "pan",
    precio: "200",
    descripcion: "verde",
    categoria: "2"
  }
]

app.get('/productos', function (req, res) {
  res.send(productos);
});

app.post("/productos", (req, res) => {
  const producto = req.body;
  productos = [...productos, producto]; // esto seria ir a la DB y agregar el producto
  console.log("productos: ", productos);
  res.status(200).json({ mensaje: "producto agregado" });
}); app.post('')


app.delete("/productos", (req, res) => {
  res.json({
    code: 200,
    message: 'PRODUCTOS DELETE',
  });
});