const proyectos = document.querySelectorAll(".proyectos-item");

const imagen = document.querySelector(".proyecto-photo img");

const numero = document.querySelector(".proyecto-number");

const titulo = document.querySelector(".proyecto-info h2");

const descripcion = document.querySelector(".proyecto-info > p");

const tecnologias = document.querySelectorAll(".proyecto-dato p")[0];

const herramientas = document.querySelectorAll(".proyecto-dato p")[1];

const estado = document.querySelectorAll(".proyecto-dato p")[2];

const enlace = document.querySelector(".proyecto-link");

const datosProyectos = [
    {
        numero: "Proyecto//001",
        titulo: "Portfolio Web Personal",
        imagen: "assets/img/Proyectos/Proyecto-1.png",
        descripcion: "Portfolio personal desarrollado desde cero como una interfaz retro inspirada en videojuegos y terminales clásicas",
        tecnologias: "HTML · CSS · JavaScript",
        herramientas: "VS Code · Git · Figma",
        estado: "En desarrollo",
        url: "#",
        abrir:true,
    },
    {
        numero: "Proyecto//002",
        titulo: "Code Gold Machine",
        imagen: "assets/img/Proyectos/Proyecto-2.png",
        descripcion: "Máquina virtual creada en Linux Ubuntu preparada al 100% para programadores, con programas como VS Code, Git, Docker, Node.js, Pythin y muchos más, además de tener un entorno gráfico muy bonito y optimizado para programar",
        tecnologias: "Linux Ubuntu · VS Code · Git · Docker · Node.js · Python",
        herramientas: "VirtualBox",
        estado: "Completada",
        url: "#",
        abrir: false
    },
    {
        numero: "Proyecto//003",
        titulo: "Web de Notas",
        imagen: "assets/img/Proyectos/Proyecto-3.png",
        descripcion: "Esta web está desarrollada con React, sirve para poder apuntar notas en las típicas sticky-notes, tiene varias funciones como cambiar de color las notas o poder desplazarlas según se quiera",
        tecnologias: "React · CSS · HTML · JavaScript",
        herramientas: "VS Code · Git · Figma",
        estado: "En desarrollo",
        url: "#",
        abrir: false
    },
    {
        numero: "Proyecto//004",
        titulo: "Impresión 3D",
        imagen: "assets/img/Proyectos/Proyecto-1.png",
        descripcion: "Una recopilación de los mejores proyectos que tengo en modelaje e impresión 3D, estos proyectos han sido diseñados en Fusion360 o Blender",
        tecnologias: "Fusion360 · Blender · OrcaSlicer · Anycubic",
        herramientas: "Impresora 3D Anycubic Kobra X",
        estado: "En desarrollo",
        url: "#",
        abrir: true
    }
];


proyectos.forEach((proyecto, index) => {

    proyecto.addEventListener("mouseenter", () => {
        proyectos.forEach((item) => {
            item.classList.remove("active");
        });
        proyecto.classList.add("active");
        const datos = datosProyectos[index];
        imagen.src = datos.imagen;
        numero.textContent = datos.numero;
        titulo.textContent = datos.titulo;
        descripcion.textContent = datos.descripcion;
        tecnologias.textContent = datos.tecnologias;
        herramientas.textContent = datos.herramientas;
        estado.textContent = datos.estado;
        if (datos.abrir) {
        enlace.style.display = "inline-block";
        enlace.href = datos.url;
            } else {
                enlace.style.display = "none";
            }
        enlace.href = datos.url;
    });
});