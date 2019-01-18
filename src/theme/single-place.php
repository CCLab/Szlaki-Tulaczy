<?php

use Timber\Timber;
use Timber\Post;

$post = new Post();
$data = Timber::get_context();

$data['place'] = $post;

Timber::render( 'single-place.twig' , $data );
