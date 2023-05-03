// 1. DOM
const input 						= document.querySelector('.input');
const generateButton 		= document.querySelector('.btn__generate');
const copyButton 				= document.querySelector('.btn__copy');
const slider 						= document.querySelector('.slider');
let sliderValue 				= document.querySelector('.slider-value');

// 2. Variables
const numbers 					= '0123456789';
const lowerCase 				= 'thequickbrownfoxjumpsoverthelazydog';
const upperCase 				= 'THEQUICKBROWNFORJUMPSOVERTHELAZYDOG';
const symbols 					= '!@#$%&*()_-+=.';

// 3. Events
generateButton.addEventListener('mousedown', generatePassword);

copyButton.addEventListener('mousedown', copyPassword);

slider.addEventListener('input', () => {
	copyButton.style.pointerEvents = 'auto';
	sliderValue.textContent = slider.value;
	copyButton.classList.remove('copied');
	copyButton.textContent = 'copy';
	input.value = '';
})

// 4. Functions
function shuffle(str) {
	return str.sort(() => Math.random() - 0.5);
}

function generatePassword() {
	copyButton.style.pointerEvents = 'auto';
	let shuffled = shuffle([...numbers, ...lowerCase, ...upperCase, ...symbols]);

	let finalPassword = '';
	for (let i = 0; i <= sliderValue.textContent; i++) {
		finalPassword += shuffled[i];
	}
	
	copyButton.classList.remove('copied');
	copyButton.textContent = 'copy';

	return input.value = finalPassword;
}

function copyPassword() {
	if ( !(input.value === '') ) {
		input.setSelectionRange(0, 9999);
		navigator.clipboard.writeText(input.value);
	
		copyButton.classList.add('copied');
		copyButton.textContent = 'copied';
		copyButton.style.pointerEvents = 'none';
	}
}