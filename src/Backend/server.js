const express = require('express');
const { reducer, initialState } = require('./handler');

let state = initialState();

const app = express();

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

// app.get('api/initialState', (req, res) => {
//   // console.log('hello');
//   // state = initialState();
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.send(JSON.stringify(state));
// });

app.get('/api/addTask/:task', (req, res) => {
  state = reducer(state, { action: 'addTask', task: req.params.task });
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(JSON.stringify(state));
});

app.get('/api/deleteTodoList', (req, res) => {
  state = reducer(state, { action: 'deleteTodoList' });
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(JSON.stringify(state));
});

app.get('/api/updateHeading/:heading', (req, res) => {
  const heading = req.params.heading.replace('%20', ' ');
  state = reducer(state, { action: 'updateHeading', heading });
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(JSON.stringify(state));
});

app.get('/api/deleteTask/:taskId', (req, res) => {
  state = reducer(state, {
    action: 'deleteTask',
    id: Number(req.params.taskId),
  });
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(JSON.stringify(state));
});

app.get('/api/updateTaskStatus/:taskId', (req, res) => {
  state = reducer(state, {
    action: 'updateTaskStatus',
    id: Number(req.params.taskId),
  });
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(JSON.stringify(state));
});

app.listen(3002, () => console.log('listening to 3002'));
