<?php

add_action( 'wp_enqueue_scripts', function () {
    wp_enqueue_script('map');
} );

use Timber\Timber;
use Timber\Post;

$post = new Post();
$data = Timber::get_context();
$data['post'] = $post;
$data['front'] = $post;
$templates = array( 'index.twig' );

Timber::render( $templates, $data );
