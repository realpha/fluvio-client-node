module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns:["./src/fluvio.spec.ts", "./dist",],
  testPathIgnorePatterns:["./src/fluvio.spec.ts"],
  globals: {
    'ts-jest': {
      tsconfig: "tsconfig.tests.json"
    }
  }
};
