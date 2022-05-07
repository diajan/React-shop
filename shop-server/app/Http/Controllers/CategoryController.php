<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;

class CategoryController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum')->except(['index']);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */


    public function index()
    {
        $categories = Category::paginate();
        return response($categories);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\StoreCategoryRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCategoryRequest $request)
    {
        $data = $request->validated();
        $field = Category::create([
            'name' => $data['name']
        ]);
        return response($field, 201);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\UpdateCategoryRequest $request
     * @param \App\Models\Category $category
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCategoryRequest $request, Category $category)
    {
        $data = $request->validated();
        $field = Category::where('id', $category->id)->update($data);

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
     * @param \App\Models\Category $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        $field = $category->delete();
        if (!$field) {
            return response([
                'status' => 422,
                'message' => 'action did failed',
            ]);
        }
        return response([
            'status' => 204,
            'message' => 'field deleted (:',
        ], 204);
    }
}
