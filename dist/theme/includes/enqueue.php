<?php
function superskrypt_scripts_and_styles() {
	$path_to_css = get_template_directory_uri() . '/../css/';
    wp_enqueue_style( 'main', $path_to_css . 'main.css', array(), rand());

    $path_to_js = get_template_directory_uri() . '/../js/';
    wp_register_script( 'map', $path_to_js . 'map.js', array(), rand(), true);
    wp_enqueue_script( 'main', $path_to_js . 'main.js', array(), rand(), true);
}
add_action( 'wp_enqueue_scripts', 'superskrypt_scripts_and_styles', 5);
