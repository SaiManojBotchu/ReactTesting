import { render } from '@testing-library/react';
import ThemeProvider from '../useThemeProvider';

const customRender = (component, options) => {
  return render(component, { wrapper: ThemeProvider, ...options });
};

export { customRender as render };
