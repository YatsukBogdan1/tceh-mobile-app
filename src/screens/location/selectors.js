import moment from 'moment';

export const selectLocationData = (state, locationId) => {
	const rawLocation = state.locations.data[locationId];
	const comments = rawLocation.comments
		.sort((com1, com2) => com1.timestamp > com2.timestamp)
		.map(comment => ({
			user: comment.user,
			text: comment.text,
			date: moment(comment.timestamp).format('DD.MM.YYYY'),
		}));
	return {
		...rawLocation,
		gallery: selectGallery(state, locationId),
		comments,
	};
};

export const selectGallery = (state, locationId) => {
	const rawLocation = state.locations.data[locationId];
	let photosCount = 0;
	return rawLocation.gallery.map(item => {
		const galleryItem = {
			...item,
			photos: item.photos.map((photo, photoIndex) => ({
				photo,
				galleryIndex: photosCount + photoIndex,
			})),
		};
		photosCount += item.photos.length;
		return galleryItem;
	});
};
