<?php
/**
 * Plugin Name:     f.t | NETWORK Block Editor
 * Description:     Changes and additions to the WordPress core block-editor and site-editor, formerly known as Gutenberg, made for the figuren.theater Multisite network.
 * Version:         0.5.0
 * Author:          Carsten Bach
 * License:         GPL-3.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:     ft-network-block-editor
 *
 * @package         figurentheater
 */



require_once 'inc/archive-title.php';


/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
function figurentheater_ft_network_block_editor_block_init() {
	$dir = __DIR__;

	$style_css = 'build/style-index.css';
	wp_register_style(
		'figurentheater-ft-network-block-editor-block',
		plugins_url( $style_css, __FILE__ ),
		array('wp-block-library'),
		filemtime( "$dir/$style_css" )
	);
	add_action( 'wp_footer', 'figurentheater_ft_network_block_editor__style_enqueue', 5 );
	add_action( 'enqueue_block_editor_assets', 'figurentheater_ft_network_block_editor__style_enqueue' );

}
function figurentheater_ft_network_block_editor__style_enqueue() {
	wp_enqueue_style('figurentheater-ft-network-block-editor-block');
}
#add_action( 'init', 'figurentheater_ft_network_block_editor_block_init' );
 */







function figurentheater_ft_network_block_editor_block__enqueue_block_editor_assets() {
	$dir = __DIR__;

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "figurentheater/ft-network-block-editor" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_enqueue_script(
		'figurentheater-ft-network-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);
	wp_set_script_translations( 'figurentheater-ft-network-block-editor', 'ft-network-block-editor' );

}
// https://developer.wordpress.org/reference/hooks/enqueue_block_assets/
add_action( 'enqueue_block_editor_assets', 'figurentheater_ft_network_block_editor_block__enqueue_block_editor_assets' );





/**
#add_action( 'enqueue_block_assets', 'figurentheater_ft_network_block_editor_block__enqueue_block_assets' );
function figurentheater_ft_network_block_editor_block__enqueue_block_assets() {
#	$dir = __DIR__;
#
#	$script_asset_path = "$dir/build/index.asset.php";
#	if ( ! file_exists( $script_asset_path ) ) {
#		throw new Error(
#			'You need to run `npm start` or `npm run build` for the "figurentheater/ft-network-block-editor" block first.'
#		);
#	}
#	$index_js     = 'build/index.js';
#	$script_asset = require( $script_asset_path );

	// 4 DEBUG
	$index_js     = 'src/block-styles/core-group/copy-2-clipboard/frontend.js#deferload';

	wp_enqueue_script(
		'figurentheater-ft-network-block-editor--copy-2-clipboard',
		plugins_url( $index_js, __FILE__ ),
		[],
		time()
		// $script_asset['dependencies'],
		// $script_asset['version']
	);
#	wp_set_script_translations( 'figurentheater-ft-network-block-editor-block-editor', 'ft-network-block-editor' );

	$style_css = 'src/block-styles/core-group/copy-2-clipboard/style.css';

	// wp_register_style(
	wp_enqueue_style( 
		'figurentheater-ft-network-block-editor--copy-2-clipboard',
		plugins_url( $style_css, __FILE__ ),
		array('wp-block-library'),
		// filemtime( "$dir/$style_css" )
		time()
	);

}
*/
// TEMP deactivated, for not beeing finished
// and doing this mess here
// sorry to everybody reading this
// 
// I promise to do better!
// 
// add_action( 'enqueue_block_assets', 'figurentheater_ft_network_block_editor_block__enqueue_block_assets' );
