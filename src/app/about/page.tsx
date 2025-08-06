'use client';

import { useEffect, useRef } from 'react';

export default function About() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Create intersection observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in, .section-fade');
    animatedElements.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-8 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-image.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold uppercase leading-tight tracking-wide text-white mb-6 fade-in-up">
                ABOUT MERC<br />ESPORTS
              </h1>
              <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed fade-in-up stagger-delay-1">
                Merciless eSports is built on discipline, strategy, and an unyielding commitment
                to excellence. We compete at the highest level, combining skill, teamwork, and
                innovation to push the boundaries of competitive gaming.
              </p>
            </div>
            
            <div className="relative fade-in-right stagger-delay-2 lg:col-span-2">
              <img 
                src="/theboys.JPG" 
                alt="The Boys - Merciless eSports Team" 
                className="w-full h-auto rounded-lg shadow-xl border border-zinc-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 bg-zinc-900 section-fade">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xl sm:text-2xl text-zinc-300 leading-relaxed max-w-4xl mx-auto mb-8 fade-in-up">
            Our mission is clear—set the standard, dominate the game, and redefine what it means to be elite in
            eSports.
          </p>
          <a href="/team" className="inline-block bg-red-600 hover:bg-red-700 px-6 py-3 font-semibold text-white rounded uppercase tracking-wide transition-colors fade-in-up stagger-delay-1">
            MEET THE TEAM
          </a>
        </div>
      </section>

      {/* Our Results */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 bg-black section-fade">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-12 text-center text-white fade-in-up">
            OUR RESULTS
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center scale-in stagger-delay-1">
              <div className="text-4xl sm:text-5xl font-bold text-red-500 mb-2">3+</div>
              <div className="text-zinc-400 uppercase tracking-wide">TOURNAMENTS</div>
            </div>
            <div className="text-center scale-in stagger-delay-2">
              <div className="text-4xl sm:text-5xl font-bold text-red-500 mb-2">300k+</div>
              <div className="text-zinc-400 uppercase tracking-wide">TEAM EARNINGS</div>
            </div>
            <div className="text-center scale-in stagger-delay-3">
              <div className="text-4xl sm:text-5xl font-bold text-red-500 mb-2">80+</div>
              <div className="text-zinc-400 uppercase tracking-wide">TEAM MEMBERS</div>
            </div>
            <div className="text-center scale-in stagger-delay-4">
              <div className="text-4xl sm:text-5xl font-bold text-red-500 mb-2">1+</div>
              <div className="text-zinc-400 uppercase tracking-wide">YEARS GOING</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Story Behind Merciless */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 bg-zinc-900 section-fade">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Sorrow image - left of text - bigger */}
            <div className="absolute top-0 left-0 w-96 h-96 fade-in-left">
              <img 
                src="/sorrow.JPG" 
                alt="Sorrow - Merciless eSports" 
                className="w-full h-full object-cover rounded-lg shadow-xl border border-zinc-700 filter-none"
                style={{ imageRendering: 'auto' }}
              />
            </div>
            
            {/* Text content */}
            <div className="ml-[28rem] mb-8 fade-in-right">
              <h2 className="text-3xl sm:text-4xl font-bold uppercase mb-6 text-white">
                THE STORY BEHIND MERCILESS
              </h2>
              <p className="text-zinc-300 text-lg leading-relaxed mb-8">
                Merciless was born from a passion for competition and a drive to be the best.
                What started as a team of top players in the Off The Grid playtest quickly grew into an elite force, expanding across platforms and
                dominating the competitive scene.
              </p>
              <a href="/team" className="inline-block bg-red-600 hover:bg-red-700 px-6 py-3 font-semibold text-white rounded uppercase tracking-wide transition-colors">
                MEET THE TEAM
              </a>
            </div>
            
            {/* Seli image - below text, overlapping with Sorrow - bigger */}
            <div className="ml-72 w-[28rem] h-80 fade-in-up stagger-delay-1">
              <img 
                src="/seli.JPG" 
                alt="Seli - Merciless eSports" 
                className="w-full h-full object-cover rounded-lg shadow-2xl border-2 border-red-500 ring-2 ring-black filter-none"
                style={{ imageRendering: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* How Merciless Started */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 bg-black section-fade">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase mb-8 text-center text-white fade-in-up">
            HOW MERCILESS ESPORTS STARTED
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-left">
              <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                Merciless was founded during the Off The Grid PC playtest, where a group of top players united with a vision to create an
                elite competitive team. As the playtest progressed, the team quickly gained
                recognition, recruiting the best talent and refining strategies.
              </p>
              <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                After Off The Grid&apos;s official launch, Merciless expanded rapidly—bringing in more elite players,
                forming console teams, and earning invitations to the game&apos;s largest tournament,
                where we competed against top-tier teams and major Twitch streamers.
              </p>
              <p className="text-zinc-300 text-lg leading-relaxed">
                With a commitment to excellence, we continued growing, forming teams in other competitive
                titles and establishing Merciless as a formidable force in eSports.
              </p>
            </div>
            
            <div className="relative fade-in-right">
              <img 
                src="/esports.png" 
                alt="Merciless eSports Origins" 
                className="w-full h-auto rounded-lg shadow-xl border border-zinc-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Awards */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 bg-zinc-900 section-fade">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase mb-8 text-center text-white fade-in-up">
            OUR AWARDS
          </h2>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-zinc-300 text-lg leading-relaxed fade-in-up stagger-delay-1">
              Merciless eSports has earned recognition through victories in top-tier
              tournaments and standout performances against the best in the industry. Here are our
              current awards and achievements:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black p-8 rounded-lg text-center border border-zinc-800 scale-in stagger-delay-1">
              <div className="text-5xl font-bold text-red-500 mb-4">$300K</div>
              <h3 className="text-xl font-bold text-white mb-2 uppercase">EARNED</h3>
              <p className="text-zinc-400">Total tournament earnings across all competitions</p>
            </div>
            
            <div className="bg-black p-8 rounded-lg text-center border border-zinc-800 scale-in stagger-delay-2">
              <div className="text-5xl font-bold text-red-500 mb-4">3+</div>
              <h3 className="text-xl font-bold text-white mb-2 uppercase">MAJOR TOURNAMENTS</h3>
              <p className="text-zinc-400">Championship victories in premier competitions</p>
            </div>
            
            <div className="bg-black p-8 rounded-lg text-center border border-zinc-800 scale-in stagger-delay-3">
              <div className="text-5xl font-bold text-red-500 mb-4">TOP</div>
              <h3 className="text-xl font-bold text-white mb-2 uppercase">TIER RECOGNITION</h3>
              <p className="text-zinc-400">Competing against the best teams and streamers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Preview */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 bg-black section-fade">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase mb-8 text-center text-white fade-in-up">
            OUR TEAM
          </h2>
          <div className="text-center mb-12">
            <p className="text-zinc-300 text-lg leading-relaxed max-w-3xl mx-auto mb-8 fade-in-up stagger-delay-1">
              Merciless eSports is home to elite players who share a relentless drive to
              compete at the highest level. United by skill and dedication, our team is always
              striving for greatness.
            </p>
            <a href="/team" className="inline-block bg-red-600 hover:bg-red-700 px-6 py-3 font-semibold text-white rounded uppercase tracking-wide transition-colors fade-in-up stagger-delay-2">
              BROWSE TEAM
            </a>
          </div>

          {/* Featured Team Members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-900 p-6 rounded-lg text-center hover:bg-zinc-800 transition-colors scale-in stagger-delay-1">
              <div className="w-20 h-20 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <h3 className="text-white font-bold text-lg uppercase mb-2">CWRIGZ</h3>
              <p className="text-zinc-400 text-sm">Elite Player</p>
            </div>
            
            <div className="bg-zinc-900 p-6 rounded-lg text-center hover:bg-zinc-800 transition-colors scale-in stagger-delay-2">
              <div className="w-20 h-20 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <h3 className="text-white font-bold text-lg uppercase mb-2">TTV HUMBLEBLUNT</h3>
              <p className="text-zinc-400 text-sm">Elite Player</p>
            </div>
            
            <div className="bg-zinc-900 p-6 rounded-lg text-center hover:bg-zinc-800 transition-colors scale-in stagger-delay-3">
              <div className="w-20 h-20 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <h3 className="text-white font-bold text-lg uppercase mb-2">SON_MAFRINHA</h3>
              <p className="text-zinc-400 text-sm">Elite Player</p>
            </div>
          </div>
        </div>
      </section>

      {/* Follow Us */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 bg-zinc-900 section-fade">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase mb-8 text-white fade-in-up">
            FOLLOW US
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            <a href="https://twitter.com/" className="flex items-center gap-2 text-white hover:text-red-500 transition-colors font-semibold uppercase tracking-wide text-lg fade-in-up stagger-delay-1">
              <span>📱</span> TWITTER
            </a>
            <a href="https://www.youtube.com/" className="flex items-center gap-2 text-white hover:text-red-500 transition-colors font-semibold uppercase tracking-wide text-lg fade-in-up stagger-delay-2">
              <span>📺</span> YOUTUBE
            </a>
            <a href="https://www.twitch.tv/" className="flex items-center gap-2 text-white hover:text-red-500 transition-colors font-semibold uppercase tracking-wide text-lg fade-in-up stagger-delay-3">
              <span>🎮</span> TWITCH
            </a>
            <a href="https://www.tiktok.com/" className="flex items-center gap-2 text-white hover:text-red-500 transition-colors font-semibold uppercase tracking-wide text-lg fade-in-up stagger-delay-4">
              <span>🎵</span> TIKTOK
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-8 bg-black border-t border-zinc-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-zinc-400 text-sm sm:text-base">Copyright © Merciless eSports 2025</p>
        </div>
      </footer>
    </>
  );
}
