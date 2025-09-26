import React from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState("Home");

  const links = [
    { label: "Home", href: "/home", withStar: true },
    { label: "Our Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Quotation", href: "/quote" },
    { label: "Contact Us", href: "/contact" },
  ];

  // Handle scroll-based active section detection
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "portfolio"];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            const linkLabel = links.find(link => link.href === `#${section}`)?.label || "Home";
            setActiveTab(linkLabel);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (label: string, href: string) => {
    setActiveTab(label);
    setOpen(false); // Close mobile menu
    
    // Smooth scroll for anchor links
    if (href.startsWith("#")) {
      const element = document.getElementById(href.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-black/5">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 sm:px-6 py-4 md:px-10">
        {/* Left: Logo */}
        <a 
          href="#home" 
          className="flex items-center gap-3"
          onClick={() => handleLinkClick("Home", "/home")}
        >
          <img src="/SwanLogics-logo.png" alt="SwanLogics logo" className="h-6 sm:h-8 w-auto" />
        </a>

        {/* Mobile menu button */}
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
        >
          <span className="sr-only">Menu</span>
          <svg 
            viewBox="0 0 24 24" 
            className="h-6 w-6" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Center: Desktop Links */}
        <div className="hidden items-center gap-6 lg:gap-8 md:flex">
          {links.map((link) => {
            const isActive = activeTab === link.label;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => handleLinkClick(link.label, link.href)}
                className={`relative text-sm lg:text-base xl:text-[18px] transition-colors ${
                  isActive 
                    ? "text-brand-ink font-medium" 
                    : "text-brand-ink/70 hover:text-brand-ink"
                }`}
              >
                {link.label}
                {link.withStar && (
                  <img
                    src="/Star.png"
                    alt="decorative star"
                    className={`absolute left-1/2 top-full h-2 w-2 lg:h-3 lg:w-3 -translate-x-1/2 pt-1 transition-all duration-200 ${
                      isActive ? "opacity-100 brightness-110 scale-110" : "opacity-60 scale-100"
                    }`}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Right: CTA */}
        <div className="hidden items-center gap-2 lg:gap-3 md:flex">
          <img src="/Vector.svg" alt="decorative vector" className="h-4 w-4 lg:h-5 lg:w-5 opacity-80" />
          <Button className="flex items-center gap-2 rounded-full bg-[#D0FF71] px-4 lg:px-5 py-2 lg:py-3 font-bold text-black hover:brightness-95 text-sm lg:text-base">
            Start A Project
            <img src="/Arrow 1-1.svg" alt="arrow" className="h-3 w-3 lg:h-4 lg:w-4" />
          </Button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="mx-auto block max-w-[1400px] border-t border-black/5 px-4 sm:px-6 pb-4 md:hidden bg-white/95 backdrop-blur">
          <div className="flex flex-col gap-4 py-4">
            {links.map((link) => {
              const isActive = activeTab === link.label;
              return (
                <a 
                  key={link.label} 
                  href={link.href}
                  onClick={() => handleLinkClick(link.label, link.href)}
                  className={`text-base transition-colors py-2 ${
                    isActive 
                      ? "text-brand-ink font-medium border-l-2 border-[#D0FF71] pl-3" 
                      : "text-brand-ink/70"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <Button className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#D0FF71] px-5 py-3 font-bold text-black">
              Start A Project
              <img src="/Arrow 1-1.svg" alt="arrow" className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
