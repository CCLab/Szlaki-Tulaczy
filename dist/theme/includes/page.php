<?php

namespace Tulacze;

use Carbon_Fields\Container\Container;
use Carbon_Fields\Field\Field;

class Page {
    public static function register_fields() {
        self::register_container_excerpt();
        self::register_container_sections();
    }

    private static function register_container_excerpt() {
        Container::make( 'post_meta', __( 'Wstępniak' ) )
        ->where( 'post_type', '=', 'page' )
        ->add_fields( array(
            Field::make('image', 'tul_icon', __('Ikona'))->set_value_type( 'url' ),
            Field::make('textarea', 'tul_intro', __( 'Intro' ) ),
            Field::make('textarea', 'tul_excerpt', __( 'Lid' ) )->set_required( true ),
            Field::make('checkbox', 'tul_is_quote', __( 'Czy cytat?' ) ),
            Field::make('textarea', 'tul_meta', __('Meta'))->set_conditional_logic(array(array('field' => 'tul_is_quote', 'value' => 1, 'compare' => '='))),
            Field::make('text', 'tul_ref', __('Sygnatura'))->set_conditional_logic(array(array('field' => 'tul_is_quote', 'value' => 1, 'compare' => '='))),
            Field::make('image', 'tul_background', __( 'Tło' ) )->set_value_type('url'),
        ) );
    }

    private static function register_container_sections() {
        Container::make( 'post_meta', __( 'Treść' ) )
        ->where( 'post_type', '=', 'page' )
        ->add_fields( array(
            Field::make( 'complex', 'tul_sections', __( 'Sekcje' ) )
                ->add_fields(array(
                    Field::make('text', 'title', __('Tytuł')),
                    Field::make('complex', 'content', __('Wpis'))
                        ->add_fields('text', __('Tekst'), array(
                            Field::make( 'checkbox', 'is_quote', __( 'Czy cytat?' ) ),
                            Field::make( 'checkbox', 'is_important', __( 'Wyróżniony?' ) ),
                            Field::make( 'checkbox', 'is_audio', __( 'Dźwiękowy?' ) )->set_conditional_logic(array(array('field' => 'is_quote', 'value' => 1, 'compare' => '='))),
                            Field::make('textarea', 'text', __('Tekst'))->set_conditional_logic(array(array('field' => 'is_audio', 'value' => 1, 'compare' => '!=')))->set_required( true ),
                            Field::make('text', 'audio_name', __('Tytuł nagrania'))->set_conditional_logic(array(array('field' => 'is_audio', 'value' => 1, 'compare' => '='))),
                            Field::make('image', 'audio', __('Nagranie'))->set_type('audio')->set_value_type('url')->set_conditional_logic(array(array('field' => 'is_audio', 'value' => 1, 'compare' => '='))),
                            Field::make('textarea', 'meta', __('Meta'))->set_conditional_logic(array(array('field' => 'is_quote', 'value' => 1, 'compare' => '='))),
                            Field::make('text', 'ref', __('Sygnatura'))->set_conditional_logic(array(array('field' => 'is_quote', 'value' => 1, 'compare' => '='))),
                            Field::make('urlpicker', 'link', __('Link')),
                            Field::make('image', 'image', __('Zdjęcie'))->set_value_type('url'),
                        ))
                        ->add_fields('photos',__('Zdjęcia'), array(
                            Field::make('image', 'img_small', __('Zdjęcie mniejsze'))->set_value_type('url'),
                            Field::make('image', 'img_large', __('Zdjęcie większe'))->set_value_type('url'),
                        )),
                )),
        ) );
    }

    public static function register() {
        add_action( 'carbon_fields_register_fields', array(__CLASS__, 'register_fields') );
        add_action( 'init', function () {
            remove_post_type_support( 'page', 'editor' );
            remove_post_type_support( 'page', 'page-attributes' );
            remove_post_type_support( 'page', 'thumbnail' );
        });
    }
}
