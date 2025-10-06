import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MapPin } from "@/components/icons";
import { Facebook, Instagram, X, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CiMobile1 } from "react-icons/ci";
export function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="mx-2 sm:mx-4 lg:mx-10 mb-2 sm:mb-4 rounded-b-xl sm:rounded-b-2xl lg:rounded-b-3xl  bg-black text-white relative overflow-hidden h-[35vw] lg:h-[40vw] xl:h-[55vw] 2xl:h-[40vw] md:h-[40vw]">
      {/* Footer right design - Hidden on mobile and tablets */}
      <div className="absolute flex items-center justify-around bg-white z-10 -top-1 sm:-top-4 lg:-top-4 -right-6 sm:-right-1 rounded-xl sm:rounded-2xl lg:rounded-3xl px-4 sm:px-6 lg:px-8 w-48 sm:w-80 lg:w-[32rem] xl:w-[42rem] h-10 sm:h-12 lg:h-16 font-black text-brand-ink">
        <span className="text-3xl sm:text-xl lg:text-3xl whitespace-nowrap">
          Sh* I’ve Gone Too Far, Send Me Back Up
        </span>
        <img
          src="/footer-hand.png"
          alt="footer-hand"
          className="w-6 h-6 sm:w-8 sm:h-8 ml-2"
        />
      </div>

      {/* Social links - Fully responsive positioning */}
      <div className="absolute bg-white z-20 -top-1 sm:-top-2 lg:-top-4  lg:-left-4 sm:-left-2 rounded-lg sm:rounded-xl portfoliolg:rounded-2xl xl:rounded-3xl p-1 sm:p-2">
        <div className="flex lg:flex-col items-center lg:items-start gap-1 sm:gap-2 lg:gap-3 xl:gap-5 p-1 sm:p-2">
          <a
            href="#"
            aria-label="Facebook"
            className="grid h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 place-items-center rounded-full bg-brand-purple hover:bg-brand-purple transition-colors"
          >
            <Facebook className="h-2.5 w-2.5 sm:h-3 sm:w-3 lg:h-4 lg:w-4 xl:h-6 xl:w-6 text-white" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="grid h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 place-items-center rounded-full bg-brand-purple hover:bg-brand-purple transition-colors"
          >
            <Instagram className="h-2.5 w-2.5 sm:h-3 sm:w-3 lg:h-4 lg:w-4 xl:h-6 xl:w-6 text-white" />
          </a>
          <a
            href="#"
            aria-label="Twitter/X"
            className="grid h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 place-items-center rounded-full bg-brand-purple hover:bg-brand-purple transition-colors"
          >
            <X className="h-2.5 w-2.5 sm:h-3 sm:w-3 lg:h-4 lg:w-4 xl:h-6 xl:w-6 text-white" />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="grid h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 place-items-center rounded-full bg-brand-purple hover:bg-brand-purple transition-colors"
          >
            <Linkedin className="h-2.5 w-2.5 sm:h-3 sm:w-3 lg:h-4 lg:w-4 xl:h-6 xl:w-6 text-white" />
          </a>
        </div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-20 py-6 sm:py-20 md:py-10 lg:py-14">
        {/* Main content section */}
        <div className="mb-6 sm:mb-8 sm:mt-20 md:mb-10 lg:mb-12">
          {/* Links Container - Fully responsive grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-10">
            {/* Explore Links */}
            <div className="space-y-3 sm:space-y-4 mt-2 md:mt-[-2vw] ">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-white font-bold mb-3 sm:mb-4 lg:mb-5 xl:mb-6">
                Explore
              </h3>
              <ul
                className="space-y-2 sm:space-y-3 lg:space-y-4"
                style={{ color: "#696969" }}
              >
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors text-xs sm:text-sm md:text-base block py-1"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors text-xs sm:text-sm md:text-base block py-1"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors text-xs sm:text-sm md:text-base block py-1"
                  >
                    Our Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors text-xs sm:text-sm md:text-base block py-1"
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors text-xs sm:text-sm md:text-base block py-1"
                  >
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>

            {/* Useful Links */}
            <div className="space-y-3 sm:space-y-4  md:mt-[-2vw] ">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-white font-bold mb-3 sm:mb-4 lg:mb-5 xl:mb-6">
                Useful Links
              </h3>
              <ul
                className="space-y-2 sm:space-y-3 lg:space-y-4"
                style={{ color: "#696969" }}
              >
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors text-xs sm:text-sm md:text-base block py-1"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors text-xs sm:text-sm md:text-base block py-1"
                  >
                    Terms And Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors text-xs sm:text-sm md:text-base block py-1"
                  >
                    FAQ's
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors text-xs sm:text-sm md:text-base block py-1"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Get In Touch - Full width on mobile, spans 2 cols on tablet */}
            <div className="sm:col-span-2 lg:col-span-1 space-y-3 sm:space-y-4  md:mt-[2vw] ">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-white font-bold mb-3 sm:mb-4 lg:mb-5 xl:mb-6">
                Get In Touch
              </h3>
              <div
                className="space-y-3 sm:space-y-4 lg:space-y-5"
                style={{ color: "#696969" }}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <CiMobile1 className="w-6 h-6 font-bold sm:font-bold sm:w-6 sm:h-6 text-lime-400 flex-shrink-1" />
                  <span className="text-xs sm:text-sm md:text-base">
                    012 1234567 890
                  </span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <Mail className="w-6 h-6 sm:w-6 sm:h-6 text-lime-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base break-all sm:break-normal">
                    hello@example.com
                  </span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <MapPin className="w-6 h-6 sm:w-6 sm:h-6 text-lime-400 mt-1 flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base leading-relaxed">
                    1 Gibfield Park Avenue Atherton Manchester M46 0SU
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className=" w-full absolute bottom-0 left-0 pt-4 sm:pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6 mb-4 sm:mb-6 border-white/40 border-b pb-10 px-20">
            <div className="w-full md:w-auto">
              <h2 className="text-base sm:text-2xl md:text-6xl lg:text-7xl xl:text-[5rem] text-white font-bold font-rf-dewi">
                Where Quotes Meet Purpose.
              </h2>
            </div>
            <div className="hidden md:flex items-center relative right-40 top-6 transform -translate-y-[35%]">
              <Button
                onClick={() => navigate("/quote")}
                className="flex !text-brand-ink text-lg items-center rounded-full bg-lime-300 w-[10vw] py-6 font-black"
              >
                Get A Quote
              </Button>
              <img
                src="/Arrow 1-1.svg"
                alt="arrow"
                className="p-[18px] rounded-full bg-lime-300 text-brand-ink absolute left-[9vw]"
              />
            </div>
          </div>

          {/* Copyright section */}
          <div className="flex w-full sm:flex-row lg:flex-row justify-between gap-2 items-start sm:items-center pb-6 text-xs sm:text-sm text-white sm:gap-4 px-20">
            <div className="flex ">
              <span className="w-36">
                <img src="/SwanLogics-logo-black.png" alt="" />
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 text-center sm:text-left">
              <span className="whitespace-nowrap text-base sm:text-base sm:pr-5 lg:pr-10">
                © Mercury Sole Ltd 2025
              </span>
              <span className="whitespace-nowrap text-base sm:text-base  border-l-[1px] border-[#d0ff7194] sm:px-5 lg:px-10">
                Web Design Manchester
              </span>
              <span className="whitespace-nowrap text-base sm:text-base  mt-2 sm:mt-0 border-l-[1px] border-[#d0ff7194] sm:pl-5 lg:pl-10">
                All Rights Reserved
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
