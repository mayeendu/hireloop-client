import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, MapPin, Search } from "lucide-react"

import globe from "@/app/images/globe.png"
import { Button } from "@/components/ui/button"

const trendingPositions = [
  "Product Designer",
  "AI Engineering",
  "Dev-ops Engineer",
]

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden border-b border-white/10 bg-[#0a0a0b] text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute top-0 left-1/2 h-80 w-[min(90vw,900px)] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[100px]" />
        <Image
          src={globe}
          alt=""
          sizes="(max-width: 768px) 100vw, 1000px"
          className="absolute -bottom-105 left-1/2 w-200 max-w-none -translate-x-1/2 opacity-30 sm:-bottom-147.5 sm:w-250"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0b]/20 via-[#0a0a0b]/40 to-[#0a0a0b]/80" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center px-5 pt-16 pb-16 text-center sm:px-8 sm:pt-24 sm:pb-20 lg:px-10 lg:pt-28 lg:pb-24">
        <p className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-violet-400/20 bg-violet-400/5 px-4 py-2 font-mono text-[11px] text-violet-200 sm:text-xs">
          <span
            aria-hidden="true"
            className="size-1.5 shrink-0 rounded-full bg-violet-400 shadow-[0_0_10px_#a78bfa]"
          />
          <span>
            <strong className="font-semibold text-white">50,000+</strong> new
            jobs this month
          </span>
        </p>

        <h1
          id="hero-heading"
          className="mt-7 max-w-4xl text-[clamp(2.5rem,6.5vw,5rem)] leading-[1.08] font-bold tracking-[-0.055em] text-balance"
        >
          Find Your{" "}
          <span className="bg-linear-to-r from-violet-300 via-[#a78bfa] to-[#7958ff] bg-clip-text text-transparent">
            Dream Job
          </span>{" "}
          Today
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-pretty text-[#a1a1aa] sm:text-lg sm:leading-8">
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role faster.
        </p>

        <form
          action="/jobs"
          method="get"
          role="search"
          aria-label="Find jobs"
          className="mt-10 flex w-full max-w-4xl flex-col gap-2 rounded-2xl border border-white/15 bg-[#171719] p-2 text-left shadow-[0_16px_60px_-20px_#000000,inset_0_1px_0_#ffffff08] sm:flex-row sm:items-center sm:rounded-xl"
        >
          <label className="flex min-w-0 flex-1 items-center gap-3 px-3 focus-within:rounded-lg focus-within:ring-2 focus-within:ring-violet-400">
            <Search
              aria-hidden="true"
              className="size-5 shrink-0 text-[#71717a]"
            />
            <span className="sr-only">Job title, skill or company</span>
            <input
              name="q"
              type="search"
              placeholder="Job title, skill or company"
              className="h-12 w-full min-w-0 bg-transparent text-sm text-white outline-none placeholder:text-[#8b8b95]"
            />
          </label>
          <div
            aria-hidden="true"
            className="mx-3 border-t border-white/10 sm:mx-0 sm:h-7 sm:border-t-0 sm:border-l"
          />
          <label className="flex min-w-0 flex-1 items-center gap-3 px-3 focus-within:rounded-lg focus-within:ring-2 focus-within:ring-violet-400 sm:max-w-64">
            <MapPin
              aria-hidden="true"
              className="size-5 shrink-0 text-[#71717a]"
            />
            <span className="sr-only">Location or Remote</span>
            <input
              name="location"
              type="text"
              placeholder="Location or Remote"
              className="h-12 w-full min-w-0 bg-transparent text-sm text-white outline-none placeholder:text-[#8b8b95]"
            />
          </label>
          <Button
            type="submit"
            className="h-12 gap-2 rounded-lg border border-white/10 bg-[#6d4aff] px-6 text-sm text-white shadow-[inset_0_1px_0_#ffffff26] hover:bg-[#7c5cff] focus-visible:ring-violet-400/50"
          >
            <Search aria-hidden="true" className="size-4" />
            Search
          </Button>
        </form>

        <div className="mt-5 flex max-w-full flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs sm:text-sm">
          <span className="text-[#8b8b95]">Trending Position:</span>
          {trendingPositions.map((position) => (
            <Link
              key={position}
              href={{ pathname: "/jobs", query: { q: position } }}
              className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/3 px-2.5 py-1.5 text-[#c4c4cc] transition-colors outline-none hover:border-violet-400/40 hover:bg-violet-400/10 hover:text-white focus-visible:ring-2 focus-visible:ring-violet-400"
            >
              {position}
              <ArrowUpRight
                aria-hidden="true"
                className="size-3.5 text-[#71717a]"
              />
            </Link>
          ))}
        </div>

        <p className="mt-14 max-w-sm text-sm leading-6 text-[#a1a1aa] sm:mt-20 sm:max-w-none">
          Assisting over{" "}
          <strong className="font-medium text-white">15,000 job seekers</strong>{" "}
          find their dream positions.
        </p>
      </div>
    </section>
  )
}
