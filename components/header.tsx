import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"

export function Header() {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-accent" />
            <span className="text-xl font-bold text-foreground">AlcoholAware</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="#education" className="text-muted-foreground hover:text-foreground transition-colors">
              Education
            </a>
            <a href="#statistics" className="text-muted-foreground hover:text-foreground transition-colors">
              Statistics
            </a>
            <a href="#resources" className="text-muted-foreground hover:text-foreground transition-colors">
              Resources
            </a>
          </div>

          <Button variant="outline" className="hidden md:flex bg-transparent">
            Get Help
          </Button>
        </nav>
      </div>
    </header>
  )
}
