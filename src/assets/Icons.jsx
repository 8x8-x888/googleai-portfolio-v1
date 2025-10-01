/* src/assets/Icons.jsx */
import React from 'react';
import { 
  Slack, HardDrive, Cpu, DollarSign, PhoneForwarded, Menu, X, 
  Copyright, Linkedin, Clock, Send, CheckCircle, AlertTriangle, User, Hash,
  ChevronLeft, ChevronRight
} from 'lucide-react';

/* --- Custom Brand & Thematic SVG Icons --- */

export const ZapierBrandIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
    <path fill="#FF4A00" d="M101.613 0H0v51.13h75.432L0 204.872V256h101.613v-51.13H26.181L101.613 51.13V0zM256 0h-51.13v75.432l-32.258-32.258L154.387 0H128v128h26.387l-32.258-32.258L154.387 63.484V256h101.613v-51.13H180.568L256 51.13V0z"></path>
  </svg>
);
/* ... (rest of the icon components are the same) ... */
export const MakeBrandIcon = ({ className }) => (/* ...svg code... */);
export const N8nBrandIcon = ({ className }) => (/* ...svg code... */);
export const ApiIntegrationIcon = ({ className }) => (/* ...svg code... */);

/* --- Standard Lucide Icons (Exported for consistency) --- */
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