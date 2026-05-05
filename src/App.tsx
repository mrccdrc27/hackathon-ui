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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="chat" element={<SeniorDevChat />} />
          <Route path="kanban" element={<KanbanBoard />} />
          <Route path="meeting" element={<LiveMeeting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

