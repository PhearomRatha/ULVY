<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Author;

class AuthorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Author::create([
            'name' => 'John Doe',
            'published_books' => ['Laravel Basics', 'Advanced PHP'], // Pass as an array
            'is_dead' => false,
            'DOB' => '1985-05-10',
            'national' => 'American'
        ]);
    }
}
