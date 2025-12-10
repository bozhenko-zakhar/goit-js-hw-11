import{a as u,S as p,i as n}from"./assets/vendor-CNqCr-V-.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();function d(e){return u.get("https://pixabay.com/api",{params:{key:e.key,q:e.q,image_type:e.image_type,orientation:e.orientation,safesearch:e.safesearch}}).then(a=>a.data)}let f=new p(".gallery a",{captionsData:"alt",captionDelay:250});function m(){const e=document.querySelector(".loader");e.style.display="block"}function y(){const e=document.querySelector(".loader");e.style.display="none"}function g(e){const a=document.querySelector(".gallery"),s=e.map(r=>`
			<li class="gallery-item">
				<a class="gallery-link" href="${r.largeImageURL}">
					<img
						class="gallery-image"
						src="${r.webformatURL}"
						alt="${r.tags}"
					/>
				</a>
					<ul class="image-desc">
						<li>
							<p>Likes</p>
							<p>${r.likes}</p>
						</li>
						<li>
							<p>Views</p>
							<p>${r.views}</p>
						</li>
						<li>
							<p>Comments</p>
							<p>${r.comments}</p>
						</li>
						<li>
							<p>Downloads</p>
							<p>${r.downloads}</p>
						</li>
					</ul>
			</li>
		`).join("");a.insertAdjacentHTML("beforeend",s),f.refresh()}function h(){const e=document.querySelector(".gallery");e.innerHTML=""}const c=document.querySelector(".form"),l=c.elements["search-text"];c.addEventListener("submit",e=>{if(e.preventDefault(),h(),!l.value.trim()){n.warning({message:"Your entering data must be correct",position:"topRight"});return}const a=d({key:"53631669-5f3764d338a9b02a712e297a2",q:l.value,image_type:"photo",orientation:"horizontal",safesearch:!0});m(),a.then(s=>{y();const r=s.hits;if(!r.length)throw new Error;g(r)}).catch(()=>{n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})})});
//# sourceMappingURL=index.js.map
