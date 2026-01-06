import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How often should I have my lawn mowed?",
      answer: "We recommend mowing your lawn once a week during the growing season (spring and summer) and every 2 weeks during fall. This keeps your lawn healthy and looking its best. Our maintenance packages include regular scheduled visits."
    },
    {
      question: "Do you offer free estimates?",
      answer: "Yes! We provide free, no-obligation estimates for all our services. Simply contact us via phone, email, or our contact form, and we'll schedule a convenient time to assess your property and discuss your landscaping needs."
    },
    {
      question: "What areas do you service?",
      answer: "We proudly serve Melbourne and surrounding suburbs. This includes residential and commercial properties throughout the greater Melbourne area. Contact us to confirm we service your specific location."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Absolutely! We are fully licensed, bonded, and insured. This protects both our team and your property. We carry comprehensive liability insurance and workers' compensation for all our employees."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, checks, all major credit cards (Visa, Mastercard, American Express), and bank transfers. Payment is typically due upon completion of service, and we can also set up recurring payments for maintenance packages."
    },
    {
      question: "Do you provide seasonal services?",
      answer: "Yes! We offer seasonal services including spring cleanup, fall leaf removal, winterization, mulching, and more. Our team can help prepare your landscape for each season to keep it healthy and beautiful year-round."
    },
    {
      question: "How quickly can you start a project?",
      answer: "For maintenance services, we can often start within a few days. Larger landscaping projects may require 1-2 weeks for planning and scheduling. During peak season (spring/summer), we recommend booking in advance."
    },
    {
      question: "Do you guarantee your work?",
      answer: "Yes! We stand behind our work with a satisfaction guarantee. If you're not completely happy with our service, we'll make it right. For installations like sod and plants, we offer specific warranties detailed in your service agreement."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-secondary/30" id="faq">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">FAQ</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Find answers to common questions about our lawn care and landscaping services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background rounded-lg shadow-soft overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-secondary/50 transition-colors"
              >
                <span className="font-semibold text-foreground pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-primary" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
