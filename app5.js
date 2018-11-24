// Analizando lAS SOLICITUDES ENTRANTES
// Trabajando con express router
// 
// 
const http = require('http');
const bodyParser = require('body-parser')
const express = require('express');


const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.use('/',(req, res, next) => {
    console.log('Esto siempre se ejecuta');
    next();
})

app.use('/agregar',(req, res) => {
    console.log('Este es middleware /agregar');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Agregar Producto</button></form>')
})
// app.get(....) para solicitar
// app.post(....) para enviar información
app.post('/product',(req, res, next) => {
    console.log('En otro middleware /product');
    console.log(req.body);
    res.redirect('/');
});

app.use('/otro',(req, res) => {
    console.log('Este es middleware /otro');
    res.send('<h1>Hola desde /otro</h1>')
})
app.use('/',(req, res, next) => {
    console.log('Este es middleware raiz');
    res.send('<h1>Hola desde /</h1>')
})

const server = http.createServer(app);

server.listen(3000)