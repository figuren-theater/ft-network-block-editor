/**
 * Copy to clipboard with the click of a button.
 * No jQuery, just vanilla JavaScript. Simple. Lightweight.
 *
 * @url     https://frostbutter.com/articles/javascript-copy-to-clipboard-function-no-jquery/
 *
 * @package
 * @version version
 * @author  Nick Frostbutter
 *
 * @param {[type]} elem [description]
 * @return  {[type]}          [description]
 */
function copy(elem) {
	// get the text to be copied
	if (elem.innerText != undefined) text = elem.innerText;
	else if (elem.value != undefined) text = elem.value;
	else return false;

	// create a temporary box, and stop the viewport scrolling
	const box = document.createElement('textarea');
	box.value = text;
	document.body.appendChild(box);
	box.style.top = '0';
	box.style.left = '0';
	box.style.position = 'fixed';

	// box.style.visibility = "hidden";
	// box.style.overflow = "hidden";
	box.style.opacity = '0';

	// select the text in the box and copy it
	box.focus();
	box.select();
	box.setSelectionRange(0, 99999);
	document.execCommand('copy');

	// alert("text copied to your clipboard!");
}

window.onload = function () {
	const copy_2_clipboard_selector = '.is-style-copy-2-clipboard';

	const copy_2_clipboard_selectors = document.querySelectorAll(
		copy_2_clipboard_selector
	);

	copy_2_clipboard_selectors.forEach((group) => {
		group.addEventListener('click', (event) => {
			const parent = event.target.closest(copy_2_clipboard_selector);

			// console.log(parent);

			//
			copy(parent);

			//
			parent.classList.add('copied-2-clipboard');

			//
			setTimeout(function () {
				// Remove the class
				parent.classList.remove('copied-2-clipboard');
			}, 1500);
		});
	});
}; // window.onload
