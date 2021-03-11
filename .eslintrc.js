module.exports = {
	root: true,
	extends: ['@react-native-community/eslint-config'],
	parser: '@typescript-eslint/parser',
	rules: {
		'linebreak-style': ['error', 'unix'],
		'no-cond-assign': ['error', 'always'],
		'no-console': 'off',
		'prettier/prettier': 0,
		indent: ['error', 'tab', { 'SwitchCase': 1 }],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'jsx-quotes': ['error', 'prefer-single']
	}
};
