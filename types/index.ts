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
  consequence?: {
    type: 'temperature' | 'pressure' | 'containment';
    value: number | boolean;
  };
}

export interface Email {
  id: string;
  from: string;
  subject: string;
  content: string;
  timestamp: string;
  urgent?: boolean;
  choices: Choice[];
  systemEffect?: Partial<SystemStatus>;
} 