import React from 'react';
import { Shield, Zap } from 'lucide-react';

interface AccountTabProps {
  user: any;
  status: any;
  provisionAccountId?: string | null;
  detectedRegion: string;
  provisionStatus: string;
  isCheckingOut: boolean;
  onManageSubscription: () => void;
  isAutoTopupEnabled: boolean;
  onAutoTopupToggle: (enabled: boolean) => void;
  topupThresholdCents: number;
  setTopupThresholdCents: (val: number) => void;
  topupAmountCents: number;
  setTopupAmountCents: (val: number) => void;
}

export default function AccountTab({
  user,
  status,
  provisionAccountId,
  detectedRegion,
  provisionStatus,
  isCheckingOut,
  onManageSubscription,
  isAutoTopupEnabled,
  onAutoTopupToggle,
  topupThresholdCents,
  setTopupThresholdCents,
  topupAmountCents,
  setTopupAmountCents,
}: AccountTabProps) {
  return (
    <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <h2 className="text-2xl font-black italic mb-12 tracking-tight uppercase">
        Billing & <span className="text-cyber-blue">Account</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <div className="space-y-6">
          <h3 className="text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-600">
            Your Profile
          </h3>
          <div className="bg-black/60 border border-white/5 p-8 rounded-3xl shadow-xl">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-[24px] bg-cyber-blue/10 flex items-center justify-center text-cyber-blue font-black text-2xl border border-cyber-blue/30 shadow-[0_0_30px_rgba(0,224,255,0.1)]">
                {user.name?.[0] || user.email?.[0] || 'U'}
              </div>
              <div className="space-y-1">
                <p className="text-xl font-black italic text-white uppercase tracking-tight">
                  {user.name || 'Developer'}
                </p>
                <p className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest">
                  {user.email}
                </p>
              </div>
            </div>
            <div className="space-y-4 pt-6 border-t border-white/5">
              <div className="flex justify-between items-center bg-white/[0.02] p-3 rounded-xl border border-white/5">
                <span className="text-[9px] text-zinc-600 uppercase font-black tracking-widest">
                  Plan Status
                </span>
                <span
                  className={`font-black italic text-[10px] uppercase tracking-widest ${
                    status.planStatus === 'MANAGED'
                      ? 'text-emerald-500'
                      : 'text-zinc-500'
                  }`}
                >
                  {status.planStatus === 'MANAGED'
                    ? 'Pro Plan Active'
                    : 'Free Tier'}
                </span>
              </div>
              <div className="flex justify-between items-center bg-white/[0.02] p-3 rounded-xl border border-white/5">
                <span className="text-[9px] text-zinc-600 uppercase font-black tracking-widest">
                  Access Level
                </span>
                <span className="text-white font-black italic text-[10px] uppercase tracking-widest">
                  Full Access
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-600">
            Active Controller
          </h3>
          <div className="bg-black/60 border border-white/5 p-8 rounded-3xl shadow-xl relative overflow-hidden group">
            <Shield className="absolute -bottom-4 -right-4 w-32 h-32 opacity-5 text-white group-hover:opacity-10 transition-opacity" />
            <div className="space-y-6 relative z-10">
              <div className="flex justify-between items-center pb-4 border-b border-white/5">
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                  AWS ID
                </span>
                <span className="text-xs font-black text-white italic">
                  {provisionAccountId
                    ? provisionAccountId.replace(
                        /(\d{4})(\d{4})(\d{4})/,
                        '$1-$2-$3'
                      )
                    : provisionStatus === 'provisioning'
                      ? 'Provisioning...'
                      : '—'}
                </span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-white/5">
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                  Deployment Zone
                </span>
                <span className="text-[10px] font-black text-cyber-blue px-3 py-1 bg-cyber-blue/10 border border-cyber-blue/20 rounded-lg uppercase tracking-widest">
                  {detectedRegion}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                  Heartbeat
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                  <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">
                    SECURE_SYNC
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Billing Card */}
      <div className="bg-zinc-900/60 border border-white/5 rounded-[40px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-10 md:p-14 bg-gradient-to-br from-zinc-800/40 to-transparent border-r border-white/5 relative overflow-hidden group">
            <Zap className="absolute -top-12 -left-12 w-64 h-64 opacity-5 text-white group-hover:scale-110 transition-transform duration-1000" />
            <div className="relative z-10">
              <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.5em] mb-4">
                Your Plan
              </p>
              <h4 className="text-3xl md:text-4xl font-black italic mb-6 text-white leading-tight uppercase tracking-tighter">
                Managed
                <br />
                <span className="text-cyber-blue">Platform</span>
              </h4>
              <p className="text-xs text-zinc-500 mb-10 leading-relaxed font-mono italic">
                $29/mo includes managed infrastructure, AI-powered fixes, CI/CD
                integration, and $10/month in AI credits.
              </p>
              <button
                onClick={onManageSubscription}
                disabled={isCheckingOut}
                className="w-full py-4 bg-white hover:bg-zinc-200 text-black rounded-2xl text-xs font-black uppercase italic tracking-widest transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-white/20 disabled:opacity-50"
              >
                {isCheckingOut ? 'Loading...' : 'Manage Subscription'}
              </button>
            </div>
          </div>

          <div className="p-10 md:p-14 bg-black/40">
            <div className="flex justify-between items-start mb-10">
              <div className="space-y-1">
                <h3 className="text-sm font-black text-white flex items-center gap-3 uppercase italic tracking-tight">
                  <Zap className="w-4 h-4 text-amber-500" /> Auto Top-Up
                </h3>
                <p className="text-[8px] text-zinc-600 uppercase tracking-[0.4em] font-mono">
                  Never run out of AI credits
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer scale-110">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={isAutoTopupEnabled}
                  onChange={(e) => onAutoTopupToggle(e.target.checked)}
                />
                <div className="w-11 h-6 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500 shadow-inner"></div>
              </label>
            </div>

            {isAutoTopupEnabled ? (
              <div className="space-y-10 animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div className="space-y-4">
                  <div className="flex justify-between text-[9px] font-mono uppercase tracking-widest">
                    <span className="text-zinc-600">Pulse Threshold</span>
                    <span className="text-white font-black">
                      ${(topupThresholdCents / 100).toFixed(2)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="5000"
                    step="500"
                    value={topupThresholdCents}
                    onChange={(e) =>
                      setTopupThresholdCents(parseInt(e.target.value))
                    }
                    className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                  <div className="flex justify-between text-[8px] font-mono text-zinc-700">
                    <span>$5.00</span>
                    <span>$50.00</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between text-[9px] font-mono uppercase tracking-widest">
                    <span className="text-zinc-600">Top-up Amount</span>
                    <span className="text-white font-black">
                      ${(topupAmountCents / 100).toFixed(2)}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[1000, 2500, 5000].map((amt) => (
                      <button
                        key={amt}
                        onClick={() => setTopupAmountCents(amt)}
                        className={`py-2 rounded-lg text-[10px] font-black transition-all border ${
                          topupAmountCents === amt
                            ? 'bg-amber-500 border-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                            : 'bg-white/5 border-white/10 text-zinc-500 hover:text-white'
                        }`}
                      >
                        ${(amt / 100).toFixed(0)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-40 flex items-center justify-center text-center px-10">
                <p className="text-[10px] text-zinc-600 font-mono italic leading-relaxed">
                  Automatic top-up is currently inactive. You will need to
                  manually refill your credits when balance is low.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
