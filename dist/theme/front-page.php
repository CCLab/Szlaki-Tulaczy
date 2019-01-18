<?php

add_action( 'wp_enqueue_scripts', function () {
    wp_enqueue_script('map');
} );

use Timber\Timber;
use Timber\Post;

$post = new Post();
$data = Timber::get_context();

$data['body_class'] .= " page-map";
$data['post'] = $post;
$data['front'] = $post;
$data['phases'] = Timber::get_terms( array('taxonomy' =>'phase', 'hide_empty' => false, 'orderby' => 'slug' ) );
foreach ($data['phases'] as $phase) {
    $data['places'][$phase->slug] = array();
}
$places = Timber::get_posts( array(
    'post_type' => 'place',
    'nopaging' => true,
));
foreach ($places as $place) {
    $place_phases = $place->terms('phase');
    if (isset($place_phases[0])) {
        $data['places'][$place_phases[0]->slug][] = $place;
    }
}

Timber::render( 'index.twig' , $data );
