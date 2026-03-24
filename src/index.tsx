import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import AppTheme from "./theme/Theme";
import App from "./App";


const queryClient = new QueryClient();

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
    <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={AppTheme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </QueryClientProvider>
);