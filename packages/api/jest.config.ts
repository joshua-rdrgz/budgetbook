export default {
  preset: 'ts-jest/presets/js-with-ts-esm',
  transform: {
    '^.+\\.ts?$': ['ts-jest', { useESM: true }],
  },
  moduleNameMapper: {
    // sets base alias in testing environment
    '@/(.*)': '<rootDir>/src/$1',
  },
  testEnvironment: 'jest-environment-node',
  testPathIgnorePatterns: ['/dist/'],
};
