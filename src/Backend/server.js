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

app.get('/api/addTask/:task', addTask);

app.get('/api/initialState', initiateState);

app.get('/api/deleteTodoList', initiateState);

app.get('/api/updateHeading/:heading', updateHeading);

app.get('/api/deleteTask/:taskId', deleteTask);

app.get('/api/updateTaskStatus/:taskId', updateTaskStatus);

app.listen(3002, () => console.log('listening to 3002'));
