import { useState } from 'react';
import { Send, FileCode2, TerminalSquare, AlertCircle, PlayCircle, GitBranch, BrainCircuit, X, Menu } from 'lucide-react';
import { cn } from '../Layout';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  actionItem?: string;
}

export function SeniorDevChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: 'I\'ve reviewed the latest commits on `remediation/auth-fix`. You\'ve added the JWT validation, but how is state handled here when the token expires midway through a transaction?',
    },
    {
      id: '2',
      sender: 'user',
      text: 'Currently it just drops the request. We probably need a refresh interceptor.',
    },
    {
      id: '3',
      sender: 'ai',
      text: 'Dropping the request will lead to corrupted local state for the user if it was a multi-step form. I am appending an action item to the backlog.',
      actionItem: 'Implement JWT Refresh Interceptor for multi-step transactions.',
    }
  ]);
  const [input, setInput] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-full bg-white dark:bg-[#09090b] overflow-hidden text-zinc-900 dark:text-zinc-100 relative">
      
      {/* Mobile Codebase Tree Overlay Dropdown */}
      {isSidebarOpen && (
        <div className="md:hidden absolute inset-0 z-30 flex">
          <div className="w-[80vw] max-w-sm border-r border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#0c0c0e] flex flex-col h-full shadow-2xl">
            <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200 font-medium text-sm">
                <GitBranch className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                remediation/auth-fix
              </div>
              <button onClick={() => setIsSidebarOpen(false)} className="p-1 rounded hover:bg-zinc-200 dark:hover:bg-zinc-800">
                <X className="w-4 h-4 text-zinc-500" />
              </button>
            </div>
            {/* Same content as desktop sidebar */}
            <div className="flex-1 overflow-y-auto p-4 space-y-1">
               <div className="text-sm font-mono flex flex-col gap-2 text-zinc-600 dark:text-zinc-400">
                 <div className="flex items-center gap-2 hover:bg-zinc-200 dark:hover:bg-zinc-800/50 p-1.5 rounded cursor-pointer transition-colors">
                   <FileCode2 className="w-4 h-4 text-zinc-400 dark:text-zinc-500" /> src/middleware/auth.ts
                 </div>
                 <div className="flex items-center gap-2 hover:bg-indigo-50 dark:hover:bg-indigo-400/5 p-1.5 rounded cursor-pointer transition-colors text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-400/5">
                   <FileCode2 className="w-4 h-4" /> src/services/apiClient.ts
                 </div>
                 <div className="flex items-center gap-2 hover:bg-zinc-200 dark:hover:bg-zinc-800/50 p-1.5 rounded cursor-pointer transition-colors pt-4">
                   <TerminalSquare className="w-4 h-4 text-zinc-400 dark:text-zinc-500" /> Terminal Output
                 </div>
               </div>
               <div className="mt-8 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-[#09090b] overflow-hidden">
                 <div className="bg-zinc-100 dark:bg-zinc-900 px-3 py-2 text-xs font-mono text-zinc-600 dark:text-zinc-400 flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-700">
                   apiClient.ts <span className="text-zinc-400 dark:text-zinc-500">- Modifications</span>
                 </div>
                 <pre className="p-4 text-[10px] sm:text-xs font-mono text-zinc-800 dark:text-zinc-300 overflow-x-auto">
                   <code className="text-zinc-400 dark:text-zinc-500 block mb-1">// Previous</code>
                   <code className="text-rose-500 dark:text-rose-400 block mb-3 line-through">const token = localStorage.getItem('jwt');</code>
                   <code className="text-zinc-400 dark:text-zinc-500 block mb-1">// New</code>
                   <code className="text-emerald-600 dark:text-green-400 block bg-emerald-50 dark:bg-green-400/10 -mx-4 px-4 py-0.5">const userSession = await sessionManager.getValidToken();</code>
                   <code className="text-emerald-600 dark:text-green-400 block bg-emerald-50 dark:bg-green-400/10 -mx-4 px-4 py-0.5">if (!userSession) return null;</code>
                 </pre>
               </div>
            </div>
          </div>
          <div className="flex-1 bg-black/20 dark:bg-black/50 backdrop-blur-sm" onClick={() => setIsSidebarOpen(false)}></div>
        </div>
      )}

      {/* Codebase Tree / PR View (Desktop Side) */}
      <div className="hidden md:flex w-1/3 max-w-sm border-r border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#0c0c0e] flex-col">
        <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200 font-medium text-sm">
            <GitBranch className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
            remediation/auth-fix
          </div>
          <span className="text-xs font-mono text-zinc-600 dark:text-zinc-500 bg-zinc-200 dark:bg-zinc-800 px-2 py-1 rounded">+12 -4</span>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-1">
           <div className="text-sm font-mono flex flex-col gap-2 text-zinc-600 dark:text-zinc-400">
             <div className="flex items-center gap-2 hover:bg-zinc-200 dark:hover:bg-zinc-800/50 p-1.5 rounded cursor-pointer transition-colors">
               <FileCode2 className="w-4 h-4 text-zinc-400 dark:text-zinc-500" /> src/middleware/auth.ts
             </div>
             <div className="flex items-center gap-2 hover:bg-indigo-50 dark:hover:bg-indigo-400/5 p-1.5 rounded cursor-pointer transition-colors text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-400/5">
               <FileCode2 className="w-4 h-4" /> src/services/apiClient.ts
             </div>
             <div className="flex items-center gap-2 hover:bg-zinc-200 dark:hover:bg-zinc-800/50 p-1.5 rounded cursor-pointer transition-colors pt-4">
               <TerminalSquare className="w-4 h-4 text-zinc-400 dark:text-zinc-500" /> Terminal Output
             </div>
           </div>

           <div className="mt-8 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-[#09090b] overflow-hidden">
             <div className="bg-zinc-100 dark:bg-zinc-900 px-3 py-2 text-xs font-mono text-zinc-600 dark:text-zinc-400 flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-700">
               apiClient.ts <span className="text-zinc-400 dark:text-zinc-500">- Modifications</span>
             </div>
             <pre className="p-4 text-xs font-mono text-zinc-800 dark:text-zinc-300 overflow-x-auto">
               <code className="text-zinc-400 dark:text-zinc-500 block mb-1">// Previous</code>
               <code className="text-rose-500 dark:text-rose-400 block mb-3 line-through">const token = localStorage.getItem('jwt');</code>
               <code className="text-zinc-400 dark:text-zinc-500 block mb-1">// New</code>
               <code className="text-emerald-600 dark:text-green-400 block bg-emerald-50 dark:bg-green-400/10 -mx-4 px-4 py-0.5">const userSession = await sessionManager.getValidToken();</code>
               <code className="text-emerald-600 dark:text-green-400 block bg-emerald-50 dark:bg-green-400/10 -mx-4 px-4 py-0.5">if (!userSession) return null;</code>
             </pre>
           </div>
        </div>
      </div>

      {/* Senior Dev Interrogation Hub (Right / Main Side) */}
      <div className="flex-1 flex flex-col bg-white dark:bg-[#09090b]">
        <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 flex items-center justify-between z-10 px-4 md:px-6">
          <div className="flex items-center gap-3">
             <button 
               className="md:hidden p-2 -ml-2 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
               onClick={() => setIsSidebarOpen(true)}
             >
               <Menu className="w-5 h-5" />
             </button>
             <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-500/20 border border-indigo-200 dark:border-indigo-500/50 flex items-center justify-center shrink-0">
               <BrainCircuit className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
             </div>
             <div>
               <h2 className="text-[13px] md:text-sm font-semibold text-zinc-900 dark:text-zinc-100">Senior Dev Agent</h2>
               <div className="text-[11px] md:text-xs text-indigo-500 dark:text-indigo-400 flex items-center gap-1">
                 <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 animate-pulse"></span>
                 Analyzing PR...
               </div>
             </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
          {messages.map((msg) => (
            <div key={msg.id} className={cn("flex max-w-[90%] md:max-w-[80%]", msg.sender === 'user' ? "ml-auto flex-row-reverse" : "")}>
               <div className={cn("w-8 h-8 rounded-full shrink-0 flex items-center justify-center mt-1 border", 
                  msg.sender === 'user' ? "ml-3 bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 text-xs" : "mr-3 bg-indigo-50 dark:bg-indigo-500/10 border-indigo-200 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400"
               )}>
                 {msg.sender === 'user' ? 'U' : <BrainCircuit className="w-4 h-4" />}
               </div>
               <div className="flex flex-col gap-2 overflow-hidden">
                 <div className={cn("p-3 md:p-4 rounded-2xl text-[13px] md:text-sm leading-relaxed", 
                   msg.sender === 'user' 
                     ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-200 rounded-tr-sm" 
                     : "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300 rounded-tl-sm font-mono tracking-tight"
                 )}>
                   {msg.text}
                 </div>
                 
                 {msg.actionItem && (
                   <div className="bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 rounded-xl p-3 mt-1 flex items-start gap-2 md:gap-3">
                     <AlertCircle className="w-4 h-4 text-amber-500 dark:text-amber-400 shrink-0 mt-0.5" />
                     <div>
                       <div className="text-[10px] md:text-xs font-bold text-amber-600 dark:text-amber-500 uppercase tracking-wider mb-1">Action Item Generated</div>
                       <div className="text-[13px] md:text-sm text-zinc-800 dark:text-zinc-200">{msg.actionItem}</div>
                       <button className="text-[11px] md:text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 flex items-center gap-1 mt-2 transition-colors">
                         View in Backlog <PlayCircle className="w-3 h-3" />
                       </button>
                     </div>
                   </div>
                 )}
               </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 pb-safe">
          <form className="relative flex items-center" onSubmit={(e) => { e.preventDefault(); if(input) { setMessages([...messages, { id: Date.now().toString(), sender: 'user', text: input }]); setInput(''); } }}>
             <input 
               type="text" 
               value={input}
               onChange={(e) => setInput(e.target.value)}
               placeholder="Explain your architectural decision..." 
               className="w-full bg-white dark:bg-[#09090b] border border-zinc-200 dark:border-zinc-800 rounded-xl py-3 pl-4 pr-12 text-[13px] md:text-sm text-zinc-900 dark:text-zinc-200 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-zinc-300 dark:focus:border-zinc-600 transition-colors shadow-sm dark:shadow-none"
             />
             <button type="submit" className="absolute right-2 p-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-indigo-600/20" disabled={!input}>
               <Send className="w-4 h-4" />
             </button>
          </form>
        </div>
      </div>
    </div>
  );
}
