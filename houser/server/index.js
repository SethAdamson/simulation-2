require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const dotEnv = require('dotenv');
const massive = require('massive');
const ctrl = require('./controller');
const app = express();
const {CONNECTION_STRING, SERVER_PORT} = process.env;
const port = SERVER_PORT || 4000;


app.use(bodyParser.json());


massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
    app.get('/api/houses', ctrl.getHouses);
    app.post('/api/houses', ctrl.postHouse);
    app.delete('/api/houses/:id', ctrl.deleteHouse);
})

app.listen(port, () => {
    console.log(`Listening on Port: ${port}`)
});