
function fetchData(key) {
  return new Promise((resolve, reject) => {
    fetch(`https://api.example.com/${key}`)
      .then(response => {
        if (!response.ok)
          throw new Error('...');
        return response.json();
      })
      .then(data => { resolve(data); })
      .catch(error => { reject(error); })
  })
}
