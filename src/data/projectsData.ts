import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'whiz-ai',
    title: 'Whiz AI',
    subtitle: 'Personal AI Voice Assistant & Desktop Companion',
    category: 'app',
    categoryLabel: 'Voice AI Assistant',
    badge: 'Personal AI Assistant',
    summary: 'An intelligent real-time personal voice assistant and desktop companion featuring low-latency speech synthesis, live audio waveform telemetry, and seamless voice session automation.',
    url: 'https://github.com/Jethrowhiz',
    metrics: [
      { label: 'Latency', value: '< 180ms Audio Stream' },
      { label: 'Session Sync', value: 'Real-Time WebSockets' },
      { label: 'Engine', value: 'Python & FastAPI' },
      { label: 'UI Companion', value: 'Modern React & Electron' }
    ],
    tech: ['Python', 'FastAPI', 'React', 'Node.js'],
    features: [
      'Real-time bidirectional voice conversation with streaming audio processing',
      'Minimal floating desktop widget with live voice visualizer and session telemetry',
      'One-tap session activation and intuitive hands-free mic toggle controls',
      'Custom LLM tool calling for system navigation, personal queries, and tasks'
    ],
    codeSnippet: `// Whiz AI real-time voice session orchestrator
class WhizVoiceSession:
    def __init__(self, sample_rate: int = 16000):
        self.stream = AudioStream(rate=sample_rate)
        self.agent = WhizAIAgent(model="gemini-2.0-flash-realtime")

    async def start_voice_loop(self):
        async with self.stream.listen() as mic:
            async for chunk in mic:
                reply = await self.agent.process_audio(chunk)
                await self.stream.play(reply)`,
    mockupImg: '/assets/images/project-whiz-ai.png'
  },
  {
    id: 'nutrilens',
    title: 'NutriLens AI',
    subtitle: "Know what's really in your food — Scan. Analyze. Understand. Eat better.",
    category: 'app',
    categoryLabel: 'Computer Vision & Health AI',
    badge: 'AI Nutrition Scanner',
    summary: 'An AI-powered food scanning and nutritional intelligence application that decomposes ingredient labels, flags hidden additives and allergens, and delivers science-backed health insights instantly.',
    url: 'https://github.com/Jethrowhiz',
    metrics: [
      { label: 'Recognition', value: '98.5% Accuracy' },
      { label: 'Scan Speed', value: '< 400ms OCR & Analysis' },
      { label: 'Database', value: '500K+ Food Items' },
      { label: 'Architecture', value: 'Multimodal Vision API' }
    ],
    tech: ['Python', 'FastAPI', 'React', 'TypeScript'],
    features: [
      'Instant camera OCR and multimodal label parsing with ingredient decomposition',
      'Intelligent dietary hazard detection flagging allergens, trans fats, and hidden sugars',
      'Clean macro breakdowns with science-backed health scores and nutritional insights',
      'Responsive, high-fidelity user interface crafted with React and Tailwind CSS'
    ],
    codeSnippet: `// Multimodal vision scanner pipeline for nutrition label analysis
@app.post("/api/v1/scan")
async def analyze_food_label(image: UploadFile = File(...)):
    img_bytes = await image.read()
    ocr_data = await vision_engine.extract_nutrition_facts(img_bytes)
    insights = await nutrition_analyzer.evaluate_ingredients(
        ingredients=ocr_data.ingredients,
        user_allergies=current_user.allergens
    )
    return {
        "product": ocr_data.product_name,
        "score": insights.health_score,
        "macros": ocr_data.macros,
        "alerts": insights.allergen_warnings
    }`,
    mockupImg: '/assets/images/project-nutrilens.png'
  },
  {
    id: 'taskmint',
    title: 'Taskmint',
    subtitle: 'The decentralized bounty platform where clients post tasks and skilled workers earn STX tokens instantly upon completion',
    category: 'web3',
    categoryLabel: 'Web3 Bounty Protocol',
    badge: 'Decentralized Bounty Protocol',
    summary: 'A decentralized task bounty platform built on the Stacks blockchain where clients create escrow-backed bounties and skilled professionals complete tasks to earn STX tokens instantly upon approval.',
    url: 'https://github.com/Jethrowhiz',
    metrics: [
      { label: 'Settlement', value: 'Instant STX Escrow' },
      { label: 'Network', value: 'Stacks Blockchain' },
      { label: 'Smart Contract', value: 'Clarity Escrow Protocol' },
      { label: 'Wallet Sync', value: 'Hiro & Xverse' }
    ],
    tech: ['React', 'TypeScript', 'Stacks', 'Tailwind CSS'],
    features: [
      'Escrow-locked STX bounty creation with automated release upon client verification',
      'Interactive worker submission portal with proof-of-work link and file attachment',
      'One-click non-custodial wallet connection supporting Hiro Wallet, Xverse, and Leather',
      'Clarity smart contract architecture ensuring trustless payouts without platform middlemen'
    ],
    codeSnippet: `;; Taskmint Bounty Escrow Protocol (Clarity Smart Contract)
(define-constant contract-owner tx-sender)
(define-constant err-not-authorized (err u100))
(define-constant err-already-completed (err u101))

(define-map Bounties
  { bounty-id: uint }
  {
    creator: principal,
    reward-stx: uint,
    worker: (optional principal),
    is-completed: bool
  }
)

;; Create and fund a task bounty into smart contract escrow
(define-public (create-bounty (bounty-id uint) (reward uint))
  (begin
    (try! (stx-transfer? reward tx-sender (as-contract tx-sender)))
    (map-set Bounties { bounty-id: bounty-id }
      { creator: tx-sender, reward-stx: reward, worker: none, is-completed: false }
    )
    (ok true)
  )
)

;; Approve completed work and release STX tokens directly to worker
(define-public (release-bounty (bounty-id uint) (worker principal))
  (let ((bounty (unwrap! (map-get? Bounties { bounty-id: bounty-id }) (err u404))))
    (asserts! (is-eq tx-sender (get creator bounty)) err-not-authorized)
    (asserts! (not (get is-completed bounty)) err-already-completed)
    (try! (as-contract (stx-transfer? (get reward-stx bounty) tx-sender worker)))
    (map-set Bounties { bounty-id: bounty-id }
      (merge bounty { worker: (some worker), is-completed: true })
    )
    (ok true)
  )
)`,
    mockupImg: '/assets/images/project-taskmint.png'
  },
  {
    id: 'botpaa',
    title: 'Botpaa',
    subtitle: 'Multi-Tenant AI Agent for E-Commerce',
    category: 'app',
    categoryLabel: 'AI Automation',
    badge: 'AI E-Commerce Agent',
    summary: 'A multi-tenant conversational AI commerce agent streamlining customer support, catalogue search, and order workflows for scalable digital retail stores.',
    url: 'https://github.com/Jethrowhiz',
    metrics: [
      { label: 'Throughput', value: '< 200ms Latency' },
      { label: 'Architecture', value: 'Multi-Tenant API' },
      { label: 'Conversion Lift', value: '+34% Assisted Checkout' },
      { label: 'Reliability', value: '99.9% Uptime' }
    ],
    tech: ['Python', 'FastAPI', 'Next.js'],
    features: [
      'Multi-tenant database tenancy with strict tenant isolation',
      'Asynchronous agentic event streams using FastAPI and WebSockets',
      'Modern responsive storefront overlay built with Next.js and Tailwind CSS',
      'Automated semantic vector search for e-commerce catalogues'
    ],
    codeSnippet: `// Asynchronous multi-tenant agent runner
@app.post("/api/v1/{tenant_id}/chat")
async def chat_stream(tenant_id: str, prompt: UserPrompt):
    tenant = await verify_tenant(tenant_id)
    agent = AgentExecutor(tenant=tenant)
    return StreamingResponse(agent.stream_reply(prompt.query), media_type="text/event-stream")`,
    mockupImg: '/assets/images/project-botpaa.png'
  },
  {
    id: 'helpme-ai',
    title: 'Helpme Ai',
    subtitle: 'Automate your finances with AI , send money, buy data, pay bills, and more.',
    category: 'app',
    categoryLabel: 'FinTech AI',
    badge: 'FinTech Automation',
    summary: 'An intelligent financial automation platform allowing users to orchestrate everyday payments, bill settlements, and account transfers through conversational interfaces.',
    url: 'https://github.com/Jethrowhiz',
    metrics: [
      { label: 'Transactions', value: '100K+ Monthly' },
      { label: 'Settlement', value: 'Instant API' },
      { label: 'Security', value: 'PCI-DSS Compliant' },
      { label: 'Tech Stack', value: 'Python & Node.js' }
    ],
    tech: ['Python', 'Node.js', 'FastAPI'],
    features: [
      'Direct bill payment and mobile airtime orchestration APIs',
      'Secure tokenized banking credentials with end-to-end encryption',
      'Event-driven transaction processing via asynchronous microservices',
      'Natural language command parsing for automated financial actions'
    ],
    codeSnippet: `// Financial transaction processor with idempotency verification
async function executePaymentIntent(intent: PaymentIntent): Promise<TransactionReceipt> {
  const verified = await verifyIdempotencyKey(intent.key);
  if (!verified) throw new DuplicateIntentError();
  const receipt = await paymentGateway.charge(intent);
  return receipt;
}`,
    mockupImg: '/assets/images/project-helpme.png'
  },
  {
    id: 'ojembaa',
    title: 'ojembaa',
    subtitle: 'an consulting company website, where you can book sessions',
    category: 'frontend',
    categoryLabel: 'Consulting Web',
    badge: 'Consulting & Booking Platform',
    summary: 'A consulting company platform featuring streamlined session booking, advisor scheduling, client onboarding portals, and automated calendars.',
    url: 'https://github.com/Jethrowhiz',
    metrics: [
      { label: 'Booking Speed', value: '< 3 Clicks' },
      { label: 'Calendar Sync', value: 'Real-Time Google/Cal' },
      { label: 'Performance', value: '99/100 Lighthouse' },
      { label: 'Framework', value: 'Django & Modern JS' }
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Django'],
    features: [
      'Dynamic multi-advisor appointment scheduling engine',
      'Automated confirmation notifications with calendar invite attachments',
      'Responsive, accessible client interface crafted with modern CSS & vanilla JS',
      'Custom Django backend with fine-grained admin management capabilities'
    ],
    codeSnippet: `// Django booking confirmation view
def confirm_booking(request, booking_id):
    booking = get_object_or_404(ConsultationBooking, id=booking_id, status='pending')
    booking.status = 'confirmed'
    booking.save()
    send_calendar_invite(booking)
    return JsonResponse({'status': 'success', 'booking_id': str(booking.id)})`,
    mockupImg: '/assets/images/project-ojembaa.png'
  }
];
