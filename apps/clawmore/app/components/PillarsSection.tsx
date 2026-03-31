'use client';

import { RefreshCcw, Activity, Cpu, ShieldCheck } from 'lucide-react';

export default function PillarsSection() {
  return (
    <section
      className="py-16 sm:py-24 relative scroll-mt-24 sm:scroll-mt-28"
      id="features"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_transparent,_rgba(0,255,163,0.02),_transparent)] pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black mb-4 tracking-tighter">
            How ClawMore Works For You
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Simple, automated infrastructure management that saves time and
            reduces costs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="glass-card p-6 sm:p-10 hover:border-cyber-blue/30 transition-all group">
            <div className="w-14 h-14 rounded-sm bg-cyber-blue/10 flex items-center justify-center text-cyber-blue mb-8 border border-cyber-blue/20 group-hover:scale-110 transition-transform">
              <RefreshCcw className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">
              Autonomous Monitoring
            </h3>
            <p className="text-zinc-500 leading-relaxed text-sm">
              24/7 monitoring of your AWS infrastructure. We detect issues
              before they become problems and fix them automatically.
            </p>
          </div>

          <div className="glass-card p-6 sm:p-10 hover:border-amber-500/30 transition-all group">
            <div className="w-14 h-14 rounded-sm bg-amber-500/10 flex items-center justify-center text-amber-400 mb-8 border border-amber-500/20 group-hover:scale-110 transition-transform">
              <Activity className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">
              Multi-Agent Swarms
            </h3>
            <p className="text-zinc-500 leading-relaxed text-sm">
              Deploy swarms of specialized agents that collaborate to solve
              complex architectural challenges and infrastructure evolution.
            </p>
          </div>

          <div className="glass-card p-6 sm:p-10 hover:border-purple-500/30 transition-all group">
            <div className="w-14 h-14 rounded-sm bg-purple-500/10 flex items-center justify-center text-purple-400 mb-8 border border-purple-500/20 group-hover:scale-110 transition-transform">
              <Cpu className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">
              Human-Agent Interaction
            </h3>
            <p className="text-zinc-500 leading-relaxed text-sm">
              Bridge the gap with human-in-the-loop workflows. Multi-human
              multi-agent communication enables seamless collaborative
              engineering.
            </p>
          </div>

          <div className="glass-card p-6 sm:p-10 hover:border-cyber-purple/30 transition-all group">
            <div className="w-14 h-14 rounded-sm bg-cyber-purple/10 flex items-center justify-center text-cyber-purple mb-8 border border-cyber-purple/20 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">
              Secure Evolution
            </h3>
            <p className="text-zinc-500 leading-relaxed text-sm">
              Your code stays in your account. We enforce serverless best
              practices and maintain security compliance automatically.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
