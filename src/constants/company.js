export const INDUSTRIES = {
	'mobile_apps': 'Мобильные приложения',
	'law_company': 'Юридическая компания',
};

export const INDUSTRIES_OPTIONS = Object.keys(INDUSTRIES).map(key => ({
	value: key,
	text: INDUSTRIES[key],
}));
