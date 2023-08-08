import { auth, googleProvider } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useState } from 'react';

export const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSignIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.log(error);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (error) {
            console.log(error);
        }
    };

    const handleLogOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <input
                placeholder='Email...'
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                placeholder='Password...'
                type='password'
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignUp}> Sign Up </button>
            <button onClick={handleSignIn}> Sign In </button>
            <button onClick={handleGoogleSignIn}> Sign In with Google </button>
            <button onClick={handleLogOut}> Log Out </button>
        </div>
    )
}
