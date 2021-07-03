import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Homepage from "./pages/Homepage"

const theme = createMuiTheme()

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
