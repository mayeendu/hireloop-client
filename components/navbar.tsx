"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

import logo from "@/app/images/logo.png"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"

const links = [
  { label: "Browse Jobs", href: "/jobs" },
  { label: "Company", href: "/company" },
  { label: "Pricing", href: "/pricing" },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)

  function navigationLinks(mobile = false) {
    return links.map(({ label, href }) => {
      const active = pathname === href || pathname.startsWith(`${href}/`)

      return (
        <Link
          key={href}
          href={href}
          aria-current={active ? "page" : undefined}
          onClick={() => setOpen(false)}
          className={cn(
            "rounded-md text-sm transition-colors outline-none hover:text-white focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#111113]",
            active ? "font-semibold text-white" : "text-[#a1a1aa]",
            mobile ? "block px-3 py-3 hover:bg-white/5" : "px-1 py-2"
          )}
        >
          {label}
        </Link>
      )
    })
  }

  function signIn(mobile = false) {
    return (
      <div className={cn("flex items-center gap-3", mobile && "flex-col")}>
        <Button
          nativeButton={false}
          variant="ghost"
          render={<Link href="/sign-in" />}
          onClick={() => setOpen(false)}
          className={cn(
            "h-10 px-4 text-white hover:bg-white/5 hover:text-white focus-visible:ring-violet-400/50",
            mobile && "w-full"
          )}
        >
          Sign In
        </Button>
        <Button
          nativeButton={false}
          render={<Link href="/sign-up" />}
          onClick={() => setOpen(false)}
          className={cn(
            "h-10 rounded-lg border border-white/10 bg-[#6d4aff] px-5 text-sm font-medium text-white shadow-[inset_0_1px_0_0_#ffffff26] hover:bg-[#7c5cff] focus-visible:border-violet-400 focus-visible:ring-violet-400/50",
            mobile && "w-full"
          )}
        >
          Get Started
        </Button>
      </div>
    )
  }

  return (
    <header className="border-b border-white/10 bg-[#111113] text-white">
      <Collapsible
        open={open}
        onOpenChange={setOpen}
        onKeyDown={(event) => {
          if (event.key === "Escape" && open) {
            setOpen(false)
            triggerRef.current?.focus()
          }
        }}
        className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"
      >
        <div className="flex h-20 items-center justify-between gap-6">
          <Link
            href="/"
            aria-label="HireLoop home"
            onClick={() => setOpen(false)}
            className="shrink-0 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#111113]"
          >
            <Image
              src={logo}
              alt="HireLoop"
              width={153}
              height={43}
              preload
              className="h-auto w-32 sm:w-[153px]"
            />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <nav
              aria-label="Main navigation"
              className="flex items-center gap-7 lg:gap-9"
            >
              {navigationLinks()}
            </nav>
            <div className="border-l border-white/15 pl-8">{signIn()}</div>
          </div>

          <CollapsibleTrigger
            ref={triggerRef}
            render={<Button variant="ghost" size="icon" />}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className="size-11 text-white hover:bg-white/10 hover:text-white focus-visible:ring-violet-400 md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </CollapsibleTrigger>
        </div>

        <CollapsibleContent className="border-t border-white/10 pb-5 md:hidden">
          <nav
            aria-label="Mobile navigation"
            className="flex flex-col gap-1 py-3"
          >
            {navigationLinks(true)}
          </nav>
          {signIn(true)}
        </CollapsibleContent>
      </Collapsible>
    </header>
  )
}
