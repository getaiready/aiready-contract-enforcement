'use client';

import Link from 'next/link';
import { Zap, ShieldCheck } from 'lucide-react';

export default function PricingSection() {
  return (
    <section
      className="py-20 sm:py-32 scroll-mt-24 sm:scroll-mt-28"
      id="pricing"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 tracking-tighter">
            Simple, Transparent Pricing
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Tier */}
          <div className="glass-card p-6 sm:p-8 flex flex-col border-white/10 hover:border-white/20 transition-all">
            <div className="mb-8">
              <h4 className="text-zinc-400 font-mono text-xs uppercase tracking-widest font-black mb-2">
                Free
              </h4>
              <div className="text-4xl sm:text-5xl font-black tracking-tight text-white">
                $0
                <span className="text-xl font-normal text-zinc-500">
                  /month
                </span>
              </div>
              <p className="text-[10px] font-mono text-zinc-500 uppercase mt-3 tracking-tighter font-bold">
                Perfect for trying out ClawMore
              </p>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3 text-sm text-zinc-100">
                <Zap className="w-4 h-4 text-zinc-400 shrink-0" /> 3
                repositories
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-100">
                <Zap className="w-4 h-4 text-zinc-400 shrink-0" /> 10 scans per
                month
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-100">
                <Zap className="w-4 h-4 text-zinc-400 shrink-0" /> Basic
                reporting
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-100">
                <Zap className="w-4 h-4 text-zinc-400 shrink-0" /> Community
                support
              </li>
            </ul>
            <Link
              href="/signup"
              className="w-full py-4 rounded-sm bg-white hover:bg-zinc-200 transition-all text-black text-xs font-black uppercase text-center tracking-widest"
            >
              Start Free
            </Link>
          </div>

          {/* Pro Tier - MOST POPULAR */}
          <div className="glass-card p-6 sm:p-8 border-cyber-blue/30 bg-cyber-blue/[0.03] relative flex flex-col hover:border-cyber-blue/50 transition-all shadow-[0_0_80px_rgba(0,224,255,0.08)]">
            <div className="absolute top-0 right-4 sm:right-8 -translate-y-1/2 px-3 py-1.5 rounded-sm bg-cyber-blue text-black text-[9px] font-black uppercase tracking-[0.3em] shadow-[0_0_20px_rgba(0,224,255,0.3)] z-10">
              Most Popular
            </div>
            <div className="mb-8">
              <h4 className="text-cyber-blue font-mono text-xs uppercase tracking-widest font-black mb-2">
                Pro
              </h4>
              <div className="text-4xl sm:text-5xl font-black tracking-tight text-white">
                $29
                <span className="text-xl font-normal text-zinc-500">
                  /month
                </span>
              </div>
              <p className="text-[10px] font-mono text-cyber-blue uppercase mt-3 tracking-tighter font-bold">
                For growing teams and projects
              </p>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3 text-sm text-zinc-100">
                <Zap className="w-4 h-4 text-cyber-blue shrink-0" /> Unlimited
                repositories
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-100">
                <Zap className="w-4 h-4 text-cyber-blue shrink-0" /> Unlimited
                scans
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-100">
                <Zap className="w-4 h-4 text-cyber-blue shrink-0" /> $10/month
                AI credits
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-100">
                <Zap className="w-4 h-4 text-cyber-blue shrink-0" /> Auto-fix
                capabilities
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-100">
                <Zap className="w-4 h-4 text-cyber-blue shrink-0" /> Priority
                support
              </li>
            </ul>
            <Link
              href="/signup"
              className="w-full py-4 rounded-sm bg-cyber-blue hover:bg-cyber-blue/90 transition-all text-black text-xs font-black uppercase text-center tracking-widest shadow-[0_0_25px_rgba(0,224,255,0.2)]"
            >
              Start 14-Day Free Trial
            </Link>
          </div>

          {/* Team Tier */}
          <div className="glass-card p-6 sm:p-8 flex flex-col border-amber-500/20 bg-amber-500/[0.02] hover:border-amber-500/40 transition-all">
            <div className="mb-8">
              <h4 className="text-amber-400 font-mono text-xs uppercase tracking-widest font-black mb-2">
                Team
              </h4>
              <div className="text-4xl sm:text-5xl font-black tracking-tight text-white">
                $99
                <span className="text-xl font-normal text-zinc-500">
                  /month
                </span>
              </div>
              <p className="text-[10px] font-mono text-amber-400/70 uppercase mt-3 tracking-tighter font-bold">
                For enterprises and large teams
              </p>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3 text-sm text-zinc-100">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />{' '}
                Everything in Pro
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-100">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" /> SSO
                integration
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-100">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />{' '}
                Audit logs
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-100">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />{' '}
                Custom integrations
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-100">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />{' '}
                Dedicated support
              </li>
            </ul>
            <Link
              href="/signup"
              className="w-full py-4 rounded-sm bg-amber-500 hover:bg-amber-400 transition-all text-black text-xs font-black uppercase text-center tracking-widest"
            >
              Contact Sales
            </Link>
          </div>
        </div>

        <div className="mt-12 sm:mt-20 glass-card p-6 sm:p-10 max-w-2xl mx-auto border-emerald-500/20 bg-emerald-500/[0.02]">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <h5 className="font-mono text-xs font-black uppercase tracking-[0.4em] text-emerald-400">
              30-Day Money-Back Guarantee
            </h5>
          </div>
          <p className="text-sm text-zinc-400 font-mono leading-relaxed tracking-tight">
            Try ClawMore risk-free. If you're not satisfied within 30 days,
            we'll refund your payment in full. No questions asked.
          </p>
        </div>
      </div>
    </section>
  );
}
