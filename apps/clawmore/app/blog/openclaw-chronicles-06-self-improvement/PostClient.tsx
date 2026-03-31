'use client';

import { RotateCcw } from 'lucide-react';
import BlogLayout from '../_components/BlogLayout';
import SystemFlow from '../../../components/SystemFlow';

const MOLT_NODES = [
  {
    id: 'gap',
    data: { label: 'Capability Gap Detected', type: 'event' },
    position: { x: 0, y: 0 },
  },
  {
    id: 'coder',
    data: { label: 'Molt Coder Agent', type: 'agent' },
    position: { x: 200, y: 0 },
  },
  {
    id: 'new_skill',
    data: { label: 'New SKILL.md Generated', type: 'bus' },
    position: { x: 400, y: -50 },
  },
  {
    id: 'registry',
    data: { label: 'Skill Registry Update', type: 'bus' },
    position: { x: 400, y: 50 },
  },
];

const MOLT_EDGES = [
  {
    id: 'e1',
    source: 'gap',
    target: 'coder',
    label: 'Trigger',
    animated: true,
  },
  {
    id: 'e2',
    source: 'coder',
    target: 'new_skill',
    label: 'Code',
    animated: true,
  },
  {
    id: 'e3',
    source: 'new_skill',
    target: 'registry',
    label: 'Register',
    animated: true,
  },
];

export default function BlogPost() {
  return (
    <BlogLayout
      metadata={{
        title: 'Self-Improvement: When Agents Write Their Own Skills',
        description:
          'The "Molt" mechanism. How OpenClaw agents autonomously code new skills to solve complex tasks.',
        date: '2026-04-15',
        image: '/blog-assets/openclaw-chronicles-06-self-improvement.png',
        slug: 'openclaw-chronicles-06-self-improvement',
      }}
      header={{
        category: 'OPENCLAW_CHRONICLES // PART_06',
        hash: 'molt',
        readTime: '09 MIN READ',
        title: (
          <>
            Self-Improvement: <br />
            <span className="text-cyber-purple">Autonomous Molting</span>
          </>
        ),
        subtitle: 'The Recursive Loop',
        description:
          'The Recursive Loop. How OpenClaw agents identify their own limitations and write the code necessary to overcome them.',
        image: '/blog-assets/openclaw-chronicles-06-self-improvement.png',
      }}
      breadcrumbItems={[
        { label: 'BLOG', href: '/blog' },
        {
          label: 'SELF-IMPROVEMENT',
          href: '/blog/openclaw-chronicles-06-self-improvement',
        },
      ]}
    >
      <section>
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4">
          <span className="text-cyber-purple font-mono text-sm">01</span>
          The Capability Wall
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg">
          Every agent eventually hits a "wall"—a task that requires a tool it
          doesn't have. Most systems fail here and ask the human for help. But
          OpenClaw is built on the philosophy of **Evolution**. If an agent
          can't solve a problem, it doesn't just give up; it builds the
          solution.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4">
          <span className="text-cyber-purple font-mono text-sm">02</span>
          The Molt Mechanism
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg">
          We call this process "Molting." Just as a lobster sheds its shell to
          grow, an OpenClaw agent sheds its current limitations by generating
          new skills. When a capability gap is detected, the agent triggers a
          high-reasoning **Coder Agent** to draft a new `SKILL.md` file.
        </p>
      </section>

      <SystemFlow nodes={MOLT_NODES} edges={MOLT_EDGES} height="350px" />

      <section className="mt-16">
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4">
          <span className="text-cyber-purple font-mono text-sm">03</span>
          Recursive Improvement
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg mb-8">
          The beauty of the local-first architecture is that this new skill is
          immediately written to the local disk, registered in the agent's
          brain, and ready for use. The agent can then retry the original task
          using its newly acquired power.
        </p>
        <div className="mt-8 p-6 bg-zinc-900/50 border border-white/10 rounded-sm font-mono text-[11px] text-zinc-200">
          <div className="flex items-center gap-2 text-cyber-purple mb-2">
            <RotateCcw className="w-3 h-3" />
            <span>EVOLUTION_LOG.json</span>
          </div>
          {`{
  "timestamp": "2026-04-15T10:24:00Z",
  "event": "MOLT_TRIGGERED",
  "reason": "Missing capability: 'analyze_pcap_files'",
  "status": "Generating 'pcap_inspector' skill...",
  "output_path": "./skills/pcap_inspector.md",
  "validation": "PASSED"
}`}
        </div>
      </section>

      <section className="mt-16 mb-24">
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4">
          <span className="text-cyber-purple font-mono text-sm">04</span>
          Scaling the Evolution
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg">
          Self-improvement on a single machine is powerful, but what if these
          mutations could be shared? In our next entry, **Persistence**, we'll
          explore how we scale this local-first state to the cloud using S3 and
          DynamoDB, enabling a global ecosystem of evolving agents.
        </p>
      </section>
    </BlogLayout>
  );
}
