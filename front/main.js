const myApp = document.querySelector('.date__container');
const url = 'http://localhost:3001/date';

fetch(url, {mode: 'no-cors'})
.then(data => console.log(data))