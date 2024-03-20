import NextAuth from "next-auth";
import {authConfig} from "@/auth.config";
import Credentials from 'next-auth/providers/credentials';
import {z} from 'zod'

async function getUser(email, password) {
	try {
		const user = await fetch('https://dummyjson.com/auth/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				username: email,
				password: password,
				// expiresInMins: 60, // optional
			})
		});
		return await user.json();
	} catch (error) {
		console.error('Failed to fetch user:', error);
		throw new Error('Failed to fetch user.');
	}
}

export const {auth, signIn, signOut} = NextAuth({
	...authConfig,
	providers: [Credentials({
		async authorize(credentials) {
			const parsedCredentials = z
				.object({ email: z.string(), password: z.string().min(6) })
				.safeParse(credentials);

			if (parsedCredentials.success) {
				const { email, password } = parsedCredentials.data;
				const user = await getUser(email, password);
				if (!user) return null;
				if (user.message === 'Invalid credentials') return null;

				return user;
			}

			return null;
		},
	})]
})
