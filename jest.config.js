module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/components$1',
    '^@utils(.*)$': '<rootDir>/utils$1',
    '^@pages(.*)$': '<rootDir>/pages$1',
    '^@hooks(.*)$': '<rootDir>/hooks$1',
  },
}
