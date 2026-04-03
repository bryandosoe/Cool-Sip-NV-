import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ShoppingBag, 
  ArrowRight, 
  Star, 
  Zap, 
  Droplets, 
  Flame, 
  Instagram, 
  Twitter, 
  Facebook, 
  MapPin, 
  Phone, 
  Mail,
  CheckCircle2,
  ChevronRight,
  Filter
} from 'lucide-react';
import { PRODUCTS, Product } from './constants';

// --- Components ---

const Navbar = ({ activePage, setActivePage }: { activePage: string, setActivePage: (page: string) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Products', id: 'products' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <button onClick={() => setActivePage('home')} className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-tropical-cyan rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Droplets className="text-tropical-dark w-6 h-6" />
          </div>
          <span className="text-2xl font-display font-black tracking-tighter">COOL SIP<span className="text-tropical-cyan">.</span></span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActivePage(link.id)}
              className={`font-medium transition-colors hover:text-tropical-cyan ${activePage === link.id ? 'text-tropical-cyan' : 'text-tropical-dark'}`}
            >
              {link.name}
            </button>
          ))}
          <button onClick={() => setActivePage('products')} className="bg-tropical-dark text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-tropical-cyan hover:text-tropical-dark transition-all">
            <ShoppingBag size={18} />
            Shop Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-tropical-dark" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActivePage(link.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-xl font-bold text-left ${activePage === link.id ? 'text-tropical-cyan' : 'text-tropical-dark'}`}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => {
                setActivePage('products');
                setIsMobileMenuOpen(false);
              }}
              className="bg-tropical-cyan text-tropical-dark py-4 rounded-xl font-bold text-center"
            >
              Shop Collection
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = ({ setActivePage }: { setActivePage: (page: string) => void }) => (
  <footer className="bg-tropical-dark text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-1">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 bg-tropical-cyan rounded-lg flex items-center justify-center">
            <Droplets className="text-tropical-dark w-5 h-5" />
          </div>
          <span className="text-xl font-display font-black tracking-tighter">COOL SIP<span className="text-tropical-cyan">.</span></span>
        </div>
        <p className="text-gray-400 mb-6">
          Refreshing the Caribbean vibe, one sip at a time. Premium drinks for the trend-conscious generation.
        </p>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tropical-cyan hover:text-tropical-dark transition-all"><Instagram size={20} /></a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tropical-lime hover:text-tropical-dark transition-all"><Twitter size={20} /></a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tropical-orange hover:text-tropical-dark transition-all"><Facebook size={20} /></a>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-bold mb-6">Quick Links</h4>
        <ul className="space-y-4 text-gray-400">
          <li><button onClick={() => setActivePage('home')} className="hover:text-tropical-cyan transition-colors">Home</button></li>
          <li><button onClick={() => setActivePage('products')} className="hover:text-tropical-cyan transition-colors">Products</button></li>
          <li><button onClick={() => setActivePage('about')} className="hover:text-tropical-cyan transition-colors">Our Story</button></li>
          <li><button onClick={() => setActivePage('contact')} className="hover:text-tropical-cyan transition-colors">Contact</button></li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-bold mb-6">Contact Us</h4>
        <ul className="space-y-4 text-gray-400">
          <li className="flex items-center gap-3"><MapPin size={18} className="text-tropical-cyan" /> Paramaribo, Suriname</li>
          <li className="flex items-center gap-3"><Phone size={18} className="text-tropical-cyan" /> +597 123-4567</li>
          <li className="flex items-center gap-3"><Mail size={18} className="text-tropical-cyan" /> hello@coolsip.nv</li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-bold mb-6">Newsletter</h4>
        <p className="text-gray-400 mb-4">Get the latest vibes and limited drops.</p>
        <div className="flex gap-2">
          <input type="email" placeholder="Email" className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 flex-1 focus:outline-none focus:border-tropical-cyan" />
          <button className="bg-tropical-cyan text-tropical-dark p-2 rounded-lg hover:scale-105 transition-transform"><ArrowRight size={20} /></button>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
      &copy; {new Date().getFullYear()} Cool Sip NV. All rights reserved. Designed for the vibe.
    </div>
  </footer>
);

// --- Pages ---

const HomePage = ({ setActivePage }: { setActivePage: (page: string) => void }) => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-tropical-cyan/10 via-white to-tropical-orange/10 -z-10" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 bg-tropical-cyan/20 text-tropical-dark font-bold rounded-full text-sm mb-6">
              NEW DROP: ELECTRIC LIME ⚡️
            </span>
            <h1 className="text-6xl md:text-8xl font-display font-black leading-none mb-6">
              REFRESH <br />
              <span className="text-gradient">YOUR VIBE.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
              Premium Caribbean-inspired drinks crafted for the bold, the energetic, and the trend-setters. Experience the ultimate chill.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => setActivePage('products')} className="btn-primary flex items-center justify-center gap-2">
                Shop Collection <ShoppingBag size={20} />
              </button>
              <button onClick={() => setActivePage('about')} className="btn-secondary flex items-center justify-center gap-2">
                Our Story <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-tropical-cyan/20 blur-3xl rounded-full animate-pulse" />
            <img 
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800" 
              alt="Cool Sip Lifestyle" 
              className="relative rounded-3xl shadow-2xl object-cover aspect-[4/5] w-full max-w-md mx-auto"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="flex items-center gap-4 mb-2">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <span className="font-bold text-sm">50k+ Happy Sippers</span>
              </div>
              <div className="flex text-yellow-400">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-tropical-dark text-white overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1,2,3,4,5].map(i => (
            <div key={i} className="flex items-center gap-12 mx-12">
              <span className="text-2xl font-display font-black opacity-50">PREMIUM QUALITY</span>
              <Zap className="text-tropical-lime" />
              <span className="text-2xl font-display font-black opacity-50">TROPICAL VIBES</span>
              <Droplets className="text-tropical-cyan" />
              <span className="text-2xl font-display font-black opacity-50">SURINAME PRIDE</span>
              <Flame className="text-tropical-orange" />
            </div>
          ))}
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-black mb-4">FAN FAVORITES</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">The drinks that started the movement. Grab yours before they're gone.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.slice(0, 3).map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className={`aspect-square rounded-2xl mb-6 overflow-hidden relative ${product.color}/10`}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full font-bold text-sm shadow-sm">
                    {product.price}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-500 mb-6 text-sm line-clamp-2">{product.description}</p>
                <button 
                  onClick={() => setActivePage('products')}
                  className="w-full py-3 bg-tropical-dark text-white rounded-xl font-bold flex items-center justify-center gap-2 group-hover:bg-tropical-cyan group-hover:text-tropical-dark transition-colors"
                >
                  Buy Now <ArrowRight size={18} />
                </button>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button onClick={() => setActivePage('products')} className="font-bold text-tropical-dark flex items-center gap-2 mx-auto hover:text-tropical-cyan transition-colors">
              View All Products <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Why Cool Sip */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800" 
              alt="Fresh Ingredients" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-6xl font-display font-black mb-8 leading-tight">
              WHY WE'RE <br />
              <span className="text-tropical-cyan">DIFFERENT.</span>
            </h2>
            <div className="space-y-8">
              {[
                { icon: <Droplets className="text-tropical-cyan" />, title: "Pure Refreshment", desc: "Filtered through volcanic rock for that crisp, clean Caribbean taste." },
                { icon: <Zap className="text-tropical-lime" />, title: "Natural Energy", desc: "Boosted with guarana and green tea extract. No jittery crashes." },
                { icon: <Star className="text-tropical-orange" />, title: "Premium Flavors", desc: "Real fruit extracts sourced directly from local tropical farms." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-24 bg-tropical-cyan/5">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-black mb-4">LIVE THE VIBE</h2>
          <p className="text-gray-500">Tag us @CoolSipNV to be featured.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
          {[
            "https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?auto=format&fit=crop&q=80&w=400",
            "https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&q=80&w=400",
            "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=400",
            "https://images.unsplash.com/photo-1533777857419-377449a37521?auto=format&fit=crop&q=80&w=400"
          ].map((img, i) => (
            <div key={i} className="aspect-square rounded-2xl overflow-hidden group">
              <img 
                src={img} 
                alt="Lifestyle" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-tropical-dark rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-tropical-cyan/20 blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-tropical-orange/20 blur-3xl -ml-32 -mb-32" />
          
          <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-8 relative z-10">
            READY TO JOIN <br />
            THE MOVEMENT?
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto relative z-10">
            Limited edition drops are happening now. Don't miss out on the most refreshing experience of the year.
          </p>
          <button onClick={() => setActivePage('products')} className="btn-primary relative z-10">
            Get Your Cool Sip Now
          </button>
        </div>
      </section>
    </div>
  );
};

const ProductsPage = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Energy', 'Sparkling', 'Natural', 'Limited'];
  
  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
          <div>
            <h1 className="text-5xl md:text-7xl font-display font-black mb-4">THE COLLECTION</h1>
            <p className="text-gray-500">Find your perfect flavor. Every sip is a vibe.</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-bold transition-all ${filter === cat ? 'bg-tropical-cyan text-tropical-dark shadow-lg' : 'bg-white text-gray-500 hover:bg-gray-100'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className={`aspect-square rounded-2xl mb-6 overflow-hidden relative ${product.color}/10`}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-tropical-dark text-white px-3 py-1 rounded-full text-xs font-bold">
                    {product.category}
                  </div>
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold">{product.name}</h3>
                  <span className="text-xl font-black text-tropical-dark">{product.price}</span>
                </div>
                <p className="text-tropical-cyan font-bold text-sm mb-3">{product.flavor}</p>
                <p className="text-gray-500 mb-6 text-sm">{product.description}</p>
                <button className="w-full py-4 bg-tropical-dark text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-tropical-cyan hover:text-tropical-dark transition-colors">
                  Add to Cart <ShoppingBag size={18} />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-black mb-8 leading-tight">
              BORN IN THE <br />
              <span className="text-gradient">TROPICS.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Cool Sip NV started with a simple mission: to capture the vibrant energy of Suriname and bottle it for the world. We weren't happy with boring, corporate drinks. We wanted something that felt like a beach party at midnight.
            </p>
            <p className="text-gray-500 mb-8">
              Founded in 2024, we've quickly grown from a local Paramaribo favorite to a regional trend-setter. Our secret? We never compromise on the vibe.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-4xl font-black text-tropical-cyan mb-1">100%</h4>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Natural Extracts</p>
              </div>
              <div>
                <h4 className="text-4xl font-black text-tropical-lime mb-1">24/7</h4>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Energy Boost</p>
              </div>
            </div>
          </motion.div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&q=80&w=800" 
              alt="Brand Story" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-tropical-orange rounded-full flex items-center justify-center text-white font-display font-black text-center p-4 rotate-12 shadow-xl">
              EST. 2024 <br /> PARAMARIBO
            </div>
          </div>
        </div>

        <div className="bg-tropical-dark rounded-[3rem] p-12 md:p-20 text-white">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-black mb-4">OUR CORE VALUES</h2>
            <p className="text-gray-400">What keeps us flowing every day.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Quality First", desc: "We source only the finest ingredients. If it's not premium, it's not Cool Sip." },
              { title: "Vibe Driven", desc: "We don't just sell drinks; we sell a lifestyle of energy and confidence." },
              { title: "Sustainable", desc: "Our bottles are 100% recyclable, and we support local Suriname farmers." }
            ].map((v, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="text-tropical-cyan" size={32} />
                </div>
                <h4 className="text-2xl font-bold mb-4">{v.title}</h4>
                <p className="text-gray-400">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-display font-black mb-4">GET IN TOUCH</h1>
          <p className="text-gray-500">Want to distribute? Or just say hi? We're here.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-tropical-lime/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="text-tropical-lime" size={40} />
                </div>
                <h3 className="text-3xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-500 mb-8">The vibe is on its way. We'll get back to you soon.</p>
                <button onClick={() => setSubmitted(false)} className="btn-secondary">Send Another</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-bold text-sm uppercase tracking-wider text-gray-400">Full Name</label>
                    <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-tropical-cyan transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-bold text-sm uppercase tracking-wider text-gray-400">Email Address</label>
                    <input required type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-tropical-cyan transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-bold text-sm uppercase tracking-wider text-gray-400">Subject</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-tropical-cyan transition-colors">
                    <option>General Inquiry</option>
                    <option>Distribution / Wholesale</option>
                    <option>Partnership</option>
                    <option>Press</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="font-bold text-sm uppercase tracking-wider text-gray-400">Message</label>
                  <textarea required rows={5} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-tropical-cyan transition-colors" placeholder="How can we help?"></textarea>
                </div>
                <button type="submit" className="w-full btn-primary">Send Message</button>
              </form>
            )}
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-bold mb-6">Contact Info</h3>
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-tropical-cyan/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-tropical-cyan" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Headquarters</h4>
                    <p className="text-gray-500">Indira Gandhiweg 123, Paramaribo, Suriname</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-tropical-lime/10 flex items-center justify-center shrink-0">
                    <Phone className="text-tropical-lime" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Phone</h4>
                    <p className="text-gray-500">+597 123-4567 / +597 888-9999</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-tropical-orange/10 flex items-center justify-center shrink-0">
                    <Mail className="text-tropical-orange" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email</h4>
                    <p className="text-gray-500">hello@coolsip.nv / sales@coolsip.nv</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8">
              <h4 className="font-bold text-xl mb-4">Distribution Inquiries</h4>
              <p className="text-gray-500 mb-6">
                Interested in stocking Cool Sip in your store or bar? We offer competitive wholesale rates and marketing support.
              </p>
              <button className="text-tropical-dark font-bold flex items-center gap-2 hover:text-tropical-cyan transition-colors">
                Download Wholesale Kit <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [activePage, setActivePage] = useState('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <HomePage setActivePage={setActivePage} />;
      case 'products': return <ProductsPage />;
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setActivePage={setActivePage} />
      
      {/* Global Styles for Marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
