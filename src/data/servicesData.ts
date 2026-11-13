import { Service } from '../types';

export const servicesData: Service[] = [
  {
    id: 'web-dev',
    number: '01 / WEB',
    title: 'Website Development',
    description: 'Bespoke, lightning-fast marketing websites and digital flagships engineered for conversions, search engine visibility, and brand elevation.',
    tags: ['Custom', 'Fast', 'SEO'],
    serviceType: 'Website Development'
  },
  {
    id: 'frontend-dev',
    number: '02 / FRONTEND',
    title: 'Frontend Development',
    description: 'Component-driven client architecture using React, Next.js, and TypeScript. Fluid micro-interactions, robust type safety, and silky transitions.',
    tags: ['React', 'Next.js', 'TypeScript'],
    serviceType: 'Frontend Development'
  },
  {
    id: 'web-app-dev',
    number: '03 / APPS',
    title: 'Web Application Development',
    description: 'Full-cycle engineering from interactive operational dashboards to complex cloud platforms with state machines, role security, and real-time syncing.',
    tags: ['Full-Stack', 'APIs', 'Cloud'],
    serviceType: 'Web Application'
  },
  {
    id: 'mobile-app-dev',
    number: '04 / MOBILE',
    title: 'Mobile Application Development',
    description: 'Progressive Web Apps (PWAs) and cross-platform mobile experiences that feel genuinely native, responsive on every viewport, and work reliably offline.',
    tags: ['PWA', 'Touch', 'Native Feel'],
    serviceType: 'Mobile Application'
  },
  {
    id: 'web3-dev',
    number: '05 / WEB3',
    title: 'Web3 & Smart Contract Development',
    description: 'Decentralized applications, EVM smart contracts, non-custodial staking protocols, token mechanisms, and gas-optimized on-chain integrations.',
    tags: ['Solidity', 'EVM', 'Ethers/Viem'],
    serviceType: 'Web3 Development'
  },
  {
    id: 'ui-ux-impl',
    number: '06 / UI-UX',
    title: 'UI/UX Implementation',
    description: 'Translating Figma architectures into pixel-perfect, accessible, and high-contrast production code with micro-interactions and design system tokens.',
    tags: ['Design Systems', 'A11y', 'Figma'],
    serviceType: 'UI/UX Implementation'
  },
  {
    id: 'custom-software',
    number: '07 / SPECIALIZED',
    title: 'Custom Software Solutions',
    description: 'Tailored internal tools, specialized API integrations, payment processing flows, automation pipelines, and custom architecture consultancy.',
    tags: ['Internal Tools', 'Integrations', 'Consulting'],
    serviceType: 'Custom Software'
  }
];

