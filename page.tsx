import EmergencyCallButton from '@/components/EmergencyCallButton';

export default function Page() {
  // ... your existing code ...

  return (
    <main className="relative min-h-screen">
      {/* Your existing email interface */}
      <div className="email-container">
        {/* ... */}
      </div>

      {/* Emergency call button fixed to bottom-right */}
      <EmergencyCallButton />
    </main>
  );
} 