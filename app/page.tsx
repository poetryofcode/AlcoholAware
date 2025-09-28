import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { EducationSection } from "@/components/education-section"
import { StatisticsSection } from "@/components/statistics-section"
import { ResourcesSection } from "@/components/resources-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <EducationSection />
      <StatisticsSection />
      <ResourcesSection />
      <Footer />
    </main>
  )
}
