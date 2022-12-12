<?php
/**
 * Plugin Name:       Yoast FAQ proof-of-concept
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.0.1
 * Author:            The Yoast Team
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wordpress-seo
 *
 * @package           wordpress-seo
 */

 /**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 */
function yoast_columns_blocks() {
	// Register the blocks by passing the location of block.json to register_block_type.
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'yoast_columns_blocks' );
