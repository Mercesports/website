export default function Blog() {
  return (
    <div className="min-h-screen bg-black py-16 sm:py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold uppercase mb-8 sm:mb-12 text-white text-center">
          ARTICLES & NEWS
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <article className="bg-zinc-900 p-4 sm:p-8 rounded-lg text-center">
            <span className="text-red-500 text-sm font-semibold mb-2 block">NEWS • FEBRUARY 15, 2025</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 uppercase">
              MERCILESS GEARS UP FOR THE OFF THE GRID TOURNAMENT
            </h2>
            <p className="text-zinc-300 mb-4 text-sm sm:text-base">
              The team is preparing for the biggest Off The Grid tournament yet. Our strategies are locked in, 
              and we're ready to dominate the competition.
            </p>
            <a href="#" className="text-red-500 hover:text-red-400 font-semibold uppercase tracking-wide">
              READ MORE →
            </a>
          </article>
          
          <article className="bg-zinc-900 p-4 sm:p-8 rounded-lg text-center">
            <span className="text-red-500 text-sm font-semibold mb-2 block">NEWS • FEBRUARY 10, 2025</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 uppercase">
              SORROW & GUNNY TAKE STREAMING TO THE NEXT LEVEL ON AVAX WITH BILLY MARKUS
            </h2>
            <p className="text-zinc-300 mb-4 text-sm sm:text-base">
              Our streaming duo teams up with Billy Markus for an epic AVAX gaming session that breaks new ground 
              in Web3 esports entertainment.
            </p>
            <a href="#" className="text-red-500 hover:text-red-400 font-semibold uppercase tracking-wide">
              READ MORE →
            </a>
          </article>
          
          <article className="bg-zinc-900 p-4 sm:p-8 rounded-lg text-center">
            <span className="text-red-500 text-sm font-semibold mb-2 block">NEWS • FEBRUARY 5, 2025</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 uppercase">
              MERCILESS EXPANDS INTO AVALANCHE GAMING
            </h2>
            <p className="text-zinc-300 mb-4 text-sm sm:text-base">
              We're officially expanding our dominance from Off The Grid into the Avalanche ecosystem, 
              bringing our competitive edge to Web3 gaming.
            </p>
            <a href="#" className="text-red-500 hover:text-red-400 font-semibold uppercase tracking-wide">
              READ MORE →
            </a>
          </article>
          
          <article className="bg-zinc-900 p-4 sm:p-8 rounded-lg text-center">
            <span className="text-red-500 text-sm font-semibold mb-2 block">NEWS • JANUARY 30, 2025</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 uppercase">
              COMMUNITY GROWTH AND DISCORD EVENTS
            </h2>
            <p className="text-zinc-300 mb-4 text-sm sm:text-base">
              Our Discord community continues to grow as we host regular events, movie nights, 
              and gaming sessions for our dedicated fanbase.
            </p>
            <a href="#" className="text-red-500 hover:text-red-400 font-semibold uppercase tracking-wide">
              READ MORE →
            </a>
          </article>
        </div>
        
        <div className="text-center">
          <a href="/" className="inline-block bg-red-600 hover:bg-red-700 px-6 py-3 font-semibold text-white rounded uppercase tracking-wide transition-colors">
            BACK TO HOME
          </a>
        </div>
      </div>
    </div>
  );
}
