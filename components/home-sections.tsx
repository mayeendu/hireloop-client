import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  Bookmark,
  BriefcaseBusiness,
  Building2,
  ChartNoAxesCombined,
  CircleDollarSign,
  FileUser,
  MapPin,
  MousePointer2,
  Search,
  Sparkles,
  TrendingUp,
} from "lucide-react"

import logo from "@/app/images/logo.png"
import ctaBackground from "@/app/images/cta-bg.png"
import { Button } from "@/components/ui/button"

const container = "mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"
const linkFocus =
  "outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0a0a0b]"

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
      <p className="mb-4 font-mono text-xs tracking-[0.18em] text-violet-400 uppercase">
        {label}
      </p>
      <h2 className="text-3xl leading-tight font-semibold tracking-[-0.04em] text-balance sm:text-4xl lg:text-5xl">
        {title}
      </h2>
    </div>
  )
}

const jobs = [
  {
    title: "Frontend Developer",
    location: "New York, USA",
    type: "Hybrid",
    salary: "$80k – $120k",
    tag: "Engineering",
  },
  {
    title: "Product Designer",
    location: "San Francisco, USA",
    type: "Remote",
    salary: "$90k – $140k",
    tag: "Design",
  },
  {
    title: "AI Engineer",
    location: "London, UK",
    type: "Hybrid",
    salary: "$100k – $150k",
    tag: "Engineering",
  },
  {
    title: "Backend Developer",
    location: "Berlin, Germany",
    type: "Remote",
    salary: "$85k – $130k",
    tag: "Engineering",
  },
  {
    title: "UX Researcher",
    location: "Toronto, Canada",
    type: "Hybrid",
    salary: "$75k – $110k",
    tag: "Design",
  },
  {
    title: "DevOps Engineer",
    location: "Austin, USA",
    type: "Remote",
    salary: "$95k – $145k",
    tag: "Engineering",
  },
]

export function JobDiscovery() {
  return (
    <section id="discovery" className="border-b border-white/10 py-16 sm:py-24">
      <div className={container}>
        <SectionHeading
          label="Smart job discovery"
          title="The roles you'd never find by searching"
        />
        <p className="mb-5 text-xs text-zinc-500">Sample opportunities</p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <article
              key={job.title}
              className="group flex flex-col rounded-xl border border-white/10 bg-[#111113] p-6 shadow-[inset_0_1px_0_#ffffff05] transition-colors hover:border-violet-400/40"
            >
              <div className="mb-5 flex items-center justify-between gap-3">
                <span
                  aria-hidden="true"
                  className="flex size-10 items-center justify-center rounded-lg border border-violet-400/20 bg-violet-400/10 text-violet-300"
                >
                  <BriefcaseBusiness className="size-5" />
                </span>
                <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-zinc-400">
                  {job.tag}
                </span>
              </div>
              <h3 className="text-lg font-medium tracking-tight">
                {job.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Showcase your commitment to diversity and inclusion by
                highlighting initiatives.
              </p>
              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs text-zinc-400">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin aria-hidden="true" className="size-3.5" />
                  {job.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <BriefcaseBusiness aria-hidden="true" className="size-3.5" />
                  {job.type}
                </span>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
                <span className="inline-flex items-center gap-1.5 text-sm">
                  <CircleDollarSign
                    aria-hidden="true"
                    className="size-4 text-zinc-500"
                  />
                  {job.salary}
                  <span className="text-xs text-zinc-500">/yr</span>
                </span>
                <Link
                  href={{ pathname: "/jobs", query: { q: job.title } }}
                  className={`inline-flex items-center gap-1 rounded text-xs text-violet-300 hover:text-violet-200 ${linkFocus}`}
                >
                  Apply Now{" "}
                  <ArrowUpRight aria-hidden="true" className="size-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-9 text-center">
          <Button
            nativeButton={false}
            render={<Link href="/jobs" />}
            variant="outline"
            className="h-11 gap-2 border-white/15 bg-white/5 px-5 text-white hover:bg-white/10 hover:text-white"
          >
            View all job openings <ArrowRight aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  )
}

const features = [
  {
    icon: Search,
    title: "Smart Search",
    description: "Find your ideal job with advanced filters.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Salary Insights",
    description: "Get real salary data to negotiate confidently.",
  },
  {
    icon: Building2,
    title: "Top Companies",
    description: "Apply to vetted companies that are hiring.",
  },
  {
    icon: Bookmark,
    title: "Saved Jobs",
    description: "Manage apps & favorites on your dashboard.",
  },
  {
    icon: MousePointer2,
    title: "One-Click Apply",
    description: "Simplify your job applications for an easier process!",
  },
  {
    icon: FileUser,
    title: "Resume Builder",
    description: "Create professional resumes with modern templates.",
  },
  {
    icon: Sparkles,
    title: "Skill-Based Matching",
    description: "Discover jobs that match your skills and experience.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth Resources",
    description: "Boost your career with quick interview tips.",
  },
]

export function Features() {
  return (
    <section id="features" className="border-b border-white/10 py-16 sm:py-24">
      <div className={container}>
        <SectionHeading
          label="Features job"
          title="Everything you need to succeed"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-xl border border-white/10 bg-[#111113] p-6"
            >
              <div className="mb-7 flex size-11 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/10 text-violet-300">
                <Icon aria-hidden="true" className="size-5" />
              </div>
              <h3 className="text-base font-medium tracking-tight">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function NextRole() {
  return (
    <section
      aria-labelledby="next-role-heading"
      className="relative isolate overflow-hidden border-b border-white/10 py-20 sm:py-28"
    >
      <Image
        src={ctaBackground}
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none -z-10 object-cover object-top opacity-60"
      />
      <div className={`${container} flex flex-col items-center text-center`}>
        <p className="mb-5 font-mono text-xs tracking-[0.18em] text-violet-400 uppercase">
          Your next role
        </p>
        <h2
          id="next-role-heading"
          className="max-w-3xl text-3xl leading-tight font-semibold tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl"
        >
          Your next role is already looking for you
        </h2>
        <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
          Build a profile in three minutes. The matches start arriving tomorrow
          morning.
        </p>
        <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <Button
            nativeButton={false}
            render={<Link href="/sign-up" />}
            className="h-12 gap-2 border-white/10 bg-[#6d4aff] px-6 text-white hover:bg-[#7c5cff]"
          >
            Create a free account <ArrowUpRight aria-hidden="true" />
          </Button>
          <Button
            nativeButton={false}
            render={<Link href="#pricing" />}
            variant="outline"
            className="h-12 border-white/15 bg-[#151517] px-6 text-white hover:bg-white/10 hover:text-white"
          >
            View pricing
          </Button>
        </div>
      </div>
    </section>
  )
}

const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "Job discovery", href: "#discovery" },
      { label: "Worker AI", href: "#features" },
      { label: "Companies", href: "/company" },
      { label: "Salary data", href: "#features" },
    ],
  },
  {
    title: "Navigations",
    links: [
      { label: "Help center", href: "/help" },
      { label: "Career library", href: "/resources" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Brand Guideline", href: "/brand" },
      { label: "Newsroom", href: "/newsroom" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-[#0a0a0b] text-white">
      <div className={`${container} pt-14 pb-7 sm:pt-20`}>
        <div className="grid gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              aria-label="HireLoop home"
              className={`inline-block rounded ${linkFocus}`}
            >
              <Image
                src={logo}
                alt="HireLoop"
                width={153}
                height={43}
                className="h-auto w-[153px]"
              />
            </Link>
            <p className="mt-5 max-w-64 text-sm leading-7 text-zinc-400">
              The AI-native career platform. Built for people who take their
              work seriously.
            </p>
          </div>
          {footerGroups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h3 className="mb-5 text-sm font-medium">{group.title}</h3>
              <ul className="space-y-3.5 text-sm text-zinc-400">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={`rounded transition-colors hover:text-violet-300 ${linkFocus}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="flex flex-col items-start justify-between gap-5 pt-7 text-xs text-zinc-500 sm:flex-row sm:items-center">
          <p>
            Copyright {new Date().getFullYear()} HireLoop. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link
              href="/terms"
              className={`rounded hover:text-white ${linkFocus}`}
            >
              Terms & Policy
            </Link>
            <Link
              href="/privacy"
              className={`rounded hover:text-white ${linkFocus}`}
            >
              Privacy Guideline
            </Link>
          </div>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/"
              aria-label="Facebook"
              className={`rounded-lg border border-white/10 p-2 text-zinc-400 hover:text-white ${linkFocus}`}
            >
              <span
                aria-hidden="true"
                className="flex size-4 items-center justify-center font-bold"
              >
                f
              </span>
            </a>
            <a
              href="https://www.linkedin.com/"
              aria-label="LinkedIn"
              className={`rounded-lg border border-white/10 p-2 text-zinc-400 hover:text-white ${linkFocus}`}
            >
              <span
                aria-hidden="true"
                className="flex size-4 items-center justify-center font-bold"
              >
                in
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
