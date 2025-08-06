'use client';

import { useEffect, useRef } from 'react';

export default function Team() {
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

  interface TeamMember {
    name: string;
    twitch: string;
    twitter: string;
    youtube: string;
  }

  const managementTeam: TeamMember[] = [
    { name: "CLIFFBOOTH", twitch: "cliffbooth7", twitter: "home", youtube: "Fredgi07" },
    { name: "DUCKY", twitch: "mercducky", twitter: "Duckyotg", youtube: "" },
    { name: "SIPPY CAT", twitch: "", twitter: "", youtube: "" },
    { name: "SAMSCLUBCHAD", twitch: "samsclubchad", twitter: "SamsClubChad", youtube: "" },
    { name: "MERCKUZZO", twitch: "merckuzzo", twitter: "MercKuZzo", youtube: "MercKuZzo" },
    { name: "NOBSFUD", twitch: "", twitter: "", youtube: "" },
    { name: "QUANTUMCALAMARI", twitch: "", twitter: "", youtube: "" }
  ];

  const competitiveTeam: TeamMember[] = [
    { name: "0XSELI", twitch: "0xseli", twitter: "0xSeli", youtube: "0xseli" },
    { name: "BIGBL3U", twitch: "bigbl3u_ttv", twitter: "home", youtube: "" },
    { name: "BRAWLERS42", twitch: "brawlers42", twitter: "brawlers42", youtube: "" },
    { name: "COLDFLAME", twitch: "thecoldflame", twitter: "", youtube: "ColdFlame24" },
    { name: "CWRIGZ", twitch: "cwrigz_", twitter: "", youtube: "cwrigz" },
    { name: "FAME JIPAKIPA", twitch: "", twitter: "jipakipa", youtube: "" },
    { name: "FAME HIDE", twitch: "fame_hide", twitter: "Fame_Hide", youtube: "" },
    { name: "FROSTY", twitch: "mercfrosty", twitter: "mercfrosty", youtube: "frostyotg" },
    { name: "GGSHMIKEY", twitch: "ggshmikey", twitter: "GGshmikey", youtube: "" },
    { name: "GOT_VODK4", twitch: "iamvodkaaa", twitter: "", youtube: "MercVodka" },
    { name: "GUNNYGOPHER", twitch: "gunnygopher", twitter: "GunnyGopher", youtube: "GunnyGopher" },
    { name: "IGHOST-N00B", twitch: "igh0stnoob", twitter: "iGh0stNoob", youtube: "" },
    { name: "ITSMUFF1N", twitch: "notamuff1n", twitter: "ItsMuff1n", youtube: "notamuff1n" },
    { name: "LGOMEZZZ", twitch: "lgomezzz", twitter: "", youtube: "" },
    { name: "LOST-AURA", twitch: "merc_lostaura", twitter: "coltyyX", youtube: "coltyyyt" },
    { name: "ROYCE-XO", twitch: "roycexo", twitter: "", youtube: "" },
    { name: "SHANEZEDENTV", twitch: "shanezeden", twitter: "home", youtube: "" },
    { name: "SON_MAFRINHA", twitch: "maafra", twitter: "", youtube: "" },
    { name: "STIZZTHAWIZ", twitch: "stizzthawiz", twitter: "", youtube: "stizzithawiz1623" },
    { name: "TTV CURRYBOIII_", twitch: "curryboiii_", twitter: "Binnyplays", youtube: "channel/UCARgJf1rSOpUXDQAnqy25oQ" },
    { name: "TTV HUMBLEBLUNT", twitch: "humbleblunt", twitter: "humbleblunttt", youtube: "humbleblunt" },
    { name: "TOPCATFM", twitch: "topcatfm", twitter: "home", youtube: "" },
    { name: "TRIGGERMANTV", twitch: "triggermantv", twitter: "TriggermanTv", youtube: "triggermantv" },
    { name: "TWISTY", twitch: "mrtwistyyy", twitter: "MrTwistyyy", youtube: "channel/UCwXEiHQyCpjZnlObt6ZWf4w" },
    { name: "TWITCH ZZZSLEPT_", twitch: "zzzslept_", twitter: "zzzslept_", youtube: "zzzSleptt" },
    { name: "VEKENSTEIN", twitch: "vekenstein", twitter: "home", youtube: "" }
  ];

  const TeamMemberCard = ({ member, isManagement = false, imageId }: { member: TeamMember; isManagement?: boolean; imageId: number }) => (
    <div className="bg-zinc-900 p-6 rounded-lg text-center hover:bg-zinc-800 transition-colors group scale-in">
      <div className="w-20 h-20 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden border-2 border-red-500">
        <img 
          src={`https://picsum.photos/seed/${member.name.toLowerCase()}${imageId}/80/80`}
          alt={member.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-white font-bold text-lg uppercase mb-2 group-hover:text-red-400 transition-colors">
        {member.name}
      </h3>
      <p className="text-red-500 font-semibold mb-4 text-sm uppercase">
        {isManagement ? "MANAGEMENT" : "COMPETITIVE PLAYER"}
      </p>
      
      {/* Social Links */}
      <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
        {member.twitch && (
          <a 
            href={`https://www.twitch.tv/${member.twitch}`} 
            className="text-purple-400 hover:text-purple-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            🎮
          </a>
        )}
        {member.twitter && member.twitter !== "home" && (
          <a 
            href={`https://x.com/${member.twitter}`} 
            className="text-blue-400 hover:text-blue-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            📱
          </a>
        )}
        {member.youtube && (
          <a 
            href={`https://www.youtube.com/@${member.youtube}`} 
            className="text-red-400 hover:text-red-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            📺
          </a>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center px-4 sm:px-8 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('/theboys.JPG')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
        <div className="relative z-10 max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold uppercase leading-tight tracking-wide text-white mb-6 fade-in-up">
            TEAM
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto fade-in-up stagger-delay-1">
            Merciless eSports is built on skill, dedication, and teamwork, bringing together
            top competitors from across the gaming world. Each member plays a vital role in
            our success, pushing the limits of performance and representing the Merciless standard.
          </p>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 bg-zinc-900 section-fade">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-white mb-4 sm:mb-0 fade-in-left">
              MANAGEMENT TEAM
            </h2>
            <a 
              href="https://discord.com/channels/1208873729027997716/1282915497930788969" 
              className="bg-red-600 hover:bg-red-700 px-6 py-3 font-semibold text-white rounded uppercase tracking-wide transition-colors fade-in-right"
              target="_blank"
              rel="noopener noreferrer"
            >
              JOIN OUR TEAM
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {managementTeam.map((member, index) => (
              <TeamMemberCard key={index} member={member} isManagement={true} imageId={index + 100} />
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Team */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 bg-black section-fade">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase mb-12 text-center text-white fade-in-up">
            COMPETITIVE TEAM
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {competitiveTeam.map((member, index) => (
              <TeamMemberCard key={index} member={member} isManagement={false} imageId={index + 200} />
            ))}
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
