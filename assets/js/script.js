/* Author: Aniket*/
// Selecting Required Buttons to Count
const buttons = Array.from(document.querySelectorAll('button'));
let countContainer = document.querySelector('.counter p');

buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		if(e.target.classList.contains('add-count')) {
			countContainer.innerText++;
		} else if(e.target.classList.contains('lower-count')) {
			if(countContainer.innerText == 0) {
				e.preventDefault();
			} else {
				countContainer.innerText --;
			}
		}
})
})
