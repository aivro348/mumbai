"use client";
// Force update for deployment - Infinity Smiles Premium Theme


import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Phone, 
  Star, 
  ShieldCheck, 
  Award, 
  Users, 
  ArrowRight, 
  ChevronRight,
  Menu,
  X,
  Plus,
  Sparkles,
  Zap,
  Target
} from "lucide-react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-900 selection:bg-amber-100 selection:text-amber-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/90 backdrop-blur-xl border-b border-zinc-100 py-3 shadow-sm" : "bg-transparent py-6"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-shrink-0 flex items-center"
            >
              <span className="text-2xl font-black tracking-tighter">
                INFINITY<span className="text-amber-600">SMILES</span>
              </span>
            </motion.div>
            
            <div className="hidden md:flex space-x-10 items-center">
              {["Home", "Services", "Technology", "About"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-sm font-semibold hover:text-amber-600 transition-colors uppercase tracking-widest"
                >
                  {item}
                </a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-zinc-900 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-amber-600 transition-all shadow-xl shadow-zinc-200"
              >
                Book Consultation
              </motion.button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-20 w-full bg-white z-40 border-b border-zinc-100"
          >
            <div className="px-4 py-8 space-y-6">
              {["Home", "Services", "Technology", "About"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="block text-xl font-bold">{item}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-50/50 via-transparent to-transparent">
        <div className="absolute top-0 right-0 w-1/2 h-full -z-10 bg-zinc-50/30 skew-x-12 translate-x-32" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-widest mb-8">
                <Sparkles size={14} />
                The Gold Standard of Dentistry
              </div>
              <h1 className="text-6xl lg:text-8xl font-black text-zinc-900 leading-[0.9] mb-8 tracking-tighter">
                Crafting <span className="text-amber-600 italic">Signature</span> <br />
                Smiles.
              </h1>
              <p className="text-xl text-zinc-600 mb-10 max-w-lg leading-relaxed font-medium">
                Welcome to Infinity Smiles Dental Clinic & Implant Centre, Kalyan. 
                Where world-class artistry meets advanced surgical precision. 
                We don't just treat teeth; we design confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <motion.button 
                  whileHover={{ y: -4, shadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                  className="px-10 py-5 bg-zinc-900 text-white rounded-2xl font-bold flex items-center justify-center gap-3 group"
                >
                  Schedule Your Visit
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <button className="px-10 py-5 border-2 border-zinc-100 rounded-2xl font-bold hover:bg-zinc-50 transition-all">
                  Our Success Stories
                </button>
              </div>
              
              <div className="mt-16 flex items-center gap-10">
                <div>
                  <p className="text-4xl font-black text-zinc-900">15+</p>
                  <p className="text-xs uppercase tracking-widest font-bold text-zinc-400 mt-1">Years Experience</p>
                </div>
                <div className="w-px h-12 bg-zinc-100" />
                <div>
                  <p className="text-4xl font-black text-zinc-900">5k+</p>
                  <p className="text-xs uppercase tracking-widest font-bold text-zinc-400 mt-1">Happy Patients</p>
                </div>
                <div className="w-px h-12 bg-zinc-100" />
                <div className="flex flex-col">
                   <div className="flex text-amber-500 mb-1">
                      {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                   </div>
                   <p className="text-xs uppercase tracking-widest font-bold text-zinc-900">Top Rated Clinic</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1 }}
              className="relative mt-20 lg:mt-0"
            >
              <div className="absolute -inset-10 bg-amber-200/20 blur-[100px] -z-10 rounded-full" />
              <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] aspect-[4/5] lg:aspect-auto">
                <Image 
                  src="/hero.png" 
                  alt="Elite Dental Clinic Interior" 
                  width={1000} 
                  height={1200} 
                  className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
                  priority
                />
                <div className="absolute bottom-10 right-10 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl max-w-[240px]">
                   <p className="text-xs font-black uppercase tracking-widest text-amber-600 mb-2">Next-Gen Facility</p>
                   <p className="text-sm font-bold text-zinc-800 leading-snug">
                     Featuring Japan's leading sterilization & 3D Imaging systems.
                   </p>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -left-10 bg-white p-5 rounded-2xl shadow-xl flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Certified</p>
                  <p className="text-sm font-black">Safety First</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid - Highly Detailed */}
      <section id="services" className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-black tracking-[0.3em] text-amber-600 uppercase mb-4 flex items-center gap-2">
                <div className="w-8 h-px bg-amber-600" />
                World Class Services
              </h2>
              <p className="text-5xl font-black text-zinc-900 tracking-tighter">
                Redefining the <span className="text-zinc-400">Science</span> of a <br /> Perfect Smile.
              </p>
            </div>
            <p className="text-zinc-500 font-medium max-w-xs text-right">
              We leverage the latest in dental technology to provide treatments that are 
              faster, more precise, and entirely painless.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <ServiceCard 
              title="Dental Implants"
              subtitle="Structural Perfection"
              description="From single tooth restoration to full-arch All-on-4® implants. We use Grade 5 Titanium and Zirconia crowns for lifelong durability."
              icon={<Target className="text-amber-600" />}
              image="/implants.png"
              tags={["Titanium", "3D Planned", "Lifetime Warranty"]}
              color="amber"
            />
            <ServiceCard 
              title="Smile Makeover"
              subtitle="Aesthetic Masterpiece"
              description="Combine E-Max veneers, whitening, and gum contouring for a celebrity-grade smile that matches your facial geometry perfectly."
              icon={<Sparkles className="text-blue-600" />}
              image="/hero.png"
              tags={["Veneers", "Whitening", "DSD"]}
              color="blue"
            />
            <ServiceCard 
              title="Laser Dentistry"
              subtitle="Precision Care"
              description="Experience suture-free, bloodless, and painless surgeries. Our laser technology ensures minimal recovery time and absolute precision."
              icon={<Zap className="text-purple-600" />}
              image="/tech.png"
              tags={["Minimally Invasive", "Fast Healing"]}
              color="purple"
            />
            <ServiceCard 
              title="Orthodontics"
              subtitle="Digital Alignment"
              description="Correct misalignments discreetly with Invisalign® or high-speed self-ligating braces. Perfectly straight teeth without the hassle."
              icon={<Users className="text-emerald-600" />}
              image="/general.png"
              tags={["Invisalign", "Clear Braces"]}
              color="emerald"
            />
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-32 bg-zinc-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-sm font-black tracking-[0.3em] text-amber-500 uppercase mb-6">Cutting-Edge Tech</h2>
              <h3 className="text-5xl font-black leading-tight mb-8">
                Tomorrow's Dentistry, <br />
                <span className="text-amber-500">Available Today.</span>
              </h3>
              
              <div className="space-y-10">
                <TechItem 
                  title="3D CBCT Imaging"
                  desc="Unlike standard X-rays, our 3D imaging allows us to see your bone structure in high-definition, ensuring 100% implant precision."
                />
                <TechItem 
                  title="Intraoral Digital Scanners"
                  desc="Forget messy impressions. We use laser scanning to create a 3D digital model of your mouth in seconds for perfect fitting crowns."
                />
                <TechItem 
                  title="WaterLase® Technology"
                  desc="A revolutionary laser that performs dental procedures without drills or injections in many cases. Truly painless dentistry."
                />
              </div>
              
              <button className="mt-12 flex items-center gap-4 group text-amber-500 font-black uppercase tracking-widest text-xs">
                Explore our facility
                <div className="w-10 h-10 rounded-full border-2 border-amber-500 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-zinc-900 transition-all">
                  <ArrowRight size={18} />
                </div>
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mt-20 lg:mt-0 relative"
            >
              <div className="rounded-[3rem] overflow-hidden aspect-square">
                 <Image src="/tech.png" alt="High Tech Equipment" width={800} height={800} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-amber-500 text-zinc-900 p-10 rounded-[2rem] shadow-2xl max-w-[280px]">
                <p className="text-4xl font-black mb-2">99.8%</p>
                <p className="text-sm font-bold uppercase tracking-widest opacity-80">Surgical Success Rate</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Matter Heavy */}
      <section id="about" className="py-32 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-sm font-black tracking-[0.3em] text-amber-600 uppercase mb-4">The Infinity Difference</h2>
            <p className="text-5xl font-black text-zinc-900 tracking-tighter">Why Global Patients Choose Us</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-12 rounded-[2.5rem] shadow-xl shadow-zinc-200/50">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 mb-8">
                <Award size={32} />
              </div>
              <h4 className="text-2xl font-black mb-6">Expert Mastery</h4>
              <p className="text-zinc-500 leading-relaxed font-medium">
                Our lead specialists are internationally trained and have successfully placed 
                thousands of implants. We combine decades of experience with a passion for 
                aesthetic perfection that few can match.
              </p>
            </div>
            
            <div className="bg-zinc-900 p-12 rounded-[2.5rem] shadow-2xl text-white transform -translate-y-6">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-amber-500 mb-8">
                <ShieldCheck size={32} />
              </div>
              <h4 className="text-2xl font-black mb-6">Ultra-Safe Standards</h4>
              <p className="text-zinc-400 leading-relaxed font-medium">
                We follow rigid 7-step sterilization protocols exceeding ADA standards. 
                Your safety is non-negotiable. We use the same high-tier filtration 
                systems found in top-tier hospital operating rooms.
              </p>
            </div>
            
            <div className="bg-white p-12 rounded-[2.5rem] shadow-xl shadow-zinc-200/50">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 mb-8">
                <Users size={32} />
              </div>
              <h4 className="text-2xl font-black mb-6">Patient-Centric Luxury</h4>
              <p className="text-zinc-500 leading-relaxed font-medium">
                Dental anxiety ends here. From our spa-like atmosphere to noise-canceling 
                headphones and sedation dentistry options, we ensure your visit is 
                relaxing, comfortable, and entirely stress-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Journey */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-900 rounded-[4rem] p-12 lg:p-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full" />
            <div className="relative z-10">
              <h2 className="text-sm font-black tracking-[0.3em] text-amber-500 uppercase mb-4">Your Path to Perfection</h2>
              <p className="text-4xl font-black text-white mb-16 tracking-tighter">The Journey of a Thousand Smiles</p>
              
              <div className="grid md:grid-cols-4 gap-8">
                <Step num="01" title="Discovery" desc="A comprehensive 3D scan and aesthetic consultation." />
                <Step num="02" title="Planning" desc="Our experts design your digital treatment plan." />
                <Step num="03" title="Treatment" desc="Painless execution using advanced technology." />
                <Step num="04" title="Legacy" desc="Lifelong support and maintenance for your new smile." />
              </div>
              
              <div className="mt-20 pt-20 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <p className="text-2xl font-black text-white mb-2 tracking-tight">Ready to start your transformation?</p>
                  <p className="text-zinc-400 font-medium">Our specialists are waiting to craft your masterpice.</p>
                </div>
                <button className="px-12 py-6 bg-amber-500 text-zinc-900 rounded-3xl font-black uppercase tracking-widest hover:bg-white transition-all shadow-2xl shadow-amber-500/20">
                  Book Your Free Consult
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-white pt-32 pb-10 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div className="col-span-1 lg:col-span-1">
              <span className="text-3xl font-black tracking-tighter block mb-8">
                INFINITY<span className="text-amber-600">SMILES</span>
              </span>
              <p className="text-zinc-500 font-medium leading-relaxed mb-8">
                Kalyan's premier destination for luxury dental implants and signature smile makeovers. 
                Combining elite surgical expertise with a spa-like patient experience.
              </p>
              <div className="flex gap-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all cursor-pointer text-zinc-400">
                    <Zap size={20} />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-8">Elite Services</h4>
              <ul className="space-y-4">
                <FooterLink>Dental Implants</FooterLink>
                <FooterLink>Full Mouth Rehab</FooterLink>
                <FooterLink>Digital Smile Design</FooterLink>
                <FooterLink>Laser Procedures</FooterLink>
                <FooterLink>Zirconia Crowns</FooterLink>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-8">Quick Access</h4>
              <ul className="space-y-4">
                <FooterLink>Meet the Doctors</FooterLink>
                <FooterLink>Our Technology</FooterLink>
                <FooterLink>Patient Stories</FooterLink>
                <FooterLink>Luxury Facilities</FooterLink>
                <FooterLink>FAQs</FooterLink>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-8">The Studio</h4>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="text-amber-600 flex-shrink-0" size={20} />
                  <p className="text-zinc-500 font-medium text-sm">
                    Luxury Suite 402, Signature Plaza, <br />
                    Kalyan West, Maharashtra 421301
                  </p>
                </div>
                <div className="flex gap-4">
                  <Phone className="text-amber-600 flex-shrink-0" size={20} />
                  <p className="text-zinc-500 font-black text-sm">
                    +91 98765 43210
                  </p>
                </div>
                <div className="flex gap-4">
                  <Clock className="text-amber-600 flex-shrink-0" size={20} />
                  <p className="text-zinc-500 font-medium text-sm">
                    Mon - Sat: 10:00 - 20:00 <br />
                    Sun: Specialist Appointments Only
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
              &copy; {new Date().getFullYear()} Infinity Smiles Dental Studio. Excellence by Design.
            </p>
            <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
              <a href="#" className="hover:text-amber-600 transition-colors">Privacy</a>
              <a href="#" className="hover:text-amber-600 transition-colors">Terms</a>
              <a href="#" className="hover:text-amber-600 transition-colors">Accreditation</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ title, subtitle, description, icon, image, tags, color }: any) {
  const colorMap: any = {
    amber: "group-hover:text-amber-600",
    blue: "group-hover:text-blue-600",
    purple: "group-hover:text-purple-600",
    emerald: "group-hover:text-emerald-600",
  };

  return (
    <motion.div 
      {...{
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 }
      }}
      className="group bg-zinc-50 rounded-[2.5rem] p-8 hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 border border-transparent hover:border-zinc-100 flex flex-col h-full"
    >
      <div className="mb-10 relative">
        <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-8 relative z-10">
          {icon}
        </div>
        <div className="absolute top-4 left-4 w-16 h-16 rounded-2xl bg-zinc-100 -z-0 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
      </div>
      
      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-2">{subtitle}</p>
      <h4 className={`text-2xl font-black mb-6 transition-colors ${colorMap[color]}`}>{title}</h4>
      <p className="text-zinc-500 font-medium leading-relaxed mb-8 flex-grow">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((tag: string) => (
          <span key={tag} className="px-3 py-1 bg-white rounded-full text-[10px] font-bold text-zinc-400 uppercase tracking-wider border border-zinc-100">
            {tag}
          </span>
        ))}
      </div>
      
      <button className="flex items-center gap-3 text-zinc-900 font-black uppercase tracking-widest text-xs group/btn">
        Discover more
        <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  );
}

function TechItem({ title, desc }: any) {
  return (
    <div className="group cursor-default">
      <div className="flex items-center gap-6 mb-4">
        <div className="w-2 h-2 rounded-full bg-amber-500 group-hover:scale-150 transition-transform" />
        <h4 className="text-xl font-bold group-hover:text-amber-500 transition-colors">{title}</h4>
      </div>
      <p className="pl-8 text-zinc-400 font-medium leading-relaxed max-w-lg">
        {desc}
      </p>
    </div>
  );
}

function Step({ num, title, desc }: any) {
  return (
    <div className="relative group">
      <div className="text-5xl font-black text-white/5 mb-6 group-hover:text-amber-500/10 transition-colors">
        {num}
      </div>
      <h4 className="text-xl font-bold text-white mb-4">{title}</h4>
      <p className="text-zinc-500 text-sm font-medium leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

function FooterLink({ children }: any) {
  return (
    <li>
      <a href="#" className="text-zinc-500 hover:text-amber-600 font-medium text-sm transition-colors flex items-center gap-2 group">
        <div className="w-1 h-1 rounded-full bg-zinc-200 group-hover:bg-amber-600 transition-colors" />
        {children}
      </a>
    </li>
  );
}
