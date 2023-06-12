const express = require('express')
const app = express()
const port = 3000

const products = [
   {
      id: 1,
      name: "Santa Hidro",
      price: 180,
      image: "imagenes/hidromiel.jpeg",
      stock: 8,
   },
   {
    id: 2,
    name: "Santa Vinata",
    price: 250,
    image: "imagenes/vino.jpg",
    stock: 10,
   },
   {
    id: 3,
    name: "Santa Chela",
    price: 70,
    image: "imagenes/chela.jpg",
    stock: 4,
   },
];

app.get('/api/productos', (req, res) => {
  res.send(products);
})

app.use("/",express.static("Front1"));

app.listen(port, () => {
  console.log(`checalo en: http://localhost:${port}`);
});