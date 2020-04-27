// jest.config.js
module.exports = {
  "verbose": true,
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  "globals": {
    "ts-jest": {
      "tsConfig": "tsconfig.json"
    }
  },
  "testMatch": [
    "**/__tests__/*.+(ts|tsx|js)"
  ]
};
