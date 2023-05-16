 const firebaseConfig = {
    apiKey: "AIzaSyDE9QGmlRFg4pRDWsTIkeL_inQ4pO8NcCc",
    authDomain: "parking-b0003.firebaseapp.com",
    databaseURL: "https://parking-b0003-default-rtdb.firebaseio.com",
    projectId: "parking-b0003",
    storageBucket: "parking-b0003.appspot.com",
    messagingSenderId: "389731020869",
    appId: "1:389731020869:web:9c6a13299993a09635332c",
    measurementId: "G-5GN13MLGK8"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormD8 = firebase.database().ref("contact__form")

document.getElementById('contact__form').addEventListener("submit", submitForm);

function submitForm(e) {
	e.preventDefault();

	var ime_prezime = getElementVal('ime_prezime');
	var broj_telefona = getElementVal('broj_telefona');
	var Email = getElementVal('Email');
	var datum = getElementVal('datum');
	var datum1 = getElementVal('datum1');
	var automobil = getElementVal('automobil');

	saveMessages(ime_prezime, broj_telefona, Email, datum, datum1, automobil);

	window.location.reload();
	window.alert("Čestitam uspješno ste izvršili rezervaciju!");
}

const saveMessages = (ime_prezime, broj_telefona, Email, datum, datum1, automobil) => {
	var newContactForm = contactFormD8.push();

	newContactForm.set({
		ime_prezime : ime_prezime,
		broj_telefona : broj_telefona,
		Email : Email,
		datum : datum,
		datum1 : datum1,
		automobil : automobil,
	});
};

const getElementVal = (id) => {
	return document.getElementById(id).value;
};