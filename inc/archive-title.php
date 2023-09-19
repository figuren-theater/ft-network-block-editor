<?php declare(strict_types=1); # -*- coding: utf-8 -*-
/**
 * This file handles everything related to the query-title block
 */
namespace Figuren_Theater\Network\Blocks\ArchiveTitle;




\add_filter( 'get_the_archive_title_prefix', __NAMESPACE__ . '\modify_archive_title_prefix' );


/**
 * Blank out the archive title prefix sometimes.
 *
 * @todo #71 This filter can be removed if/when this issue is resolved:
 * @see  https://github.com/WordPress/gutenberg/issues/30519
 *
 * @return string
 */
function modify_archive_title_prefix( string $prefix ) : string
{
	if ( \is_category() || \is_post_type_archive() ) {
		$prefix = '';
	}

	return $prefix;
}

