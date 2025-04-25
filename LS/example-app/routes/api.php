<?php

use App\Http\Controllers\AuthorController;
use App\Http\Controllers\ClassroomController;
use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;

Route::apiResource('task', TaskController::class);
Route::apiResource('author', AuthorController::class);
Route::apiResource('classroom', ClassroomController::class);
