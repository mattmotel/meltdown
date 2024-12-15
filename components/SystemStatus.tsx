import type { SystemStatus as SystemStatusType } from '@/types';

interface SystemStatusProps {
  status: SystemStatusType;
}

export default function SystemStatus({ status }: SystemStatusProps) {
  const isEmergency = status.temperature >= 80;

  return (
    <div className={`mb-4 p-2 border-b ${isEmergency ? 'border-red-600' : 'border-green-500'}`}>
      <h2 className="text-base md:text-xl font-bold mb-2 flex items-center">
        {(status.level === 'danger' || isEmergency) && (
          <>
            <span className="mr-1 md:mr-2 animate-pulse">🚨</span>
            <span className="text-red-500 animate-pulse text-sm md:text-base">EMERGENCY</span>
            <span className="ml-1 md:ml-2 animate-pulse">🚨</span>
          </>
        )}
        <span className="text-sm md:text-base">SYSTEM STATUS</span>
      </h2>
      <div className="grid grid-cols-3 gap-2 md:gap-4 text-xs md:text-base">
        <div>
          <span className={isEmergency ? 'text-red-500' : 'text-green-500'}>TEMP:</span> {status.temperature}°C
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