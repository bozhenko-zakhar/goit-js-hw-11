import axios from "axios";

export default function getImagesByQuery(query) {
	return axios.get("https://pixabay.com/api", {
		params: {
			key: query.key,
			q: query.q,
			image_type: query.image_type,
			orientation: query.orientation,
			safesearch: query.safesearch
		}
	}).then(response => {
		return response.data
	});
}