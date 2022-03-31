import NextAuth from "next-auth";

declare module "next-auth" {
    interface Provider {
        callbackUrl: string
        id: "google" | "email" | "facebook"
        name: "Google" | "Email" | "Facebook"
        signinUrl: string
        type: "oauth"
    }
    type Providers = {
        email: Provider
        facebook: Provider
        google: Provider
    }
}