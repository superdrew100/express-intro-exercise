const express = require('express'); // Loading the express module on our server
const app = express(); // Creates a new instance of express on our server
const shops = []

//-----functions---------------------------------------
function getshops() {
    return shops
}

function getShop (index) {
    return shop[(index +1)]
}

function addShop (newShop) {
//return index of new shop??
}

function deleteShop (index) {

}

function updateShop (index, shop) {

}




app.get('/shops', (req, res) => {
    res.send(shops)
})
​
app.get('/shops/:index', (req, res) => {
    const singleshop = shops[req.params.index]
    res.send(singleshop)
})

app.post('/shops', (req, res) => {
    console.log(req.body)
    shops.push(req.body.name)
    res.send(req.body)
})​

app.delete('/shops/:index', (req, res) => {
    shops.splice(req.params.index, 1)
    res.send(shops)
})

app.put('/shops/:index', (req, res) => {
    shoes[index] = res.body.name
    res.send(req.body)
})
​
​





const port = process.env.PORT || 3000; // tells the server where to listen for requests

app.listen(port, () => {
  // tells the server where to listen for requests on port 3000

  console.log('hello-express is listening on port ' + port);
}); // actualizing the line above