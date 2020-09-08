const fetchReq = (url, callback, options) => {
  fetch(url, options)
    .then((x) => x.json())
    .then(callback);
};

const optionsForGet = () => {
  return {
    headers: { 'Content-Type': 'application/json' },
  };
};

const optionsForPost = (content) => {
  return {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(content),
    method: 'POST',
  };
};

module.exports = { fetchReq, optionsForPost, optionsForGet };
