/**
 * JETHRO SAMSON — LUXURY PORTFOLIO SCRIPT
 * Handles animations, interactions, modals, and forms
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Reveal on Scroll
  initScrollReveals();

  // 2. Initialize Navigation and Sticky Header
  initNavigation();

  // 3. Initialize Hero Tag Chips & Quick Inquiries
  initHeroTags();

  // 4. Initialize Project Showcase & Modals
  initProjectModals();

  // 5. Initialize About Me Modal
  initAboutModal();

  // 6. Initialize Contact Form & Toast
  initContactForm();

  // 7. Initialize Dynamic Radial Arc Ticks
  drawRadialTicks();
});

/* ==========================================================================
   1. SCROLL REVEALS
   ========================================================================== */
function initScrollReveals() {
  const reveals = document.querySelectorAll('.reveal-on-scroll');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, {
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1
  });

  reveals.forEach(el => observer.observe(el));
}

/* ==========================================================================
   2. NAVIGATION & STICKY HEADER
   ========================================================================== */
function initNavigation() {
  const header = document.getElementById('main-header');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky header background shift on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('header-scrolled');
    } else {
      header?.classList.remove('header-scrolled');
    }
    updateActiveNavLink();
  });

  // Mobile menu toggle
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });
  }

  function openMobileMenu() {
    mobileDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
    mobileToggle.setAttribute('aria-expanded', 'true');
  }

  function closeMobileMenu() {
    mobileDrawer.classList.remove('open');
    document.body.style.overflow = '';
    mobileToggle.setAttribute('aria-expanded', 'false');
  }

  // Active section indicator
  function updateActiveNavLink() {
    const sections = ['home', 'about', 'services', 'projects', 'process', 'skills', 'contact'];
    const scrollPos = window.scrollY + 200;

    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);
      if (section) {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
          break;
        }
      }
    }
  }
}

/* ==========================================================================
   3. HERO TAG CHIPS
   ========================================================================== */
function initHeroTags() {
  const tags = document.querySelectorAll('.hero-interest-tag');
  const projectTypeSelect = document.getElementById('project-type');

  tags.forEach(tag => {
    tag.addEventListener('click', () => {
      // Toggle visual active state
      tags.forEach(t => t.classList.remove('active'));
      tag.classList.add('active');

      const serviceType = tag.getAttribute('data-service');
      if (projectTypeSelect && serviceType) {
        projectTypeSelect.value = serviceType;
      }

      // Smooth scroll to contact section
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        // Pulse highlight the project type select
        if (projectTypeSelect) {
          setTimeout(() => {
            projectTypeSelect.focus();
            projectTypeSelect.classList.add('ring-2', 'ring-amber-400');
            setTimeout(() => {
              projectTypeSelect.classList.remove('ring-2', 'ring-amber-400');
            }, 1800);
          }, 600);
        }
      }
    });
  });
}

/* ==========================================================================
   4. PROJECT SHOWCASE & MODALS
   ========================================================================== */
const projectData = {
  nexus: {
    title: 'Nexus Protocol',
    subtitle: 'Decentralized Asset Staking & Liquidity Interface',
    category: 'Web3 & Decentralized Apps',
    badge: 'Production DeFi Protocol',
    summary: 'A high-performance Web3 interface engineered for multi-network non-custodial staking, liquidity pool analytics, and gas-optimized EVM contract interactions.',
    metrics: [
      { label: 'Network Support', value: 'Ethereum & Arbitrum' },
      { label: 'Transaction Speed', value: '< 1.4s Execution' },
      { label: 'Security Score', value: '99.4% Audited' },
      { label: 'Architecture', value: 'Modular Wagmi/Viem' }
    ],
    tech: ['React 18', 'TypeScript', 'Ethers.js', 'Wagmi', 'Tailwind CSS', 'Vite'],
    features: [
      'Real-time WebSocket telemetry for on-chain APY yield graphs',
      'Gas estimation preview and slip tolerance management',
      'Multi-wallet modal supporting MetaMask, Coinbase Wallet, and WalletConnect',
      'Custom dark/warm caramel glass UI optimized for desktop and mobile screens'
    ],
    codeSnippet: `// Contract staking handler with slippage & gas optimization
export async function executeStake({ amount, validator, signer }: StakeParams) {
  const protocol = new ethers.Contract(NEXUS_ADDRESS, NexusABI, signer);
  const gasEstimate = await protocol.estimateGas.stake(validator, { value: amount });
  const tx = await protocol.stake(validator, {
    value: amount,
    gasLimit: gasEstimate.mul(115).div(100) // 15% safety buffer
  });
  return await tx.wait(1);
}`,
    mockupImg: 'assets/images/project-nexus.jpg'
  },
  aura: {
    title: 'Aura Studio Engine',
    subtitle: 'High-End Architecture & Design Studio Web Platform',
    category: 'Frontend & Interactive Web',
    badge: 'Editorial Web Experience',
    summary: 'A bespoke digital flagship designed for a luxury architectural studio, featuring silky micro-interactions, responsive grid layouts, GPU-accelerated canvas animations, and sub-second load times.',
    metrics: [
      { label: 'Lighthouse Score', value: '100 / 100 Perf' },
      { label: 'Page Load', value: '0.48s FCP' },
      { label: 'Interactivity', value: 'Fluid 60FPS' },
      { label: 'A11y Compliance', value: 'WCAG AAA' }
    ],
    tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'HTML5 Canvas'],
    features: [
      'Interactive architectural project gallery with kinetic typography',
      'Fluid custom viewport transitions and smooth momentum scrolling',
      'Adaptive image serving with modern AVIF/WebP formats',
      'Custom editorial layout following a minimalist Scandinavian aesthetic'
    ],
    codeSnippet: `// Custom kinetic scroll momentum hook with dampening
export function useSmoothMomentum(damping = 0.85) {
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    let animId: number;
    const update = () => {
      // Linear interpolation between current and target scroll
      current = current + (target - current) * (1 - damping);
      setScrollProgress(current / maxScroll);
      animId = requestAnimationFrame(update);
    };
    animId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animId);
  }, [damping]);
  return scrollProgress;
}`,
    mockupImg: 'assets/images/project-aura.jpg'
  },
  chronos: {
    title: 'Chronos Task & Workflow OS',
    subtitle: 'Collaborative Engineering Flow & Task Management',
    category: 'Web Applications',
    badge: 'Enterprise Productivity App',
    summary: 'An intuitive workspace application for product teams featuring interactive Kanban boards, sprint tracking, real-time sync, and keyboard-driven productivity controls.',
    metrics: [
      { label: 'State Sync', value: '< 50ms Latency' },
      { label: 'Key Commands', value: '50+ Shortcuts' },
      { label: 'Data Density', value: 'Multi-view Table/Board' },
      { label: 'Offline Mode', value: 'Local-first IndexedDB' }
    ],
    tech: ['React', 'TypeScript', 'Zustand', 'Node.js', 'Tailwind CSS', 'Radix UI'],
    features: [
      'Drag-and-drop state machines with optimistic UI updates',
      'Command-K keyboard palette for instantaneous navigation and issue creation',
      'Multi-user presence indicators with color-coded cursor tracking',
      'Comprehensive workspace analytics and milestone timeline Gantt charts'
    ],
    codeSnippet: `// Optimistic state dispatch with rollback on network failure
const useTaskStore = create<TaskState>((set, get) => ({
  tasks: [],
  moveTask: async (taskId, newColumn) => {
    const backup = get().tasks;
    // Optimistically update client state immediately
    set(state => ({
      tasks: state.tasks.map(t => t.id === taskId ? { ...t, status: newColumn } : t)
    }));
    try {
      await api.updateTaskStatus(taskId, newColumn);
    } catch (err) {
      set({ tasks: backup }); // Rollback
      toast.error('Sync failed. Reverted to previous state.');
    }
  }
}));`,
    mockupImg: 'assets/images/project-chronos.jpg'
  },
  solstice: {
    title: 'Solstice Pay',
    subtitle: 'Decentralized Crypto-Fiat Merchant Checkout Gateway',
    category: 'Web3 & Financial Technology',
    badge: 'EVM Merchant Gateway',
    summary: 'A secure, non-custodial checkout widget empowering modern e-commerce storefronts to accept direct on-chain stablecoin and native token payments with automated currency conversion.',
    metrics: [
      { label: 'Settlement Time', value: 'Instant Finality' },
      { label: 'Transaction Fees', value: '< $0.05 Gas L2' },
      { label: 'Merchant SDK', value: 'Plug & Play (3 lines)' },
      { label: 'Supported Tokens', value: 'USDC, USDT, ETH, SOL' }
    ],
    tech: ['Next.js', 'Solidity', 'Viem', 'Wagmi', 'Tailwind CSS', 'Stripe API Interop'],
    features: [
      'Zero-friction QR code and wallet extension checkout flow',
      'Automated receipt generation with cryptographic signature verification',
      'Custom merchant dashboard for real-time revenue analytics and export',
      'Cross-chain routing via decentralized exchange aggregators'
    ],
    codeSnippet: `// Smart contract event listener for instant checkout settlement
solsticeGateway.on("PaymentSettled", (orderId, payer, token, amount) => {
  console.log(\`Order \${orderId} settled by \${payer}: \${ethers.utils.formatUnits(amount, 6)} USDC\`);
  triggerWebhookNotification({
    event: 'PAYMENT_CONFIRMED',
    orderId,
    timestamp: Date.now()
  });
});`,
    mockupImg: 'assets/images/project-solstice.jpg'
  }
};

function initProjectModals() {
  const modalBackdrop = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('close-project-modal');
  const previewButtons = document.querySelectorAll('.btn-project-preview');
  const codeButtons = document.querySelectorAll('.btn-project-code');
  const filterTabs = document.querySelectorAll('.project-filter-tab');
  const projectCards = document.querySelectorAll('.project-item');

  // Filter tabs logic
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active', 'bg-warm-caramel', 'text-white'));
      filterTabs.forEach(t => t.classList.add('bg-white/10', 'text-cream'));
      
      tab.classList.add('active', 'bg-warm-caramel', 'text-white');
      tab.classList.remove('bg-white/10', 'text-cream');

      const filter = tab.getAttribute('data-filter');
      projectCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
          card.classList.add('reveal-on-scroll', 'revealed');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Open Preview Modal
  previewButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project');
      const data = projectData[projectId];
      if (data) {
        populateProjectModal(data, 'preview');
        openModal(modalBackdrop);
      }
    });
  });

  // Open Code Modal
  codeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project');
      const data = projectData[projectId];
      if (data) {
        populateProjectModal(data, 'code');
        openModal(modalBackdrop);
      }
    });
  });

  // Close Modal handlers
  modalCloseBtn?.addEventListener('click', () => closeModal(modalBackdrop));
  modalBackdrop?.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal(modalBackdrop);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop?.classList.contains('active')) {
      closeModal(modalBackdrop);
    }
  });

  function populateProjectModal(data, activeTab) {
    document.getElementById('modal-project-badge').textContent = data.badge;
    document.getElementById('modal-project-title').textContent = data.title;
    document.getElementById('modal-project-subtitle').textContent = data.subtitle;
    document.getElementById('modal-project-summary').textContent = data.summary;

    // Metrics
    const metricsContainer = document.getElementById('modal-project-metrics');
    metricsContainer.innerHTML = data.metrics.map(m => `
      <div class="p-3 rounded-xl bg-warm-beige/60 border border-warm-beige-border text-center">
        <div class="text-xs uppercase tracking-wider text-muted font-bold">${m.label}</div>
        <div class="text-sm font-bold text-burnt-brown mt-1">${m.value}</div>
      </div>
    `).join('');

    // Tech pills
    const techContainer = document.getElementById('modal-project-tech');
    techContainer.innerHTML = data.tech.map(t => `
      <span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-burnt-brown/10 text-burnt-brown border border-burnt-brown/20">${t}</span>
    `).join('');

    // Features
    const featuresContainer = document.getElementById('modal-project-features');
    featuresContainer.innerHTML = data.features.map(f => `
      <li class="flex items-start gap-2.5 text-sm text-dark-subtle">
        <svg class="w-4 h-4 text-warm-caramel flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
        <span>${f}</span>
      </li>
    `).join('');

    // Code snippet
    const codeEl = document.getElementById('modal-project-code');
    if (codeEl) codeEl.textContent = data.codeSnippet;

    // View switcher (Preview vs Code)
    const tabPreviewBtn = document.getElementById('modal-tab-preview');
    const tabCodeBtn = document.getElementById('modal-tab-code');
    const previewView = document.getElementById('modal-view-preview');
    const codeView = document.getElementById('modal-view-code');

    function showPreview() {
      tabPreviewBtn.classList.add('bg-burnt-brown', 'text-soft-cream');
      tabPreviewBtn.classList.remove('bg-warm-beige', 'text-dark-subtle');
      tabCodeBtn.classList.remove('bg-burnt-brown', 'text-soft-cream');
      tabCodeBtn.classList.add('bg-warm-beige', 'text-dark-subtle');
      previewView.classList.remove('hidden');
      codeView.classList.add('hidden');
    }

    function showCode() {
      tabCodeBtn.classList.add('bg-burnt-brown', 'text-soft-cream');
      tabCodeBtn.classList.remove('bg-warm-beige', 'text-dark-subtle');
      tabPreviewBtn.classList.remove('bg-burnt-brown', 'text-soft-cream');
      tabPreviewBtn.classList.add('bg-warm-beige', 'text-dark-subtle');
      previewView.classList.add('hidden');
      codeView.classList.remove('hidden');
    }

    tabPreviewBtn.onclick = showPreview;
    tabCodeBtn.onclick = showCode;

    if (activeTab === 'code') {
      showCode();
    } else {
      showPreview();
    }
  }
}

/* ==========================================================================
   5. ABOUT ME MODAL
   ========================================================================== */
function initAboutModal() {
  const modalBackdrop = document.getElementById('about-modal');
  const openButtons = document.querySelectorAll('.btn-open-about');
  const closeBtn = document.getElementById('close-about-modal');

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(modalBackdrop);
    });
  });

  closeBtn?.addEventListener('click', () => closeModal(modalBackdrop));
  modalBackdrop?.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal(modalBackdrop);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop?.classList.contains('active')) {
      closeModal(modalBackdrop);
    }
  });
}

function openModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.remove('active');
  document.body.style.overflow = '';
}

/* ==========================================================================
   6. CONTACT FORM & TOAST
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const successModal = document.getElementById('success-modal');
  const closeSuccessBtn = document.getElementById('close-success-modal');
  const copyEmailBtn = document.getElementById('copy-email-btn');

  // Copy email to clipboard
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'hello@jethrosamson.dev';
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email address copied to clipboard!');
      }).catch(() => {
        showToast(`Email: ${email}`);
      });
    });
  }

  // Form submission
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const message = document.getElementById('contact-message').value.trim();
      const projectType = document.getElementById('project-type').value;

      if (!name || !email || !message) {
        showToast('Please fill out all required fields.');
        return;
      }

      // Simulate sending with loading state
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-chocolate-brown" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
        Sending Inquiry...
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        form.reset();

        // Update success modal with sender name
        const senderNameEl = document.getElementById('success-sender-name');
        if (senderNameEl) senderNameEl.textContent = name;
        openModal(successModal);
      }, 900);
    });
  }

  closeSuccessBtn?.addEventListener('click', () => closeModal(successModal));
  successModal?.addEventListener('click', (e) => {
    if (e.target === successModal) closeModal(successModal);
  });
}

function showToast(message) {
  const toast = document.getElementById('global-toast');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/* ==========================================================================
   7. DYNAMIC RADIAL ARC TICKS (Architectural Gauge Recreation)
   ========================================================================== */
function drawRadialTicks() {
  const svg = document.querySelector('.radial-arc-svg');
  if (!svg) return;

  const cx = 525;
  const cy = 525;
  const radius = 460;
  const startAngle = 200; // degrees
  const endAngle = 340;   // degrees
  const totalTicks = 85;

  const tickGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  tickGroup.setAttribute('id', 'radial-ticks-group');

  for (let i = 0; i <= totalTicks; i++) {
    const fraction = i / totalTicks;
    const angleDeg = startAngle + fraction * (endAngle - startAngle);
    const angleRad = (angleDeg * Math.PI) / 180;

    const isMajor = (i % 5 === 0);
    const tickLength = isMajor ? 14 : 7;
    const strokeWidth = isMajor ? 1.5 : 1;
    const strokeOpacity = isMajor ? 0.45 : 0.25;

    const x1 = cx + (radius - tickLength) * Math.cos(angleRad);
    const y1 = cy + (radius - tickLength) * Math.sin(angleRad);
    const x2 = cx + radius * Math.cos(angleRad);
    const y2 = cy + radius * Math.sin(angleRad);

    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    line.setAttribute('stroke', '#C47A3E');
    line.setAttribute('stroke-width', strokeWidth);
    line.setAttribute('stroke-opacity', strokeOpacity);

    tickGroup.appendChild(line);
  }

  svg.appendChild(tickGroup);
}

