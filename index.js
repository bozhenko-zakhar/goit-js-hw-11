import{a as u,S as p,i as l}from"./assets/vendor-CNqCr-V-.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();function d(r){return u.get(r,{params:{key:"53631669-5f3764d338a9b02a712e297a2",image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data)}let f=new p(".gallery a",{captionsData:"alt",captionDelay:250});function m(){const r=document.querySelector(".loader");r.style.display="block"}function y(){const r=document.querySelector(".loader");r.style.display="none"}function g(r){const s=document.querySelector(".gallery"),i=r.map(t=>`
			<li class="gallery-item">
				<a class="gallery-link" href="${t.largeImageURL}">
					<img
						class="gallery-image"
						src="${t.webformatURL}"
						alt="${t.tags}"
					/>
				</a>
					<ul class="image-desc">
						<li>
							<p>Likes</p>
							<p>${t.likes}</p>
						</li>
						<li>
							<p>Views</p>
							<p>${t.views}</p>
						</li>
						<li>
							<p>Comments</p>
							<p>${t.comments}</p>
						</li>
						<li>
							<p>Downloads</p>
							<p>${t.downloads}</p>
						</li>
					</ul>
			</li>
		`).join("");s.insertAdjacentHTML("beforeend",i),f.refresh()}function h(){const r=document.querySelector(".gallery");r.innerHTML=""}const c=document.querySelector(".form"),n=c.elements["search-text"];c.addEventListener("submit",r=>{if(r.preventDefault(),h(),!n.value.trim()){l.warning({message:"Your entering data must be correct",position:"topRight"});return}const s=d(`https://pixabay.com/api?q=${n.value}`);m(),s.then(i=>{const t=i.hits;t.length||l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),g(t)}).catch(i=>{l.error({message:i.message,position:"topRight"})}).finally(()=>{y()})});
//# sourceMappingURL=index.js.map
