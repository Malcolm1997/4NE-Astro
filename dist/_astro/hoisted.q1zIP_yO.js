import"./hoisted.T6b212Zv.js";const b="modulepreload",f=function(c){return"/"+c},v={},h=function(m,l,u){let n=Promise.resolve();if(l&&l.length>0){const t=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),p=s?.nonce||s?.getAttribute("nonce");n=Promise.all(l.map(e=>{if(e=f(e),e in v)return;v[e]=!0;const i=e.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(!!u)for(let d=t.length-1;d>=0;d--){const g=t[d];if(g.href===e&&(!i||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${o}`))return;const r=document.createElement("link");if(r.rel=i?"stylesheet":b,i||(r.as="script",r.crossOrigin=""),r.href=e,p&&r.setAttribute("nonce",p),document.head.appendChild(r),i)return new Promise((d,g)=>{r.addEventListener("load",d),r.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${e}`)))})}))}return n.then(()=>m()).catch(t=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=t,window.dispatchEvent(s),!s.defaultPrevented)throw t})};document.addEventListener("DOMContentLoaded",function(){const c=document.getElementById("service-container"),m={oilgas:"../public/assets/img/Fotos-Serv/oilgas.webp",ingelectrica:"../public/assets/img/Fotos-Serv/ingelectrica.webp",mecanica:"../public/assets/img/Fotos-Serv/mecanica.webp",nuclear:"../public/assets/img/Fotos-Serv/nuclear.webp",agroindustria:"../public/assets/img/Fotos-Serv/agroindustria.webp",mineria:"../public/assets/img/Fotos-Serv/mineria.webp",personalizado:"../public/assets/img/Fotos-Serv/personalizado.webp",rsu:"../public/assets/img/Fotos-Serv/rsu.webp",fotovoltaica:"../public/assets/img/Fotos-Serv/fotovoltaica.webp",biogas:"../public/assets/img/Fotos-Serv/biogas.webp",biofertilizantes:"../public/assets/img/Fotos-Serv/biofertilizantes.webp",personalizadoRen:"../public/assets/img/Fotos-Serv/personalizadoRen.webp"};let l=()=>new Promise((n,t)=>{const s=localStorage.getItem("pagTipo");s?n(s):t("Error al cargar los datos")});function u(n){h(()=>import("./servicios.BawIkMdj.js"),[]).then(t=>{const s=n==="ing"?t.ingenieria.services:t.renovables.services;c.innerHTML="",s.map((e,i)=>{const o=document.createElement("div");o.classList.add("serv-card"),o.innerHTML=`
							<hr class="has-background-black" />
							<div class="serv-card" id="card-${i}">
							<header class="card-header">
								<h3 class="card-header-title is-size-3">${e.title}</h3>
								<button class="card-header-icon toggle-button" aria-label="more options" data-index="${i}">
								<span class="icon">
									<i class="fas fa-angle-down" aria-hidden="true"></i>
								</span>
								</button>
							</header>
							<div class="card-content card-content-serv is-flex is-align-items-center" id="card-content-${i}">
								<div class="content content-serv mr-6 text-serv">
								<p>${e.description}</p>
								<h4><b>Servicios ofrecidos:</b></h4>
								<ol>
									${e.service.map(a=>`<li class="ml-6 my-3"><b>${a.title}:</b> ${a.description}</li>`).join("")}
								</ol>
								<p>${e.conclusion}</p>
								</div>
								<div class="img-serv">
								<img class="is-square image image-ser" src="${m[e.img]}" alt="${e.title}" />
								</div>
							</div>
							</div>
						`,c.appendChild(o)}),document.querySelectorAll(".toggle-button").forEach(e=>{e.addEventListener("click",function(){const i=e.getAttribute("data-index"),o=document.getElementById(`card-content-${i}`),a=e.querySelector(".icon i");o.classList.contains("active")?(o.classList.remove("active"),a.classList.remove("fa-angle-up"),a.classList.add("fa-angle-down")):(o.classList.add("active"),a.classList.remove("fa-angle-down"),a.classList.add("fa-angle-up"))})})})}l().then(n=>{u(n)}),document.addEventListener("pagToggle",n=>{const t=n.detail.tipoPag;u(t)})});
