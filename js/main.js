/*=============== VALIDATION ===============*/
let inputs = document.querySelectorAll('input');
let errors = {
	"ime_prezime": [],
	"broj_telefona": [],
	"Email": [],
	"datum": [],
	"datum1": [],
	"automobil": [],
};

inputs.forEach(element => {
	element.addEventListener('change', e => {
		let currentInput = e.target;
		let inputValue = currentInput.value;
		let inputName = currentInput.getAttribute('name');

		if(inputValue.length > 4) {
			
			errors[inputName] = [];

			switch(inputName) {
				case 'ime_prezime':
					let validation = inputValue.trim();
					validation = validation.split(" ");
					if(validation.length < 2) {
						errors[inputName].push('Moraš napisati i ime i prezime!');

					}
				break;

				case 'Email':
					if(!validateEmail(inputValue)) {
						errors[inputName].push('Neispravna email adresa');
					}	
				break;

			}

		} else {
			errors[inputName] = ['Polje ne može imati manje od pet karaktera.'];
		}

		populateErrors();
	});
});

const populateErrors = () => {

	for(let elem of document.querySelectorAll('ul')) {
		elem.remove()
	}

	for(let key of Object.keys(errors)){
		let input = document.querySelector(`input[name="${key}"]`);
		let parentElement = input.parentElement;
		let errorsElement = document.createElement('ul');
		parentElement.appendChild(errorsElement);

		errors[key].forEach(error => {
			let li = document.createElement('li');
			li.innerText = error;

			errorsElement.appendChild(li);
		})
	}
}

const validateEmail = email => {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
		return true;
	}

	return false;
}


/*=============== CHANGE COLOR ===============*/
let prekidac = 0;
function promijeniBoju() {
	//document.body.style.backgroundColor = "#035faa";
	var body = document.querySelector("body");

  	if (prekidac == 0) {
    body.style.backgroundColor = "#035faa";
    prekidac = 1;
  	} else if (prekidac == 1) {
    body.style.backgroundColor = "#0b111e";
    prekidac = 0;
  	}
}

var promijeniBojuBtn = document.getElementById("promijeniBojuBtn");
promijeniBojuBtn.addEventListener("click", promijeniBoju);


