const express = require('express');
const {
  initiateState,
  addTask,
  updateHeading,
  deleteTask,
  updateTaskStatus,
} = require('./handler');

const app = express();

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/initialState', initiateState);

app.post('/api/addTask', addTask);

app.post('/api/deleteTodoList', initiateState);

app.post('/api/updateHeading', updateHeading);

app.post('/api/deleteTask', deleteTask);

app.post('/api/updateTaskStatus', updateTaskStatus);

app.listen(3002, () => console.log('listening to 3002'));
