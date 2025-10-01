import React from 'react';
import { 
  Slack, HardDrive, Cpu, DollarSign, PhoneForwarded, Menu, X, 
  Copyright, Linkedin, Clock, Send, CheckCircle, AlertTriangle, User, Hash,
  ChevronLeft, ChevronRight
} from 'lucide-react';

/* --- Brand & Thematic Icons (Using Local Image Assets) --- */

// UPDATED: Now renders an <img> tag for the local zapier.webp file
export const ZapierBrandIcon = ({ className }) => (
  <img src="/assets/zapier.webp" alt="Zapier logo" className={className} />
);

// Renders an <img> tag for the local make.webp file
export const MakeBrandIcon = ({ className }) => (
  <img src="/assets/make.webp" alt="Make.com logo" className={className} />
);

// Renders an <img> tag for the local n8n.webp file
export const N8nBrandIcon = ({ className }) => (
  <img src="/assets/n8n.webp" alt="n8n logo" className={className} />
);

// UPDATED: Now renders an <img> tag for the local integration.webp file
export const ApiIntegrationIcon = ({ className }) => (
  <img src="/assets/integration.webp" alt="API Integration icon" className={className} />
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