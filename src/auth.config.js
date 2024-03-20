export const authConfig = {
	pages: {
		signIn: '/dashboard',
		newUser: '/register'
	},
	callbacks: {
		authorized({ auth, request: { nextUrl } }) {
			const isLoggedIn = !!auth?.user;
			const isOnDashboard = nextUrl.pathname.startsWith('/es/dashboard');
			if (isOnDashboard) {
				return isLoggedIn;
			} else if (isLoggedIn) {
				return Response.redirect(new URL('/es/dashboard', nextUrl));
			}
			return true;
		},
	},
	providers: [],
}
