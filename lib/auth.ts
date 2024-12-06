import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Add your authentication logic here
        // This is a placeholder implementation
        if (credentials?.email === "user@example.com" && credentials?.password === "password") {
          return {
            id: "1",
            email: "user@example.com",
            name: "Demo User",
          }
        }
        return null
      }
    })
  ],
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/error",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.sub
      }
      return session
    },
  },
}