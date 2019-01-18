<?php

namespace Tulacze;

use Twig\TwigFilter;

class TwigFilters
{
    public function __construct() {
        add_filter('timber/twig', array($this, 'addFilters'));
    }

    public function addFilters($twig) {
        $twig->addFilter(new TwigFilter('sqrt', 'sqrt'));
        $twig->addFilter(new TwigFilter('ns_to_percent', array($this, 'ns_to_percent')));
        $twig->addFilter(new TwigFilter('ew_to_percent', array($this, 'ew_to_percent')));
        return $twig;
    }

    public function ns_to_percent($ns) {
        return $ns;
    }

    public function ew_to_percent($ew) {
        return $ew;
    }
}
