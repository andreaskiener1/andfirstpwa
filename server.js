var express = require('express')
var path = require('path')

var app = express()
app.set('port', (process.env.PORT || 5000))

app.use(express.static(path.join(__dirname, 'public')));

var dateipfad = path.join(__dirname, 'public', 'index.html')
 
app.get('/', function(request, response) {
    response.sendFile(dateipfad)
   //response.send('<body> <h2>Berechne das Menschenalter</h2> <form name="myformular"> <label>Hund: </label><input type="radio" name="auswahl" value="hund" /> <label>Katze: </label><input type="radio" name="auswahl" value="katze" /> <label>Kaninchen: </label><input type="radio" name="auswahl" value="kaninchen" /> <label>Alter: </label> <input type="text" name="alter" /> <button type="button" onclick="berechnen()">Berechne</button> </form> <div class="label">Menschenalter: </div> <div id="ausgabe" class="label"></div> </body>')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
