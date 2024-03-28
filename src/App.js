import React from "react";
import './App.css';
import { DefaultLayout } from "./layout/DefaultLayout";

import { Entry } from "./page/entry/Entry.page";
import { Dashboard } from "./page/dashboard/Dashboard.page";

function App() {
  return (
    <div className="App">
      {/* {<Entry />} */}
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    </div>
  );
}

export default App;
