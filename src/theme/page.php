<?php

add_action( 'wp_enqueue_scripts', function () {
    // wp_enqueue_script('page');
} );

use Timber\Timber;
use Timber\Post;

$page = new Post();
$data = Timber::get_context();

// $data['body_class'] .= " page-map";
$data['page'] = $page;

Timber::render('page.twig' , $data);
