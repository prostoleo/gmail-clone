import { useEffect } from 'react';
// import { RootState } from '@/store';
import { useSelector, useDispatch } from 'react-redux';
import { auth, googleAuthProvider } from '@/libs/firebase';
import { logout, login } from '@/store/user/userSlice';
// import { iLoginState } from './useLogin';
import {
	GoogleAuthProvider,
	UserCredential,
	// createUserWithEmailAndPassword,
	// signInWithEmailAndPassword,
	signInWithPopup,
	// updateProfile,
} from 'firebase/auth';
import { selectUser } from '@/store/user/userSlice';
import { useNavigate } from 'react-router';

export interface iLocalUser {
	email: string;
	uid: string;
	displayName: string;
	photoURL: string;
}

export default function useAuth() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		auth.onAuthStateChanged((userAuth) => {
			if (!userAuth) {
				// user is logged out
				dispatch(logout());

				navigate('/auth');

				return;
			}

			//user is logged in
			dispatch(
				login({
					email: userAuth.email,
					uid: userAuth.uid,
					displayName: userAuth.displayName,
					photoURL: userAuth.photoURL,
				})
			);

			/* dispatchLogin({
				email: userAuth.email,
				uid: userAuth.uid,
				displayName: userAuth.displayName,
				photoURL: userAuth.photoURL,
			}); */
		});
	}, []);

	async function handleSignIn() {
		try {
			const result = await signInWithPopup(auth, googleAuthProvider);

			const credential = GoogleAuthProvider.credentialFromResult(result);
			const token = credential?.accessToken;
			// The signed-in user info.
			const user = result.user;

			dispatchLogin(result);

			navigate('/');
			// IdP data available using getAdditionalUserInfo(result)
		} catch (error) {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			const email = error.customData.email;
			// The AuthCredential type that was used.
			const credential = GoogleAuthProvider.credentialFromError(error);
		}
	}

	/* async function signInUser(state: iLoginState) {
		try {
			const userAuth = await signInWithEmailAndPassword(
				auth,
				state.email,
				state.password
			);

			dispatchLogin(userAuth, state);
		} catch (error) {
			console.log('error: ', error);
		}
	} */

	/* async function createUser(state: iLoginState) {
		try {
			const userAuth = await createUserWithEmailAndPassword(
				auth,
				state.email,
				state.password
			);

			await updateProfile(auth?.currentUser!, {
				displayName: state.fullName,
				photoURL: state.photoURL,
			});

			dispatchLogin(userAuth, state);
		} catch (error) {
			console.log('error: ', error);
		}
	} */

	// function dispatchLogin(userAuth: UserCredential, state: iLoginState) {
	function dispatchLogin(userAuth: UserCredential) {
		dispatch(
			login({
				email: userAuth.user.email,
				uid: userAuth.user.uid,
				displayName: userAuth.user.displayName,
				photoURL: userAuth.user.photoURL,
			})
		);
	}

	const logoutOfApp = async () => {
		try {
			// console.log('logoutOfApp');
			dispatch(logout);
			await auth.signOut();
			// console.log('auth signOut');
		} catch (error) {
			console.log('error: ', error);
		}
	};

	return {
		user,
		handleSignIn,
		logoutOfApp,
	};
}
