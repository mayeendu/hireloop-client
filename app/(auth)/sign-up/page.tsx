"use client"

import { useState, type FormEvent } from "react"
import { AuthForm } from "@/components/auth-form"
import { authClient } from "@/lib/auth-client";
import { useRouter } from 'next/navigation'

export default function SignUpPage() {
    const router = useRouter();
    const [submitted, setSubmitted] = useState(false)

    const handleSignUp = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setSubmitted(false)
        const formData = new FormData(event.currentTarget)
        const role = formData.get("role")
        if (role !== "seeker" && role !== "recruiter" && role !== "admin") {
            throw new Error("Invalid account role")
        }
        const data = {
            name: String(formData.get("name") ?? "").trim(),
            email: String(formData.get("email") ?? "").trim(),
            password: String(formData.get("password") ?? ""),
            role,
        } as const

        const { data: signUpData, error } = await authClient.signUp.email({
            role: data.role,
            name: data.name,
            email: data.email,
            password: data.password,

            callbackURL: "/"
        });

        console.log("Sign Up Data:", signUpData, error);
        setSubmitted(!error)
        if (!error) {
            router.push("/");
        }

    }

    return (
        <AuthForm mode="sign-up" onSubmit={handleSignUp} submitted={submitted} />
    )
}
