<?php
/**
 * This file handles everything related to the query-title block
 */

namespace Figuren_Theater\Network_Block_Editor\Archive_Title;

use function add_filter;
use function is_category;
use function is_post_type_archive;

/**
 * Bootstrap module, when enabled.
 *
 * @return void
 */
function bootstrap() :void {
	add_filter( 'get_the_archive_title_prefix', __NAMESPACE__ . '\\remove_prefix_for_cat_and_pt_archives' );
}

/**
 * Blank out the archive title prefix sometimes.
 *
 * @todo #71 This filter can be removed if/when this issue is resolved:
 * @see  https://github.com/WordPress/gutenberg/issues/30519
 *
 * @param string $prefix Default prefix, that WordPress adds before the archive-title, mostly 'Category' and 'Tag'.
 *
 * @return string
 */
function remove_prefix_for_cat_and_pt_archives( string $prefix ) : string {
	if ( is_category() || is_post_type_archive() ) {
		$prefix = '';
	}

	return $prefix;
}

