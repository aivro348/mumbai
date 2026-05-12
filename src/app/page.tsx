import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold tracking-tighter text-zinc-900">
                INFINITY<span className="text-amber-600">SMILES</span>
              </span>
            </div>
            <div className="hidden md:flex space-x-8 items-center text-sm font-medium text-zinc-600">
              <a href="#home" className="hover:text-amber-600 transition-colors">Home</a>
              <a href="#services" className="hover:text-amber-600 transition-colors">Services</a>
              <a href="#about" className="hover:text-amber-600 transition-colors">About Us</a>
              <a href="#contact" className="hover:text-amber-600 transition-colors px-5 py-2.5 bg-zinc-900 text-white rounded-full hover:bg-zinc-800 transition-all">
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-12 lg:mb-0">
              <h1 className="text-5xl lg:text-7xl font-bold text-zinc-900 leading-[1.1] mb-6">
                Your Smile, Our <br />
                <span className="text-amber-600">Masterpiece.</span>
              </h1>
              <p className="text-lg text-zinc-600 mb-8 max-w-lg leading-relaxed">
                Experience world-class dental care at Kalyan's premier dental clinic. 
                Specializing in luxury implants and advanced aesthetics to give you the 
                smile you've always dreamed of.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200">
                  Book a Consultation
                </button>
                <button className="px-8 py-4 border border-zinc-200 text-zinc-900 rounded-full font-semibold hover:bg-zinc-50 transition-all">
                  View Our Services
                </button>
              </div>
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-zinc-200 overflow-hidden">
                      <Image 
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} 
                        alt="Patient" 
                        width={40} 
                        height={40} 
                      />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-bold text-zinc-900">500+ Happy Patients</p>
                  <p className="text-zinc-500">Trusted in Kalyan since 2018</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-amber-100/50 rounded-[2rem] blur-2xl -z-10"></div>
              <div className="rounded-[2rem] overflow-hidden shadow-2xl">
                <Image 
                  src="/hero.png" 
                  alt="Modern Dental Clinic" 
                  width={800} 
                  height={600} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-3">Our Expertise</h2>
            <p className="text-4xl font-bold text-zinc-900">Exceptional Care for Every Need</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Dental Implants" 
              description="Restore your confidence with our high-precision, permanent dental implants."
              image="/implants.png"
            />
            <ServiceCard 
              title="General Dentistry" 
              description="Comprehensive oral health checks and treatments for the whole family."
              image="/general.png"
            />
            <ServiceCard 
              title="Cosmetic Dentistry" 
              description="Transform your smile with veneers, whitening, and advanced aesthetic procedures."
              image="/hero.png" // Placeholder or reusable image
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-3">About Infinity Smiles</h2>
              <h3 className="text-4xl font-bold text-zinc-900 mb-6 leading-tight">
                Pioneering Excellence in Dental Health in Kalyan
              </h3>
              <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
                Founded with a vision to provide luxury dental care at an accessible level, 
                Infinity Smiles Dental Clinic & Implant Centre has become the gold standard 
                for dentistry in Kalyan.
              </p>
              <ul className="space-y-4 mb-8">
                {["Expert Implant Specialists", "Advanced Diagnostic Tools", "Painless Treatment Options", "Luxury Patient Lounge"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-zinc-700">
                    <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="text-zinc-900 font-bold border-b-2 border-amber-600 pb-1 hover:text-amber-600 transition-colors">
                Learn More About Our Team
              </button>
            </div>
            <div className="order-1 lg:order-2 mb-12 lg:mb-0 grid grid-cols-2 gap-4">
               <div className="space-y-4 mt-8">
                  <div className="rounded-2xl overflow-hidden shadow-lg h-48">
                    <Image src="/general.png" alt="Clinic" width={300} height={200} className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg h-64 text-center bg-amber-600 flex flex-col items-center justify-center text-white p-6">
                    <span className="text-5xl font-bold">15+</span>
                    <span className="text-sm uppercase tracking-widest mt-2">Years Exp</span>
                  </div>
               </div>
               <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-lg h-64">
                    <Image src="/hero.png" alt="Clinic" width={300} height={200} className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg h-48">
                    <Image src="/implants.png" alt="Clinic" width={300} height={200} className="w-full h-full object-cover" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-zinc-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <span className="text-2xl font-bold tracking-tighter mb-6 block">
                INFINITY<span className="text-amber-500">SMILES</span>
              </span>
              <p className="text-zinc-400 max-w-md mb-8">
                Your destination for premium dental care in Kalyan. We combine 
                artistry with advanced technology to deliver perfect smiles.
              </p>
              <div className="flex gap-4">
                {/* Social icons placeholder */}
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-amber-600 transition-colors cursor-pointer">
                    <div className="w-4 h-4 bg-white/20 rounded-sm"></div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4 text-zinc-400">
                <li>123 Luxury Lane, Kalyan West, Maharashtra</li>
                <li>+91 98765 43210</li>
                <li>contact@infinitysmiles.com</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Opening Hours</h4>
              <ul className="space-y-4 text-zinc-400">
                <li>Mon - Sat: 10AM - 8PM</li>
                <li>Sunday: By Appointment</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-zinc-800 text-center text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} Infinity Smiles Dental Clinic & Implant Centre. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ title, description, image }: { title: string, description: string, image: string }) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-zinc-100 transition-all hover:shadow-2xl hover:-translate-y-2">
      <div className="h-64 overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          width={400} 
          height={300} 
          className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
        />
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold text-zinc-900 mb-4 group-hover:text-amber-600 transition-colors">{title}</h3>
        <p className="text-zinc-600 mb-6 leading-relaxed">{description}</p>
        <button className="flex items-center gap-2 text-zinc-900 font-bold group/btn">
          Explore Service
          <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}
