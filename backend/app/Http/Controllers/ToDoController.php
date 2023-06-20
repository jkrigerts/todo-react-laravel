<?php

namespace App\Http\Controllers;

use App\Models\ToDo;

class ToDoController extends Controller
{
    public function getAllTasks() {
        return ToDo::all();
    }

}
