import { initializeApp, auth, analytics } from "firebase/app";
import "firebase/analytics";

import App from './App.svelte';
import firebaseConfig from "./fbConfig";
import { userStore } from './stores.js';

// Initialize Firebase
initializeApp(firebaseConfig);

analytics();

auth().onAuthStateChanged(function (user) {
    if (user) {
        console.log('We have a user!', user);
        userStore.set({
			isSignedIn: true,
			displayName: user.displayName
		});
    } else {
        console.log('We are not authed I guess!', user);
        userStore.set({
			isSignedIn: false,
			displayName: ''
		});
    }
});

const app = new App({
	target: document.body,
	props: {}
});

export default app;