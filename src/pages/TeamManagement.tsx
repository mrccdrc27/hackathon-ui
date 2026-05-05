import { useState } from 'react';
import { Users, Mail, Phone, MapPin, Search, Shield, Zap, CircleDashed } from 'lucide-react';
import { cn } from '../Layout';

export function TeamManagement() {
  const [team] = useState([
    { id: 1, name: 'Sarah Chen', role: 'Lead Database Admin', email: 'sarah.chen@company.com', avatar: 'SC', workload: 85, activeTickets: 4, skills: ['Postgres', 'Redis', 'Scaling'] },
    { id: 2, name: 'Alex Rodriguez', role: 'Security & Auth Specialist', email: 'alex.r@company.com', avatar: 'AR', workload: 60, activeTickets: 2, skills: ['OAuth', 'Cryptography', 'Go'] },
    { id: 3, name: 'Jamie Taylor', role: 'Frontend Architect', email: 'jamie.t@company.com', avatar: 'JT', workload: 40, activeTickets: 1, skills: ['React', 'TypeScript', 'UI/UX'] },
    { id: 4, name: 'David Kim', role: 'DevOps Engineer', email: 'dkim@company.com', avatar: 'DK', workload: 95, activeTickets: 7, skills: ['Kubernetes', 'CI/CD', 'AWS'] },
  ]);

  return (
    <div className="flex flex-col h-full bg-zinc-50 dark:bg-[#09090b] p-4 md:p-6 overflow-hidden w-full">
      <header className="mb-4 md:mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
            <Users className="w-5 h-5 md:w-6 md:h-6 text-indigo-600 dark:text-indigo-400" />
            Team Directory & Agent Pairing
          </h1>
          <p className="text-[13px] md:text-sm text-zinc-500 dark:text-zinc-500 mt-1">Manage human developers. PM Agent routes tasks based on workload and skills.</p>
        </div>
        <div className="relative w-full md:w-auto">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Search team members..." 
            className="w-full md:w-64 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md py-2 pl-9 pr-4 text-sm text-zinc-900 dark:text-zinc-200 focus:outline-none focus:border-zinc-300 dark:focus:border-zinc-700 transition-colors shadow-sm dark:shadow-none"
          />
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 overflow-y-auto pb-4">
        {team.map((member) => (
          <div key={member.id} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden flex flex-col group hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors shadow-sm dark:shadow-none cursor-pointer relative">
            <div className="h-20 bg-gradient-to-r from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 w-full relative">
               <div className="absolute -bottom-8 left-6 w-14 h-14 md:w-16 md:h-16 rounded-xl border-4 border-white dark:border-zinc-900 bg-indigo-600 dark:bg-indigo-600 flex items-center justify-center shadow-lg">
                 <span className="text-base md:text-lg font-bold text-white tracking-wider">{member.avatar}</span>
               </div>
            </div>
            
            <div className="pt-10 md:pt-12 px-5 md:px-6 pb-5 md:pb-6 flex-1 flex flex-col">
              <h3 className="text-base md:text-lg font-semibold text-zinc-900 dark:text-zinc-100">{member.name}</h3>
              <p className="text-[13px] md:text-sm text-zinc-500 dark:text-zinc-400 mb-4">{member.role}</p>

              <div className="space-y-2 mb-4 md:mb-6">
                 <div className="flex items-center gap-2 text-xs md:text-[13px] text-zinc-600 dark:text-zinc-500">
                   <Mail className="w-3.5 h-3.5" />
                   <span className="truncate">{member.email}</span>
                 </div>
              </div>

              <div className="mt-auto">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[11px] md:text-xs font-medium text-zinc-500 dark:text-zinc-400">Current Workload</span>
                  <span className={cn("text-[11px] md:text-xs font-bold", member.workload > 80 ? "text-rose-600 dark:text-rose-400" : "text-emerald-600 dark:text-green-400")}>{member.workload}%</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden mb-4">
                  <div 
                    className={cn("h-full rounded-full transition-all", member.workload > 80 ? "bg-rose-500" : "bg-emerald-500 dark:bg-green-500")} 
                    style={{ width: `${member.workload}%` }}
                  />
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <CircleDashed className="w-3.5 h-3.5 md:w-4 md:h-4 text-zinc-400 dark:text-zinc-500" />
                  <span className="text-[13px] md:text-sm text-zinc-700 dark:text-zinc-300">{member.activeTickets} Active Tickets</span>
                </div>

                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">Agent Routing Skills</div>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {member.skills.map(skill => (
                      <span key={skill} className="px-2 py-0.5 md:py-1 bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-[10px] md:text-xs rounded border border-zinc-200 dark:border-zinc-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Add New Member Tile */}
        <div className="bg-zinc-50/50 dark:bg-[#0c0c0e] border border-dashed border-zinc-300 dark:border-zinc-800 rounded-2xl flex flex-col items-center justify-center text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors cursor-pointer min-h-[300px] md:min-h-[360px] group shadow-sm dark:shadow-none">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center mb-2 md:mb-3 group-hover:scale-110 transition-transform shadow-sm dark:shadow-none">
            <Shield className="w-4 h-4 md:w-5 md:h-5 text-zinc-400 dark:text-zinc-500" />
          </div>
          <span className="font-medium text-[13px] md:text-sm text-zinc-600 dark:text-zinc-400">Add Team Member</span>
          <span className="text-[11px] md:text-xs mt-1 text-zinc-400 dark:text-zinc-600">Integrate via IAM or Okta</span>
        </div>
      </div>
    </div>
  );
}
