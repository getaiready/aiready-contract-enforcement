'use client';

import { Terminal, RefreshCcw } from 'lucide-react';
import BlogLayout from '../_components/BlogLayout';
import SystemFlow from '../../../components/SystemFlow';

const TRANSITION_NODES = [
  {
    id: 'user',
    data: { label: '[HUMAN_INTENT]', type: 'agent' },
    position: { x: 0, y: 0 },
  },
  {
    id: 'chat',
    data: { label: 'STATELESS_CHAT', type: 'event' },
    position: { x: 200, y: -50 },
  },
  {
    id: 'mutation',
    data: { label: 'MUTABLE_LOGIC_COMMIT', type: 'bus' },
    position: { x: 200, y: 50 },
  },
  {
    id: 'infra',
    data: { label: 'PROD_INFRASTRUCTURE', type: 'agent' },
    position: { x: 450, y: 0 },
  },
];

const TRANSITION_EDGES = [
  {
    id: 'e1',
    source: 'user',
    target: 'chat',
    label: 'Ask',
    animated: true,
    style: { stroke: '#666' },
  },
  {
    id: 'e2',
    source: 'chat',
    target: 'infra',
    label: 'Manual Copy',
    style: { stroke: '#ef4444', strokeDasharray: '5 5' },
  },
  {
    id: 'e3',
    source: 'user',
    target: 'mutation',
    label: 'Intent',
    animated: true,
  },
  {
    id: 'e4',
    source: 'mutation',
    target: 'infra',
    label: 'Auto Deploy',
    animated: true,
  },
];

export default function BlogPost() {
  return (
    <BlogLayout
      metadata={{
        title: 'The Death of the Transient Agent',
        description:
          'Why stateless chat with infrastructure is a dead end. Introducing the case for mutable logic state that persists to source control.',
        date: '2026-03-13',
        image: '/blog-assets/death-of-the-transient-agent.png',
        slug: 'death-of-the-transient-agent',
      }}
      header={{
        category: 'CORE_ENGINE',
        hash: '5086da9',
        readTime: '06 MIN READ',
        title: (
          <>
            The Death of the <br />
            <span className="text-cyber-purple">Transient Agent</span>
          </>
        ),
        subtitle: 'Mutable Logic State',
        description:
          'Why stateless chat with infrastructure is a dead end. Introducing the case for mutable logic state that persists to source control.',
        image: '/blog-assets/death-of-the-transient-agent.png',
      }}
      breadcrumbItems={[
        { label: 'BLOG', href: '/blog' },
        {
          label: 'THE DEATH OF THE TRANSIENT AGENT',
          href: '/blog/death-of-the-transient-agent',
        },
      ]}
    >
      <section>
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4">
          <span className="text-cyber-purple font-mono text-sm">01</span>
          The Context Window Trap
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg">
          Current AI infrastructure assistants operate as transient observers.
          You ask for a VPC, they generate a snippet, and then they vanish. The
          "context" of your infrastructure exists only in the volatile memory of
          a chat session. When that session ends, the intelligence disappears.
        </p>
        <div className="mt-8 p-6 bg-white/[0.02] border border-white/5 rounded-sm font-mono text-[11px] text-zinc-300 italic">
          {'// Standard Workflow: Volatile & Disconnected'} <br />
          {'1. Human asks for S3 bucket'} <br />
          {'2. AI generates CloudFormation'} <br />
          {'3. Human copy-pastes (Manual Error Risk)'} <br />
          {"4. Context is lost. AI has no memory of the bucket's purpose."}
        </div>
      </section>

      <SystemFlow
        nodes={TRANSITION_NODES}
        edges={TRANSITION_EDGES}
        height="300px"
      />

      <section className="mt-16">
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4">
          <span className="text-cyber-purple font-mono text-sm">02</span>
          Mutation as Primary Logic
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg">
          ClawMore treats infrastructure as{' '}
          <span className="text-white italic font-bold">
            Mutable Logic State
          </span>
          . Instead of providing advice, the engine synthesizes a patch and
          commits it directly to your source control. The "truth" isn't in a
          database—it's in your Git history.
        </p>
        <p className="text-zinc-200 leading-relaxed text-lg mt-6">
          This creates a recursive loop where the agent doesn't just manage the
          infrastructure; it <span className="text-cyber-purple">becomes</span>{' '}
          the infrastructure.
        </p>
      </section>

      <div className="p-10 glass-card border-cyber-purple/20 bg-cyber-purple/[0.02] relative overflow-hidden group my-16">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <RefreshCcw size={80} className="animate-spin-slow" />
        </div>
        <h4 className="text-cyber-purple font-black text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
          <Terminal className="w-4 h-4" /> RECURSIVE_INTEGRITY_CHECK
        </h4>
        <p className="text-sm text-zinc-300 leading-relaxed italic mb-0">
          "By persisting mutations to Git, we ensure that the system's reasoning
          is versioned alongside its execution. Every 'thought' is a commit.
          Every 'action' is a merge."
        </p>
      </div>

      <section>
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4">
          <span className="text-cyber-purple font-mono text-sm">03</span>
          The Reflective Neural Loop
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg">
          In the next post, we'll dive into the **Neural Spine**—the
          EventBridge-driven mesh that allows these mutations to happen
          autonomously. we'll explore how the Reflector detects infrastructure
          gaps and signals the Architect to design a mutation.
        </p>
      </section>
    </BlogLayout>
  );
}
