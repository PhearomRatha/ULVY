<?php

namespace App\Http\Controllers;

use App\Models\classroom;
use Illuminate\Http\Request;

class ClassroomController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return classroom::all();	
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {


        try {
            $request->validate([
                'name' => 'required|string',
                'grade' => 'required|string',
                'total_student' => 'required|integer',
                'max_capacity' => 'required|integer:min:3|max:500',
            ]);
            $classroom = new classroom();
            $classroom ->name = $request->name;
            $classroom ->total_student = $request->total_student;
            $classroom ->grade = $request->grade;
            $classroom ->max_capacity = $request->max_capacity;
            $classroom->save();
            response()->json($classroom,201);
            // return response()->json(['Message' => 'Classroom created successfully'],201);

         }catch (\Exception $th){
                    return response()->json(['Message' => $th -> getMessage()],401);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(classroom $classroom)
    {
        return $classroom;
        // return classroom::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, classroom $classroom, string  $id)
    {
        try {
            request()->validate([
                'name' => 'required',
                'grade' => 'required',
                'total_student' => 'required',
                'max_capacity' => 'required',

            ]);
            $classroom  = classroom::findOrFail($id);
            $classroom->name = $request->name;
            $classroom->grade = $request->grade;
            $classroom->total_student = $request->total_student;
            $classroom->max_capacity = $request->max_capacity;
    
            $classroom->save();

            response()->json($classroom,200);
            // return response()->json(['Message' => 'Classroom updated successfully'],200);

         }catch (\Throwable $th){
                    return response()->json(['error' => $th->getMessage()],400);
         }
    }

    /**
     * Remove the specified resource from storage.
     */         
    public function destroy(string $id )
    {
        try{
            $classroom = classroom::findOrFail($id);
            $classroom -> delete();
            responseJson('User deleted',200);
        }
        catch(\Throwable $th){
            responseJson($th->getMessage(),400);
        }
    }
}
