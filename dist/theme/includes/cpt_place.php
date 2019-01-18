<?php

namespace Tulacze;

use Carbon_Fields\Container\Container;
use Carbon_Fields\Field\Field;

class CPT_Place {
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

        register_post_type( 'place',
                array( 'labels' => $labels,
                'description' => __( 'Miejsca', 'tulacze' ),
                'show_ui' => true,
                'query_var' => true,
                'publicly_queryable' => true,
                'menu_position' => 22,
                'supports' => array('title')
                )
        );
    }

    private static function register_taxonomies() {
        register_taxonomy( 'phase',
            array( 'place' ),
            [
                'hierarchical' => false,
                'labels' => [
                    'name' => __( 'Etapy' ),
                    'singular_name' => __( 'Etap' ),
                    'search_items' =>  __( 'Wyszukaj etap' ),
                    'all_items' => __( 'Wszyskie etapy' ),
                    'edit_item' => __( 'Edytuj etap' ),
                    'update_item' => __( 'Aktualizuj etap' ),
                    'add_new_item' => __( 'Dodaj etap' ),
                    'new_item_name' => __( 'Nazwa etapu' ),
                    'separate_items_with_commas' => __('To miejsce jest miejcem dojścia w etapie:'),
                    'choose_from_most_used' => __('Wybierz z listy etapów'),
                ],
                'show_admin_column' => true,
                'show_ui' => true,
                'show_in_nav_menus' => false,
                'query_var' => true,
            ]
        );
    }

    public static function register_fields() {
        self::register_container_place_general_data();
        self::register_container_place_details();
        self::register_container_path_details('tul_paths_entry', __('Szczegóły szlaków dojścia'));
        self::register_container_path_details('tul_paths_exit', __('Szczegóły szlaków wyjścia'));
        self::register_container_remembrance_details();
        self::register_container_phase_details();
    }

    private static function register_container_place_general_data() {
        Container::make( 'post_meta', __( 'Podstawowe dane' ) )
        ->where( 'post_type', '=', 'place' )
        ->set_context( 'side' )
        ->add_fields( array(
            Field::make( 'text', 'tul_size', __( 'Liczba tułaczy' ) )
                ->set_attribute( 'type', 'number' )
                ->set_required( true ),
            Field::make( 'text', 'tul_position_ns', __( 'Współrzędna NS' ) )
                ->set_help_text( __('liczba od 0 do 100, procent wysokości mapy') )
                ->set_attribute( 'type', 'number' )
                ->set_attribute( 'min', '0' )
                ->set_attribute( 'max', '100' )
                ->set_attribute( 'step', '.1' )
                ->set_required( true ),
            Field::make( 'text', 'tul_position_ew', __( 'Współrzędna EW' ) )
                ->set_help_text( __('liczba od 0 do 100, procent szerokości mapy') )
                ->set_attribute( 'type', 'number' )
                ->set_attribute( 'min', '0' )
                ->set_attribute( 'max', '100' )
                ->set_attribute( 'step', '.1' )
                ->set_required( true ),
        ) );
    }

    private static function register_container_place_details() {
        Container::make('post_meta', __('Szczegóły miejsca'))
        ->where ('post_type', '=', 'place')
        ->add_fields( array(
            Field::make('text', 'tul_country', __('Kraj'))->set_required(true),
            Field::make('text', 'tul_place_count', __('Liczba deportowanych'))->set_required(true),
            Field::make('text', 'tul_place_who', __('Skład deportowanych'))->set_required(true),
            Field::make( 'complex', 'tul_place_other', __( 'Inne' ) )
                ->add_fields( array(
                    Field::make('text', 'desc', 'Opis'),
                    Field::make('text', 'text', 'Tekst'),
                )),
            Field::make('textarea', 'tul_place_text', __('Tekst'))->set_required(true),
        ))
        ->add_fields(self::get_gallery_fields('tul_place_photos'))
        ;
    }

    private static function get_gallery_fields($field_name) {
        return array(
            Field::make('media_gallery', $field_name, __('Galeria zdjęć')),
            Field::make('text', "${field_name}_caption", __('Galeria zdjęć – podpis')),
        );
    }

    private static function get_audio_fields($field_name, $conditional) {
        return array(
            Field::make('image', $field_name, __('Nagranie audio'))->set_type('audio')->set_conditional_logic($conditional),
            Field::make('text', "${field_name}_caption", __('Nagranie audio – podpis'))->set_conditional_logic($conditional),
        );
    }

    private static function register_container_path_details($field_name, $container_title) {
        Container::make('post_meta', $container_title)
        ->where ('post_type', '=', 'place')
        ->add_fields( array(
            Field::make( 'complex', $field_name, __( 'Szlaki' ) )
                ->add_fields(array(
                    Field::make('text', "title", __('Tytuł'))->set_required(true),
                    Field::make('text', "date", __('Data')),
                    Field::make('text', "from", __('Trasa - wyjście'))->set_required(true),
                    Field::make('text', "to", __('Trasa – dojście'))->set_required(true),
                    Field::make('text', "count", __('Liczba deportowanych'))->set_required(true),
                    Field::make('textarea', "text", __('Tekst')),
                )),
        ))
        ->add_fields(self::get_gallery_fields("${field_name}_tul_path_photos"))
        ;
    }

    private static function register_container_remembrance_details() {
        Container::make('post_meta', __('Szczegóły wspomnień'))
        ->where ('post_type', '=', 'place')
        ->add_fields(array(
            Field::make('complex', 'tul_remembrance', __('Rozdziały'))
                ->add_fields(array(
                    Field::make('text', 'title', __('Tytuł'))->set_required(true),
                    Field::make('complex', 'quotes', __('Wspomnienia'))
                        ->add_fields(array_merge(array(
                            Field::make( 'checkbox', 'is_audio', __( 'Dźwiękowy?' ) ),
                            Field::make('text', 'author', __('Autor cytatu'))->set_required(true),
                            Field::make('text', 'ref', __('Sygnatura')),
                            Field::make('textarea', 'quote', __('Cytat'))->set_conditional_logic(array(array('field' => 'is_audio', 'value' => 1, 'compare' => '!='))),
                        )
                        ,
                        self::get_audio_fields('audio', array(array('field' => 'is_audio', 'value' => 1, 'compare' => '=')))
                        ))
                    ,
                    Field::make('urlpicker', 'link', __('Link')),
                )),
            Field::make('association', 'tul_exiles', __('Tułacze'))
                ->set_types(array(
                    array(
                        'type' => 'post',
                        'post_type' => 'page',
                    ),
                )),
        ));
    }

    private static function register_container_phase_details() {
        Container::make( 'term_meta', __( 'Dane etapu' ) )
        ->where( 'term_taxonomy', '=', 'phase' )
        ->add_fields( array(
            Field::make( 'text', 'tul_time', __( 'Czas' ) )
                ->set_required( true ),
            Field::make( 'text', 'tul_subtitle', __( 'Podtytuł' ) )
                ->set_required( true ),
            Field::make( 'complex', 'tul_stats', __( 'Statystyki' ) )
                ->setup_labels(array(
                    'plural_name' => 'statystyk',
                    'singular_name' => 'statystykę',
                ))
                ->add_fields( array(
                    Field::make('text', 'strong', 'Treść wyróżniona'),
                    Field::make('text', 'text', 'Treść'),
                    ))

        ) );
    }

    public static function register() {
        self::register_cpt();
        self::register_taxonomies();
        add_action( 'carbon_fields_register_fields', array(__CLASS__, 'register_fields') );
    }


}
