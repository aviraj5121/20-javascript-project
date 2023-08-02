const express = require('express')
const bodyParser = require("body-parser")
const request = require("request")

const app = express()
const port = 3000

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname));
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/movie.html")
})
app.get('/', (req, res) => {
        res.sendFile(__dirname + "/movie.css")
})
app.post('/suggest', (req,res) => {

    const receivedData = req.body;
    console.log('Received data:', receivedData.name);
    const options = {
        method: 'GET',
        url: 'https://anime-db.p.rapidapi.com/anime',
        qs: {
            page: '1',
            size: '10',
            search: receivedData.name,
        },
        headers: {
            'X-RapidAPI-Key': '693dc4b1a0mshe9e08ea98cbd6f6p12e389jsn887f1d89737c',
            'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
        }
    };

    request(options, function (error, response, body) {
            if (error) throw new Error(error);
            const data  = JSON.parse(body)
            console.log(data)
            res.send(data)
        });
});
app.listen(port, () => {
    console.log('listening on port ${port}')
    
})