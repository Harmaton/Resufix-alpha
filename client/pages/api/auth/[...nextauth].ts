import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook";
import AppleProvider from "next-auth/providers/apple";

export const authOptions = {
  // Configure authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID!,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET!
      }),
      AppleProvider({
        clientId: process.env.APPLE_ID!,
        clientSecret: process.env.APPLE_SECRET!
      })
  ],

secret: process.env.JWT_SECRET

}

export default NextAuth(authOptions)