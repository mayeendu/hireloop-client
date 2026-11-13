"use client"

import { useState, type FormEvent } from "react"
import { AuthForm } from "@/components/auth-form"
import { authClient } from "@/lib/auth-client";

export default function SignUpPage() {
    const [submitted, setSubmitted] = useState(false)

    const handleSignUp = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setSubmitted(false)
        const formData = new FormData(event.currentTarget)
        const data = {
            name: String(formData.get("name") ?? "").trim(),
            email: String(formData.get("email") ?? "").trim(),
            password: String(formData.get("password") ?? ""),
        }

        const { data: signUpData, error } = await authClient.signUp.email({
            name: data.name, // required, The name of the user.
            email: data.email, // required, The email address of the user.
            password: data.password, // required, The password of the user. It should be at least 8 characters long and max 128 by default.

            callbackURL: "/" // An optional URL to redirect to after the user signs up.
        });

        console.log("Sign Up Data:", signUpData, error);
        setSubmitted(!error)

    }

    return (
        <AuthForm mode="sign-up" onSubmit={handleSignUp} submitted={submitted} />
    )
}
