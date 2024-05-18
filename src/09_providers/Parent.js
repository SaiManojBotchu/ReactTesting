import { useTheme } from './useThemeProvider';

function Parent() {
  const { isDark } = useTheme();
  return <h6>{isDark ? 'Dark mode' : 'Light mode'}</h6>;
}
export default Parent;
