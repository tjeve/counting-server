var express = require('express')
const app = express()

var count = 0

app.get('/', function (req, res, next) {
    res.send("This is the Counter Server")
})

app.post('/increase', function(req, res, next) {
    count += 1
    return res.send(count)
    
})

app.post('/decrease', function(req, res, next) {
    count -= 1
    res.send(count)
})
app.get('/value', function(req, res, next) {
    res.send(count)
})

app.listen(3500, () => console.log("The server is listening on 3500"))

var directions =   `Write a server that keeps track of a counter! 
Initialize a global variable that holds the count (starting at 0). 
Write three routes called POST /increment, POST /decrement, and GET /value. 
The first two should increment and decrement the value respectively and then 
respond with the new counter value. The third route should just respond with 
the current value. Again, verify that your server works with Postman.`