document.addEventListener("DOMContentLoaded", function () {

    const toggleVisibility = (tipoPag) => {
        const serviceContainerTitle = document.getElementById("title-secction-ing") 
        const proyectContainerTitle = document.getElementById("title-secction-ing-proyect");
        
        const ingenieriaContainer = document.getElementById("service-ing-container");
        const renovablesContainer = document.getElementById("service-ren-container");


        if (tipoPag === "ing") {
            serviceContainerTitle ? serviceContainerTitle.innerHTML = "Servicios de Ingeniería: Consultoría y Desarrollo de Proyectos" : proyectContainerTitle.innerHTML = "Proyectos de Ingeniería: Innovación y Soluciones Eficientes"
            ingenieriaContainer.classList.add("visible");
            ingenieriaContainer.classList.remove("hidden");
            renovablesContainer.classList.add("hidden");
            renovablesContainer.classList.remove("visible");
        } else {
            serviceContainerTitle ? serviceContainerTitle.innerHTML = "Servicios de Energías Renovables: Consultoría y Ejecución de Proyectos" : proyectContainerTitle.innerHTML = "Proyectos en Energías Renovables: Sostenibilidad y Eficiencia"
            ingenieriaContainer.classList.add("hidden");
            ingenieriaContainer.classList.remove("visible");
            renovablesContainer.classList.add("visible");
            renovablesContainer.classList.remove("hidden");
        }
    };

    const buttons = document.querySelectorAll(".toggle-button");
    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const index = button.getAttribute("data-index");
            const content = document.getElementById(
                `card-content-${index}`
            );
            const icon = button.querySelector(".icon i");
            if (content.classList.contains("active")) {
                content.classList.remove("active");
                icon.classList.remove("fa-angle-up");
                icon.classList.add("fa-angle-down");
            } else {
                content.classList.add("active");
                icon.classList.remove("fa-angle-down");
                icon.classList.add("fa-angle-up");
            }
        });
    });

    document.addEventListener("pagToggle", (e) => {
        const tipoPag = e.detail.tipoPag;
        toggleVisibility(tipoPag);
    });

    const tipoPag = localStorage.getItem("pagTipo") || "ing";
    toggleVisibility(tipoPag);
});