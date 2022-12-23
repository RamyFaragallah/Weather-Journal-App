const express = require('express');
const cors = require('cors');
const app = new express();

/* Dependencies */
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('website'));


app.use(cors);
const PORT = 3030;
const server = app.listen(PORT, () => {
    console.log('server is workin');
    console.log('the port is ' + PORT);
})

const projectData = {};

app.get('/', (request, response) => {
    response.send('Hellow fucking world');
});



app.get('/all', sendData);


function sendData(request, response) {
    response.send(projectData);
};


const movies = [];
app.post('/addMovie', addMovie);

function addMovie(req, res) {
    movies.push(req.body);
    console.log(movies);
}