var path = require('path')
var express = require('express')
var app = express()

app.use(express.static(path.join(__dirname, 'public')))

// view engine setup
app.engine('art', require('express-art-template'))
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
})
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'art')

// routes
app.get('/', function (req, res) {
  res.render('index', {
      title : 'Hello Express && Art-template'
  })
})

app.listen(3000)
