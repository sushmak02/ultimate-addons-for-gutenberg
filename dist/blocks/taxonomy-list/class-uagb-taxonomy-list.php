<?php
/**
 * UAGB Post.
 *
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'UAGB_Taxonomy_List' ) ) {

	/**
	 * Class UAGB_Taxonomy_List.
	 */
	class UAGB_Taxonomy_List {


		/**
		 * Member Variable
		 *
		 * @since x.x.x
		 * @var instance
		 */
		private static $instance;

		/**
		 * Member Variable
		 *
		 * @since x.x.x
		 * @var settings
		 */
		private static $settings;

		/**
		 *  Initiator
		 *
		 * @since x.x.x
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 * Constructor
		 */
		public function __construct() {
			add_action( 'init', array( $this, 'register_blocks' ) );
		}

		/**
		 * Registers the `core/latest-posts` block on server.
		 *
		 * @since 0.0.1
		 */
		public function register_blocks() {
			// Check if the register function exists.
			if ( ! function_exists( 'register_block_type' ) ) {
				return;
			}

			register_block_type(
			'uagb/taxonomy-list',
				array(
					'attributes'      => array(
						'block_id'    		=> array(
							'type'    => 'string',
						),
						'postType'   		=> array(
							'type'    => 'string',
							'default' => 'post',
						),
						'taxonomyCount'  	=>array(
							'type'	 => 'string',
						)
					),				
				'render_callback' => array( $this, 'taxonomy_list_callback' ),
				)
            );
        }
            
		/**
		 * Renders the taxonomy list block on server.
		 *
		 * @param array $attributes Array of block attributes.
		 *
		 * @since 0.0.1
		 */
		public function taxonomy_list_callback( $attributes ) {
            var_dump($attributes);
        }
    }
	
	/**
	 *  Prepare if class 'UAGB_Taxonomy_List' exist.
	 *  Kicking this off by calling 'get_instance()' method
	 */
	UAGB_Taxonomy_List::get_instance();
}
