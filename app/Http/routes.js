'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

// Load the Adonis Router
const Route = use('Route');
// Get the node-fetch package from node_modules
const fetch = require('node-fetch');

Route.on('/').render('welcome');

// function * - Generator function
Route.get('/uptime', function * (request, response) {
  response.send({
    version: '1.0.0',
    // process.uptime() gets the seconds since the server started
    uptime: process.uptime(),
  });
});

Route.get('/netflix', function * (request, response) {
  // Look at the query param "q" for the search title
  // or default to "Gossip Girl" if no query parm
  // is sent
  const searchTerm = request.input('q') || 'Gossip Girl';

  // fetch(`http://netflixroulette.net/api/api.php?title=${searchTerm}`)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     response.send(data);
  //   });

  // Wait for fetch to finish and set "netflixResponse" (called "res" in promise chain above)
  const netflixResponse = yield fetch(`http://netflixroulette.net/api/api.php?title=${searchTerm}`);
  // Wait for json parsing and set to "netflixData" (called "data" in promise chain above)
  const netflixData = yield netflixResponse.json();
  console.log('From yield', netflixData);

  response.send(netflixData);
});
