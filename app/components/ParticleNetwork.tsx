"use client";

import { useEffect, useRef } from 'react';

export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particlesArray: any[] = [];
    let animationFrameId: number;

    const initCanvas = () => {
      // Ensure canvas spans the full screen including scrollable areas for Home hero
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particlesArray = [];
      // Dynamic density based on screen size
      let numberOfParticles = Math.floor((canvas.width * canvas.height) / 12000); 
      for (let i = 0; i < numberOfParticles; i++) {
        let size = Math.random() * 2 + 1;
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let directionX = (Math.random() - 0.5) * 1.5;
        let directionY = (Math.random() - 0.5) * 1.5;
        // Randomly assign either cyan or purple color to nodes
        let isCyan = Math.random() > 0.5;
        particlesArray.push({ x, y, directionX, directionY, size, isCyan });
      }
    };

    const updateParticles = () => {
      for (let i = 0; i < particlesArray.length; i++) {
        let p = particlesArray[i];
        
        if (p.x > canvas.width || p.x < 0) p.directionX = -p.directionX;
        if (p.y > canvas.height || p.y < 0) p.directionY = -p.directionY;
        
        p.x += p.directionX;
        p.y += p.directionY;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.isCyan ? "rgba(0, 240, 255, 0.8)" : "rgba(168, 85, 247, 0.8)";
        ctx.fill();
      }
    };

    const connectParticles = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) {
          let dx = particlesArray[a].x - particlesArray[b].x;
          let dy = particlesArray[a].y - particlesArray[b].y;
          let distance = dx * dx + dy * dy;
          
          if (distance < 20000) { // Connect nodes if within roughly 140px
            let opacity = 1 - distance / 20000;
            // Mix cyan and purple for the neurological connection lines
            ctx.strokeStyle = `rgba(100, 200, 255, ${opacity * 0.4})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      updateParticles();
      connectParticles();
    };

    window.addEventListener('resize', initCanvas);
    initCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', initCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none z-0 mix-blend-screen" 
      style={{ opacity: 0.8 }}
    />
  );
}
