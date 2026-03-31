import type { DependencyNode } from '../types';

export const createNode = (
  overrides: Partial<DependencyNode>
): DependencyNode => ({
  file: 'test.ts',
  imports: [],
  exports: [],
  tokenCost: 100,
  linesOfCode: 50,
  ...overrides,
});

export const BARREL_EXPORT_NODE = createNode({
  file: 'src/index.ts',
  imports: ['../module1', '../module2', '../module3'],
  exports: [
    { name: 'func1', type: 'function', inferredDomain: 'module1' },
    { name: 'func2', type: 'function', inferredDomain: 'module2' },
    { name: 'func3', type: 'function', inferredDomain: 'module3' },
  ],
  linesOfCode: 20,
});

export const TYPE_DEFINITION_NODE = createNode({
  file: 'src/types.ts',
  exports: [
    { name: 'User', type: 'interface', inferredDomain: 'user' },
    { name: 'Order', type: 'interface', inferredDomain: 'order' },
    { name: 'Product', type: 'type', inferredDomain: 'product' },
    { name: 'Status', type: 'type', inferredDomain: 'unknown' },
  ],
  linesOfCode: 100,
});

export const COHESIVE_MODULE_NODE = createNode({
  file: 'src/calculator.ts',
  exports: [
    { name: 'calculate', type: 'function', inferredDomain: 'calc' },
    { name: 'format', type: 'function', inferredDomain: 'calc' },
    { name: 'validate', type: 'function', inferredDomain: 'calc' },
  ],
  imports: ['../utils'],
  linesOfCode: 300,
});

export const MIXED_CONCERNS_NODE = createNode({
  file: 'src/audit.ts',
  exports: [
    { name: 'auditStatus', type: 'function', inferredDomain: 'audit' },
    { name: 'createJob', type: 'function', inferredDomain: 'job' },
    { name: 'LineItem', type: 'interface', inferredDomain: 'order' },
    { name: 'SupportingDoc', type: 'type', inferredDomain: 'doc' },
  ],
  imports: ['../auth', '../job', '../order'],
  linesOfCode: 384,
});
