import { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    title: 'Frontend Core',
    subtitle: 'Interfaces & Styling',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Responsive Design'],
    highlightSkills: ['TypeScript', 'React', 'Next.js']
  },
  {
    title: 'Web Applications',
    subtitle: 'Backbone & State',
    skills: ['Node.js', 'RESTful APIs', 'State Management', 'Zustand', 'Git & GitHub', 'Performance Audit', 'WebSockets'],
    highlightSkills: ['Node.js', 'Git & GitHub']
  },
  {
    title: 'Web3 & Decentralized',
    subtitle: 'Smart Contracts & DApps',
    skills: ['Solidity', 'Ethers.js', 'Wagmi', 'Viem', 'Smart Contracts', 'Wallet Integration', 'EVM Ecosystem'],
    highlightSkills: ['Solidity', 'Ethers.js']
  }
];

