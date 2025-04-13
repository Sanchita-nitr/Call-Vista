// Footer.jsx
"use client";
import { ChevronUp, CreditCard, Facebook, Globe, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [expanded, setExpanded] = useState({
    company: false,
    support: false,
    destinations: false,
    legal: false,
  });

interface ExpandedState {
    company: boolean;
    support: boolean;
    destinations: boolean;
    legal: boolean;
}

const handleSubscribe = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (email && email.includes("@")) {
        setSubscribed(true);
        setEmail("");
        setTimeout(() => setSubscribed(false), 5000);
    }
};

const toggleSection = (section: keyof ExpandedState): void => {
    setExpanded((prev: ExpandedState) => ({
        ...prev,
        [section]: !prev[section]
    }));
};

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-[#d1691e] text-[#fff8dc]">

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Globe className="text-[#fff8dc] mr-2" size={28} />
              <h2 className="text-2xl font-bold">Call Vista</h2>
            </div>
            <p className="text-[#fffae7] mb-6">
              Discover breathtaking destinations, plan unforgettable itineraries, and create memories 
              that last a lifetime with our expert travel services.
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="bg-[#5e220c] p-2 rounded-full hover:bg-[#8b4513] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-[#5e220c] p-2 rounded-full hover:bg-[#8b4513] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-[#5e220c] p-2 rounded-full hover:bg-[#8b4513] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-[#5e220c] p-2 rounded-full hover:bg-[#8b4513] transition-colors">
                <Youtube size={20} />
              </a>
            </div>
            <div className="flex items-center mb-3">
              <MapPin className="text-[#fff8dc] mr-2" size={18} />
              <p className="text-[#fffae7]">NIT Rourkela, Odisha</p>
            </div>
            <div className="flex items-center mb-3">
              <Phone className="text-[#fff8dc] mr-2" size={18} />
              <p className="text-[#fffae7]">+91 (123456789)</p>
            </div>
            <div className="flex items-center">
              <Mail className="text-[#fff8dc] mr-2" size={18} />
              <p className="text-[#fffae7'">info@travelease.com</p>
            </div>
          </div>

          {/* Mobile accordion sections */}
          <div className="lg:hidden col-span-1 md:col-span-2">
            {/* Company section */}
            <div className="border-b border-sky-700 pb-2 mb-4">
              <div 
                className="flex justify-between items-center cursor-pointer" 
                onClick={() => toggleSection('company')}
              >
                <h3 className="font-bold text-lg">Company</h3>
                <ChevronUp 
                  size={18} 
                  className={`transition-transform ${expanded.company ? '' : 'transform rotate-180'}`} 
                />
              </div>
              <div className={`mt-4 space-y-3 ${expanded.company ? 'block' : 'hidden'}`}>
                <p><a href="#" className="text-[#fff8dc] hover:text-[#fff8dc] transition-colors">About Us</a></p>
                <p><a href="#" className="text-[#fff8dc] hover:text-[#fff8dc] transition-colors">Our Team</a></p>
                <p><a href="#" className="text-[#fff8dc] hover:text-[#fff8dc] transition-colors">Careers</a></p>
                <p><a href="#" className="text-[#fff8dc] hover:text-[#fff8dc] transition-colors">Blog</a></p>
              </div>
            </div>

            {/* Support section */}
            <div className="border-b border-sky-700 pb-2 mb-4">
              <div 
                className="flex justify-between items-center cursor-pointer" 
                onClick={() => toggleSection('support')}
              >
                <h3 className="font-bold text-lg">Support</h3>
                <ChevronUp 
                  size={18} 
                  className={`transition-transform ${expanded.support ? '' : 'transform rotate-180'}`} 
                />
              </div>
              <div className={`mt-4 space-y-3 ${expanded.support ? 'block' : 'hidden'}`}>
                <p><a href="#" className="text-[#fff8dc] hover:text-[#fff8dc] transition-colors">Contact Us</a></p>
                <p><a href="#" className="text-[#fff8dc] hover:text-[#fff8dc] transition-colors">FAQs</a></p>
                <p><a href="#" className="text-[#fff8dc] hover:text-[#fff8dc] transition-colors">Support Center</a></p>
                <p><a href="#" className="text-[#fff8dc] hover:text-[#fff8dc] transition-colors">Travel Insurance</a></p>
              </div>
            </div>

           

            {/* Legal section */}
            <div className="border-b border-sky-700 pb-2 mb-4">
              <div 
                className="flex justify-between items-center cursor-pointer" 
                onClick={() => toggleSection('legal')}
              >
                <h3 className="font-bold text-lg">Legal</h3>
                <ChevronUp 
                  size={18} 
                  className={`transition-transform ${expanded.legal ? '' : 'transform rotate-180'}`} 
                />
              </div>
              <div className={`mt-4 space-y-3 ${expanded.legal ? 'block' : 'hidden'}`}>
                <p><a href="#" className="text-[#fff8dc] hover:text-[#fff8dc] transition-colors">Terms & Conditions</a></p>
                <p><a href="#" className="text-[#fff8dc] hover:text-[#fff8dc] transition-colors">Privacy Policy</a></p>
                <p><a href="#" className="text-[#fff8dc] hover:text-[#fff8dc] transition-colors">Cookie Policy</a></p>
                <p><a href="#" className="text-[#fff8dc] hover:text-[#fff8dc] transition-colors">Licenses</a></p>
              </div>
            </div>
          </div>

          {/* Desktop columns */}
          <div className="hidden lg:block">
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="/aboutus" className="text-[#fff8dc] hover:text-[#fff8dc] transition-colors">About Us</a></li>
              
              <li><a href="careers" className="text-[#fff8dc] hover:text-[#fff8dc] transition-colors">Careers</a></li>
              <li><a href="/blog" className="text-[#fff8dc] hover:text-[#fff8dc] transition-colors">Blog</a></li>
            </ul>
          </div>

          <div className="hidden lg:block">
            <h3 className="font-bold text-lg mb-6">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#fff8dc] hover:text-[#fff8dc] transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-[#fff8dc] hover:text-[#fff8dc] transition-colors">FAQs</a></li>
              <li><a href="#" className="text-[#fff8dc] hover:text-[#fff8dc] transition-colors">Support Center</a></li>
            </ul>
          </div>


          {/* Newsletter subscription */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="font-bold text-lg mb-6">Subscribe to Our Newsletter</h3>
            <p className="text-[#fff8dc] mb-4">Stay updated with our latest offers, travel tips, and exclusive deals.</p>
            <form onSubmit={handleSubscribe} className="mb-6">
              <div className="flex">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address" 
                  className="bg-[#fff8dc]rounded-l-md px-4 py-2 flex-grow text-[#5e220c] border focus:outline-none focus:ring-2 focus:ring-[#5e220c] transition-colors rounded-l-xl"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-[#5e220c] hover:bg-[#673f32] rounded-r-xl px-4 transition-colors "> 
                  Subscribe
                </button>
              </div>
              {subscribed && (
                <p className="text-yellow-400  text-sm mt-2">Thank you for subscribing!</p>
              )}
            </form>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-[#5e220c] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#fff8dc] text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} TravelEase. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-[#5e220c] text-sm hover:text-[#fff8dc] transition-colors">Terms</a>
            <a href="#" className="text-[#5e220c] text-sm hover:text-[#fff8dc] transition-colors">Privacy</a>
            <a href="#" className="text-[#5e220c] text-sm hover:text-[#fff8dc] transition-colors">Cookies</a>
          </div>
        </div>
      </div>
      
      {/* Back to top button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-[#5e220c] text-[#fff8dc] p-3 rounded-full shadow-lg hover:bg-[#a25032] transition-colors z-50"
      >
        <ChevronUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;