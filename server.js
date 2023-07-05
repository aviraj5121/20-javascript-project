const express = require('express')
const bodyParser = require("body-parser")
const request = require("request")

const app = express()
const port = 3000
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/cal.html")
    })

app.post('/', (req,res) => {
    app.use(bodyParser.urlencoded({extended:true}))
    console.log(typeof(req.body.genre))
    const options = {
        method: 'GET',
        url: 'https://ott-details.p.rapidapi.com/search',
        qs: {
            title: req.body.genre,
            page: '1',
        },
        headers: {
            'X-RapidAPI-Key': '693dc4b1a0mshe9e08ea98cbd6f6p12e389jsn887f1d89737c',
            'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
        }
    };
    request(options, function (error, response, body) {
            if (error) throw new Error(error);
            const data = JSON.parse(body)
            console.log(data);
            res.send(data)
    });
});
app.listen(port, () => {
    console.log('listening on port ${port}')
})  