import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-lawn.jpg";

const Hero = () => {
  const highlights = [
    "On-time, every time",
    "Transparent pricing",
    "Locally owned",
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Beautiful professionally maintained lawn in Melbourne, Florida"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <span 
            className="inline-block px-4 py-1.5 bg-accent/90 text-accent-foreground text-sm font-semibold rounded-full mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Melbourne, FL's Trusted Lawn Care
          </span>
          
          <h1 
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Your Lawn,{" "}
            <span className="text-accent">Done Right.</span>
            <br />
            Every Week.
          </h1>
          
          <p 
            className="text-lg md:text-xl text-background/90 mb-8 max-w-xl animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Dependable lawn care and landscaping for homeowners who want a clean, professional-looking yard — without the hassle.
          </p>

          {/* Highlights */}
          <ul 
            className="flex flex-wrap gap-4 mb-8 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-background/90">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">{item}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row gap-4 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <Button variant="accent" size="xl" asChild>
              <a href="#contact">Get Your Free Quote</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#services">View Services</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
