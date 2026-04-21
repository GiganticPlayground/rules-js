"use strict";
const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
	{
		ignores: ["coverage/**", ".nyc_output/**", "node_modules/**", "docs/**"],
	},
	{
		...js.configs.recommended,
		languageOptions: {
			ecmaVersion: 2020,
			sourceType: "commonjs",
			globals: {
				...globals.node,
				...globals.jest,
			},
		},
		rules: {
			...js.configs.recommended.rules,
			"no-console": 1,
			"strict": [2, "global"],
			"quotes": [2, "double", "avoid-escape"],
			"indent": [1, "tab"],
			"no-unused-vars": [1, { "args": "none" }],
		},
	},
];
