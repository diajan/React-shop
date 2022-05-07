@extends('layout.main')

@section('content')
  <!-- Post content-->
  <article>
    <!-- Post header-->
    <header class="mb-4">
      <!-- Post title-->
      <h1 class="fw-bolder mb-1">Welcome to Blog Post!</h1>
      <h2 class="accordion-header ">
        salama day
      </h2>
      <!-- Post meta content-->
      <div class="text-muted fst-italic mb-2">Posted on January 1, 2021 by Start Bootstrap
      </div>
      <!-- Post categories-->
      <a class="badge bg-secondary text-decoration-none link-light" href="#!">Web Design</a>
      <a class="badge bg-secondary text-decoration-none link-light" href="#!">Freebies</a>
    </header>
    <!-- Preview image figure-->
    <figure class="mb-4"><img class="img-fluid rounded" src="https://dummyimage.com/900x400/ced4da/6c757d.jpg"
                              alt="..."/></figure>
    <!-- Post content-->
    <section class="mb-5">
      <p class="fs-5 mb-4">Science is an enterprise that should be cherished as an activity of the free human mind.
        Because it transforms who we are, how we live, and it gives us an understanding of our place in the
        universe.</p>
      <p class="fs-5 mb-4">The universe is large and old, and the ingredients for life as we know it are everywhere, so
        there's no reason to think that Earth would be unique in that regard. Whether of not the life became intelligent
        is a different question, and we'll see if we find that.</p>
      <p class="fs-5 mb-4">If you get asteroids about a kilometer in size, those are large enough and carry enough
        energy into our system to disrupt transportation, communication, the food chains, and that can be a really bad
        day on Earth.</p>
      <h2 class="fw-bolder mb-4 mt-5">I have odd cosmic thoughts every day</h2>
      <p class="fs-5 mb-4">For me, the most fascinating interface is Twitter. I have odd cosmic thoughts every day and I
        realized I could hold them to myself or share them with people who might be interested.</p>
      <p class="fs-5 mb-4">Venus has a runaway greenhouse effect. I kind of want to know what happened there because
        we're twirling knobs here on Earth without knowing the consequences of it. Mars once had running water. It's
        bone dry today. Something bad happened there as well.</p>
    </section>
  </article>

@endsection

@section('sidebar')
    @parent
    <h2>soborii</h2>
@endsection
