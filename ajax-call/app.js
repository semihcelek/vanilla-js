const API_KEY = 'https://dog.ceo/api/breeds/image/random';
const btnDog = document.querySelector('button');
const div = document.querySelector('div');

async function displayDogs() {
  const dogs = await fetch(API_KEY).then((blob) => {
    return blob.json();
  });
  div.innerHTML = `<img src="${dogs.message}"></img>`;
}

btnDog.addEventListener('click', displayDogs);
