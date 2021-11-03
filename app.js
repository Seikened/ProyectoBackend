const express = require('express');
const bodyParser = require('body-parser');
var passport = require("passport");

// Routes
const authRoutes = require('./routers/auth').router;

require('C:/Users/ferna/OneDrive/Documentos/GitHub/ProyectoBackend/routers/auth.js')(passport);

const app = express();
app.use(bodyParser.json());

const port = 3000;

app.get("/", (req, res) => {
    //req es la request, la petición 
    //res es la respuesta
    res.status(200).send("Hello World!")
});
app.use('/auth', authRoutes)   

app.post("/team/pokemons", () => {
    res.status(200).send("Hello World!")
})

app.get('/team', 
    passport.authenticate('jwt', {session: false}), 
(req, res, next) => {
    res.status(200).send('Hello World!')
})

app.delete("/team/pokemon:pokeid", () => {
    res.status(200).send("DELETE Hello World!")
})

app.put("/team", () => {
    res.status(200).send("PUT Hello World!")
})

app.listen(port, () => { 
    console.log("Server started on port " + port);
});

exports.app = app;