// Ejemplo 1

// setTimeout(() => console.log('ASINCRONO'), 0);
// console.log(1);
// console.log(2);
// console.log(3);

/*
Ejemplo 2
Se necesita crear una aplicación que muestre por consola una simulación de la preparación de tortitas paso a paso. Todas las tareas tendrán una espera de 1 segundo. Cada función llamará al siguiente paso.

Este ejemplo simula cómo se trabajaba con el asincronismo en sus inicios 
*/

// const servirTortitas = () => {
//   setTimeout(() => {
//     console.log('TORTITAS LISTAS!!');
//   }, 1000);
// };

// const freirTortitas = () => {
//   setTimeout(() => {
//     console.log('Freir Tortitas');
//     servirTortitas();
//   }, 1000);
// };

// const reposarMasa = () => {
//   setTimeout(() => {
//     console.log('Reposar Masa');
//     freirTortitas();
//   }, 1000);
// };

// const mezclarIngredientes = () => {
//   setTimeout(() => {
//     console.log('Mezclar Ingredientes');
//     reposarMasa();
//   }, 1000);
// };

// const prepararIngredientes = () => {
//   setTimeout(() => {
//     console.log('Preparar Ingredientes');
//     mezclarIngredientes();
//   }, 1000);
// };

// prepararIngredientes();

/*
Ejemplo 3
Añade simulación de errores
*/

// const servirTortitas = () => {
//   setTimeout(() => {
//     console.log('TORTITAS LISTAS!!');
//     if (Math.random() < 0.2) console.log('ERROR AL SERVIR TORTITAS');
//   }, 1000);
// };

// const freirTortitas = () => {
//   setTimeout(() => {
//     console.log('Freir Tortitas');
//     if (Math.random() < 0.2) console.log('ERROR AL FREIR TORTITAS');
//     else servirTortitas();
//   }, 1000);
// };

// const reposarMasa = () => {
//   setTimeout(() => {
//     console.log('Reposar Masa');
//     if (Math.random() < 0.2) console.log('ERROR AL REPOSAR LA MASA');
//     else freirTortitas();
//   }, 1000);
// };

// const mezclarIngredientes = () => {
//   setTimeout(() => {
//     console.log('Mezclar Ingredientes');
//     if (Math.random() < 0.2) console.log('ERROR AL MEZCLAR INGREDIENTES');
//     else reposarMasa();
//   }, 1000);
// };

// const prepararIngredientes = () => {
//   setTimeout(() => {
//     console.log('Preparar Ingredientes');
//     if (Math.random() < 0.2) console.log('ERROR AL PREPARAR INGREDIENTES');
//     else mezclarIngredientes();
//   }, 1000);
// };

// prepararIngredientes();

/* 
  Ejemplo 4 Unifica las funciones
*/

// const realizarTarea = (tarea, siguienteTarea) => {
//   setTimeout(() => {
//     console.log(tarea);
//     if (Math.random() < 0.5) {
//       console.error(`Error al ${tarea.toLowerCase()}`);
//     } else {
//       siguienteTarea();
//     }
//   }, 1000);
// };

// const prepararIngredientes = next => {
//   realizarTarea('Preparar ingredientes', next);
// };

// const mezclarIngredientes = next => {
//   realizarTarea('Mezclar ingredientes', next);
// };

// const reposarMasa = next => {
//   realizarTarea('Reposar masa', next);
// };

// const freírTortitas = next => {
//   realizarTarea('Freír tortitas', next);
// };

// const servirTortitas = () => {
//   realizarTarea('¡TORTITAS LISTAS!');
// };

// const prepararTortitas = () => {
//   prepararIngredientes(() => {
//     mezclarIngredientes(() => {
//       reposarMasa(() => {
//         freírTortitas(() => {
//           servirTortitas(() => console.error);
//         });
//       });
//     });
//   });
// };

// prepararTortitas();

/* 
  Ejemplo 5 Promesas
*/

// const realizarTarea = tarea => {
//   return new Promise((resolve, reject) => {
//     console.log(tarea);
//     setTimeout(() => {
//       if (Math.random() < 0.3) {
//         reject(new Error(`Error en ${tarea}`));
//       } else {
//         resolve();
//       }
//     }, 1000);
//   });
// };

// const prepararTortitas = () => {
//   realizarTarea('Preparar ingredientes')
//     .then(() => realizarTarea('Mezclar ingredientes'))
//     .then(() => realizarTarea('Servir tortitas'))
//     .then(() => console.log('TORTITAS LISTAS!!'))
//     .then(() => realizarTarea('Freir tortitas'))
//     .catch(error => console.err(error));
// };

// prepararTortitas();

/* 
  Ejemplo 6 Async await
*/

// const realizarTarea = tarea => {
//   return new Promise((resolve, reject) => {
//     console.log(tarea);
//     setTimeout(() => {
//       if (Math.random() < 0.1) {
//         reject(new Error(`Error en ${tarea}`));
//       } else {
//         resolve();
//       }
//     }, 1000);
//   });
// };

// const prepararTortitas = async () => {
//   try {
//     await realizarTarea('Preparar ingredientes');
//     await realizarTarea('Mezclar ingredientes');
//     await realizarTarea('Freir tortitas');
//     await realizarTarea('Servir tortitas');
//     console.log('TORTITAS LISTAS!!');
//   } catch (error) {
//     console.error(error);
//   }
// };

// prepararTortitas();
