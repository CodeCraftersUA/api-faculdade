module.exports = {
	"transform": {
		"^.+\\.jsx?$": "babel-jest",
	},
	preset: "ts-jest",
	testEnvironment: "node",
	moduleFileExtensions: ["js", "ts"],
	roots: ["<rootDir>/src"],
};