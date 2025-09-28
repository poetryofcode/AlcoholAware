export function HeroSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="mb-6">
          <span className="text-accent text-sm font-medium tracking-wide uppercase">Health Awareness</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
          Understanding the Real Dangers of Alcohol
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
          Alcohol consumption carries serious health risks that affect millions of people worldwide. Learn about the
          dangers, understand the risks, and discover resources for help and recovery.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-medium transition-colors">
            Learn the Facts
          </button>
          <button className="border border-border hover:bg-secondary text-foreground px-8 py-3 rounded-lg font-medium transition-colors">
            Find Support
          </button>
        </div>
      </div>
    </section>
  )
}
