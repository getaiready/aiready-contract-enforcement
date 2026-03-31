'use client';

import { Share2, Fingerprint, TrendingUp, Zap, Users } from 'lucide-react';
import Link from 'next/link';
import BlogLayout from '../_components/BlogLayout';

export default function BlogPost() {
  return (
    <BlogLayout
      metadata={{
        title: 'The Harvester: How Your Wins Help Everyone',
        description:
          'The Eclawnomy is built on Collective Intelligence. How we use private innovation to fuel global evolution through the Harvester agent.',
        date: '2026-04-02',
        image: '/blog-assets/harvester-collective.png',
        slug: 'harvester-collective-intelligence',
      }}
      header={{
        category: 'HUB_SYNC',
        hash: 'collective-wins',
        readTime: '06 MIN READ',
        title: (
          <>
            The <span className="text-teal-500">Harvester</span>
          </>
        ),
        subtitle: 'Collective Intelligence',
        description:
          'Intelligence scales at the speed of the fastest innovator. Discover how we turn individual wins into collective evolution without compromising privacy.',
        image: '/blog-assets/harvester-collective.png',
      }}
      breadcrumbItems={[
        { label: 'BLOG', href: '/blog' },
        {
          label: 'THE HARVESTER',
          href: '/blog/harvester-collective-intelligence',
        },
      ]}
    >
      <section className="mt-12">
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4 italic uppercase">
          <span className="text-teal-500 font-mono text-sm not-italic border-b border-teal-500/30">
            01
          </span>
          The Private Island Problem
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg">
          Most AI implementations are private islands. A developer in Tokyo
          solves a complex EventBridge race condition in their Claw, but that
          knowledge stays trapped in their repository. Meanwhile, a developer in
          London is currently hitting the exact same wall. This is the{' '}
          <strong>Knowledge Friction</strong> that slows the Eclawnomy down.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4 italic uppercase">
          <span className="text-teal-500 font-mono text-sm not-italic border-b border-teal-500/30">
            02
          </span>
          Meet The Harvester
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg">
          ClawMore introduces a specialized background agent:{' '}
          <strong>The Harvester</strong>. Its job is not to copy your code, but
          to extract the <em>pattern</em> of your success.
        </p>
        <div className="grid md:grid-cols-2 gap-6 my-10">
          <div className="p-6 bg-zinc-900 border border-white/5 rounded-sm">
            <Fingerprint className="w-6 h-6 text-teal-500 mb-4" />
            <h4 className="font-black text-sm uppercase mb-2">Anonymization</h4>
            <p className="text-xs text-zinc-400">
              The Harvester strips all business-specific strings, PII, and
              sensitive logic. It only looks for the &quot;Unit of
              Innovation.&quot;
            </p>
          </div>
          <div className="p-6 bg-zinc-900 border border-white/5 rounded-sm">
            <Share2 className="w-6 h-6 text-teal-500 mb-4" />
            <h4 className="font-black text-sm uppercase mb-2">
              Pattern Distribution
            </h4>
            <p className="text-xs text-zinc-400">
              Validated patterns are turned into new &quot;Skills&quot; and
              distributed to every Claw in the network.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4 italic uppercase">
          <span className="text-teal-500 font-mono text-sm not-italic border-b border-teal-500/30">
            03
          </span>
          The Mutual Incentives
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg">
          We reward contribution. If you enable the Harvester for your
          repository:
        </p>
        <ul className="list-none space-y-4 my-8">
          <li className="flex gap-4 items-center">
            <TrendingUp className="w-5 h-5 text-teal-500" />
            <span className="text-lg">
              <strong>$0 Mutation Tax</strong>: All changes to your repo are
              free.
            </span>
          </li>
          <li className="flex gap-4 items-center">
            <Zap className="w-5 h-5 text-teal-500" />
            <span className="text-lg">
              <strong>Priority Support</strong>: Direct line to the core
              architects.
            </span>
          </li>
        </ul>
      </section>

      <div className="mt-20 p-10 bg-teal-500 text-black rounded-3xl text-center group">
        <Users className="w-12 h-12 mx-auto mb-6 group-hover:scale-110 transition-transform" />
        <h3 className="text-3xl font-black mb-4 uppercase italic">
          Join the Collective
        </h3>
        <p className="font-medium mb-8">
          Stop solving problems that have already been solved.
        </p>
        <Link
          href="https://clawmore.ai/"
          className="inline-block py-3 px-8 bg-black text-white font-bold rounded-full"
        >
          Sync Your Repo
        </Link>
      </div>
    </BlogLayout>
  );
}
