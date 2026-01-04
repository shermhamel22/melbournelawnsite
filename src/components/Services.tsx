import { Leaf, Scissors, TreePine, Calendar } from "lucide-react";

const services = [
  {
    icon: Leaf,
    title: "Lawn Mowing & Edging",
    description: "Precise mowing and clean edges that make your property stand out. We leave your lawn looking sharp every visit.",
  },
  {
    icon: Scissors,
    title: "Trimming & Cleanup",
    description: "Hedges, bushes, and general cleanup to keep everything neat. No mess left behind — ever.",
  },
  {
    icon: TreePine,
    title: "Landscape Maintenance",
    description: "Mulching, weeding, and basic landscape upkeep to keep your outdoor spaces looking their best year-round.",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Weekly, bi-weekly, or one-time service. We work around your schedule to keep your lawn perfect.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">What We Do</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Simple Services. Outstanding Results.
          </h2>
          <p className="text-muted-foreground text-lg">
            No complicated packages — just reliable lawn care that keeps your property looking great.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
