import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { FloatingElements } from './components/FloatingElements';
import { ParticleEffect } from './components/ParticleEffect';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Refresh ScrollTrigger on mount
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Floating Elements Background */}
      <FloatingElements />
      
      {/* Particle Effects */}
      <ParticleEffect />

      {/* Router with Layout */}
      <RouterProvider router={router} />
    </div>
  );
}