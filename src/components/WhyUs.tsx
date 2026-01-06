import { Clock, DollarSign, ThumbsUp, MapPin } from "lucide-react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

function AnimatedCounter({ value, suffix = "", startValue = 0 }: { value: number; suffix?: string; startValue?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(startValue);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref} />;
}

const reasons = [
  {
    icon: Clock,
    title: "Always On Time",
    description: "We show up when we say we will. Your schedule matters to us.",
  },
  {
    icon: DollarSign,
    title: "Simple Pricing",
    description: "Upfront quotes with no hidden fees. What we quote is what you pay.",
  },
  {
    icon: ThumbsUp,
    title: "Quality Guaranteed",
    description: "Not happy? We'll make it right. Your satisfaction is our priority.",
  },
  {
    icon: MapPin,
    title: "Locally Owned",
    description: "We're your neighbors. We care about Melbourne's homes and businesses.",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why Choose Us</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Lawn Care You Can{" "}
              <span className="text-primary">Actually Rely On</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We're not the biggest lawn care company in Melbourne — but we might be the most reliable. Our promise is simple: show up on time, do it right, and make your lawn look better every week.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <span className="block font-display text-3xl md:text-4xl font-bold text-primary">
                  <AnimatedCounter value={500} suffix="+" startValue={100} />
                </span>
                <span className="text-sm text-muted-foreground">Happy Customers</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center"
              >
                <span className="block font-display text-3xl md:text-4xl font-bold text-primary">
                  <AnimatedCounter value={5} suffix="+" startValue={1} />
                </span>
                <span className="text-sm text-muted-foreground">Years Experience</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center"
              >
                <span className="block font-display text-3xl md:text-4xl font-bold text-primary">
                  <AnimatedCounter value={100} suffix="%" startValue={50} />
                </span>
                <span className="text-sm text-muted-foreground">Satisfaction Rate</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Reasons Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 p-5 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                  <reason.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
