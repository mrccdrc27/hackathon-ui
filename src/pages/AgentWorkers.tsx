import { useState } from 'react';
import { Bot, Terminal, BrainCircuit, Users, Activity, Play, Square, Settings, Cpu, HardDrive } from 'lucide-react';
import { cn } from '../Layout';

export function AgentWorkers() {
  const [agents] = useState([
    {
      id: 'pm',
      name: 'PM Agent',
      icon: BrainCircuit,
      color: 'emerald',
      status: 'active',
      currentTask: 'Drafting backlog from June 24 Standup notes',
      uptime: '99.9%',
      cpu: '42%',
      memory: '2.4GB',
      completedTasks: 142
    },
    {
      id: 'dev',
      name: 'Senior Dev Agent',
      icon: Terminal,
      color: 'indigo',
      status: 'idle',
      currentTask: 'Waiting for PR review requests or manual invocation',
      uptime: '99.5%',
      cpu: '2%',
      memory: '1.1GB',
      completedTasks: 89
    },
    {
      id: 'mgmt',
      name: 'Management Agent',
      icon: Users,
      color: 'amber',
      status: 'scheduled',
      currentTask: 'Scheduled to facilitate standup at 10:00 AM',
      uptime: '99.9%',
      cpu: '0%',
      memory: '800MB',
      completedTasks: 45
    }
  ]);

  return (
    <div className="flex flex-col h-full bg-zinc-50 dark:bg-[#09090b] p-4 md:p-6 overflow-y-auto w-full">
      <header className="mb-6 md:mb-8">
        <h1 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
          <Bot className="w-5 h-5 md:w-6 md:h-6 text-indigo-600 dark:text-indigo-400" />
          Agent Workers Dashboard
        </h1>
        <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-500 mt-1">Monitor, configure, and manage autonomous AI agents across the ETL pipeline.</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
        {agents.map(agent => (
          <div key={agent.id} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 md:p-6 flex flex-col group hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors shadow-sm dark:shadow-none">
            <div className="flex items-start justify-between mb-4 md:mb-6">
              <div className="flex items-center gap-3">
                {/* Fixed dynamic classes for Tailwind v4 standard rendering mapping if possible, though static might be better, we leave as is for now for the simple UI */}
                <div className={`p-2 md:p-3 rounded-xl bg-${agent.color}-100 dark:bg-${agent.color}-500/10 border border-${agent.color}-200 dark:border-${agent.color}-500/20 text-${agent.color}-600 dark:text-${agent.color}-400`}>
                  <agent.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-[15px] md:text-base text-zinc-900 dark:text-zinc-100">{agent.name}</h3>
                  <div className="flex items-center gap-2 mt-0.5 md:mt-1">
                    <span className={cn(
                      "w-1.5 h-1.5 md:w-2 md:h-2 rounded-full",
                      agent.status === 'active' ? "bg-emerald-500 animate-pulse" : 
                      agent.status === 'idle' ? "bg-zinc-500 dark:bg-zinc-500" : "bg-amber-500"
                    )} />
                    <span className="text-[10px] md:text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">{agent.status}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-50 dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 rounded-lg p-3 mb-4 md:mb-6 flex-1">
               <p className="text-[11px] md:text-xs font-mono text-zinc-500 dark:text-zinc-400">Current Trace:</p>
               <p className="text-[13px] md:text-sm text-zinc-800 dark:text-zinc-200 mt-1">{agent.currentTask}</p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
               <div className="flex flex-col gap-1">
                 <span className="text-[10px] md:text-xs text-zinc-500 flex items-center gap-1"><Cpu className="w-3 h-3" /> CPU</span>
                 <span className="text-sm font-mono text-zinc-800 dark:text-zinc-300">{agent.cpu}</span>
               </div>
               <div className="flex flex-col gap-1">
                 <span className="text-[10px] md:text-xs text-zinc-500 flex items-center gap-1"><HardDrive className="w-3 h-3" /> Memory</span>
                 <span className="text-sm font-mono text-zinc-800 dark:text-zinc-300">{agent.memory}</span>
               </div>
               <div className="flex flex-col gap-1">
                 <span className="text-[10px] md:text-xs text-zinc-500 flex items-center gap-1"><Activity className="w-3 h-3" /> Uptime</span>
                 <span className="text-sm font-mono text-zinc-800 dark:text-zinc-300">{agent.uptime}</span>
               </div>
               <div className="flex flex-col gap-1">
                 <span className="text-[10px] md:text-xs text-zinc-500 flex items-center gap-1"><Bot className="w-3 h-3" /> Actions</span>
                 <span className="text-sm font-mono text-zinc-800 dark:text-zinc-300">{agent.completedTasks}</span>
               </div>
            </div>

            <div className="flex items-center gap-2 pt-3 md:pt-4 border-t border-zinc-100 dark:border-zinc-800">
              <button className="flex-1 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 py-1.5 md:py-2 rounded-md text-xs font-medium flex items-center justify-center gap-2 transition-colors">
                <Settings className="w-3.5 h-3.5" /> Config
              </button>
              {agent.status === 'active' ? (
                <button className="flex-1 bg-rose-50 dark:bg-rose-500/10 hover:bg-rose-100 dark:hover:bg-rose-500/20 text-rose-600 dark:text-rose-400 py-1.5 md:py-2 rounded-md text-xs font-medium flex items-center justify-center gap-2 transition-colors border border-rose-200 dark:border-rose-500/20">
                  <Square className="w-3 h-3 fill-current" /> Stop
                </button>
              ) : (
                <button className="flex-1 bg-emerald-50 dark:bg-emerald-500/10 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 py-1.5 md:py-2 rounded-md text-xs font-medium flex items-center justify-center gap-2 transition-colors border border-emerald-200 dark:border-emerald-500/20">
                  <Play className="w-3 h-3 fill-current" /> Force Wake
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 md:p-6 shadow-sm dark:shadow-none">
        <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 flex items-center gap-2 mb-4">
          <Activity className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          Global Agent Event Stream
        </h3>
        <div className="bg-zinc-50 dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 rounded-lg p-3 md:p-4 font-mono text-[10px] md:text-xs text-zinc-600 dark:text-zinc-400 space-y-3 h-48 overflow-y-auto">
           <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 border-b border-zinc-100 dark:border-zinc-800/50 pb-2 sm:border-0 sm:pb-0">
             <span className="text-zinc-400 dark:text-zinc-500 shrink-0">10:48:12</span>
             <span className="text-emerald-600 dark:text-emerald-400 shrink-0">[PM Agent]</span>
             <span className="text-zinc-800 dark:text-zinc-300">Extracted 3 tasks from transcript ID-9842</span>
           </div>
           <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 border-b border-zinc-100 dark:border-zinc-800/50 pb-2 sm:border-0 sm:pb-0">
             <span className="text-zinc-400 dark:text-zinc-500 shrink-0">10:45:00</span>
             <span className="text-indigo-600 dark:text-indigo-400 shrink-0">[Senior Dev]</span>
             <span className="text-zinc-800 dark:text-zinc-300">Completed PR review #102. Found 1 blocking issue.</span>
           </div>
           <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 border-b border-zinc-100 dark:border-zinc-800/50 pb-2 sm:border-0 sm:pb-0">
             <span className="text-zinc-400 dark:text-zinc-500 shrink-0">10:42:33</span>
             <span className="text-indigo-600 dark:text-indigo-400 shrink-0">[Senior Dev]</span>
             <span className="text-zinc-800 dark:text-zinc-300">Invoked via webhook (github/pull_request)</span>
           </div>
           <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 border-b border-zinc-100 dark:border-zinc-800/50 pb-2 sm:border-0 sm:pb-0">
             <span className="text-zinc-400 dark:text-zinc-500 shrink-0">10:30:00</span>
             <span className="text-amber-600 dark:text-amber-400 shrink-0">[Mgmt Agent]</span>
             <span className="text-zinc-800 dark:text-zinc-300">Generated pre-standup digest. Queued for 10:00 AM.</span>
           </div>
           <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 pb-2 sm:border-0 sm:pb-0">
             <span className="text-zinc-400 dark:text-zinc-500 shrink-0">09:12:14</span>
             <span className="text-emerald-600 dark:text-emerald-400 shrink-0">[PM Agent]</span>
             <span className="text-zinc-800 dark:text-zinc-300">Updated Jira ticket ORC-4 status to DONE.</span>
           </div>
        </div>
      </div>
    </div>
  );
}
