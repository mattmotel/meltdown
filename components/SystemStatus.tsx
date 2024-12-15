import type { SystemStatus as SystemStatusType } from '@/types';

interface SystemStatusProps {
  status: SystemStatusType;
}

export default function SystemStatus({ status }: SystemStatusProps) {
  return (
    <div className="mb-4 p-2 border-b border-green-500">
      <h2 className="text-xl font-bold mb-2 flex items-center">
        {status.level === 'danger' && <span className="mr-2 animate-pulse">🚨</span>}
        SYSTEM STATUS
        {status.level === 'danger' && <span className="ml-2 animate-pulse">🚨</span>}
      </h2>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <span className="text-green-500">TEMP:</span> {status.temperature}°C
        </div>
        <div>
          <span className="text-green-500">PRESSURE:</span> {status.pressure}kPa
        </div>
        <div>
          <span className="text-green-500">CONTAINMENT:</span>{' '}
          {status.containment ? 'SECURE' : 'BREACH'}
        </div>
      </div>
    </div>
  );
} 