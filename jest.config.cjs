module.exports = {
    verbose: true, // Показывает подробный вывод тестов
    roots: ['<rootDir>/src/tests'], // Тесты будут искаться в каталоге tests
    collectCoverageFrom: [
      'src/**/*.{js,jsx,ts,tsx}', // Собирать покрытие для всех файлов в src
      '!src/**/*.d.ts', // Исключить декларации типов
    ],
    testEnvironment: 'jsdom', // Среда тестирования для React
    transform: {
      '^.+\\.(ts|tsx)?$': [
        'ts-jest',
        {
          tsconfig: '<rootDir>/tsconfig.json',
        },
      ],
    },
    
    moduleNameMapper: {
      '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy', // Мок для CSS-модулей
    },
    setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'], // Настройки перед тестами
  };
  