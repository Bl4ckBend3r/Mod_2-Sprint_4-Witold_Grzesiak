import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <SwitchContainer>
      <Label>{theme === "light" ? "☀️" : "🌙"}</Label>
      <SwitchButton onClick={toggleTheme}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </SwitchButton>
    </SwitchContainer>
  );
};

export default ThemeSwitch;

const SwitchContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Label = styled.span`
  font-size: 1.5rem;
`;

const SwitchButton = styled.button`
  background: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.text};
  border: none;
  padding: 0.4rem 1rem;
  border-radius: 2rem;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;
