module.exports = {
    verbose: true,
    roots: ['<rootDir>/src/tests'],
    collectCoverageFrom: [
      'src/**/*.{js,jsx,ts,tsx}',
      '!src/**/*.d.ts',
    ],
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(ts|tsx)?$': [
        'ts-jest',
        {
          tsconfig: '<rootDir>/tsconfig.json',
        },
      ],
    },
    
    moduleNameMapper: {
      '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
  };
  