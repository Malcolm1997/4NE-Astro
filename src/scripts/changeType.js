document.addEventListener("DOMContentLoaded", function () {

    // Función para alternar la visibilidad de las secciones de servicios
    const toggleVisibility = (tipoPag) => {
        const serviceContainerTitle = document.getElementById("title-secction-ing");
        const proyectContainerTitle = document.getElementById("title-secction-ing-proyect");
        
        const ingenieriaContainer = document.getElementById("service-ing-container");
        const renovablesContainer = document.getElementById("service-ren-container");

        if (tipoPag === "ing") {
            serviceContainerTitle ? serviceContainerTitle.innerHTML = "Servicios de Oil & Gas: Consultoría y Desarrollo de Proyectos" : proyectContainerTitle.innerHTML = "Proyectos de Oil & Gas: Innovación y Soluciones Eficientes";
            ingenieriaContainer.classList.add("visible");
            ingenieriaContainer.classList.remove("hidden");
            renovablesContainer.classList.add("hidden");
            renovablesContainer.classList.remove("visible");
        } else {
            serviceContainerTitle ? serviceContainerTitle.innerHTML = "Servicios de Energías Renovables: Consultoría y Ejecución de Proyectos" : proyectContainerTitle.innerHTML = "Proyectos en Energías Renovables: Sostenibilidad y Eficiencia";
            ingenieriaContainer.classList.add("hidden");
            ingenieriaContainer.classList.remove("visible");
            renovablesContainer.classList.add("visible");
            renovablesContainer.classList.remove("hidden");
        }
    };
    // Expose for testing
    window.toggleVisibility = toggleVisibility;

    // Selección de todos los encabezados de las tarjetas
    const headers = document.querySelectorAll(".card-header.toggle-button");
    headers.forEach((header) => {
        header.addEventListener("click", function () {
            const index = header.getAttribute("data-index");
            const content = document.getElementById(`card-content-${index}`);
            const icon = header.querySelector(".arrow-icon"); // Selección del ícono de la flecha

            // Alternar la clase `active` para mostrar u ocultar el contenido
            if (content.classList.contains("active")) {
                content.classList.remove("active");
                icon.classList.remove("rotate"); // Remueve la rotación si está cerrado
            } else {
                content.classList.add("active");
                icon.classList.add("rotate"); // Añade la rotación si está abierto
            }
        });
    });

    // Alterna entre tipos de servicios al recibir un evento `pagToggle`
    document.addEventListener("pagToggle", (e) => {
        const tipoPag = e.detail.tipoPag;
        toggleVisibility(tipoPag);
    });

    // Configuración inicial basada en `localStorage`
    const tipoPag = localStorage.getItem("pagTipo") || "ing";
    toggleVisibility(tipoPag);
});