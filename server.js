var express = require('express')
var path = require('path')

var app = express()
app.set('port', (process.env.PORT || 5000))

app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname)));

var dateipfad = path.join(__dirname, 'public', 'index.html')
//var dateipfad = path.join(__dirname, 'index.html')
 
app.get('/', function(request, response) {
    response.sendFile(dateipfad)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
