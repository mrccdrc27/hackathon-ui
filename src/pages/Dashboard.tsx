import { Link } from 'react-router-dom';
import { Activity, BrainCircuit, CheckCircle2, Terminal, Users, CalendarDays, BookOpen, ScrollText, Play, Clock, ArrowRight, ShieldAlert, Bug, Lightbulb, Bell, Search, Server, GitPullRequest, MessageSquare } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const taskActivityData = [
  { day: 'Mon', tasks: 12, merged: 8 },
  { day: 'Tue', tasks: 19, merged: 12 },
  { day: 'Wed', tasks: 15, merged: 14 },
  { day: 'Thu', tasks: 22, merged: 18 },
  { day: 'Fri', tasks: 28, merged: 24 },
  { day: 'Sat', tasks: 15, merged: 10 },
  { day: 'Sun', tasks: 10, merged: 9 },
];

export function Dashboard() {
  return (
    <div className="flex flex-col h-full bg-zinc-50 dark:bg-[#09090b] overflow-y-auto">
      {/* Top Bar */}
      <header className="flex items-center justify-between px-4 md:px-8 py-4 min-h-16 border-b border-zinc-200 dark:border-zinc-800 shrink-0 bg-white dark:bg-[#09090b] sticky top-0 z-20 flex-wrap gap-4">
        <div className="flex items-center gap-4 flex-wrap">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Project: <span className="text-indigo-500 dark:text-indigo-400">auth-service-v3</span></h2>
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono px-3 py-1 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-zinc-600 dark:text-zinc-400">github/sync</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono px-3 py-1 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full">
            <div className="w-2 h-2 rounded-full bg-indigo-500 translate-y-[1px]"></div>
            <span className="text-zinc-600 dark:text-zinc-400">3 Agents Idle</span>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 ml-auto">
          <div className="relative hidden md:block">
            <Search className="w-4 h-4 text-zinc-400 dark:text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search tasks or notes..." 
              className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md py-1.5 pl-9 pr-4 text-sm text-zinc-800 dark:text-zinc-200 focus:outline-none focus:border-zinc-300 dark:focus:border-zinc-700 w-64 transition-colors"
            />
          </div>
          <button className="relative p-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-md transition-colors border border-transparent dark:hover:border-zinc-700">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white dark:border-zinc-900"></span>
          </button>
          <div className="hidden sm:block h-6 w-px bg-zinc-200 dark:bg-zinc-800"></div>
          <button className="px-3 sm:px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs md:text-sm font-medium rounded-md transition-all shadow-lg shadow-indigo-600/20 flex items-center gap-2 whitespace-nowrap">
            <BrainCircuit className="w-4 h-4" />
            <span className="hidden sm:inline">Trigger PM Sync</span>
            <span className="inline sm:hidden">Sync</span>
          </button>
        </div>
      </header>

      {/* Bento Grid */}
      <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-12 auto-rows-auto md:auto-rows-[140px] gap-4 max-w-[1600px] mx-auto w-full">
        
        {/* Live Meeting Hub */}
        <div className="col-span-1 md:col-span-8 row-span-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 md:p-6 flex flex-col sm:flex-row items-center justify-between group hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors gap-4">
          <div className="flex items-center gap-4 md:gap-6 w-full sm:w-auto">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex flex-col items-center justify-center shrink-0">
              <span className="text-[10px] md:text-xs font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">JUN</span>
              <span className="text-lg md:text-xl font-bold text-indigo-700 dark:text-indigo-100 leading-none mt-1">24</span>
            </div>
            <div>
              <div className="flex items-center gap-2 md:gap-3 mb-1">
                <span className="px-2 py-0.5 bg-rose-100 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 text-[10px] md:text-xs font-semibold rounded uppercase tracking-wider">Starting In 8m</span>
                <span className="text-zinc-500 text-[10px] md:text-sm font-mono flex items-center gap-1"><Clock className="w-3 h-3" /> 10:00 AM PST</span>
              </div>
              <h2 className="text-base md:text-xl font-semibold text-zinc-900 dark:text-zinc-100 line-clamp-1">Daily Standup: Infrastructure Sync</h2>
              <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-1">Management Agent will present 5 drafted security patches.</p>
            </div>
          </div>
          
          <div className="flex flex-row items-center justify-between sm:justify-center w-full sm:w-auto gap-4 md:gap-6 pt-2 sm:pt-0 border-t border-zinc-100 sm:border-0 dark:border-zinc-800">
             <div className="flex -space-x-3">
               <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white dark:border-zinc-900 bg-emerald-600 dark:bg-emerald-700 flex items-center justify-center text-xs font-medium text-white">SA</div>
               <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white dark:border-zinc-900 bg-indigo-600 dark:bg-indigo-700 flex items-center justify-center text-xs font-medium text-white">JD</div>
               <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white dark:border-zinc-900 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-xs font-medium"><BrainCircuit className="w-4 h-4 text-indigo-500 dark:text-indigo-400" /></div>
             </div>
             <Link to="/meeting" className="px-4 md:px-5 py-2 md:py-2.5 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 text-xs md:text-sm font-semibold rounded-lg shadow-lg flex items-center justify-center gap-2 transition-colors whitespace-nowrap">
               <Play className="w-3 h-3 md:w-4 md:h-4 fill-current" /> Join <span className="hidden md:inline">Standup</span>
             </Link>
          </div>
        </div>

        {/* Calendar / Schedule Mini */}
        <div className="col-span-1 md:col-span-4 md:row-span-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 md:p-6 flex flex-col min-h-[250px] md:min-h-0">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
              Upcoming Schedule
            </h3>
            <Link to="/calendar" className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline">View Calendar</Link>
          </div>
          <div className="flex-1 space-y-2 md:space-y-3 overflow-y-auto pr-1 md:pr-2">
            {[
              { time: '10:00 AM', title: 'Daily Standup Sync', type: 'meeting' },
              { time: '11:30 AM', title: 'Senior Dev Pair Session', type: 'pairing' },
              { time: '02:00 PM', title: 'Backlog Grooming', type: 'agent-task' },
              { time: '04:00 PM', title: 'Code Freeze / Audit', type: 'agent-task' },
            ].map((event, i) => (
              <div key={i} className="flex items-start gap-3 md:gap-4 p-2 md:p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group cursor-pointer border border-transparent dark:hover:border-zinc-800">
                <span className="text-xs font-mono text-zinc-500 w-14 md:w-16 pt-0.5">{event.time}</span>
                <div>
                  <h4 className="text-[13px] md:text-sm font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{event.title}</h4>
                  <p className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest mt-1">{event.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Triage Center / Notifications */}
        <div className="col-span-1 md:col-span-4 md:row-span-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 md:p-6 flex flex-col min-h-[300px] md:min-h-0">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-rose-500 dark:text-rose-400" />
              Triage Needed
            </h3>
            <span className="bg-rose-100 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 text-xs px-2 py-0.5 rounded-full font-mono">4 Pending</span>
          </div>
          
          <div className="flex flex-col gap-2 md:gap-3 flex-1 overflow-y-auto pr-1 md:pr-2 -mr-1 md:-mr-2">
            {[
              { type: 'Security', icon: Bug, title: 'CORS policy overly permissive', desc: 'PM Agent drafted bug for API gateway.', urgent: true },
              { type: 'Review', icon: GitPullRequest, title: 'PR #102 relies on stale JWT config', desc: 'Senior Dev Agent flagged PR for missing refresh token.', urgent: true },
              { type: 'DesignGap', icon: Lightbulb, title: 'Missing rate limiter on /login', desc: 'Senior Dev auto-generated ticket during codebase sync.', urgent: false },
            ].map((item, i) => (
              <div key={i} className="bg-zinc-50 dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 p-2.5 md:p-3 rounded-xl dark:hover:border-zinc-700 transition-colors cursor-pointer group hover:bg-zinc-100">
                <div className="flex items-start gap-2 md:gap-3">
                  <div className={`p-1.5 rounded-md shrink-0 border ${item.urgent ? 'bg-rose-100 border-rose-200 text-rose-600 dark:bg-rose-500/10 dark:border-rose-500/20 dark:text-rose-400' : 'bg-amber-100 border-amber-200 text-amber-600 dark:bg-amber-500/10 dark:border-amber-500/20 dark:text-amber-400'}`}>
                    <item.icon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-[13px] md:text-sm font-medium text-zinc-800 dark:text-zinc-200 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{item.title}</h4>
                    <p className="text-[11px] md:text-xs text-zinc-500 mt-1 line-clamp-1 md:line-clamp-2">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics & Activity */}
        <div className="col-span-1 md:col-span-4 md:row-span-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 md:p-6 flex flex-col min-h-[250px] md:min-h-0">
          <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-4 md:mb-6 flex items-center gap-2">
            <Activity className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
            Jira Task Activity (7d)
          </h3>
          <div className="flex-1 min-h-[120px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={taskActivityData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorMerged" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorTasks" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" stroke="#a1a1aa" className="dark:stroke-zinc-600" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="#a1a1aa" className="dark:stroke-zinc-600" fontSize={10} tickLine={false} axisLine={false} tickCount={4} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--tooltip-bg, #18181b)', borderColor: 'var(--tooltip-border, #27272a)', borderRadius: '8px' }}
                  itemStyle={{ color: 'var(--tooltip-txt, #e5e5e5)' }}
                />
                <Area type="step" dataKey="tasks" stroke="#6366f1" strokeWidth={2} fillOpacity={1} fill="url(#colorTasks)" />
                <Area type="monotone" dataKey="merged" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorMerged)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center gap-4 md:gap-6 mt-4">
            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-indigo-500"></div><span className="text-[11px] md:text-xs text-zinc-500 dark:text-zinc-400">Created Tasks</span></div>
            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500"></div><span className="text-[11px] md:text-xs text-zinc-500 dark:text-zinc-400">Completed PRs</span></div>
          </div>
        </div>

        {/* Agent Engine Status */}
        <div className="col-span-1 md:col-span-8 row-span-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 md:p-6 flex flex-col justify-center">
          <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 flex items-center gap-2 mb-4">
            <Server className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
            Active Agent Workers 
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            <div className="bg-zinc-50 dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 rounded-xl p-3 md:p-4 flex items-center justify-between group cursor-pointer hover:border-zinc-300 dark:hover:border-zinc-700">
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0"><Terminal className="w-4 h-4" /></div>
                 <div className="min-w-0">
                   <h4 className="text-[13px] md:text-sm font-medium text-zinc-800 dark:text-zinc-200 truncate">Senior Dev Agent</h4>
                   <p className="text-[11px] md:text-xs text-zinc-500 truncate">Idle - Last sync 2h ago</p>
                 </div>
               </div>
               <div className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-600 shrink-0"></div>
            </div>
            
            <div className="bg-zinc-50 dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 rounded-xl p-3 md:p-4 flex items-center justify-between group cursor-pointer hover:border-zinc-300 dark:hover:border-zinc-700">
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0"><BrainCircuit className="w-4 h-4" /></div>
                 <div className="min-w-0">
                   <h4 className="text-[13px] md:text-sm font-medium text-zinc-800 dark:text-zinc-200 truncate">PM Agent</h4>
                   <p className="text-[11px] md:text-xs text-emerald-600 dark:text-emerald-500 animate-pulse truncate">Background Draft...</p>
                 </div>
               </div>
               <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></div>
            </div>

            <div className="bg-zinc-50 dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 rounded-xl p-3 md:p-4 flex items-center justify-between group cursor-pointer hover:border-zinc-300 dark:hover:border-zinc-700">
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0"><Users className="w-4 h-4" /></div>
                 <div className="min-w-0">
                   <h4 className="text-[13px] md:text-sm font-medium text-zinc-800 dark:text-zinc-200 truncate">Management Agent</h4>
                   <p className="text-[11px] md:text-xs text-zinc-500 truncate">Scheduled: 10:00 AM</p>
                 </div>
               </div>
               <div className="w-2 h-2 rounded-full bg-amber-500 shrink-0"></div>
            </div>
          </div>
        </div>

        {/* Quick Access / Notes Repo */}
        <div className="col-span-1 md:col-span-4 md:row-span-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 md:p-6 flex flex-col justify-center">
           <div className="flex items-center justify-between mb-4">
             <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
               <BookOpen className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
               Recent Notes
             </h3>
             <Link to="/notes" className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline">View All</Link>
           </div>
           <div className="flex flex-col sm:flex-row gap-3 overflow-hidden">
             <div className="flex-1 min-w-0 bg-zinc-50 dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 rounded-xl p-3 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors cursor-pointer">
                <div className="flex items-center gap-2 mb-1 text-zinc-700 dark:text-zinc-300">
                  <ScrollText className="w-3.5 h-3.5 shrink-0" />
                  <span className="text-[13px] md:text-xs font-medium truncate">June 23 Standup</span>
                </div>
                <div className="text-[11px] md:text-[10px] text-zinc-500 font-mono">11 action items</div>
             </div>
             <div className="flex-1 min-w-0 bg-zinc-50 dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 rounded-xl p-3 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors cursor-pointer">
                <div className="flex items-center gap-2 mb-1 text-zinc-700 dark:text-zinc-300">
                  <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                  <span className="text-[13px] md:text-xs font-medium truncate">Arch Pair: #4</span>
                </div>
                <div className="text-[11px] md:text-[10px] text-zinc-500 font-mono">Senior Dev Agent</div>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
}
