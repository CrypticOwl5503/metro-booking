import React from "react";
import './App.css';
import { DefaultLayout } from "./layout/DefaultLayout";
import { TicketLists } from "./page/ticket-list/TicketLists.page";

// import { Entry } from "./page/entry/Entry.page";
import { AddTicket } from "./page/new-ticket/AddTicket.page";

function App() {
  return (
    <div className="App">
      {/* {<Entry />} */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <AddTicket /> */}
        <TicketLists />
      </DefaultLayout>
    </div>
  );
}

export default App;
