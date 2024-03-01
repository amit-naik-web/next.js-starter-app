import CredentialsProvider from "next-auth/providers/credentials";
// import { env } from "process";

export const authOptions: any = {
  // theme: {
  //   logo: "HR_logo",
  // },
  // theme: {
  //   colorScheme: "auto", // "auto" | "dark" | "light"
  //   brandColor: "#f15b40", // Hex color code
  // logo: "", // Absolute URL to image
  //   buttonText: "#f15b40", // Hex color code
  // },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials, req) {
        const res = await fetch("http://localhost:3001/login", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();

        // // If no error and we have user data, return it
        if (res.ok && user) {
          return user;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  callbacks: {
    async session({
      session,
      user,
      token,
    }: {
      session: any;
      user: any;
      token: any;
    }) {
      session.user.id = session.user.email;
      return session;
    },
  },
  // pages: {
  //   signIn: "/auth/login",
  //   signOut: "/auth/signout",
  //   error: "/auth/error", // Error code passed in query string as ?error=
  //   verifyRequest: "/auth/verify-request", // (used for check email message)
  //   newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  // },

  secret: process.env.AUTH_TOKEN,
};
