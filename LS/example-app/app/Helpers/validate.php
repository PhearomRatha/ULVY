<?php

use Illuminate\Database\Migrations\Migration;

function validateAuthor($request)
{
    return $request->validate($request -> all());
}