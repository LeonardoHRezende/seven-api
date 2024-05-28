module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    "^@seven/(.*)$": "<rootDir>/src/$1"
  }
};
