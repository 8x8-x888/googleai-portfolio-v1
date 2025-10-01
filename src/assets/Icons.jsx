import React from 'react';
import { 
  Slack, HardDrive, Cpu, DollarSign, PhoneForwarded, Menu, X, 
  Copyright, Linkedin, Clock, Send, CheckCircle, AlertTriangle, User, Hash,
  ChevronLeft, ChevronRight
} from 'lucide-react';

/* --- NEW / UPDATED Brand & Thematic Icons --- */

// UPDATED: Using the new, simpler Zapier SVG from svgrepo.com
export const ZapierBrandIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.16 0H0V5.11H7.54L0 20.49V25.6H10.16V20.49H2.62L10.16 5.11V0ZM25.6 0H20.49V7.54L17.26 4.31L15.44 0H12.8V12.8H15.44L12.19 9.55L15.44 6.35V25.6H25.6V20.49H18.06L25.6 5.11V0Z" fill="#FF4A00"/>
  </svg>
);

// NEW: Component renders an <img> tag for the local make.webp file
export const MakeBrandIcon = ({ className }) => (
  <img src="/assets/make.webp" alt="Make.com logo" className={className} />
);

// NEW: Component renders an <img> tag for the local n8n.webp file
export const N8nBrandIcon = ({ className }) => (
  <img src="/assets/n8n.webp" alt="n8n logo" className={className} />
);

// UPDATED: Using the new "continuous integration" SVG from svgrepo.com
export const ApiIntegrationIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <g id="Interface / activity_horizontal">
      <path id="Vector" d="M3 12H5M5 12H9M5 12C5 12 5.05034 11.2343 5.86015 10.4244C6.67839 9.60619 7.79633 8.33031 9.5 8M19 12H21M19 12H15M19 12C19 12 18.9497 11.2343 18.1398 10.4244C17.3216 9.60619 16.2037 8.33031 14.5 8M9.5 8C10.702 7.10334 11.2333 7 12 7C12.7667 7 13.298 7.10334 14.5 8M9.5 8V16M14.5 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
  </svg>
);


/* --- Standard Lucide Icons (Unchanged) --- */
export const SlackIcon = Slack;
export const DriveIcon = HardDrive;
export const OpenAIIcon = Cpu;
export const XeroIcon = DollarSign;
export const PhoneCallIcon = PhoneForwarded;
export const MenuIcon = Menu;
export const CloseIcon = X;
export const CopyrightIcon = Copyright;
export const LinkedinIcon = Linkedin;
export const ClockIcon = Clock;
export const SendIcon = Send;
export const CheckIcon = CheckCircle;
export const ErrorIcon = AlertTriangle;
export const UserIcon = User;
export const OnlineJobsIcon = Hash;
export const UpworkIcon = Clock;
export const ChevronLeftIcon = ChevronLeft;
export const ChevronRightIcon = ChevronRight;