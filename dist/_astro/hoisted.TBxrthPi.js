import"./hoisted.T6b212Zv.js";document.addEventListener("DOMContentLoaded",function(){const o=n=>{const t=document.getElementById("title-secction-ing"),i=document.getElementById("title-secction-ing-proyect"),e=document.getElementById("service-ing-container"),s=document.getElementById("service-ren-container");n==="ing"?(t?t.innerHTML="Servicios - Ingenieria":i.innerHTML="Proyectos - Ingenieria",e.classList.add("visible"),e.classList.remove("hidden"),s.classList.add("hidden"),s.classList.remove("visible")):(t?t.innerHTML="Servicios - Renovables":i.innerHTML="Proyectos - Renovables",e.classList.add("hidden"),e.classList.remove("visible"),s.classList.add("visible"),s.classList.remove("hidden"))};document.querySelectorAll(".toggle-button").forEach(n=>{n.addEventListener("click",function(){const t=n.getAttribute("data-index"),i=document.getElementById(`card-content-${t}`),e=n.querySelector(".icon i");i.classList.contains("active")?(i.classList.remove("active"),e.classList.remove("fa-angle-up"),e.classList.add("fa-angle-down")):(i.classList.add("active"),e.classList.remove("fa-angle-down"),e.classList.add("fa-angle-up"))})}),document.addEventListener("pagToggle",n=>{const t=n.detail.tipoPag;o(t)});const c=localStorage.getItem("pagTipo")||"ing";o(c)});
