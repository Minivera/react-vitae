import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest/presets/js-with-ts',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  rootDir: './',
  modulePaths: ['<rootDir>'],
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  setupFiles: ['@testing-library/react/dont-cleanup-after-each'],
};

export default config;
