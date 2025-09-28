import { Card } from "@/components/ui/card"
import { Brain, Heart, Clover as Liver, Users } from "lucide-react"

const educationCards = [
  {
    icon: Brain,
    title: "Brain Damage",
    description:
      "Alcohol impairs cognitive function, memory, and decision-making. Long-term use can lead to permanent brain damage and increased risk of dementia.",
    details:
      "Chronic alcohol use shrinks brain tissue and disrupts neurotransmitter balance, affecting learning and emotional regulation.",
  },
  {
    icon: Liver,
    title: "Liver Disease",
    description:
      "The liver processes alcohol, but excessive consumption leads to fatty liver, hepatitis, cirrhosis, and potentially fatal liver failure.",
    details:
      "Over 3 million people die annually from alcohol-related liver disease. Damage can be irreversible even with treatment.",
  },
  {
    icon: Heart,
    title: "Heart Problems",
    description:
      "Alcohol increases blood pressure, weakens heart muscle, and raises risk of heart disease, stroke, and irregular heartbeat.",
    details:
      "Even moderate drinking can increase cardiovascular risks, especially when combined with other health conditions.",
  },
  {
    icon: Users,
    title: "Social Impact",
    description:
      "Alcohol abuse destroys relationships, careers, and families. It contributes to domestic violence, accidents, and social isolation.",
    details:
      "Alcohol is involved in 40% of violent crimes and significantly increases risk of accidents and risky behavior.",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">The Hidden Dangers</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Alcohol affects every organ system in your body. Understanding these risks is the first step toward making
            informed decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {educationCards.map((card, index) => (
            <Card key={index} className="p-8 bg-card border-border hover:border-accent/50 transition-colors group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <card.icon className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{card.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{card.description}</p>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed">{card.details}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
