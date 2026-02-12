"use client";

import React from "react";
import { 
  Monitor, 
  Shield, 
  Zap, 
  MousePointer2, 
  Keyboard, 
  Lock, 
  Users, 
  Code2, 
  GraduationCap, 
  Bug,
  Github,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

export default function LandingPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const [downloading, setDownloading] = React.useState(false);

  const [downloadProgress, setDownloadProgress] = React.useState(0);

  const handleDownload = () => {
    setDownloading(true);
    setDownloadProgress(0);
    
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setDownloading(false);
          // In a real app, this would trigger the actual file download
          const link = document.createElement('a');
          link.href = '#'; // Placeholder for gemdesk.exe
          link.download = 'gemdesk.exe';
          // link.click(); // Don't actually click in the demo
          alert("GemDesk installer (gemdesk.exe) download would start now. This is a hackathon project demonstration.");
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 200);
  };

  const AnimatedGrid = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden h-full w-full">
      <div className="absolute inset-0 opacity-20" 
           style={{ 
             backgroundImage: `linear-gradient(to right, #5A0F1A 1px, transparent 1px), linear-gradient(to bottom, #5A0F1A 1px, transparent 1px)`,
             backgroundSize: '40px 40px' 
           }} 
      />
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`h-${i}`}
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "100%", opacity: [0, 1, 1, 0] }}
          transition={{
            duration: Math.random() * 8 + 7,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10
          }}
          className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-primary/80 to-transparent"
          style={{ top: `${(i + 1) * 6.5}%` }}
        />
      ))}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`v-${i}`}
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: "100%", opacity: [0, 1, 1, 0] }}
          transition={{
            duration: Math.random() * 8 + 7,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10
          }}
          className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-primary/80 to-transparent"
          style={{ left: `${(i + 1) * 6.5}%` }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
    </div>
  );

  return (
    <main className="min-h-screen selection:bg-primary/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-card-border/50 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-[4px]">
              <Monitor className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">GemDesk</span>
          </div>
           <div className="flex items-center gap-6">
            <a href="#how-it-works" className="text-sm text-foreground/70 hover:text-white transition-colors">How it Works</a>
            <a href="#security" className="text-sm text-foreground/70 hover:text-white transition-colors">Security</a>
            <button 
              onClick={handleDownload}
              className="btn-primary py-2 text-sm disabled:opacity-50 relative overflow-hidden"
              disabled={downloading}
            >
              {downloading ? (
                <>
                  <span className="relative z-10">Preparing... {Math.min(downloadProgress, 100)}%</span>
                  <motion.div 
                    className="absolute inset-y-0 left-0 bg-white/20"
                    initial={{ width: 0 }}
                    animate={{ width: `${downloadProgress}%` }}
                  />
                </>
              ) : "Download App"}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <AnimatedGrid />
        <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full -top-24 -left-24 w-96 h-96 pointer-events-none z-10" />
        <div className="max-w-7xl mx-auto text-center relative z-20">
          <motion.div {...fadeIn}>
           {/* 
            <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full text-xs font-semibold mb-6">
              HACKATHON EDITION
            </span>
            */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Remote Desktop <br />
              <span className="text-foreground/50">Built for Developers.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/70 mb-10">
              A lightweight, developer-friendly remote desktop tool designed for collaboration and support — without the bloat.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={handleDownload}
                className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center disabled:opacity-50 relative overflow-hidden"
                disabled={downloading}
              >
                {downloading ? (
                  <>
                    <span className="relative z-10 flex items-center gap-2">
                       Downloading... {Math.min(downloadProgress, 100)}%
                    </span>
                    <motion.div 
                      className="absolute inset-y-0 left-0 bg-white/20"
                      initial={{ width: 0 }}
                      animate={{ width: `${downloadProgress}%` }}
                    />
                  </>
                ) : (
                  <>Download Desktop App <ArrowRight className="w-4 h-4" /></>
                )}
              </button>
              <button className="btn-outline w-full sm:w-auto">
                View on GitHub
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            className="mt-16 sharp-card max-w-5xl mx-auto aspect-video relative overflow-hidden group shadow-2xl shadow-primary/5 border-primary/10"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-60" />
            <div className="absolute top-0 left-0 w-full h-8 bg-[#1A1A1A] border-b border-white/5 flex items-center px-4 gap-1.5 z-20">
              <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-primary/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-primary/10" />
              <div className="ml-4 text-[10px] font-mono text-foreground/30 uppercase tracking-widest">
                GemDesk Session — Secure Dev Link
              </div>
            </div>
            <div className="w-full h-full bg-[#080808] flex items-center justify-center pt-8">
              <div className="text-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.6, 0.3],
                    filter: ["blur(0px)", "blur(2px)", "blur(0px)"]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                  <Monitor className="w-24 h-24 mx-auto mb-6 text-primary relative z-10" />
                </motion.div>
                <div className="font-mono text-sm leading-relaxed">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-foreground/40 mb-2"
                  >
                   &gt; INITIALIZING ENCRYPTED TUNNEL...
                  </motion.p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-primary font-bold">$</span>
                    <motion.p
                      initial={{ width: 0 }}
                      animate={{ width: "auto" }}
                      transition={{ duration: 1.5, delay: 1.5 }}
                      className="overflow-hidden whitespace-nowrap text-foreground/80"
                    >
                      gemdesk --control --session-id=GX-882
                    </motion.p>
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="w-2 h-4 bg-primary/50"
                    />
                  </div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3 }}
                    className="mt-4 text-[10px] text-primary/40"
                  >
                    READY FOR PAIR PROGRAMMING
                  </motion.div>
                </div>
              </div>
            </div>
            {/* Decorative coding elements */}
            <div className="absolute bottom-6 left-6 font-mono text-[10px] text-foreground/10 space-y-1 pointer-events-none">
              <div>{"import { peer } from \"gemdesk-core\";"}</div>
              <div>{"const session = await peer.connect(\"GX-882\");"}</div>
              <div>{"session.on(\"stream\", renderDesktop);"}</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 border-y border-card-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">How it Works</h2>
            <p className="text-foreground/60">Connect in three simple steps.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Zap className="w-6 h-6" />, 
                title: "Share", 
                desc: "Generate a temporary session code with one click." 
              },
              { 
                icon: <Users className="w-6 h-6" />, 
                title: "Connect", 
                desc: "The viewer enters the session code to request access." 
              },
              { 
                icon: <MousePointer2 className="w-6 h-6" />, 
                title: "Control", 
                desc: "Grant view-only or full control permissions instantly." 
              }
            ].map((step, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="sharp-card p-8">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-[4px] mb-6 text-primary">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Use Cases</h2>
              <p className="text-foreground/60">Designed for modern development workflows.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Users />, title: "Pair Programming", desc: "Code together in real-time with ultra-low latency." },
              { icon: <GraduationCap />, title: "Remote Teaching", desc: "Share your screen for lessons and workshops." },
              { icon: <Bug />, title: "Debugging", desc: "Help colleagues troubleshoot complex environment issues." },
              { icon: <Zap />, title: "Remote Support", desc: "Fast and lightweight tool for quick technical help." }
            ].map((useCase, i) => (
              <motion.div 
                key={i} 
                {...fadeIn} 
                transition={{ delay: i * 0.05 }} 
                whileHover={{ y: -5, borderColor: "rgba(90, 15, 26, 0.5)" }}
                className="group border border-card-border/50 p-6 rounded-[4px] transition-colors bg-[#111]/50 backdrop-blur-sm"
              >
                <div className="text-foreground/40 group-hover:text-primary transition-colors mb-4">
                  {React.cloneElement(useCase.icon as React.ReactElement, { className: "w-6 h-6" })}
                </div>
                <h4 className="font-bold text-white mb-2">{useCase.title}</h4>
                <p className="text-xs text-foreground/50 leading-relaxed">{useCase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section id="security" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeIn} className="sharp-card p-12 text-center border-primary/20 bg-gradient-to-b from-primary/5 to-transparent">
            <Lock className="w-12 h-12 text-primary mx-auto mb-8" />
            <h2 className="text-3xl font-bold text-white mb-6">Security-First Design</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h5 className="flex items-center gap-2 text-white font-bold mb-2">
                  <Shield className="w-4 h-4 text-primary" /> End-to-End Encryption
                </h5>
                <p className="text-sm text-foreground/50">
                  Direct peer-to-peer connections using WebRTC, ensuring your screen data never touches our servers.
                </p>
              </div>
              <div>
                <h5 className="flex items-center gap-2 text-white font-bold mb-2">
                  <Users className="w-4 h-4 text-primary" /> Explicit Permissions
                </h5>
                <p className="text-sm text-foreground/50">
                  No hidden access. The host must manually approve every connection and control request.
                </p>
              </div>
              <div>
                <h5 className="flex items-center gap-2 text-white font-bold mb-2">
                  <Lock className="w-4 h-4 text-primary" /> Session Isolation
                </h5>
                <p className="text-sm text-foreground/50">
                  Session codes are temporary and auto-expire. No persistent background access—ever.
                </p>
              </div>
              <div>
                <h5 className="flex items-center gap-2 text-white font-bold mb-2">
                  <Monitor className="w-4 h-4 text-primary" /> Visual Indicators
                </h5>
                <p className="text-sm text-foreground/50">
                  Always know when you're sharing. Clear status indicators displayed when remote control is active.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-card-border/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <Monitor className="w-5 h-5 text-primary" />
            <span className="font-bold text-white">GemDesk</span>
          </div>
          <p className="text-xs text-foreground/40">
            Built for developers. No marketing fluff. &copy; 2026 GemDesk
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-foreground/40 hover:text-white"><Github className="w-5 h-5" /></a>
            <span className="text-xs text-foreground/20 px-2 py-1 border border-card-border/50 rounded">v0.1.0-alpha</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
