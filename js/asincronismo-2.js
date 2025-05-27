// Ejemplo 1

// const succes = data => console.log(data);
// const error = error => console.log(error);

// const getUsers = (url, printData, printError) => {
//   const xhr = new XMLHttpRequest();

//   xhr.open('GET', url);

//   xhr.send();

//   xhr.addEventListener('load', () => {
//     if (xhr.status >= 200 && xhr.status < 300) {
//       const data = JSON.parse(xhr.responseText);
//       printData(data);
//     } else {
//       printError('Error en la solicitud.', xhr.status);
//     }
//   });

//   xhr.addEventListener('error', error => {
//     printError(error);
//   });
// };

// getUsers('https://jsonplaceholder.typicode.com/users', succes, error);

// Ejemplo 2

// const succes = data => console.log(data);
// const printError = error => console.log(error);

// const getUsers = url => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', url);

//     xhr.send();

//     xhr.addEventListener('load', () => {
//       if (xhr.status >= 200 && xhr.status < 300) {
//         const data = JSON.parse(xhr.responseText);
//         resolve(data);
//       } else {
//         reject('Error en la solicitud.', xhr.status);
//       }
//     });

//     xhr.addEventListener('error', error => {
//       reject(error);
//     });
//   });
// };

// getUsers('https://jsonplaceholder.typicode.com/users').then(succes).catch(printError);

// Ejemplo 3

// const getUsers = url => {
//   fetch(url)
//     .then(data => data.json())
//     .then(users => console.log(users))
//     .catch(error => console.log(error));
// };

// getUsers('https://jsonplaceholder.typicode.com/users');

// Ejemplo 4

// const getUsers = async url => {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getUsers('https://jsonplaceholder.typicode.com/users');
