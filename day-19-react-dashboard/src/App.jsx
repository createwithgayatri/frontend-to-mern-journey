import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Dashboard from "./pages/Dashboard";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Dashboard />
        </ThemeProvider>
    );
}

export default App;