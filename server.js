const express = required('express')
const app = express()
const PORT = 3000

app.get('/items', (req, res) => {
    res.send('retrieve items');
})

app.post('/items', (req, res) => {
    const { name, price } = req.body;
})

const server = app.listen(PORT, () => {
  console.log(`Heyo listening on port ${PORT}`)
})