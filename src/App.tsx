import React from "react";
import AppRouter from "./router/AppRouter";
import { useQuery } from "@tanstack/react-query";


const App: React.FC = () => {
  return (
    <AppRouter />
  );
}

export default App;