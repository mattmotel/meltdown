import { SystemStatus as StatusType } from '@/types';

interface StatusProps {
  status: StatusType;
}

export default function SystemStatus({ status }: StatusProps) {
  const getStatusColor = (type: string, value: number | boolean) => {
    if (type === 'temperature') {
      if (value > 50) return 'text-red-500 animate-pulse';
      if (value > 35) return 'text-yellow-500';
      return 'text-green-500';
    }
    if (type === 'pressure') {
      if (value > 150) return 'text-red-500 animate-pulse';
      if (value > 120) return 'text-yellow-500';
      return 'text-green-500';
    }
    return value ? 'text-green-500' : 'text-red-500 animate-pulse';
  };

  return (
    <div className={`
      border border-green-500 p-4 mb-4
      ${status.level === 'critical' ? 'animate-pulse border-red-500' : ''}
      backdrop-blur-sm bg-black/50
    `}>
      <h2 className="text-lg mb-2 font-mono">SYSTEM STATUS</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className={getStatusColor('temperature', status.temperature)}>
          Temperature: {status.temperature}°C
          {status.temperature > 40 && ' ⚠️'}
        </div>
        <div className={getStatusColor('pressure', status.pressure)}>
          Pressure: {status.pressure}psi
          {status.pressure > 140 && ' ⚠️'}
        </div>
        <div>Containment: {status.containment ? 'SECURE' : 'BREACH'}</div>
        <div>Alert Level: {status.level.toUpperCase()}</div>
      </div>
    </div>
  );
} 