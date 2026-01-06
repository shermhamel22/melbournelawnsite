import { Building2, TreeDeciduous, Flower2, Grid3X3, Lightbulb, Shrub } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const services = [
  {
    icon: Building2,
    title: "Commercial Property Maintenance",
    description: "Attention property managers: Contact us to bid on your Melbourne lawn service.",
    cta: "Get a Bid",
  },
  {
    icon: TreeDeciduous,
    title: "Tree Trimming & Removal",
    description: "Trim or remove any tree with an ISA Certified Arborist on staff.",
    cta: "Learn More",
  },
  {
    icon: Flower2,
    title: "Landscaping Design & Install",
    description: "We design and install beautiful landscapes that transform your property.",
    cta: "See Our Work",
  },
  {
    icon: Grid3X3,
    title: "Pavers",
    description: "Patios, walkways, driveways, and pool decks — professionally installed.",
    cta: "Get a Quote",
  },
  {
    icon: Lightbulb,
    title: "Landscape Lighting",
    description: "Landscape lighting will enhance any property with beauty and security.",
    cta: "Illuminate Your Yard",
  },
  {
    icon: Shrub,
    title: "New Lawn & Sod Installs",
    description: "Best grass in town! Fresh, lush sod installed by professionals.",
    cta: "Get Started",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">What We Do</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Simple Services. Outstanding Results.
          </h2>
          <p className="text-muted-foreground text-lg">
            No complicated packages — just reliable lawn care that keeps your property looking great.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-5 flex-grow">
                {service.description}
              </p>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href="#contact">{service.cta}</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
