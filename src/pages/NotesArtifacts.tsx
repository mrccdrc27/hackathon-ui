import { useState } from 'react';
import { FileText, Search, Plus, Folder, File, MessageSquareQuote, FileCode2, Clock, MoreVertical, Menu, X } from 'lucide-react';
import { cn } from '../Layout';

export function NotesArtifacts() {
  const [folders] = useState([
    { id: 1, name: 'Standup Transcripts', count: 42, icon: MessageSquareQuote, color: 'text-amber-500 dark:text-amber-400' },
    { id: 2, name: 'Architecture Docs', count: 12, icon: FileCode2, color: 'text-indigo-600 dark:text-indigo-400' },
    { id: 3, name: 'PR Summaries (AI)', count: 156, icon: FileText, color: 'text-emerald-600 dark:text-emerald-400' },
  ]);

  const [recentFiles] = useState([
    { id: 1, name: 'June 24 Standup Extraction.md', date: '2 hours ago', type: 'transcript', size: '12 KB', author: 'PM Agent' },
    { id: 2, name: 'auth-service-v3 Schema Design.pdf', date: '1 day ago', type: 'doc', size: '1.2 MB', author: 'Human (Sarah)' },
    { id: 3, name: 'Redis Pool Exhaustion RCA.md', date: '2 days ago', type: 'doc', size: '45 KB', author: 'Senior Dev Agent' },
    { id: 4, name: 'Sprint 12 Backlog Draft.json', date: '3 days ago', type: 'data', size: '8 KB', author: 'PM Agent' },
  ]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-full bg-zinc-50 dark:bg-[#09090b] overflow-hidden w-full relative">
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-30 transition-opacity" 
          onClick={() => setIsSidebarOpen(false)} 
        />
      )}

      {/* Sidebar for Notes */}
      <div className={cn(
        "absolute md:relative inset-y-0 left-0 w-64 border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e] flex flex-col z-40 transition-transform duration-300 ease-in-out md:translate-x-0 shadow-2xl md:shadow-none",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
          <h2 className="font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
            <Folder className="w-5 h-5 md:w-4 md:h-4 text-zinc-400" />
            Knowledge Base
          </h2>
          <button 
            className="md:hidden p-1 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-3 md:p-4">
          <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white rounded-md py-2 md:py-2.5 text-xs md:text-sm font-medium transition-colors shadow shadow-indigo-600/20 flex items-center justify-center gap-2">
            <Plus className="w-4 h-4" /> New Document
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-2">
          <div className="text-[10px] md:text-xs font-semibold text-zinc-500 uppercase tracking-wider px-2 mb-2 mt-2">Collections</div>
          {folders.map(folder => (
            <div key={folder.id} className="flex items-center justify-between p-2 md:p-2.5 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800/50 cursor-pointer group transition-colors">
               <div className="flex items-center gap-2">
                 <folder.icon className={cn("w-4 h-4", folder.color)} />
                 <span className="text-sm text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100">{folder.name}</span>
               </div>
               <span className="text-xs text-zinc-500 bg-zinc-100 dark:bg-zinc-900 px-1.5 py-0.5 rounded">{folder.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-14 md:h-16 border-b border-zinc-200 dark:border-zinc-800 flex items-center gap-4 px-4 md:px-6 bg-white dark:bg-[#09090b] shrink-0">
           <button 
             className="md:hidden p-1.5 -ml-1.5 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md"
             onClick={() => setIsSidebarOpen(true)}
           >
             <Menu className="w-5 h-5" />
           </button>
           <div className="relative flex-1 md:w-96 md:flex-none">
             <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
             <input 
               type="text" 
               placeholder="Search knowledge graph..." 
               className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md py-1.5 md:py-2 pl-9 pr-4 text-xs md:text-sm text-zinc-900 dark:text-zinc-200 focus:outline-none focus:border-zinc-300 dark:focus:border-zinc-700 transition-colors shadow-sm dark:shadow-none"
             />
           </div>
        </header>

        <div className="flex-1 p-4 md:p-6 overflow-y-auto">
           <h3 className="text-[11px] md:text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3 md:mb-4 flex items-center gap-2">
             <Clock className="w-3.5 h-3.5 md:w-4 md:h-4" /> Recent Artifacts
           </h3>
           
           <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm dark:shadow-none min-h-0">
             <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse min-w-[700px]">
                 <thead>
                   <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#0c0c0e]">
                     <th className="px-4 py-3 text-xs font-semibold text-zinc-500 font-sans w-[45%] md:w-1/2">Name</th>
                     <th className="px-4 py-3 text-xs font-semibold text-zinc-500 font-sans">Created By</th>
                     <th className="px-4 py-3 text-xs font-semibold text-zinc-500 font-sans">Date</th>
                     <th className="px-4 py-3 text-xs font-semibold text-zinc-500 font-sans text-right">Size</th>
                     <th className="px-4 py-3 text-xs font-semibold text-zinc-500 font-sans w-10"></th>
                   </tr>
                 </thead>
                 <tbody>
                   {recentFiles.map(file => (
                     <tr key={file.id} className="border-b border-zinc-100 dark:border-zinc-800/50 hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors cursor-pointer group">
                       <td className="px-4 py-3 md:py-4 flex items-center gap-3">
                         <File className={cn("w-4 h-4 shrink-0", file.type === 'transcript' ? 'text-amber-500 dark:text-amber-400' : file.type === 'doc' ? 'text-indigo-600 dark:text-indigo-400' : 'text-emerald-600 dark:text-emerald-400')} />
                         <span className="text-xs md:text-sm font-medium text-zinc-900 dark:text-zinc-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors truncate">{file.name}</span>
                       </td>
                       <td className="px-4 py-3 md:py-4">
                         <span className="text-[10px] md:text-xs text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-md border border-zinc-200 dark:border-zinc-700/50 whitespace-nowrap">{file.author}</span>
                       </td>
                       <td className="px-4 py-3 md:py-4 text-xs md:text-sm text-zinc-500 dark:text-zinc-400 whitespace-nowrap">{file.date}</td>
                       <td className="px-4 py-3 md:py-4 text-xs md:text-sm text-zinc-500 dark:text-zinc-500 font-mono text-right whitespace-nowrap">{file.size}</td>
                       <td className="px-4 py-3 md:py-4 text-right">
                          <button className="text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300 p-1 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                            <MoreVertical className="w-4 h-4" />
                          </button>
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
           </div>

           {/* Preview pane placeholder */}
           <div className="mt-4 md:mt-6 bg-zinc-50 dark:bg-[#0c0c0e] border border-dashed border-zinc-300 dark:border-zinc-800 rounded-xl p-6 md:p-8 flex flex-col items-center justify-center text-zinc-500 min-h-[200px] md:min-h-[300px]">
             <FileText className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4 text-zinc-400 dark:text-zinc-700" />
             <p className="text-[13px] md:text-sm font-medium text-zinc-600 dark:text-zinc-500">Select a document to preview its contents.</p>
             <p className="text-[11px] md:text-xs text-zinc-500 dark:text-zinc-600 mt-1">AI-generated artifacts are read-only for humans.</p>
           </div>
        </div>
      </div>
    </div>
  );
}
