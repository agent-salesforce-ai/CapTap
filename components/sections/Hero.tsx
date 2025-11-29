'use client';

import GradientButton from '../GradientButton';
import AnimatedCounter from './Stats';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-secondary-400 animate-pulse" />
          <span className="text-white/90 text-sm font-medium">Fast Funding Solutions</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
          Fuel Your Business
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-400 via-accent-500 to-amber-400">
            Growth Today
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Get up to $500,000 in working capital within 24 hours. 
          Simple application, fast approval, flexible terms tailored to your business.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <GradientButton href="/apply" size="lg" variant="gold">
            Get Funded Now
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </GradientButton>
          <GradientButton href="/how-it-works" size="lg" variant="purple">
            See How It Works
          </GradientButton>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <StatCard value={500} suffix="M+" label="Funded" prefix="$" />
          <StatCard value={10000} suffix="+" label="Businesses Served" />
          <StatCard value={24} suffix="hrs" label="Fast Approval" />
          <StatCard value={98} suffix="%" label="Approval Rate" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, suffix = '', prefix = '', label }: { value: number; suffix?: string; prefix?: string; label: string }) {
  return (
    <div className="glass-card p-4 text-center">
      <div className="text-2xl md:text-3xl font-bold text-white mb-1">
        {prefix}<AnimatedCounter end={value} duration={2000} />{suffix}
      </div>
      <div className="text-white/60 text-sm">{label}</div>
    </div>
  );
}
