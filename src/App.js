import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme()

function App() {
  return (
    <ThemeProvider theme={theme}>
      
    </ThemeProvider>
  );
}

export default App;
