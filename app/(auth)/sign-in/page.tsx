"use client"

import { useState, type FormEvent } from "react"
import { AuthForm } from "@/components/auth-form"
import { authClient } from "@/lib/auth-client";

export default function SignInPage() {
    const [submitted, setSubmitted] = useState(false)

    const handleSignIn = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setSubmitted(false)
        const formData = new FormData(event.currentTarget)
        const data = {
            email: String(formData.get("email") ?? "").trim(),
            password: String(formData.get("password") ?? ""),
        }

        const { data: signInResponse, error } = await authClient.signIn.email({
            email: data.email, // required, The email address of the user.
            password: data.password, // required, The password of the user. It should be at least 8 characters long and max 128 by default.
            rememberMe: true, // If false, the user will be signed out when the browser is closed. (optional) (default: true)
            callbackURL: "/" // An optional URL to redirect to after the user signs in.
        });

        console.log("Sign In Response:", signInResponse, error);
        if (!error) {
            console.log("Signed In User:", signInResponse.user);
        }
        setSubmitted(!error)

    }

    return (
        <AuthForm mode="sign-in" onSubmit={handleSignIn} submitted={submitted} />
    )
}
