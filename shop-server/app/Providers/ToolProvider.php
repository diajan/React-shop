<?php

namespace App\Providers;

class ToolProvider
{
    public static function CreateSlug($string)
    {
        return str_replace(' ','-',$string);
    }
}
