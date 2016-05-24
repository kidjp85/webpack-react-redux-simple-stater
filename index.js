var express = require('express');
var app = express();
var compression = require('compression')

app.use(compression());
app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// New change to support using browserHistory (react-router);
app.get('*', function (request, response){
  response.render('pages/index');
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


