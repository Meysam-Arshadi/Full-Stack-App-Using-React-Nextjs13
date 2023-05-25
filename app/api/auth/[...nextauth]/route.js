import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { connectToDB } from '@utils/database'
import { signIn } from 'next-auth/react'

const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
	async session({ session }) {},
	async signIn({ profile }) {
		try {
			await connectToDB()

			// check if a user already exists

			// if the user does not exist, create anew user
		} catch (error) {}
	},
})

export { handler as GET, handler as POST }
