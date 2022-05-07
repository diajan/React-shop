<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::controller(ProductController::class)->group(function () {
    Route::apiResource('/products', ProductController::class);
    Route::get('/products/search/{name}', [ProductController::class, 'search']);
});

Route::controller(CategoryController::class)->group(function () {
    Route::apiResource('/categories', CategoryController::class)->except(['show']);
});

