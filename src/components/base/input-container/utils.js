import {
	CONTAINER_STATE,
	ERROR_ICON_HIDDEN_TRANSLATE_X,
	ERROR_ICON_VISIBLE_OUTLINED_TRANSLATE_X,
	ERROR_ICON_VISIBLE_REGULAR_TRANSLATE_X,
	ERROR_TEXT_HIDDEN_TRANSLATE_Y,
	ERROR_TEXT_VISIBLE_TRANSLATE_Y,
	LABEL_CENTER_FONT_SIZE,
	LABEL_CENTER_TRANSLATE_Y,
	LABEL_STATE,
	LABEL_TOP_FONT_SIZE,
	LABEL_TOP_TRANSLATE_Y,
} from './constants';
import { COLORS } from 'theme';

export const getLabelState = props => {
	const {
		active,
		error,
		labelPosition,
	} = props;
	switch (true) {
		case labelPosition === 'top' && Boolean(error): return LABEL_STATE.TOP_ERROR;
		case labelPosition === 'top' && active: return LABEL_STATE.TOP_ACTIVE;
		case labelPosition === 'top' && !active: return LABEL_STATE.TOP_INACTIVE;
		default:
		case labelPosition === 'center': return LABEL_STATE.CENTER;
	}
};

export const getContainerState = props => {
	const {
		active,
		error,
	} = props;
	switch (true) {
		case Boolean(error): return CONTAINER_STATE.ERROR;
		case active: return CONTAINER_STATE.ACTIVE;
		default:
		case !active: return CONTAINER_STATE.INACTIVE;
	}
};

export const getLabelTranslateY = props => {
	const labelState = getLabelState(props);
	switch (labelState) {
		case LABEL_STATE.TOP_ERROR:
		case LABEL_STATE.TOP_ACTIVE:
		case LABEL_STATE.TOP_INACTIVE:
			return LABEL_TOP_TRANSLATE_Y;
		default:
		case LABEL_STATE.CENTER:
			return LABEL_CENTER_TRANSLATE_Y;
	}
};

export const getLabelColor = props => {
	const labelState = getLabelState(props);
	switch (labelState) {
		case LABEL_STATE.TOP_ERROR:
			return COLORS.RED_COLOR;
		case LABEL_STATE.TOP_ACTIVE:
			return COLORS.MAIN_ORANGE_COLOR;
		default:
		case LABEL_STATE.TOP_INACTIVE:
		case LABEL_STATE.CENTER:
			return COLORS.DARK_GREY;
	}
};

export const getLabelFontSize = props => {
	const labelState = getLabelState(props);
	switch (labelState) {
		case LABEL_STATE.TOP_ERROR:
		case LABEL_STATE.TOP_ACTIVE:
		case LABEL_STATE.TOP_INACTIVE:
			return LABEL_TOP_FONT_SIZE;
		default:
		case LABEL_STATE.CENTER:
			return LABEL_CENTER_FONT_SIZE;
	}
};

export const getContainerColor = props => {
	const containerState = getContainerState(props);
	switch (containerState) {
		case CONTAINER_STATE.ERROR:
			return COLORS.RED_COLOR;
		case CONTAINER_STATE.ACTIVE:
			return COLORS.MAIN_ORANGE_COLOR;
		default:
		case CONTAINER_STATE.INACTIVE:
			return COLORS.LIGHT_GREY;
	}
};

export const getLabelAnimatedValues = props => ({
	labelTranslateY: getLabelTranslateY(props),
	labelFontSize: getLabelFontSize(props),
	labelColor: getLabelColor(props),
});

export const getContainerAnimatedValues = props => ({
	containerColor: getContainerColor(props),
});

export const getErrorAnimatedValues = props => {
	let errorIconTranslateX = 0;
	if (!props.error) {
		errorIconTranslateX = ERROR_ICON_HIDDEN_TRANSLATE_X;
	} else if (props.outlined) {
		errorIconTranslateX = ERROR_ICON_VISIBLE_OUTLINED_TRANSLATE_X;
	} else {
		errorIconTranslateX = ERROR_ICON_VISIBLE_REGULAR_TRANSLATE_X;
	}

	return {
		errorTextTranslateY: props.error ? ERROR_TEXT_VISIBLE_TRANSLATE_Y : ERROR_TEXT_HIDDEN_TRANSLATE_Y,
		errorIconTranslateX,
	};
};

export const getAnimatedValues = props => ({
	...getLabelAnimatedValues(props),
	...getContainerAnimatedValues(props),
	...getErrorAnimatedValues(props),
});
