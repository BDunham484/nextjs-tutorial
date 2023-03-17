// select the div element with 'app' id
const app = document.getElementById('app');

// //create a new h1 element
// const header = document.createElement('h1');

// //create a new text od for the H1 element
// const headerContent = document.createTextNode(
//     'Develop. Preview. Ship. 🚀',
// );

// //append the tedt to the h1 element
// header.appendChild(headerContent);

// //place the h1 element inside the div
// app.appendChild(header);

ReactDom.render(<h1>Develop. Preview. Ship. 🚀</h1>, app);