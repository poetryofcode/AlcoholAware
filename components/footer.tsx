import { Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-accent" />
              <span className="text-lg font-bold text-foreground">AlcoholAware</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Providing evidence-based information about the dangers of alcohol consumption to help people make informed
              decisions about their health and wellbeing.
            </p>
            <p className="text-sm text-muted-foreground/80">
              This information is for educational purposes only and should not replace professional medical advice.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#education" className="hover:text-foreground transition-colors">
                  Health Risks
                </a>
              </li>
              <li>
                <a href="#statistics" className="hover:text-foreground transition-colors">
                  Statistics
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:text-foreground transition-colors">
                  Get Help
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Emergency</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Crisis: 988 (US)</li>
              <li>Emergency: 911</li>
              <li>Poison Control: 1-800-222-1222</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 AlcoholAware. Educational content based on WHO and CDC guidelines.</p>
        </div>
      </div>
    </footer>
  )
}
