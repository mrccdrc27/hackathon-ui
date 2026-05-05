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
  { id: '2', title: 'Database Connection Pool Optimization', priority: 'Scalability', column: 'in-progress', agentGen: 'Scrum Agent', assigneeRecommendation: 'Sarah (DBA)' },
  { id: '3', title: 'Add Stripe Payment Webhook', priority: 'Business Fit', column: 'backlog', agentGen: 'PM Agent', assigneeRecommendation: 'TBD' },
  { id: '4', title: 'User Profile Avatar Upload', priority: 'Feature', column: 'done', agentGen: 'Human', assigneeRecommendation: 'Jamie (Frontend)' },
  { id: '5', title: 'CORS policy missing on API gateway', priority: 'Security', column: 'backlog', agentGen: 'Scrum Agent', assigneeRecommendation: 'Alex (Auth Specialist)' },
];

export function KanbanBoard() {
  const [tickets] = useState<Ticket[]>(mockTickets);

  const getPriorityColor = (p: Priority) => {
    switch(p) {
      case 'Security': return 'text-rose-400 bg-rose-400/10 border-rose-400/20';
      case 'Scalability': return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
      case 'Business Fit': return 'text-indigo-400 bg-indigo-400/10 border-indigo-400/20';
      case 'Feature': return 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20';
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
    <div className="flex flex-col h-full bg-neutral-950 p-6 overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-neutral-100 flex items-center gap-2">
            Automated Kanban Flow
          </h1>
          <p className="text-sm text-neutral-500 mt-1">Self-organizing backlog prioritized by Business Value → Security → Scalability</p>
        </div>
        <div className="flex items-center gap-3">
           <div className="relative">
             <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
             <input type="text" placeholder="Search tickets..." className="bg-neutral-900 border border-neutral-800 rounded-lg pl-9 pr-4 py-2 text-sm text-neutral-200 focus:outline-none focus:border-neutral-600" />
           </div>
           <button className="bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg p-2 transition-colors border border-neutral-700">
             <Plus className="w-4 h-4" />
           </button>
        </div>
      </header>

      {/* Board */}
      <div className="flex-1 flex gap-5 overflow-x-auto pb-4">
        {columns.map(col => (
          <div key={col.id} className="flex-1 min-w-[320px] flex flex-col bg-neutral-900/50 rounded-2xl border border-neutral-800/80 p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-neutral-300 text-sm">{col.title}</h2>
              <span className="bg-neutral-800 text-neutral-400 text-xs px-2 py-0.5 rounded-full">{col.count}</span>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-3 pr-1">
              {tickets.filter(t => t.column === col.id).map(ticket => (
                <div key={ticket.id} className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl shadow-sm hover:border-neutral-700 cursor-grab active:cursor-grabbing transition-colors group">
                  <div className="flex items-center justify-between mb-3">
                    <span className={cn("text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded flex items-center gap-1 border", getPriorityColor(ticket.priority))}>
                      {getPriorityIcon(ticket.priority)}
                      {ticket.priority}
                    </span>
                    <span className="text-xs font-mono text-neutral-500 border border-neutral-800 bg-neutral-950 px-1.5 py-0.5 rounded">
                      ORC-{ticket.id}
                    </span>
                  </div>
                  
                  <h3 className="text-sm font-medium text-neutral-200 mb-4 leading-snug group-hover:text-emerald-400 transition-colors">
                    {ticket.title}
                  </h3>
                  
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1.5">
                      <GitCommit className="w-3 h-3 text-neutral-500" />
                      <span className="text-[10px] text-neutral-500 font-mono bg-neutral-800/50 px-1.5 py-0.5 rounded">[{ticket.agentGen}]</span>
                    </div>
                    <div className="flex items-center gap-1.5 pt-2 border-t border-neutral-800">
                      <User className="w-3 h-3 text-indigo-400" />
                      <span className="text-xs text-neutral-400 font-medium">Rec: <span className="text-neutral-300">{ticket.assigneeRecommendation}</span></span>
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
