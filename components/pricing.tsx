"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Check, Gem, Layers, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Starter",
    price: 0,
    icon: Layers,
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
  },
  {
    name: "Growth",
    price: 17,
    icon: Zap,
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
  },
  {
    name: "Premium",
    price: 99,
    icon: Gem,
    features: [
      "Everything in Pro",
      "Multi-profile career portfolios",
      "Shared talent rooms",
      "Recruiter view (read-only)",
    ],
  },
]

export function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="pricing" className="border-b border-white/10 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto mb-9 max-w-2xl text-center">
          <p className="mb-4 font-mono text-xs tracking-[0.18em] text-violet-400 uppercase">
            Pricing
          </p>
          <h2 className="text-3xl leading-tight font-semibold tracking-[-0.04em] text-balance sm:text-4xl lg:text-5xl">
            Pay for the leverage, not the listings
          </h2>
          <div
            role="group"
            aria-label="Billing period"
            className="mt-8 inline-flex gap-1 rounded-lg border border-white/10 bg-[#111113] p-1"
          >
            {[false, true].map((isYearly) => (
              <Button
                key={String(isYearly)}
                variant="ghost"
                aria-pressed={yearly === isYearly}
                onClick={() => setYearly(isYearly)}
                className={cn(
                  "h-10 rounded-md px-5 text-sm hover:text-white",
                  yearly === isYearly
                    ? "bg-[#6d4aff] text-white hover:bg-[#7c5cff]"
                    : "text-zinc-400 hover:bg-white/5"
                )}
              >
                {isYearly ? "Yearly" : "Monthly"}
              </Button>
            ))}
          </div>
          <p className="mt-3 text-xs text-zinc-500">
            {yearly
              ? "Annual total at the monthly rate."
              : "Prices shown per month."}
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {plans.map(({ name, price, icon: Icon, features }) => (
            <article
              key={name}
              className={cn(
                "relative flex flex-col rounded-2xl border bg-[#111113] p-6 sm:p-8",
                name === "Growth"
                  ? "border-violet-500/70 bg-linear-to-b from-violet-500/10 to-[#111113] shadow-[0_0_50px_-25px_#7c3aed]"
                  : "border-white/10"
              )}
            >
              <div className="mb-7 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-violet-300">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="text-lg font-medium">{name}</h3>
              </div>
              <p aria-live="polite" className="flex items-baseline gap-1">
                <span className="text-5xl font-semibold tracking-[-0.05em]">
                  ${yearly ? price * 12 : price}
                </span>
                <span className="text-sm text-zinc-500">
                  /{yearly ? "year" : "month"}
                </span>
              </p>
              <div className="my-7 border-t border-white/10" />
              <p className="mb-5 text-sm text-zinc-300">
                Start building your insights hub:
              </p>
              <ul className="mb-9 flex-1 space-y-4">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm leading-6 text-zinc-400"
                  >
                    <Check
                      aria-hidden="true"
                      className="mt-1 size-4 shrink-0 text-violet-400"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                nativeButton={false}
                render={
                  <Link
                    href={{
                      pathname: "/sign-up",
                      query: {
                        plan: name.toLowerCase(),
                        billing: yearly ? "yearly" : "monthly",
                      },
                    }}
                  />
                }
                className={cn(
                  "h-11 w-full justify-between border px-4 text-white",
                  name === "Growth"
                    ? "border-violet-400/30 bg-[#6d4aff] hover:bg-[#7c5cff]"
                    : "border-white/15 bg-white/5 hover:bg-white/10"
                )}
              >
                Choose This Plan <ArrowUpRight aria-hidden="true" />
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
