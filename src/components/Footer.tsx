import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">J</span>
              </div>
              <div>
                <span className="font-display font-semibold text-lg text-background">Melbourne</span>
                <span className="block text-xs text-background/60 -mt-1">Lawn & Landscape</span>
              </div>
            </div>
            <p className="text-sm text-background/60">
              Dependable lawn care for Melbourne, FL homeowners.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <nav className="flex justify-center gap-6">
              <a href="#services" className="text-sm hover:text-accent transition-colors">Services</a>
              <a href="#why-us" className="text-sm hover:text-accent transition-colors">Why Us</a>
              <a href="#contact" className="text-sm hover:text-accent transition-colors">Contact</a>
            </nav>
          </div>

          {/* Social */}
          <div className="flex justify-end gap-4">
            <a 
              href="#" 
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-8 text-center">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Melbourne Lawn & Landscape. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
