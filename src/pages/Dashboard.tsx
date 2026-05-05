import { Link } from 'react-router-dom';
import { Activity, AlertTriangle, ArrowRight, BrainCircuit, CheckCircle2, ChevronDown, GitBranch, Github, Play, ServerCrash, ShieldAlert, Mic } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const velocityData = [
  { day: 'Mon', velocity: 40, expected: 45 },
  { day: 'Tue', velocity: 65, expected: 50 },
  { day: 'Wed', velocity: 55, expected: 55 },
  { day: 'Thu', velocity: 85, expected: 60 },
  { day: 'Fri', velocity: 110, expected: 65 },
  { day: 'Sat', velocity: 115, expected: 70 },
  { day: 'Sun', velocity: 130, expected: 75 },
];

export function Dashboard() {
  return (
    <div className="flex flex-col h-full bg-neutral-950 p-6 overflow-y-auto">
      {/* Top Bar */}
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors">
            <span className="text-neutral-300">Project:</span>
            <span className="text-white">nexus-etl-pipeline</span>
            <ChevronDown className="w-4 h-4 text-neutral-500" />
          </button>
          <div className="flex items-center gap-2 text-xs font-mono px-3 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Github className="w-4 h-4" />
            <span>Connected: main</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse ml-1"></span>
          </div>
        </div>
        <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]">
          <BrainCircuit className="w-4 h-4" />
          <span>Run AI Context Check</span>
        </button>
      </header>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 min-h-[600px] auto-rows-fr">
        
        {/* Project Pulse (Hero) */}
        <div className="col-span-1 md:col-span-2 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <h2 className="text-lg font-semibold text-neutral-100 mb-6 flex items-center gap-2">
            <Activity className="w-5 h-5 text-emerald-400" />
            Project Pulse
          </h2>
          
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-950/50">
              <div className="text-sm text-neutral-500 mb-1">Health Score</div>
              <div className="text-3xl font-light text-white flex items-end gap-2">
                92<span className="text-lg text-emerald-400 font-medium">/100</span>
              </div>
            </div>
            <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-950/50">
              <div className="text-sm text-neutral-500 mb-1">Sprint Progress</div>
              <div className="text-3xl font-light text-white flex items-end gap-2">
                14<span className="text-lg text-neutral-400 font-medium">/18 pts</span>
              </div>
            </div>
            <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-950/50">
              <div className="text-sm text-neutral-500 mb-1">Code Smells</div>
              <div className="text-3xl font-light text-white flex items-end gap-2">
                2<span className="text-lg text-amber-400 font-medium text-sm border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 rounded ml-1">Minor</span>
              </div>
            </div>
          </div>

          <div className="flex-1 border border-neutral-800 rounded-xl bg-neutral-950/50 p-5 flex border-l-4 border-l-emerald-500">
            <div className="flex flex-col justify-center w-full">
               <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-neutral-300">ETL Pipeline State</span>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">ALL SYSTEMS NOMINAL</span>
               </div>
               <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span className="text-sm text-neutral-400 font-mono">auth-service-v2</span>
                    <span className="text-xs text-neutral-600">deployed 2h ago</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span className="text-sm text-neutral-400 font-mono">data-ingestion-worker</span>
                    <span className="text-xs text-neutral-600">deployed 5h ago</span>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* AI Scrum Alerts */}
        <div className="col-span-1 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-neutral-100 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              AI Scrum Alerts
            </h2>
            <span className="bg-neutral-800 text-neutral-300 text-xs px-2 py-1 rounded-md font-mono">3 PENDING</span>
          </div>
          
          <div className="flex flex-col gap-3 flex-1 overflow-y-auto pr-2">
            {[
              { type: 'Security', icon: ShieldAlert, color: 'text-rose-400', bg: 'bg-rose-400/10', border: 'border-rose-400/20', msg: 'CORS policy overly permissive on API gateway.', action: 'Assign to Backend Team?' },
              { type: 'Scalability', icon: ServerCrash, color: 'text-amber-400', bg: 'bg-amber-400/10', border: 'border-amber-400/20', msg: 'Postgres connection pool nearing limits during peak loads.', action: 'Generate Remediation Ticket?' },
              { type: 'Velocity', icon: GitBranch, color: 'text-sky-400', bg: 'bg-sky-400/10', border: 'border-sky-400/20', msg: 'Feature branch \'payment-stripe\' stale for 4 days.', action: 'Ping Developer?' },
            ].map((alert, i) => (
              <div key={i} className="bg-neutral-950/50 border border-neutral-800 p-4 rounded-xl hover:border-neutral-700 transition-colors cursor-pointer group">
                <div className="flex items-start gap-3 mb-3">
                  <div className={`p-2 rounded-lg ${alert.bg} ${alert.border} border`}>
                    <alert.icon className={`w-4 h-4 ${alert.color}`} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1">{alert.type}</div>
                    <div className="text-sm text-neutral-200 leading-snug">{alert.msg}</div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-neutral-800 flex-wrap gap-2">
                  <span className="text-xs text-neutral-400 italic">Generated by PM Agent</span>
                  <Link to="/kanban" className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {alert.action} <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Velocity Chart */}
        <div className="col-span-1 md:col-span-2 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col">
          <h2 className="text-lg font-semibold text-neutral-100 mb-6 font-sans">Sprint Velocity vs. Expected</h2>
          <div className="flex-1 min-h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={velocityData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorVelocity" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#262626" vertical={false} />
                <XAxis dataKey="day" stroke="#525252" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#525252" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#171717', borderColor: '#262626', borderRadius: '8px' }}
                  itemStyle={{ color: '#e5e5e5' }}
                />
                <Area type="monotone" dataKey="expected" stroke="#525252" strokeDasharray="5 5" fill="transparent" strokeWidth={2} />
                <Area type="monotone" dataKey="velocity" stroke="#10b981" fillOpacity={1} fill="url(#colorVelocity)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Live Meeting Hub */}
        <div className="col-span-1 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between overflow-hidden relative group">
           <div className="absolute -right-10 -top-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors"></div>
           <div>
            <h2 className="text-lg font-semibold text-neutral-100 mb-2 font-sans flex items-center gap-2">
              <Mic className="w-5 h-5 text-indigo-400" />
              Live Meeting Hub
            </h2>
            <p className="text-sm text-neutral-500 leading-relaxed mb-6">
              Next scheduled sync: <strong>Daily Standup</strong> in 15 mins.
            </p>
            
            <div className="bg-neutral-950/50 border border-neutral-800 rounded-xl p-4 mb-6">
               <div className="flex items-center gap-3 mb-2">
                 <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-medium text-neutral-300">SC</div>
                 <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-medium text-neutral-300 -ml-4 border border-neutral-900">AI</div>
                 <span className="text-xs text-neutral-400 ml-2">2 participants queued</span>
               </div>
            </div>
           </div>
          
          <Link to="/meeting" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl py-3 px-4 flex items-center justify-center gap-2 font-medium transition-colors shadow-lg shadow-indigo-900/20">
            <Play className="w-4 h-4 fill-current" />
            Join Live Standup Context
          </Link>
        </div>

      </div>
    </div>
  );
}
