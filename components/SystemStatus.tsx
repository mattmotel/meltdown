import type { SystemStatus as SystemStatusType } from '@/types';

interface SystemStatusProps {
  status: SystemStatusType;
}

export default function SystemStatus({ status }: SystemStatusProps) {
  const isEmergency = status.temperature >= 80;

  return (
    <div className={`mb-4 p-2 border-b ${isEmergency ? 'border-red-600' : 'border-green-500'}`}>
      <h2 className={`text-xl font-bold mb-2 flex items-center ${isEmergency ? 'text-red-500' : ''}`}>
        {(status.level === 'danger' || isEmergency) && (
          <>
            <span className="mr-2 animate-pulse">🚨</span>
            <span className="text-red-500 animate-pulse">EMERGENCY</span>
            <span className="ml-2 animate-pulse">🚨</span>
          </>
        )}
        SYSTEM STATUS
      </h2>
      <div className="grid grid-cols-3 gap-4">
        <div className={isEmergency ? 'text-red-500 animate-pulse' : ''}>
          <span className={isEmergency ? 'text-red-500' : 'text-green-500'}>TEMP:</span> {status.temperature}°C
          {isEmergency && ' ⚠️'}
        </div>
        <div>
          <span className={isEmergency ? 'text-red-500' : 'text-green-500'}>PRESSURE:</span> {status.pressure}kPa
        </div>
        <div>
          <span className={isEmergency ? 'text-red-500' : 'text-green-500'}>CONTAINMENT:</span>{' '}
          {status.containment ? 'SECURE' : <span className="text-red-500 animate-pulse">BREACH</span>}
        </div>
      </div>
    </div>
  );
} 