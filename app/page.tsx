import { Hero } from "@/components/hero"
import {
  Features,
  Footer,
  JobDiscovery,
  NextRole,
} from "@/components/home-sections"
import { Pricing } from "@/components/pricing"

export default function Page() {
  return (
    <>
      <main
        id="main-content"
        className="min-h-[calc(100svh-81px)] bg-[#0a0a0b] text-white"
      >
        <Hero />
        <JobDiscovery />
        <Features />
        <Pricing />
        <NextRole />
      </main>
      <Footer />
    </>
  )
}
