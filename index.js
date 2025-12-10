import{a as c,S as u,i as l}from"./assets/vendor-CNqCr-V-.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();function p(r){return c.get(r,{params:{key:"53631669-5f3764d338a9b02a712e297a2",q:input.value,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data)}let d=new u(".gallery a",{captionsData:"alt",captionDelay:250});function f(){const r=document.querySelector(".loader");r.style.display="block"}function m(){const r=document.querySelector(".loader");r.style.display="none"}function y(r){const s=document.querySelector(".gallery"),i=r.map(t=>`
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
		`).join("");s.insertAdjacentHTML("beforeend",i),d.refresh()}function g(){const r=document.querySelector(".gallery");r.innerHTML=""}const n=document.querySelector(".form"),h=n.elements["search-text"];n.addEventListener("submit",r=>{if(r.preventDefault(),g(),!h.value.trim()){l.warning({message:"Your entering data must be correct",position:"topRight"});return}const s=p("https://pixabay.com/api");f(),s.then(i=>{const t=i.hits;t.length||l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),y(t)}).catch(i=>{l.error({message:i.message,position:"topRight"})}).finally(()=>{m()})});
//# sourceMappingURL=index.js.map
