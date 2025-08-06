
'use client';

import { useEffect, useRef } from 'react';

export default function Home() {
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
      <section id="home" className="relative h-[85vh] flex items-center justify-center px-4 sm:px-8 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('/stage.JPG')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40"></div>
        <div className="relative z-10 max-w-4xl text-center">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold uppercase leading-tight tracking-wide text-white mb-8 fade-in-up drop-shadow-2xl">
            MERCILESS<br />ESPORTS TEAM
          </h1>
          <p className="text-xl sm:text-2xl text-zinc-200 max-w-2xl mx-auto mb-8 fade-in-up stagger-delay-1 drop-shadow-lg">
            From pioneering <em>Off The Grid</em> to rising as a top contender in Web3, welcome to Merciless.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up stagger-delay-2">
            <a href="https://discord.com/invite/merciless" className="w-full sm:w-auto bg-red-600 hover:bg-red-700 px-8 py-4 font-semibold text-white rounded uppercase tracking-wide transition-colors text-center text-lg shadow-xl hover:shadow-2xl">
              MERC DISCORD
            </a>
            <a href="/team" className="w-full sm:w-auto border-2 border-white hover:border-red-500 hover:text-red-500 px-8 py-4 font-semibold rounded uppercase tracking-wide transition-colors text-center text-lg backdrop-blur-sm bg-black/20 hover:bg-red-500/10">
              MEET THE MERCS
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 px-4 sm:px-8 bg-zinc-900 section-fade">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase mb-6 sm:mb-8 text-white text-center fade-in-up">
            ABOUT THE MERC ESPORTS TEAM
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-left stagger-delay-1">
              <p className="text-zinc-300 text-xl sm:text-2xl leading-relaxed mb-8">
                Merciless eSports started as the first dominant team in Off The Grid, setting the standard for competition. 
                Now, we're expanding into Avalanche (AVAX) chain games, bringing our elite gameplay, strategy, and 
                community-driven approach to the next level of Web3 esports. The grind never stops—Merciless is here to conquer.
              </p>
              <div>
                <a href="/team" className="inline-block bg-red-600 hover:bg-red-700 px-8 py-4 font-semibold text-white rounded uppercase tracking-wide transition-colors text-lg">
                  MEET THE TEAM
                </a>
              </div>
            </div>
            
            <div className="relative fade-in-right stagger-delay-2">
              <div className="aspect-video bg-zinc-800 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.youtube.com/embed/GgCKTMz8kz0?start=13"
                  title="Merciless eSports Team Video"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="events" className="py-16 sm:py-20 px-4 sm:px-8 bg-black section-fade">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase mb-6 sm:mb-8 text-white fade-in-up">
            UPCOMING EVENTS
          </h2>
          <p className="text-zinc-400 mb-8 text-xl fade-in-up stagger-delay-1">Catch our latest events here.</p>
          
          <div className="bg-gradient-to-br from-zinc-900 to-black p-6 sm:p-8 rounded-lg mb-8 max-w-3xl mx-auto fade-in-up stagger-delay-2 hover:from-zinc-800 hover:to-zinc-900 transition-all duration-300 border border-zinc-700 hover:border-red-500 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">🎮</span>
                </div>
                <div>
                  <h3 className="text-red-500 font-bold text-xl">LIVE DISCORD EVENT</h3>
                  <p className="text-zinc-400 text-sm">Active in our community server</p>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">Live Now</span>
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="text-white font-semibold text-lg mb-2">🎯 Community Gaming Event</h4>
              <p className="text-zinc-300 text-base leading-relaxed mb-3">
                Join the Merciless community for our latest Discord event! Connect with fellow gamers, 
                participate in team activities, and be part of our growing esports family.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full text-xs">Community Event</span>
                <span className="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full text-xs">Voice Chat</span>
                <span className="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full text-xs">Gaming Session</span>
              </div>
            </div>
            
            <a 
              href="https://discord.com/events/1208873729027997716/1402722346963439861" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 group"
            >
              <span>View Event in Discord</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            
            <p className="text-zinc-500 text-xs mt-3 text-center">
              Click to view full event details, RSVP, and join the conversation in Discord
            </p>
          </div>

          <p className="text-zinc-300 mb-6 text-xl fade-in-up stagger-delay-3">JOIN DISCORD TO GET NOTIFICATIONS ON UPCOMING EVENTS</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://discord.com/invite/merciless" className="inline-block bg-red-600 hover:bg-red-700 px-8 py-4 font-semibold text-white rounded uppercase tracking-wide transition-colors text-lg fade-in-up stagger-delay-4">
              JOIN DISCORD
            </a>
            <a href="https://discord.com/channels/1208873729027997716" target="_blank" rel="noopener noreferrer" className="inline-block border-2 border-zinc-600 hover:border-red-500 hover:text-red-500 px-8 py-4 font-semibold text-zinc-300 rounded uppercase tracking-wide transition-colors text-lg fade-in-up stagger-delay-4">
              VIEW ALL EVENTS
            </a>
          </div>
        </div>
      </section>

      {/* Articles & News Section */}
      <section id="news" className="py-16 sm:py-20 px-4 sm:px-8 bg-zinc-900 section-fade">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase mb-6 sm:mb-8 text-white fade-in-up">
            ARTICLES & NEWS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
            <div className="bg-black p-6 sm:p-8 rounded-lg text-center fade-in-left stagger-delay-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 uppercase">
                MERCILESS GEARS UP FOR THE OFF THE GRID TOURNAMENT
              </h3>
              <span className="text-red-500 text-lg font-semibold">NEWS FEBRUARY 15, 2025</span>
            </div>
            
            <div className="bg-black p-6 sm:p-8 rounded-lg text-center fade-in-right stagger-delay-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 uppercase">
                SORROW & GUNNY TAKE STREAMING TO THE NEXT LEVEL ON AVAX WITH BILLY MARKUS
              </h3>
              <span className="text-red-500 text-lg font-semibold">NEWS</span>
            </div>
          </div>

          <a href="/blog" className="inline-block bg-red-600 hover:bg-red-700 px-8 py-4 font-semibold text-white rounded uppercase tracking-wide transition-colors text-lg fade-in-up stagger-delay-3">
            BROWSE NEWS
          </a>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 bg-black section-fade">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase mb-6 sm:mb-8 text-white fade-in-up">
            FOLLOW US ON X.COM
          </h2>
          
          <div className="mb-12">
            {/* Twitter feed placeholder */}
            <div className="bg-zinc-900 p-6 sm:p-8 rounded-lg max-w-2xl mx-auto scale-in stagger-delay-1">
              <p className="text-zinc-400 text-xl">Tweets by MercilessHub</p>
            </div>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold uppercase mb-6 text-white fade-in-up stagger-delay-2">FOLLOW US</h3>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            <a href="https://twitter.com/" className="text-white hover:text-red-500 transition-colors font-semibold uppercase tracking-wide text-xl fade-in-up stagger-delay-1">
              TWITTER
            </a>
            <a href="https://www.youtube.com/" className="text-white hover:text-red-500 transition-colors font-semibold uppercase tracking-wide text-xl fade-in-up stagger-delay-2">
              YOUTUBE
            </a>
            <a href="https://www.twitch.tv/" className="text-white hover:text-red-500 transition-colors font-semibold uppercase tracking-wide text-xl fade-in-up stagger-delay-3">
              TWITCH
            </a>
            <a href="https://www.tiktok.com/" className="text-white hover:text-red-500 transition-colors font-semibold uppercase tracking-wide text-xl fade-in-up stagger-delay-4">
              TIKTOK
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-8 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-zinc-400 text-sm sm:text-base">Copyright © Merciless eSports 2025</p>
        </div>
      </footer>
    </>
  );
}
