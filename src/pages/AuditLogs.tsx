import { useState } from 'react';
import { ScrollText, Filter, Download, TerminalSquare } from 'lucide-react';
import { cn } from '../Layout';

export function AuditLogs() {
  const [logs] = useState([
    { id: 1, time: '2026-05-05 10:48:12', level: 'INFO', source: 'PM-Agent', message: 'Extracted 3 tickets from transcript ID-9842', hash: 'a1b2c3d' },
    { id: 2, time: '2026-05-05 10:45:21', level: 'WARN', source: 'SeniorDev-Agent', message: 'JWT expiry not handled in auth-service middleware', hash: 'f9e8d7c' },
    { id: 3, time: '2026-05-05 10:45:00', level: 'INFO', source: 'Github-Webhook', message: 'Received PR sync event for #102', hash: 'b4a5d6e' },
    { id: 4, time: '2026-05-05 09:30:11', level: 'ERROR', source: 'System', message: 'Failed to connect to Redis cache instance. Retrying...', hash: 'c7d8e9f' },
    { id: 5, time: '2026-05-05 09:30:15', level: 'INFO', source: 'System', message: 'Redis cache connection established.', hash: 'd1e2f3a' },
    { id: 6, time: '2026-05-05 08:00:00', level: 'INFO', source: 'Mgmt-Agent', message: 'Daily standup initialized. 4 participants invited.', hash: 'e5f6a7b' },
    { id: 7, time: '2026-05-05 07:45:33', level: 'INFO', source: 'System', message: 'Daily automated backup completed (3.2GB)', hash: 'f2a3b4c' },
    { id: 8, time: '2026-05-05 06:12:05', level: 'INFO', source: 'PM-Agent', message: 'Backlog grooming completed. 12 stale items archived.', hash: 'a5b6c7d' },
  ]);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'INFO': return 'text-sky-600 dark:text-sky-400';
      case 'WARN': return 'text-amber-600 dark:text-amber-400';
      case 'ERROR': return 'text-rose-600 dark:text-rose-400';
      default: return 'text-zinc-500 dark:text-zinc-400';
    }
  };

  return (
    <div className="flex flex-col h-full bg-zinc-50 dark:bg-[#09090b] p-4 md:p-6 overflow-hidden w-full">
      <header className="mb-4 md:mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
            <ScrollText className="w-5 h-5 md:w-6 md:h-6 text-indigo-600 dark:text-indigo-400" />
            System Audit Logs
          </h1>
          <p className="text-[13px] md:text-sm text-zinc-500 dark:text-zinc-500 mt-1">Immutable ledger of all agent decisions and system events.</p>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <button className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium flex items-center gap-2 transition-colors shadow-sm dark:shadow-none">
            <Filter className="w-3.5 h-3.5 md:w-4 md:h-4" /> Filter
          </button>
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium flex items-center gap-2 transition-colors shadow-sm shadow-indigo-600/20">
            <Download className="w-3.5 h-3.5 md:w-4 md:h-4" /> Export
          </button>
        </div>
      </header>

      <div className="flex-1 bg-white dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden flex flex-col shadow-sm dark:shadow-none min-h-0">
        <div className="bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 p-3 flex items-center gap-2">
          <TerminalSquare className="w-4 h-4 text-zinc-500 dark:text-zinc-500" />
          <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400">/var/log/aether-orchestrator.log</span>
        </div>
        
        <div className="flex-1 overflow-x-auto overflow-y-auto p-4 space-y-1 font-mono text-[11px] md:text-sm">
          <div className="min-w-[600px]">
            {logs.map((log) => (
              <div key={log.id} className="flex gap-2 sm:gap-4 hover:bg-zinc-100 dark:hover:bg-zinc-800/30 px-2 py-1.5 rounded group transition-colors">
                <span className="text-zinc-500 dark:text-zinc-600 shrink-0 w-32 md:w-44">{log.time}</span>
                <span className={cn("shrink-0 w-12 md:w-16 font-semibold", getLevelColor(log.level))}>[{log.level}]</span>
                <span className="text-indigo-600 dark:text-indigo-400/70 shrink-0 w-24 md:w-32 truncate">{log.source}</span>
                <span className="text-zinc-800 dark:text-zinc-300 flex-1">{log.message}</span>
                <span className="text-zinc-400 dark:text-zinc-700 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">commit:{log.hash}</span>
              </div>
            ))}
            {/* Fading bottom line to simulate ongoing logs */}
            <div className="flex gap-2 md:gap-4 px-2 py-1.5 opacity-50">
              <span className="text-zinc-500 dark:text-zinc-600 shrink-0 w-32 md:w-44">2026-05-05 06:00:00</span>
              <span className="text-sky-600 dark:text-sky-400 shrink-0 w-12 md:w-16 font-semibold">[INFO]</span>
              <span className="text-indigo-600 dark:text-indigo-400/70 shrink-0 w-24 md:w-32 truncate">System</span>
              <span className="text-zinc-800 dark:text-zinc-300 flex-1">Orchestrator boot sequence complete.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
