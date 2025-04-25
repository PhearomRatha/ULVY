<?php

namespace App\Http\Controllers;

use App\Models\book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return book::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $request -> validate([
                'published_at' => 'required',
                'title' => 'required',
                'author_id' => 'required'
            ]);
            $book = new book();
            $book->published_at = $request->published_at;
            $book->title = $request->title;
            $book->author_id = $request->author_id;
            $book->save();
            responseJson($book,null);
            $book->save();
            return response()->json(['Message' => 'Book created successfully'], 200);
        } catch (\Throwable $th) {
            return response()->json(['Message' => 'Book not created'], 400);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(book $book)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, book $book)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(book $book)
    {
        //
    }
}
