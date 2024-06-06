	// Your web app's Firebase configuration
	export const firebaseConfig = {
		apiKey: 'AIzaSyA_jfAcbHq61-_Mhvz9lxC1DiMN2RhcnT0',
		authDomain: 'contactformportfoliosveltekit.firebaseapp.com',
		databaseURL:
			'https://contactformportfoliosveltekit-default-rtdb.asia-southeast1.firebasedatabase.app',
		projectId: 'contactformportfoliosveltekit',
		storageBucket: 'contactformportfoliosveltekit.appspot.com',
		messagingSenderId: '226227204036',
		appId: '1:226227204036:web:d47103f3a6e0b98a6c3e91'
	};

	//Initialize firebase
	firebase.initializeApp(firebaseConfig);

	//reference the database
	var contactFormDB = firebase.database().ref('contactForm');

	document.getElementById('contactForm').addEventListener('submit', submitForm);

	function submitForm(e) {
		e.preventDefault();
		var name = getElementValue('name');
		var emailid = getElementValue('emailid');
		var msgContent = getElementValue('msgContent');

        saveData(name, emailid, msgContent)
	}

	const getElementValue = (id) => {
		return document.getElementById(id).value;
	};

	//Pushes the data into firebase databse
	const saveData = (name, emailid, msgContent) => {
		var newContactForm = contactFormDB.push();

        newContactForm.set({
            name: name,
            emailid: emailid,
            msgContent: msgContent
        })
	};