const optionsForPost = (content) => {
  return {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(content),
    method: 'POST',
  };
};

const fetchApis = {
  initiateState: () => fetch('/api/initialState').then((x) => x.json()),
  currentStatus: () => fetch('/api/currentState').then((x) => x.json()),
  deleteTodoList: () => fetch('/api/deleteTodoList', optionsForPost()),
  deleteTask: (id) => fetch('/api/deleteTask', optionsForPost({ id })),
  addTask: (task) => fetch('/api/addTask', optionsForPost({ task })),
  updateTaskStatus: (id) =>
    fetch('/api/updateTaskStatus', optionsForPost({ id })),
  updateHeading: (heading) =>
    fetch('/api/updateHeading', optionsForPost({ heading })),
};
module.exports = { fetchApis };
