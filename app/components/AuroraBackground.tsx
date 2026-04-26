"use client";

export default function AuroraBackground() {
  return (
    <div 
      className="fixed inset-0 -z-20 overflow-hidden bg-black pointer-events-none"
      style={{ isolation: 'isolate' }}
    >
      <div className="aurora aurora-1"></div>
      <div className="aurora aurora-2"></div>
      <div className="aurora aurora-3"></div>
      
      {/* Texture Layer */}
      <div className="grid-bg"></div>

      {/* Sweeping Energy Curves */}
      <div className="energy-line"></div>
      <div className="energy-line-2"></div>
      <div className="energy-line-3"></div>
    </div>
  );
}