const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const PORT = 3000

app.use(bodyParser.json())

const items = [
  { id: '1', name: 'book', price: '$11.99' },
  { id: '2', name: 'pen', price: '$2.12' },
  { id: '3', name: 'eraser', price: '$ 1.00' },
  { id: '4', name: 'sharpie', price: '$3.50' }
];

//GET /items
app.get('/items', (req, res) => {
  res.send(items);
});

// POST /items
app.post('/items', (req, res) => {
  const { name, price } = req.body;
  const id = (items.length + 1).toString();
  const newItem = { id: '5', name: 'highlighter', price : '$2.56'};
  items.push(newItem);
  res.send(newItem);
});


// GET / items/:id
app.get('/items/:id', (req, res) => {
  try {
    const id = req.params.id;
    const item = items.find(item => item.id === id);
    if (item) {
      res.send(item);
    } else {
      throw new Error('Item is not here');
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
});

//PUT /items/id:
app.put('/items/:id', (req, res) => {
  try {
  const id = req.params.id;
  const { name, price } = req.body;
  const itemIndex = items.findIndex(item => item.id === id);
  if (itemIndex !== -1) {
    items[itemIndex] = { id, name, price };
    res.send(items[itemIndex]);
  } else {
    throw new Error('Item is not here');
  }
  } catch (error) {
    res.status(404).send(error.message);
  }
});

//Delete /items/:id

app.delete('/items/:id', (req, res) => {
 try {
  const id = req.params.id;
  const itemIndex = items.findIndex(item => item.id === id);
  if (itemIndex !== -1) {
    const deletedItem = items.splice(itemIndex, 1)[0];
    res.send(deletedItem);
  } else {
    throw new Error('Item is not here');
  }
 } catch (error) {
  res.status(404).send(error.message);
 }
});

const server = app.listen(PORT, () => {
  console.log(`Heyo listening on port ${PORT}`)
})