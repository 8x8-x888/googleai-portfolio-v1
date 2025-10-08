import {
  ZapierBrandIcon,
  MakeBrandIcon,
  N8nBrandIcon,
  ApiIntegrationIcon,
  SlackIcon,
  DriveIcon,
  OpenAIIcon,
  XeroIcon,
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
    title: 'Unified Order & Lead Automation for an E-commerce Brand',
    image: '/assets/Zapier-workflow-1.webp',
    alt: 'A flowchart showing a Zapier workflow connecting Shopify, Google Drive, Asana, and a CRM to automate order processing.',
    problem:
      'The sales team was manually creating project folders and CRM entries for each new Shopify order, wasting 10+ hours per week and causing response delays.',
    solution:
      'I built a robust Zapier workflow that triggers on every new Shopify order. The automation instantly creates a standardized Google Drive folder structure, generates a trackable task in Asana, and logs the new customer in their CRM with all relevant order data.',
    impactMetrics:
      'Cut order processing time by 95%, eliminated manual data entry errors, and reduced average lead response time from hours to minutes.',
    tools: [
      { name: 'Google Drive', icon: DriveIcon },
      { name: 'Slack', icon: SlackIcon },
      { name: 'OpenAI (AI Triage)', icon: OpenAIIcon },
    ],
    primaryTool: { name: 'Built with Zapier', icon: ZapierBrandIcon },
    images: [
      '/assets/Zapier-workflow-1.webp',
      '/assets/Zapier-workflow-2.webp',
      '/assets/Zapier-workflow-3.webp',
    ],
    quote: 'This automation completely streamlined our order tracking. The team can now respond to every opportunity almost instantly.',
  },
  {
    id: 2,
    title: 'Automated Financial Reconciliation for a SaaS Company',
    image: '/assets/Make-workflow-1.webp',
    alt: 'A Make.com scenario diagram with modules for reading emails, parsing data with AI, and creating entries in Xero accounting software.',
    problem:
      'The finance team was spending over 15 hours weekly manually parsing invoices from an overflowing inbox, leading to slow reconciliation and data entry errors in Xero.',
    solution:
      'I designed a multi-step Make.com scenario that monitors the finance inbox, uses an OpenAI model to accurately parse invoice details, flags suspicious emails, and creates perfectly formatted draft bills in Xero. A summary is posted to a Slack channel for final approval.',
    impactMetrics:
      'Saved an estimated 18 hours per week, reduced data entry errors by 98%, and accelerated invoice processing from 3 days to under 5 minutes.',
    tools: [
      { name: 'Xero', icon: XeroIcon },
      { name: 'Slack', icon: SlackIcon },
      { name: 'OpenAI', icon: OpenAIIcon },
    ],
    primaryTool: { name: 'Built with Make', icon: MakeBrandIcon },
    images: ['/assets/Make-workflow-1.webp', '/assets/Make-workflow-2.webp'],
    quote: 'It completely changed our financial workflow. What used to be a multi-day chore is now almost instantaneous.',
  },
  {
    id: 3,
    title: 'Self-Hosted Sales Reporting Engine for a Tech Startup',
    image: '/assets/n8n-workflow-1.webp',
    alt: 'An n8n workflow canvas showing nodes that pull data from Airtable, aggregate it, and then send formatted reports to Discord.',
    problem:
      'A sales manager needed weekly performance reports but had to manually pull data from three different systems (Airtable, CRM, Stripe), a process that was time-consuming and prone to errors.',
    solution:
      'Using the self-hosted n8n platform for data security, I built a workflow that runs every Friday. It queries the production Airtable base and CRM API, aggregates the regional sales data, formats it into a clean report, and delivers it directly to the sales team’s Discord channel.',
    impactMetrics:
      'Automated 100% of the reporting process, saving the manager 4 hours per month and providing the team with consistent, error-free data.',
    tools: [
      { name: 'Airtable', icon: DriveIcon },
      { name: 'Discord', icon: SlackIcon },
      { name: 'OpenAI', icon: OpenAIIcon },
    ],
    primaryTool: { name: 'Built with n8n', icon: N8nBrandIcon },
    images: ['/assets/n8n-workflow-1.webp', '/assets/n8n-workflow-2.webp'],
    quote: 'This reporting engine is a huge time-saver. We get the data we need, exactly when we need it, without any manual work.',
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
