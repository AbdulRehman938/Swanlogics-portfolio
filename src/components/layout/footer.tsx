import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MapPin } from "@/components/icons";
import { Facebook, Instagram, X, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CiMobile1 } from "react-icons/ci";

export function Footer() {
  const navigate = useNavigate();
  return (
    <>
      {/* Desktop Footer */}
      <footer
        className="hidden md:block mx-2 sm:mx-4 lg:mx-10 mb-2 sm:mb-4 rounded-b-xl sm:rounded-b-2xl lg:rounded-b-3xl text-white relative overflow-hidden h-[35vw] lg:h-[40vw] xl:h-[55vw] 2xl:h-[40vw] md:h-[40vw]"
        style={{
          backgroundImage: "url(/footer-box.png)",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Footer right design - Hidden on mobile and tablets */}
        <div className="absolute flex items-center justify-center bg-transparent z-10 -top-1 sm:-top-4 lg:top-2 lg:right-16 sm:-right-1 px-4 sm:px-6 lg:pr-8 w-20 sm:w-80 lg:w-[25rem] xl:w-[30rem] h-10 sm:h-12 lg:h-16 font-black text-brand-ink xl:top-[6vw] xl:right-[-5vw] 2xl:top-[0vw] 2xl:right-[3vw]">
          <span className="text-xl sm:text-sm lg:text-[22px] inline-block whitespace-nowrap xl:text-[18px] 2xl:text-[23px]">
            Sh*T I’ve Gone Too Far, Send Me Back Up
          </span>
          <img
            src="/footer-hand.png"
            alt="footer-hand"
            className="w-auto h-4 sm:w-auto sm:h-8 ml-20 lg:relative lg:right-12 lg:h-6 cursor-pointer hover:scale-110 transition-transform xl:right-16"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </div>

        {/* Social links - Fully responsive positioning */}
        <div className="absolute bg-transparent z-20 -top-1 sm:-top-2 lg:-top-4 lg:left-20 sm:-left-2 rounded-lg sm:rounded-xl portfoliolg:rounded-2xl xl:rounded-3xl p-1 sm:p-2 xl:left-[0vw] xl:top-[4vw] 2xl:top-[0vw] 2xl:left-[4vw]">
          <div className="flex lg:flex-col items-center lg:items-start gap-1 sm:gap-2 lg:gap-3 xl:gap-5 p-1 sm:p-2 xl:h-[20vw]">
            <button
              onClick={() =>
                window.open("https://facebook.com/swanlogics", "_blank")
              }
              aria-label="Facebook"
              className="grid h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 xl:h-18 xl:w-18  place-items-center rounded-full bg-brand-purple hover:bg-brand-purple transition-colors"
            >
              <Facebook className="h-2.5 w-2.5 sm:h-3 sm:w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5 text-white" />
            </button>
            <button
              onClick={() =>
                window.open("https://instagram.com/swanlogics", "_blank")
              }
              aria-label="Instagram"
              className="grid h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 xl:h-18 xl:w-18 place-items-center rounded-full bg-brand-purple hover:bg-brand-purple transition-colors"
            >
              <Instagram className="h-2.5 w-2.5 sm:h-3 sm:w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5 text-white" />
            </button>
            <button
              onClick={() =>
                window.open("https://twitter.com/swanlogics", "_blank")
              }
              aria-label="Twitter/X"
              className="grid h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 xl:h-18 xl:w-18 place-items-center rounded-full bg-brand-purple hover:bg-brand-purple transition-colors"
            >
              <X className="h-2.5 w-2.5 sm:h-3 sm:w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5 text-white" />
            </button>
            <button
              onClick={() =>
                window.open("https://linkedin.com/company/swanlogics", "_blank")
              }
              aria-label="LinkedIn"
              className="grid h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 xl:h-18 xl:w-18  place-items-center rounded-full bg-brand-purple hover:bg-brand-purple transition-colors"
            >
              <Linkedin className="h-2.5 w-2.5 sm:h-3 sm:w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5 text-white" />
            </button>
          </div>
        </div>

        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:pl-40 py-6 sm:py-20 md:py-10 lg:py-14 xl:mt-8 xl:pb-0 2xl:-mt-8">
          {/* Main content section */}
          <div className="mb-6 sm:mb-8 sm:mt-20 md:mb-10 lg:mb-12 xl:p-0">
            {/* Links Container */}
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
                    <button
                      onClick={() => navigate("/")}
                      className="hover:text-white transition-colors text-xs sm:text-sm md:text-base block py-1 text-left"
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => navigate("/")}
                      className="hover:text-white transition-colors text-xs sm:text-sm md:text-base block py-1 text-left"
                    >
                      About Us
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => navigate("/services")}
                      className="hover:text-white transition-colors text-xs sm:text-sm md:text-base block py-1 text-left"
                    >
                      Our Services
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => navigate("/")}
                      className="hover:text-white transition-colors text-xs sm:text-sm md:text-base block py-1 text-left"
                    >
                      Our Team
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => navigate("/portfolio")}
                      className="hover:text-white transition-colors text-xs sm:text-sm md:text-base block py-1 text-left"
                    >
                      Portfolio
                    </button>
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
                    <button
                      onClick={() => alert("Privacy Policy page coming soon!")}
                      className="hover:text-white transition-colors text-xs sm:text-sm md:text-base block py-1 text-left"
                    >
                      Privacy Policy
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() =>
                        alert("Terms & Conditions page coming soon!")
                      }
                      className="hover:text-white transition-colors text-xs sm:text-sm md:text-base block py-1 text-left"
                    >
                      Terms And Conditions
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => alert("FAQ page coming soon!")}
                      className="hover:text-white transition-colors text-xs sm:text-sm md:text-base block py-1 text-left"
                    >
                      FAQ's
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => navigate("/contact")}
                      className="hover:text-white transition-colors text-xs sm:text-sm md:text-base block py-1 text-left"
                    >
                      Contact Us
                    </button>
                  </li>
                </ul>
              </div>

              {/* Get In Touch */}
              <div className="sm:col-span-2 lg:col-span-1 space-y-3 sm:space-y-4  md:mt-[2vw] ">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-white font-bold mb-3 sm:mb-4 lg:mb-5 xl:mb-6">
                  Get In Touch
                </h3>
                <div
                  className="space-y-3 sm:space-y-4 lg:space-y-5"
                  style={{ color: "#696969" }}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <CiMobile1 className="w-6 h-6 font-bold text-lime-400" />
                    <span className="text-xs sm:text-sm md:text-base">
                      012 1234567 890
                    </span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Mail className="w-6 h-6 text-lime-400" />
                    <span className="text-xs sm:text-sm md:text-base">
                      hello@example.com
                    </span>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <MapPin className="w-6 h-6 text-lime-400 mt-1" />
                    <span className="text-xs sm:text-sm md:text-base leading-relaxed">
                      1 Gibfield Park Avenue Atherton Manchester M46 0SU
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="w-full absolute bottom-0 left-0 pt-4 sm:pt-6 md:pt-8 xl:bottom-[7vw] 2xl:bottom-[1vw]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center lg:px-32 gap-4 sm:gap-6 mb-4 sm:mb-6 border-white/40 border-b pb-10 px-20 xl:top-[-5rem]">
              <div className="w-full md:w-auto">
                <h2 className="text-sm sm:text-xl md:text-4xl lg:text-6xl xl:text-[4rem] text-white font-bold font-rf-dewi">
                  Where Quotes Meet Purpose.
                </h2>
              </div>
              <div className="hidden md:flex items-center relative right-40 top-6 xl:right-0 transform -translate-y-[35%] 2xl:right-40">
                <Button
                  onClick={() => navigate("/quote")}
                  className="flex !text-brand-ink text-xl items-center rounded-full bg-lime-300 w-[12vw] py-8 font-black"
                >
                  Get A Quote
                </Button>
                <img
                  src="/Arrow 1-1.svg"
                  alt="arrow"
                  className="p-[1.3vw] rounded-full bg-lime-300 text-brand-ink absolute left-[11vw] xl:p-[1.8vw] xl:w-16 2xl:left-[11vw] 2xl:w-[3vw] 2xl:h-[3vw] 2xl:p-4"
                />
              </div>
            </div>

            {/* Copyright section */}
            <div className="flex w-full sm:flex-row lg:flex-row justify-between gap-2 lg:px-32 items-start sm:items-center pb-6 text-xs sm:text-sm text-white sm:gap-4 px-20">
              <div className="flex">
                <span className="w-36">
                  <img src="/Swanlogics logo purple.png" alt="logo" />
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 text-center sm:text-left">
                <span className="whitespace-nowrap text-base sm:text-base sm:pr-5 lg:pr-10">
                  © SwanLogics Ltd 2025
                </span>
                <span className="whitespace-nowrap text-base sm:text-base border-l border-[#d0ff7194] sm:px-5 lg:px-10">
                  Web Design Manchester
                </span>
                <span className="whitespace-nowrap text-base sm:text-base mt-2 sm:mt-0 border-l border-[#d0ff7194] sm:pl-5 lg:pl-10">
                  All Rights Reserved
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ---------------- MOBILE VIEW FOOTER ---------------- */}
      <footer className="md:hidden bg-black text-white px-6 pb-10 rounded-3xl  space-y-10 mx-2 mb-2 border-transparent relative z-10 w-full">
        {/* Scroll to top section - Mobile version */}
        <div className="flex items-center justify-center bg-white rounded-b-xl relative top-[-5vw] w-full h-[20vw] px-4 py-3 mr-4 font-black text-brand-ink">
          <span className="text-lg whitespace-nowrap">
            Sh*T I've Gone Too Far, Send Me Back Up
          </span>
          <img
            src="/footer-hand.png"
            alt="footer-hand"
            className="w-6 h-6 ml-2 cursor-pointer hover:scale-110 transition-transform"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </div>

        {/* Logo and tagline */}
        <div className="flex flex-col items-center text-center space-y-4">
          <img
            src="/Swanlogics logo purple.png"
            alt="SwanLogics logo"
            className="w-24 h-auto"
          />
          <h2 className="text-2xl font-bold text-lime-300">
            Where Quotes Meet Purpose.
          </h2>
        </div>

        {/* Explore and Useful Links */}
        <div className="grid grid-cols-2 gap-8 text-sm text-gray-400">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Explore</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigate("/")}
                  className="hover:text-white text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/")}
                  className="hover:text-white text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/services")}
                  className="hover:text-white text-left"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/")}
                  className="hover:text-white text-left"
                >
                  Our Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/portfolio")}
                  className="hover:text-white text-left"
                >
                  Portfolio
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => alert("Privacy Policy page coming soon!")}
                  className="hover:text-white text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => alert("Terms & Conditions page coming soon!")}
                  className="hover:text-white text-left"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => alert("FAQ page coming soon!")}
                  className="hover:text-white text-left"
                >
                  FAQ's
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/contact")}
                  className="hover:text-white text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-4 text-sm text-gray-400">
          <h3 className="text-white font-bold text-lg">Get In Touch</h3>
          <div className="flex items-center gap-3">
            <CiMobile1 className="text-lime-400 w-5 h-5" />
            <span>012 1234567 890</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-lime-400 w-5 h-5" />
            <span>hello@example.com</span>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="text-lime-400 w-5 h-5 mt-1" />
            <span>1 Gibfield Park Avenue Atherton Manchester M46 0SU</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-5">
          <button
            onClick={() =>
              window.open("https://facebook.com/swanlogics", "_blank")
            }
            className="bg-brand-purple p-3 rounded-full"
          >
            <Facebook className="w-4 h-4 text-white" />
          </button>
          <button
            onClick={() =>
              window.open("https://instagram.com/swanlogics", "_blank")
            }
            className="bg-brand-purple p-3 rounded-full"
          >
            <Instagram className="w-4 h-4 text-white" />
          </button>
          <button
            onClick={() =>
              window.open("https://twitter.com/swanlogics", "_blank")
            }
            className="bg-brand-purple p-3 rounded-full"
          >
            <X className="w-4 h-4 text-white" />
          </button>
          <button
            onClick={() =>
              window.open("https://linkedin.com/company/swanlogics", "_blank")
            }
            className="bg-brand-purple p-3 rounded-full"
          >
            <Linkedin className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button
            onClick={() => navigate("/quote")}
            className="flex items-center gap-2 bg-lime-300 text-brand-ink font-bold rounded-full px-6 py-3"
          >
            Get A Quote
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/20 text-center text-sm text-gray-400 space-y-2">
          <p>© SwanLogics Ltd 2025</p>
          <p>Web Design Manchester</p>
          <p>All Rights Reserved</p>
        </div>
      </footer>
      {/* ---------------- END MOBILE FOOTER ---------------- */}
    </>
  );
}
