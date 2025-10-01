import React from 'react';
import { 
  Slack, HardDrive, Cpu, DollarSign, PhoneForwarded, Menu, X, 
  Copyright, Linkedin, Clock, Send, CheckCircle, AlertTriangle, User, Hash,
  ChevronLeft, ChevronRight
} from 'lucide-react';

export const ZapierBrandIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
    <path fill="#FF4A00" d="M101.613 0H0v51.13h75.432L0 204.872V256h101.613v-51.13H26.181L101.613 51.13V0zM256 0h-51.13v75.432l-32.258-32.258L154.387 0H128v128h26.387l-32.258-32.258L154.387 63.484V256h101.613v-51.13H180.568L256 51.13V0z"></path>
  </svg>
);

export const MakeBrandIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="#6E44FF" d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0z"></path>
    <path fill="#FFF" d="M12 4.2c-4.306 0-7.8 3.494-7.8 7.8s3.494 7.8 7.8 7.8 7.8-3.494 7.8-7.8-3.494-7.8-7.8-7.8zm0 13.595c-3.199 0-5.795-2.596-5.795-5.795S8.801 6.205 12 6.205s5.795 2.596 5.795 5.795-2.596 5.795-5.795 5.795z"></path>
    <path fill="#FFF" d="M12.001 8.208a3.792 3.792 0 100 7.584 3.792 3.792 0 000-7.584z"></path>
  </svg>
);

export const N8nBrandIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="#1A8272" d="M18.15 6.843l-5.402 9.356a.41.41 0 01-.71 0L6.636 7.425l2.062-.002 3.65 6.322a.41.41 0 00.709 0l3.65-6.322zM12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0z"></path>
  </svg>
);

export const ApiIntegrationIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7l-4 4 4 4m8-8l4 4-4 4m-5-9l-4 14" />
  </svg>
);

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