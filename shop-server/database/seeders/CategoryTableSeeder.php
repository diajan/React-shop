<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = ['اپل', 'سامسونگ', 'شیائومی'];

        foreach (range(1, 3) as $index) {
            Category::create([
                'name' => $categories[$index - 1]
            ]);
        }
    }
}
