import { Card } from "@/components/ui/card"

const statistics = [
  {
    number: "3M+",
    label: "Annual Deaths",
    description: "Deaths worldwide attributed to alcohol consumption each year",
  },
  {
    number: "5.1%",
    label: "Global Disease Burden",
    description: "Of all deaths and disability globally are due to alcohol",
  },
  {
    number: "237M",
    label: "Men Affected",
    description: "Men worldwide suffer from alcohol use disorders",
  },
  {
    number: "46M",
    label: "Women Affected",
    description: "Women worldwide suffer from alcohol use disorders",
  },
]

export function StatisticsSection() {
  return (
    <section id="statistics" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">The Global Impact</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            These statistics from the World Health Organization reveal the true scale of alcohol-related harm worldwide.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statistics.map((stat, index) => (
            <Card
              key={index}
              className="p-6 text-center bg-card border-border hover:border-accent/50 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
              <div className="text-sm text-muted-foreground leading-relaxed">{stat.description}</div>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-8 bg-destructive/10 border border-destructive/20 rounded-lg">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">Critical Health Warning</h3>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              No amount of alcohol consumption is safe for health. Even small amounts increase the risk of cancer,
              cardiovascular disease, and other serious health conditions. The safest level of drinking is none.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
