/* eslint-disable */

module.exports = {
	// http://eslint.org/docs/rules/
	// gist.githubusercontent.com/cletusw/e01a85e399ab563b1236/raw/1d10c27a505f0fba1ea9bfd60313f00ea57639b1/.eslintrc

	"parser": "@babel/eslint-parser",

	"parserOptions":{
		"babelOptions":{
			"configFile": "./conf/babel.config.js"
		}
	},

	"env": {
		"es6": true,
		"jquery": false,			// jquery global variables.
		"browser": true,		 // browser global variables.
		"node": true,				// Node.js global variables and Node.js-specific rules.
		"amd": false,				 // defines require() and define() as global variables as per the amd spec.
		"mocha": false,			 // adds all of the Mocha testing global variables.
		"jasmine": false,		 // adds all of the Jasmine testing global variables for version 1.3 and 2.0.
		"phantomjs": false,	 // phantomjs global variables.
		"prototypejs": false, // prototypejs global variables.
		"shelljs": false,		  // shelljs global variables.
		"commonjs": true,
		"es2020": true,       // New global variables such as BigInt
	},

	"globals": {
		"APP_CONFIG": true,
		"KeyEvent": true,

		/* CB2Stuff */
		"Ajax": true,
		"Selector": true,
		"Map": true
	},

	"plugins": [
		"react"
	],


	/*
	"off" or 0 - turn the rule off
	"warn" or 1 - turn the rule on as a warning (doesn't affect exit code)
	"error" or 2 - turn the rule on as an error (exit code will be 1)
	*/

	"rules": {
		////////// Possible Errors //////////

		"comma-dangle": [2, "never"],				 // disallow trailing commas in object literals
		"no-cond-assign": 0,					// disallow assignment in conditional expressions
		"no-console": 0,							// disallow use of console (off by default in the node environment)
		"no-constant-condition": 1,	 // disallow use of constant expressions in conditions
		"no-control-regex": 0,				// disallow control characters in regular expressions
		"no-debugger": 0,						 // disallow use of debugger
		"no-dupe-keys": 1,						// disallow duplicate keys when creating object literals
		"no-empty": 1,								// disallow empty statements
		"no-empty-character-class": 1,					// disallow the use of empty character classes in regular expressions
		"no-ex-assign": 1,						// disallow assigning to the exception in a catch block
		"no-extra-boolean-cast": 1,	 // disallow double-negation boolean casts in a boolean context
		"no-extra-parens": 0,				 // disallow unnecessary parentheses (off by default)
		"no-extra-semi": 1,					 // disallow unnecessary semicolons
		"no-func-assign": 1,					// disallow overwriting functions written as function declarations
		"no-inner-declarations": 1,	 // disallow function or variable declarations in nested blocks
		"no-invalid-regexp": 1,			 // disallow invalid regular expression strings in the RegExp constructor
		"no-irregular-whitespace": 1, // disallow irregular whitespace outside of strings and comments
		"no-negated-in-lhs": 1,			 // disallow negation of the left operand of an in expression
		"no-obj-calls": 1,						// disallow the use of object properties of the global object (Math and JSON) as functions
		"no-regex-spaces": 1,				 // disallow multiple spaces in a regular expression literal
		"no-sparse-arrays": 1,				// disallow sparse arrays
		"no-unreachable": 1,					// disallow unreachable statements after a return, throw, continue, or break statement
		"use-isnan": 1,							 // disallow comparisons with the value NaN
		"valid-jsdoc": 0,						 // Ensure JSDoc comments are valid (off by default)
		"valid-typeof": 1,						// Ensure that the results of typeof are compared against a valid string


		////////// Best Practices //////////

		"block-scoped-var": 0,			// treat var statements as if they were block scoped (off by default)
		"complexity": 0,						// specify the maximum cyclomatic complexity allowed in a program (off by default)
		"consistent-return": 0,		 // require return statements to either always or never specify values
		"curly": 1,								 // specify curly brace conventions for all control statements
		"default-case": 0,					// require default case in switch statements (off by default)
		"eqeqeq": 0,								// require the use of === and !==
		"guard-for-in": 0,					// make sure for-in loops have an if statement (off by default)
		"no-alert": 0,							// disallow the use of alert, confirm, and prompt
		"no-caller": 0,						 // disallow use of arguments.caller or arguments.callee
		"no-div-regex": 0,					// disallow division operators explicitly at beginning of regular expression (off by default)
		"no-else-return": 0,				// disallow else after a return in an if (off by default)
		"no-empty-label": 0,				// disallow use of labels for anything other then loops and switches
		"no-eq-null": 0,						// disallow comparisons to null without a type-checking operator (off by default)
		"no-eval": 0,							 // disallow use of eval()
		"no-extend-native": 0,			// disallow adding to native types
		"no-extra-bind": 1,				 // disallow unnecessary function binding
		"no-fallthrough": 0,				// disallow fallthrough of case statements
		"no-floating-decimal": 0,	 // disallow the use of leading or trailing decimal points in numeric literals (off by default)
		"no-implied-eval": 0,			 // disallow use of eval()-like methods
		"no-labels": 0,						 // disallow use of labeled statements
		"no-lone-blocks": 0,				// disallow unnecessary nested blocks
		"no-loop-func": 1,					// disallow creation of functions within loops
		"no-multi-spaces": 1,			 // disallow use of multiple spaces
		"no-multi-str": 1,					// disallow use of multiline strings
		"no-native-reassign": 0,		// disallow reassignments of native objects
		"no-new": 0,								// disallow use of new operator when not part of the assignment or comparison
		"no-new-func": 1,					 // disallow use of new operator for Function object
		"no-new-wrappers": 1,			 // disallows creating new instances of String, Number, and Boolean
		"no-octal": 1,							// disallow use of octal literals
		"no-octal-escape": 1,			 // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
		"no-process-env": 0,				// disallow use of process.env (off by default)
		"no-proto": 0,							// disallow usage of __proto__ property
		"no-redeclare": 1,					// disallow declaring the same variable more then once
		"no-return-assign": 0,			// disallow use of assignment in return statement
		"no-script-url": 0,				 // disallow use of javascript: urls.
		"no-self-compare": 0,			 // disallow comparisons where both sides are exactly the same (off by default)
		"no-sequences": 1,					// disallow use of comma operator
		"no-unused-expressions": 1, // disallow usage of expressions in statement position
		"no-void": 0,							 // disallow use of void operator (off by default)
		"no-warning-comments": 0,	 // disallow usage of configurable warning terms in comments, e.g. TODO or FIXME (off by default)
		"no-with": 0,							 // disallow use of the with statement
		"radix": 2,								 // require use of the second argument for parseInt() (off by default)
		"vars-on-top": 0,					 // requires to declare all vars on top of their containing scope (off by default)
		"wrap-iife": 0,						 // require immediate function invocation to be wrapped in parentheses (off by default)
		"yoda": 0,									// require or disallow Yoda conditions


		////////// Strict Mode //////////

		"global-strict": 0,	 // (deprecated) require or disallow the "use strict" pragma in the global scope (off by default in the node environment)
		"no-extra-strict": 0, // (deprecated) disallow unnecessary use of "use strict"; when already in strict mode
		"strict": 0,					// controls location of Use Strict Directives


		////////// Variables //////////

		"no-catch-shadow": 1,						 // disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
		"no-delete-var": 1,							 // disallow deletion of variables
		"no-label-var": 1,								// disallow labels that share a name with a variable
		"no-shadow": 1,									 // disallow declaration of variables already declared in the outer scope
		"no-shadow-restricted-names": 1,	// disallow shadowing of names such as arguments
		"no-undef": 1,										// disallow use of undeclared variables unless mentioned in a /*global */ block
		"no-undef-init": 1,							 // disallow use of undefined when initializing variables
		"no-undefined": 0,								// disallow use of undefined variable (off by default)
		"no-unused-vars": [2, {"vars": "all", "args": "none", "varsIgnorePattern": "React"}],							// disallow declaration of variables that are not used in the code
		"no-use-before-define": 0,				// disallow use of variables before they are defined


		////////// Node.js //////////

		"handle-callback-err": 0,	 // enforces error handling in callbacks (off by default) (on by default in the node environment)
		"no-mixed-requires": 0,		 // disallow mixing regular variable and require declarations (off by default) (on by default in the node environment)
		"no-new-require": 0,				// disallow use of new operator with the require function (off by default) (on by default in the node environment)
		"no-path-concat": 0,				// disallow string concatenation with __dirname and __filename (off by default) (on by default in the node environment)
		"no-process-exit": 0,			 // disallow process.exit() (on by default in the node environment)
		"no-restricted-modules": 0, // restrict usage of specified node modules (off by default)
		"no-sync": 0,							 // disallow use of synchronous methods (off by default)


		////////// Stylistic Issues //////////

		"brace-style": [2, "stroustrup", { "allowSingleLine": true }],							 // enforce one true brace style (off by default)
		"camelcase": 1,								 // require camel case names
		"comma-spacing": 0,						 // enforce spacing before and after comma
		"comma-style": 1,							 // enforce one true comma style (off by default)
		"consistent-this": 0,					 // enforces consistent naming when capturing the current execution context (off by default)
		"eol-last": [2, "never"],			 // enforce newline at the end of file, with no multiple empty lines
		"func-names": 0,								// require function expressions to have a name (off by default)
		"func-style": [0, "declaration", { "allowArrowFunctions": true }],								// enforces use of function declarations or expressions (off by default)
		"key-spacing": 0,							 // enforces spacing between keys and values in object literal properties
		"max-nested-callbacks": 0,			// specify the maximum depth callbacks can be nested (off by default)
		"new-cap": [ 2, { "capIsNewExceptions": [] } ],									 // require a capital letter for constructors
		"new-parens": 0,								// disallow the omission of parentheses when invoking a constructor with no arguments
		"no-array-constructor": 1,			// disallow use of the Array constructor
		"no-inline-comments": 0,				// disallow comments inline after code (off by default)
		"no-lonely-if": 0,							// disallow if as the only statement in an else block (off by default)
		"no-mixed-spaces-and-tabs": 1,	// disallow mixed spaces and tabs for indentation
		"no-multiple-empty-lines": 0,	 // disallow multiple empty lines (off by default)
		"no-nested-ternary": 0,				 // disallow nested ternary expressions (off by default)
		"no-new-object": 1,						 // disallow use of the Object constructor
		"semi-spacing": 1,			// disallow space before semicolon
		"no-spaced-func": 1,						// disallow space between function identifier and application
		"no-ternary": 0,								// disallow the use of ternary operators (off by default)
		"no-trailing-spaces": 1,				// disallow trailing whitespace at the end of lines
		"no-underscore-dangle": 1,			// disallow dangling underscores in identifiers
		"no-wrap-func": 0,							// disallow wrapping of non-IIFE statements in parens
		"one-var": [2, "never"],									 // allow just one var statement per function (off by default)
		"operator-assignment": 0,			 // require assignment operator shorthand where possible or prohibit it entirely (off by default)
		"padded-blocks": [ 2, "never"],						 // enforce padding within blocks (off by default)
		"quote-props": [ 1, "as-needed" ],							 // require quotes around object literal property names (off by default)
		"quotes": [ 1, "single" ],										// specify whether double or single quotes should be used
		"semi": [2, "never"],											// require or disallow use of semicolons instead of ASI
		"sort-vars": 0,								 // sort variables within the same declaration block (off by default)
		"space-after-function-name": 0, // require a space after function names (off by default)
		"keyword-spacing": 1,			// require a space after certain keywords (off by default)
		"space-before-blocks": 2,			 // require or disallow space before blocks (off by default)
		"space-in-brackets": 0,				 // require or disallow spaces inside brackets (off by default)
		"space-in-parens": [ 2, "never" ],					 // require or disallow spaces inside parentheses (off by default)
		"space-infix-ops": 1,					 // require spaces around operators
		"space-return-throw-case": 0,	 // require a space after return, throw, and case
		"space-unary-ops": 0,					 // Require or disallow spaces before/after unary operators (words on by default, nonwords off by default)
		"spaced-line-comment": 0,			 // require or disallow a space immediately following the // in a line comment (off by default)
		"wrap-regex": 0,								// require regex literals to be wrapped in parentheses (off by default)


		////////// ECMAScript 6 //////////

		"no-var": 1,					// require let or const instead of var (off by default)
		"generator-star": 0,	// enforce the position of the * in generator functions (off by default)


		////////// React //////////
		"react/jsx-uses-react": "error",
		"react/jsx-uses-vars": "error",


		////////// Legacy //////////

		"max-depth": 0,			 // specify the maximum depth that blocks can be nested (off by default)
		"max-len": [ 2, 120, 1],				 // specify the maximum length of a line in your program (off by default)
		"max-params": 0,			// limits the number of parameters that can be used in the function declaration. (off by default)
		"max-statements": 0,	// specify the maximum number of statement allowed in a function (off by default)
		"no-bitwise": 0,			// disallow use of bitwise operators (off by default)
		"no-plusplus": 2,			// disallow use of unary operators, ++ and -- (off by default)


		"object-shorthand": 1,
		"array-callback-return": 1,
		"prefer-template": 2,
		"template-curly-spacing": [2, "always"],
		"no-useless-escape": 0,
		"prefer-rest-params": 0,
		"space-before-function-paren": [2, "never"],
		"no-param-reassign": 2, // Never mutate parameters
		"prefer-spread": 2, // Prefer the use of the spread operator
		"prefer-arrow-callback": 2, // use arrow function notation. 
		"arrow-spacing": 2,
		"arrow-parens": [ 2, "as-needed" ],
		//"arrow-body-style": 2
		"no-confusing-arrow": 2, // Avoid confusing arrow function syntax (=>) with comparison operators (<=, >=)
		"no-useless-constructor": 2, // An empty constructor function or one that just delegates to a parent class is unnecessary
		"no-dupe-class-members": 2, // Avoid duplicate class members.
		"no-duplicate-imports": 2,
		"no-iterator": 2, // Don't use iterators. Prefer JavaScript's higher-order functions instead of loops like for-in or for-of
		"no-restricted-syntax": 2,
		"dot-notation": 2, // Use dot notation when accessing properties
		//"prefer-const": 2,
		//"spaced-comment": 2,
		"indent": ["error", "tab", { "SwitchCase": 1 }],
		"newline-per-chained-call": 2, // Use indentation when making long method chains (more than 2 method chains). Use a leading dot, which emphasizes that the line is a method call
		"no-whitespace-before-property": 2,
		"object-curly-spacing": [ 2, "always" ],
		"array-bracket-spacing": [ 2, "always" ],
		"id-length": [ 2, { "properties": "always", "exceptions": ['i', 'j', 'x', 'y', 'z', '$', 'h' ] } ],
		//"cmsbox/camelcase": 2
	}
}


/* TO consider:
- eqeqeq
- no-underscore-dangle

*/ 