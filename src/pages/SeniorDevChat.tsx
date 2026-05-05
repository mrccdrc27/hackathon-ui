import { useState } from 'react';
import { Send, FileCode2, TerminalSquare, AlertCircle, PlayCircle, GitBranch, BrainCircuit } from 'lucide-react';
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

  return (
    <div className="flex h-full bg-neutral-950 overflow-hidden">
      
      {/* Codebase Tree / PR View (Left Side) */}
      <div className="w-1/3 border-r border-neutral-800 bg-neutral-900 flex flex-col">
        <div className="p-4 border-b border-neutral-800 flex items-center justify-between bg-neutral-900">
          <div className="flex items-center gap-2 text-neutral-200 font-medium text-sm">
            <GitBranch className="w-4 h-4 text-emerald-400" />
            remediation/auth-fix
          </div>
          <span className="text-xs font-mono text-neutral-500 bg-neutral-800 px-2 py-1 rounded">+12 -4</span>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-1">
           {/* Mock File Tree */}
           <div className="text-sm font-mono flex flex-col gap-2 text-neutral-400">
             <div className="flex items-center gap-2 hover:bg-neutral-800/50 p-1 rounded cursor-pointer transition-colors">
               <FileCode2 className="w-4 h-4 text-neutral-500" /> src/middleware/auth.ts
             </div>
             <div className="flex items-center gap-2 hover:bg-neutral-800/50 p-1 rounded cursor-pointer transition-colors text-emerald-400 bg-emerald-400/5">
               <FileCode2 className="w-4 h-4" /> src/services/apiClient.ts
             </div>
             <div className="flex items-center gap-2 hover:bg-neutral-800/50 p-1 rounded cursor-pointer transition-colors pt-4">
               <TerminalSquare className="w-4 h-4 text-neutral-500" /> Terminal Output
             </div>
           </div>

           {/* Code Snippet Window */}
           <div className="mt-8 border border-neutral-800 rounded-lg bg-neutral-950 overflow-hidden">
             <div className="bg-neutral-800 px-3 py-2 text-xs font-mono text-neutral-400 flex items-center gap-2 border-b border-neutral-700">
               apiClient.ts <span className="text-neutral-500">- Modifications</span>
             </div>
             <pre className="p-4 text-xs font-mono text-neutral-300 overflow-x-auto">
               <code className="text-neutral-500 block mb-1">// Previous</code>
               <code className="text-rose-400 block mb-3 line-through">const token = localStorage.getItem('jwt');</code>
               <code className="text-neutral-500 block mb-1">// New</code>
               <code className="text-emerald-400 block bg-emerald-400/10 -mx-4 px-4 py-0.5">const userSession = await sessionManager.getValidToken();</code>
               <code className="text-emerald-400 block bg-emerald-400/10 -mx-4 px-4 py-0.5">if (!userSession) return null;</code>
             </pre>
           </div>
        </div>
      </div>

      {/* Senior Dev Interrogation Hub (Right Side) */}
      <div className="flex-1 flex flex-col bg-neutral-950">
        <div className="p-4 border-b border-neutral-800 bg-neutral-900 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center">
               <BrainCircuit className="w-4 h-4 text-emerald-400" />
             </div>
             <div>
               <h2 className="text-sm font-semibold text-neutral-100">Senior Dev Agent</h2>
               <div className="text-xs text-emerald-400 flex items-center gap-1">
                 <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                 Analyzing PR...
               </div>
             </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((msg) => (
            <div key={msg.id} className={cn("flex max-w-[80%]", msg.sender === 'user' ? "ml-auto flex-row-reverse" : "")}>
               <div className={cn("w-8 h-8 rounded-full shrink-0 flex items-center justify-center mt-1 border", 
                  msg.sender === 'user' ? "ml-3 bg-neutral-800 border-neutral-700 text-neutral-400 text-xs" : "mr-3 bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
               )}>
                 {msg.sender === 'user' ? 'U' : <BrainCircuit className="w-4 h-4" />}
               </div>
               <div className="flex flex-col gap-2 overflow-hidden">
                 <div className={cn("p-4 rounded-2xl text-sm leading-relaxed", 
                   msg.sender === 'user' 
                     ? "bg-neutral-800 text-neutral-200 rounded-tr-sm" 
                     : "bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-tl-sm font-mono tracking-tight"
                 )}>
                   {msg.text}
                 </div>
                 
                 {msg.actionItem && (
                   <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3 mt-1 flex items-start gap-3">
                     <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                     <div>
                       <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">Action Item Generated</div>
                       <div className="text-sm text-neutral-200">{msg.actionItem}</div>
                       <button className="text-xs text-neutral-400 hover:text-neutral-200 flex items-center gap-1 mt-2 transition-colors">
                         View in Backlog <PlayCircle className="w-3 h-3" />
                       </button>
                     </div>
                   </div>
                 )}
               </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-neutral-800 bg-neutral-900">
          <form className="relative flex items-center" onSubmit={(e) => { e.preventDefault(); if(input) { setMessages([...messages, { id: Date.now().toString(), sender: 'user', text: input }]); setInput(''); } }}>
             <input 
               type="text" 
               value={input}
               onChange={(e) => setInput(e.target.value)}
               placeholder="Explain your architectural decision..." 
               className="w-full bg-neutral-950 border border-neutral-800 rounded-xl py-3 pl-4 pr-12 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors"
             />
             <button type="submit" className="absolute right-2 p-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled={!input}>
               <Send className="w-4 h-4" />
             </button>
          </form>
        </div>
      </div>
    </div>
  );
}
