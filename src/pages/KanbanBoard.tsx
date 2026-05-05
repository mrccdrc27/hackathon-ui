import { useState } from 'react';
import { User, Activity, Shield, Briefcase, Zap, GitCommit, Search, Plus } from 'lucide-react';
import { cn } from '../Layout';

type Column = 'backlog' | 'in-progress' | 'review' | 'done';
type Priority = 'Feature' | 'Business Fit' | 'Scalability' | 'Security';

interface Ticket {
  id: string;
  title: string;
  priority: Priority;
  column: Column;
  agentGen: string;
  assigneeRecommendation: string;
}

const mockTickets: Ticket[] = [
  { id: '1', title: 'Implement JWT Refresh Interceptor', priority: 'Security', column: 'backlog', agentGen: 'Senior Dev Agent', assigneeRecommendation: 'Alex (Auth Specialist)' },
  { id: '2', title: 'Database Connection Pool Optimization', priority: 'Scalability', column: 'in-progress', agentGen: 'Management Agent', assigneeRecommendation: 'Sarah (DBA)' },
  { id: '3', title: 'Add Stripe Payment Webhook', priority: 'Business Fit', column: 'backlog', agentGen: 'PM Agent', assigneeRecommendation: 'TBD' },
  { id: '4', title: 'User Profile Avatar Upload', priority: 'Feature', column: 'done', agentGen: 'Human', assigneeRecommendation: 'Jamie (Frontend)' },
  { id: '5', title: 'CORS policy missing on API gateway', priority: 'Security', column: 'backlog', agentGen: 'PM Agent', assigneeRecommendation: 'Alex (Auth Specialist)' },
];

export function KanbanBoard() {
  const [tickets] = useState<Ticket[]>(mockTickets);

  const getPriorityColor = (p: Priority) => {
    switch(p) {
      case 'Security': return 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-400/10 border-rose-200 dark:border-rose-400/20';
      case 'Scalability': return 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-400/10 border-amber-200 dark:border-amber-400/20';
      case 'Business Fit': return 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-400/10 border-indigo-200 dark:border-indigo-400/20';
      case 'Feature': return 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-400/10 border-cyan-200 dark:border-cyan-400/20';
    }
  };

  const getPriorityIcon = (p: Priority) => {
    switch(p) {
      case 'Security': return <Shield className="w-3 h-3" />;
      case 'Scalability': return <Activity className="w-3 h-3" />;
      case 'Business Fit': return <Briefcase className="w-3 h-3" />;
      case 'Feature': return <Zap className="w-3 h-3" />;
    }
  }

  const columns: { id: Column; title: string; count: number }[] = [
    { id: 'backlog', title: 'AI Prioritized Backlog', count: 3 },
    { id: 'in-progress', title: 'In Progress', count: 1 },
    { id: 'review', title: 'AI/Human Review', count: 0 },
    { id: 'done', title: 'Done', count: 1 },
  ];

  return (
    <div className="flex flex-col h-full bg-zinc-50 dark:bg-[#09090b] p-4 md:p-6 overflow-hidden">
      {/* Header */}
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
            Automated Kanban Flow
          </h1>
          <p className="text-sm text-zinc-500 mt-1">Self-organizing backlog prioritized by Business Value → Security → Scalability</p>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
           <div className="relative flex-1 sm:w-64">
             <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500" />
             <input type="text" placeholder="Search tickets..." className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg pl-9 pr-4 py-2 text-sm text-zinc-900 dark:text-zinc-200 focus:outline-none focus:border-indigo-500 dark:focus:border-zinc-700 transition-colors" />
           </div>
           <button className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg p-2 transition-colors border border-transparent shadow shadow-indigo-600/20 shrink-0">
             <Plus className="w-5 h-5 sm:w-4 sm:h-4" />
           </button>
        </div>
      </header>

      {/* Board */}
      <div className="flex-1 flex gap-4 md:gap-5 overflow-x-auto pb-4 snap-x snap-mandatory sm:snap-none">
        {columns.map(col => (
          <div key={col.id} className="flex-1 min-w-[85vw] sm:min-w-[320px] max-w-[85vw] sm:max-w-[400px] flex flex-col bg-zinc-100/50 dark:bg-[#0c0c0e] rounded-2xl border border-zinc-200 dark:border-zinc-800/80 p-3 md:p-4 snap-center sm:snap-align-none">
            <div className="flex items-center justify-between mb-4 px-1">
              <h2 className="font-semibold text-zinc-800 dark:text-zinc-300 text-sm">{col.title}</h2>
              <span className="bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs px-2 py-0.5 rounded-full">{col.count}</span>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-3 pr-1 pb-2">
              {tickets.filter(t => t.column === col.id).map(ticket => (
                <div key={ticket.id} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 md:p-4 rounded-xl shadow-sm hover:shadow dark:shadow-none hover:border-zinc-300 dark:hover:border-zinc-700 cursor-grab active:cursor-grabbing transition-all group">
                  <div className="flex items-center justify-between mb-3 gap-2">
                    <span className={cn("text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded flex items-center gap-1 border shrink-0", getPriorityColor(ticket.priority))}>
                      {getPriorityIcon(ticket.priority)}
                      {ticket.priority}
                    </span>
                    <span className="text-xs font-mono text-zinc-500 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#0c0c0e] px-1.5 py-0.5 rounded shrink-0">
                      ORC-{ticket.id}
                    </span>
                  </div>
                  
                  <h3 className="text-[13px] md:text-sm font-medium text-zinc-900 dark:text-zinc-200 mb-4 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {ticket.title}
                  </h3>
                  
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <GitCommit className="w-3 h-3 text-zinc-400 dark:text-zinc-500 shrink-0" />
                      <span className="text-[10px] text-zinc-600 dark:text-zinc-500 font-mono bg-zinc-100 dark:bg-zinc-800/50 px-1.5 py-0.5 rounded truncate">[{ticket.agentGen}]</span>
                    </div>
                    <div className="flex items-center gap-1.5 pt-2 border-t border-zinc-100 dark:border-zinc-800">
                      <User className="w-3 h-3 text-indigo-500 dark:text-indigo-400 shrink-0" />
                      <span className="text-[11px] md:text-xs text-zinc-500 dark:text-zinc-400 font-medium truncate">Rec: <span className="text-zinc-700 dark:text-zinc-300">{ticket.assigneeRecommendation}</span></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
