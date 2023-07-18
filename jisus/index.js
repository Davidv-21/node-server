const express = require('express');
const app = express();

const tasks = [
  {
    id: 1,
    description: 'Hacer la compra',
    completed: false
  },
  {
    id: 2,
    description: 'Limpiar la casa',
    completed: true
  },
  {
    id: 3,
    description: 'Hacer ejercicio',
    completed: false
  }
];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
