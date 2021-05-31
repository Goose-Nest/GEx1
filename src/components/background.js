import { light } from '../lib/color.js';

export default (theme) => `
body {
  --background-primary: ${theme.background};
  --background-secondary: ${light(theme.background, 0.8)};
  --background-secondary-alt: ${light(theme.background, 0.7)};
  --background-tertiary: ${light(theme.background, 0.6)};
  --background-accent: ${light(theme.background, 1.2)};
  --background-floating: ${light(theme.background, 0.5)};
}
`;