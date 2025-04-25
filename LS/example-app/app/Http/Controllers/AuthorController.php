<?php

namespace App\Http\Controllers;

use App\Models\Author;
use GuzzleHttp\Psr7\Message;
use Illuminate\Http\Request;

class AuthorController extends Controller
{
    
     public function authorWithBooks() {
        return Author::with('books')->get();
        
     }
    public function index()
    {
        responseJson(Author::all());
        
       
    }


    public function store(Request $request){
        try {
            $author = new Author();
            $author ->name = $request->name;
            $author ->published_book = $request->published_book;
            $author ->DOB = $request->DOB;
            $author ->password = bcrypt($request->password);

            $author->is_dead = true;
            $author->save();
            response()->json($author,201);
            return response()->json(['Message' => 'Author created successfully'],200);

                 }catch (\Exception $th){
                    return response()->json(['Message' => 'Author not created'],400);
                 }
    
    }
    public function show(Author $author)
    {
       return $author;
       //select * from authors where id = $author
    }

 
    public function update(Request $request, Author $author)
    {
       
        try {
            request()->validate([
                'name' => 'required',
                'published_book' => 'required',
                'DOB' => 'required',
            ]);
        

            
            // if(!5==5){

            // }
            // if(!5==5){
               
            // }



            if($request->author_id == $author->id){
                $author->name = $request->name;
                $author->published_book = $request->published_book;
                $author->DOB = $request->DOB;
                $author->save();

                response()->json($author,201);

               
            }
                responseJson("Unauthorised",401);
          
            }catch (\Throwable $th){
                    return response()->json(['Message' => 'Author not updated'],400);
             }
        
    }


    public function destroy(Author $author)
    {
        return $author->delete();
        // return Author::destroy($author);
        
    }
}
