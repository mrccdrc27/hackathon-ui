/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { Dashboard } from './pages/Dashboard';
import { SeniorDevChat } from './pages/SeniorDevChat';
import { KanbanBoard } from './pages/KanbanBoard';
import { LiveMeeting } from './pages/LiveMeeting';
import { PlaceholderPage } from './pages/Placeholder';
import { AgentWorkers } from './pages/AgentWorkers';
import { AuditLogs } from './pages/AuditLogs';
import { TeamManagement } from './pages/TeamManagement';
import { NotesArtifacts } from './pages/NotesArtifacts';
import { ThemeProvider } from './components/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="calendar" element={<PlaceholderPage title="Schedule & Standups" />} />
            <Route path="kanban" element={<KanbanBoard />} />
            <Route path="meeting" element={<LiveMeeting />} />
            <Route path="chat" element={<SeniorDevChat />} />
            <Route path="notes" element={<NotesArtifacts />} />
            <Route path="agents" element={<AgentWorkers />} />
            <Route path="logs" element={<AuditLogs />} />
            <Route path="users" element={<TeamManagement />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

