const experienceButtons = document.querySelectorAll(".experiencia-button");

experienceButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const card = button.closest(".experiencia-card");
        const isOpen = card.classList.toggle("open");
        button.setAttribute("aria-expanded", isOpen);
        button.textContent = isOpen
            ? "> Cerrar Registro"
            : "> Abrir Registro";
    });

});