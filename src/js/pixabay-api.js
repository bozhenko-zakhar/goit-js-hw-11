import axios from "axios";

export default function getImagesByQuery(query) {
	return axios.get(query, {
		params: {
			key: "53631669-5f3764d338a9b02a712e297a2",
			image_type: "photo",
			orientation: "horizontal",
			safesearch: true
		}
	}).then(response => {
		return response.data
	});
}