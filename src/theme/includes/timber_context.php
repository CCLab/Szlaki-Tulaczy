<?php

function get_assets_directory_uri() {

	$template = str_replace( '%2F', '/', rawurlencode( get_template() ) );
	$theme_root_uri = get_theme_root_uri( $template );
	$template_dir_uri = "$theme_root_uri/$template";

	return $theme_root_uri . '/' . explode( '/', $template )[0];

}

add_filter( 'timber/context', 'add_to_context' );

function add_to_context( $context ) {
    $assetsURI = get_assets_directory_uri();
    $context['menu'] = new \Timber\Menu();
    $context['template_uri'] = get_template_directory_uri()."/..";
    $context['img_dir'] = $assetsURI . '/images';

    return $context;
}
