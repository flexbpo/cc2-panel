'use server'

import {signIn, signOut} from '@/auth';
import { AuthError } from 'next-auth';
import {isRedirectError} from "next/dist/client/components/redirect";

export async function authenticate(prevState, formData) {
	try {
		await signIn('credentials', {
			...Object.fromEntries(formData),
			redirect: true,
			redirectTo: '/dashboard'
		});
	} catch (error) {
		if(isRedirectError(error)) {
			throw error
		}

		if (error instanceof AuthError) {
			const {type, cause} = error

			switch (type) {
				case "CredentialsSignin":
					return "Invalid credentials.";
				case "CallbackRouteError":
					return cause?.err?.toString();
				default:
					return "Something went wrong.";
			}
		}
		throw error;
	}
}

export async function logout() {
	await signOut({redirectTo: '/login'});
}
