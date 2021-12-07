const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.listen(3030, () => {
    console.log('Servidor corriendo correctamente en puerto 3030')
});
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/home.html"));
});

app.get('/register', (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/register.html"));
});

app.get('/login', (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/login.html"));
});
