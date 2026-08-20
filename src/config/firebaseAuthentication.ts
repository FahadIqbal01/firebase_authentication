import { createUserWithEmailAndPassword, getAuth } from "@react-native-firebase/auth";

export function signUp() {
    createUserWithEmailAndPassword(getAuth(), 'fahadiqbal9318@', '123456789')
        .then(() => console.log('User account created & signed in!'))
        .catch((error) => {

            if (error.code === 'auth/email-already-in-use')
                console.log('Email already in use.');
            else if (error.code === 'auth/invalid-email')
                console.log('Invalid email.');

            console.error(error)
        })
}
