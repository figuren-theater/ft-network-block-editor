/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockCollection } from '@wordpress/blocks';

/**
 *
 */
import { dispatch, select } from '@wordpress/data';

/**
 *
 */
import { store as editPostStore } from '@wordpress/edit-post';

/**
 * Retrieve 'f.t' Icon aka 'figuren.theater' platform Logo
 *
 * @todo #81 Import Logo from f.t/logos instead of redefining it
 */
import icon from './shared/js/icon';

/**
 * 1. figuren.theater Block-Collection
 *
 * all blocks within the namespace of
 * 'figurentheater' will be wrapped
 * under this collection in the block-inspector
 *
 * @see https://make.wordpress.org/core/2020/02/27/block-collections/
 */
registerBlockCollection('figurentheater', {
	title: 'figuren.theater',
	icon,
});
registerBlockCollection('theatrebase', {
	title: 'Theater',
	icon,
});

/**
 * 2. disable fullscreen
 *
 * permanently disable fullscreen mode by default
 *
 * @see https://make.wordpress.org/core/2020/03/03/fullscreen-mode-enabled-by-default-in-the-editor/
 *
 * maybe, nicer Alternative at:
 * @see https://plugins.trac.wordpress.org/browser/blockeditor-fullscreen-mode-control/trunk/assets/js/fullscreen.js
 *
 * @example
 * ```js
 * window.onload = function() {
 *   const isFullscreenMode = select( editPostStore ).isFeatureActive( 'fullscreenMode' );
 *   if ( isFullscreenMode ) {
 *   dispatch( editPostStore ).toggleFeature( 'fullscreenMode' ); }
 *   }
 * ```
 * window.onload stopped working for some un-researched reason
 * wp.domReady is WORKING
 *
 * @see https://github.com/WordPress/gutenberg/issues/13811#issuecomment-500930584
 */
wp.domReady(function () {
	const isFullscreenMode =
		select(editPostStore).isFeatureActive('fullscreenMode');
	if (isFullscreenMode) {
		dispatch(editPostStore).toggleFeature('fullscreenMode');
	}
});

/**
 * 5. Hide some Blocks from the inserter, but keep them working
 *    a kinda house-keeping as 'unregisterBlockLight' ;)
 *
 *    some helping code examples on hideBlockTypes()
 *    https://github.com/WordPress/gutenberg/issues/14139#issuecomment-480261866
 */
window.onload = function () {
	// remove stuff that is not for 'typical' users
	dispatch(editPostStore).hideBlockTypes([
		'core/freeform',
		'core/html',
		'core/shortcode',
	]);
};
