'use client';

import { Lock, Network, AlertCircle } from 'lucide-react';
import BlogLayout from '../_components/BlogLayout';

export default function BlogPost() {
  return (
    <BlogLayout
      metadata={{
        title: 'Safety First: Isolating Intelligence with SST',
        description:
          'Autonomous agents need freedom to act, but within an ironclad sandbox. How we use SST and AWS Account Vending to secure the Eclawnomy.',
        date: '2026-04-01',
        image: '/blog-assets/safety-isolation.png',
        slug: 'safety-isolation-sst',
      }}
      header={{
        category: 'SEC_ARCH',
        hash: 'iron-sandbox',
        readTime: '07 MIN READ',
        title: (
          <>
            Safety <span className="text-cyber-purple">First</span>
          </>
        ),
        subtitle: 'Isolating Intelligence',
        description:
          "Autonomous agents need freedom to act, but within an ironclad sandbox. We don't just manage code; we manage the risk boundary of continuous evolution.",
        image: '/blog-assets/safety-isolation.png',
      }}
      breadcrumbItems={[
        { label: 'BLOG', href: '/blog' },
        {
          label: 'SAFETY ISOLATION SST',
          href: '/blog/safety-isolation-sst',
        },
      ]}
    >
      <section className="mt-12">
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4 italic uppercase">
          <span className="text-cyber-purple font-mono text-sm not-italic">
            {'/// 01'}
          </span>
          The Problem of Agentic Overreach
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg">
          In a world of GPT-5.4 reasoning, an agent given a simple task could
          technically expand its scope to re-architect your entire VPC. Without
          isolation, the &quot;Eclawnomy&quot; is just a high-speed accident
          waiting to happen.
        </p>
        <div className="my-10 p-6 bg-red-950/20 border border-red-900/40 rounded-sm">
          <div className="flex items-center gap-2 text-red-500 font-mono text-[10px] mb-2 uppercase">
            <AlertCircle className="w-3 h-3" />
            CRITICAL_RISK_DETECTED
          </div>
          <p className="text-sm italic">
            Shared infrastructure = Shared blast radius. We don&apos;t do that.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4 italic uppercase">
          <span className="text-cyber-purple font-mono text-sm not-italic">
            {'/// 02'}
          </span>
          Account Vending: The Ultimate Sandbox
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg">
          ClawMore uses an <strong>AWS Account Vending Machine</strong>. When
          you register a repository, we don&apos;t just create a folder; we
          provision a entirely separate, pristine AWS account.
        </p>
        <ul className="list-none space-y-4 my-8">
          <li className="flex gap-4 items-start">
            <Lock className="w-5 h-5 text-cyber-purple shrink-0 mt-1" />
            <span>
              <strong>Hard Boundaries</strong>: No cross-account traffic. Ever.
            </span>
          </li>
          <li className="flex gap-4 items-start">
            <Network className="w-5 h-5 text-cyber-purple shrink-0 mt-1" />
            <span>
              <strong>Ephemeral Access</strong>: Agents use short-lived STS
              tokens that expire the moment the mutation is verified.
            </span>
          </li>
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4 italic uppercase">
          <span className="text-cyber-purple font-mono text-sm not-italic">
            {'/// 03'}
          </span>
          SST v4: Code-Aware Security
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg">
          By using <strong>SST v4</strong> (our preferred framework for{' '}
          <em>serverlessclaw</em>), our security policies are literally woven
          into the infrastructure code. We define the &quot;Minimum viable
          permission&quot; for every agent role programmatically.
        </p>
      </section>
    </BlogLayout>
  );
}
