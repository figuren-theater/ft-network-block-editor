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
 * @package         figuren-theater/ft-network-block-editor
 */

namespace Figuren_Theater\Network_Block_Editor;

const DIRECTORY = __DIR__;

add_action( 'init', __NAMESPACE__ . '\\bootstrap' );
