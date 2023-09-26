<?php
/**
 * This file handles everything related to the query-title block
 */

namespace Figuren_Theater\Network_Block_Editor\Editor_Assets;

use Figuren_Theater\Network_Block_Editor;

use function add_action;
use function plugins_url;
use function wp_enqueue_script;
use function wp_set_script_translations;

/**
 * Bootstrap module, when enabled.
 *
 * @return void
 */
function bootstrap() :void {
	add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\\enqueue_assets' );
}

/**
 * Enqueues JS block assets.
 *
 * @throws \Error Stop if neccessary index.asset.php is missing.
 *
 * @return void
 */
function enqueue_assets() :void {
	$dir = Network_Block_Editor\DIRECTORY;

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new \Error(
			'You need to run `npm run build` for "figurentheater/ft-network-block-editor" first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path ); // phpcs:ignore WordPressVIPMinimum.Files.IncludingFile.UsingVariable
	wp_enqueue_script(
		'figurentheater-ft-network-block-editor',
		plugins_url( $index_js, $dir ),
		$script_asset['dependencies'],
		$script_asset['version']
	);
	wp_set_script_translations( 'figurentheater-ft-network-block-editor', 'ft-network-block-editor' );

}



