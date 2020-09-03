const express = require('express')
const app = express()
const path = require('path')
const urllib = require('urllib')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))


app.get('/sanity', function (req, res) {
    res.send("ok")
})

app.get('/recipes/:ingredient', function (req, res) {
    const ingredient = req.params.ingredient
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function (err, response) {
        const parsey = JSON.parse(response.toString())
        const data = parsey.results
        res.send(data);
    })
})


const port = 8080
app.listen(port, function () {
    console.log(`running on port ${port}`);
})