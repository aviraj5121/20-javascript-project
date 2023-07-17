const express = require("express")
const app = express()
const request = require("request")
const bodyParser = require("body-parser")
const port = 3000

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/songAPI.html")
    })
app.post('/weather', (req ,res)=> {
    const name = req.body.song
    const options = {
        method: 'GET',
        url: 'https://genius-song-lyrics1.p.rapidapi.com/search/',
        qs: {
            q: name,
            per_page: '10',
            page: '1'
        },
        headers: {
            'X-RapidAPI-Key': '693dc4b1a0mshe9e08ea98cbd6f6p12e389jsn887f1d89737c',
            'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
        }
    };
    request(options, function (error, response, body) {
        if (error) {
            throw new Error(error);
        }
        const data = JSON.parse(body);
        let table = '<table>';
        table += '<tr><th>Title</th><th>Artist</th><th>Image</th><th>Lyrics Url</th></tr>';
        
  if (data && data.hits && data.hits.length > 0) {
    data.hits.forEach((hit) => {
      const song = hit.result;
      table += `
        <tr>
          <td >${song.title}</td>
          <td >${song.artist_names}</td>
          <td>
            <img src="${song.header_image_thumbnail_url}" alt="Song Image">
          </td>
          <td><a href="${song.url}">Lyics Url</a></td>
        </tr>`;
    });
  } else {
    table += '<tr><td colspan="3">No songs found</td></tr>';
  }

  table += '</table>';
  console.log(data.hits)
        res.send(table);
    });
    });
    
    app.listen(port, () => {
        console.log('Listening on port ' + port);
    });