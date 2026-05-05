import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { LayoutDashboard, MessageSquareText, KanbanSquare, Mic, Menu, Terminal, PanelsTopLeft, Activity } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const navItems = [
    { to: "/", icon: LayoutDashboard, label: "Project Hub" },
    { to: "/chat", icon: Terminal, label: "Senior Dev Config" },
    { to: "/kanban", icon: KanbanSquare, label: "AI Backlog" },
    { to: "/meeting", icon: Mic, label: "Live Meeting" },
  ];

  return (
    <div className="flex h-screen bg-neutral-950 text-neutral-200 font-sans overflow-hidden selection:bg-emerald-500/30">
      {/* Sidebar */}
      <aside
        className={cn(
          "flex flex-col border-r border-neutral-800 bg-neutral-950 transition-all duration-300",
          isSidebarOpen ? "w-64" : "w-16"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-neutral-800">
          <div className={cn("flex items-center gap-2 overflow-hidden", !isSidebarOpen && "hidden")}>
            <PanelsTopLeft className="w-5 h-5 text-emerald-400" />
            <span className="font-semibold text-sm tracking-wide text-neutral-100 whitespace-nowrap">ORCHESTRATOR</span>
          </div>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-1 hover:bg-neutral-800 rounded-md transition-colors text-neutral-400 hover:text-neutral-200"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 py-4 flex flex-col gap-1 px-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-md transition-all duration-200 group text-sm font-medium",
                isActive 
                  ? "bg-neutral-800/80 text-emerald-400 border border-neutral-700/50" 
                  : "text-neutral-400 hover:bg-neutral-800/50 hover:text-neutral-200 border border-transparent"
              )}
            >
              <item.icon className={cn("w-4 h-4 shrink-0", "group-hover:scale-110 transition-transform duration-200")} />
              {isSidebarOpen && (
                <span className="whitespace-nowrap tracking-wide">{item.label}</span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className={cn("p-4 border-t border-neutral-800", !isSidebarOpen && "hidden")}>
          <div className="flex items-center gap-2 text-xs text-neutral-500 font-mono">
            <Activity className="w-3 h-3 text-emerald-500 animate-pulse" />
            <span>AI CORE: ONLINE</span>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        <Outlet />
      </main>
    </div>
  );
}
