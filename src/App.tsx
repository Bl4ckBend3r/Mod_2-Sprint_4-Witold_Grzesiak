import styled, { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import GlobalStyle from "./styles/GlobalStyle";
import { lightTheme } from "./themes/light";
import { darkTheme } from "./themes/dark";

const AppContent = () => {
  const { theme } = useTheme();
  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <StyledThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Container>
        <h1>Disney Characters</h1>
      </Container>
    </StyledThemeProvider>
  );
};

const Container = styled.div`
  padding: 2rem;
`;

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
