import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Tasks from "./pages/Tasks";
import {BrowserRouter, Routes , Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
          <Route path="/tarefas" element={<Tasks />} />
            <Route path="/tarefas/:tarefaId" element={<Tasks/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
