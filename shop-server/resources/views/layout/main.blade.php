<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <meta name="description" content=""/>
    <meta name="author" content=""/>
    <title>Blog Post - Start Bootstrap Template</title>

    <!-- Core theme CSS (includes Bootstrap)-->
    <link href="/css/styles.css" rel="stylesheet"/>
</head>

<body>
@include('generic.header')
<!-- Page content-->
<div class="container mt-5">
    <div class="row">
        <div class="col-lg-8">
            @yield('content')
        </div>
        <div class="col-lg-4">
            @section('sidebar')
                @include('generic.sidebar')
            @show
        </div>
    </div>
</div>
@include('generic.footer')
<!-- Bootstrap core JS-->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
<!-- Core theme JS-->
<script src="/js/scripts.js"></script>
</body>

</html>
