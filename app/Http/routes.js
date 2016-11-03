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

const Route = use('Route');

Route.on('/').render('welcome');

// function * - Generator function
Route.get('/uptime', function * (request, response) {
  response.send({
    version: '1.0.0',
    // process.uptime() gets the seconds since the server started
    uptime: process.uptime(),
  });
});
