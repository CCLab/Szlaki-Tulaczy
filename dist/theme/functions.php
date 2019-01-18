<?php

require_once( __DIR__ . '/../vendor/autoload.php');

\Timber\Timber::$dirname = array('templates');

add_action( 'after_setup_theme', 'crb_load' );
function crb_load() {
    \Carbon_Fields\Carbon_Fields::boot();
}

\Superskrypt\WordpressThemeBase\WordpressThemeBase::setupTheme();

include "includes/cpt_place.php";
Tulacze\CPT_Place::register();

include "includes/page.php";
Tulacze\Page::register();

include "includes/enqueue.php";

require "includes/twig_filters.php";
new Tulacze\TwigFilters();

require "includes/timber_context.php";
