export const getRelativeValue = (absoluteValue, min, max) => (absoluteValue - min) / (max - min);
export const getAbsoluteValue = (relativeValue, min, max) => Math.floor((max - min) * relativeValue) + min;
