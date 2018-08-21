<?php

namespace Tulacze;

class CPT_Places {
    private static function register_cpt() {
        $labels = array(
                'name' => __( 'Miejsca', 'tulacze' ),
                'singular_name' => __( 'Miejsce', 'tulacze' ), 
                'all_items' => __( 'Wszystkie', 'tulacze' ), 
                'add_new' => __( 'Dodaj nowe', 'tulacze' ), 
                'add_new_item' => __( 'Dodaj nowe miejsce', 'tulacze' ), 
                'edit' => __( 'Edytuj', 'tulacze' ), 
                'edit_item' => __( 'Edytuj Miejsce', 'tulacze' ), 
                'new_item' => __( 'Nowe Miejsce', 'tulacze' ), 
                'view_item' => __( 'Zobacz Miejsce', 'tulacze' ), 
                'search_items' => __( 'Przeszukaj Miejsca', 'tulacze' ), 
                'not_found' =>  __( 'Brak Miejsc', 'tulacze' ), 
                'not_found_in_trash' => __( 'W śmietniku brak Miejsc', 'tulacze' ), 
                'parent_item_colon' => ''
        );

        register_post_type( 'places',
                array( 'labels' => $labels, 
                'description' => __( 'Miejsca', 'tulacze' ), 
                'public' => false,
                'publicly_queryable' => true,
                'exclude_from_search' => false,
                'show_ui' => true,
                'query_var' => true,
                'menu_position' => 22,
                'supports' => array('title', 'author')
                )
        ); 
    }

    private static function register_fields() {

    }
    
    public static function register() {
        self::register_cpt();
    }


}
