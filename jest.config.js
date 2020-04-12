// const jestConfig = {
//   verbose: true,
//   testURL: "http://localhost/",
//   'transform': {
//     '^.+\\.jsx?$': 'babel-jest',
//   },
//   testMatch: ['**/__tests__/*.js?(x)'],
// }

// module.exports = jestConfig

module.exports = {
  collectCoverageFrom: ["src/**/*.{js,jsx,mjs}"],
  testMatch: [
    "<rootDir>/**/__tests__/**/*.{js,jsx,mjs}",
    "<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs}"
  ],
  testEnvironment: "node",
  testURL: "http://localhost",
  transform: {
    "^.+\\.(js|jsx|mjs)$": "<rootDir>/node_modules/babel-jest"
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"],
  moduleFileExtensions: [
    "web.js",
    "mjs",
    "js",
    "json",
    "web.jsx",
    "jsx",
    "node"
	],
	moduleNameMapper: {
		"\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
		"\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js"
	}
};
