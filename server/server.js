const express = require('express');
const cors = require('cors');

const { User } = require('./db');

const app = express();
app.use(cors())
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT} Have a nice day.`));

app.get('/users', (req, res) => {
  User.find({}).then(data => res.json(data))
});

app.get('/users/:name', (req, res) => {
  User.findOne({ name: req.params.name }).then(data => res.json(data))
});

app.post('/users', (req, res) => {
  this.body = '';
  req.on('data', (chunck) => this.body+= chunck);
  req.on('end', () => {
    try {
      this.body = JSON.parse(this.body);
      User.create(this.body)
        .then(data => res.json(data))
        .catch(err => res.json(err))
    } catch (e) {
      res.status(500);
      res.send('Server error');
    }


  })
})

app.delete('/users/:id', (req, res) => {
  const id = req.params.id;
  User.remove({ _id: id }).then(data => res.json(data))
})

app.patch('/users/:id', (req, res) => {
  const _id = req.params.id;
  this.body = '';
  req.on('data', (chunck) => this.body+= chunck);
  req.on('end', () => {
    this.body = JSON.parse(this.body);
    User.findOneAndUpdate({ _id }, this.body, { "new": true }).then(r => res.json(r))
  })
})
