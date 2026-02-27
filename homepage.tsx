// HPI 1.7-G
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';
import { Shield, Mail, AlertTriangle, Lock, Zap, CheckCircle, Globe, Server, Eye, MousePointer2, XCircle, Activity, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import URLChecker from '@/components/URLChecker';
import { Link } from 'react-router-dom';

// --- Utility Components ---

const SectionDivider = () => (
  <div className="w-full h-px bg-gradient-to-r from-transparent via-neon-teal/30 to-transparent my-0" />
);

const GridBackground = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    <div 
      className="absolute inset-0 opacity-[0.03]" 
      style={{ 
        backgroundImage: 'linear-gradient(to right, #00FFFF 1px, transparent 1px), linear-gradient(to bottom, #00FFFF 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} 
    />
    <div className="absolute inset-0 bg-gradient-to-b from-space-blue via-transparent to-space-blue" />
  </div>
);

const GlowingOrb = ({ color = "neon-teal", className = "" }: { color?: string, className?: string }) => (
  <div className={`absolute rounded-full blur-[100px] opacity-20 pointer-events-none ${className} bg-${color}`} />
);

// --- Sub-Sections ---

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <GridBackground />
      <GlowingOrb className="top-[-10%] left-[-10%] w-[50vw] h-[50vw]" />
      <GlowingOrb color="electric-green" className="bottom-[-10%] right-[-10%] w-[40vw] h-[40vw]" />
      <div className="container relative z-10 px-4 md:px-8 max-w-[120rem] mx-auto grid lg:grid-cols-12 gap-12 items-center h-full">
        
        {/* Text Content */}
        <motion.div 
          style={{ y, opacity }}
          className="lg:col-span-7 flex flex-col justify-center space-y-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-neon-teal" />
            <span className="text-neon-teal font-paragraph text-sm tracking-[0.2em] uppercase">System Status: Active</span>
          </div>

          <p className="font-paragraph text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed border-l-2 border-neon-teal/30 pl-6">
            Advanced heuristic analysis for Gmail and Outlook. We intercept, analyze, and neutralize phishing vectors in real-time before they breach your perimeter.
          </p>
          <div className="flex flex-wrap gap-6 pt-4">
            <Link to="/features">
              <Button className="group relative overflow-hidden bg-neon-teal text-space-blue hover:bg-neon-teal/90 px-10 py-7 text-lg font-bold rounded-none clip-path-button transition-all duration-300">
                <span className="relative z-10 flex items-center gap-2">
                  INITIALIZE DEFENSE <Shield className="w-5 h-5" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-neon-teal/50 text-neon-teal hover:bg-neon-teal/10 px-10 py-7 text-lg font-paragraph rounded-none transition-all duration-300">
                VIEW TELEMETRY
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Visual Element - The "Scanner" */}
        <div className="lg:col-span-5 relative h-[60vh] w-full flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-full h-full"
          >
            {/* Abstract Cyber Image Background */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-neon-teal/20 bg-space-blue/50 backdrop-blur-sm">
               <Image 
                src="https://static.wixstatic.com/media/a3a8ae_e9268219614d4b0aaef8edc7c3a57e22~mv2.png?originWidth=896&originHeight=512"
                alt="Cybersecurity Data Visualization"
                className="w-full h-full object-cover opacity-40 mix-blend-screen"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-space-blue via-transparent to-transparent" />
            </div>

            {/* Floating UI Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 -left-8 bg-space-blue/90 border border-electric-green/50 p-4 rounded-lg backdrop-blur-md shadow-[0_0_30px_rgba(57,255,20,0.2)]"
            >
              <div className="flex items-center gap-3">
                <CheckCircle className="text-electric-green w-6 h-6" />
                <div>
                  <div className="text-xs text-foreground/60 font-paragraph uppercase">Target Verified</div>
                  <div className="text-electric-green font-bold font-heading">SAFE LINK</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-1/4 -right-8 bg-space-blue/90 border border-destructive/50 p-4 rounded-lg backdrop-blur-md shadow-[0_0_30px_rgba(255,0,102,0.2)]"
            >
              <div className="flex items-center gap-3">
                <AlertTriangle className="text-destructive w-6 h-6" />
                <div>
                  <div className="text-xs text-foreground/60 font-paragraph uppercase">Threat Detected</div>
                  <div className="text-destructive font-bold font-heading">PHISHING ATTEMPT</div>
                </div>
              </div>
            </motion.div>

            {/* Scanning Line */}
            <motion.div 
              className="absolute left-0 right-0 h-1 bg-neon-teal/50 shadow-[0_0_20px_#00FFFF]"
              animate={{ top: ["10%", "90%", "10%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TickerSection = () => {
  return (
    <div className="w-full bg-neon-teal/5 border-y border-neon-teal/10 overflow-hidden py-4">
      <motion.div 
        className="flex whitespace-nowrap gap-16"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-16">
            <span className="flex items-center gap-2 text-neon-teal/70 font-paragraph text-sm uppercase tracking-widest">
              <Activity className="w-4 h-4" /> Real-Time Monitoring Active
            </span>
            <span className="flex items-center gap-2 text-electric-green/70 font-paragraph text-sm uppercase tracking-widest">
              <Shield className="w-4 h-4" /> Zero-Day Protection
            </span>
            <span className="flex items-center gap-2 text-warning-orange/70 font-paragraph text-sm uppercase tracking-widest">
              <Lock className="w-4 h-4" /> Encrypted Analysis
            </span>
            <span className="flex items-center gap-2 text-foreground/50 font-paragraph text-sm uppercase tracking-widest">
              <Globe className="w-4 h-4" /> Global Threat Intelligence
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const HowItWorksSection = () => {
  const steps = [
    {
      id: "01",
      title: "Link Interception",
      desc: "The extension injects a micro-sentinel into the DOM of Gmail and Outlook. It monitors all anchor tags in real-time, intercepting click events before the browser initiates navigation.",
      icon: MousePointer2,
      color: "neon-teal"
    },
    {
      id: "02",
      title: "Heuristic Analysis",
      desc: "The target URL is extracted and securely transmitted to our threat intelligence core. We cross-reference PhishTank APIs and our proprietary ML models to assess risk probability.",
      icon: Server,
      color: "electric-green"
    },
    {
      id: "03",
      title: "Smart Response",
      desc: "Based on the threat score, navigation is either permitted instantly or halted with a full-screen intervention warning, giving the user the final decision authority.",
      icon: Shield,
      color: "warning-orange"
    }
  ];

  return (
    <section className="relative w-full py-32 px-4 md:px-8 max-w-[120rem] mx-auto">
      <div className="grid lg:grid-cols-12 gap-16">
        {/* Sticky Header */}
        <div className="lg:col-span-4">
          <div className="sticky top-32">
            <h2 className="font-heading text-5xl md:text-6xl text-white mb-6">
              OPERATIONAL <br />
              <span className="text-neon-teal">LOGIC</span>
            </h2>
            <p className="font-paragraph text-foreground/60 text-lg mb-8">
              A three-stage defense mechanism designed to eliminate human error from email security.
            </p>
            <div className="hidden lg:block w-full h-64 relative overflow-hidden rounded-lg border border-white/10">
               <div className="absolute inset-0 bg-space-blue/80 z-10" />
               <Image 
                 src="https://static.wixstatic.com/media/a3a8ae_5782525e732443eebdc9e25bcb47f5b6~mv2.png?originWidth=512&originHeight=256"
                 alt="Code Logic Visualization"
                 className="w-full h-full object-cover opacity-30"
               />
               <div className="absolute inset-0 z-20 flex items-center justify-center">
                 <Terminal className="w-16 h-16 text-neon-teal/50" />
               </div>
            </div>
          </div>
        </div>

        {/* Steps List */}
        <div className="lg:col-span-8 space-y-24">
          {steps.map((step, index) => (
            <StepCard key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StepCard = ({ step, index }: { step: any, index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px 0px", once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Connecting Line */}
      {index !== 2 && (
        <div className="absolute left-8 top-24 bottom-[-6rem] w-px bg-gradient-to-b from-neon-teal/50 to-transparent hidden md:block" />
      )}

      <div className="relative z-10 bg-space-blue border border-white/10 p-8 md:p-12 rounded-2xl overflow-hidden transition-all duration-500 hover:border-neon-teal/50">
        <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500 text-${step.color}`}>
          <step.icon className="w-32 h-32" />
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className={`flex-shrink-0 w-16 h-16 rounded-full border border-${step.color}/30 bg-${step.color}/10 flex items-center justify-center text-${step.color} font-heading font-bold text-xl`}>
            {step.id}
          </div>
          
          <div className="space-y-4 max-w-2xl">
            <h3 className="font-heading text-3xl text-white group-hover:text-neon-teal transition-colors duration-300">
              {step.title}
            </h3>
            <p className="font-paragraph text-foreground/70 leading-relaxed text-lg">
              {step.desc}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const LiveThreatMapSection = () => {
  const stats = [
    { label: "Phishing Attempts Blocked", value: "1,247", color: "text-warning-orange" },
    { label: "Safe Links Verified", value: "8,953", color: "text-electric-green" },
    { label: "Active Users Protected", value: "12,489", color: "text-neon-teal" }
  ];

  return (
    <section className="w-full py-32 bg-black/20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
         <Image 
           src="https://static.wixstatic.com/media/a3a8ae_aa7657c9993042389fa680d1cea9f8f5~mv2.png?originWidth=640&originHeight=320"
           alt="World Map Data"
           className="w-full h-full object-cover grayscale"
         />
      </div>
      
      <div className="container max-w-[120rem] mx-auto px-4 md:px-8 relative z-10">
        <div className="bg-space-blue/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-destructive"></span>
                </span>
                <span className="text-destructive font-paragraph text-xs tracking-widest uppercase">Live Threat Feed</span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl text-white">GLOBAL INTELLIGENCE</h2>
            </div>
            <div className="text-right">
              <div className="text-neon-teal font-heading text-6xl font-bold">99.7%</div>
              <div className="text-foreground/60 font-paragraph text-sm uppercase tracking-wider">Detection Accuracy</div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white/5 border border-white/5 p-8 rounded-xl hover:bg-white/10 transition-colors duration-300">
                <div className={`font-heading text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-foreground/70 font-paragraph text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="w-full bg-white/10 h-1 mt-6 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: i * 0.2 }}
                    className={`h-full ${stat.color.replace('text-', 'bg-')}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturesGrid = () => {
  const features = [
    { icon: Shield, title: 'Chrome & Edge Compatible', desc: 'Native architecture support for both major browser engines via Manifest V3.' },
    { icon: Zap, title: 'Zero Latency', desc: 'Optimized background workers ensure analysis happens in milliseconds.' },
    { icon: Lock, title: 'Privacy First', desc: 'URLs are hashed before transmission. We never store your browsing history.' },
    { icon: CheckCircle, title: 'User Control', desc: 'We empower users with information, never taking control away completely.' }
  ];

  return (
    <section className="w-full py-32 px-4 md:px-8 max-w-[120rem] mx-auto">
      <div className="text-center mb-20">
        <h2 className="font-heading text-4xl md:text-6xl text-white mb-6">SYSTEM <span className="text-neon-teal">CAPABILITIES</span></h2>
        <p className="text-foreground/60 max-w-2xl mx-auto text-lg">Enterprise-grade security architecture accessible to everyone.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group bg-gradient-to-b from-white/5 to-transparent border border-white/10 p-8 rounded-2xl hover:border-neon-teal/40 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-neon-teal/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-neon-teal/20 transition-colors">
              <feature.icon className="w-7 h-7 text-neon-teal" />
            </div>
            <h3 className="font-heading text-xl text-white mb-3">{feature.title}</h3>
            <p className="font-paragraph text-sm text-foreground/60 leading-relaxed">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const CtaSection = () => {
  return (
    <section className="w-full py-32 px-4 md:px-8">
      <div className="max-w-[100rem] mx-auto relative rounded-3xl overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://static.wixstatic.com/media/a3a8ae_fb1d3344dcc74ccfb9311b819065229e~mv2.png?originWidth=960&originHeight=512"
            alt="Secure Future"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-space-blue/90 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 py-24 px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-5xl md:text-7xl text-white mb-8">
              SECURE YOUR <br />
              <span className="text-neon-teal">COMMUNICATIONS</span>
            </h2>
            <p className="font-paragraph text-xl text-foreground/80 max-w-2xl mx-auto mb-12">
              Join thousands of users who have upgraded their email security to the next generation.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/features">
                <Button className="bg-neon-teal text-space-blue hover:bg-neon-teal/90 px-12 py-8 text-xl font-bold rounded-lg transition-all duration-300 shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:shadow-[0_0_50px_rgba(0,255,255,0.5)]">
                  Deploy Extension
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-12 py-8 text-xl font-medium rounded-lg backdrop-blur-md">
                  Contact Support
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Main Component ---

export default function HomePage() {
  return (
    <div className="min-h-screen bg-space-blue text-foreground font-paragraph selection:bg-neon-teal selection:text-space-blue overflow-x-clip">
      <style>{`
        .clip-path-button {
          clip-path: polygon(0 0, 100% 0, 100% 70%, 90% 100%, 0 100%);
        }
      `}</style>
      
      <Header />
      
      <main className="flex flex-col w-full">
        <HeroSection />
        <TickerSection />
        <SectionDivider />
        <URLChecker />
        <SectionDivider />
        <HowItWorksSection />
        <LiveThreatMapSection />
        <FeaturesGrid />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}