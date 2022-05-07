<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;


class ProductController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum')->except(['index', 'show']);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::paginate(10);
        foreach ($products as $product) {
            $product['category'] = Category::where('id', $product['category_id'])->first();
            $product['colors'] = json_decode($product['color']);
            unset($product['category_id']);
            unset($product['color']);
        }

        return response($products);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\StoreProductRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProductRequest $request)
    {
        $data = $request->validated();

        $field = Product::create([
            'name' => $data['name'],
            'slug' => $data['name'],
            'description' => $data['description'],
            'price' => $data['price'],
        ]);

        return response($field, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Product $product
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        if (!is_numeric($slug)) {
            $product = Product::where('name', $slug)->firstOrFail();
            return response($product);
        }
        return response(Product::findOrFail($slug));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\UpdateProductRequest $request
     * @param \App\Models\Product $product
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        $data = $request->validated();
        $field = Product::where('id', $product->id)
            ->update($data);

        if (!$field) {
            return response([
                'status' => 422,
                'message' => 'action did failed',
            ]);
        }
        return response([
            'status' => 200,
            'message' => 'field updated (:',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Product $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        $field = $product->delete();
        return response([
            'status' => 200,
            'message' => 'deleted updated (:',
        ]);
    }

    /**
     * search for a name
     *
     * @param \App\Models\Product $product
     * @return \Illuminate\Http\Response
     */
    public function search($name)
    {
        return Product::where('name', 'like', '%' . $name . '%')->get();
    }
}
