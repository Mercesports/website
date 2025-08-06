'use client';

import { useEffect, useRef } from 'react';

export default function Sponsors() {
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

  const sponsorTiers = [
    {
      title: "TITLE SPONSORS",
      sponsors: [
        { name: "Example Gaming", logo: "/logo.png", description: "Premier gaming hardware and peripherals" },
        { name: "Elite Energy", logo: "/logo.png", description: "Performance energy drinks for gamers" }
      ]
    },
    {
      title: "OFFICIAL PARTNERS",
      sponsors: [
        { name: "Stream Tech", logo: "/logo.png", description: "Professional streaming equipment" },
        { name: "Gaming Gear Pro", logo: "/logo.png", description: "High-performance gaming accessories" },
        { name: "Cyber Nutrition", logo: "/logo.png", description: "Gaming supplements and nutrition" },
        { name: "Digital Arena", logo: "/logo.png", description: "Tournament hosting platform" }
      ]
    },
    {
      title: "SUPPORTING PARTNERS",
      sponsors: [
        { name: "Tech Solutions", logo: "/logo.png", description: "IT and technical support" },
        { name: "Media Hub", logo: "/logo.png", description: "Content creation and media services" },
        { name: "Event Masters", logo: "/logo.png", description: "Event management and coordination" },
        { name: "Brand Studio", logo: "/logo.png", description: "Design and branding services" },
        { name: "Game Network", logo: "/logo.png", description: "Gaming community platform" },
        { name: "Esports Analytics", logo: "/logo.png", description: "Performance tracking and statistics" }
      ]
    }
  ];

  const SponsorCard = ({ sponsor, isLarge = false }: { sponsor: any; isLarge?: boolean }) => (
    <div className={`bg-zinc-900 ${isLarge ? 'p-8' : 'p-6'} rounded-lg text-center hover:bg-zinc-800 transition-colors group border border-zinc-800 scale-in`}>
      <div className={`${isLarge ? 'w-32 h-32' : 'w-20 h-20'} bg-zinc-800 rounded-lg mx-auto mb-4 flex items-center justify-center overflow-hidden`}>
        <img 
          src={sponsor.logo} 
          alt={sponsor.name} 
          className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
        />
      </div>
      <h3 className={`text-white font-bold ${isLarge ? 'text-xl' : 'text-lg'} uppercase mb-2 group-hover:text-red-400 transition-colors`}>
        {sponsor.name}
      </h3>
      <p className="text-zinc-400 text-sm">
        {sponsor.description}
      </p>
    </div>
  );

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center px-4 sm:px-8 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-image.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold uppercase leading-tight tracking-wide text-white mb-6 fade-in-up">
            SPONSORS
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto fade-in-up stagger-delay-1">
            Merciless is proud to collaborate with brands and organizations that share our
            passion for competitive gaming. Our sponsors help us elevate our players, events,
            and content to the next level.
          </p>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 bg-zinc-900 section-fade">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xl sm:text-2xl text-zinc-300 leading-relaxed max-w-4xl mx-auto mb-8 fade-in-up">
            If you're interested in partnering with us and becoming a part of the Merciless legacy, contact us today!
          </p>
          <a href="#contact" className="inline-block bg-red-600 hover:bg-red-700 px-8 py-4 font-semibold text-white rounded uppercase tracking-wide transition-colors text-lg fade-in-up stagger-delay-1">
            BECOME A SPONSOR
          </a>
        </div>
      </section>

      {/* Title Sponsors */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 bg-black section-fade">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase mb-12 text-center text-white fade-in-up">
            {sponsorTiers[0].title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sponsorTiers[0].sponsors.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} isLarge={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Official Partners */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 bg-zinc-900 section-fade">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase mb-12 text-center text-white fade-in-up">
            {sponsorTiers[1].title}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorTiers[1].sponsors.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} />
            ))}
          </div>
        </div>
      </section>

      {/* Supporting Partners */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 bg-black section-fade">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase mb-12 text-center text-white fade-in-up">
            {sponsorTiers[2].title}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsorTiers[2].sponsors.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} />
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Benefits */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase mb-12 text-center text-white">
            SPONSORSHIP BENEFITS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black p-8 rounded-lg text-center border border-zinc-800">
              <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">📺</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase">BRAND EXPOSURE</h3>
              <p className="text-zinc-400">Get your brand in front of thousands of engaged esports fans across multiple platforms and tournaments.</p>
            </div>
            
            <div className="bg-black p-8 rounded-lg text-center border border-zinc-800">
              <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">🎮</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase">GAMING COMMUNITY</h3>
              <p className="text-zinc-400">Access to our dedicated community of competitive gamers and esports enthusiasts.</p>
            </div>
            
            <div className="bg-black p-8 rounded-lg text-center border border-zinc-800">
              <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase">TOURNAMENT PRESENCE</h3>
              <p className="text-zinc-400">Prominent placement at major tournaments and competitive events throughout the year.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase mb-12 text-center text-white">
            PARTNERSHIP TIERS
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Title Sponsor Tier */}
            <div className="bg-gradient-to-b from-red-900/50 to-zinc-900 p-8 rounded-lg border-2 border-red-500">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-red-400 uppercase mb-2">TITLE SPONSOR</h3>
                <p className="text-zinc-300">Premium Partnership</p>
              </div>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-center gap-2">
                  <span className="text-red-400">✓</span>
                  Logo on all team jerseys
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-400">✓</span>
                  Tournament naming rights
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-400">✓</span>
                  Exclusive content creation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-400">✓</span>
                  Social media integration
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-400">✓</span>
                  Premium event presence
                </li>
              </ul>
            </div>

            {/* Official Partner Tier */}
            <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-700">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white uppercase mb-2">OFFICIAL PARTNER</h3>
                <p className="text-zinc-300">Strategic Partnership</p>
              </div>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-center gap-2">
                  <span className="text-red-400">✓</span>
                  Logo on team materials
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-400">✓</span>
                  Tournament participation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-400">✓</span>
                  Content collaboration
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-400">✓</span>
                  Social media mentions
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-400">✓</span>
                  Event booth space
                </li>
              </ul>
            </div>

            {/* Supporting Partner Tier */}
            <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-zinc-300 uppercase mb-2">SUPPORTING PARTNER</h3>
                <p className="text-zinc-400">Community Partnership</p>
              </div>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-center gap-2">
                  <span className="text-red-400">✓</span>
                  Website logo placement
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-400">✓</span>
                  Social media features
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-400">✓</span>
                  Community recognition
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-400">✓</span>
                  Newsletter inclusion
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-400">✓</span>
                  Event participation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 bg-zinc-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase mb-8 text-white">
            READY TO PARTNER WITH US?
          </h2>
          <p className="text-lg text-zinc-300 mb-8 max-w-3xl mx-auto">
            Join the Merciless legacy and help us dominate the competitive gaming scene. 
            Contact our partnerships team to discuss how we can work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-red-600 hover:bg-red-700 px-8 py-4 font-semibold text-white rounded uppercase tracking-wide transition-colors">
              CONTACT US
            </a>
            <a href="/about" className="border-2 border-white hover:border-red-500 hover:text-red-500 px-8 py-4 font-semibold rounded uppercase tracking-wide transition-colors">
              LEARN MORE
            </a>
          </div>
        </div>
      </section>

      {/* Follow Us */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase mb-8 text-white">
            FOLLOW US
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            <a href="https://twitter.com/" className="flex items-center gap-2 text-white hover:text-red-500 transition-colors font-semibold uppercase tracking-wide text-lg">
              <span>📱</span> TWITTER
            </a>
            <a href="https://www.youtube.com/" className="flex items-center gap-2 text-white hover:text-red-500 transition-colors font-semibold uppercase tracking-wide text-lg">
              <span>📺</span> YOUTUBE
            </a>
            <a href="https://www.twitch.tv/" className="flex items-center gap-2 text-white hover:text-red-500 transition-colors font-semibold uppercase tracking-wide text-lg">
              <span>🎮</span> TWITCH
            </a>
            <a href="https://www.tiktok.com/" className="flex items-center gap-2 text-white hover:text-red-500 transition-colors font-semibold uppercase tracking-wide text-lg">
              <span>🎵</span> TIKTOK
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
