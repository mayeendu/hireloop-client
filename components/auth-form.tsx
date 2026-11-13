"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"
import { ArrowRight, Eye, EyeOff } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type AuthFormProps = {
  mode: "sign-in" | "sign-up"
  onSubmit: (event: FormEvent<HTMLFormElement>) => void | Promise<void>
  submitted: boolean
}

const inputClassName =
  "mt-2 h-12 w-full rounded-lg border border-white/15 bg-[#0e0e10] px-3.5 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 hover:border-white/25 focus-visible:border-violet-400 focus-visible:ring-2 focus-visible:ring-violet-400/25"

export function AuthForm({ mode, onSubmit, submitted }: AuthFormProps) {
  const isSignUp = mode === "sign-up"
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (isSubmitting) return
    setIsSubmitting(true)
    setSubmitError("")
    const formData = new FormData(event.currentTarget)
    console.log(`${mode} form data:`, Object.fromEntries(formData.entries()))
    try {
      await onSubmit(event)
    } catch {
      setSubmitError("Unable to submit the form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="relative isolate flex min-h-[calc(100svh-81px)] items-center justify-center overflow-hidden bg-[#0a0a0b] px-5 py-12 text-white sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -z-10 h-96 w-full max-w-2xl -translate-x-1/2 rounded-full bg-violet-600/10 blur-[100px]"
      />
      <section
        aria-labelledby="auth-heading"
        className="w-full max-w-md rounded-2xl border border-white/10 bg-[#111113] p-6 shadow-[0_24px_80px_-32px_#000] sm:p-9"
      >
        <nav
          aria-label="Account access"
          className="mb-8 grid grid-cols-2 gap-1 rounded-lg border border-white/10 bg-[#0a0a0b] p-1"
        >
          {[
            { href: "/sign-in", label: "Sign In", active: !isSignUp },
            { href: "/sign-up", label: "Sign Up", active: isSignUp },
          ].map(({ href, label, active }) => (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "rounded-md px-4 py-2.5 text-center text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-violet-400",
                active
                  ? "bg-[#26222f] text-violet-200 shadow-sm"
                  : "text-zinc-400 hover:bg-white/5 hover:text-white"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        <h1
          id="auth-heading"
          className="text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          {isSignUp ? "Create your account" : "Welcome back"}
        </h1>
        <p className="mt-3 text-sm leading-6 text-zinc-400">
          {isSignUp
            ? "Join HireLoop and take the next step in your career."
            : "Sign in to HireLoop to find your next opportunity."}
        </p>

        <form onSubmit={handleSubmit} className="mt-7 space-y-5">
          {isSignUp && (
            <label
              htmlFor="name"
              className="block text-sm font-medium text-zinc-200"
            >
              Full name
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your full name"
                required
                maxLength={100}
                className={inputClassName}
              />
            </label>
          )}
          {isSignUp && (
            <label htmlFor="role" className="block text-sm font-medium text-zinc-200">
              Account role
              <select id="role" name="role" defaultValue="seeker" required className={inputClassName}>
                <option value="seeker">Seeker</option>
                <option value="recruiter">Recruiter</option>
                <option value="admin">Admin</option>
              </select>
            </label>
          )}
          <label
            htmlFor="email"
            className="block text-sm font-medium text-zinc-200"
          >
            Email address
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
              className={inputClassName}
            />
          </label>
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-zinc-200"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete={isSignUp ? "new-password" : "current-password"}
                placeholder={
                  isSignUp ? "Create a password" : "Enter your password"
                }
                required
                minLength={isSignUp ? 8 : undefined}
                aria-describedby={isSignUp ? "password-hint" : undefined}
                className={cn(inputClassName, "pr-14")}
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label={showPassword ? "Hide password" : "Show password"}
                aria-pressed={showPassword}
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-3 right-1 size-10 text-zinc-400 hover:bg-white/5 hover:text-white focus-visible:ring-violet-400"
              >
                {showPassword ? (
                  <EyeOff aria-hidden="true" />
                ) : (
                  <Eye aria-hidden="true" />
                )}
              </Button>
            </div>
            {isSignUp && (
              <p id="password-hint" className="mt-2 text-xs text-zinc-500">
                Use at least 8 characters.
              </p>
            )}
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-12 w-full gap-2 border border-white/10 bg-[#6d4aff] text-white shadow-[inset_0_1px_0_#ffffff26] hover:bg-[#7c5cff] focus-visible:ring-violet-400/50"
          >
            {isSubmitting ? "Submitting…" : isSignUp ? "Create account" : "Sign In"}
            <ArrowRight aria-hidden="true" className="size-4" />
          </Button>
          <div role="status" className="text-sm leading-6 text-violet-200">
            {submitted && !isSubmitting && !submitError && "Form submitted successfully."}
          </div>
          {submitError && <p role="alert" className="text-sm text-red-400">{submitError}</p>}
        </form>

        <p className="mt-6 text-center text-sm text-zinc-400">
          {isSignUp ? "Already have an account? " : "Don’t have an account? "}
          <Link
            href={isSignUp ? "/sign-in" : "/sign-up"}
            className="rounded-sm font-medium text-violet-300 outline-none hover:text-violet-200 hover:underline focus-visible:ring-2 focus-visible:ring-violet-400"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </Link>
        </p>
      </section>
    </main>
  )
}
