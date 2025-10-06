import React, { useState } from "react";
import {
  ArrowUpRight,
  Code,
  Smartphone,
  ShoppingCart,
  Zap,
  Palette,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function ServicesSection() {
  const services = [
    {
      id: "uiux",
      label: "UI/UX",
      icon: Palette,
      description:
        "We craft intuitive and engaging user experiences through meticulous research, wireframing, and prototyping. Our process is designed to understand user behavior deeply, ensuring the final product is not only visually appealing but also easy to navigate and highly effective at achieving your business objectives, leading to increased user satisfaction and conversion.",
      highlights: [],
    },
    {
      id: "javascript",
      label: "JavaScript",
      icon: Code,
      description:
        "Modern front-end & full-stack JavaScript solutions using React, Next.js and Node — performant, accessible and production-ready.",
      highlights: [
        "React & Next.js",
        "Node.js APIs",
        "Performance Optimization",
        "Testing",
      ],
    },
    {
      id: "python",
      label: "Python",
      icon: Code,
      description:
        "Backend systems, APIs and automation built with Python. Clean architecture, tests and deployments that scale.",
      highlights: [
        "Django/FastAPI",
        "Database Design",
        "API Development",
        "DevOps",
      ],
    },
    {
      id: "mobile",
      label: "Mobile App",
      icon: Smartphone,
      description:
        "Native and cross-platform mobile apps focused on UX, performance and native integrations.",
      highlights: [
        "React Native",
        "iOS/Android",
        "App Store Optimization",
        "Push Notifications",
      ],
    },
    {
      id: "ecommerce",
      label: "Ecommerce",
      icon: ShoppingCart,
      description:
        "E-commerce platforms that convert — from UX to checkout optimization and integrations with payment and inventory systems.",
      highlights: [
        "Shopify/WooCommerce",
        "Payment Integration",
        "Inventory Management",
        "Analytics",
      ],
    },
    {
      id: "nocode",
      label: "No-Code",
      icon: Zap,
      description:
        "Rapid prototypes and production apps using no-code/low-code tools to validate ideas fast.",
      highlights: [
        "Webflow",
        "Airtable",
        "Zapier Automation",
        "MVP Development",
      ],
    },
  ];

  const [selected, setSelected] = useState(services[0].id);
  const active = services.find((s) => s.id === selected)!;
  const navigate = useNavigate();

  return (
    <section className="bg-black text-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 min-h-[500px] lg:h-[696px] rounded-t-[4rem]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 sm:mb-12 lg:mb-16 gap-4 lg:px-16">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white">
              Our Services
            </h2>
            <p className="text-xs sm:text-sm text-white sm:hidden">
              We design and develop digital experiences that drive growth.
            </p>
          </div>
          <p className="hidden sm:block text-sm text-white max-w-md">
            We design and develop digital experiences that drive growth.
          </p>
          <div className="hidden lg:flex items-center gap-3 relative">
            <Button
              onClick={() => navigate("/services")}
              className="flex !text-brand-ink items-center gap-2 rounded-full bg-lime-300 px-6 py-5 font-bold"
            >
              View All Services
            </Button>
            <img
              src="/Arrow 1-1.svg"
              alt="arrow"
              className="p-[14px] rounded-full bg-lime-300 text-brand-ink absolute  left-[139px]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Service Menu Buttons */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            {/* Mobile & Tablet: Horizontal scrollable buttons */}
            <div className="flex lg:hidden overflow-x-auto space-x-3 pb-4 scrollbar-hide justify-center md:justify-center">
              <div className="flex space-x-3 mx-auto">
                {services.map((service) => {
                  const isActive = selected === service.id;
                  return (
                    <button
                      key={service.id}
                      onClick={() => setSelected(service.id)}
                      className={`flex-shrink-0 py-2 px-3 md:px-4 font-black rounded-lg transition-all text-sm md:text-base ${
                        isActive
                          ? "bg-lime-400 text-black font-black"
                          : "bg-white text-black hover:bg-gray-100 font-black"
                      }`}
                    >
                      {service.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Desktop: Vertical buttons */}
            <div className="hidden lg:flex lg:flex-col space-y-3">
              {services.map((service) => {
                const isActive = selected === service.id;
                return (
                  <button
                    key={service.id}
                    onClick={() => setSelected(service.id)}
                    className={`w-[50%] relative left-[5vw] text-center py-[17px] px-2 rounded-lg transition-all ${
                      isActive
                        ? "bg-lime-400 text-black font-black"
                        : "bg-white text-black hover:bg-gray-100 font-black"
                    }`}
                  >
                    {service.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Service Detail Card */}
          <div className="lg:col-span-5 order-1 lg:order-2 bg-black border border-lime-400/50 rounded-2xl p-4 sm:p-6 lg:p-8 w-full lg:w-[85%] lg:relative lg:right-[6vw] lg:h-[80%] mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-lime-400 p-2 rounded-full flex-shrink-0">
                <active.icon className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl text-white font-bold">
                {active.label}
              </h3>
            </div>

            <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
              {active.description}
            </p>

            {/* Mobile CTA Button */}
            <div className="flex lg:hidden items-center justify-center w-full">
              <Button
                onClick={() => navigate("/services")}
                className="flex !text-brand-ink items-center gap-2 rounded-full bg-lime-300 px-6 py-3 font-bold text-sm w-full sm:w-auto justify-center max-w-xs mx-auto"
              >
                View All Services
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3 relative">
              <Button
                onClick={() => navigate("/services")}
                className="flex !text-brand-ink items-center gap-2 rounded-full bg-lime-300 px-6 py-5 font-bold"
              >
                View All Services
              </Button>
              <img
                src="/Arrow 1-1.svg"
                alt="arrow"
                className="p-[14px] rounded-full bg-lime-300 text-brand-ink absolute  left-[141px]"
              />
            </div>
          </div>

          {/* Service Wheel */}
          <div className="lg:col-span-4 order-3 flex justify-center items-center lg:relative lg:right-20 lg:top-[-4vw]">
            <div className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[600px] xl:min-w-[500px] mx-auto">
              <img
                src="/circle.png"
                alt="langs wheel"
                className="w-full h-auto mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
