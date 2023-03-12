module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/index.ts',
    '!<rootDir>/src/**/*protocols.ts'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'jest-environment-node',
  preset: 'ts-jest',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
