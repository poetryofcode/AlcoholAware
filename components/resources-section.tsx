import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Users, BookOpen } from "lucide-react"

const resources = [
  {
    icon: Phone,
    title: "Crisis Hotline",
    description: "Immediate support available 24/7 for those in crisis",
    contact: "Call 988 (US) or your local emergency number",
    action: "Call Now",
  },
  {
    icon: MessageCircle,
    title: "Online Support",
    description: "Chat with trained counselors and peer support groups",
    contact: "Available through various platforms and apps",
    action: "Find Support",
  },
  {
    icon: Users,
    title: "Support Groups",
    description: "Connect with others in recovery through local meetings",
    contact: "AA, NA, SMART Recovery, and other programs",
    action: "Find Meetings",
  },
  {
    icon: BookOpen,
    title: "Educational Resources",
    description: "Learn more about addiction, recovery, and health",
    contact: "WHO, CDC, NIAAA, and medical institutions",
    action: "Learn More",
  },
]

export function ResourcesSection() {
  return (
    <section id="resources" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get Help and Support</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recovery is possible. These resources provide support, information, and professional help for those affected
            by alcohol.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <Card key={index} className="p-8 bg-card border-border hover:border-accent/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <resource.icon className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{resource.title}</h3>
                  <p className="text-muted-foreground mb-3 leading-relaxed">{resource.description}</p>
                  <p className="text-sm text-muted-foreground/80 mb-4">{resource.contact}</p>
                  <Button variant="outline" size="sm">
                    {resource.action}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="p-8 bg-accent/10 border border-accent/20 rounded-lg">
            <h3 className="text-xl font-semibold text-foreground mb-4">Remember: You Are Not Alone</h3>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Millions of people struggle with alcohol-related problems. Seeking help is a sign of strength, not
              weakness. Professional treatment and support can help you or your loved ones overcome alcohol dependency
              and build a healthier future.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
