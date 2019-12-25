import React from 'react';
import Panel from "./view/Panel";
import FomularProvider from "./context/FomularProvider";

const App = () => (
  <FomularProvider>
    <Panel/>
  </FomularProvider>
);

export default App;
