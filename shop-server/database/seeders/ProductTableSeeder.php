<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $name = ['گوشی آیفون', 'گوشی سامسونگ نوت', 'گوشی شیائومی ردمی'];
        $id = [1, 2, 3];
        $model = [11, 8, 8];
        $desc = ['گوشی آیفون محصول شرکت اپل', 'گوشی سامسونگ گلکسی نوت، تلفن همراه', 'گوشی شیائومی مدل ردمی محصول کشور چین'];
        $img = [
            [
                'https://www.refurbished.nl/cache/images/iphone-11-groen_600x600_BGresize_16777215-tj.png',
                'https://www.refurbished.nl/cache/images/iphone-x-zwart_600x600_BGresize_16777215-tj.png'
            ],
            [
                'https://www.seekpng.com/png/detail/69-694469_the-new-samsung-galaxy-note9-samsung-galaxy-note.png',
                'https://www.kindpng.com/picc/m/454-4547041_samsung-note-10-plus-hd-png-download.png'
            ],
            [
                'https://i01.appmifile.com/webfile/globalimg/nl/J19-Grey-800x800.png',
                'https://i01.appmifile.com/webfile/globalimg/nl/white-800x800.png'
            ]

        ];
        $p = [130000, 860000, 900000, 500000];
        $pallete = [
            ['orange', 'pink', 'white', 'black'],
            ['orange', 'blue',],
            ['red', 'white', 'black', 'pink'],
            ['red', 'white', 'yellow'],
            ['blue', 'green', 'red', 'yellow'],
        ];

        $count = 5; // count * 6 => 6 products
        foreach (range(1, $count) as $value) {
            foreach (range(0, 1) as $index) {
                foreach (range(0, 2) as $item) {
                    $c = $item + $model[$item] + $index;
                    Product::create([
                        'name' => "$name[$item] $c",
                        'category_id' => $id[$item],
                        'description' => $desc[$item],
                        'color' => json_encode($pallete[random_int(0, 4)]),
                        'image' => $img[$item][$index],
                        'price' => $p[random_int(0, 3)]
                    ]);
                }
            }
        }
    }
}
