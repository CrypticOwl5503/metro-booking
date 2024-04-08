import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { DefaultLayout } from "./layout/DefaultLayout";
import { TicketLists } from "./page/ticket-list/TicketLists.page";
import { Ticket } from "./page/ticket/Ticket.page";
import { Entry } from "./page/entry/Entry.page";
import { AddTicket } from "./page/new-ticket/AddTicket.page";
import { Dashboard } from "./page/dashboard/Dashboard.page";
import { PrivateRoute } from "./components/private-route/PrivateRoute.comp";

function App() {
  return (
    <div className="App">
      <Router>

          <Routes>
            <Route path="/" element={<PrivateRoute><Entry /></PrivateRoute>} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/add-ticket" element={<PrivateRoute><AddTicket /></PrivateRoute>} />
            <Route path="/tickets" element={<PrivateRoute><TicketLists /></PrivateRoute>} />
            <Route path="/ticket/:tId" element={<PrivateRoute><Ticket /></PrivateRoute>} />
          </Routes>

      </Router>
    </div>
  );
}

export default App;
