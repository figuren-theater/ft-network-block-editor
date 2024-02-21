<?php
/**
 * Figuren_Theater Network_Block_Editor.
 *
 * @package figuren-theater/ft-network-block-editor
 */

namespace Figuren_Theater\Network_Block_Editor;

/**
 * Bootstrap module, when enabled.
 *
 * @return void
 */
function bootstrap(): void {
	Archive_Title\bootstrap();
	Editor_Assets\bootstrap();
}
