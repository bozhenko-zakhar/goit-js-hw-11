import getImagesByQuery from "./js/pixabay-api.js"
import { showLoader, hideLoader, createGallery, clearGallery } from "./js/render-functions.js"
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const input = form.elements["search-text"];

form.addEventListener("submit", e => {
	e.preventDefault();

	clearGallery();

	if (!input.value.trim()) {
		iziToast.warning({
				message: "Your entering data must be correct",
				position: "topRight"
			});

		return
	} 

	const promise = getImagesByQuery("https://pixabay.com/api");

	showLoader();

	promise.then(data => {
		const hits = data.hits;
		
		if (!hits.length) {
			iziToast.error({
					message: "Sorry, there are no images matching your search query. Please try again!",
					position: "topRight"
			});
		}

		createGallery(hits);
	}).catch((error) => {
		iziToast.error({
				message: error.message,
				position: "topRight"
		});
	}).finally(() => {
		hideLoader();
	})
})