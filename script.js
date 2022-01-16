window.onload(getNewBeer());

function getNewBeer() {
  fetch('https://api.punkapi.com/v2/beers/random', {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((json) => {return json[0]})
    .then((obj) => document.getElementById("output").innerHTML = `
      <p>ID: ${obj.id}</p>
      <p>Name: ${obj.name}</p>
      <p>Tag Line: ${obj.tagline}</p>
      <p>Description: ${obj.description}</p>
      <img src="${obj.image_url}">
    `)
    .catch((error) => console.error(error));
}
