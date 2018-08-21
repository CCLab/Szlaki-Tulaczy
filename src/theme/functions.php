<?php

require_once( __DIR__ . '/../vendor/autoload.php');

\Timber\Timber::$dirname = array('templates');

include "includes/cpt_places.php";

Tulacze\CPT_Places::register();

include "includes/enqueue.php";

