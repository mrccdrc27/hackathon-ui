import { Mic, MicOff, PhoneOff, Video, Users, MessageSquareQuote, CheckSquare, Settings } from 'lucide-react';
import { cn } from '../Layout';
import { useState, useEffect } from 'react';

export function LiveMeeting() {
  const [isMuted, setIsMuted] = useState(false);
  const [visualizerHeights, setVisualizerHeights] = useState<number[]>(Array(12).fill(10));

  // Simulating audio visualizer
  useEffect(() => {
    const interval = setInterval(() => {
      setVisualizerHeights(prev => prev.map(() => 10 + Math.random() * 40));
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-full bg-[#09090b] overflow-hidden text-zinc-200">
      
      {/* Main Focus Area (Center) */}
      <div className="flex-1 flex flex-col relative h-full">
        {/* Floating Header */}
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
          <div className="flex flex-col">
            <span className="text-base font-medium text-white px-3 py-1 bg-zinc-900/50 border border-zinc-800/50 rounded-lg backdrop-blur-md">Daily Standup Sync</span>
            <span className="text-xs text-zinc-400 font-mono mt-1 px-1">00:14:32</span>
          </div>
          <div className="flex items-center gap-2 bg-zinc-900/50 border border-zinc-800/50 rounded-lg p-1.5 backdrop-blur-md">
            <div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-medium">AI</div>
            <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-xs font-medium">S</div>
            <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-medium">D</div>
            <span className="text-xs font-medium px-2 text-zinc-400 border-l border-zinc-700 ml-1">+2</span>
          </div>
        </div>

        {/* AI Avatar / Audio Visualizer Area */}
        <div className="flex-1 flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-[#09090b] to-[#09090b]">
          <div className="relative w-64 h-64 flex items-center justify-center">
            {/* Glowing Orb */}
            <div className="absolute inset-0 rounded-full bg-indigo-500/10 blur-3xl animate-pulse"></div>
            
            <div className="w-32 h-32 rounded-full border border-indigo-500/30 bg-zinc-900 shadow-[0_0_50px_rgba(99,102,241,0.15)] flex flex-col items-center justify-center relative z-10">
               <Mic className="w-8 h-8 text-indigo-400 opacity-80 mb-2" />
               <div className="flex items-end justify-center gap-1 h-6 w-full">
                {visualizerHeights.map((h, i) => (
                  <div 
                    key={i} 
                    className="w-1 bg-indigo-400 rounded-t-sm transition-all duration-150 ease-out" 
                    style={{ height: `${h}%` }}
                  />
                ))}
               </div>
            </div>

            {/* Ripple rings */}
            <div className="absolute inset-0 rounded-full border border-indigo-500/10 scale-110"></div>
            <div className="absolute inset-0 rounded-full border border-indigo-500/5 scale-125"></div>
          </div>
        </div>

        {/* Live Transcript Overlay (Bottom) */}
        <div className="h-48 bg-gradient-to-t from-[#09090b] via-[#09090b]/90 to-transparent absolute bottom-24 left-0 right-0 p-8 flex flex-col justify-end pointer-events-none">
          <div className="max-w-3xl mx-auto w-full space-y-4">
             <div className="flex gap-4 opacity-50 transition-opacity">
               <div className="w-8 shrink-0 text-right text-xs font-mono text-zinc-500 mt-1">Dev</div>
               <p className="text-base text-zinc-300">I'm blocked on the Postgres connection pool issue. It keeps dropping during test suites.</p>
             </div>
             <div className="flex gap-4">
               <div className="w-8 shrink-0 text-right text-xs font-mono text-indigo-400 mt-1">AI</div>
               <p className="text-base text-white font-medium leading-relaxed">
                 I see the telemetry. The pool size is set to 10 but tests are spawning concurrent fixtures. I will extract an action item to increase the `max_connections` for the test environment and assign it to you. Proceeding to the next topic.
               </p>
             </div>
          </div>
        </div>

        {/* Control Bar */}
        <div className="h-24 bg-zinc-900/80 backdrop-blur-xl border-t border-zinc-800 flex items-center justify-center gap-4 px-6 z-20">
          <button onClick={() => setIsMuted(!isMuted)} className={cn("p-4 rounded-full transition-colors", isMuted ? "bg-rose-500/20 text-rose-500 hover:bg-rose-500/30" : "bg-zinc-800 text-zinc-200 hover:bg-zinc-700")}>
            {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
          </button>
          <button className="p-4 rounded-full bg-zinc-800 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-700 transition-colors">
            <Video className="w-6 h-6" />
          </button>
          <button className="px-8 py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-medium transition-colors shadow-lg shadow-rose-900/20 flex items-center gap-2">
            <PhoneOff className="w-5 h-5" /> Leave
          </button>
          <button className="p-4 rounded-full bg-zinc-800 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-700 transition-colors ml-4">
            <Settings className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Live Extraction Panel (Right Sidebar) */}
      <div className="w-80 border-l border-zinc-800 bg-[#0c0c0e] flex flex-col z-20">
        <div className="p-5 border-b border-zinc-800 flex items-center gap-2">
          <MessageSquareQuote className="w-5 h-5 text-indigo-400" />
          <h2 className="font-semibold text-sm text-zinc-200">Live Extraction</h2>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
           {/* Auto-extracted items */}
           <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl shadow-lg relative overflow-hidden group">
             <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500"></div>
             <div className="flex items-center gap-2 mb-2">
               <span className="bg-amber-500/10 text-amber-500 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Blocker Detected</span>
             </div>
             <p className="text-sm text-zinc-300 leading-snug">Postgres connection pool exhaustion during test suite.</p>
           </div>

           <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl shadow-lg relative overflow-hidden group">
             <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500"></div>
             <div className="flex items-center gap-2 mb-2">
               <span className="bg-green-500/10 text-green-500 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider flex items-center gap-1">
                 <CheckSquare className="w-3 h-3" /> Action Item Generated
               </span>
             </div>
             <p className="text-sm text-zinc-300 leading-snug mb-3 hover:text-white transition-colors cursor-pointer">Update `max_connections` in `docker-compose.test.yml` to 50.</p>
             <div className="flex items-center justify-between border-t border-zinc-800 pt-3">
               <span className="text-xs text-zinc-500">Assigning to Dev...</span>
               <button className="text-[10px] bg-zinc-800 hover:bg-zinc-700 text-zinc-300 px-2 py-1 rounded transition-colors">Edit</button>
             </div>
           </div>

           <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl shadow-lg relative overflow-hidden group opacity-60">
             <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500"></div>
             <div className="flex items-center gap-2 mb-2">
               <span className="bg-indigo-500/10 text-indigo-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider flex items-center gap-1">
                 <Users className="w-3 h-3" /> Decision Logged
               </span>
               <span className="text-[10px] text-zinc-500 ml-auto">00:04:12</span>
             </div>
             <p className="text-sm text-zinc-300 leading-snug">Team agreed to delay the styling refactor until Sprint 4 to prioritize the core auth bugs.</p>
           </div>
        </div>
      </div>

    </div>
  );
}
