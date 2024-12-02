<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//tarea 1
Route::get('/saludo/{nombre}', function ($nombre) {
    
    if (strlen($nombre) < 3) {
        return response("El nombre debe tener más de 3 caracteres, ingrese un nombre valido", 400);
    }
    
    return "Hola, $nombre, bienvenido al sistema.";
});
