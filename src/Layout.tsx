import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { LayoutDashboard, MessageSquareText, KanbanSquare, Mic, Menu, Terminal, PanelsTopLeft, Activity, CalendarDays, FileText,Bot, ScrollText, Users, Sun, Moon, X } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useTheme } from './components/ThemeProvider';

export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { to: "/", icon: LayoutDashboard, label: "Project Hub" },
    { to: "/calendar", icon: CalendarDays, label: "Schedule & Standups" },
    { to: "/kanban", icon: KanbanSquare, label: "Backlog & Triage" },
    { to: "/meeting", icon: Mic, label: "Live Meeting" },
    { to: "/chat", icon: Terminal, label: "Senior Dev Config" },
    { to: "/notes", icon: FileText, label: "Notes & Artifacts" },
    { to: "/agents", icon: Bot, label: "Agent Workers" },
    { to: "/logs", icon: ScrollText, label: "Audit Logs" },
    { to: "/users", icon: Users, label: "Team Management" },
  ];

  return (
    <div className="flex h-[100dvh] bg-white dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 font-sans overflow-hidden selection:bg-indigo-500/30 transition-colors">
      
      {/* Mobile Top Header (Visible only on small screens) */}
      <div className="md:hidden absolute top-0 left-0 right-0 h-16 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-[#0c0c0e]/80 backdrop-blur-md z-40 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20 shrink-0">
            <span className="font-bold text-white tracking-tighter text-xs">AE</span>
          </div>
          <span className="font-semibold px-2 text-sm tracking-wide dark:text-zinc-100">ORCHESTRATOR</span>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 -mr-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 transition-colors"
          >
            {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed md:relative flex flex-col border-r border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#0c0c0e] h-[100dvh] transition-all duration-300 z-50",
          isSidebarOpen ? "w-64 translate-x-0" : "-translate-x-full md:translate-x-0 md:w-64"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-2 overflow-hidden">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20 shrink-0">
              <span className="font-bold text-white tracking-tighter text-xs">AE</span>
            </div>
            <span className="font-semibold text-sm tracking-wide text-zinc-900 dark:text-zinc-100 whitespace-nowrap">ORCHESTRATOR</span>
          </div>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden p-1 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-md transition-colors text-zinc-500 dark:text-zinc-400"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 py-4 flex flex-col gap-2 px-3 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsSidebarOpen(false)}
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-2 py-2 rounded-md transition-all duration-200 group text-sm font-medium",
                isActive 
                  ? "bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100" 
                  : "text-zinc-600 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/50"
              )}
            >
              <item.icon className={cn("w-5 h-5 shrink-0", "group-hover:scale-110 transition-transform duration-200")} />
              <span className="whitespace-nowrap tracking-wide">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-4 mt-auto border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-500 font-mono">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span>AI CORE: ONLINE</span>
            </div>
            <button 
              onClick={toggleTheme}
              className="hidden md:flex p-1.5 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-500 transition-colors"
              title="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden relative pt-16 md:pt-0">
        <Outlet />
      </main>
    </div>
  );
}
