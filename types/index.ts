export type AlertLevel = 'normal' | 'warning' | 'danger' | 'critical';

export interface SystemStatus {
  level: AlertLevel;
  temperature: number;
  pressure: number;
  containment: boolean;
}

export interface Choice {
  id: string;
  text: string;
  nextEmailId: string;
  action?: 'SHOW_CALL_WINDOW';
  consequence?: {
    type: string;
    value: number | boolean;
  };
}

export interface Email {
  id: string;
  from: string;
  to: string;
  subject: string;
  timestamp: string;
  content: string;
  urgent?: boolean;
  choices: Choice[];
} 