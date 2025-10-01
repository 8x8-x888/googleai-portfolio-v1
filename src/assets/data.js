import { 
  ZapierBrandIcon, MakeBrandIcon, N8nBrandIcon, ApiIntegrationIcon,
  SlackIcon, DriveIcon, OpenAIIcon, XeroIcon 
} from './Icons'; 

export const NAV_LINKS = [
  { name: 'About', href: '#about-me' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio-gallery' },
  { name: 'Contact', href: '#contact-form' },
];

export const SERVICE_CARDS = [
  {
    title: 'Zapier Workflow Automation',
    description: 'Connect apps, orchestrate multi-step workflows, and enforce data quality.',
    details: ['Error handling & retries', 'Webhooks & custom code', 'Ops dashboards'],
    icon: ZapierBrandIcon, 
  },
  {
    title: 'Make Scenarios',
    description: 'Build complex automations with branching logic and bulk operations at scale.',
    details: ['Routers & aggregators', 'Rate limits & queues', 'Scenario documentation'],
    icon: MakeBrandIcon, 
  },
  {
    title: 'CRM & API Integrations',
    description: 'Two-way syncs and lead lifecycle automation for HubSpot, Salesforce, and GHL.',
    details: ['Field mapping & deduplication', 'Custom API endpoints', 'Attribution & analytics'],
    icon: ApiIntegrationIcon, 
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'Unified Order & Lead Automation',
    image: '/assets/Zapier-workflow-1.webp', 
    alt: 'Zapier workflow showing Asana and CRM integration',
    quote: 'Streamlines order tracking and CRM updates, cutting manual work and ensuring the team responds faster to every opportunity.',
    tools: [
      { name: 'Google Drive', icon: DriveIcon },
      { name: 'Slack', icon: SlackIcon },
      { name: 'OpenAI (AI Triage)', icon: OpenAIIcon },
    ],
    primaryTool: { name: 'Built with Zapier', icon: ZapierBrandIcon },
	  images: [ '/assets/Zapier-workflow-1.webp', '/assets/Zapier-workflow-2.webp', '/assets/Zapier-workflow-3.webp' ],
  },
  {
    id: 2,
    title: 'Smart Email Triage + Xero Export',
    image: '/assets/Make-workflow-2.webp', 
    alt: 'Make.com scenario showing email and finance app connection',
    quote: 'Cuts through inbox clutter, blocks spam, and extracts financial info, saving hours of manual data entry every week.',
    tools: [
      { name: 'Xero', icon: XeroIcon },
      { name: 'Slack', icon: SlackIcon },
      { name: 'OpenAI', icon: OpenAIIcon },
    ],
    primaryTool: { name: 'Built with Make', icon: MakeBrandIcon },
	  images: [ '/assets/Make-workflow-1.webp', '/assets/Make-workflow-2.webp' ],
  },
  {
    id: 3,
    title: 'n8n Regional Sales Reporting',
    image: '/assets/n8n-workflow-1.webp', 
    alt: 'n8n workflow generating regional sales reports',
    quote: 'Automates regional sales reporting from multiple data sources, sending formatted reports via email and Discord.',
    tools: [
      { name: 'Airtable', icon: DriveIcon },
      { name: 'Discord', icon: SlackIcon },
      { name: 'OpenAI', icon: OpenAIIcon },
    ],
    primaryTool: { name: 'Built with n8n', icon: N8nBrandIcon },
    images: [ '/assets/n8n-workflow-1.webp', '/assets/n8n-workflow-2.webp' ],
  },
];

export const HERO_TAGS = [
    { name: 'Zapier', href: '#services' },
    { name: 'Make', href: '#services' },
    { name: 'n8n', href: '#services' },
    { name: 'HubSpot', href: '#services' },
    { name: 'GHL', href: '#services' },
    { name: 'Salesforce', href: '#services' },
];