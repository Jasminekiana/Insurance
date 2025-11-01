import React from 'react';
import { Shield, Menu, ArrowRight, Briefcase, Users, TrendingUp, Lock, FileText, CheckCircle2, Star, Quote, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';
import heroImage from 'figma:asset/ee8149dba1783449a64585509a52164fd96018fa.png';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-slate-950" />
              </div>
              <span className="text-2xl text-white">Previon</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="text-slate-300 hover:text-white transition-colors">How It Works</a>
              <a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a>
              <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <button className="px-4 py-2 text-slate-300 hover:text-white transition-colors">Sign In</button>
              <button className="px-6 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-md transition-colors">Get Started</button>
            </div>

            <button 
              className="md:hidden text-white p-2" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4 border-t border-slate-800">
              <a href="#features" className="block text-slate-300 hover:text-white transition-colors py-2">Features</a>
              <a href="#how-it-works" className="block text-slate-300 hover:text-white transition-colors py-2">How It Works</a>
              <a href="#about" className="block text-slate-300 hover:text-white transition-colors py-2">About</a>
              <a href="#contact" className="block text-slate-300 hover:text-white transition-colors py-2">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Base background - solid dark navy on entire section */}
        <div className="absolute inset-0" style={{ backgroundColor: '#0f2940' }} />
        
        {/* Hero Image positioned on the right - seamless blend with background */}
        <div className="absolute right-0 top-0 bottom-0 w-[60%] hidden lg:block overflow-hidden">
          <img 
            src={heroImage} 
            alt="Financial protection advisor with house" 
            className="absolute right-0 top-1/2 -translate-y-1/2 h-[95%] w-auto object-contain"
          />
          {/* Strong left edge gradient to blend image into the dark navy background */}
          <div className="absolute inset-y-0 left-0 w-[50%]" style={{ 
            background: 'linear-gradient(to right, #0f2940 0%, rgba(15, 41, 64, 0.7) 30%, transparent 100%)'
          }} />
          {/* Top edge blending */}
          <div className="absolute inset-x-0 top-0 h-32" style={{
            background: 'linear-gradient(to bottom, rgba(15, 41, 64, 0.8) 0%, rgba(15, 41, 64, 0.4) 50%, transparent 100%)'
          }} />
          {/* Bottom edge blending */}
          <div className="absolute inset-x-0 bottom-0 h-32" style={{
            background: 'linear-gradient(to top, rgba(15, 41, 64, 0.8) 0%, rgba(15, 41, 64, 0.4) 50%, transparent 100%)'
          }} />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Text content */}
            <div className="space-y-8 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-sm">
                <Shield className="w-4 h-4 text-amber-500" />
                <span className="text-amber-500 text-sm">Trusted Protection Platform</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl text-white tracking-tight">
                Protect Your Wealth.{' '}
                <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Rebuild Your Future.
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 leading-relaxed">
                Navigate life's transitions with confidence. Previon provides comprehensive financial protection 
                and expert guidance to help you safeguard and rebuild your wealth during or after divorce.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-md transition-colors group">
                  Get Protected Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-6 py-3 border border-slate-700 text-white hover:bg-slate-800 rounded-md transition-colors">
                  See How It Works
                </button>
              </div>

              <div className="flex items-center gap-8 pt-8 border-t border-slate-800/50">
                <div>
                  <div className="text-3xl text-white">$2.4B+</div>
                  <div className="text-sm text-slate-400">Assets Protected</div>
                </div>
                <div>
                  <div className="text-3xl text-white">15K+</div>
                  <div className="text-sm text-slate-400">Clients Served</div>
                </div>
                <div>
                  <div className="text-3xl text-white">98%</div>
                  <div className="text-sm text-slate-400">Satisfaction Rate</div>
                </div>
              </div>
            </div>

            {/* Right side - Empty space for image to show through */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-5xl text-slate-950 mb-6">
              Everything You Need to{' '}
              <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                Protect Your Future
              </span>
            </h2>
            <p className="text-xl text-slate-600">
              Previon combines cutting-edge technology with human expertise to provide 
              comprehensive financial protection during life's most challenging transitions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-slate-50 hover:bg-gradient-to-br hover:from-slate-950 hover:to-slate-900 transition-all duration-300 border border-slate-200 hover:border-transparent">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-slate-950" />
              </div>
              <h3 className="text-xl text-slate-950 group-hover:text-white mb-3 transition-colors">Comprehensive Asset Protection</h3>
              <p className="text-slate-600 group-hover:text-slate-300 transition-colors">Safeguard your financial future with intelligent protection strategies tailored to your unique situation.</p>
            </div>

            <div className="group p-8 rounded-2xl bg-slate-50 hover:bg-gradient-to-br hover:from-slate-950 hover:to-slate-900 transition-all duration-300 border border-slate-200 hover:border-transparent">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-6">
                <Briefcase className="w-7 h-7 text-slate-950" />
              </div>
              <h3 className="text-xl text-slate-950 group-hover:text-white mb-3 transition-colors">Expert Financial Guidance</h3>
              <p className="text-slate-600 group-hover:text-slate-300 transition-colors">Work with certified financial advisors who specialize in divorce-related wealth management and protection.</p>
            </div>

            <div className="group p-8 rounded-2xl bg-slate-50 hover:bg-gradient-to-br hover:from-slate-950 hover:to-slate-900 transition-all duration-300 border border-slate-200 hover:border-transparent">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-slate-950" />
              </div>
              <h3 className="text-xl text-slate-950 group-hover:text-white mb-3 transition-colors">Discreet & Confidential</h3>
              <p className="text-slate-600 group-hover:text-slate-300 transition-colors">Your privacy matters. All consultations and data are handled with the utmost discretion and security.</p>
            </div>

            <div className="group p-8 rounded-2xl bg-slate-50 hover:bg-gradient-to-br hover:from-slate-950 hover:to-slate-900 transition-all duration-300 border border-slate-200 hover:border-transparent">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-slate-950" />
              </div>
              <h3 className="text-xl text-slate-950 group-hover:text-white mb-3 transition-colors">Wealth Rebuilding Programs</h3>
              <p className="text-slate-600 group-hover:text-slate-300 transition-colors">Strategic investment plans designed to help you recover and grow your wealth after major life transitions.</p>
            </div>

            <div className="group p-8 rounded-2xl bg-slate-50 hover:bg-gradient-to-br hover:from-slate-950 hover:to-slate-900 transition-all duration-300 border border-slate-200 hover:border-transparent">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-6">
                <Lock className="w-7 h-7 text-slate-950" />
              </div>
              <h3 className="text-xl text-slate-950 group-hover:text-white mb-3 transition-colors">Secure Document Vault</h3>
              <p className="text-slate-600 group-hover:text-slate-300 transition-colors">Store and manage sensitive financial documents in a bank-grade encrypted digital vault.</p>
            </div>

            <div className="group p-8 rounded-2xl bg-slate-50 hover:bg-gradient-to-br hover:from-slate-950 hover:to-slate-900 transition-all duration-300 border border-slate-200 hover:border-transparent">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-6">
                <FileText className="w-7 h-7 text-slate-950" />
              </div>
              <h3 className="text-xl text-slate-950 group-hover:text-white mb-3 transition-colors">Legal Network Access</h3>
              <p className="text-slate-600 group-hover:text-slate-300 transition-colors">Connect with trusted legal professionals who understand the intersection of family law and finance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-5xl text-white mb-6">
              Protection Made{' '}
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Simple</span>
            </h2>
            <p className="text-xl text-slate-400">
              Three straightforward steps to comprehensive financial protection and peace of mind.
            </p>
          </div>

          <div className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center p-8 lg:p-12 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/50 border border-slate-800">
              <div>
                <div className="text-6xl lg:text-8xl bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent opacity-20 mb-4">01</div>
                <h3 className="text-3xl text-white mb-4">Confidential Assessment</h3>
                <p className="text-lg text-slate-400 mb-8">Begin with a private, no-obligation consultation where we assess your current financial situation and protection needs.</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="text-slate-300">Complete financial analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="text-slate-300">Risk assessment review</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="text-slate-300">Personalized strategy planning</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="aspect-video rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center">
                  <div className="text-8xl text-slate-700/50">01</div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center p-8 lg:p-12 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/50 border border-slate-800">
              <div className="lg:order-2">
                <div className="text-6xl lg:text-8xl bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent opacity-20 mb-4">02</div>
                <h3 className="text-3xl text-white mb-4">Custom Protection Plan</h3>
                <p className="text-lg text-slate-400 mb-8">Receive a tailored protection strategy designed by experts who understand the complexities of wealth management during transitions.</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="text-slate-300">Asset allocation strategy</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="text-slate-300">Legal protection frameworks</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="text-slate-300">Tax optimization planning</span>
                  </div>
                </div>
              </div>
              <div className="lg:order-1">
                <div className="aspect-video rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center">
                  <div className="text-8xl text-slate-700/50">02</div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center p-8 lg:p-12 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/50 border border-slate-800">
              <div>
                <div className="text-6xl lg:text-8xl bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent opacity-20 mb-4">03</div>
                <h3 className="text-3xl text-white mb-4">Implementation & Support</h3>
                <p className="text-lg text-slate-400 mb-8">We handle the implementation while providing ongoing support and adjustments as your situation evolves.</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="text-slate-300">24/7 dedicated support team</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="text-slate-300">Quarterly strategy reviews</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="text-slate-300">Continuous protection monitoring</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="aspect-video rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center">
                  <div className="text-8xl text-slate-700/50">03</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-sm text-slate-500 uppercase tracking-wider mb-8">Featured In</p>
            <div className="flex flex-wrap items-center justify-center gap-12">
              <div className="text-2xl text-slate-400">Forbes</div>
              <div className="text-2xl text-slate-400">Bloomberg</div>
              <div className="text-2xl text-slate-400">WSJ</div>
              <div className="text-2xl text-slate-400">Financial Times</div>
              <div className="text-2xl text-slate-400">Fortune</div>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-5xl text-slate-950 mb-6">
              Trusted by Thousands of{' '}
              <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Successful Individuals</span>
            </h2>
            <p className="text-xl text-slate-600">
              Our clients' success stories speak to our commitment to excellence and human-centered service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-500/50 transition-colors">
              <Quote className="w-10 h-10 text-amber-500 mb-6" />
              <div className="flex gap-1 mb-6">
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
              </div>
              <p className="text-slate-700 mb-8 leading-relaxed">"Previon helped me protect my business assets during an incredibly difficult time. Their expertise and empathy made all the difference."</p>
              <div>
                <div className="text-slate-950 mb-1">Sarah Mitchell</div>
                <div className="text-sm text-slate-500">Entrepreneur</div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-500/50 transition-colors">
              <Quote className="w-10 h-10 text-amber-500 mb-6" />
              <div className="flex gap-1 mb-6">
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
              </div>
              <p className="text-slate-700 mb-8 leading-relaxed">"The level of discretion and professionalism exceeded my expectations. They understood the complexity of my portfolio and created a foolproof protection strategy."</p>
              <div>
                <div className="text-slate-950 mb-1">David Chen</div>
                <div className="text-sm text-slate-500">Financial Executive</div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-500/50 transition-colors">
              <Quote className="w-10 h-10 text-amber-500 mb-6" />
              <div className="flex gap-1 mb-6">
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
              </div>
              <p className="text-slate-700 mb-8 leading-relaxed">"Not only did they help protect my assets, but they also guided me in rebuilding my wealth. I'm in a stronger financial position now than ever before."</p>
              <div>
                <div className="text-slate-950 mb-1">Jennifer Adams</div>
                <div className="text-sm text-slate-500">Real Estate Investor</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-20 p-12 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900">
            <div className="text-center">
              <div className="text-4xl text-amber-500 mb-2">A+</div>
              <div className="text-sm text-slate-400">BBB Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-amber-500 mb-2">256-bit</div>
              <div className="text-sm text-slate-400">Encryption</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-amber-500 mb-2">$50M</div>
              <div className="text-sm text-slate-400">Insurance Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-amber-500 mb-2">24/7</div>
              <div className="text-sm text-slate-400">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-slate-200 to-slate-300 shadow-2xl" />
            </div>

            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20">
                <Shield className="w-4 h-4 text-amber-600" />
                <span className="text-amber-700 text-sm">Limited Time Offer</span>
              </div>

              <h2 className="text-4xl lg:text-5xl text-slate-950">
                Start Protecting Your Wealth{' '}
                <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Today</span>
              </h2>

              <p className="text-xl text-slate-600 leading-relaxed">
                Get a free, confidential financial protection assessment worth $500. 
                No obligations, no pressure — just expert guidance when you need it most.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0" />
                  <span className="text-slate-700">30-minute consultation with a certified advisor</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0" />
                  <span className="text-slate-700">Personalized protection strategy roadmap</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0" />
                  <span className="text-slate-700">Completely confidential and secure</span>
                </div>
              </div>

              <form className="space-y-4 pt-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="px-4 py-3 rounded-md border border-slate-300 bg-white outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20" />
                  <input type="text" placeholder="Last Name" className="px-4 py-3 rounded-md border border-slate-300 bg-white outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-md border border-slate-300 bg-white outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20" />
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-md border border-slate-300 bg-white outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20" />
                <button type="submit" className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-md transition-colors group">
                  Get Your Free Assessment
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center gap-2 text-sm text-slate-500 justify-center">
                  <Lock className="w-4 h-4" />
                  <span>Your information is secure and will never be shared</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-slate-950" />
                </div>
                <span className="text-2xl text-white">Previon</span>
              </div>
              <p className="text-slate-400 mb-6 max-w-sm">
                Modern financial protection for life's transitions. Safeguard your wealth and rebuild your future with confidence.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 hover:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-500 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 hover:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-500 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 hover:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-500 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 hover:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-500 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white mb-4">Products</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">Asset Protection</a></li>
                <li><a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">Wealth Rebuilding</a></li>
                <li><a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">Financial Advisory</a></li>
                <li><a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">Legal Network</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">About Us</a></li>
                <li><a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">Careers</a></li>
                <li><a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">Press</a></li>
                <li><a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">Partners</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">Security</a></li>
                <li><a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">Compliance</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-500 text-sm">© 2025 Previon. All rights reserved.</p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-slate-500 hover:text-amber-500 transition-colors">Cookie Settings</a>
                <a href="#" className="text-slate-500 hover:text-amber-500 transition-colors">Sitemap</a>
                <a href="#" className="text-slate-500 hover:text-amber-500 transition-colors">Accessibility</a>
              </div>
            </div>
            <p className="text-slate-600 text-xs mt-6 text-center md:text-left">
              Securities and advisory services offered through Previon Financial, LLC. Member FINRA/SIPC. 
              Insurance products are offered through licensed insurance agents. Not FDIC Insured.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
