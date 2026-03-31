'use client';

import { TrendingUp } from 'lucide-react';
import BlogLayout from '../_components/BlogLayout';
import SystemFlow from '../../../components/SystemFlow';

const GROWTH_NODES = [
  {
    id: 'clawdbot',
    data: { label: 'Clawdbot (Nov 2025)', type: 'agent' },
    position: { x: 0, y: 0 },
  },
  {
    id: 'openclaw',
    data: { label: 'OpenClaw Pivot', type: 'bus' },
    position: { x: 200, y: 0 },
  },
  {
    id: 'viral',
    data: { label: 'Lobster Phenomenon', type: 'event' },
    position: { x: 400, y: -50 },
  },
  {
    id: 'stars',
    data: { label: '250,000 GitHub Stars', type: 'event' },
    position: { x: 400, y: 50 },
  },
];

const GROWTH_EDGES = [
  {
    id: 'e1',
    source: 'clawdbot',
    target: 'openclaw',
    label: 'Rename',
    animated: true,
  },
  {
    id: 'e2',
    source: 'openclaw',
    target: 'viral',
    label: 'Launch',
    animated: true,
  },
  {
    id: 'e3',
    source: 'openclaw',
    target: 'stars',
    label: 'Growth',
    animated: true,
  },
];

export default function BlogPost() {
  return (
    <BlogLayout
      metadata={{
        title: 'The Origin Story: From Clawdbot to 250k Stars',
        description:
          'The untold story of OpenClaw’s meteoric rise to 250,000 GitHub stars and the birth of the Lobster Phenomenon.',
        date: '2026-03-29',
        image: '/blog-assets/openclaw-chronicles-01-origin-story.png',
        slug: 'openclaw-chronicles-01-origin-story',
      }}
      header={{
        category: 'OPENCLAW_CHRONICLES // PART_01',
        hash: 'origin',
        readTime: '08 MIN READ',
        title: (
          <>
            The Origin Story: <br />
            <span className="text-cyber-purple">Clawdbot to 250k Stars</span>
          </>
        ),
        subtitle: 'From Clawdbot to 250,000 GitHub Stars',
        description:
          'The untold story of OpenClaw’s meteoric rise to 250,000 GitHub stars and the birth of the Lobster Phenomenon.',
        image: '/blog-assets/openclaw-chronicles-01-origin-story.png',
      }}
      breadcrumbItems={[
        { label: 'BLOG', href: '/blog' },
        {
          label: 'ORIGIN STORY',
          href: '/blog/openclaw-chronicles-01-origin-story',
        },
      ]}
    >
      <section>
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4">
          <span className="text-cyber-purple font-mono text-sm">01</span>
          The Humble Beginnings
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg">
          In November 2025, a small project called **Clawdbot** appeared on
          GitHub. It was a simple message router for AI agents, designed to
          connect LLMs to local files. Nobody predicted that within four months,
          it would surpass React as the most-starred software project in
          history.
        </p>
        <p className="text-zinc-200 leading-relaxed text-lg mt-6">
          Peter Steinberger, the visionary behind the project, realized that the
          world didn't need another chatbot. It needed an **Agentic Engine**—a
          local-first runtime that could *act*, not just *talk*.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4">
          <span className="text-cyber-purple font-mono text-sm">02</span>
          The Lobster Phenomenon
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg">
          Why the lobster? It started as a joke in the early Discord community,
          but it quickly became the symbol of a new era. The "Lobster
          Phenomenon" represents the resilient, hard-shelled, and decentralized
          nature of the OpenClaw ecosystem.
        </p>
      </section>

      <SystemFlow nodes={GROWTH_NODES} edges={GROWTH_EDGES} height="350px" />

      <section className="mt-16">
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4">
          <span className="text-cyber-purple font-mono text-sm">03</span>
          Breaking the 250k Star Barrier
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg">
          The explosion happened overnight. Developers realized that OpenClaw's
          local-first philosophy meant they could run a 24/7 Jarvis-like
          assistant on their own hardware, without sending sensitive data to the
          cloud. This privacy-first execution model was the match that lit the
          fire.
        </p>
        <div className="mt-8 p-6 bg-zinc-900/50 border border-white/10 rounded-sm font-mono text-[11px] text-zinc-200">
          <div className="flex items-center gap-2 text-cyber-purple mb-2">
            <TrendingUp className="w-3 h-3" />
            <span>GITHUB_METRICS.json</span>
          </div>
          {`{
  "project": "OpenClaw",
  "stars": 250421,
  "forks": 18402,
  "contributors": 1240,
  "velocity": "Record Breaking"
}`}
        </div>
      </section>

      <section className="mt-16 mb-24">
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4">
          <span className="text-cyber-purple font-mono text-sm">04</span>
          What’s Next?
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg">
          The origin story is just the beginning. In our next entry, **OpenClaw
          101**, we’ll dive deep into the Local-First philosophy that makes this
          framework so powerful. We’ll explore how OpenClaw manages state in
          Markdown and why your agent doesn't need a cloud to remember who you
          are.
        </p>
      </section>
    </BlogLayout>
  );
}
