import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  setupFiles: ['@testing-library/react/dont-cleanup-after-each'],
};

export default config;
